# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Test Commands

```bash
npm run build          # Clean dist/ and compile TypeScript
npm test               # Run Jest tests with coverage
npm run lint           # Biome: format + lint check (no writes)
npm run lint:fix       # Biome: apply safe fixes
npm run typecheck      # tsc --noEmit over src/ AND test/
npm run generate       # Regenerate API client from the OpenAPI specs in specs/
npx jest test/zoomClient.test.ts              # Run a single test file
npx jest --testNamePattern "should normalize"  # Run tests matching a pattern
```

`npm test` does not typecheck — `@swc/jest` strips types without checking them, and
`npm run build` only covers `src/`. `npm run typecheck` is the only thing that
typechecks `test/`.

## Architecture

Zero-dependency, fully typed Zoom API client for Node.js. Published as `@nektarai/zoom-api-client`.

### Core Classes (hand-written)

- **ZoomClient** (`src/zoomClient.ts`): HTTP client wrapping `fetch` with URL normalization, timeout via AbortController, and JSON parsing. All API/OAuth calls flow through `ZoomClient.request()`.
- **ZoomOauth** (`src/zoomOauth2.ts`): OAuth 2.0 flow — authorization URL, token exchange, refresh, revoke, webhook verification.
- **ZoomS2SO** (`src/zoomS2SO.ts`): Server-to-Server OAuth extending ZoomOauth (account credentials-based auth).

### Generated Files (do not edit manually)

- **ZoomApi** (`src/zoomApi.generated.ts`): 250+ endpoint methods generated from the Zoom OpenAPI specs in `specs/`. Fluent resource pattern: `zoomApi.user(userId).listMeetings()`, `zoomApi.meeting(id).getMeeting()`.
- **Types** (`src/types.generated.ts`): Request param and response types for all generated endpoints.

To regenerate: `npm run generate` — runs `scripts/generate-api.ts` which parses each spec, generates types and API client, then runs `biome check --write` on the output.

Zoom publishes one spec per product area. `specs/*.json` are committed verbatim so they can be refreshed from Zoom without a manual merge; register new ones in `SPEC_PATHS` in `scripts/generate-api.ts`. **Order matters** — duplicate method names resolve first-wins, so an earlier spec keeps the cleaner name and later ones fall back to their `operationId`. Keep `Meetings.json` first to hold existing method names stable.

### Code Generation Pipeline

`scripts/generate-api.ts` orchestrates:
1. `scripts/lib/openapi-parser.ts` — parses each spec in `specs/`, groups endpoints by resource
2. `scripts/lib/type-generator.ts` — generates TypeScript types per endpoint
3. `scripts/lib/api-generator.ts` — generates the `ZoomApi` class with fluent resource methods
4. `scripts/lib/naming-utils.ts` — consistent name transforms (camelCase, PascalCase, etc.)

### Request Flow

`ZoomApi` method → `ZoomClient.request()` → URL normalization (relative paths get `BASE_API_URL` or `BASE_OAUTH_URL` prefix) → `fetch` with timeout → JSON parse → return, or throw a `ZoomError` carrying the HTTP status, Zoom's body error `code`, and `retryAfter` / `rateLimit` parsed from the response headers.

## Code Standards

- **Tooling**: [Biome](https://biomejs.dev) owns both formatting and linting (`biome.json`). It replaced ESLint 8 + Prettier — there is no `.eslintrc.js` or `.prettierrc.js`.
- **Style**: Single quotes, trailing commas, 4-space indent, semicolons. Indent width comes from `.editorconfig` via `formatter.useEditorconfig` (so JSON stays at 2).
- **Lint rules**: Biome `recommended`, plus `noConsole` as an error and `noExplicitAny` / `noTsIgnore` off. `noFloatingPromises` and `noMisusedPromises` are enabled **from nursery** — they are the reason this repo uses Biome's types domain at all, and they may shift behavior across Biome minor versions. Verify they still fire after a Biome upgrade.
- **Overrides** in `biome.json`: `scripts/**` allows `console` and `${}`-in-string (it is a code generator); `src/*.generated.ts` is formatted but not linted; `tsconfig*.json` is parsed as JSONC.
- **`files.maxSize` is raised to 4 MiB.** `src/types.generated.ts` is ~1 MiB and silently exceeds Biome's 1 MiB default, which would skip the largest file in the repo without failing.
- **TypeScript**: 6.0, strict mode, ESNext target, CommonJS output. `noImplicitAny` is off despite strict mode. Three settings are load-bearing and easy to break:
    - **`types` must stay explicit** (`["node", "jest"]` in `tsconfig.json`, `["node"]` in `tsconfig-build.json`). TS 6 changed the `types` default from "every package in `node_modules/@types`" to `[]`. Remove it and you get `Cannot find name 'Buffer'`/`'AbortController'`/`'URL'` across the repo. The build config is narrower on purpose so Jest globals cannot leak into the published `.d.ts`.
    - **`module: "node20"` + `moduleResolution: "node16"`** — TS enforces this pairing (TS5109). Deliberately *not* `nodenext`, whose meaning shifts between TS releases; `node20` has pinned semantics and matches the `engines.node: ">=22"` floor. The old `moduleResolution: "node"` (node10) is not merely deprecated in TS 6, it is no longer a valid value.
    - **`rootDir` must be explicit** in `tsconfig-build.json`. TS 6 stopped inferring it from the input set and errors with TS5011 instead.
- **No `optionalDependencies`.** The block that pinned 12 `@swc/core-*` platform binaries was deleted deliberately: they were never loaded (`@swc/core` resolves its own nested binaries), and being *production* optional deps they shipped ~152 MB of unused native binaries to every consumer of this "zero-dependency" package. `@swc/core` is now an explicit devDependency so the native toolchain is pinned rather than floating on `@swc/jest`'s `*` peer range. Do not let a dependency bump reintroduce either.
- **`"prepare": "husky"` is what makes the pre-commit hook exist.** Without it husky never runs, `core.hooksPath` stays unset, and `.husky/pre-commit` is silently dead — which is exactly the state this repo was in until August 2026. Verify with `git config --get core.hooksPath` (must print `.husky/_`), and test the hook through a real `git commit`, not by running the script directly. Hook files are husky 9 style: no shebang, no `_/husky.sh` sourcing.
- **Tests**: Jest 30 with SWC transform. Tests use `nock` for HTTP mocking. Coverage collected from `src/`. Jest 30 removed the legacy matcher aliases, so use `toThrow()` (not `toThrowError()`), `toHaveBeenCalled()` (not `toBeCalled()`), and so on. `moduleNameMapper` strips `.js` from relative specifiers so imports written the way `moduleResolution: node16` requires still resolve to `.ts` sources.

## Node Version

Requires Node.js >= 22 (see `.nvmrc`).


<claude-mem-context>
# Recent Activity

<!-- This section is auto-generated by claude-mem. Edit content outside the tags. -->

*No recent activity*
</claude-mem-context>