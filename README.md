# Recurrent — Aviation Knowledge Refresher

## ✈️ [Open the app → pilotd98.github.io/Aviation-Review](https://pilotd98.github.io/Aviation-Review/)

On iPhone: open that link in Safari, tap Share → **Add to Home Screen**.

A browser-based study app for a commercial multi-engine, instrument-rated pilot getting back into aviation. Flashcards, quizzes, scenario questions, and an oral-exam mode with spaced repetition. Runs entirely in the browser; no server, no accounts.

## Run it

- **Local:** open `index.html` in a browser. That's it.
- **GitHub Pages:** push this folder to a repo, enable Pages (Settings → Pages → Deploy from branch → `main` / root). Open the URL on your iPhone in Safari, then Share → **Add to Home Screen** for a full-screen app.

Progress is saved on each device in `localStorage` (key `recurrent.v1`). Use **Stats → Export** to move it between devices.

## What's in it

- **700 items** across 16 topics: Regulations (61/91), IFR Procedures, Charts & Plates, Navigation & GPS, Commercial Ops (135/121/117), Weather, Aerodynamics, Multi-Engine, Aircraft Systems, Airspace & Airport Ops, Aeromedical & ADM, Performance & W&B, Comms & ATC, Emergency Procedures, High-Altitude & Turbine, Instructing (FOI).
- 415 multiple-choice, 136 flashcards, 58 scenarios, 91 oral-exam questions.
- **Learn tab**: 46 short review lessons (one topic each, with mnemonics, tables and a "Quiz this lesson" button), aligned to the Commercial and Instrument ACS and the FAA knowledge-test style.
- Every item carries an FAA source (CFR section, AIM paragraph, or handbook chapter) shown as a **Source** pill with the item id.
- Aircraft reference cards for the Cessna 172S and Piper PA-44-180 Seminole.
- "Back to current" checklist (flight review, IPC, medical, 90-day currency, documents).
- Tag filters: IPC, flight review, ATP, Part 135, CFI, C172, PA-44, Commercial ACS, Instrument ACS, Knowledge test.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (UI + logic) |
| `data-*.js` | Question bank, one file per topic group (`data-more.js` holds the v2 topics) |
| `data-lessons-*.js` | Learn-tab lessons |
| `SPEC.md`, `SPEC-v2.md` | Build specs, schemas, and the verified aircraft/regulatory facts the content was written against |

## Reporting a wrong question

Every card shows its id (e.g. `ifr-mcq-014`). Note the id and what's wrong; the item can be fixed in the matching `data-*.js` file.

## Accuracy note

The bank was written against current (2026) FAA sources and then independently reviewed item by item. Aircraft numbers are POH values for a typical airplane; always verify against the POH for the specific airframe you fly. This is a study aid, not a substitute for the regulations, the AIM, or an instructor.
