# Recurrent v2 additions

Read SPEC.md first; everything there still applies (schema, accuracy rules, verified aircraft data).

## New topics (added to the TOPICS list in index.html)
- `perf` — "Performance & W&B" (takeoff/landing/climb/cruise performance, density altitude, chart-style problems, weight-and-balance arithmetic, Va/limits by weight)
- `comms` — "Communications & ATC" (phraseology, readbacks, clearances, CRAFT, PDC/CPDLC basics, position reports, lost-comm VFR, emergencies on the radio, FSS, ATIS/AWOS)
- `emerg` — "Emergency Procedures" (engine failure, fires, electrical, gear, pitot-static, icing encounter, inadvertent IMC, ditching/forced landing, emergency declaration, ELT)
- `hialt` — "High-Altitude & Turbine" (ATP/airline track: pressurization, O2 masks, rapid decompression, turbine engine basics, swept-wing aero, Mach/high-speed, RVSM, jet performance terms; keep it at interview/ATP-written depth)

Items in new topics use ids `<topic>-<type>-<nnn>` as before, in a NEW file `data-more.js` (new topics) — do not add to the existing files. Items that strengthen existing topics also go in `data-more.js` with their existing topic field and ids continuing the numbering safely: use `<topic>-<type>-1xx` (e.g. `regs-mcq-101`) so they never collide.

## Lessons (new file `data-lessons.js`)
```js
window.LESSONS = window.LESSONS || [];
window.LESSONS.push({
  id: "ifr-holding",            // unique slug
  topic: "ifr",                 // one of the 16 topic keys
  title: "Holding patterns",
  minutes: 6,                   // honest reading time
  refs: ["AIM 5-3-8"],          // sources
  tags: ["ipc"],                // optional, same tag vocabulary
  quiz: ["ifr-mcq-014","ifr-card-005"],  // OPTIONAL explicit item ids; otherwise app picks by topic + keywords
  keywords: ["hold","holding","entry","EFC"],  // used to find related items when quiz is empty
  body: [                        // ordered blocks
    { h: "Why it matters" },                       // heading
    { p: "..." },                                  // paragraph (plain text; **bold** allowed)
    { ul: ["...", "..."] },                        // bullet list
    { ol: ["...", "..."] },                        // numbered steps
    { table: { head: ["Alt", "Leg"], rows: [["≤14,000", "1 min"], [">14,000", "1.5 min"]] } },
    { callout: "Key number or gotcha", kind: "tip" | "warn" | "memo" },
    { memo: { title: "6-6-HIT", text: "6 approaches, 6 months, Holding, Intercepting, Tracking" } }  // mnemonic card
  ]
});
```
Each lesson: 400–900 words, written as a focused review for a rated pilot who has been away (assume they knew it once; restore it fast, flag what changed). Concrete numbers, the rule's exact trigger words, common DPE/interview follow-ups. Every number must match SPEC.md or be verified. End each lesson with `{ h: "Check yourself" }` + `{ ul: [3–5 one-line self-test prompts] }`.

## ACS alignment
Tag items and lessons with the ACS area they support using the existing tag vocabulary plus these new tags (add to TAGS in index.html): `cax` (Commercial ACS), `ira` (Instrument ACS), `atp` (already), `kt` (FAA knowledge-test style). Knowledge-test style items are short, one-concept, computational or chart-reading, exactly like FAA sample questions (but original wording — do not copy FAA question text verbatim).
