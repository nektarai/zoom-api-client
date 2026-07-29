# Changelog

## [1.1.0-alpha.0]

### Added

- **Users API coverage**: generation now reads multiple OpenAPI specs from `specs/`. Adding Zoom's
  Users spec restores `users().list()` and `user(userId).getUser()` — the replacements for `me()`
  and the `users()` endpoints dropped in 1.0.0 — plus `groups()`, `group()`, `divisions()`,
  `division()`, and `contacts()` resources. 71 new methods; no existing method was renamed.
- **Error metadata on `ZoomError`**: non-ok responses now carry the HTTP status, Zoom's application
  error code, and rate-limit state instead of only a message, so callers can decide whether and
  when to retry.
  - `code` — Zoom's application error code from the response body (e.g. `124`, `1001`)
  - `statusCode` / `statusText` — the HTTP status (e.g. `429`)
  - `retryAfter` — `Retry-After` in seconds; the HTTP-date form is converted for you
  - `rateLimit` — `{ type, category, limit, remaining, reset }` from `X-RateLimit-*`, or
    `undefined` when Zoom sent no such headers. `type` distinguishes `QPS` from `Daily-limit`.
  - `response` / `url` — the parsed body and the request URL

### Changed

- API errors now throw `ZoomError` where a bare `Error` was thrown before. `ZoomError extends
  Error`, so `instanceof Error` checks and message-based handling are unaffected.
- `endpoints.json` moved to `specs/Meetings.json`. Specs are committed verbatim as published by
  Zoom so they can be refreshed without a manual merge; list them in `SPEC_PATHS` in
  `scripts/generate-api.ts`, earliest-first, since duplicate method names resolve first-wins.

### Fixed

- Enum values and property names containing quotes are now escaped in generated types. Previously
  a value like `Can't update for Zoom One users` emitted a syntactically invalid type.

## [1.0.0] - 2026-02-02

### BREAKING CHANGES

This is a major release that transitions to a pure OpenAPI-generated API client. All backward-compatible wrapper methods have been removed in favor of auto-generated methods that directly mirror Zoom's OpenAPI specification.

**Removed Methods:**

- `zoomApi.me()` - use `user('me')` resource methods (e.g. `user('me').listMeetings()`)
- `zoomApi.users().list()` / `zoomApi.users().get()` - user CRUD endpoints are not in the current OpenAPI spec
- `zoomApi.meetings()` - replaced by `user(userId).listMeetings()`, `user(userId).createMeeting()`, etc.
- `zoomApi.pastMeeting(id).details()` / `.participants()` - replaced by `pastMeeting(uuid).getPastMeeting()`, `.listParticipants()`
- `zoomApi.reports().meetings()` - replaced by `report().listMeetings(userId)`

**API Structure Changes:**

Migration examples:

- Old: `meetings().list(userId, params)` → New: `user(userId).listMeetings(params)`
- Old: `meetings().create(userId, body)` → New: `user(userId).createMeeting(body)`
- Old: `meetings().get(id)` → New: `meeting(id).getMeeting()`
- Old: `meetings().recordings(meetingId)` → New: `meeting(meetingId).listRecordings()`
- Old: `pastMeeting(id).details()` → New: `pastMeeting(uuid).getPastMeeting()`
- Old: `pastMeeting(id).participants()` → New: `pastMeeting(uuid).listParticipants()`
- Old: `reports().meetings(userId)` → New: `report().listMeetings(userId)`

### Added

- **Auto-generation System**: `npm run generate` to regenerate from OpenAPI spec
- **Comprehensive API Coverage**: 180+ endpoints (vs ~15 in 0.x):
  - Meetings (51 endpoints), Webinars (43 endpoints), Reports (23 endpoints)
  - Users (17 endpoints), Devices (13 endpoints), Past meetings (7 endpoints)
  - Archive files, H.323/SIP, Live meetings, Tracking fields, and more
- **Generated TypeScript Types**: Complete type definitions in `types.generated.ts`
- **OpenAPI-Based Structure**: Methods follow RESTful patterns from official spec

### Changed

- All API methods now auto-generated from `endpoints.json`
- Method naming follows OpenAPI operationId conventions
- Response types are more specific (better type safety)
- `types.ts` now contains only infrastructure types (ZoomError, ZoomClientOptions, etc.) - all API types moved to `types.generated.ts`

### Removed

- All manually-written backward-compatible wrapper methods
- Manual type definitions (now auto-generated)
- Legacy convenience methods

See README.md for detailed migration guide.

## 0.0.4

- APIs added
  - Meetings update (`zoomApi.meetings().update()`)

## 0.0.3

- APIs added
  - Zak Token (`zoomApi.getZAKToken()`)
- Make `tokens` property public in `ZoomApi` class

## 0.0.2

- APIs added
  - Meetings (`zoomApi.meetings()`)
    - Create (`.create()`)

## 0.0.1

- First release
- APIs added
  - Me (`zoomApi.me()`)
  - Reports (`zoomApi.reports()`)
    - Meetings (`.meetings()`)
  - Meetings (`zoomApi.meetings()`)
    - List (`.list()`)
    - Get(`.get()`)
    - Recordings (`.recordings()`)
    - Transcript (Not official API) (`.transcript()`)
  - Past Meetings (`zoomApi.pastMeetings()`)
    - Details (`.details()`)
    - Participants (`.participants()`)
  - Users (`zoomApi.users()`)
    - Get (`.get()`)
    - List (`.list()`)
