/**
 * Fluent API generator from OpenAPI endpoints.
 */

import {
    ParsedEndpoint,
    ResourceGroup,
    ParameterObject,
    SchemaObject,
} from './openapi-parser';
import {
    snakeToCamel,
    snakeToPascal,
    extractPathParams,
    sanitizeIdentifier,
} from './naming-utils';

interface MethodInfo {
    name: string;
    httpMethod: string;
    path: string;
    operationId: string;
    pathParams: ParameterObject[];
    queryParams: ParameterObject[];
    hasRequestBody: boolean;
    requestBodyRequired: boolean;
    returnType: string;
    hasResponseSchema: boolean;
    summary?: string;
    originalFirstParamName?: string; // Original param name in path for URL replacement
}

/**
 * Generate the ZoomApi class from resource groups.
 */
export function generateApiClass(groups: ResourceGroup[]): string {
    const lines: string[] = [
        '/**',
        ' * Auto-generated Zoom API client from OpenAPI spec.',
        ' * Do not edit manually - run `npm run generate` to regenerate.',
        ' */',
        '',
        "import { ZoomTokens, ZoomError } from './types';",
        "import { ZoomClient } from './zoomClient';",
        "import * as GeneratedTypes from './types.generated';",
        '',
        'export class ZoomApi {',
        '    private client: ZoomClient;',
        '    tokens: Partial<ZoomTokens>;',
        '',
        '    constructor(options: { client: ZoomClient; tokens: Partial<ZoomTokens> }) {',
        '        this.client = options.client;',
        '        this.tokens = options.tokens || {};',
        '    }',
        '',
        '    setTokens(tokens: Partial<ZoomTokens>) {',
        '        this.tokens = tokens;',
        '    }',
        '',
        '    private getAuthHeader() {',
        '        if (this.tokens?.access_token) {',
        '            return {',
        '                Authorization: `Bearer ${this.tokens.access_token}`,',
        '            };',
        '        }',
        "        throw new ZoomError('access_token not found');",
        '    }',
        '',
    ];

    // All resources now auto-generated (no manual backward-compatibility layer)
    const manualResources = new Set<string>();

    // Group resources (excluding manually implemented ones)
    const regularResources: ResourceGroup[] = [];
    const parameterizedResources: ResourceGroup[] = [];

    for (const group of groups) {
        // Skip resources that are manually implemented
        if (manualResources.has(group.name)) {
            continue;
        }

        if (group.isParameterized) {
            parameterizedResources.push(group);
        } else {
            regularResources.push(group);
        }
    }

    // Generate regular resource methods
    for (const group of regularResources) {
        lines.push(generateResourceMethod(group));
        lines.push('');
    }

    // Generate parameterized resource methods
    for (const group of parameterizedResources) {
        lines.push(generateParameterizedResourceMethod(group));
        lines.push('');
    }

    // Extra methods not covered by the OpenAPI spec
    lines.push(getExtraMethods());

    lines.push('}');

    return lines.join('\n');
}

/**
 * Extra methods that are not part of the OpenAPI spec but are needed.
 */
function getExtraMethods(): string {
    return `
    /** Retrieve a ZAK (Zoom Access Key) token for a user. See: https://developers.zoom.us/docs/api/meetings/#tag/users */
    getZAKToken(userId: string): Promise<{ token: string }> {
        return this.client.request({
            url: \`\${this.client.BASE_API_URL}/users/\${userId}/token\`,
            method: 'GET',
            headers: this.getAuthHeader(),
            params: { type: 'zak' },
        }) as any;
    }

    /** Download raw transcript content from a recording URL (e.g. a VTT file URL from listRecordings). Uses a 60s timeout. Only sends auth headers to Zoom-owned domains. */
    downloadTranscript(url: string): Promise<string> {
        const parsed = new URL(url);
        if (parsed.hostname !== 'zoom.us' && !parsed.hostname.endsWith('.zoom.us')) {
            throw new ZoomError('downloadTranscript only supports zoom.us URLs to prevent leaking auth tokens');
        }
        return this.client.request(
            {
                url,
                method: 'GET',
                headers: this.getAuthHeader(),
            },
            { requestTimeoutMs: 60000 },
        ) as any;
    }
`;
}

/**
 * Generate a regular resource method (e.g., meetings()).
 */
function generateResourceMethod(group: ResourceGroup): string {
    const lines: string[] = [];
    const methodName = group.name;

    lines.push(`    /** ${group.displayName} API methods */`);
    lines.push(`    ${methodName}() {`);
    lines.push(
        '        // eslint-disable-next-line @typescript-eslint/no-this-alias',
    );
    lines.push('        const self = this;');
    lines.push('        return {');

    // Generate methods for each endpoint
    const methods = generateResourceMethods(group.endpoints, group.name);
    for (const method of methods) {
        lines.push(generateMethod(method, 12));
    }

    lines.push('        };');
    lines.push('    }');

    return lines.join('\n');
}

/**
 * Generate a parameterized resource method (e.g., pastMeeting(meetingId)).
 */
function generateParameterizedResourceMethod(group: ResourceGroup): string {
    const lines: string[] = [];
    const methodName = group.name;
    const paramName = group.paramName || 'id';

    lines.push(`    /** ${group.displayName} API methods (parameterized) */`);
    lines.push(`    ${methodName}(${paramName}: string) {`);
    lines.push(
        '        // eslint-disable-next-line @typescript-eslint/no-this-alias',
    );
    lines.push('        const self = this;');
    lines.push('        return {');

    // Generate methods for each endpoint
    const methods = generateResourceMethods(
        group.endpoints,
        group.name,
        paramName,
    );
    for (const method of methods) {
        lines.push(generateMethod(method, 12, paramName));
    }

    lines.push('        };');
    lines.push('    }');

    return lines.join('\n');
}

/**
 * Get the name of the first path parameter in a path (the one right after the resource).
 * For /past_meetings/{meetingId}/participants, returns 'meetingId'.
 */
function getFirstPathParamName(path: string): string | undefined {
    const segments = path.split('/').filter(Boolean);
    for (const segment of segments) {
        if (segment.startsWith('{') && segment.endsWith('}')) {
            return segment.slice(1, -1);
        }
    }
    return undefined;
}

/**
 * Convert endpoints to method info, handling duplicate method names.
 */
function generateResourceMethods(
    endpoints: ParsedEndpoint[],
    resourceName: string,
    capturedParamName?: string,
): MethodInfo[] {
    const methods: MethodInfo[] = [];
    const usedNames = new Map<string, number>();

    for (const endpoint of endpoints) {
        let methodName = determineMethodName(endpoint, resourceName);
        const baseTypeName = operationIdToBaseTypeName(endpoint.operationId);

        // Handle duplicate method names by using operationId as fallback
        const existingCount = usedNames.get(methodName) || 0;
        if (existingCount > 0) {
            // Use a more descriptive name based on the operationId
            methodName = sanitizeIdentifier(endpoint.operationId);
            methodName =
                methodName.charAt(0).toLowerCase() + methodName.slice(1);
        }
        usedNames.set(methodName, existingCount + 1);

        // For parameterized resources, filter out the first path param (by position, not name)
        // This handles cases where different endpoints use different param names (e.g., meetingUUID vs meetingId)
        let pathParams = endpoint.pathParams;
        let originalFirstParamName: string | undefined;
        if (capturedParamName) {
            originalFirstParamName = getFirstPathParamName(endpoint.path);
            if (originalFirstParamName) {
                pathParams = endpoint.pathParams.filter(
                    (p) => p.name !== originalFirstParamName,
                );
            }
        }

        // Determine return type
        const hasResponseSchema = !!endpoint.responseSchema;
        let returnType = 'any';
        if (hasResponseSchema) {
            returnType = `GeneratedTypes.ZoomApi$${baseTypeName}$Response`;
        }

        methods.push({
            name: methodName,
            httpMethod: endpoint.method.toUpperCase(),
            path: endpoint.path,
            operationId: endpoint.operationId,
            pathParams,
            queryParams: endpoint.queryParams,
            hasRequestBody: !!endpoint.requestBody,
            requestBodyRequired: endpoint.requestBodyRequired || false,
            returnType,
            hasResponseSchema,
            summary: endpoint.summary,
            originalFirstParamName,
        });
    }

    return methods;
}

/**
 * Determine the method name from an endpoint.
 */
function determineMethodName(
    endpoint: ParsedEndpoint,
    resourceName: string,
): string {
    const operationId = endpoint.operationId;
    const method = endpoint.method;
    const path = endpoint.path;

    // Sanitize operationId first
    const sanitized = sanitizeIdentifier(operationId);

    // Extract sub-resource from path if any
    // e.g., /meetings/{meetingId}/polls -> polls
    const pathParts = path.split('/').filter(Boolean);
    let subResource = '';
    let parentResource = '';
    for (let i = pathParts.length - 1; i >= 0; i--) {
        const part = pathParts[i];
        if (!part.startsWith('{')) {
            if (!subResource) {
                subResource = snakeToCamel(part);
            } else if (!parentResource) {
                parentResource = snakeToCamel(part);
            }
        }
    }

    // Common CRUD patterns with sub-resource awareness
    const isSubResource =
        subResource &&
        subResource !== resourceName &&
        !subResource.includes('_');

    // POST = create
    if (method === 'post') {
        if (isSubResource) {
            // Handle special cases like /batch_registrants, /batch_polls
            if (subResource.startsWith('batch')) {
                return `createBatch${capitalize(subResource.replace('batch', ''))}`;
            }
            return `create${capitalize(singularize(subResource))}`;
        }
        return 'create';
    }

    // DELETE = delete
    if (method === 'delete') {
        if (isSubResource) {
            return `delete${capitalize(singularize(subResource))}`;
        }
        return 'delete';
    }

    // PATCH/PUT = update (unless it's a status update)
    if (method === 'patch' || method === 'put') {
        if (subResource === 'status') {
            return 'updateStatus';
        }
        if (isSubResource) {
            return `update${capitalize(singularize(subResource))}`;
        }
        return 'update';
    }

    // GET methods
    if (method === 'get') {
        // If path ends with a path parameter, it's a get-by-id
        if (path.endsWith('}')) {
            if (isSubResource) {
                return `get${capitalize(singularize(subResource))}`;
            }
            return 'get';
        }

        // If it's a sub-resource collection
        if (isSubResource) {
            // Plural sub-resource = list, otherwise get
            if (
                subResource.endsWith('s') &&
                !subResource.endsWith('ss') &&
                !subResource.endsWith('status')
            ) {
                return `list${capitalize(subResource)}`;
            }
            return `get${capitalize(subResource)}`;
        }

        // Root resource - likely a list
        return 'list';
    }

    // Fallback: convert operationId to camelCase method name
    return toCamelCase(sanitized);
}

/**
 * Convert a string to proper camelCase.
 */
function toCamelCase(str: string): string {
    // Split on capital letters, underscores, or word boundaries
    const words = str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_-]/g, ' ')
        .toLowerCase()
        .split(' ')
        .filter(Boolean);

    if (words.length === 0) return str.toLowerCase();

    return (
        words[0] +
        words
            .slice(1)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join('')
    );
}

/**
 * Convert operationId to type name base.
 */
function operationIdToBaseTypeName(operationId: string): string {
    const sanitized = sanitizeIdentifier(operationId);
    const parts = sanitized.split(/(?=[A-Z])|_/).filter(Boolean);
    if (parts.length === 1) {
        return snakeToPascal(parts[0]);
    }
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('$');
}

/**
 * Capitalize the first letter of a string.
 */
function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert a plural word to singular (simple heuristic).
 */
function singularize(word: string): string {
    if (word.endsWith('ies')) {
        return word.slice(0, -3) + 'y';
    }
    // Only strip 'es' for sibilant endings (ches, shes, sses, xes, zes)
    if (
        word.endsWith('ches') ||
        word.endsWith('shes') ||
        word.endsWith('sses') ||
        word.endsWith('xes') ||
        word.endsWith('zes')
    ) {
        return word.slice(0, -2);
    }
    if (word.endsWith('s') && !word.endsWith('ss') && !word.endsWith('us')) {
        return word.slice(0, -1);
    }
    return word;
}

/**
 * Generate a single method.
 */
function generateMethod(
    method: MethodInfo,
    indent: number,
    capturedParam?: string,
): string {
    const indentStr = ' '.repeat(indent);
    const lines: string[] = [];

    // Build parameter list
    const params: string[] = [];

    // Path params (except captured ones)
    for (const param of method.pathParams) {
        params.push(`${param.name}: string`);
    }

    // Request body
    if (method.hasRequestBody) {
        const bodyType = `GeneratedTypes.ZoomApi$${operationIdToBaseTypeName(method.operationId)}$Request`;
        const optionalMark = method.requestBodyRequired ? '' : '?';
        params.push(`body${optionalMark}: ${bodyType}`);
    }

    // Query params
    if (method.queryParams.length > 0) {
        const paramsType = `GeneratedTypes.ZoomApi$${operationIdToBaseTypeName(method.operationId)}$Params`;
        params.push(`params?: ${paramsType}`);
    }

    // Generate JSDoc
    if (method.summary) {
        lines.push(`${indentStr}/** ${method.summary} */`);
    }

    // Generate method signature
    const paramStr = params.join(', ');
    lines.push(
        `${indentStr}${method.name}(${paramStr}): Promise<${method.returnType}> {`,
    );

    // Generate URL with path parameters substituted
    let urlPath = method.path;
    if (capturedParam) {
        // Use the original param name from the path for replacement, but substitute with capturedParam
        const paramToReplace = method.originalFirstParamName || capturedParam;
        urlPath = urlPath.replace(
            `{${paramToReplace}}`,
            `\${${capturedParam}}`,
        );
    }
    for (const param of method.pathParams) {
        urlPath = urlPath.replace(`{${param.name}}`, `\${${param.name}}`);
    }

    lines.push(`${indentStr}    return self.client.request({`);
    lines.push(
        `${indentStr}        url: \`\${self.client.BASE_API_URL}${urlPath}\`,`,
    );
    lines.push(`${indentStr}        method: '${method.httpMethod}',`);
    lines.push(`${indentStr}        headers: {`);
    lines.push(`${indentStr}            ...self.getAuthHeader(),`);

    if (method.hasRequestBody) {
        lines.push(
            `${indentStr}            'Content-Type': 'application/json',`,
        );
    }

    lines.push(`${indentStr}        },`);

    if (method.hasRequestBody) {
        lines.push(
            `${indentStr}        body: body ? JSON.stringify(body) : undefined,`,
        );
    }

    if (method.queryParams.length > 0) {
        lines.push(`${indentStr}        params: params,`);
    }

    lines.push(`${indentStr}    }) as any;`);
    lines.push(`${indentStr}},`);

    return lines.join('\n');
}
