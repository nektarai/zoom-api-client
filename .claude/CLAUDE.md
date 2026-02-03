# Zoom API Client

A dependency-free, fully typed Node.js client library for the Zoom API, maintained by Nektar AI.

## Quick Reference

### Build & Test Commands

```bash
npm run build    # Clean dist/ and compile TypeScript
npm test         # Run Jest tests with coverage
```

### Project Structure

```text
src/
├── index.ts        # Public API exports
├── types.ts        # Type definitions and ZoomError class
├── zoomClient.ts   # Core HTTP client with EventEmitter
├── zoomOauth2.ts   # OAuth 2.0 authentication
├── zoomS2SO.ts     # Server-to-Server OAuth (extends ZoomOauth)
└── zoomApi.ts      # API resource methods (users, meetings, reports, etc.)

test/               # Jest tests (mirrors src/ structure)
dist/               # Compiled output (generated)
```

## Architecture

### Core Classes

- **ZoomClient**: HTTP client handling requests, URL normalization, error handling, and connection events
- **ZoomOauth**: OAuth 2.0 flow (authorization URL, token exchange, refresh, revoke, webhook verification)
- **ZoomS2SO**: Server-to-Server OAuth extending ZoomOauth (account credentials-based auth)
- **ZoomApi**: Fluent API for Zoom resources (users, meetings, pastMeeting, reports, recordings)

### Design Patterns

- **Fluent API**: `zoomApi.meetings().list(userId)`, `zoomApi.pastMeeting(id).details()`
- **Strategy Pattern**: ZoomOauth vs ZoomS2SO for different auth flows
- **Dependency Injection**: Classes accept ZoomClient instance for flexibility
- **EventEmitter**: ZoomClient emits 'connection:new' on instantiation

### Error Handling

Custom `ZoomError` class (in types.ts) includes:

- HTTP status code and text
- Original response payload
- Request URL for debugging

## Code Standards

### TypeScript

- Strict mode enabled
- ESNext target
- Strict promise handling (no floating/misused promises)

### Style (enforced via ESLint + Prettier)

- Single quotes
- Trailing commas
- 4-space indentation

## API Coverage

- Users: list, get
- Meetings: create, list, get, update, recordings, transcript
- Past Meetings: details, participants
- Reports: meeting reports
- Tokens: ZAK token retrieval
- Webhooks: event verification

## Dependencies

- **Runtime**: None (zero dependencies)
- **Dev**: TypeScript, Jest, ESLint, Prettier, Husky, SWC

## Node Version

Requires Node.js >= 22 (see .nvmrc)
