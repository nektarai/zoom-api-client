/**
 * Naming utilities for converting OpenAPI identifiers to TypeScript names.
 */

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
        sanitized = `_${sanitized}`;
    }

    return sanitized || 'unknown';
}

/**
 * Escape spec-supplied text for use inside a `/** ... *\/` comment. Specs are
 * committed verbatim from Zoom, so a description containing a comment
 * terminator would otherwise close the block early and emit invalid output.
 */
export function escapeJsDoc(text: string): string {
    return text.replace(/\*\//g, '*\\/');
}
