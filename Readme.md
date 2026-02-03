# Zoom API Client

A **fully auto-generated**, dependency-free, and 100% typed Zoom API client for Node.js. Generated from Zoom's official OpenAPI specification.

Maintained by [Nektar AI](http://nektar.ai) and used in production.

## Installation

```sh
npm install @nektarai/zoom-api-client
```

## Features

- **Zero Dependencies**: No runtime dependencies
- **Fully Typed**: Complete TypeScript type definitions generated from OpenAPI spec
- **Comprehensive Coverage**: 180+ endpoints across meetings, webinars, users, reports, recordings, and more
- **Auto-Generated**: Regenerate anytime from the latest Zoom OpenAPI spec
- **Tested**: Full test coverage with Jest

## Usage

### ZoomClient

This is the core provider of all authentication and requests for Zoom.
It is recommended to create only one `ZoomClient` instance for all Oauth (non-S2SO) purposes.

```js
import {ZoomClient} from '@nektarai/zoom-api-client';

const zoomClient = new ZoomClient({
    clientId: process.env.ZOOM_CLIENT_ID,
    clientSecret: process.env.ZOOM_CLIENT_SECRET,
    redirectUri: process.env.ZOOM_REDIRECT_URI,
    verificationKey: process.env.ZOOM_VERIFICATION_KEY, // optional
});
```

### ZoomOauth

To use the Zoom's Oauth functionality

```js
import {ZoomS2SO} from '@nektarai/zoom-api-client';

const zoomOauth = new ZoomOauth(zoomClient);

expressRouter.get('/zoom/oauth', (req, res) => {
  const state = {userId: req.params.userId};
  res.redirect(zoomOauth.getAuthorizationUrl(state));
});
```

### ZoomS2SO

To use Zoom's Server-to-server oauth functionality

```js
import {ZoomClient, ZoomS2SO} from '@nektarai/zoom-api-client';

const zoomClient = new ZoomClient({
  // S2SO credentials
})
const zoomS2so = new ZoomS2SO(zoomClient);
```

### ZoomApi

The API client provides access to all Zoom API endpoints through an intuitive, fluent interface.

#### User Operations

```js
import {ZoomApi} from '@nektarai/zoom-api-client';

const zoomApi = new ZoomApi({
  client: zoomClient,
  tokens: await zoomS2so.requestTokens(),
});

// List meetings for a user
const meetings = await zoomApi.user('me').listMeetings({ type: 'scheduled' });

// Create a meeting
const newMeeting = await zoomApi.user('me').createMeeting({
  topic: 'Team Standup',
  type: 2, // Scheduled meeting
  start_time: '2026-02-15T10:00:00Z',
});
```

#### Meeting Operations

```js
// Get meeting recordings
const recordings = await zoomApi.meeting('meeting-id').listRecordings();

// Get past meeting participants
const participants = await zoomApi.pastMeeting('meeting-uuid').listParticipants('meeting-id');
```

#### Reports & Analytics

```js
// Access reporting endpoints
const report = await zoomApi.report()....;
```

#### Devices & Hardware

```js
// List Zoom Rooms devices
const devices = await zoomApi.devices().list();
```

#### Webinars

```js
// Webinar operations
const webinar = await zoomApi.webinar('webinar-id').get();
const registrants = await zoomApi.webinar('webinar-id').listRegistrants();
```

## Code Generation

This library is auto-generated from Zoom's OpenAPI specification. To regenerate:

```bash
npm run generate
```

This will:
1. Parse the OpenAPI spec from `endpoints.json`
2. Generate TypeScript types in `src/types.generated.ts`
3. Generate API client methods in `src/zoomApi.generated.ts`
4. Format and lint the generated code

## Migration from 0.x to 1.0

Version 1.0.0 introduces breaking changes as we've transitioned to a pure OpenAPI-generated API:

**Removed convenience methods:**
- `zoomApi.me()` - use appropriate generated user methods
- `zoomApi.getZAKToken(userId)` - use generated methods
- `zoomApi.users().list()` / `users().get()` - use generated methods

**API Structure Changes:**
- Old: `meetings().list(userId)` → New: `user(userId).listMeetings()`
- Old: `meetings().create(userId, body)` → New: `user(userId).createMeeting(body)`
- Old: `meetings().get(id)` → New: Use appropriate `meeting(id)` methods
- Old: `pastMeeting(id).details()` → New: `pastMeeting(uuid).getPastMeeting(id)`
- Old: `pastMeeting(id).participants()` → New: `pastMeeting(uuid).listParticipants(id)`

**Benefits of 1.0:**
- 180+ endpoints (vs ~15 in 0.x)
- Consistent method naming from OpenAPI spec
- Auto-regenerate when Zoom updates their API
- Better type safety with generated types

## Contribution

We welcome contributions!

1. Clone the repo
2. Install dependencies: `npm install`
3. Make your changes:
   - For API updates: Update `endpoints.json` and run `npm run generate`
   - For core functionality: Edit files in `src/`
   - Add tests in `test/`
4. Ensure tests pass: `npm test`
5. Build: `npm run build`
6. Submit a PR

## [Changelog](./CHANGELOG.md)
