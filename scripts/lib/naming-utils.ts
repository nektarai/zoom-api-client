/**
 * Naming utilities for converting OpenAPI identifiers to TypeScript names.
 */

/**
 * Convert a path to a resource name.
 * Examples:
 *   /users/{userId}/meetings -> users
 *   /meetings/{meetingId} -> meetings
 *   /past_meetings/{meetingId} -> pastMeetings
 *   /tracking_fields -> trackingFields
 */
export function pathToResourceName(path: string): string {
    const firstSegment = path.split('/').filter(Boolean)[0];
    // Remove path parameters and convert to camelCase
    return snakeToCamel(firstSegment.replace(/\{[^}]+\}/g, ''));
}

/**
 * Convert snake_case to camelCase.
 */
export function snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convert snake_case to PascalCase.
 */
export function snakeToPascal(str: string): string {
    const camel = snakeToCamel(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * Convert an operationId to a method name.
 * Examples:
 *   meetings -> list
 *   meetingCreate -> create
 *   meeting -> get
 *   meetingDelete -> delete
 *   meetingUpdate -> update
 *   recordingGet -> getRecording
 *   pastMeetingDetails -> details
 *   pastMeetingParticipants -> participants
 */
export function operationIdToMethodName(
    operationId: string,
    httpMethod: string,
): string {
    // Common suffix patterns
    const suffixMappings: Record<string, string> = {
        Create: 'create',
        Delete: 'delete',
        Update: 'update',
        Get: 'get',
        List: 'list',
    };

    // Check for common patterns
    for (const [suffix, methodName] of Object.entries(suffixMappings)) {
        if (operationId.endsWith(suffix)) {
            return methodName;
        }
    }

    // If it's a simple plural name, it's likely a list operation
    if (httpMethod === 'get' && operationId.match(/^[a-z]+s$/)) {
        return 'list';
    }

    // If it's a simple singular name, it's likely a get operation
    if (httpMethod === 'get' && operationId.match(/^[a-z]+$/)) {
        return 'get';
    }

    // For compound names, extract the meaningful part
    // e.g., pastMeetingDetails -> details, pastMeetingParticipants -> participants
    const match = operationId.match(/[A-Z][a-z]+$/);
    if (match) {
        return match[0].toLowerCase();
    }

    // Default: use the operationId as-is, converted to camelCase
    return operationId.charAt(0).toLowerCase() + operationId.slice(1);
}

/**
 * Convert an operationId to a TypeScript type name prefix.
 * Examples:
 *   meetings -> Meetings$List
 *   meetingCreate -> Meetings$Create
 *   pastMeetingDetails -> PastMeeting$Details
 */
export function operationIdToTypeName(operationId: string): string {
    // Convert camelCase to parts
    const parts = operationId.split(/(?=[A-Z])/);

    // Find resource and operation
    // Common patterns: meetings, meetingCreate, pastMeetingDetails
    if (parts.length === 1) {
        // Simple name like "meetings" -> "Meetings"
        return snakeToPascal(parts[0]);
    }

    // Capitalize each part and join with $
    return parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('$');
}

/**
 * Sanitize a string to be a valid TypeScript identifier.
 */
export function sanitizeIdentifier(str: string): string {
    // Replace invalid characters with empty string or underscore
    let sanitized = str
        .replace(/\//g, '_') // Replace slashes with underscores
        .replace(/[^a-zA-Z0-9_$]/g, '_') // Replace other invalid chars
        .replace(/_+/g, '_') // Collapse multiple underscores
        .replace(/^_|_$/g, ''); // Remove leading/trailing underscores

    // Ensure it doesn't start with a number
    if (/^[0-9]/.test(sanitized)) {
        sanitized = '_' + sanitized;
    }

    return sanitized || 'unknown';
}

/**
 * Extract path parameters from a path string.
 * Example: /users/{userId}/meetings/{meetingId} -> ['userId', 'meetingId']
 */
export function extractPathParams(path: string): string[] {
    const matches = path.match(/\{([^}]+)\}/g);
    if (!matches) return [];
    return matches.map((m) => m.slice(1, -1));
}

/**
 * Determine the resource group for an endpoint based on its path and tags.
 */
export function getResourceGroup(
    path: string,
    tags: string[],
): { resource: string; isParameterized: boolean; paramName?: string } {
    const segments = path.split('/').filter(Boolean);

    // Check for parameterized resources like /past_meetings/{id}
    if (segments.length >= 2 && segments[1].startsWith('{')) {
        const resource = snakeToCamel(segments[0]);
        // Convert plural to singular for parameterized access
        // past_meetings -> pastMeeting
        const singularResource = resource.endsWith('s')
            ? resource.slice(0, -1)
            : resource;
        return {
            resource: singularResource,
            isParameterized: true,
            paramName: segments[1].slice(1, -1),
        };
    }

    // Regular resource
    return {
        resource: snakeToCamel(segments[0]),
        isParameterized: false,
    };
}
