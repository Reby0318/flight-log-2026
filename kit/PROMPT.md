# The Prompt

Copy one of the two versions below into Claude Code. Replace everything in `[brackets]`.

---

## Version A: fill it in from my email

```text
ABOUT ME
- Name to show: [e.g. Alex Kim]  (or "first name only" / "no name")
- Year: [2026]
- I plan to post on: [Dec 20, 2026]
- Home airport(s): [e.g. SEA]
- Look I want: [e.g. clean scrapbook, American road-trip, TV-season, minimal]  (or "show me options")

TASK
Build me a "year in the air" flight log from my email.

Step 1: Find my flights.
Search my email for flight confirmations from [Jan 1, 2026] to today, plus any
bookings for later this year. Look at airline emails (United, Delta, American,
Southwest, Alaska, JetBlue, Frontier, Spirit, etc.), booking sites (Expedia,
Chase Travel, Amex Travel, Google Flights, etc.) and check-in / trip-reminder
emails. For each flight get: date, from, to, airline, flight number, departure
and arrival times. Watch for cancellations, rebookings and schedule changes and
use the final version. Do not copy confirmation codes, card numbers or prices
into anything you build.

Step 2: Show me the list before building anything.
Give me one table of every flight (date, route, airline, flight number, times,
flown/upcoming) and point out anything uncertain: gaps between trips, flights
that look cancelled, or my own notes that don't match the emails.
Wait for me to confirm.

Step 3: Build, following STYLE-GUIDE.md:
  a) An interactive flight log page (single HTML file).
  b) One 1080x1920 Instagram Story picture (PNG), dated as of my posting day.
Save everything to [a folder of my choice / a new GitHub repo].
```

---

## Version B: I'll type my flights

Fill in [`my-trips.md`](my-trips.md) first, then paste this along with it:

```text
ABOUT ME
- Name to show: [ ]
- Year: [ ]
- I plan to post on: [ ]
- Look I want: [ ]

TASK
Here are my flights (from my-trips.md). Check them for mistakes, such as a return
flight before its outbound flight, a trip with no way home, or a typo in an airport
code, and show me one clean table. Wait for my OK, then build:
  a) An interactive flight log page (single HTML file).
  b) One 1080x1920 Instagram Story picture (PNG), dated as of my posting day.
Follow STYLE-GUIDE.md.

[paste my-trips.md here]
```

---

## Follow-up prompts that worked well

- "Show me 6 versions of the picture so I can pick."
- "Make it less busy. Keep only the map, the logos, the passport and the receipt."
- "Balance the airline logos so they look the same size."
- "Use US date format everywhere (month first)."
- "Add a little American culture: license plate, interstate shield, state patches."
- "Make the flight log page more like a game, but keep the colors calm."
- "Do a final check of every title, number and date."
