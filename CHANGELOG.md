# Changelog

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
