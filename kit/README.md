# Flight Log Kit

Turn a year of flights into an interactive flight log and an Instagram Story picture, using Claude.

This kit is the recipe behind the project in this repo. You fill in your trips, paste one prompt, and Claude builds:

1. **An interactive flight log page**: a real map with one line per flight in its airline's color, airline logos, a flight list, and a light game layer (pilot level from miles, achievements, collectible stamps, a "Play the season" replay).
2. **A 1080×1920 Story picture**: map, logo grid with counts, passport stamps, and an itemized "receipt" of every flight.

## What you need

- Claude Code (desktop app or CLI). Claude on claude.ai also works for the picture, but Claude Code can save files and render PNGs.
- Your flights, in one of two ways:
  - **From your email (easiest):** connect Gmail (or another mail connector) to Claude. Claude searches your airline, booking-site and credit-card travel confirmations and fills in the table for you. You check it before anything is built.
  - **By hand:** fill in [`my-trips.md`](my-trips.md).

## How to use it

1. Open [`PROMPT.md`](PROMPT.md) and copy the prompt.
2. Pick the email version or the manual version (both are in that file).
3. Fill in the short "About me" block at the top: your name as you want it shown, the year, and when you plan to post.
4. Paste it into Claude Code and answer its questions.
5. Ask for changes in plain words, for example "make the logos bigger", "more American road-trip feel", "less busy".

## Files

| File | What it's for |
|---|---|
| [`PROMPT.md`](PROMPT.md) | The copy-paste prompt (email version and manual version) |
| [`my-trips.md`](my-trips.md) | Fill-in template for your flights and style choices |
| [`STYLE-GUIDE.md`](STYLE-GUIDE.md) | The design rules that made the final version work |
| [`PRIVACY.md`](PRIVACY.md) | What to remove before you post or share |

## Example output

See [`../pictures/final/2026-dec20-story.png`](../pictures/final/2026-dec20-story.png) and the interactive page [`../index.html`](../index.html).

## A note on airline logos

Delta, Southwest, Alaska, Frontier and American wordmarks used here come from Wikimedia Commons, where they are listed as public domain. Other logos (for example United's globe and American's flight symbol) are drawn look-alikes. Airline logos are trademarks: using them to show which airlines you flew in a personal, non-commercial post is generally fine, but don't sell anything with them or imply an airline endorses you. This is general information, not legal advice.
