/**
 * OpenAPI 3.0 spec parser for Zoom API endpoints.
 */

import * as fs from 'fs';
import * as path from 'path';

export interface OpenApiSpec {
    openapi: string;
    info: {
        title: string;
        version: string;
    };
    paths: Record<string, PathItem>;
    components?: {
        schemas?: Record<string, SchemaObject>;
    };
}

export interface PathItem {
    get?: OperationObject;
    post?: OperationObject;
    put?: OperationObject;
    patch?: OperationObject;
    delete?: OperationObject;
}

export interface OperationObject {
    tags?: string[];
    summary?: string;
    description?: string;
    operationId: string;
    parameters?: ParameterObject[];
    requestBody?: RequestBodyObject;
    responses: Record<string, ResponseObject>;
    security?: SecurityRequirement[];
}

export interface ParameterObject {
    name: string;
    in: 'path' | 'query' | 'header' | 'cookie';
    description?: string;
    required?: boolean;
    schema?: SchemaObject;
    example?: any;
}

export interface RequestBodyObject {
    description?: string;
    required?: boolean;
    content: Record<string, MediaTypeObject>;
}

export interface ResponseObject {
    description?: string;
    content?: Record<string, MediaTypeObject>;
}

export interface MediaTypeObject {
    schema?: SchemaObject;
}

export interface SchemaObject {
    type?: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';
    format?: string;
    description?: string;
    properties?: Record<string, SchemaObject>;
    items?: SchemaObject;
    required?: string[];
    enum?: (string | number)[];
    allOf?: SchemaObject[];
    oneOf?: SchemaObject[];
    anyOf?: SchemaObject[];
    $ref?: string;
    default?: any;
    example?: any;
    nullable?: boolean;
    minimum?: number;
    maximum?: number;
    minLength?: number;
    maxLength?: number;
}

export interface SecurityRequirement {
    [name: string]: string[];
}

export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface ParsedEndpoint {
    path: string;
    method: HttpMethod;
    operationId: string;
    tags: string[];
    summary?: string;
    description?: string;
    pathParams: ParameterObject[];
    queryParams: ParameterObject[];
    headerParams: ParameterObject[];
    requestBody?: SchemaObject;
    requestBodyRequired?: boolean;
    responseSchema?: SchemaObject;
    successStatusCode: string;
}

export interface ParsedSpec {
    info: {
        title: string;
        version: string;
    };
    endpoints: ParsedEndpoint[];
}

/**
 * Parse an OpenAPI spec file and extract endpoint information.
 */
export function parseOpenApiSpec(specPath: string): ParsedSpec {
    const absolutePath = path.resolve(specPath);
    const content = fs.readFileSync(absolutePath, 'utf-8');
    const spec: OpenApiSpec = JSON.parse(content);

    const endpoints: ParsedEndpoint[] = [];

    for (const [pathStr, pathItem] of Object.entries(spec.paths)) {
        const methods: HttpMethod[] = ['get', 'post', 'put', 'patch', 'delete'];

        for (const method of methods) {
            const operation = pathItem[method];
            if (!operation) continue;

            const endpoint = parseOperation(pathStr, method, operation);
            endpoints.push(endpoint);
        }
    }

    return {
        info: spec.info,
        endpoints,
    };
}

function parseOperation(
    path: string,
    method: HttpMethod,
    operation: OperationObject,
): ParsedEndpoint {
    const parameters = operation.parameters || [];

    const pathParams = parameters.filter((p) => p.in === 'path');
    const queryParams = parameters.filter((p) => p.in === 'query');
    const headerParams = parameters.filter((p) => p.in === 'header');

    // Extract request body schema
    let requestBody: SchemaObject | undefined;
    let requestBodyRequired = false;
    if (operation.requestBody) {
        const jsonContent = operation.requestBody.content['application/json'];
        if (jsonContent?.schema) {
            requestBody = jsonContent.schema;
        }
        requestBodyRequired = operation.requestBody.required ?? false;
    }

    // Extract response schema (prefer 200, 201, or 204)
    let responseSchema: SchemaObject | undefined;
    let successStatusCode = '200';

    for (const code of ['200', '201', '204']) {
        const response = operation.responses[code];
        if (response) {
            successStatusCode = code;
            const jsonContent = response.content?.['application/json'];
            if (jsonContent?.schema) {
                responseSchema = jsonContent.schema;
            }
            break;
        }
    }

    return {
        path,
        method,
        operationId: operation.operationId,
        tags: operation.tags || [],
        summary: operation.summary,
        description: operation.description,
        pathParams,
        queryParams,
        headerParams,
        requestBody,
        requestBodyRequired,
        responseSchema,
        successStatusCode,
    };
}

/**
 * Group endpoints by their primary resource.
 */
export interface ResourceGroup {
    name: string;
    displayName: string;
    isParameterized: boolean;
    paramName?: string;
    endpoints: ParsedEndpoint[];
}

export function groupEndpointsByResource(
    endpoints: ParsedEndpoint[],
): ResourceGroup[] {
    const groups = new Map<string, ResourceGroup>();

    for (const endpoint of endpoints) {
        const segments = endpoint.path.split('/').filter(Boolean);
        if (segments.length === 0) continue;

        const firstSegment = segments[0];
        let resourceKey: string;
        let isParameterized = false;
        let paramName: string | undefined;

        // Check if this is a parameterized resource (e.g., /past_meetings/{id}/...)
        if (segments.length >= 2 && segments[1].startsWith('{')) {
            // Singular parameterized resource
            const singular = firstSegment.endsWith('s')
                ? firstSegment.slice(0, -1)
                : firstSegment;
            resourceKey = `${singular}:param`;
            isParameterized = true;
            paramName = segments[1].slice(1, -1);
        } else {
            resourceKey = firstSegment;
        }

        if (!groups.has(resourceKey)) {
            const displayName = snakeToCamel(firstSegment);
            groups.set(resourceKey, {
                name: isParameterized
                    ? snakeToCamel(resourceKey.replace(':param', ''))
                    : snakeToCamel(firstSegment),
                displayName,
                isParameterized,
                paramName,
                endpoints: [],
            });
        }

        groups.get(resourceKey)!.endpoints.push(endpoint);
    }

    return Array.from(groups.values());
}

function snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
