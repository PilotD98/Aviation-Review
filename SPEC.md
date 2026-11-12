# Recurrent — Aviation Knowledge Refresher: Build Spec

Single-page browser app (vanilla HTML/CSS/JS, no build step, no frameworks) hosted on GitHub Pages, used mainly on an iPhone in Safari and also on desktop. Progress persists in localStorage. Must work offline once loaded (no network calls except optional Google Fonts).

## Files
- `index.html` — all markup, CSS, and app logic. Loads the data files with plain `<script src>` tags in this order: `data-regs.js`, `data-ifr.js`, `data-ops.js`, `data-weather.js`, `data-aero.js`, `data-systems.js`, `data-airspace.js`, `data-aeromed.js`, `data-foi.js`, then app code.
- Each data file does exactly this and nothing else:
  ```js
  window.BANK = window.BANK || [];
  window.BANK.push(
    { ...item }, { ...item }
  );
  ```

## Item schema (every item)
```js
{
  id: "regs-mcq-001",          // unique across all files: "<topic>-<type>-<nnn>"
  type: "mcq" | "card" | "scenario" | "oral",
  topic: "regs" | "ifr" | "charts" | "nav" | "ops" | "weather" | "aero" | "multi" | "systems" | "airspace" | "aeromed" | "foi",
  ref: "14 CFR 61.56(c)",      // REQUIRED. The specific FAA source: CFR section, AIM paragraph, handbook + chapter (e.g. "PHAK Ch. 12", "AFH Ch. 13", "IFH Ch. 10", "IPH Ch. 4", "AC 00-6B", "AC 00-45H", "NTSB 830.5", "Commercial ACS", "Instrument ACS")
  tags: ["flight-review", "ipc", "atp", "cfi", "part135", "c172", "pa44"]   // optional; use "ipc" for IPC-relevant, "flight-review" for flight-review relevant, "atp"/"part135"/"cfi" for career-track items, "c172"/"pa44" for aircraft-specific
}
```
Type-specific fields:
- `mcq` and `scenario`: `q` (string), `choices` (array of exactly 4 strings), `a` (index 0–3 of the single correct choice), `exp` (explanation, 1–4 sentences, explains WHY and why the distractors are wrong when useful). `scenario` is the same shape but the stem is a realistic situation (3–6 sentences, often in a C172S or PA-44 Seminole) requiring judgment, not recall.
- `card`: `front` (prompt), `back` (answer; concise, can use line breaks with `\n`).
- `oral`: `q` (open question as a DPE/interviewer would ask it), `answer` (model answer, 2–6 sentences), `points` (array of 2–6 key points the candidate should hit).

Vary the position of the correct answer across items (roughly even spread of 0,1,2,3). Distractors must be plausible and themselves accurate-sounding but wrong. No "all of the above"/"none of the above". No trick questions on trivia; test what a working pilot/DPE/airline interviewer actually cares about.

## Topic labels for the UI
regs "Regulations (61/91)", ifr "IFR Procedures", charts "Charts & Plates", nav "Navigation & GPS", ops "Commercial Ops (135/121/117)", weather "Weather", aero "Aerodynamics & Performance", multi "Multi-Engine", systems "Aircraft Systems", airspace "Airspace & Airport Ops", aeromed "Aeromedical & ADM", foi "Instructing (FOI)"

## Accuracy rules (non-negotiable)
- The user is a commercial multi-engine, instrument-rated pilot. Wrong facts are worse than missing ones. If you are not certain of a number, rule, or wording, verify with web search against an FAA source (ecfr.gov, faa.gov AIM, FAA handbooks) before writing it. If still unsure, leave the item out.
- Use current (2026) rules. Known recent changes you must reflect:
  - AIM 5-3-3: revised ETA report when estimate is in error by more than **2 minutes** (not 3).
  - BasicMed (effective Nov 2024): aircraft up to **12,500 lb** MTOW, up to **6 passengers / 7 occupants**, ≤18,000 ft MSL, ≤250 KIAS; cannot be used for compensation/hire except as a CFI (and examiners administering tests).
  - Aircraft registration certificates are valid **7 years** (since Jan 2023).
  - Part 121 pilot mandatory retirement age remains 65.
- 14 CFR 61.57(c): 6 approaches, holding, intercepting/tracking within preceding 6 calendar months. 61.57(d): if lapsed more than 6 additional calendar months (12 total), an IPC is required.
- 14 CFR 61.56 flight review: within preceding 24 calendar months; minimum 1 hour flight training + 1 hour ground training; a proficiency check/practical test for a certificate/rating/privilege, or a completed WINGS phase, also satisfies it.
- 61.23: Second-class medical for commercial privileges is valid 12 calendar months at any age. First-class: 12 calendar months under 40, 6 calendar months 40+. Third-class: 60 calendar months under 40, 24 calendar months 40+.
- Part 117 (121 crews): unaugmented flight time max 8 hr (report 0000–0459 and 2000–2359) or 9 hr (0500–1959). FDP per Table B: 9–14 hr by report time and segments. Cumulative: 100 hr flight time / 672 consecutive hr; 1,000 hr / 365 days; 60 FDP hr / 168 hr; 190 FDP hr / 672 hr. Rest: 10 consecutive hr with 8 hr uninterrupted sleep opportunity before FDP; 30 consecutive hr free in any 168 hr.
- Part 135.267 (unscheduled 1–2 pilot): 8 hr flight time (1 pilot) / 10 hr (2 pilots) in 24 consecutive hours; 10 consecutive hr rest in the 24 hr preceding completion; duty up to 14 hr; 500 hr/calendar quarter, 800 hr/two consecutive quarters, 1,400 hr/calendar year; 13 rest periods of 24 hr per quarter. 135.265 (scheduled): 1,200 hr/yr, 120 hr/month, 34 hr/7 days.
- 135.243 PIC minimums: VFR 500 hr total, 100 XC, 25 night; IFR 1,200 hr total, 500 XC, 100 night, 75 instrument (50 in actual flight). Checks: 135.293 competency 12 cal months, 135.297 instrument proficiency 6 cal months, 135.299 line check 12 cal months.
- GPS alternate planning (AIM 1-1-17/1-1-18): non-WAAS (TSO-C129/C196 with FDE, RAIM check) may plan a GPS-based approach at destination OR alternate, not both. WAAS (TSO-C145/C146) may plan GPS approaches at both, but at the alternate must plan on LNAV or circling MDA (LNAV/VNAV DA only with baro-VNAV). Standard alternate minimums: precision 600-2, non-precision 800-2 (so an RNAV LNAV at the alternate is planned as non-precision).

## Verified aircraft data (POH values; label as "verify against your airplane's POH")
**Cessna 172S (Nav III / G1000 era)** — Lycoming IO-360-L2A, 180 hp @ 2700 rpm, fuel injected, fixed-pitch 76 in prop. Fuel 56 gal total / 53 usable (28/26.5 per tank), 100LL. Oil 8 qt max. Electrical 28 V, 60 A alternator, 24 V battery. MTOW 2,550 lb (utility 2,200). Vso 40, Vs1 48, Vr 55, Vx 62, Vy 74, best glide 68, Va 105 @ 2,550 / 98 @ 2,200 / 90 @ 1,900, Vfe 110 (10°) / 85 (10–30°), Vno 129, Vne 163 KIAS. Flaps 0/10/20/30 electric. Load factor +3.8/−1.52 (normal). Max demonstrated crosswind 15 kt. Fuel selector Both/Left/Right/Off; 13 fuel drains; LOW FUEL annunciator below ~5 gal for 60 s.
**Piper PA-44-180 Seminole** — two Lycoming O-360-A1H6, 180 hp @ 2700 rpm each, carbureted, counter-rotating (right engine LO-360 turns counterclockwise viewed from behind) → **no critical engine**. Hartzell 2-blade constant-speed full-feathering props. MTOW 3,800 lb, max ramp 3,816, max landing 3,800. Fuel 110 gal total / 108 usable (55/54 per nacelle tank), 100LL; selector ON/OFF/X-FEED. Vso 55, Vs 57 (Vs1), Vmc 56 (red line), Vr 75, Vx 82, Vxse 82, Vsse 82, Vy 88, Vyse 88 (blue line), Vfe 111, Vlo up 109, Vlo down 140, Vle 140, Vno 169, Vne 202, Va 135 @ 3,800 / 112 @ 2,700 KIAS. Max demonstrated crosswind 17 kt. Hydraulic landing gear via electrically driven pump; emergency extension by free-fall (release hydraulic pressure). Electrical: older airframes 14 V with two 70 A alternators and 12 V battery; 2000+ airframes 28 V with two alternators — do NOT write a question that depends on which one.
