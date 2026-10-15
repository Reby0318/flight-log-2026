# Style Guide

Rules learned while building the example. Give this file to Claude along with the prompt.

## Data
- Each flight is one row: date, from, to, airline, flight number, times.
- Distances are great-circle miles between airports. Totals must match everywhere they appear: ticket, logo counts, receipt, stamps.
- "Flown" vs "upcoming" is decided by the posting date, not today.
- Red-eyes: list the flight by its departure date; an "ARRIVED" passport stamp shows the landing date.
- US date format everywhere: month first (Jun 13, 2026 or 06/13). No leading zero on the day in words (Jul 1, not Jul 01).
- Check taglines against the facts (don't say "coast to coast" unless you reached both coasts).

## Map
- Use a real map (country and state outlines), not a hand-drawn coastline.
- One curved line per flight, colored by airline. Flights on the same route fan out side by side so each one is visible.
- Label airports with the code and city. Keep labels clear of lines and stickers.

## Airline logos
- Use each airline's real logo where a public-domain file exists; otherwise a faithful drawn look-alike.
- Balance logos optically: wide wordmarks get less space, stacked or small logos get more, so they all look the same size.
- Put each count (×4) right next to its logo.

## Picture (1080x1920)
- One hero (the map). Everything else supports it.
- Two or three fonts at most.
- Calm palette (navy, cream, one red), with airline colors only where they carry meaning.
- Avoid the "AI template" look: no piles of stickers, no generic smiley doodles, nothing decorated just to fill space.
- Fixed pieces that worked: title, map with logo grid, a season-pass ticket with the totals, passport stamps (one per flight), itemized receipt.
- Optional American touches: a license plate, an interstate shield, state patches with real state nicknames.

## Interactive page
- Works on a phone (no sideways scrolling) and in dark mode.
- Game layer stays calm: pilot level from miles, achievements, airline cards, route stars, collectible stamps, a season replay.
- Every button gives feedback. Tapping a blank spot clears the collected stamps.
