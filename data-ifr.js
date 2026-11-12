window.BANK = window.BANK || [];
window.BANK.push(
  /* =====================================================================
     IFR PROCEDURES  (topic: "ifr")
     ===================================================================== */

  // ---------- ifr / mcq ----------
  {
    id: "ifr-mcq-001", type: "mcq", topic: "ifr", ref: "14 CFR 91.167(a)", tags: ["ipc"],
    q: "Under 14 CFR 91.167, an airplane operating IFR must carry enough fuel to do what?",
    choices: [
      "Fly to the destination, then fly for 30 minutes at normal cruise",
      "Fly to the destination, then to the alternate, then for 30 minutes at normal cruise",
      "Fly to the destination, then to the alternate (if required), then for 45 minutes at normal cruising speed",
      "Fly to the destination, then to the alternate, then for 1 hour at normal cruise"
    ],
    a: 2,
    exp: "91.167(a) requires fuel to complete the flight to the first airport of intended landing, fly from that airport to the alternate (when one is required), and then fly for 45 minutes at normal cruising speed. The 30-minute figure applies to helicopters. Fuel burned in holding, an approach, and a missed is part of the planning reality that the 45 minutes is meant to cover, so treat it as a floor, not a target."
  },
  {
    id: "ifr-mcq-002", type: "mcq", topic: "ifr", ref: "14 CFR 91.169(b)", tags: ["ipc"],
    q: "You are filing IFR to an airport with a published instrument approach. When is an alternate airport NOT required on the flight plan?",
    choices: [
      "When, from 1 hour before to 1 hour after your ETA, the forecast ceiling is at least 2,000 ft above airport elevation and visibility is at least 3 SM",
      "When the destination has an ILS and the forecast at your ETA is at least 600-2",
      "When the destination forecast at your ETA is at least 1,000-3",
      "When the destination has weather reporting and a control tower"
    ],
    a: 0,
    exp: "This is the 1-2-3 rule of 91.169(b): for the period 1 hour before to 1 hour after the ETA, ceiling at least 2,000 ft above the airport elevation and visibility at least 3 SM, AND the destination must have a standard instrument approach. If the destination has no IAP at all, an alternate is always required regardless of weather. The 600-2/800-2 numbers are alternate-airport minimums, not the destination exemption test."
  },
  {
    id: "ifr-mcq-003", type: "mcq", topic: "ifr", ref: "14 CFR 91.169(c)(1)", tags: ["ipc"],
    q: "Your chosen alternate has only an RNAV (GPS) approach with LNAV minimums and no non-standard alternate minimums published. What forecast weather must exist at your ETA to legally list it as an alternate?",
    choices: [
      "Ceiling 600 ft and visibility 2 SM",
      "Ceiling 1,000 ft and visibility 3 SM",
      "The LNAV MDA and visibility published on the plate",
      "Ceiling 800 ft and visibility 2 SM"
    ],
    a: 3,
    exp: "Standard alternate minimums under 91.169(c)(1) are 600-2 for a precision approach and 800-2 for a non-precision approach. An RNAV LNAV approach is non-precision, so 800-2 applies. Published approach minimums are for flying the approach, not for selecting an alternate, and 1,000-3 is the VFR-based figure used for the destination exemption."
  },
  {
    id: "ifr-mcq-004", type: "mcq", topic: "ifr", ref: "14 CFR 91.169(c)(2)", tags: ["ipc"],
    q: "You want to list an airport with no instrument approach procedure as your IFR alternate. What does the forecast weather at that airport need to support?",
    choices: [
      "At least 1,000-3 at the ETA",
      "Descent from the MEA, approach, and landing under basic VFR",
      "At least 800-2 at the ETA",
      "You cannot list an airport without an approach as an alternate"
    ],
    a: 1,
    exp: "91.169(c)(2) permits an alternate with no published IAP if the ceiling and visibility will allow descent from the MEA, approach, and landing under basic VFR. In practice that means you must be able to get down from the enroute altitude in VMC and land VFR. The 800-2 and 600-2 figures apply only when the alternate has a published approach."
  },
  {
    id: "ifr-mcq-005", type: "mcq", topic: "ifr", ref: "14 CFR 91.171", tags: ["ipc"],
    q: "Which VOR check tolerance is correct under 91.171?",
    choices: [
      "VOT check: ±6°; airborne checkpoint: ±4°",
      "Ground checkpoint: ±6°; dual-receiver check: 6° between units",
      "VOT and designated ground checkpoint: ±4°; airborne checkpoint or prominent landmark on an airway: ±6°; dual receivers: 4° maximum between them",
      "All checks: ±4°, performed within the preceding 60 days"
    ],
    a: 2,
    exp: "91.171 allows ±4° for a VOT or designated ground checkpoint, ±6° for an airborne checkpoint (or an airway centerline over a prominent landmark, preferably more than 20 NM from the VOR), and a maximum 4° spread between two independent receivers checked against each other. The check must have been done within the preceding 30 days for the VOR to be used under IFR."
  },
  {
    id: "ifr-mcq-006", type: "mcq", topic: "ifr", ref: "14 CFR 91.171(d)", tags: ["ipc"],
    q: "What must a VOR check entry in the aircraft log or other record contain?",
    choices: [
      "Date, place, bearing error, and the signature of the person making the check",
      "Date, aircraft tach time, VOR frequency, and the name of the station",
      "Date, place, both receivers' indicated radials, and the pilot's certificate number",
      "Date, bearing error, and the repair station certificate number"
    ],
    a: 0,
    exp: "91.171(d) requires the person making the check to enter the date, place, bearing error, and sign the aircraft log or other record. Pilots commonly remember it as 'DPBS' or 'date, place, bearing error, signature.' Dual-receiver checks are logged the same way."
  },
  {
    id: "ifr-mcq-007", type: "mcq", topic: "ifr", ref: "14 CFR 91.175(c)(3)(i)", tags: ["ipc"],
    q: "At DA on an ILS the only thing you can see is the approach light system. What are you permitted to do?",
    choices: [
      "Continue to a landing because the approach lights are an approved visual reference",
      "Descend to 100 ft above the touchdown zone elevation, but no lower unless the red terminating bars or red side-row bars are also distinctly visible",
      "Continue only if the sequenced flashers are visible",
      "Execute a missed approach immediately because approach lights alone do not count"
    ],
    a: 1,
    exp: "The approach light system is a listed visual reference in 91.175(c)(3), so you may continue below DA. However, using the approach lights alone you may not descend below 100 ft above TDZE unless the red terminating bars or red side-row bars (ALSF-type systems) are distinctly visible and identifiable. If by 100 ft above TDZE you still have only the white lights, a missed approach is required."
  },
  {
    id: "ifr-mcq-008", type: "mcq", topic: "ifr", ref: "14 CFR 91.175(c)(2), (d)", tags: ["ipc"],
    q: "The ATIS reports visibility 1/2 SM; your ILS requires 1/2 SM (RVR 2400). At DA you see the runway environment, but it is obvious the flight visibility is less than 1/2 SM. Under Part 91, what controls?",
    choices: [
      "Reported ground visibility; because it meets minimums you may land",
      "RVR, if reported, otherwise tower visibility",
      "Prevailing visibility as reported by the ATIS at the time of the approach clearance",
      "Flight visibility; it must be at least the prescribed visibility, so you must go missed"
    ],
    a: 3,
    exp: "For Part 91, 91.175(c)(2) and (d) make flight visibility the controlling value: you may not descend below DA/MDA or land unless the flight visibility is at least that prescribed for the approach. Reported visibility does not prohibit a Part 91 pilot from commencing the approach, but it cannot substitute for what you actually see. (Part 121/135 operators are additionally bound by reported visibility before passing the FAF.)"
  },
  {
    id: "ifr-mcq-009", type: "mcq", topic: "ifr", ref: "14 CFR 91.185(c)(1)", tags: ["ipc"],
    q: "In IFR conditions with two-way radio failure, in what order of priority does 91.185 tell you to select your route?",
    choices: [
      "Filed, then assigned, then expected, then vectored",
      "Expected, then assigned, then filed, then direct",
      "Assigned; if being vectored, direct to the fix/route specified in the vector clearance; then the route ATC advised to expect; then the route filed",
      "Direct to destination by the most expeditious route available"
    ],
    a: 2,
    exp: "The memory aid is AVEF: Assigned route; if being Vectored, direct to the fix, route, or airway specified in the vector clearance; the route ATC has advised may be Expected in a further clearance; and finally the route Filed in the flight plan. 'Expected' comes before 'filed' because ATC has already planned traffic around what they told you to expect."
  },
  {
    id: "ifr-mcq-010", type: "mcq", topic: "ifr", ref: "14 CFR 91.185(c)(2)", tags: ["ipc"],
    q: "Lost comms in IMC. You were assigned 6,000, told to expect 9,000 in 10 minutes, and the MEA on the next segment is 7,000. What altitude do you fly on that segment?",
    choices: [
      "9,000 ft (the expected altitude), because it is the highest of the three for that segment",
      "6,000 ft, the last assigned altitude",
      "7,000 ft, the MEA",
      "The altitude you filed in the flight plan"
    ],
    a: 0,
    exp: "91.185(c)(2) requires the highest of: the MEA for the route segment being flown, the altitude ATC advised to expect in a further clearance, or the last assigned altitude. Here 9,000 is highest, so fly 9,000. The comparison is made for each segment, so you may climb and descend as segments change (the MEA term uses the minimum altitude for IFR operations for that segment)."
  },
  {
    id: "ifr-mcq-011", type: "mcq", topic: "ifr", ref: "14 CFR 91.185(c)(3)", tags: ["ipc"],
    q: "Lost comms in IMC. Your clearance limit is a holding fix that is NOT a fix from which an approach begins, and you were given an EFC time. When do you leave the clearance limit?",
    choices: [
      "Immediately upon reaching it, proceed to an IAF and begin the approach",
      "At the EFC time, then proceed to a fix from which an approach begins and commence descent/approach as close as possible to the ETA from your flight plan",
      "At your flight-plan ETA, holding until then",
      "After one turn in holding, then direct to the IAF"
    ],
    a: 1,
    exp: "91.185(c)(3)(ii): if the clearance limit is not a fix from which an approach begins, leave it at the EFC time if one was received; if no EFC was received, leave upon arrival over the clearance limit. Then proceed to a fix from which an approach begins and start the descent/approach as close as possible to the ETA calculated from the filed or amended estimated time en route. If the clearance limit IS an approach fix, you begin the approach as close as possible to the EFC, or to the ETA if no EFC was given."
  },
  {
    id: "ifr-mcq-012", type: "mcq", topic: "ifr", ref: "14 CFR 91.185(b)", tags: ["ipc"],
    q: "You lose two-way communications while IFR and then break out into VFR conditions. What does 91.185 require?",
    choices: [
      "Continue the flight IFR as filed to the destination because the clearance remains valid",
      "Climb to the MEA and squawk 7600 until the destination",
      "Return to the departure airport under VFR",
      "Continue the flight under VFR and land as soon as practicable"
    ],
    a: 3,
    exp: "91.185(b): if the failure occurs in VFR conditions, or if VFR conditions are encountered after the failure, continue the flight under VFR and land as soon as practicable. 'Practicable' is not 'possible'; you are expected to pick a suitable airport, not the nearest patch of pavement, but you are not authorized to simply press on IFR to the destination if VMC allows an earlier landing."
  },
  {
    id: "ifr-mcq-013", type: "mcq", topic: "ifr", ref: "AIM 6-4-1, AIM 4-1-20", tags: ["ipc", "flight-review"],
    q: "Which transponder code should you squawk for a two-way radio communications failure?",
    choices: ["7700", "7500", "7600", "7777"],
    a: 2,
    exp: "7600 signals radio failure; 7700 is emergency; 7500 is hijack/unlawful interference. 7777 is reserved for military interceptors. With a comm failure you should also try the other radio, a handheld, transmitting in the blind, and listening over the VOR or on the last frequency used."
  },
  {
    id: "ifr-mcq-014", type: "mcq", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    q: "Cleared to hold north of a VOR on the 360 radial, standard turns (inbound course 180°). You are arriving on a heading of 090°. Which entry is recommended?",
    choices: [
      "Parallel entry",
      "Teardrop entry",
      "Direct entry",
      "Either direct or teardrop; the pilot chooses"
    ],
    a: 0,
    exp: "With an inbound course of 180° and right turns, the outbound heading is 360° and the pattern lies on the west side of the inbound course. Measure the AIM entry sectors from the outbound heading: headings in the 70° sector on the holding-pattern side (290°–360°) use a teardrop; headings in the 110° sector on the other side (360° clockwise through 110°) use a parallel entry; everything else (110°–290°, which includes arriving along the inbound course) is a direct entry. Heading 090° falls in the parallel sector, so cross the fix, turn to parallel the inbound course outbound (heading 360°) on the non-holding (east) side for 1 minute, then turn left through more than 180° toward the holding side and return to the fix or intercept the inbound course. The AIM allows a 5° tolerance at the sector boundaries."
  },
  {
    id: "ifr-mcq-015", type: "mcq", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    q: "What are the maximum holding airspeeds for civil aircraft (unless a lower speed is charted)?",
    choices: [
      "200 KIAS up to 14,000 ft MSL; 230 KIAS above 14,000 ft",
      "200 KIAS from the MHA through 6,000 ft MSL; 230 KIAS from 6,001 through 14,000 ft; 265 KIAS at 14,001 ft and above",
      "210 KIAS up to 10,000 ft MSL; 250 KIAS above 10,000 ft",
      "175 KIAS at all altitudes for propeller aircraft; 230 KIAS for turbojets"
    ],
    a: 1,
    exp: "AIM 5-3-8 Table: MHA–6,000 ft MSL 200 KIAS; 6,001–14,000 ft 230 KIAS; 14,001 ft and above 265 KIAS. Holding patterns are designed around these speeds, so exceeding them can take you outside protected airspace. Charted patterns may restrict speed further, and you should begin slowing to holding speed about 3 minutes before the fix."
  },
  {
    id: "ifr-mcq-016", type: "mcq", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    q: "What inbound leg time is used in a standard holding pattern at 16,000 ft MSL?",
    choices: ["1 minute", "2 minutes", "30 seconds", "1.5 minutes"],
    a: 3,
    exp: "AIM 5-3-8: inbound leg 1 minute at or below 14,000 ft MSL, 1.5 minutes above 14,000 ft. The inbound leg is what is timed; you adjust the outbound leg time to make the inbound leg come out right. Outbound timing starts over or abeam the fix, whichever occurs later."
  },
  {
    id: "ifr-mcq-017", type: "mcq", topic: "ifr", ref: "AIM 5-3-3", tags: ["ipc"],
    q: "Which of the following is a required report to ATC only when NOT in radar contact?",
    choices: [
      "Vacating a previously assigned altitude",
      "Executing a missed approach",
      "Leaving the final approach fix inbound on a non-precision approach (or the outer marker/fix used in lieu on a precision approach)",
      "Unable to maintain a climb or descent of at least 500 fpm"
    ],
    a: 2,
    exp: "AIM 5-3-3 lists two groups. Reports required at all times include vacating an altitude, VFR-on-top altitude changes, inability to climb/descend 500 fpm, a missed approach, TAS changes of 5% or 10 kt (whichever is greater), reaching and leaving a holding fix, loss of navigation/communication capability, and safety-of-flight information. Reports required only when not in radar contact are leaving the FAF/OM inbound and a revised ETA when the previous estimate is in error by more than 2 minutes."
  },
  {
    id: "ifr-mcq-018", type: "mcq", topic: "ifr", ref: "AIM 5-3-3", tags: ["ipc"],
    q: "You filed a TAS of 160 kt in your PA-44. At cruise you are only truing 145 kt. Must you report this?",
    choices: [
      "Yes; the change exceeds 10 kt, which is the larger of 5% (8 kt) or 10 kt",
      "No; only changes of more than 20 kt must be reported",
      "No; TAS changes are only reported when not in radar contact",
      "Yes, but only if the change also alters your ETA by more than 2 minutes"
    ],
    a: 0,
    exp: "AIM 5-3-3 requires reporting a change in average TAS at cruise when it varies by 5 percent or 10 knots, whichever is greater, from the filed value. Five percent of 160 is 8 kt, so 10 kt is the threshold; a 15-kt change exceeds it. This report is required at all times, not just outside radar contact, because ATC uses filed TAS for flow and separation planning."
  },
  {
    id: "ifr-mcq-019", type: "mcq", topic: "ifr", ref: "14 CFR 97.3; AIM 5-4-7", tags: ["ipc"],
    q: "Aircraft approach categories are based on what speed, and what is the Category B speed range?",
    choices: [
      "Vy at max gross weight; Category B is 100–130 kt",
      "Vref, or 1.3 Vso at maximum certificated landing weight; Category B is 91–120 kt",
      "Vso at max landing weight; Category B is 61–90 kt",
      "Final approach speed as flown; Category B is 121–140 kt"
    ],
    a: 1,
    exp: "Per 14 CFR 97.3, the category is based on Vref if specified, otherwise 1.3 Vso at maximum certificated landing weight: A below 91 kt, B 91–120, C 121–140, D 141–165, E 166 kt or more. If you actually fly a higher speed than your category (for example circling fast in a Seminole), AIM 5-4-7 says use the minimums for the higher category because the protected area grows with speed."
  },
  {
    id: "ifr-mcq-020", type: "mcq", topic: "ifr", ref: "AIM 1-1-18; AIM 5-4-5", tags: ["ipc"],
    q: "How is an RNAV (GPS) approach to LPV minimums classified?",
    choices: [
      "A precision approach, because it has a DA and vertical guidance",
      "A non-precision approach, because no ground-based glideslope is used",
      "A precision approach only when LPV minimums are 200 ft HAT or lower",
      "An approach with vertical guidance (APV); it uses a DA but is not a precision approach"
    ],
    a: 3,
    exp: "LPV is flown to a DA with WAAS-derived vertical guidance, but AIM 1-1-18 classifies it as an APV, not a precision approach, because it does not meet the ICAO precision-approach definition. This matters for alternate planning: an LPV at an alternate is planned at the LNAV or circling MDA, and the airport is treated as a non-precision (800-2) alternate unless otherwise published."
  },
  {
    id: "ifr-mcq-021", type: "mcq", topic: "ifr", ref: "AIM 5-4-23", tags: ["ipc"],
    q: "What are the minimum reported weather conditions for ATC to clear you for a visual approach?",
    choices: [
      "Ceiling at least 500 ft above the MVA and visibility 1 SM",
      "No reported minimums; the pilot need only have the airport in sight",
      "Reported ceiling at or above 1,000 ft and visibility 3 SM or greater",
      "Reported ceiling at or above 1,500 ft and visibility 5 SM"
    ],
    a: 2,
    exp: "AIM 5-4-23: a visual approach is conducted on an IFR flight plan when the reported ceiling is at or above 1,000 ft and visibility is 3 SM or greater, and the pilot has the airport or the preceding aircraft in sight. The pilot must remain clear of clouds and is responsible for separation from an aircraft they are following. A visual approach is not an IAP and has no missed approach segment; if you go around, ATC expects you to remain clear of clouds and contact them."
  },
  {
    id: "ifr-mcq-022", type: "mcq", topic: "ifr", ref: "AIM 5-4-25", tags: ["ipc"],
    q: "Which set of conditions is required for a contact approach?",
    choices: [
      "The pilot requests it, reported ground visibility at the airport is at least 1 SM, the pilot can remain clear of clouds, and the airport has a standard or special instrument approach",
      "ATC offers it, flight visibility is at least 3 SM, and the pilot has the airport in sight",
      "The pilot requests it, reported ceiling is at least 1,000 ft, and the airport has an operating control tower",
      "The pilot requests it, reported ground visibility is at least 1/2 SM, and the aircraft is radar-identified"
    ],
    a: 0,
    exp: "AIM 5-4-25: a contact approach must be requested by the pilot (ATC may not initiate it), requires reported ground visibility of at least 1 SM, the ability to remain clear of clouds with at least 1 SM flight visibility, and an airport with a standard or special IAP. Unlike a visual approach, you do not need the airport in sight; you proceed visually to it. There is no ceiling requirement."
  },
  {
    id: "ifr-mcq-023", type: "mcq", topic: "ifr", ref: "AIM 4-4-3; Pilot/Controller Glossary (CRUISE)", tags: ["ipc"],
    q: "ATC says 'cruise 7,000.' What does that clearance authorize?",
    choices: [
      "Maintain exactly 7,000 until cleared for an approach",
      "Operate at any altitude from the minimum IFR altitude up to and including 7,000, climbing or descending at your discretion, and it authorizes an approach at the destination airport",
      "Operate at any altitude at or above 7,000 as traffic permits",
      "Maintain 7,000 and descend only after reporting leaving it"
    ],
    a: 1,
    exp: "A cruise clearance assigns a block from the minimum IFR altitude up to and including the cruise altitude; climbs and descents within it are at pilot's discretion. Once you report leaving an altitude in a descent you may not return to it without a new clearance. A cruise clearance also serves as clearance for an approach at the destination; it is commonly used in non-radar environments."
  },
  {
    id: "ifr-mcq-024", type: "mcq", topic: "ifr", ref: "IFH Ch. 6", tags: ["ipc"],
    q: "Approximately what bank angle produces a standard-rate turn at 120 kt TAS?",
    choices: ["10°", "25°", "30°", "18°"],
    a: 3,
    exp: "A useful rule of thumb is bank angle ≈ 15% of TAS, or TAS ÷ 10 plus 5. At 120 kt that gives roughly 18°. Standard rate is 3° per second (a 360° turn in 2 minutes), and the required bank increases with TAS because turn radius grows with speed."
  },
  {
    id: "ifr-mcq-025", type: "mcq", topic: "ifr", ref: "AIM 5-4-9; 14 CFR 91.175(j)", tags: ["ipc"],
    q: "In which situation is a procedure turn (or hold-in-lieu) permitted?",
    choices: [
      "When ATC gives you radar vectors to the final approach course",
      "When the approach segment is labeled 'NoPT'",
      "When you arrive at the IAF on a transition without a NoPT designation and have not been cleared straight-in",
      "When conducting a timed approach from a holding fix"
    ],
    a: 2,
    exp: "14 CFR 91.175(j) and AIM 5-4-9: a procedure turn may not be flown when ATC provides radar vectors to final, when the segment is marked NoPT, during a timed approach, or when ATC clears you 'straight-in.' When the charted segment requires a course reversal and none of those exceptions applies, the PT is required (and ATC must be told if you need to fly one when they expect straight-in). Remain within the charted distance, normally 10 NM, and at or below 200 KIAS."
  },
  {
    id: "ifr-mcq-026", type: "mcq", topic: "ifr", ref: "AIM 5-4-5", tags: ["ipc"],
    q: "The Minimum Safe Altitude (MSA) on an approach chart provides what?",
    choices: [
      "At least 1,000 ft of obstacle clearance within 25 NM of the specified facility or fix (unless otherwise indicated), for emergency use only",
      "At least 1,000 ft obstacle clearance and guaranteed navaid reception within 25 NM",
      "At least 2,000 ft obstacle clearance within 30 NM, usable as an initial approach altitude",
      "The lowest altitude ATC may vector you within 25 NM of the airport"
    ],
    a: 0,
    exp: "The MSA gives at least 1,000 ft of clearance above the highest obstacle in each sector, normally within 25 NM of the navaid or RNAV waypoint it is based on, and is for emergency use only. It does not guarantee navaid reception or communications and is not an altitude from which to start the approach. (The altitude ATC can vector you to is the MVA, which is not published on your chart.)"
  },
  {
    id: "ifr-mcq-027", type: "mcq", topic: "ifr", ref: "AIM 5-2-9", tags: ["ipc"],
    q: "An ODP requires a climb gradient of 350 ft/NM to 3,000 ft. At a groundspeed of 90 kt, what climb rate is required?",
    choices: ["350 fpm", "525 fpm", "700 fpm", "315 fpm"],
    a: 1,
    exp: "Convert gradient to rate: ft/NM × groundspeed ÷ 60 = fpm, so 350 × 90 ÷ 60 = 525 fpm. The standard assumption when no gradient is published is 200 ft/NM, crossing the DER at least 35 ft above DER elevation, and no turn until 400 ft above DER elevation. Always use groundspeed, not airspeed, and remember a Seminole with one engine out may not meet a 350 ft/NM requirement at all."
  },
  {
    id: "ifr-mcq-028", type: "mcq", topic: "ifr", ref: "AIM 5-3-4; Pilot/Controller Glossary (MOCA)", tags: ["ipc"],
    q: "A MOCA (shown with an asterisk on the enroute chart) guarantees acceptable navigational signal coverage within what distance of the VOR?",
    choices: ["10 NM", "40 NM", "The entire airway segment", "22 NM"],
    a: 3,
    exp: "The MOCA provides the required obstacle clearance for the whole route segment but assures acceptable VOR signal coverage only within 22 NM of the VOR. The MEA provides both obstacle clearance and navigation signal coverage for the entire segment. ATC may assign an altitude down to the MOCA when you are within that 22 NM (or when using GPS, per AIM, you may be assigned the MOCA regardless)."
  },
  {
    id: "ifr-mcq-029", type: "mcq", topic: "ifr", ref: "AIM 5-3-5; Pilot/Controller Glossary (MCA, MRA)", tags: ["ipc"],
    q: "What is a Minimum Crossing Altitude (MCA) and when must you be at it?",
    choices: [
      "The lowest altitude at which an intersection can be identified by navaid; you must be at it to use the intersection as a reporting point",
      "The lowest altitude usable for radar vectors in the sector; you must be at it before ATC can vector you",
      "The lowest altitude at which you may cross a fix when proceeding in the direction of a higher MEA; you must be at it before crossing the fix",
      "The lowest altitude for the next segment; you may begin the climb after crossing the fix"
    ],
    a: 2,
    exp: "An MCA is published where the MEA increases and the climb must begin before the fix so that obstacle clearance is maintained in the next segment. You must cross the fix at or above the MCA when continuing in the direction specified. An MRA, by contrast, is the lowest altitude at which a fix can be identified by navaid reception; it has nothing to do with obstacles."
  },
  {
    id: "ifr-mcq-030", type: "mcq", topic: "ifr", ref: "14 CFR 91.175(i); AIM 5-4-7", tags: ["ipc"],
    q: "You are being radar vectored at 4,000 ft and ATC says 'Cleared ILS runway 36 approach.' You are not yet on a published segment. What altitude do you maintain?",
    choices: [
      "4,000 ft until established on a segment of a published route or the IAP, unless ATC assigns a different altitude",
      "Descend to the published glideslope intercept altitude immediately",
      "Descend to the MSA for your sector",
      "Descend to the altitude shown for the first segment of the approach you will join"
    ],
    a: 0,
    exp: "91.175(i): when on an unpublished route or being radar vectored, you maintain the last assigned altitude after an approach clearance until the aircraft is established on a segment of a published route or IAP, unless ATC assigns another altitude. The AIM 5-4-7 guidance is the same: 'maintain [altitude] until established.' Once established, you may descend to the altitude published for that segment."
  },
  {
    id: "ifr-mcq-031", type: "mcq", topic: "ifr", ref: "AIM 5-4-21", tags: ["ipc"],
    q: "You lose sight of the airport while circling to land. What does the AIM recommend for the initial part of the missed approach?",
    choices: [
      "Turn away from the runway and climb straight ahead to the missed approach altitude",
      "Make an initial climbing turn toward the landing runway and continue the turn until established on the published missed approach course",
      "Fly the runway heading of the runway you were circling to and then intercept the missed approach course",
      "Descend to MDA and continue circling until the runway reappears"
    ],
    a: 1,
    exp: "AIM 5-4-21: if visual reference is lost while circling, follow the missed approach specified for the approach flown, but begin with a climbing turn toward the landing runway and continue until established on the missed approach course. Turning toward the runway keeps you over the airport, inside the protected circling area, while you climb. The timing of the turn depends on where you are in the circle; the goal is to stay within the obstacle-protected airspace."
  },
  {
    id: "ifr-mcq-032", type: "mcq", topic: "ifr", ref: "AIM 7-3-1", tags: ["ipc"],
    q: "On a very cold day with the altimeter correctly set, how does your true altitude compare with the indicated altitude?",
    choices: [
      "True altitude is higher than indicated; the error is proportional to the altimeter setting",
      "There is no error as long as the local altimeter setting is used",
      "True altitude is higher than indicated, and the error decreases with height above the reporting station",
      "True altitude is lower than indicated, and the error grows with height above the reporting station"
    ],
    a: 3,
    exp: "Cold air is denser, so a given pressure level lies lower; the altimeter, calibrated for standard temperature, then indicates higher than you really are ('cold: look out below'). The error increases with the height above the altimeter-setting source and with how far the temperature is below ISA. This is why Cold Temperature Airports require altitude corrections on specific segments when the temperature is at or below the published value."
  },
  {
    id: "ifr-mcq-033", type: "mcq", topic: "ifr", ref: "IFH Ch. 5", tags: ["ipc"],
    q: "The pitot tube's ram-air inlet AND its drain hole both become blocked by ice during a climb. The static port is clear. What does the airspeed indicator do?",
    choices: [
      "Drops to zero",
      "Freezes at the airspeed at the time of blockage",
      "Reads increasingly high as you climb and low as you descend, acting like an altimeter",
      "Reads increasingly low as you climb"
    ],
    a: 2,
    exp: "With both the ram inlet and drain blocked, the pressure trapped in the pitot line is constant while static pressure continues to fall in the climb; the diaphragm expands and the ASI reads higher as you climb (and lower in a descent), behaving like an altimeter. If only the ram inlet is blocked and the drain is open, pitot pressure bleeds to ambient and the ASI goes to zero. A blocked static port instead freezes the altimeter, zeroes the VSI, and makes the ASI read low in a climb and high in a descent."
  },
  {
    id: "ifr-mcq-034", type: "mcq", topic: "ifr", ref: "14 CFR 91.157(b)(4)", tags: ["flight-review", "ipc"],
    q: "What is required to operate an airplane under Special VFR between sunset and sunrise?",
    choices: [
      "A current flight review and position lights only",
      "The pilot must be instrument rated and the aircraft must be equipped for IFR flight",
      "ATC approval and 3 SM flight visibility",
      "Special VFR at night is prohibited for airplanes"
    ],
    a: 1,
    exp: "91.157(b)(4) allows SVFR between sunset and sunrise only if the pilot holds an instrument rating and the aircraft is equipped as required for IFR. The daytime SVFR requirements (ATC clearance, clear of clouds, 1 SM flight visibility) still apply. Some surface areas prohibit SVFR for fixed-wing aircraft entirely, indicated by 'NO SVFR' on the chart."
  },

  // ---------- ifr / card ----------
  {
    id: "ifr-card-001", type: "card", topic: "ifr", ref: "14 CFR 91.171", tags: ["ipc"],
    front: "VOR equipment check for IFR: how often, tolerances, and what to log?",
    back: "Within the preceding 30 days.\nVOT: ±4°\nDesignated ground checkpoint: ±4°\nAirborne checkpoint / airway centerline over a prominent landmark (preferably >20 NM from VOR): ±6°\nDual VOR (one against the other): max 4° apart\nLog: Date, Place, Bearing error, Signature."
  },
  {
    id: "ifr-card-002", type: "card", topic: "ifr", ref: "14 CFR 91.185", tags: ["ipc"],
    front: "Lost comms in IMC: route and altitude rules",
    back: "ROUTE (AVEF): Assigned → Vectored (direct to the fix/route/airway in the vector clearance) → Expected → Filed.\nALTITUDE: for each segment, the HIGHEST of Minimum IFR altitude (MEA), Expected, Assigned (\"MEA\").\nIf VFR encountered: continue VFR, land as soon as practicable.\nSquawk 7600."
  },
  {
    id: "ifr-card-003", type: "card", topic: "ifr", ref: "14 CFR 91.185(c)(3)", tags: ["ipc"],
    front: "Lost comms: when do you leave the clearance limit and start the approach?",
    back: "Clearance limit IS an approach fix: begin descent/approach as close as possible to the EFC; if no EFC, as close as possible to the ETA from the flight plan.\nClearance limit is NOT an approach fix: leave it at the EFC; if no EFC, leave upon arrival; then proceed to an approach fix and begin descent/approach as close as possible to the ETA."
  },
  {
    id: "ifr-card-004", type: "card", topic: "ifr", ref: "AIM 5-3-3", tags: ["ipc"],
    front: "Mandatory reports to ATC without a request (all times, and non-radar only)",
    back: "ALL TIMES: vacating an altitude; altitude change on VFR-on-top; unable 500 fpm; missed approach; TAS change ≥5% or 10 kt (whichever greater); time & altitude reaching a holding fix; leaving a holding fix; loss of VOR/TACAN/ADF/GPS/ILS/comm capability; safety-of-flight info (incl. unforecast weather).\nNON-RADAR ONLY: leaving FAF/OM inbound; revised ETA when off by more than 2 minutes."
  },
  {
    id: "ifr-card-005", type: "card", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    front: "Holding: max speeds, leg timing, entries, wind correction",
    back: "MAX SPEED: ≤6,000 MSL 200 KIAS; 6,001–14,000 230 KIAS; >14,000 265 KIAS. Slow ≥3 min before fix.\nINBOUND LEG: 1 min at/below 14,000; 1.5 min above.\nENTRY: 70° line on holding side → direct / teardrop (30° offset, 1 min) / parallel (non-holding side, 1 min, turn >180° toward holding side).\nWIND: triple the inbound drift correction on the outbound leg.\nReport time & altitude entering, and when leaving."
  },
  {
    id: "ifr-card-006", type: "card", topic: "ifr", ref: "14 CFR 97.3; AIM 5-4-7", tags: ["ipc"],
    front: "Aircraft approach categories (speed basis and ranges)",
    back: "Based on Vref, or 1.3 Vso at max certificated landing weight.\nA: <91 kt\nB: 91–120 kt\nC: 121–140 kt\nD: 141–165 kt\nE: ≥166 kt\nIf you fly faster than your category (e.g., circling), use the higher category's minimums."
  },
  {
    id: "ifr-card-007", type: "card", topic: "ifr", ref: "AIM 5-4-23; AIM 5-4-25", tags: ["ipc"],
    front: "Visual approach vs. contact approach",
    back: "VISUAL: ATC or pilot may initiate; reported ceiling ≥1,000 ft and vis ≥3 SM; airport or preceding aircraft in sight; remain clear of clouds; no missed approach segment.\nCONTACT: pilot must request; reported ground vis ≥1 SM; clear of clouds with ≥1 SM flight vis; airport must have an IAP; airport need not be in sight; no ceiling requirement."
  },
  {
    id: "ifr-card-008", type: "card", topic: "ifr", ref: "AIM 5-4-5", tags: ["ipc"],
    front: "Visual Descent Point (VDP): what it is and how to use it",
    back: "A point on the final approach course of a straight-in non-precision approach from which a normal descent from the MDA to touchdown can begin if visual reference is established.\nShown as a 'V' on the profile view.\nDo not descend below MDA before the VDP; if you reach the VDP without the runway in sight, expect to go missed at the MAP.\nIf you cannot identify the VDP (e.g., DME-based with no DME), fly as if none exists."
  },
  {
    id: "ifr-card-009", type: "card", topic: "ifr", ref: "AIM 5-2-9", tags: ["ipc"],
    front: "IFR departure: standard assumptions, ODP vs SID, converting gradient to rate",
    back: "STANDARD: cross DER ≥35 ft above DER elevation; climb to 400 ft above DER before any turn; climb ≥200 ft/NM to the minimum IFR altitude.\nODP: obstacle clearance only, textual or graphic, may be flown without ATC clearance (unless ATC assigns another DP); the 'T' triangle on the approach plate tells you nonstandard takeoff minimums and/or an ODP are published in the TPP front section.\nSID: ATC-assigned, graphic, provides obstacle clearance + transition to enroute structure.\nFPM = (ft/NM × groundspeed) ÷ 60."
  },
  {
    id: "ifr-card-010", type: "card", topic: "ifr", ref: "AIM 5-3-4; AIM 5-3-5; IPH Ch. 2; Pilot/Controller Glossary", tags: ["ipc"],
    front: "Enroute minimum altitudes: MEA, MOCA, MRA, MCA, MAA, OROCA, MVA",
    back: "MEA: obstacle clearance + navaid signal coverage for whole segment.\nMOCA (*): obstacle clearance for segment; navaid coverage only within 22 NM of the VOR.\nMRA: lowest altitude to receive the navaids that define a fix.\nMCA: altitude you must cross a fix at when continuing toward a higher MEA.\nMAA: maximum authorized altitude (signal interference/airspace).\nOROCA: off-route; 1,000 ft (2,000 ft mountainous) clearance in the grid; no comm/nav guarantee.\nMVA: ATC's lowest vectoring altitude; not on pilot charts."
  },
  {
    id: "ifr-card-011", type: "card", topic: "ifr", ref: "IFH Ch. 5", tags: ["ipc"],
    front: "Pitot-static blockage and vacuum failure: what each instrument does",
    back: "PITOT ram + drain blocked: ASI acts like an altimeter (reads high in climb). Ram blocked, drain open: ASI → zero.\nSTATIC blocked: altimeter freezes; VSI reads zero; ASI reads low in climb / high in descent.\nAlternate static (unpressurized cabin): altimeter & ASI read slightly high, VSI shows momentary climb.\nVACUUM failure: attitude indicator and heading indicator slowly drift/roll; use turn coordinator, compass, altimeter, VSI, and GPS track for partial panel."
  },
  {
    id: "ifr-card-012", type: "card", topic: "ifr", ref: "Instrument ACS (FAA-S-ACS-8C), Appendix: Instrument Proficiency Check", tags: ["ipc"],
    front: "Which Instrument ACS tasks are required for an IPC (airplane)?",
    back: "III.B Holding Procedures\nIV.B Recovery from Unusual Flight Attitudes\nV.A Intercepting and Tracking Navigational Systems and DME Arcs\nVI (all): Non-precision Approach, Precision Approach, Missed Approach, Circling Approach, Landing from an Instrument Approach\nVII.B & VII.C (multiengine only): OEI straight-and-level/turns; OEI instrument approach and landing\nVII.D Approach with Loss of Primary Flight Instrument Indicators\nVIII.A Checking Instruments and Equipment\n(Areas I, II, and III.A/IV.A/V.B/VII.A are not required.)"
  },

  // ---------- ifr / scenario ----------
  {
    id: "ifr-scn-001", type: "scenario", topic: "ifr", ref: "AIM 5-4-5; AIM 5-4-21; 14 CFR 91.175", tags: ["ipc", "pa44"],
    q: "You are in a PA-44 Seminole, established inbound on the ILS 36, 2 miles outside the FAF at glideslope intercept altitude. Weather is 800 overcast and 2 SM. Just as you reach the FAF the glideslope flag appears and the GS needle disappears; the localizer remains valid. The plate shows LOC minimums (MDA 460 ft, 1 SM) below the ILS minimums and you briefed both. What is the best course of action?",
    choices: [
      "Continue the ILS using the published descent rate from the table in lieu of the glideslope",
      "Execute the missed approach immediately, since the approach you were cleared for is no longer available",
      "Continue as a localizer approach to the LOC MDA, timing from the FAF, and advise ATC",
      "Request a visual approach because the ceiling of 800 ft is above the LOC MDA"
    ],
    a: 2,
    exp: "An ILS clearance includes the localizer-only procedure on the same chart; when the glideslope fails, the approach may be continued as a localizer approach to the LOC MDA, provided the LOC minimums have been briefed and you can establish the MAP by timing or DME/GPS. Tell ATC so they know what you are doing. Flying a descent rate without a valid glideslope to a DA is not authorized, and 800-2 is below the 1,000-3 needed for a visual approach."
  },
  {
    id: "ifr-scn-002", type: "scenario", topic: "ifr", ref: "14 CFR 91.185(c)(3)", tags: ["ipc"],
    q: "In a C172S in solid IMC you were cleared to the DIXIE intersection (an IAF for your destination's RNAV approach) and told 'expect further clearance at 1545.' Your filed ETA at the destination is 1530. At 1520 you lose both comms and cannot raise anyone. You arrive at DIXIE at 1528. What should you do?",
    choices: [
      "Begin the approach immediately, because you are at an IAF and comm failure is an emergency",
      "Hold at DIXIE and begin the approach as close as possible to 1545, the EFC time",
      "Hold at DIXIE until 1530, your flight-plan ETA, then begin the approach",
      "Proceed to your filed alternate because the approach clearance was never received"
    ],
    a: 1,
    exp: "91.185(c)(3)(i): when the clearance limit is a fix from which an approach begins, commence descent or descent and approach as close as possible to the expect-further-clearance time if one has been received. The ETA rule applies only when no EFC was given. ATC is protecting the airspace based on the 1545 EFC; starting earlier risks conflict with traffic they are still working. Squawk 7600 while holding."
  },
  {
    id: "ifr-scn-003", type: "scenario", topic: "ifr", ref: "14 CFR 91.175(e)(2); AIM 5-4-21", tags: ["ipc"],
    q: "Circling to runway 27 at night in a C172S after a VOR-A approach, you are at the circling MDA on a left downwind. Abeam the numbers, a scud cloud drifts between you and the runway and you lose sight of all parts of the airport for several seconds while wings-level. What must you do?",
    choices: [
      "Immediately begin a climbing turn toward the runway and fly the published missed approach",
      "Continue the downwind and base turn by timing; you can expect the runway to reappear",
      "Descend 100 ft below MDA to get under the cloud and regain the runway",
      "Level off and continue the pattern at MDA until the runway reappears, since you had it in sight earlier"
    ],
    a: 0,
    exp: "91.175(e)(2) requires a missed approach whenever an identifiable part of the airport is not distinctly visible during a circling maneuver at or above MDA, unless the loss is caused only by a normal bank of the aircraft. AIM 5-4-21 adds that the missed should start with a climbing turn toward the landing runway to stay within the protected circling area. Descending below MDA without the required visual references is prohibited."
  },
  {
    id: "ifr-scn-004", type: "scenario", topic: "ifr", ref: "14 CFR 91.169; AIM 1-1-17; AIM 1-1-18", tags: ["ipc"],
    q: "Planning an IFR flight in a WAAS-equipped C172S (GTN 650) to an airport forecast 1,500 overcast and 3 SM at ETA. The destination has only an RNAV (GPS) approach with LPV and LNAV minimums. The nearest candidate alternate also has only an RNAV (GPS) approach (LPV DA 250 ft, LNAV MDA 600 ft HAA) with no non-standard alternate minimums and is forecast 700 overcast and 3 SM. Can you file it?",
    choices: [
      "Yes; because the receiver is WAAS, the LPV DA counts as precision, so 600-2 applies and 700-3 meets it",
      "No; a GPS approach can only be planned at the destination or the alternate, never both",
      "No; the alternate must be planned on the LNAV or circling minimums as non-precision (800-2), and 700 overcast does not meet 800 ft",
      "Yes; an alternate is not required because the destination is forecast above 1,000-3"
    ],
    a: 2,
    exp: "The destination forecast (1,500/3) is below the 2,000-3 threshold, so an alternate is required. A WAAS (TSO-C145/C146) receiver may plan GPS approaches at both destination and alternate, but at the alternate the planning must be based on LNAV or circling minimums as a non-precision approach: standard alternate minimums 800-2. A 700-ft forecast fails that. The 'destination or alternate, not both' limit applies to non-WAAS TSO-C129/C196 receivers."
  },
  {
    id: "ifr-scn-005", type: "scenario", topic: "ifr", ref: "AIM 7-3-1; AIM 7-3-4; AIM 7-3-5", tags: ["ipc"],
    q: "You are flying an ILS into a Cold Temperature Airport (snowflake symbol, −15°C published) and the surface temperature is −22°C. The intermediate segment altitude is 3,000 ft and the airport elevation is 1,000 ft. You have no temperature-compensating avionics. What is required?",
    choices: [
      "No action; the ILS glideslope is unaffected and the altimeter error is accounted for in the TERPS design",
      "Apply a cold-temperature altitude correction to the segments indicated for that airport, fly the corrected (higher) indicated altitudes, and advise ATC of the corrections you are applying",
      "Add 1,000 ft to every altitude on the approach and tell ATC you are unable the approach",
      "Request a visual approach instead, since corrections are only required for non-precision approaches"
    ],
    a: 1,
    exp: "At a Cold Temperature Airport, when the reported temperature is at or below the published value, pilots must apply the correction from the ICAO cold temperature table (or equivalent) to the segment(s) listed for that airport (intermediate, final, and/or missed), and fly the higher indicated altitudes. Pilots must advise ATC of the corrected altitudes (except for the final segment, where ATC need not be told). The glideslope itself is electronic and not affected, but your indicated altitude at intercept and at DA is, and intermediate step-down altitudes are."
  },
  {
    id: "ifr-scn-006", type: "scenario", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    q: "ATC: 'Hold southeast of the ABC VOR on the 135 radial, left turns, 5-mile legs, expect further clearance at 1610.' You are tracking inbound to ABC on the 300° course (i.e., inbound on the 120 radial, approaching from the southeast) at 7,000 ft, 150 KIAS. What is the correct entry and leg configuration?",
    choices: [
      "Teardrop entry; inbound course 315°, outbound leg flown to 5 DME",
      "Direct entry; inbound course 315°, left turns, outbound leg ends at 5 NM from the VOR by DME/GPS distance",
      "Parallel entry; inbound course 135°, outbound leg timed for 1 minute",
      "Direct entry; inbound course 135°, right turns, outbound leg timed for 1 minute"
    ],
    a: 1,
    exp: "Holding on the 135 radial means the pattern lies southeast of the VOR and the inbound course to the fix is the reciprocal, 315°. Arriving on a 300° course you are nearly aligned with the inbound course from the holding side, which is a direct entry: cross the fix and turn left (as instructed) to the outbound heading. With 5-mile legs, the outbound leg ends when DME/GPS shows 5 NM from the VOR (the fix is the VOR itself, so there is no timing), and you are already below the 230 KIAS limit for 6,001–14,000 ft."
  },
  {
    id: "ifr-scn-007", type: "scenario", topic: "ifr", ref: "IFH Ch. 5; IFH Ch. 11", tags: ["ipc", "pa44"],
    q: "In cruise at 8,000 ft in IMC in a Seminole with a conventional vacuum-driven attitude indicator and heading indicator, you notice the attitude indicator shows a slight right bank while the turn coordinator is centered and the heading indicator is slowly drifting. The vacuum gauge reads low. Which action set is most appropriate?",
    choices: [
      "Trust the attitude indicator since it is the primary instrument; cross-check the vacuum gauge again in a few minutes",
      "Cover or disregard the attitude and heading indicators, fly partial panel using the turn coordinator, magnetic compass/GPS track, altimeter, airspeed and VSI, advise ATC of the failure, and request no-gyro vectors or an approach with minimal maneuvering",
      "Immediately descend to VFR conditions below the clouds using the attitude indicator while it is still partially working",
      "Switch to the alternate static source to restore the gyro instruments"
    ],
    a: 1,
    exp: "A failing vacuum system causes the gyros to spin down slowly, so the AI and HI give subtly wrong but plausible indications, which is more dangerous than an outright flag. Confirm with the turn coordinator (electric) and the vacuum gauge, then remove the failed instruments from your scan (cover them), fly partial panel, and tell ATC; loss of navigation or instrument capability affecting safety is a required report. Alternate static affects pitot-static instruments, not gyros. Descending in IMC on a failing AI is how spatial disorientation accidents begin."
  },

  // ---------- ifr / oral ----------
  {
    id: "ifr-oral-001", type: "oral", topic: "ifr", ref: "14 CFR 91.167; 14 CFR 91.169", tags: ["ipc"],
    q: "Walk me through how you decide whether you need an alternate, how you pick one, and how much fuel you must carry.",
    answer: "First apply the 1-2-3 rule: if the destination has an instrument approach and the forecast from 1 hour before to 1 hour after my ETA shows at least 2,000 ft ceiling above the airport and 3 SM, no alternate is needed. Otherwise I need one, and the alternate must be forecast at my ETA to meet its published alternate minimums or the standard 600-2 for a precision approach or 800-2 for a non-precision approach; an airport with no approach needs weather allowing descent from the MEA and landing under basic VFR. I also check the plate for the 'A' triangle (non-standard minimums) or 'NA' (alternate not authorized), and apply the GPS planning rules for my receiver. Fuel must cover the flight to the destination, then to the alternate, then 45 minutes at normal cruise.",
    points: ["1-2-3 rule: ±1 hour of ETA, 2,000 ft ceiling, 3 SM, and destination must have an IAP", "Standard alternate minimums 600-2 precision / 800-2 non-precision, or published non-standard minimums", "No-IAP alternate: descent from MEA, approach and landing under basic VFR", "Check for 'A' triangle and 'NA'", "Fuel: destination + alternate + 45 minutes at normal cruise"]
  },
  {
    id: "ifr-oral-002", type: "oral", topic: "ifr", ref: "14 CFR 91.175(c)", tags: ["ipc"],
    q: "You're at DA on an ILS. What has to be true before you can continue below it, and what are the visual references that count?",
    answer: "Three things: the aircraft must be continuously in a position from which a normal descent to landing on the intended runway can be made using normal maneuvers; the flight visibility must be at least the visibility prescribed for the approach; and at least one of the listed visual references for the intended runway must be distinctly visible and identifiable. Those references are the approach light system, threshold, threshold markings, threshold lights, REIL, the visual glideslope indicator, touchdown zone or its markings, touchdown zone lights, the runway or runway markings, and the runway lights. If the approach lights are all I have, I can only go down to 100 ft above TDZE unless the red terminating bars or red side-row bars are visible.",
    points: ["In position for a normal descent to landing with normal maneuvers", "Flight visibility at or above prescribed minimum", "One of the ten listed visual references distinctly visible", "Approach lights alone: 100 ft above TDZE limit unless red terminating/side-row bars seen", "Otherwise, immediate missed approach"]
  },
  {
    id: "ifr-oral-003", type: "oral", topic: "ifr", ref: "14 CFR 91.185", tags: ["ipc"],
    q: "You're IFR in IMC and lose both radios. Tell me exactly what you'd do.",
    answer: "I'd troubleshoot first: check audio panel, volume, squelch, headset, try the other radio, try the last frequency and 121.5, and listen for ATC over a VOR. Then squawk 7600. If I'm in or encounter VFR conditions, I continue VFR and land as soon as practicable. If I stay in IMC, I fly the route in the order assigned, vectored, expected, filed, at the highest of the MEA, expected, or assigned altitude for each segment. I proceed to the clearance limit and, if it's an approach fix, start the approach as close as possible to the EFC, or to my flight-plan ETA if I had no EFC. If the clearance limit isn't an approach fix, I leave it at the EFC or on arrival if none, go to an approach fix, and begin the approach as close as possible to the ETA.",
    points: ["Troubleshoot; squawk 7600", "VFR encountered: continue VFR, land as soon as practicable", "Route: Assigned, Vectored, Expected, Filed", "Altitude: highest of MEA, Expected, Assigned per segment", "Clearance limit and EFC/ETA logic for starting the approach"]
  },
  {
    id: "ifr-oral-004", type: "oral", topic: "ifr", ref: "AIM 5-3-8", tags: ["ipc"],
    q: "ATC tells you to hold. What do you expect in the clearance, how do you choose an entry, and when do you report?",
    answer: "A holding clearance includes the direction from the fix, the fix name, the radial/course/bearing/airway, the leg length in minutes or miles if not standard, the direction of turns if non-standard (left), and an EFC time. I visualize the pattern, then apply the 70° line measured from the outbound course: if my heading is within the 70° sector on the holding-pattern side of the outbound course, it's a teardrop; if it's in the 110° sector on the other side of the outbound course, it's a parallel entry; and the remaining 180° sector, which includes arriving along the inbound course, is a direct entry. I slow to the maximum holding speed at least 3 minutes before the fix, time the inbound leg at 1 minute at or below 14,000 ft (1.5 above), triple the inbound drift correction outbound, and report the time and altitude reaching the fix and again when leaving it.",
    points: ["Clearance items: direction, fix, radial/course, leg length, turn direction, EFC", "70°/110° entry sectors: direct, teardrop, parallel", "Slow to max holding speed 3 minutes prior", "1 minute / 1.5 minute inbound legs; triple drift outbound", "Report time and altitude entering, and leaving"]
  },
  {
    id: "ifr-oral-005", type: "oral", topic: "ifr", ref: "AIM 5-4-9; 14 CFR 91.175(j)", tags: ["ipc"],
    q: "When is a procedure turn required, when is it prohibited, and how do you fly a hold-in-lieu?",
    answer: "A course reversal is required whenever the chart depicts one for the segment I'm flying and no exception applies. It's prohibited when I'm receiving radar vectors to final, when the segment is marked NoPT, during a timed approach from a holding fix, or when ATC clears me 'straight-in.' The barbed PT is flown on the depicted side within the charted distance, normally 10 NM, at or below 200 KIAS, and the exact maneuver is up to me. A hold-in-lieu is flown as a standard holding entry and one circuit; if I'm already established in the hold when cleared, I don't make another circuit unless I ask for it. If ATC says 'cleared straight-in' and I need the course reversal to lose altitude, I must tell them.",
    points: ["Required when charted unless an exception applies", "Prohibited: radar vectors to final, NoPT, timed approaches, 'cleared straight-in'", "Within 10 NM (or charted distance), ≤200 KIAS, on the depicted side", "HILPT: standard entry, one circuit, then inbound", "Advise ATC if you need the course reversal when they expect straight-in"]
  },
  {
    id: "ifr-oral-006", type: "oral", topic: "ifr", ref: "AIM 5-4-20; AIM 5-4-21; 14 CFR 91.175(e)", tags: ["ipc"],
    q: "Describe how you fly a circling approach safely and what triggers a missed approach during the circle.",
    answer: "I use the circling MDA for my aircraft category, or a higher category if I'll be flying faster, and I stay within the protected circling radius, which is larger if the plate shows the inverse 'C' symbol for expanded radii. I keep the airport in sight continuously, maneuver at MDA until I'm in a position for a normal descent to the landing runway, and I plan the pattern so I never have to lose sight of the runway. If at any time an identifiable part of the airport is not distinctly visible, other than momentarily because of a normal bank, I go missed: climbing turn toward the landing runway, then join the published missed approach for the approach I flew. At night or at an unfamiliar airport I set personal minimums above the published circling MDA.",
    points: ["Correct category MDA; higher category if flying faster", "Stay within protected radius; note expanded-radius 'C' symbol", "Keep an identifiable part of the airport in sight; stay at MDA until normal descent is possible", "Missed: climbing turn toward the runway, then published missed", "Night/unfamiliar airport personal minimums"]
  },
  {
    id: "ifr-oral-007", type: "oral", topic: "ifr", ref: "AIM 5-1-15; 14 CFR 91.157(b)(4); AIM 4-4-8", tags: ["ipc"],
    q: "When and how can you cancel IFR, and what should you consider before doing so? Also, what is VFR-on-top?",
    answer: "I can cancel IFR any time I'm in VFR conditions outside Class A airspace, either with ATC or by calling flight service after landing at a non-towered airport; at a towered airport the flight plan is closed automatically when I land. Before canceling in the air I consider whether I can stay VFR all the way to the airport, that I lose IFR separation and the protection of the clearance, and that at a non-towered field holding the clearance may block other IFR traffic, so I cancel as soon as I'm sure of a VFR landing. VFR-on-top is an IFR clearance that lets me fly VFR altitudes above a cloud layer while remaining on my IFR flight plan; I must maintain VFR cloud clearances and visibility, fly VFR cruising altitudes, follow my IFR clearance and route, and it's not permitted in Class A.",
    points: ["Cancel only in VFR conditions, never in Class A", "Towered airport closes it on landing; non-towered: cancel with ATC/FSS", "Consider loss of separation/clearance and blocking other IFR traffic", "VFR-on-top: pilot-requested IFR clearance; VFR altitudes/cloud clearances; not in Class A", "SVFR at night requires an instrument-rated pilot and IFR-equipped aircraft"]
  },
  {
    id: "ifr-oral-008", type: "oral", topic: "ifr", ref: "AIM 7-3-1; PHAK Ch. 8", tags: ["ipc"],
    q: "Explain altimeter errors from temperature and pressure and how they affect you on an approach.",
    answer: "The altimeter is calibrated to standard atmosphere, so when the air is colder than standard the pressure levels are compressed and I'm lower than indicated; the error grows with the height above the station and the temperature deviation. 'From high to low or hot to cold, look out below.' A one-inch error in the altimeter setting is roughly 1,000 ft of altitude error, so flying with a stale setting from a higher-pressure area means I'm lower than I think. On an approach that erodes obstacle clearance on step-downs and at the MDA/DA, which is why Cold Temperature Airports require published corrections, and why I always get the current local altimeter setting before the FAF; many approaches are NA or have higher minimums with a remote altimeter setting.",
    points: ["Cold temps: true altitude lower than indicated; error grows with height above station", "1 in Hg ≈ 1,000 ft", "High-to-low / hot-to-cold: look out below", "Cold Temperature Airport corrections on indicated segments", "Use current local altimeter setting; remote setting raises minimums"]
  },
  {
    id: "ifr-oral-009", type: "oral", topic: "ifr", ref: "AIM 4-4-10; Pilot/Controller Glossary (PILOT'S DISCRETION); AIM 5-2-6", tags: ["ipc"],
    q: "What's the difference between 'descend at pilot's discretion' and 'descend and maintain,' and what does 'cleared as filed' actually include?",
    answer: "'Descend at pilot's discretion' means I may start the descent when I choose and at any rate, and I may level off temporarily, but once I vacate an altitude I may not return to it. A plain 'descend and maintain' means start the descent promptly, at an optimum rate consistent with the airplane's characteristics, until within 1,000 ft of the assigned altitude, then 500 to 1,500 fpm; if I can't do at least 500 fpm I must tell ATC. 'Cleared to [airport] as filed' means the route is the one I filed, but it does not include the altitude; ATC will still state the assigned altitude, any DP and transition, the departure frequency, and the transponder code. If I'm told 'when able' direct to a fix, that means proceed when I can navigate to it, not at my leisure.",
    points: ["Pilot's discretion: start when you choose, any rate, may level off, cannot return to a vacated altitude", "Descend and maintain: promptly, optimum rate, 500–1,500 fpm in the last 1,000 ft; report if unable 500 fpm", "'Cleared as filed' covers the route only, not the altitude", "Controller still issues altitude, DP/transition, frequency, squawk", "'When able' means as soon as you can comply"]
  },
  {
    id: "ifr-oral-010", type: "oral", topic: "ifr", ref: "14 CFR 61.57(d); Instrument ACS (FAA-S-ACS-8C)", tags: ["ipc"],
    q: "You've been out of flying for a while. When is an IPC required rather than just regaining currency, and what will the IPC cover?",
    answer: "Under 61.57(c) I need six approaches, holding, and intercepting and tracking courses within the preceding six calendar months to act as PIC under IFR. If I let that lapse, I have six more calendar months to regain currency with a safety pilot or in a sim; after twelve calendar months total without meeting the requirement, 61.57(d) requires an instrument proficiency check with an authorized instructor, examiner, or check pilot. The IPC must include the tasks listed in the Instrument ACS appendix: holding, unusual attitude recovery, intercepting and tracking navaids and DME arcs, all of the approach tasks including non-precision, precision, missed, circling, and landing from an approach, the partial-panel approach, the multiengine OEI tasks if in a twin, and the postflight instrument check.",
    points: ["61.57(c): 6 approaches, holding, intercept/track in preceding 6 calendar months", "Grace period: 6 additional calendar months to self-regain; after 12 total, IPC required", "IPC given by CFII, examiner, or authorized check pilot per the Instrument ACS", "Required tasks: holding, unusual attitudes, nav tracking/DME arcs, all approach tasks, partial-panel approach, OEI tasks (multi), postflight check", "No separate knowledge test, but the instructor will evaluate decision-making through scenarios"]
  },

  /* =====================================================================
     CHARTS & PLATES  (topic: "charts")
     ===================================================================== */

  // ---------- charts / mcq ----------
  {
    id: "charts-mcq-001", type: "mcq", topic: "charts", ref: "AIM 5-2-9; AIM 5-4-5", tags: ["ipc"],
    q: "A black triangle containing a white 'T' appears in the notes/briefing area of an approach plate. What does it mean?",
    choices: [
      "The approach has a published VDP identified by timing",
      "Non-standard takeoff minimums and/or departure procedures (ODP) are published for the airport; see the front of the TPP",
      "A TAA is depicted and procedure turns are not authorized",
      "Non-standard alternate minimums apply"
    ],
    a: 1,
    exp: "The 'T' triangle flags that the airport has non-standard IFR takeoff minimums and/or an obstacle departure procedure published in the Takeoff Minimums and (Obstacle) Departure Procedures section at the front of the Terminal Procedures Publication. The 'A' triangle flags non-standard alternate minimums, and 'A NA' means the airport cannot be used as an alternate. Part 91 pilots are not bound by takeoff minimums but should apply them and the ODP."
  },
  {
    id: "charts-mcq-002", type: "mcq", topic: "charts", ref: "AIM 5-4-5; FAA Chart User's Guide (Terminal Procedures)", tags: ["ipc"],
    q: "An approach plate shows the 'A' triangle with 'NA' next to it. What does this tell you?",
    choices: [
      "Alternate minimums are not authorized; the airport cannot be used as an IFR alternate, typically because of no weather reporting or an unmonitored navaid",
      "The approach is not authorized at night",
      "Non-standard alternate minimums apply and are listed at the front of the TPP",
      "Autopilot-coupled approaches are not authorized"
    ],
    a: 0,
    exp: "'A NA' means the airport may not be filed as an alternate, most often because it lacks weather reporting or the navaid for the approach is not monitored. The plain 'A' triangle means alternate minimums are non-standard (higher than 600-2/800-2) and are published in the TPP front matter. Either way, you must look before assuming standard alternate minimums."
  },
  {
    id: "charts-mcq-003", type: "mcq", topic: "charts", ref: "AIM 1-2-1; FAA Chart User's Guide", tags: ["ipc"],
    q: "On an RNAV approach chart, how is a fly-over waypoint depicted and how does it differ from a fly-by waypoint?",
    choices: [
      "A fly-over waypoint is a star symbol; the aircraft begins the turn before reaching it",
      "A fly-over waypoint is a star inside a circle; the aircraft must pass over the waypoint before turning, whereas at a fly-by waypoint the turn is anticipated",
      "A fly-over waypoint is a filled triangle; it is always the missed approach point",
      "A fly-over waypoint is a star inside a circle; it may be used only as an IAF"
    ],
    a: 1,
    exp: "A fly-by waypoint (four-pointed star) lets the RNAV system turn early so the aircraft rolls out on the next leg without overshooting; a fly-over waypoint (star inside a circle) requires overflight before the turn, typically at a MAP or where obstacle clearance demands it. Knowing which type you are approaching tells you when the GPS will sequence and begin the turn."
  },
  {
    id: "charts-mcq-004", type: "mcq", topic: "charts", ref: "AIM 5-4-9", tags: ["ipc"],
    q: "A holding pattern is charted in bold at the IAF with the note 'Hold-in-lieu of PT.' You arrive at the IAF from a direction that is not marked NoPT. How many circuits do you fly?",
    choices: [
      "As many as needed to lose altitude, then advise ATC when inbound",
      "None; the hold is only for ATC-assigned holding",
      "One circuit (the entry) and then proceed inbound, unless you request more and ATC approves",
      "Two circuits, since the first is the entry and the second establishes the inbound course"
    ],
    a: 2,
    exp: "AIM 5-4-9: a hold-in-lieu of procedure turn is a required course reversal unless NoPT applies or ATC clears you straight-in. You fly the appropriate entry and one circuit and then proceed inbound; additional circuits require a request and clearance. If you are already in the hold when cleared for the approach, you do not fly another circuit unless you ask. A HILPT is depicted with a thick line, unlike thin-line enroute holds."
  },
  {
    id: "charts-mcq-005", type: "mcq", topic: "charts", ref: "AIM 5-4-5", tags: ["ipc"],
    q: "What does a Terminal Arrival Area (TAA) on an RNAV approach provide?",
    choices: [
      "An area in which radar vectors are mandatory before joining the approach",
      "An area of 25 NM in which the MSA may be used as an initial approach altitude",
      "A transition from the enroute structure to the approach with minimum altitudes in each sector (typically 30 NM) and NoPT when arriving within the sectors",
      "An area in which approach control takes responsibility for terrain clearance"
    ],
    a: 2,
    exp: "The TAA, usually a 'T' or 'Y' configuration with straight-in, left-base, and right-base areas, gives a minimum altitude per sector (often within 30 NM of the IF/IAF) that provides obstacle clearance so you can descend from the enroute structure without vectors and proceed to the IAF, normally NoPT. Sectors may be subdivided by distance or radial. Altitudes are depicted on the plan view icons; if cleared for the approach within the TAA you may descend to the TAA altitude."
  },
  {
    id: "charts-mcq-006", type: "mcq", topic: "charts", ref: "AIM 5-3-4; FAA Chart User's Guide (IFR Enroute)", tags: ["ipc"],
    q: "On an IFR low altitude enroute chart, an altitude shown as '*3500' beneath an airway segment is what?",
    choices: [
      "The MEA for GPS-equipped aircraft",
      "The MRA at which the next fix can be identified",
      "The MAA for that segment",
      "The MOCA, which provides obstacle clearance but navaid coverage only within 22 NM of the VOR"
    ],
    a: 3,
    exp: "An asterisk preceding an altitude on the enroute chart designates a MOCA. The MEA is printed without the asterisk; an MCA is shown with an 'X' flag and the altitude/direction; an MRA with an 'R' flag; an MAA as 'MAA-17000'. A GPS MEA, where published, is shown with a 'G' suffix (e.g., '3500G')."
  },
  {
    id: "charts-mcq-007", type: "mcq", topic: "charts", ref: "AIM 5-3-2; FAA Chart User's Guide (IFR Enroute)", tags: ["ipc"],
    q: "How are compulsory and non-compulsory reporting points depicted on enroute charts, and when must you report over a compulsory point?",
    choices: [
      "Compulsory: solid (filled) triangle; non-compulsory: open triangle; position reports over compulsory points are required only when not in radar contact",
      "Compulsory: open triangle; non-compulsory: solid triangle; reports are required at all times",
      "Compulsory: solid triangle; non-compulsory: open triangle; reports are required at all times",
      "Both are open triangles; the chart note states which require reports"
    ],
    a: 0,
    exp: "A solid triangle marks a compulsory reporting point and an open triangle a non-compulsory one. AIM 5-3-2: position reports over compulsory points are required unless ATC has you in radar contact and says so ('radar contact' suspends position reporting). If you later hear 'radar contact lost' or 'radar service terminated,' resume reporting."
  },
  {
    id: "charts-mcq-008", type: "mcq", topic: "charts", ref: "AIM 5-3-6", tags: ["ipc"],
    q: "A changeover point (COP) symbol appears on an airway between two VORs, with mileages on each side. What does it indicate?",
    choices: [
      "The point at which the airway MEA changes",
      "The point at which to switch from the navaid behind you to the one ahead, when it is not the midpoint of the segment",
      "The point at which ATC frequency changes from one center sector to another",
      "A mandatory position report when not in radar contact"
    ],
    a: 1,
    exp: "Normally you change over at the midpoint between navaids or at a turn point. When signal coverage or interference dictates a different location, a COP is charted with the distance from each VOR. Changing over at the COP keeps you within acceptable signal range and avoids tracking an unreliable radial."
  },
  {
    id: "charts-mcq-009", type: "mcq", topic: "charts", ref: "AIM 5-3-4", tags: ["ipc"],
    q: "What is a 'T' route on the IFR low altitude enroute chart?",
    choices: [
      "A tower-enroute-control route published for flights between terminal areas",
      "A terminal transition route flown only on vectors",
      "A low-altitude RNAV route (GPS) usable from 1,200 ft AGL (or higher where charted) up to but not including 18,000 ft MSL, often used to route around busy terminal airspace",
      "A VOR airway restricted to turbine aircraft"
    ],
    a: 2,
    exp: "T-routes are low-altitude RNAV routes requiring GPS (Q-routes are their high-altitude counterparts). They are shown in blue on the low enroute chart and provide published routes through or around Class B/C airspace where ground-based airways are inconvenient. Victor airways, in contrast, are based on VOR radials and are depicted in black."
  },
  {
    id: "charts-mcq-010", type: "mcq", topic: "charts", ref: "FAA Chart User's Guide; IPH Ch. 4", tags: ["ipc"],
    q: "How often are FAA Terminal Procedures Publications (approach plates) and IFR enroute charts revised?",
    choices: ["Every 28 days", "Every 56 days", "Every 6 months", "Every 13 weeks"],
    a: 1,
    exp: "FAA instrument approach procedures (the TPP / d-TPP) and IFR enroute charts are issued on a 56-day cycle aligned with the AIRAC schedule, with NOTAMs covering changes between editions. Using an expired chart means you may be missing amended minimums, new obstacles, or changed procedures; checking the effective dates is part of the approach briefing."
  },
  {
    id: "charts-mcq-011", type: "mcq", topic: "charts", ref: "AIM 1-1-9; AIM 1-1-10", tags: ["ipc"],
    q: "What distinguishes an LDA approach from a standard localizer approach?",
    choices: [
      "The LDA uses a wider 6° or 12° course and is always aligned with the runway",
      "The LDA course is offset from the runway centerline (more than 3°), so straight-in minimums are published only when the offset is 30° or less",
      "The LDA has no glideslope and is flown only to circling minimums",
      "The LDA is a GPS-based localizer-performance approach"
    ],
    a: 1,
    exp: "An LDA is of comparable accuracy and width to a localizer but is not aligned with the runway; straight-in minimums may be published when the offset does not exceed 30°, otherwise only circling. Some LDAs include a glideslope. The SDF is the one with a fixed 6° or 12° course width and may be slightly offset; it is less precise than a localizer."
  },
  {
    id: "charts-mcq-012", type: "mcq", topic: "charts", ref: "AIM 1-1-9", tags: ["ipc"],
    q: "What are the standard lowest minimums for a Category I ILS with all components operating and touchdown zone/centerline lighting?",
    choices: [
      "DH 100 ft and RVR 1,200",
      "DH 250 ft and RVR 2,400",
      "DH 200 ft and RVR 1,800",
      "DH 200 ft and 1 SM visibility"
    ],
    a: 2,
    exp: "AIM 1-1-9: CAT I is DH 200 ft and RVR 2,400, reduced to RVR 1,800 with touchdown zone and centerline lighting (or with an approved autopilot, flight director, or HUD to DA). CAT II is DH 100 ft and RVR 1,200; CAT IIIa no DH or below 100 ft with RVR not less than 700; IIIb RVR 150–700; IIIc no DH and no RVR limitation. CAT II/III require special aircraft, crew, and operator authorization."
  },
  {
    id: "charts-mcq-013", type: "mcq", topic: "charts", ref: "14 CFR 91.175(h)", tags: ["ipc"],
    q: "The ILS minimums list RVR 2400, but RVR is not reported for that runway. What ground visibility is the equivalent?",
    choices: ["1/4 SM", "3/4 SM", "1 SM", "1/2 SM"],
    a: 3,
    exp: "91.175(h) converts RVR to ground visibility when RVR is not reported: 1,600 = 1/4 SM; 2,400 = 1/2 SM; 3,200 = 5/8 SM; 4,000 = 3/4 SM; 4,500 = 7/8 SM; 5,000 = 1 SM; 6,000 = 1 1/4 SM. The conversion does not apply to CAT II/III minimums. Remember that for Part 91 it is flight visibility that controls at DA."
  },
  {
    id: "charts-mcq-014", type: "mcq", topic: "charts", ref: "AIM 2-1-1", tags: ["ipc"],
    q: "Which approach lighting system includes red side-row bars, which allow descent below 100 ft above TDZE using the approach lights alone?",
    choices: ["MALSR", "ALSF-2", "ODALS", "SSALR"],
    a: 1,
    exp: "ALSF-2 (and ALSF-1's red terminating bars) is the high-intensity system with red side-row bars in the inner 1,000 ft, used for CAT II/III runways. MALSR (medium intensity with runway alignment indicator lights) and SSALR are 2,400-ft systems without red bars, so with them you must see another visual reference, such as the threshold or runway lights, to descend below 100 ft above TDZE. ODALS is a simple omnidirectional flashing system for non-precision runways."
  },
  {
    id: "charts-mcq-015", type: "mcq", topic: "charts", ref: "AIM 5-4-5; AIM 5-4-20", tags: ["ipc"],
    q: "The minimums section of a plate shows 'Circling NA' for a sector, and the notes read 'Circling NA east of Rwy 18-36 at night.' What is the proper interpretation?",
    choices: [
      "Circling is prohibited at all times on that side of the airport",
      "Circling east of the runway is not authorized at night because obstacles there cannot be seen; circling on that side by day is still permitted",
      "The note applies only to Category C and D aircraft",
      "Circling east of the runway is permitted at night only if the airport has a VASI/PAPI"
    ],
    a: 1,
    exp: "Circling restrictions are published when terrain or obstacles in a sector cannot be protected to the circling MDA under certain conditions; 'at night' limits the restriction to night operations. Read the notes section and the minimums box carefully, because such notes also commonly restrict categories (e.g., 'Circling NA Cat D') or sectors ('Circling NA northwest of Rwy 9-27'). A 'visual segment obstacle' note on a plate similarly warns that the final visual segment is not obstacle-free to 34:1."
  },

  // ---------- charts / card ----------
  {
    id: "charts-card-001", type: "card", topic: "charts", ref: "AIM 5-4-5; FAA Chart User's Guide (Terminal Procedures)", tags: ["ipc"],
    front: "Anatomy of an FAA approach plate (top to bottom)",
    back: "1. Pilot briefing strip: primary navaid/frequency & final course, runway/TDZE/airport elevation, notes, lighting, missed approach text, communications frequencies.\n2. Plan view: IAFs, feeder routes, course reversal, MSA, TAA, obstacles.\n3. Profile view: altitudes per segment, FAF, step-downs, glideslope angle/TCH, VDP, missed approach icons.\n4. Minimums: by approach type (LPV, LNAV/VNAV, LNAV, CIRCLING) and category (A–E), DA/MDA, visibility, HAT/HAA.\n5. Airport sketch: runways, lighting, TDZE, time-to-MAP table (when applicable)."
  },
  {
    id: "charts-card-002", type: "card", topic: "charts", ref: "AIM 5-2-9; AIM 5-4-5", tags: ["ipc"],
    front: "Triangle symbols on approach plates: 'T', 'A', 'A NA'",
    back: "T (white T in black triangle): non-standard IFR takeoff minimums and/or an Obstacle Departure Procedure exist; see TPP front section.\nA (white A in black triangle): non-standard alternate minimums (higher than 600-2 / 800-2); see TPP front section.\nA NA: airport may not be used as an alternate (usually no weather reporting or unmonitored navaid)."
  },
  {
    id: "charts-card-003", type: "card", topic: "charts", ref: "AIM 2-1-1", tags: ["ipc"],
    front: "Common approach lighting systems",
    back: "ALSF-2: high intensity, ~2,400–3,000 ft, sequenced flashers, RED side-row bars (CAT II/III). ALSF-1: red terminating bars.\nMALSR: medium intensity, ~2,400 ft total (1,400 ft lights + 1,000 ft RAIL flashers); most common CAT I system.\nSSALR: simplified short ALS with RAIL, ~2,400 ft.\nMALSF / SSALF: 1,400 ft with sequenced flashers for non-precision runways.\nODALS: 7 omnidirectional flashers, 1,500 ft, non-precision.\nOnly red terminating/side-row bars let you descend below 100 ft above TDZE on approach lights alone."
  },
  {
    id: "charts-card-004", type: "card", topic: "charts", ref: "AIM 1-1-9", tags: ["ipc"],
    front: "ILS categories: DH and RVR",
    back: "CAT I: DH 200 ft, RVR 2,400 (1,800 with TDZ/CL lighting, or with approved autopilot/FD/HUD to DA).\nSpecial Authorization CAT I: DH 150 ft, RVR 1,400 (HUD to DH).\nCAT II: DH 100 ft, RVR 1,200 (1,000 with autoland/HUD to touchdown).\nCAT IIIa: no DH or DH <100 ft, RVR ≥700.\nCAT IIIb: no DH or DH <50 ft, RVR 150–700.\nCAT IIIc: no DH, no RVR limit.\nCAT II/III require special authorization."
  },
  {
    id: "charts-card-005", type: "card", topic: "charts", ref: "14 CFR 91.175(h)", tags: ["ipc"],
    front: "RVR to ground visibility conversion (when RVR not reported)",
    back: "RVR 1,600 = 1/4 SM\nRVR 2,400 = 1/2 SM\nRVR 3,200 = 5/8 SM\nRVR 4,000 = 3/4 SM\nRVR 4,500 = 7/8 SM\nRVR 5,000 = 1 SM\nRVR 6,000 = 1 1/4 SM\n(Does not apply to CAT II/III minimums.)"
  },
  {
    id: "charts-card-006", type: "card", topic: "charts", ref: "FAA Chart User's Guide (IFR Enroute); AIM 5-3-4", tags: ["ipc"],
    front: "IFR low enroute chart symbols: altitudes, routes, reporting points",
    back: "MEA: plain altitude (e.g., 4000). 'G' suffix = GPS MEA.\nMOCA: asterisk (*3500).\nMCA: 'X' flag with altitude and direction.\nMRA: 'R' flag with altitude.\nMAA: 'MAA-17000'.\nVictor airways: black 'V' routes (VOR-based). T-routes: blue 'T' routes (RNAV/GPS).\nSolid triangle: compulsory reporting point. Open triangle: non-compulsory.\nCOP: changeover symbol with mileage to each navaid.\nMTA: minimum turning altitude flag where a turn needs extra clearance."
  },

  // ---------- charts / scenario ----------
  {
    id: "charts-scn-001", type: "scenario", topic: "charts", ref: "AIM 5-4-5; 14 CFR 91.169(c)", tags: ["ipc", "c172"],
    q: "Planning a night IFR flight in a C172S, you select an alternate with an ILS and a forecast of 700 overcast and 2 SM at your ETA. While briefing the ILS plate you notice the 'A' triangle in the notes. The TPP alternate minimums section lists that airport as 'ILS Rwy 9: 900-2½; LOC Rwy 9: NA.' What is your conclusion?",
    choices: [
      "The airport is acceptable; standard precision minimums of 600-2 apply because the ILS is a precision approach",
      "The airport is not acceptable as an alternate; the published non-standard minimums (900-2½) exceed the forecast 700-2",
      "The airport is acceptable only if you plan the localizer approach instead of the ILS",
      "The airport is acceptable because alternate minimums are only advisory for Part 91 operations"
    ],
    a: 1,
    exp: "The 'A' triangle tells you standard alternate minimums do not apply; the published values govern. 91.169(c)(1)(i)(A) requires using the alternate minimums specified for the procedure, so 900-2½ is the test, and a forecast of 700-2 fails it. The localizer is listed NA for alternate purposes. Alternate minimums are regulatory for Part 91 filing even though you may actually fly the approach to its published minimums if you divert there."
  },
  {
    id: "charts-scn-002", type: "scenario", topic: "charts", ref: "AIM 5-4-5; AIM 5-4-20", tags: ["ipc", "pa44"],
    q: "You are briefing the RNAV (GPS) RWY 17 approach for a Seminole at 1.3 Vso of 72 kt, but the winds favor runway 35 and you plan to circle. The minimums show LNAV MDA 1,020 ft for all categories and CIRCLING 1,180-1 (Cat A), 1,180-1 (Cat B), 1,240-1½ (Cat C). A note reads 'Circling to Rwy 35 NA at night' and the inverse 'C' symbol appears beside the circling minimums. It is 2100 local. What do you brief?",
    choices: [
      "Circle at 1,180 ft using Category A, since 72 kt is below 91 kt, staying within the expanded radius",
      "Circle at 1,240 ft using Category C because you will fly 100 kt on downwind",
      "Circling to runway 35 is not available at night; brief a straight-in to runway 17 with the tailwind if acceptable, or choose another airport/approach",
      "Circle at 1,180 ft using Category B, because the inverse 'C' means the standard (smaller) circling radius applies"
    ],
    a: 2,
    exp: "The notes section controls: circling to runway 35 is not authorized at night, so at 2100 local the circling option is off the table regardless of category. You would evaluate landing straight-in on 17 with the tailwind against your performance numbers, or go elsewhere. Had circling been available, you would use the category for the speed you actually fly, and the inverse 'C' indicates the expanded (larger) circling radii, not the smaller legacy ones."
  },

  // ---------- charts / oral ----------
  {
    id: "charts-oral-001", type: "oral", topic: "charts", ref: "IPH Ch. 4; AIM 5-4-5", tags: ["ipc"],
    q: "Brief me an instrument approach the way you would before flying it.",
    answer: "I start with the identity: the approach name, runway, airport, chart date and amendment number, and confirm it matches what ATC cleared me for and what's loaded in the GPS. Then the briefing strip: primary navaid and frequency, final approach course, TDZE and airport elevation, the notes including any 'T' or 'A' symbols, cold temperature or RAIM/WAAS notes, the lighting, and the missed approach in full. Then the plan view: how I'll get to the IAF, whether a course reversal is required or NoPT applies, the MSA. Then the profile: initial altitude, FAF and step-down altitudes, glideslope intercept or descent angle, VDP, the MAP and how I'll identify it. Then the minimums line for my approach type and category: DA or MDA, visibility, and the equivalent ground visibility. Finally, the airport sketch: runway length, lighting, and what I expect to see, plus my go-around decision and who does what.",
    points: ["Verify correct chart, date, runway, and GPS loading", "Briefing strip: navaid, course, TDZE, notes, lighting, missed approach", "Plan view: route to IAF, course reversal/NoPT, MSA", "Profile: altitudes, FAF, step-downs, VDP, MAP identification", "Minimums for type/category, visibility; airport sketch and go-around plan"]
  },
  {
    id: "charts-oral-002", type: "oral", topic: "charts", ref: "AIM 1-1-9", tags: ["ipc"],
    q: "What are the components of an ILS, and what happens to your minimums when components are inoperative?",
    answer: "An ILS has guidance information from the localizer and glideslope, range information from marker beacons or DME or an RNAV fix in lieu, and visual information from the approach lights, touchdown zone and centerline lights, and runway lights. The localizer is on 108.10 to 111.95 MHz on odd tenths, with the glideslope paired automatically in the UHF band; the localizer is about 700 ft wide at threshold and the glideslope is normally 3° and 1.4° thick. If the glideslope fails, the approach becomes a localizer approach to the LOC MDA. If the approach lights or other visual components are out, the Inoperative Components table in the TPP raises the visibility minimums. A localizer failure makes the approach unusable; you'd need another approach. Markers can be replaced by DME, a radar fix, or a published RNAV fix.",
    points: ["Guidance (LOC/GS), range (markers/DME/fixes), visual (lighting) components", "LOC width ~700 ft at threshold; GS 3° typical, 1.4° wide", "GS out: fly LOC minimums; LOC out: approach unusable", "Lighting out: Inoperative Components table raises visibility", "Marker substitutes: DME, radar, RNAV fix"]
  },
  {
    id: "charts-oral-003", type: "oral", topic: "charts", ref: "IPH Ch. 4; FAA Chart User's Guide", tags: ["ipc"],
    q: "At a high level, how do Jeppesen and FAA (government) charts differ, and what should a pilot switching between them watch for?",
    answer: "Both depict the same procedures from the same FAA source data, but the layout and symbology differ. Jeppesen plates are organized by airport in a subscription binder or app, use a standardized briefing strip with the missed approach shown as both text and icons, and tend to include more airport diagram and lighting detail on the same page; FAA plates are organized by state and city in the TPP volumes with a similar but not identical briefing strip. Symbols for fly-over waypoints, MSA depiction, and the way minimums and notes are grouped differ, and Jeppesen may round or present values slightly differently. When switching, I slow down my briefing, confirm effective dates since Jepp revision cycles and FAA 56-day cycles differ, and make sure I know where the notes, alternate and takeoff minimums, and the inoperative components information live on that format.",
    points: ["Same FAA source data; different layout and symbols", "Jepp organized by airport; FAA by state/city in TPP", "Briefing strip, missed approach depiction, and notes placement differ", "Check effective dates: different revision cycles", "Brief more deliberately when switching formats"]
  },
  {
    id: "charts-oral-004", type: "oral", topic: "charts", ref: "AIM 5-4-5; AIM 1-2-1", tags: ["ipc"],
    q: "Explain the TAA on an RNAV approach, the difference between fly-by and fly-over waypoints, and how you'd use a VDP.",
    answer: "A Terminal Arrival Area replaces feeder routes and procedure turns on many RNAV approaches: it divides the airspace around the IF/IAF into sectors, usually a straight-in area and left and right base areas out to 30 NM, each with a minimum altitude providing obstacle clearance; once cleared for the approach within a TAA sector I can descend to that altitude and proceed to the IAF, normally without a course reversal. Fly-by waypoints, shown as plain stars, let the navigator anticipate the turn so I roll out on the next leg; fly-over waypoints, shown as circled stars, must be overflown before turning, as at a missed approach point. The VDP on a straight-in non-precision approach is the point on final where a normal descent from MDA to touchdown can begin; if I'm not visual by the VDP I plan on the missed, and I never descend below MDA before it.",
    points: ["TAA: sectors with minimum altitudes out to ~30 NM; NoPT when within", "Descend to TAA altitude when cleared for the approach within the sector", "Fly-by: turn anticipated; fly-over (circled): overfly before turning", "VDP: normal descent point from MDA; identify by DME/distance or timing", "Not visual at VDP: plan for missed; no descent below MDA before VDP"]
  },

  /* =====================================================================
     NAVIGATION & GPS  (topic: "nav")
     ===================================================================== */

  // ---------- nav / mcq ----------
  {
    id: "nav-mcq-001", type: "mcq", topic: "nav", ref: "AIM 1-1-3; IFH Ch. 9", tags: ["ipc"],
    q: "On a standard VOR course deviation indicator, what does a full-scale deflection represent, and how much is each dot?",
    choices: [
      "5° full scale; 1° per dot",
      "10° full scale; 2° per dot",
      "20° full scale; 4° per dot",
      "10° full scale; 1° per dot"
    ],
    a: 1,
    exp: "A VOR CDI shows 10° of course deviation at full scale (five dots) so each dot is 2°. Because this is angular, the linear distance off course per dot grows with distance from the station: at 60 NM, one dot is about 2 NM. This is why the same CDI shows ±2.5° full scale on a localizer (roughly four times more sensitive) and why GPS CDI scaling is linear instead."
  },
  {
    id: "nav-mcq-002", type: "mcq", topic: "nav", ref: "IFH Ch. 9", tags: ["ipc"],
    q: "When will a conventional VOR/LOC CDI (not an HSI) exhibit reverse sensing?",
    choices: [
      "Whenever tracking a radial inbound TO the station",
      "Whenever the OBS is set to the reciprocal of the course being flown, and on a localizer back course when flying inbound with the front course not set (no HSI)",
      "Only when flying a localizer back course approach",
      "Whenever passing through the cone of confusion"
    ],
    a: 1,
    exp: "A CDI senses normally when the OBS is set to the course you are flying; set it 180° off and the needle moves away from the course. A localizer has no OBS input, so inbound on the back course a conventional CDI reverse-senses (fly away from the needle); an HSI corrects this if you set the course pointer to the published front course. Front-course inbound and back-course outbound are normal sensing."
  },
  {
    id: "nav-mcq-003", type: "mcq", topic: "nav", ref: "IFH Ch. 9", tags: ["ipc"],
    q: "Your RMI needle points to 240° while you are heading 090°. What radial are you on, and what is the magnetic bearing to the station?",
    choices: [
      "Radial 240; bearing to station 060",
      "Radial 150; bearing to station 330",
      "Radial 060; bearing to station 240",
      "Radial 330; bearing to station 150"
    ],
    a: 2,
    exp: "An RMI needle head always shows the magnetic bearing TO the station regardless of heading, and the tail shows the radial you are on (the bearing FROM the station). Head 240 means the station bears 240° from you, so you are on the 060 radial. Heading does not change the answer; it only changes where on the card the needle sits."
  },
  {
    id: "nav-mcq-004", type: "mcq", topic: "nav", ref: "AIM 1-1-8", tags: ["ipc"],
    q: "What is the standard service volume of a High-altitude (H) class VOR between 18,000 and 45,000 ft?",
    choices: ["40 NM", "100 NM", "130 NM", "200 NM"],
    a: 2,
    exp: "AIM 1-1-8 legacy classes: Terminal 25 NM from 1,000 to 12,000 ft; Low 40 NM from 1,000 to 18,000 ft; High 40 NM from 1,000 to 14,500 ft, 100 NM from 14,500 to 18,000 and again from 45,000 to 60,000, and 130 NM from 18,000 to 45,000 ft. Newer VL/VH classes extend coverage to 70 NM above 5,000 ft. Service volumes guarantee usable signal only within those limits unless an airway or route is specifically flight-checked beyond them."
  },
  {
    id: "nav-mcq-005", type: "mcq", topic: "nav", ref: "AIM 1-1-7; IFH Ch. 9", tags: ["ipc"],
    q: "You are at 12,000 ft (about 2 NM up) directly over a DME station. What will the DME read, and why?",
    choices: [
      "0 NM, because you are over the station",
      "About 2 NM, because DME measures slant range",
      "About 12 NM, because DME reads altitude in thousands of feet over the station",
      "The last valid reading, because DME unlocks in the cone of confusion"
    ],
    a: 1,
    exp: "DME measures the straight-line (slant) distance from the aircraft to the antenna, so over the station it reads your altitude expressed in nautical miles (12,000 ft ≈ 2 NM). The error is greatest when high and close; at distances greater than about 3 times your altitude in NM it is negligible. DME groundspeed is accurate only when flying directly to or from the station; on an arc it reads near zero."
  },
  {
    id: "nav-mcq-006", type: "mcq", topic: "nav", ref: "AIM 1-1-9", tags: ["ipc"],
    q: "A localizer signal is guaranteed usable out to what distances?",
    choices: [
      "25 NM within 10° of course; 17 NM within 35°",
      "10 NM within 10° of course; 5 NM within 35°",
      "18 NM within 10° of the course centerline; 10 NM between 10° and 35°",
      "18 NM in all directions within 35°"
    ],
    a: 2,
    exp: "AIM 1-1-9: localizer coverage is 18 NM within 10° of the course and 10 NM between 10° and 35° either side, between 1,000 ft above the highest terrain along the course and 4,500 ft above the antenna. Beyond those limits the signal is not flight-checked and should not be used for navigation, which is why you should not expect a reliable localizer when ATC vectors you to join 25 miles out."
  },
  {
    id: "nav-mcq-007", type: "mcq", topic: "nav", ref: "AIM 1-1-9; IFH Ch. 9", tags: ["ipc"],
    q: "The ILS glideslope is typically projected at what angle and how thick is the usable beam?",
    choices: [
      "2.5° angle; 0.7° thick",
      "3° angle; 1.4° thick (about 0.7° above and below the path)",
      "3° angle; 3° thick",
      "3.5° angle; 1.4° thick"
    ],
    a: 1,
    exp: "The glideslope is normally 3° (some are steeper for terrain) and is 1.4° wide vertically, giving full-scale deflection about 0.7° above or below the path. That makes it far more sensitive than the localizer, and the sensitivity increases as you approach the runway. False glideslopes exist at multiples of the true angle (about 6°, 9°), always above the real one, so intercept from below at the published altitude."
  },
  {
    id: "nav-mcq-008", type: "mcq", topic: "nav", ref: "AIM 1-1-9; IFH Ch. 9", tags: ["ipc"],
    q: "Which marker beacon indication is correct?",
    choices: [
      "Outer marker: amber light, 1300 Hz, dashes",
      "Middle marker: blue light, 400 Hz, alternating dots and dashes",
      "Inner marker: white light, 3000 Hz, continuous dots",
      "Outer marker: white light, 3000 Hz, dashes"
    ],
    a: 2,
    exp: "Marker beacons transmit on 75 MHz; the audio tone and light identify which one: outer marker 400 Hz, blue, continuous dashes (about 4–7 NM from threshold near glideslope intercept); middle marker 1300 Hz, amber, alternating dots and dashes (about 3,500 ft from threshold, near 200 ft HAT on a 3° slope); inner marker 3000 Hz, white, continuous dots (CAT II DH). Many markers have been decommissioned and replaced by DME or RNAV fixes."
  },
  {
    id: "nav-mcq-009", type: "mcq", topic: "nav", ref: "AIM 1-1-17; AIM 1-1-18", tags: ["ipc"],
    q: "Flying an RNAV (GPS) approach, when should the receiver change from terminal (±1 NM) to approach sensitivity, and what is full-scale deflection for LNAV in the approach segment?",
    choices: [
      "At the IAF; ±1 NM",
      "At 30 NM from the airport; ±0.3 NM",
      "At the FAF; ±0.1 NM",
      "Beginning 2 NM before the FAF, ramping to ±0.3 NM at the FAF"
    ],
    a: 3,
    exp: "Within 30 NM of the destination the receiver goes to terminal mode (±1 NM). Starting 2 NM before the FAWP, sensitivity ramps from ±1 NM to ±0.3 NM for LNAV (LPV becomes angular, similar to an ILS). If the approach mode is not active (LNAV/LPV annunciated) by 2 NM prior to the FAF, the equipment will flag and you must not descend; fly to the MAP and go missed. Enroute scaling is ±2 NM for WAAS units and ±5 NM for older TSO-C129 receivers."
  },
  {
    id: "nav-mcq-010", type: "mcq", topic: "nav", ref: "IFH Ch. 9; AIM 1-1-17", tags: ["ipc"],
    q: "How many satellites does RAIM require, and how many for fault detection and exclusion (FDE)?",
    choices: [
      "4 for RAIM; 5 for FDE",
      "5 for RAIM (or 4 plus baro-aiding); 6 for FDE (or 5 plus baro-aiding)",
      "6 for RAIM; 8 for FDE",
      "3 for RAIM; 4 for FDE"
    ],
    a: 1,
    exp: "Four satellites give a 3-D position; a fifth lets the receiver cross-check and detect a faulty one (RAIM), and a sixth lets it identify and exclude the bad satellite and keep navigating (FDE). Baro-aiding substitutes for one satellite. Before a flight relying on non-WAAS GPS for an approach, AIM 1-1-17 requires a RAIM prediction for the ETA (±1 hour via FSS or the receiver's prediction function); if RAIM is not predicted, plan another approach, route, or time."
  },
  {
    id: "nav-mcq-011", type: "mcq", topic: "nav", ref: "AIM 1-1-17; AIM 1-1-18", tags: ["ipc"],
    q: "Which statement about GPS alternate planning is correct?",
    choices: [
      "A WAAS receiver may plan an LPV DA at the alternate because LPV has vertical guidance",
      "A non-WAAS TSO-C129/C196 receiver with FDE may plan a GPS-based approach at the destination or the alternate, but not both",
      "Any IFR GPS may plan GPS approaches at both destination and alternate as long as a RAIM check is done",
      "WAAS receivers may not plan any GPS-based approach at an alternate"
    ],
    a: 1,
    exp: "AIM 1-1-17: TSO-C129/C196 equipment (with FDE and a preflight RAIM check) may rely on GPS at either the destination or the alternate, not both; the other must have a non-GPS approach. WAAS TSO-C145/C146 equipment may plan GPS approaches at both, but at the alternate must plan on LNAV or circling MDA, or LNAV/VNAV only with baro-VNAV; LPV may be flown if available on arrival, but cannot be planned. Standard alternate minimums then apply as non-precision (800-2)."
  },
  {
    id: "nav-mcq-012", type: "mcq", topic: "nav", ref: "AIM 1-1-17", tags: ["ipc"],
    q: "Your GPS navigation database expired three days ago. Which operation is permissible under IFR?",
    choices: [
      "Flying an RNAV (GPS) approach as long as the plate date matches the database cycle",
      "Nothing; the GPS may not be used for any IFR operation with an expired database",
      "Enroute and terminal navigation, provided you verify the waypoints and routes against current charts; approaches require a current database (or verification the procedure has not been amended)",
      "Approaches only, since approach waypoints change rarely"
    ],
    a: 2,
    exp: "AIM 1-1-17 allows enroute and terminal IFR use with an expired database if the pilot verifies the data for correctness against current charts. For approaches the database must be current, or the pilot must verify that the specific procedure has not been amended since the database was issued (the AFM supplement may be more restrictive). Many AFM supplements simply prohibit approaches with an expired database."
  },
  {
    id: "nav-mcq-013", type: "mcq", topic: "nav", ref: "14 CFR 91.225; 14 CFR 91.227", tags: ["ipc", "flight-review"],
    q: "Which airspace requires ADS-B Out under 91.225?",
    choices: [
      "All controlled airspace, including Class E below 10,000 ft MSL",
      "Class A, B, and C; Class E at and above 10,000 ft MSL (excluding below 2,500 ft AGL); within the 30 NM Mode C veil of Class B primary airports; and Class E over the Gulf of Mexico at and above 3,000 ft MSL within 12 NM of the coast",
      "Only Class A and B, and within 30 NM of a Class B primary airport",
      "Class B and C surface areas only, plus above FL180"
    ],
    a: 1,
    exp: "91.225 mirrors the Mode C transponder rule of 91.215 (Class A, B, C; above 10,000 ft MSL except below 2,500 AGL; the 30-NM veil) and adds the Gulf of Mexico Class E area. Above FL180 the equipment must be 1090 MHz extended squitter; below FL180 either 1090ES or 978 MHz UAT is acceptable. 91.227 sets the performance requirements, and ATC may deny deviation requests for non-equipped aircraft."
  },
  {
    id: "nav-mcq-014", type: "mcq", topic: "nav", ref: "IFH Ch. 5", tags: ["ipc"],
    q: "In the Northern Hemisphere, you roll into a turn from a heading of north toward east. What does the magnetic compass initially show?",
    choices: [
      "A turn in the correct direction but lagging; you should roll out before reaching the desired heading (undershoot)",
      "A turn toward the west; it will then reverse and lag behind the actual heading",
      "An immediate, accurate indication because dip error applies only on east/west headings",
      "A turn in the correct direction but leading, so you should overshoot the rollout"
    ],
    a: 1,
    exp: "Magnetic dip causes turning error on northerly and southerly headings. Turning from north, the compass initially swings the opposite way and then lags, so you roll out before the desired heading (Undershoot North); from south it leads, so you roll out after (Overshoot South): UNOS. Acceleration error is the east/west effect: Accelerate shows North, Decelerate shows South (ANDS). The compass is reliable only in straight, level, unaccelerated flight, which is why you reset the heading indicator in those conditions."
  },
  {
    id: "nav-mcq-015", type: "mcq", topic: "nav", ref: "IFH Ch. 9; IFH Ch. 5", tags: ["ipc"],
    q: "You have flown 30 NM from a VOR and find yourself 2 NM left of the desired radial. Using the 1-in-60 rule, what approximate heading correction parallels the course, and what further correction returns you to it over the next 30 NM?",
    choices: [
      "2° right to parallel; an additional 2° right to rejoin",
      "8° right total",
      "4° right to parallel; an additional 4° right (8° total) to rejoin at 30 NM ahead",
      "1° right to parallel; an additional 1° to rejoin"
    ],
    a: 2,
    exp: "The 1-in-60 rule: 1° of track error produces about 1 NM of off-course distance per 60 NM flown. Two NM in 30 NM is a 4° error, so 4° right parallels the course; to close 2 NM in the next 30 NM requires another 4°, for 8° total until you re-intercept, then back off to 4°. The same thinking underlies bracketing on a VOR radial and holding wind corrections, and the heading indicator must be accurate for it to work, so reset it to the compass every 15 minutes or so in unaccelerated flight."
  },

  // ---------- nav / card ----------
  {
    id: "nav-card-001", type: "card", topic: "nav", ref: "AIM 1-1-8", tags: ["ipc"],
    front: "VOR standard service volumes (legacy T/L/H and new VL/VH)",
    back: "T (Terminal): 25 NM, 1,000–12,000 ft above the facility.\nL (Low): 40 NM, 1,000–18,000 ft.\nH (High): 40 NM 1,000–14,500 ft; 100 NM 14,500–18,000; 130 NM 18,000–45,000; 100 NM 45,000–60,000.\nVL (new): 40 NM 1,000–5,000 ft; 70 NM 5,000–18,000 ft.\nVH (new): 40 NM 1,000–5,000; 70 NM 5,000–14,500; then same as H above 14,500.\nAirways/routes may be flight-checked beyond SSV; random (off-route) navigation may not."
  },
  {
    id: "nav-card-002", type: "card", topic: "nav", ref: "AIM 1-1-9; IFH Ch. 9", tags: ["ipc"],
    front: "ILS numbers to know: localizer, glideslope, markers",
    back: "LOCALIZER: 108.10–111.95 MHz (odd tenths); coverage 18 NM within 10°, 10 NM from 10°–35°; width tailored 3°–6° so full scale is ~700 ft at threshold; CDI full scale ±2.5°; antenna at far end of runway.\nGLIDESLOPE: UHF 329.15–335.0 MHz, auto-paired; 3° typical; 1.4° thick; false slopes above the true one; antenna ~750–1,250 ft from threshold.\nMARKERS (75 MHz): OM 400 Hz, blue, dashes (4–7 NM); MM 1300 Hz, amber, dot-dash (~3,500 ft, ~200 ft HAT); IM 3000 Hz, white, dots (CAT II DH)."
  },
  {
    id: "nav-card-003", type: "card", topic: "nav", ref: "AIM 1-1-17; AIM 1-1-18", tags: ["ipc"],
    front: "GPS CDI scaling and mode annunciations",
    back: "ENROUTE: ±2 NM (WAAS) / ±5 NM (TSO-C129) full scale.\nTERMINAL: ±1 NM within 30 NM of departure/destination ('TERM').\nAPPROACH: ramps from ±1 NM at 2 NM before FAF to ±0.3 NM at FAF for LNAV ('LNAV'/'LNAV+V'); LPV/LP are angular, ILS-like ('LPV', 'LP').\nMISSED: ±0.3 NM then ±1 NM after sequencing.\nApproach mode must be active by 2 NM prior to FAF or do not descend.\n'LOI' = loss of integrity: do not use for approach; go missed if already inside FAF.\n'+V' = advisory vertical guidance only; fly to LNAV MDA."
  },
  {
    id: "nav-card-004", type: "card", topic: "nav", ref: "AIM 1-1-18; AIM 5-4-5", tags: ["ipc"],
    front: "RNAV (GPS) minima lines: LPV, LP, LNAV/VNAV, LNAV",
    back: "LPV: WAAS lateral + vertical, angular, DA; APV (not precision); DA can be as low as 200 ft HAT.\nLP: WAAS lateral only, angular (localizer-like), MDA; used where terrain prevents LPV.\nLNAV/VNAV: lateral GPS + vertical from WAAS or baro-VNAV; DA; baro-VNAV has temperature limits on the chart.\nLNAV: lateral only, linear 0.3 NM, MDA; '+V' advisory glidepath may be shown but minimums are still the MDA.\nAlternate planning: WAAS plans on LNAV/circling (or LNAV/VNAV with baro-VNAV); never on LPV."
  },
  {
    id: "nav-card-005", type: "card", topic: "nav", ref: "IFH Ch. 5", tags: ["ipc"],
    front: "Magnetic compass errors and heading indicator precession",
    back: "VARIATION: true vs magnetic north. DEVIATION: aircraft magnetic fields (compass card).\nDIP / TURNING ERROR (N. Hemisphere): UNOS: Undershoot rolling out on North, Overshoot on South; lag/lead ≈ latitude.\nACCELERATION ERROR (E/W headings): ANDS: Accelerate → North, Decelerate → South.\nOSCILLATION: turbulence swings the card; read the average.\nReliable only straight, level, unaccelerated.\nHEADING INDICATOR: gyro precession (friction, earth rotation) → reset to compass about every 15 min in straight-and-level unaccelerated flight."
  },
  {
    id: "nav-card-006", type: "card", topic: "nav", ref: "AIM 1-2-1; AIM 1-2-2; AIM 5-4-18", tags: ["ipc"],
    front: "RNAV vs RNP, and ADS-B Out basics",
    back: "RNAV: navigation on any desired path within coverage of navaids/self-contained systems.\nRNP: RNAV plus onboard performance monitoring and alerting; the number is the 95% lateral accuracy in NM (RNP 2 enroute, RNP 1 terminal, RNP 0.3 approach).\nRNP AR: authorization required; special training/aircraft; curved RF legs and RNP < 0.3.\nADS-B OUT (91.225/91.227): required in Class A, B, C; Class E ≥10,000 MSL (not <2,500 AGL); 30 NM Mode C veil; Gulf Class E ≥3,000 MSL within 12 NM. 1090ES required above FL180; UAT (978) acceptable below."
  },

  // ---------- nav / scenario ----------
  {
    id: "nav-scn-001", type: "scenario", topic: "nav", ref: "AIM 1-1-17; 14 CFR 91.169", tags: ["ipc", "pa44"],
    q: "You are planning an IFR trip in a PA-44 with a non-WAAS, FDE-capable TSO-C129 GPS and one VOR/LOC receiver. The destination has an ILS and an RNAV (GPS) approach; the only candidate alternate within fuel range has an RNAV (GPS) LNAV approach and a VOR-A approach. Weather at both is forecast 900 overcast and 2 SM. What is a legal plan?",
    choices: [
      "File the alternate planning on the RNAV LNAV and plan the RNAV at the destination too, since a RAIM check covers both",
      "Plan the ILS at the destination and base the alternate on the VOR-A (800-2 non-precision), after a RAIM prediction for whichever GPS approach you might actually use",
      "Plan the RNAV at the destination and the RNAV LNAV at the alternate; non-WAAS rules permit this when the receiver has FDE",
      "You cannot file at all because the alternate has no precision approach"
    ],
    a: 1,
    exp: "With TSO-C129/C196 equipment, GPS may be the basis for the approach at either the destination or the alternate, but not both; the other must have a non-GPS approach you are equipped to fly. The destination's ILS and the alternate's VOR-A satisfy that. The VOR-A is non-precision, so the alternate must be forecast at least 800-2, which 900-2 meets. A preflight RAIM prediction is still required for any GPS approach you may rely on."
  },
  {
    id: "nav-scn-002", type: "scenario", topic: "nav", ref: "AIM 1-1-17; AIM 5-4-21", tags: ["ipc", "c172"],
    q: "In a C172S on the RNAV (GPS) RWY 14 approach, LNAV minimums, the receiver annunciates 'LOI' (loss of integrity) about 3 NM before the FAF while you are descending to the FAF altitude in IMC. What should you do?",
    choices: [
      "Continue to the FAF; if integrity returns before the FAF you can continue the approach, otherwise fly the missed from the FAF",
      "Do not descend below the current altitude; continue to the missed approach point via the FAF and execute the missed approach (or request vectors/another approach), and advise ATC",
      "Switch to LNAV+V advisory guidance and continue to the MDA",
      "Continue the approach using dead reckoning and timing since the position was good a moment ago"
    ],
    a: 1,
    exp: "AIM 1-1-17: if a RAIM/integrity failure or alert occurs before the FAWP, the approach must not be completed; proceed to the MAWP via the FAWP, fly the missed approach, and tell ATC. If the alert occurs after the FAWP, immediately climb and execute the missed approach. With integrity lost the position may be wrong without warning, so neither advisory vertical guidance nor timing is an acceptable substitute. Then coordinate with ATC for a non-GPS approach or wait for integrity to be restored."
  },

  // ---------- nav / oral ----------
  {
    id: "nav-oral-001", type: "oral", topic: "nav", ref: "AIM 1-1-17; AIM 1-1-18; 14 CFR 91.169", tags: ["ipc"],
    q: "Explain how your GPS equipment type changes your alternate planning, and what you must check before a GPS approach.",
    answer: "If I have a non-WAAS TSO-C129 or C196 receiver, I may rely on a GPS approach at the destination or the alternate but not both, the receiver must have FDE, and I need a RAIM prediction for the approach I plan to fly, done for my ETA plus or minus an hour through flight service or the receiver's own prediction tool. With WAAS TSO-C145/C146 equipment I may plan GPS approaches at both airports, but at the alternate I must plan on the LNAV or circling minimums, or LNAV/VNAV only if I have baro-VNAV, never on LPV; the standard alternate minimums then are non-precision, 800-2, unless the plate publishes other alternate minimums or says NA. Before any GPS approach I confirm the database is current and the procedure is retrievable by name, check NOTAMs for GPS or WAAS outages, and verify the approach mode becomes active 2 NM before the FAF.",
    points: ["Non-WAAS: GPS approach at destination OR alternate, not both; FDE and RAIM prediction required", "WAAS: both allowed, but alternate planned on LNAV/circling (LNAV/VNAV only with baro-VNAV); never LPV", "Alternate minimums treated as non-precision 800-2 unless published otherwise", "Current database and procedure loaded by name; check GPS/WAAS NOTAMs", "Approach mode active 2 NM before FAF; otherwise do not descend"]
  },
  {
    id: "nav-oral-002", type: "oral", topic: "nav", ref: "AIM 1-1-3; AIM 1-1-4; 14 CFR 91.171; IFH Ch. 9", tags: ["ipc"],
    q: "Explain how a VOR works, its limitations, and how you make sure yours is legal for IFR.",
    answer: "A VOR transmits a reference signal and a rotating variable signal in the VHF band from 108.0 to 117.95 MHz; the receiver measures the phase difference to determine the magnetic radial from the station, and the course alignment accuracy is generally within 1°. Because it's VHF it's line of sight, so range depends on altitude and the service volume class, and there is a cone of confusion directly over the station where the needle wanders and the TO/FROM flips. The CDI is angular, 2° per dot and 10° full scale, so it's less precise far from the station. Reception can be affected by terrain, and the identifier is removed during maintenance, so I always identify the Morse code before use. For IFR, 91.171 requires a check within the preceding 30 days: VOT or ground checkpoint within 4°, airborne within 6°, dual receivers within 4° of each other, and I log the date, place, bearing error, and signature.",
    points: ["Phase comparison yields the radial; VHF line of sight; ±1° alignment accuracy", "Cone of confusion over the station; TO/FROM flip", "CDI: 2° per dot, 10° full scale; accuracy degrades with distance", "Always identify; identifier removed during maintenance", "91.171: 30 days; ±4° ground/VOT, ±6° airborne, 4° dual; log date, place, bearing error, signature"]
  },
  {
    id: "nav-oral-003", type: "oral", topic: "nav", ref: "AIM 7-3-3; AIM 5-4-5; AIM 1-1-18", tags: ["ipc"],
    q: "What are the temperature limits on an LNAV/VNAV approach, and why don't they apply to LPV?",
    answer: "LNAV/VNAV vertical guidance may come from baro-VNAV, which computes the glidepath from barometric altitude. Since the altimeter reads high in cold air and low in hot air, the computed path flattens in the cold and steepens in the heat, so the chart publishes temperature limits, for example 'Baro-VNAV NA below −15°C or above 48°C,' outside of which the DA may not be used unless the aircraft has temperature-compensated VNAV. A WAAS receiver flying LNAV/VNAV uses a geometric, satellite-derived glidepath that isn't affected by temperature, so the limitation doesn't apply to it, and the same is true of LPV, which is why LPV lines carry no temperature note. Regardless of the type of vertical guidance, at a Cold Temperature Airport I still correct the published altitudes on the indicated segments because the altimeter itself is in error.",
    points: ["Baro-VNAV glidepath derived from barometric altitude; cold flattens, heat steepens it", "Published temperature limits on LNAV/VNAV lines; NA outside them without temp compensation", "WAAS LNAV/VNAV and LPV use geometric glidepaths: limits don't apply", "Cold Temperature Airport corrections still apply to indicated altitudes", "Know which source your avionics are using"]
  },
  {
    id: "nav-oral-004", type: "oral", topic: "nav", ref: "IFH Ch. 9", tags: ["ipc"],
    q: "Compare a conventional CDI with an HSI and an RMI. How does each help you on a localizer back course or when orienting to a VOR?",
    answer: "A conventional CDI with an OBS shows deviation relative to the course set, and it reverse-senses whenever the OBS is set opposite to the direction being flown; on a localizer the OBS does nothing, so inbound on a back course the needle is reversed and you must fly away from it. An HSI slaves the course deviation display to the heading indicator, so if I set the course pointer to the published front-course inbound heading, the needle senses correctly in all cases, including the back course, because the display is rotated to match my heading. An RMI overlays a bearing pointer on a slaved compass card: the head of the needle is the magnetic bearing to the station and the tail is the radial I'm on, with no OBS to set, which makes orientation, intercept visualization, and DME arcs much easier. In either case, the key is to visualize where I am relative to the course before I react to a needle.",
    points: ["CDI: reverse sensing when OBS is opposite the flown course; back course inbound reversed", "HSI: set front course; sensing correct on back course", "RMI: head = bearing to station, tail = radial; no OBS", "RMI simplifies orientation and DME arcs", "Visualize position before chasing the needle"]
  }
);
