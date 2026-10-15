# Yearly flight log automation

A scheduled Claude task checks Gmail every day at 8 AM for flight bookings, changes and cancellations and keeps the current year's flight log up to date.

- **2026** is finished and frozen: `index.html`, `story.html` and `pictures/` at the repo root.
- **2027 onward:** each year has its own folder, `2027/index.html` (the page) and `2027/flights.js` (the data). The page is a copy of `template/flight-log.html`. All content comes from `flights.js`, so the automation only edits data.
- On the first run of a new year, the task creates that year's folder from the template.
- Flights flip from "Upcoming" to "Flown" on the page by themselves once they land.
- Every flight, including upcoming bookings, is published to this public repo.

## Data format

See the comment at the top of any `YEAR/flights.js`. Airports need `lat`, `lon` and `tz` (standard-time hours behind UTC). New airlines need a 2-letter `code` and a line `color`. Airlines without a logo file in `pictures/logos-official/` show their name instead.

## Check-in file

`automation/state.json` records the last time the task ran, so each run only reads new email.
