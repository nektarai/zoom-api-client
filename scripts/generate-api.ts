#!/usr/bin/env ts-node
/**
 * Zoom API Client Generator
 *
 * Generates TypeScript types and API client from OpenAPI specification.
 * Usage: ts-node scripts/generate-api.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import {
    parseOpenApiSpec,
    groupEndpointsByResource,
} from './lib/openapi-parser';
import { generateTypes } from './lib/type-generator';
import { generateApiClass } from './lib/api-generator';

const ROOT_DIR = path.resolve(__dirname, '..');
const SPEC_PATH = path.join(ROOT_DIR, 'endpoints.json');
const TYPES_OUTPUT_PATH = path.join(ROOT_DIR, 'src', 'types.generated.ts');
const API_OUTPUT_PATH = path.join(ROOT_DIR, 'src', 'zoomApi.generated.ts');

function main() {
    console.log('🚀 Zoom API Client Generator');
    console.log('============================\n');

    // Parse the OpenAPI spec
    console.log(`📖 Parsing OpenAPI spec: ${SPEC_PATH}`);
    const spec = parseOpenApiSpec(SPEC_PATH);
    console.log(`   Found ${spec.endpoints.length} endpoints\n`);

    // Group endpoints by resource
    console.log('📦 Grouping endpoints by resource...');
    const groups = groupEndpointsByResource(spec.endpoints);
    for (const group of groups) {
        const paramInfo = group.isParameterized
            ? ` (parameterized: ${group.paramName})`
            : '';
        console.log(
            `   ${group.name}: ${group.endpoints.length} endpoints${paramInfo}`,
        );
    }
    console.log('');

    // Generate types
    console.log('📝 Generating TypeScript types...');
    const typesContent = generateTypes(spec.endpoints);
    fs.writeFileSync(TYPES_OUTPUT_PATH, typesContent, 'utf-8');
    console.log(`   Written to: ${TYPES_OUTPUT_PATH}\n`);

    // Generate API class
    console.log('🔧 Generating API client...');
    const apiContent = generateApiClass(groups);
    fs.writeFileSync(API_OUTPUT_PATH, apiContent, 'utf-8');
    console.log(`   Written to: ${API_OUTPUT_PATH}\n`);

    // Format generated files with Prettier
    console.log('🎨 Formatting generated files with Prettier...');
    try {
        execSync(
            `npx prettier --write "${TYPES_OUTPUT_PATH}" "${API_OUTPUT_PATH}"`,
            {
                cwd: ROOT_DIR,
                stdio: 'inherit',
            },
        );
        console.log('   Formatting complete!\n');
    } catch (error) {
        console.warn(
            '   Warning: Prettier formatting failed, continuing anyway.\n',
        );
    }

    // Lint generated files with ESLint
    console.log('🔍 Linting generated files with ESLint...');
    try {
        execSync(
            `npx eslint --fix "${TYPES_OUTPUT_PATH}" "${API_OUTPUT_PATH}"`,
            {
                cwd: ROOT_DIR,
                stdio: 'inherit',
            },
        );
        console.log('   Linting complete!\n');
    } catch (error) {
        console.warn(
            '   Warning: ESLint found issues that could not be auto-fixed.\n',
        );
    }

    // Summary
    console.log('✅ Generation complete!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Review the generated files');
    console.log('  2. Run `npm run build` to compile');
    console.log('  3. Run `npm test` to verify backward compatibility');
}

main();
