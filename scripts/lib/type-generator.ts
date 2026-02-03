/**
 * TypeScript type generator from OpenAPI schemas.
 */

import { ParsedEndpoint, SchemaObject, ParameterObject } from './openapi-parser';
import { snakeToPascal, sanitizeIdentifier } from './naming-utils';

interface GeneratedType {
    name: string;
    definition: string;
    jsdoc?: string;
}

/**
 * Generate TypeScript types from parsed endpoints.
 */
export function generateTypes(endpoints: ParsedEndpoint[]): string {
    const types: GeneratedType[] = [];
    const generatedTypeNames = new Set<string>();

    for (const endpoint of endpoints) {
        const baseTypeName = operationIdToBaseTypeName(endpoint.operationId);

        // Generate request body type
        if (endpoint.requestBody) {
            const typeName = `ZoomApi$${baseTypeName}$Request`;
            if (!generatedTypeNames.has(typeName)) {
                generatedTypeNames.add(typeName);
                const definition = schemaToTypeScript(endpoint.requestBody, 0);
                types.push({
                    name: typeName,
                    definition: `export type ${typeName} = ${definition};`,
                    jsdoc: endpoint.summary ? `/** ${endpoint.summary} - Request body */` : undefined,
                });
            }
        }

        // Generate response type
        if (endpoint.responseSchema) {
            const typeName = `ZoomApi$${baseTypeName}$Response`;
            if (!generatedTypeNames.has(typeName)) {
                generatedTypeNames.add(typeName);
                const definition = schemaToTypeScript(endpoint.responseSchema, 0);
                types.push({
                    name: typeName,
                    definition: `export type ${typeName} = ${definition};`,
                    jsdoc: endpoint.summary ? `/** ${endpoint.summary} - Response */` : undefined,
                });
            }
        }

        // Generate query params type if there are query parameters
        if (endpoint.queryParams.length > 0) {
            const typeName = `ZoomApi$${baseTypeName}$Params`;
            if (!generatedTypeNames.has(typeName)) {
                generatedTypeNames.add(typeName);
                const definition = generateParamsType(endpoint.queryParams);
                types.push({
                    name: typeName,
                    definition: `export type ${typeName} = ${definition};`,
                    jsdoc: endpoint.summary ? `/** ${endpoint.summary} - Query parameters */` : undefined,
                });
            }
        }
    }

    // Sort types alphabetically for consistent output
    types.sort((a, b) => a.name.localeCompare(b.name));

    // Generate the output
    const lines: string[] = [
        '/**',
        ' * Auto-generated Zoom API types from OpenAPI spec.',
        ' * Do not edit manually - run `npm run generate` to regenerate.',
        ' */',
        '',
    ];

    for (const type of types) {
        if (type.jsdoc) {
            lines.push(type.jsdoc);
        }
        lines.push(type.definition);
        lines.push('');
    }

    return lines.join('\n');
}

/**
 * Convert an operationId to a base type name.
 * Examples:
 *   meetings -> Meetings
 *   meetingCreate -> Meeting$Create
 *   pastMeetingDetails -> PastMeeting$Details
 */
function operationIdToBaseTypeName(operationId: string): string {
    // Sanitize the operationId first (remove invalid characters)
    const sanitized = sanitizeIdentifier(operationId);

    // Split on capital letters and underscores
    const parts = sanitized.split(/(?=[A-Z])|_/).filter(Boolean);

    if (parts.length === 1) {
        // Simple plural name like "meetings" -> "Meetings"
        return snakeToPascal(parts[0]);
    }

    // Capitalize and join with $
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('$');
}

/**
 * Convert an OpenAPI schema to TypeScript type definition.
 */
function schemaToTypeScript(schema: SchemaObject, indent: number): string {
    const indentStr = '    '.repeat(indent);
    const innerIndent = '    '.repeat(indent + 1);

    // Handle $ref (shouldn't happen in this spec, but just in case)
    if (schema.$ref) {
        const refName = schema.$ref.split('/').pop() || 'unknown';
        return refName;
    }

    // Handle allOf
    if (schema.allOf && schema.allOf.length > 0) {
        const types = schema.allOf.map((s) => schemaToTypeScript(s, indent));
        return types.join(' & ');
    }

    // Handle oneOf
    if (schema.oneOf && schema.oneOf.length > 0) {
        const types = schema.oneOf.map((s) => schemaToTypeScript(s, indent));
        return types.join(' | ');
    }

    // Handle anyOf
    if (schema.anyOf && schema.anyOf.length > 0) {
        const types = schema.anyOf.map((s) => schemaToTypeScript(s, indent));
        return types.join(' | ');
    }

    // Handle enum
    if (schema.enum) {
        return schema.enum.map((v) => (typeof v === 'string' ? `'${v}'` : v)).join(' | ');
    }

    // Handle by type
    switch (schema.type) {
        case 'string':
            return 'string';
        case 'integer':
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'array':
            if (schema.items) {
                const itemType = schemaToTypeScript(schema.items, indent);
                return `(${itemType})[]`;
            }
            return 'any[]';
        case 'object':
            if (!schema.properties || Object.keys(schema.properties).length === 0) {
                return 'Record<string, any>';
            }
            return generateObjectType(schema, indent);
        default:
            // If no type but has properties, treat as object
            if (schema.properties) {
                return generateObjectType(schema, indent);
            }
            return 'any';
    }
}

/**
 * Generate an object type definition.
 */
function generateObjectType(schema: SchemaObject, indent: number): string {
    const innerIndent = '    '.repeat(indent + 1);
    const closingIndent = '    '.repeat(indent);

    const properties = schema.properties || {};
    const required = new Set(schema.required || []);

    const lines: string[] = ['{'];

    for (const [propName, propSchema] of Object.entries(properties)) {
        const isRequired = required.has(propName);
        const safePropName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName) ? propName : `'${propName}'`;
        const optionalMark = isRequired ? '' : '?';

        // Add JSDoc if there's a description
        if (propSchema.description) {
            lines.push(`${innerIndent}/** ${propSchema.description} */`);
        }

        const propType = schemaToTypeScript(propSchema, indent + 1);
        lines.push(`${innerIndent}${safePropName}${optionalMark}: ${propType};`);
    }

    lines.push(`${closingIndent}}`);

    return lines.join('\n');
}

/**
 * Generate a params type from query parameters.
 */
function generateParamsType(params: ParameterObject[]): string {
    const lines: string[] = ['Partial<{'];

    for (const param of params) {
        const safeName = sanitizeIdentifier(param.name);
        let paramType = 'any';

        if (param.schema) {
            paramType = schemaToTypeScript(param.schema, 1);
        }

        if (param.description) {
            lines.push(`    /** ${param.description} */`);
        }
        lines.push(`    ${safeName}: ${paramType};`);
    }

    lines.push('}>');

    return lines.join('\n');
}

/**
 * Generate backward-compatible type aliases for existing types.
 */
export function generateBackwardCompatAliases(): string {
    // These are the existing type names that need to be preserved
    const aliases: [string, string][] = [
        // Users
        ['ZoomApi$Users$List', 'ZoomApi$Users$Response'],
        ['ZoomApi$Users$Get', 'ZoomApi$User$Response'],

        // Meetings
        ['ZoomApi$Meetings$List', 'ZoomApi$Meetings$Response'],
        ['ZoomApi$Meetings$Get', 'ZoomApi$Meeting$Response'],
        ['ZoomApi$Meetings$Create$Request', 'ZoomApi$MeetingCreate$Request'],
        ['ZoomApi$Meetings$Create$Response', 'ZoomApi$MeetingCreate$Response'],
        ['ZoomApi$Meetings$Update', 'ZoomApi$MeetingUpdate$Response'],
        ['ZoomApi$Meetings$Recordings', 'ZoomApi$RecordingGet$Response'],

        // Past Meetings
        ['ZoomApi$PastMeeting$Details', 'ZoomApi$PastMeetingDetails$Response'],
        ['ZoomApi$PastMeeting$Participants', 'ZoomApi$PastMeetingParticipants$Response'],

        // Reports
        ['ZoomApi$Reports$Meetings', 'ZoomApi$ReportMeetings$Response'],
    ];

    const lines: string[] = [
        '',
        '// Backward-compatible type aliases',
        '// These preserve the original type names from the manual implementation',
        '',
    ];

    for (const [oldName, newName] of aliases) {
        lines.push(`// export type ${oldName} = ${newName};`);
    }

    return lines.join('\n');
}
