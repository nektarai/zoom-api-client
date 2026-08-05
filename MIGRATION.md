# Migration Guide

## 0.x to 1.0

Version 1.0.0 introduces breaking changes as we've transitioned to a pure OpenAPI-generated API:

**Removed convenience methods:**

- `zoomApi.me()` - removed; use `user('me').getUser()` (restored in 1.1.0), or other `user('me')` resource methods such as `user('me').listMeetings()`

**API Structure Changes:**

- Old: `meetings().list(userId)` → New: `user(userId).listMeetings()`
- Old: `meetings().create(userId, body)` → New: `user(userId).createMeeting(body)`
- Old: `meetings().get(id)` → New: `meeting(id).getMeeting()`
- Old: `meetings().recordings(id)` → New: `meeting(id).listRecordings()`
- Old: `meetings().transcript(url)` → New: `downloadTranscript(url)`
- Old: `pastMeeting(id).details()` → New: `pastMeeting(uuid).getPastMeeting()`
- Old: `pastMeeting(id).participants()` → New: `pastMeeting(uuid).listParticipants()`
- Old: `reports().meetings(userId)` → New: `report().listMeetings(userId)`
- `users().list()` is unchanged, but its response type is now `ZoomApi$Users$Response` (was `ZoomApi$Users$List`)

**Benefits of 1.0:**
- 250+ endpoints (vs ~15 in 0.x)
- Consistent method naming from OpenAPI spec
- Auto-regenerate when Zoom updates their API
- Better type safety with generated types
