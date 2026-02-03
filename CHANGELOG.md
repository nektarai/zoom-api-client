# Changelog

## [1.0.0] - 2026-02-02

### BREAKING CHANGES

This is a major release that transitions to a pure OpenAPI-generated API client. All backward-compatible wrapper methods have been removed in favor of auto-generated methods that directly mirror Zoom's OpenAPI specification.

**Removed Methods:**
- `zoomApi.me()` - Convenience method for getting current user
- `zoomApi.getZAKToken(userId)` - ZAK token retrieval
- `zoomApi.users().list()` / `zoomApi.users().get()` - User operations
- `zoomApi.meetings()` - All meetings wrapper methods
- `zoomApi.pastMeeting(id).details()` / `.participants()` - Past meeting wrappers
- `zoomApi.reports().meetings()` - Reports wrapper methods

**API Structure Changes:**

Migration examples:
- Old: `meetings().list(userId, params)` → New: `user(userId).listMeetings(params)`
- Old: `meetings().create(userId, body)` → New: `user(userId).createMeeting(body)`
- Old: `meetings().recordings(meetingId)` → New: `meeting(meetingId).listRecordings()`
- Old: `pastMeeting(id).details()` → New: `pastMeeting(uuid).getPastMeeting(id)`
- Old: `pastMeeting(id).participants()` → New: `pastMeeting(uuid).listParticipants(id)`

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
