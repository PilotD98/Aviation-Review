window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "regs-mcq-001", type: "mcq", topic: "regs", ref: "14 CFR 61.56(a),(c)", tags: ["flight-review"],
    q: "What is the minimum content of a flight review under 61.56, and what is the required recency to act as PIC?",
    choices: [
      "1 hour of flight training only, within the preceding 12 calendar months",
      "1 hour of flight training and 1 hour of ground training, within the preceding 24 calendar months",
      "2 hours of flight training, within the preceding 24 months to the day",
      "A knowledge test plus 1 hour of flight training, within the preceding 24 calendar months"
    ],
    a: 1,
    exp: "61.56(a) requires a minimum of 1 hour of flight training and 1 hour of ground training covering current Part 91 operating rules and the maneuvers the instructor deems necessary. 61.56(c) makes it a 24-calendar-month requirement: a review completed on 5 March 2025 is good through 31 March 2027. There is no knowledge test and no 12-month option."
  },
  {
    id: "regs-mcq-002", type: "mcq", topic: "regs", ref: "14 CFR 61.56(d),(e)", tags: ["flight-review"],
    q: "Which of the following does NOT satisfy the 61.56 flight review requirement?",
    choices: [
      "Passing a Part 135 competency check (135.293) conducted by a company check airman",
      "Completing a phase of the FAA WINGS pilot proficiency program",
      "Passing a practical test for an added instrument rating",
      "Passing the ATP knowledge test with a score of 90 percent"
    ],
    a: 3,
    exp: "61.56(d) says a pilot who has passed a pilot proficiency check or practical test conducted by an examiner, an approved check pilot, or a U.S. Armed Force for a certificate, rating, or operating privilege within the window need not accomplish a flight review. 61.56(e) adds a completed WINGS phase. A knowledge test alone involves no flight evaluation and does not count."
  },
  {
    id: "regs-mcq-003", type: "mcq", topic: "regs", ref: "14 CFR 61.57(a),(b)", tags: ["flight-review"],
    q: "To carry passengers at night in a C172S, what landings must you have logged within the preceding 90 days?",
    choices: [
      "Three takeoffs and landings to a full stop in an airplane single-engine land, between 1 hour after sunset and 1 hour before sunrise",
      "Three takeoffs and landings, touch-and-go permitted, between sunset and sunrise",
      "Three takeoffs and landings to a full stop in any category and class, at night",
      "Five takeoffs and landings to a full stop, at least one at a towered airport, at night"
    ],
    a: 0,
    exp: "61.57(b) requires three takeoffs and three landings to a full stop within the preceding 90 days, as sole manipulator, in an aircraft of the same category, class, and type (if a type rating is required), during the period 1 hour after sunset to 1 hour before sunrise. Note the night definition here is narrower than 1.1's civil twilight definition used for logging night time. Day currency (61.57(a)) allows touch-and-goes except in tailwheel airplanes, which must be full stop."
  },
  {
    id: "regs-mcq-004", type: "mcq", topic: "regs", ref: "14 CFR 61.57(c)", tags: ["ipc", "flight-review"],
    q: "To act as PIC under IFR, within the preceding 6 calendar months you must have performed and logged at least:",
    choices: [
      "Six instrument approaches and 3 hours of actual or simulated instrument time",
      "Six instrument approaches, holding procedures and tasks, and intercepting and tracking courses using navigation systems",
      "Three instrument approaches and one hold in actual IMC with an instructor",
      "Six hours of instrument time including at least one approach per month"
    ],
    a: 1,
    exp: "61.57(c)(1) is the familiar 6-6-HIT: within 6 calendar months, six instrument approaches, holding procedures and tasks, and intercepting and tracking courses through the use of navigational electronic systems. There is no hours requirement and no requirement that the approaches be in actual IMC. They may be done in the aircraft (actual or simulated conditions), or in a FFS, FTD, or ATD under the applicable rules."
  },
  {
    id: "regs-mcq-005", type: "mcq", topic: "regs", ref: "14 CFR 61.57(d)", tags: ["ipc"],
    q: "You last met the 61.57(c) instrument experience requirements in January of last year and have logged no approaches, holding, or tracking since. It is now September of this year. What is required before you may act as PIC under IFR?",
    choices: [
      "Nothing further; currency runs 24 calendar months from the last approach",
      "Six approaches, holding, and tracking with a safety pilot, since you are still inside the grace period",
      "An instrument proficiency check with an authorized instructor, examiner, or other authorized person",
      "A flight review, because the lapse exceeds 6 calendar months"
    ],
    a: 2,
    exp: "Currency ran through 31 July of last year (6 calendar months after January). 61.57(d) then gives a further 6 calendar months (through 31 January of this year) during which you may regain currency with a safety pilot but may not act as PIC under IFR. By September of this year you are well past that, so an IPC is the only way back. The trap is the calendar math: lapse date plus 6 calendar months, not 12 months from your last approach. A flight review is a separate 61.56 requirement and does not restore instrument currency."
  },
  {
    id: "regs-mcq-006", type: "mcq", topic: "regs", ref: "14 CFR 61.23(d)",
    q: "A 42-year-old commercial pilot flying Part 135 charter holds a second-class medical issued on 10 June 2026. For commercial privileges, that medical is valid through:",
    choices: [
      "10 December 2026",
      "31 December 2026",
      "30 June 2027",
      "30 June 2028"
    ],
    a: 2,
    exp: "A second-class medical supports commercial privileges for 12 calendar months regardless of age, so it runs through the last day of June 2027. The 6-month figure applies only to first-class privileges at age 40 and over. After June 2027 the certificate continues to support third-class (private) privileges for 24 calendar months total for a pilot 40 or older."
  },
  {
    id: "regs-mcq-007", type: "mcq", topic: "regs", ref: "14 CFR 61.23(d); 61.113(i); 14 CFR Part 68",
    q: "Under BasicMed as amended in 2024, which operation is permitted?",
    choices: [
      "Flying a PA-44 Seminole with 3 passengers on a Part 135 charter",
      "Acting as PIC of a Pilatus PC-12 (MTOW 10,450 lb) with 6 passengers on a personal flight at 17,000 ft MSL",
      "Acting as PIC of a King Air 350 (MTOW 15,000 lb) with 4 passengers on a personal flight",
      "Flying a C172S above 18,000 ft MSL on a personal flight"
    ],
    a: 1,
    exp: "The 2024 FAA Reauthorization Act raised BasicMed limits to aircraft with a maximum certificated takeoff weight of 12,500 lb or less, carrying no more than 6 passengers (7 occupants), not above 18,000 ft MSL, and not above 250 KIAS. The PC-12 flight fits. The King Air 350 exceeds 12,500 lb, 18,000 ft is exceeded in the C172 example, and BasicMed cannot be used for Part 135 or other compensation-or-hire operations (the exception being a CFI giving instruction)."
  },
  {
    id: "regs-mcq-008", type: "mcq", topic: "regs", ref: "14 CFR 61.3(a),(c)",
    q: "Which documents must a pilot have in physical possession or readily accessible in the aircraft when acting as a required crewmember?",
    choices: [
      "Pilot certificate and medical certificate only; photo ID is needed only for international flights",
      "Pilot certificate, logbook with current endorsements, and medical certificate",
      "Pilot certificate, a government-issued photo ID, and a medical certificate (or BasicMed documents including a valid U.S. driver's license)",
      "Pilot certificate and photo ID; the medical certificate may be kept on file at the home airport"
    ],
    a: 2,
    exp: "61.3(a) requires the pilot certificate and an acceptable photo identification (driver's license, passport, government ID, military ID, etc.); 61.3(c) requires the appropriate medical certificate, or for BasicMed a valid U.S. driver's license. A logbook is not required on board for a certificated pilot (only student, sport, and recreational pilots have specific carry requirements under 61.51(i))."
  },
  {
    id: "regs-mcq-009", type: "mcq", topic: "regs", ref: "14 CFR 61.31(e),(f),(g),(i)",
    q: "A Cessna 182T (230 hp, fixed gear) and a Piper Arrow (200 hp, retractable gear, controllable-pitch prop). Which endorsements are needed to act as PIC?",
    choices: [
      "Both require a high-performance endorsement; the Arrow also requires a complex endorsement",
      "The 182 requires high-performance; the Arrow requires complex only",
      "Both require complex; only the 182 requires high-performance",
      "Neither requires an endorsement because both are under 12,500 lb"
    ],
    a: 1,
    exp: "61.31(f) defines high-performance as an airplane with an engine of MORE than 200 hp, so the 230-hp 182 qualifies but the 200-hp Arrow does not. 61.31(e) defines complex as retractable gear, flaps, and a controllable-pitch propeller (the 182 is fixed gear, so not complex). A PA-44 Seminole is complex but not high-performance (two 180-hp engines, each evaluated individually). A high-altitude endorsement (61.31(g)) is for pressurized aircraft capable of flight above 25,000 ft MSL."
  },
  {
    id: "regs-mcq-010", type: "mcq", topic: "regs", ref: "14 CFR 61.51(e)",
    q: "A commercial pilot with an ASEL rating but no multiengine rating is receiving training in a PA-44 with an MEI. During the portions where the student is sole manipulator, who may log PIC time?",
    choices: [
      "Both the student and the MEI",
      "Only the student, as sole manipulator of the controls",
      "Only the MEI, who is acting as PIC and giving instruction",
      "Neither; the time is logged as dual received only"
    ],
    a: 2,
    exp: "61.51(e)(1)(i) allows logging PIC as sole manipulator only in an aircraft for which the pilot is rated (category, class, and type if required). Without an AMEL rating the student cannot log PIC. The instructor logs PIC under 61.51(e)(3) because an authorized instructor giving training may log PIC time. Once the student holds the AMEL rating, both may log PIC simultaneously during dual."
  },
  {
    id: "regs-mcq-011", type: "mcq", topic: "regs", ref: "14 CFR 61.129(a)",
    q: "Which of the following is a correct 61.129(a) aeronautical experience requirement for a commercial pilot certificate, airplane single-engine?",
    choices: [
      "A solo cross-country of at least 300 nm total with landings at a minimum of three points, one at least 250 nm straight-line from departure",
      "A solo cross-country of at least 250 nm total with landings at three points, one at least 100 nm from departure",
      "20 hours of night flight including a 2-hour night cross-country of at least 150 nm",
      "150 hours total time including 50 hours in a complex airplane"
    ],
    a: 0,
    exp: "61.129(a)(4)(i) requires one cross-country of not less than 300 nm total distance with landings at a minimum of three points, one of which is a straight-line distance of at least 250 nm from the original departure point (in Hawaii, 150 nm). Other highlights: 250 hours total, 100 hours PIC, 50 hours cross-country, 10 hours in a complex, turbine, or technically advanced airplane, and 5 hours of night VFR with 10 takeoffs and landings at a towered airport."
  },
  {
    id: "regs-mcq-012", type: "mcq", topic: "regs", ref: "14 CFR 61.133; 119.1(e); AC 120-12A",
    q: "A newly certificated commercial pilot posts on social media offering to fly people to any airport within 300 nm in a rented C172S for a fee. Why is this illegal?",
    choices: [
      "Commercial pilots may only carry cargo, not passengers, for hire",
      "This is holding out for common carriage, which requires an air carrier certificate under Part 119",
      "A rented aircraft can never be used for compensation",
      "Commercial pilots need 500 hours before carrying passengers for hire"
    ],
    a: 1,
    exp: "61.133 lets a commercial pilot act as PIC for compensation, but only in operations that are otherwise legal. Advertising transportation from place to place for compensation to the public is holding out, which makes it common carriage; under Part 119 that requires an air carrier or operating certificate (Part 135 here). The classic legal model is a customer who already has the airplane hiring the pilot (pilot services), not the pilot supplying both the airplane and the transportation. 119.1(e) lists the narrow exceptions (instruction, aerial work, banner towing, certain air tours within 25 sm, etc.)."
  },
  {
    id: "regs-mcq-013", type: "mcq", topic: "regs", ref: "14 CFR 91.3",
    q: "After deviating from a Part 91 rule to handle an in-flight emergency, the PIC must:",
    choices: [
      "File a written report with the FAA within 48 hours in every case",
      "File NASA ASRS form within 10 days to receive immunity",
      "Send a written report to the Administrator only if requested",
      "Notify the NTSB within 24 hours"
    ],
    a: 2,
    exp: "91.3(b) authorizes deviation from any rule of Part 91 to the extent required to meet the emergency; 91.3(c) requires a written report only upon the request of the Administrator. Do not confuse this with 91.123(d), which requires a detailed report within 48 hours to the ATC facility manager if ATC gave you priority and requests it. ASRS filing is voluntary, though wise."
  },
  {
    id: "regs-mcq-014", type: "mcq", topic: "regs", ref: "14 CFR 91.103",
    q: "Under 91.103, which preflight information is required for EVERY flight, including a local flight in the pattern?",
    choices: [
      "Weather reports and forecasts, fuel requirements, and alternatives available",
      "Runway lengths at airports of intended use and takeoff and landing distance data from the AFM/POH",
      "Known traffic delays of which the pilot has been advised by ATC",
      "NOTAMs for the route of flight and all alternates"
    ],
    a: 1,
    exp: "91.103 requires every PIC to become familiar with all available information concerning the flight, and specifically (b) runway lengths at airports of intended use and takeoff and landing distance information for all flights. Paragraph (a)'s weather, fuel, alternatives, and known ATC delays are mandated specifically for IFR flights or flights not in the vicinity of an airport. The NWKRAFT mnemonic (NOTAMs, Weather, Known delays, Runway lengths, Alternates, Fuel, Takeoff/landing data) captures the whole section."
  },
  {
    id: "regs-mcq-015", type: "mcq", topic: "regs", ref: "14 CFR 91.109(c)",
    q: "You want to fly simulated instrument approaches in a PA-44 Seminole under a view-limiting device. Your safety pilot must hold at least:",
    choices: [
      "A commercial pilot certificate with an instrument rating",
      "A private pilot certificate with airplane multiengine land rating, plus a current medical or BasicMed",
      "A private pilot certificate with airplane single-engine land rating; class rating is not required for a safety pilot",
      "Any pilot certificate, provided the safety pilot has a current flight review"
    ],
    a: 1,
    exp: "91.109(c) requires the safety pilot to hold at least a private pilot certificate with category and class ratings appropriate to the aircraft (AMEL for a Seminole), the aircraft must have fully functioning dual controls, and the safety pilot must have adequate vision forward and to each side. Because the safety pilot is a required crewmember, 61.3(c) requires an appropriate medical. An instrument rating is not required for the safety pilot in VMC."
  },
  {
    id: "regs-mcq-016", type: "mcq", topic: "regs", ref: "14 CFR 91.113",
    q: "Two airplanes are converging at the same altitude, neither head-on. Which aircraft has the right of way?",
    choices: [
      "The aircraft on the left",
      "The aircraft on the right",
      "The faster aircraft, which should pass ahead",
      "The aircraft at the higher altitude"
    ],
    a: 1,
    exp: "91.113(d): when aircraft of the same category are converging, the aircraft to the other's right has the right of way. Head-on, both alter course to the right (91.113(e)). Overtaking: the aircraft being overtaken has the right of way and the overtaking aircraft passes well clear to the right (91.113(f)). Different categories: balloons, then gliders, then airships, then airplanes/rotorcraft; an aircraft towing or refueling has right of way over other engine-driven aircraft."
  },
  {
    id: "regs-mcq-017", type: "mcq", topic: "regs", ref: "14 CFR 91.117",
    q: "What is the maximum indicated airspeed at or below 2,500 ft AGL within 4 nm of the primary airport of Class C or D airspace, unless authorized by ATC?",
    choices: [
      "250 knots",
      "230 knots",
      "180 knots",
      "200 knots"
    ],
    a: 3,
    exp: "91.117(b) sets 200 KIAS at or below 2,500 ft AGL within 4 nm of the primary airport of a Class C or D area. 91.117(a) is the 250-knot limit below 10,000 ft MSL. 91.117(c) applies 200 KIAS in airspace underlying Class B or in a VFR corridor through Class B. 91.117(d) permits operating at the minimum safe airspeed if it is higher than the limit."
  },
  {
    id: "regs-mcq-018", type: "mcq", topic: "regs", ref: "14 CFR 91.119(b),(c)",
    q: "Over a congested area, the minimum safe altitude under 91.119 is:",
    choices: [
      "500 ft above the surface",
      "1,000 ft above the highest obstacle within a horizontal radius of 2,000 ft of the aircraft",
      "1,000 ft AGL measured directly below the aircraft",
      "500 ft from any person, vessel, vehicle, or structure"
    ],
    a: 1,
    exp: "91.119(b): over a congested area of a city, town, or settlement, or over any open-air assembly of persons, 1,000 ft above the highest obstacle within a horizontal radius of 2,000 ft. 91.119(c): elsewhere, 500 ft above the surface, except over open water or sparsely populated areas where you may be lower but not closer than 500 ft to any person, vessel, vehicle, or structure. 91.119(a) always applies: an altitude allowing an emergency landing without undue hazard to persons or property on the surface."
  },
  {
    id: "regs-mcq-019", type: "mcq", topic: "regs", ref: "14 CFR 91.121",
    q: "Cruising at 9,000 ft MSL, which altimeter setting is required?",
    choices: [
      "29.92 inches Hg",
      "The setting at the departure airport, retained until descent",
      "The current reported altimeter setting of a station along the route within 100 nm",
      "The destination setting obtained from the ATIS"
    ],
    a: 2,
    exp: "91.121(a)(1): below 18,000 ft MSL, use the current reported altimeter setting of a station along the route and within 100 nm of the aircraft; if none is available, the setting of an appropriate available station; if the aircraft has no radio, the departure airport elevation or an appropriate setting before departure. At or above 18,000 ft MSL, set 29.92 in. Hg (91.121(a)(2))."
  },
  {
    id: "regs-mcq-020", type: "mcq", topic: "regs", ref: "14 CFR 91.123(d)",
    q: "After declaring an emergency and being given priority by ATC, the PIC must submit a detailed report within 48 hours:",
    choices: [
      "To the manager of the ATC facility, if requested by ATC",
      "To the FSDO in all cases",
      "To the NTSB regional office",
      "To the Administrator only if a rule of Part 91 was violated"
    ],
    a: 0,
    exp: "91.123(d) requires that each PIC who is given priority by ATC in an emergency shall submit a detailed report of that emergency within 48 hours to the manager of that ATC facility, if requested by ATC. 91.123(c) requires notifying ATC as soon as possible after any clearance deviation in an emergency. Priority with no request means no report is required by rule, though an ASRS report is still prudent."
  },
  {
    id: "regs-mcq-021", type: "mcq", topic: "regs", ref: "14 CFR 91.151; 91.155(a)", tags: ["flight-review"],
    q: "A night VFR flight in Class E airspace at 5,500 ft MSL. What are the fuel reserve and basic cloud clearance requirements?",
    choices: [
      "30 minutes at normal cruise; 500 below, 1,000 above, 2,000 horizontal",
      "45 minutes at normal cruise; 500 below, 1,000 above, 2,000 horizontal, 3 sm visibility",
      "45 minutes at normal cruise; 1,000 below, 1,000 above, 1 sm horizontal, 5 sm visibility",
      "1 hour at normal cruise; clear of clouds, 3 sm visibility"
    ],
    a: 1,
    exp: "91.151(a)(2) requires enough fuel to fly to the first point of intended landing and then for 45 minutes at normal cruising speed at night (30 minutes by day). 91.155 Class E below 10,000 ft MSL: 3 sm visibility, 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds, day or night. The 5 sm / 1,000 / 1,000 / 1 sm set applies at and above 10,000 ft MSL."
  },
  {
    id: "regs-mcq-022", type: "mcq", topic: "regs", ref: "14 CFR 91.155(a)", tags: ["flight-review"],
    q: "Daytime, Class G airspace, 800 ft AGL, in a C172S. Minimum flight visibility and cloud clearance?",
    choices: [
      "3 sm; 500 below, 1,000 above, 2,000 horizontal",
      "1 sm; 500 below, 1,000 above, 2,000 horizontal",
      "1 sm; clear of clouds",
      "3 sm; clear of clouds"
    ],
    a: 2,
    exp: "91.155: Class G at 1,200 ft or less above the surface by day is 1 sm and clear of clouds. At night at the same altitude it becomes 3 sm and 500/1,000/2,000 (with a 91.155(b) exception for traffic pattern operations within 1/2 mile of the runway: 1 sm clear of clouds). Above 1,200 ft AGL but below 10,000 ft MSL, Class G requires 1 sm day / 3 sm night with 500/1,000/2,000."
  },
  {
    id: "regs-mcq-023", type: "mcq", topic: "regs", ref: "14 CFR 91.155(c),(d)",
    q: "You are in the Class D surface area at a towered airport. The ATIS reports ceiling 900 ft overcast, visibility 5 sm. May you operate VFR in the pattern?",
    choices: [
      "Yes; visibility is above 3 sm and you can stay 500 ft below the clouds",
      "Yes, if you remain at or below 400 ft AGL",
      "No, unless you obtain a Special VFR clearance",
      "No; VFR is never permitted below a 1,000-ft ceiling in any airspace"
    ],
    a: 2,
    exp: "91.155(c) prohibits VFR operations beneath the ceiling within the lateral boundaries of the surface area of Class B, C, D, or E airspace designated for an airport when the ceiling is less than 1,000 ft. 91.155(d) separately requires 3 sm ground visibility for takeoff, landing, or pattern work in those surface areas. A Special VFR clearance under 91.157 is the lawful way to operate in this case. The ceiling rule is tied to surface areas; outside them, only the cloud clearances apply."
  },
  {
    id: "regs-mcq-024", type: "mcq", topic: "regs", ref: "14 CFR 91.157",
    q: "To obtain a Special VFR clearance in an airplane at night, the regulation requires:",
    choices: [
      "A pilot with at least 100 hours total time and an aircraft with an operating transponder",
      "An instrument-rated pilot who meets Part 61 instrument requirements, and an aircraft equipped for IFR under 91.205(d)",
      "Only an ATC clearance; night SVFR has no additional requirements beyond daytime SVFR",
      "A current flight review and position lights"
    ],
    a: 1,
    exp: "91.157(b): SVFR requires an ATC clearance, remaining clear of clouds, and (for airplanes) at least 1 sm flight visibility, with 1 sm ground visibility for takeoff or landing. Between sunset and sunrise the pilot must meet the applicable Part 61 requirements for instrument flight and the aircraft must be equipped per 91.205(d). Some busy Class B airports prohibit fixed-wing SVFR entirely (listed in Part 91 Appendix D)."
  },
  {
    id: "regs-mcq-025", type: "mcq", topic: "regs", ref: "14 CFR 91.159",
    q: "VFR cruise on a magnetic course of 185 degrees at 6,200 ft MSL over terrain at 1,500 ft MSL. Which cruising altitude complies with 91.159?",
    choices: [
      "6,500 ft MSL",
      "5,500 ft MSL",
      "6,000 ft MSL",
      "7,500 ft MSL"
    ],
    a: 0,
    exp: "91.159 applies when more than 3,000 ft above the surface and below 18,000 ft MSL. Magnetic course 180-359: even thousands plus 500 (4,500, 6,500, 8,500). Course 0-179: odd thousands plus 500 (3,500, 5,500, 7,500). The rule is based on magnetic course, not heading, and is not required below 3,000 ft AGL. IFR in uncontrolled airspace follows 91.179(b): odd thousands for 0-179, even thousands for 180-359."
  },
  {
    id: "regs-mcq-026", type: "mcq", topic: "regs", ref: "14 CFR 91.17(a)",
    q: "Which combination correctly states the 91.17 alcohol limits for crewmembers?",
    choices: [
      "12 hours from bottle to throttle; 0.02 percent blood alcohol",
      "8 hours from bottle to throttle; 0.04 percent blood alcohol or greater prohibited",
      "8 hours from bottle to throttle; 0.08 percent blood alcohol",
      "24 hours from bottle to throttle; any detectable alcohol prohibited"
    ],
    a: 1,
    exp: "91.17(a) prohibits acting or attempting to act as a crewmember within 8 hours after consuming alcohol, while under the influence, while using any drug that affects faculties contrary to safety, or with an alcohol concentration of 0.04 percent by weight or more (0.04 grams per deciliter). Many operators and Part 121/135 drug and alcohol programs impose stricter limits. 91.17(b) also prohibits carrying a passenger who appears intoxicated, except in an emergency or a medical patient under proper care."
  },
  {
    id: "regs-mcq-027", type: "mcq", topic: "regs", ref: "14 CFR 91.203; 47.40", tags: ["flight-review"],
    q: "Which statement about the documents required by 91.203 is correct?",
    choices: [
      "The registration certificate is valid for 3 years and must be renewed by the owner",
      "The airworthiness certificate must be displayed at the cabin or cockpit entrance so it is legible to passengers or crew",
      "A current weight and balance is required by 91.203, and the POH may be kept at the FBO",
      "The radio station license is required for all domestic flights"
    ],
    a: 1,
    exp: "91.203(a) requires an appropriate and current airworthiness certificate and registration certificate aboard; 91.203(b) requires the airworthiness certificate be displayed at the cabin or cockpit entrance legible to passengers or crew. Registration certificates issued since January 2023 are valid for 7 years (14 CFR 47.40). The operating limitations (AFM/POH and placards) and weight and balance come from 91.9 and the type certificate, not 91.203, and the radio station license is only required internationally. ARROW remains a good memory aid."
  },
  {
    id: "regs-mcq-028", type: "mcq", topic: "regs", ref: "14 CFR 91.205(d)",
    q: "Which instrument is specifically required for IFR flight under 91.205(d) but NOT for day VFR under 91.205(b)?",
    choices: [
      "Altimeter",
      "Magnetic direction indicator",
      "Clock displaying hours, minutes, and seconds with a sweep-second pointer or digital presentation",
      "Oil pressure gauge for each engine using a pressure system"
    ],
    a: 2,
    exp: "91.205(d) adds to the VFR day and night lists: two-way radio and navigation equipment suitable for the route, a gyroscopic rate-of-turn indicator, slip-skid indicator, sensitive altimeter adjustable for barometric pressure, a clock with hours/minutes/seconds (sweep second hand or digital), a generator or alternator of adequate capacity, a gyroscopic attitude indicator, and a gyroscopic direction indicator (GRABCARD). At and above FL240, DME or suitable RNAV is also required under 91.205(e). The plain altimeter, magnetic compass, and oil pressure gauge are day-VFR items."
  },
  {
    id: "regs-mcq-029", type: "mcq", topic: "regs", ref: "14 CFR 91.207(c),(d)",
    q: "ELT batteries must be replaced (or recharged, if rechargeable) when:",
    choices: [
      "The transmitter has been used for more than 1 cumulative hour, or 50 percent of the battery useful life has expired",
      "Every 12 calendar months, concurrent with the ELT inspection",
      "The transmitter has been used for more than 30 minutes, or the battery is more than 2 years old",
      "Every 24 calendar months, concurrent with the transponder check"
    ],
    a: 0,
    exp: "91.207(c): replace or recharge when the transmitter has been in use for more than 1 cumulative hour, or when 50 percent of the useful life (or useful life of charge) has expired. The 12-calendar-month inspection in 91.207(d) covers proper installation, battery corrosion, operation of the controls and crash sensor, and sufficient radiated signal. Exceptions in 91.207(e) and (f) allow flight up to 90 days with the ELT removed for maintenance (with placard) and training flights within 50 nm of the departure airport."
  },
  {
    id: "regs-mcq-030", type: "mcq", topic: "regs", ref: "14 CFR 91.211(a)",
    q: "Unpressurized PA-44 at a cabin pressure altitude of 13,500 ft MSL for 45 minutes with two pilots and two passengers. Who must use supplemental oxygen?",
    choices: [
      "No one; oxygen is first required above 14,000 ft",
      "Everyone aboard must use oxygen",
      "The required minimum flight crew for the portion exceeding 30 minutes",
      "The required minimum flight crew for the entire time, and passengers must be provided oxygen"
    ],
    a: 2,
    exp: "91.211(a)(1): above 12,500 ft up to and including 14,000 ft MSL, the required minimum flight crew must be provided with and use oxygen for that part of the flight at those altitudes exceeding 30 minutes. 91.211(a)(2): above 14,000 ft, the required crew uses oxygen the entire time. 91.211(a)(3): above 15,000 ft, each occupant must be provided with oxygen (passengers are not required to use it). A second pilot who is not a required crewmember is treated as a passenger."
  },
  {
    id: "regs-mcq-031", type: "mcq", topic: "regs", ref: "14 CFR 91.213(d)",
    q: "The cabin heat/defrost fan in a C172S fails before a day VFR flight. There is no MEL. What must be true for the flight to be legal?",
    choices: [
      "A mechanic must defer the item on a ferry permit before any flight",
      "The item is not required by 91.205, the KOEL, an AD, or VFR-day type certification; it is removed or deactivated and placarded inoperative; and a pilot or mechanic determines it is not a hazard",
      "The pilot may fly as long as the item is noted in the aircraft logbook within 10 days",
      "Nothing; a non-flight-critical fan is never subject to 91.213"
    ],
    a: 1,
    exp: "91.213(d) lets small, non-turbine aircraft without an MEL fly with inoperative equipment if four conditions are met: (1) the item is not part of the VFR-day type certification instruments and equipment, not required by the equipment list or KOEL for that kind of operation, not required by 91.205 or other rules for the flight, and not required operational by an AD; (2) it is removed with the cockpit control placarded and recorded under Part 43, or deactivated and placarded Inoperative (deactivation involving maintenance must be done under Part 43); and (3) a Part 61 pilot or Part 65 mechanic determines it does not constitute a hazard. Otherwise a special flight permit under 21.197 is needed."
  },
  {
    id: "regs-mcq-032", type: "mcq", topic: "regs", ref: "14 CFR 91.215(b); 91.225(d)",
    q: "Where are BOTH a Mode C transponder and ADS-B Out required?",
    choices: [
      "All Class E airspace above 1,200 ft AGL",
      "Within 30 nm of a Class B primary airport (the Mode C veil), from the surface to 10,000 ft MSL",
      "Class D airspace",
      "Class G airspace above 3,000 ft AGL"
    ],
    a: 1,
    exp: "91.215(b) and 91.225(d) share most airspace: Class A, B, and C; within the 30-nm Mode C veil of a Class B primary airport from the surface up to 10,000 ft MSL; above the ceiling and within the lateral limits of Class B or C up to 10,000 ft; and at and above 10,000 ft MSL excluding airspace at and below 2,500 ft AGL. ADS-B adds Class E over the Gulf of Mexico at and above 3,000 ft MSL within 12 nm of the coast. Class D and ordinary Class E below 10,000 ft require neither."
  },
  {
    id: "regs-mcq-033", type: "mcq", topic: "regs", ref: "14 CFR 91.409(b)",
    q: "A flight-school C172S is at 99.5 hours since its last 100-hour inspection and the shop is 40 minutes away. Under 91.409(b):",
    choices: [
      "It may not be flown until the inspection is done where it sits",
      "It may be flown up to 10 hours over, but only en route to the shop for the inspection, and the overage must be included in computing the next 100 hours",
      "It may be flown up to 10 hours over for any purpose, and the next inspection is due 100 hours after the new inspection",
      "It may be flown with a special flight permit only"
    ],
    a: 1,
    exp: "91.409(b) allows the 100-hour limit to be exceeded by not more than 10 hours while en route to reach a place where the inspection can be done, and the excess time must be included in computing the next 100 hours of time in service. The 100-hour inspection applies to aircraft carrying persons for hire or used for flight instruction for hire when the instructor provides the aircraft. An annual may substitute for a 100-hour but not the reverse."
  },
  {
    id: "regs-mcq-034", type: "mcq", topic: "regs", ref: "14 CFR 91.411; 91.413",
    q: "Which inspections are required within the preceding 24 calendar months to fly IFR in controlled airspace with a transponder?",
    choices: [
      "Altimeter system and altitude reporting equipment test (91.411) and transponder test (91.413)",
      "Annual inspection and pitot-static inspection only",
      "VOR check and transponder test",
      "ELT inspection and altimeter test"
    ],
    a: 0,
    exp: "91.411 requires the static system, altimeter, and automatic altitude reporting system to have been tested and inspected within the preceding 24 calendar months for IFR in controlled airspace. 91.413 requires the ATC transponder to have been tested and inspected within 24 calendar months for any use. The VOR check (91.171) is a 30-day item, the ELT inspection is 12 calendar months, and the annual is 12 calendar months."
  },
  {
    id: "regs-mcq-035", type: "mcq", topic: "regs", ref: "49 CFR 830.5; 830.15",
    q: "Which event requires IMMEDIATE notification to the nearest NTSB office?",
    choices: [
      "A hard landing that bends the nose gear and collapses the nosewheel fairing on a C172",
      "An in-flight fire that is extinguished before landing",
      "A propeller strike on a taxiway light during taxi",
      "A bird strike that dents the leading edge"
    ],
    a: 1,
    exp: "830.5(a) lists in-flight fire among serious incidents requiring immediate notification, along with flight control system malfunction, crewmember incapacitation, turbine engine failure with uncontained debris, in-flight collision, property damage over $25,000, propeller blade release (other than ground contact), loss of more than 50 percent of EFIS displays, an ACAS RA on an IFR flight that required compliance, and others. Landing gear, fairings, dented skin, and ground damage to propeller blades are specifically excluded from substantial damage, so those are not accidents by themselves. If an accident occurs, a report (Form 6120.1) is due within 10 days (830.15)."
  },
  {
    id: "regs-mcq-036", type: "mcq", topic: "regs", ref: "49 CFR 830.2",
    q: "Which injury meets the NTSB definition of serious injury?",
    choices: [
      "A simple fracture of the nose",
      "Hospitalization for 36 hours beginning 2 days after the accident",
      "A broken forearm",
      "First-degree burns on 3 percent of the body"
    ],
    a: 2,
    exp: "830.2 defines serious injury as: hospitalization for more than 48 hours commencing within 7 days; fracture of any bone except simple fractures of fingers, toes, or nose; severe hemorrhages or nerve, muscle, or tendon damage; injury to any internal organ; or second- or third-degree burns, or any burns affecting more than 5 percent of body surface. A fatal injury is death within 30 days of the accident."
  },
  {
    id: "regs-mcq-037", type: "mcq", topic: "regs", ref: "14 CFR 91.7; 91.205(c)",
    q: "During the preflight for a night VFR flight in a C172S you find the anticollision (strobe) system inoperative. Which is correct?",
    choices: [
      "You may fly because position lights alone satisfy the night requirement",
      "You may fly if the landing light is operative",
      "The flight is prohibited; an approved anticollision light system is required at night under 91.205(c), and the PIC must not operate an unairworthy aircraft (91.7)",
      "You may fly if you placard the switch and note it in the logbook"
    ],
    a: 2,
    exp: "91.205(c) requires, for night VFR, approved position lights, an approved aviation red or white anticollision light system, an adequate source of electrical energy, spare fuses (if fuses are used), and an electric landing light if operated for hire. Because the anticollision light is required by 91.205 for the kind of flight, 91.213(d) cannot be used to defer it, and 91.7 makes the PIC responsible for determining airworthiness. 91.209(b) permits turning anticollision lights off only when the PIC judges it in the interest of safety, which is different from flying with them inoperative."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "regs-card-001", type: "card", topic: "regs", ref: "14 CFR 61.57(c),(d)", tags: ["ipc", "flight-review"],
    front: "Instrument currency: the 6-6-HIT rule and what happens when it lapses",
    back: "Within the preceding 6 calendar months: 6 instrument approaches, Holding procedures and tasks, Intercepting and Tracking courses with nav systems.\nIf lapsed: 6-calendar-month grace period to regain currency with a safety pilot (not PIC under IFR).\nIf more than 6 months past the lapse (12 months since last currency): an IPC per 61.57(d) is required."
  },
  {
    id: "regs-card-002", type: "card", topic: "regs", ref: "14 CFR 61.23(d)",
    front: "Medical certificate durations (operations requiring each class)",
    back: "First class: 12 cal months under 40; 6 cal months at 40 and over.\nSecond class (commercial privileges): 12 cal months at any age.\nThird class (private privileges): 60 cal months under 40; 24 cal months at 40 and over.\nA higher class lapses downward: a first-class becomes second-class after its first-class window, then third-class."
  },
  {
    id: "regs-card-003", type: "card", topic: "regs", ref: "14 CFR 61.113(i); Part 68",
    front: "BasicMed limits (post-2024 amendments) and requirements",
    back: "Aircraft: MTOW 12,500 lb or less; max 6 passengers (7 occupants); not above 18,000 ft MSL; not above 250 KIAS; within the U.S. (or where accepted).\nNo compensation or hire except as a CFI (and examiners).\nRequirements: valid U.S. driver's license; FAA medical held at some point after 14 July 2006; physical exam with the Comprehensive Medical Examination Checklist every 48 months; online medical education course every 24 calendar months; no denial, suspension, or revocation of the most recent medical."
  },
  {
    id: "regs-card-004", type: "card", topic: "regs", ref: "14 CFR 61.31",
    front: "Additional training endorsements under 61.31: complex, high-performance, high-altitude, tailwheel",
    back: "Complex (61.31(e)): retractable landing gear, flaps, AND controllable-pitch propeller (seaplane: flaps and controllable prop).\nHigh-performance (61.31(f)): engine of more than 200 hp (each engine evaluated individually).\nHigh-altitude (61.31(g)): pressurized aircraft with a service ceiling or max operating altitude above 25,000 ft MSL; needs ground and flight training.\nTailwheel (61.31(i)): normal and crosswind takeoffs and landings, wheel landings (unless the manufacturer recommends against), go-arounds.\nEach is a one-time logbook endorsement; grandfathered if logged PIC before the applicable date."
  },
  {
    id: "regs-card-005", type: "card", topic: "regs", ref: "14 CFR 91.155", tags: ["flight-review"],
    front: "VFR weather minimums by airspace (91.155)",
    back: "Class A: N/A (IFR only).\nClass B: 3 sm, clear of clouds.\nClass C, D, E below 10,000 MSL: 3 sm; 500 below / 1,000 above / 2,000 horizontal.\nClass E at or above 10,000 MSL: 5 sm; 1,000 / 1,000 / 1 sm.\nClass G 1,200 AGL or less: day 1 sm clear of clouds; night 3 sm, 500/1,000/2,000.\nClass G above 1,200 AGL, below 10,000 MSL: day 1 sm, night 3 sm; 500/1,000/2,000.\nClass G above 1,200 AGL and at or above 10,000 MSL: 5 sm; 1,000/1,000/1 sm.\nSurface areas: ceiling at least 1,000 ft and ground visibility 3 sm for VFR takeoff, landing, or pattern."
  },
  {
    id: "regs-card-006", type: "card", topic: "regs", ref: "14 CFR 91.205(b),(c),(d)",
    front: "Required equipment: day VFR, night VFR, IFR (91.205)",
    back: "Day VFR (b): airspeed, altimeter, magnetic direction indicator, tachometer (each engine), oil pressure gauge (each pressure-lubricated engine), oil temp (each air-cooled engine), coolant temp (liquid-cooled), manifold pressure (each altitude engine), fuel gauge (each tank), gear position indicator (if retractable), anticollision lights (aircraft certificated after 11 March 1996), flotation gear (for hire beyond gliding distance from shore), safety belts, shoulder harnesses (front seats, aircraft manufactured after 18 July 1978), ELT (91.207).\nNight (c) adds: position lights, anticollision light system, adequate electrical source, spare fuses (one set or 3 of each kind), electric landing light if for hire.\nIFR (d) adds: two-way radio and nav equipment for the route, rate-of-turn indicator, slip-skid indicator, sensitive altimeter, clock with seconds, generator/alternator, attitude indicator, directional gyro. (e): DME or suitable RNAV at and above FL240."
  },
  {
    id: "regs-card-007", type: "card", topic: "regs", ref: "14 CFR 91.207; 91.409; 91.411; 91.413; 91.171",
    front: "Recurring inspection intervals a pilot must verify before flight",
    back: "Annual: 12 calendar months (91.409(a)).\n100-hour: if carrying persons for hire or giving instruction for hire with the instructor's aircraft; may overfly by up to 10 hr en route to inspection, overage counts toward the next 100 (91.409(b)).\nELT: 12 calendar months inspection; battery after 1 cumulative hour of use or 50% useful life (91.207).\nAltimeter/static/encoder: 24 calendar months for IFR in controlled airspace (91.411).\nTransponder: 24 calendar months (91.413).\nVOR: 30 days for IFR (91.171).\nADs: as specified; recurring ADs are inspections too."
  },
  {
    id: "regs-card-008", type: "card", topic: "regs", ref: "14 CFR 91.211",
    front: "Supplemental oxygen requirements (91.211) in unpressurized aircraft",
    back: "Above 12,500 up to and including 14,000 ft MSL: required minimum flight crew must use oxygen for the portion exceeding 30 minutes.\nAbove 14,000 ft MSL: required minimum flight crew uses oxygen the entire time.\nAbove 15,000 ft MSL: each occupant must be provided with oxygen (passengers need not use it).\nAltitudes are cabin pressure altitudes."
  },
  {
    id: "regs-card-009", type: "card", topic: "regs", ref: "49 CFR 830.2; 830.5; 830.15",
    front: "NTSB 830: accident definition, substantial damage exclusions, and reporting deadlines",
    back: "Accident: occurrence between boarding with intent to fly and disembarking in which any person suffers death or serious injury, or the aircraft receives substantial damage.\nSubstantial damage: adversely affects structural strength, performance, or flight characteristics and normally requires major repair.\nNOT substantial damage: engine failure/damage limited to one engine, bent fairings or cowling, dented skin, small punctures, ground damage to prop or rotor blades, damage to landing gear, wheels, tires, flaps, engine accessories, brakes, or wingtips.\nImmediate notification: accidents and 830.5 serious incidents (flight control failure, crew incapacitation, in-flight fire, in-flight collision, property damage over $25,000, prop blade release, loss of more than 50% of EFIS displays, IFR ACAS RA requiring compliance, overdue aircraft, etc.).\nReport (Form 6120.1): within 10 days of an accident; 7 days if an overdue aircraft is still missing; incidents only upon NTSB request."
  },
  {
    id: "regs-card-010", type: "card", topic: "regs", ref: "14 CFR 91.215; 91.225",
    front: "Transponder (91.215) and ADS-B Out (91.225) required airspace",
    back: "Both: Class A, B, C; within 30 nm of a Class B primary airport (Mode C veil) from the surface to 10,000 ft MSL; above the ceiling and within the lateral boundaries of Class B or C up to 10,000 ft MSL; at and above 10,000 ft MSL except at and below 2,500 ft AGL.\nADS-B only: Class E over the Gulf of Mexico at and above 3,000 ft MSL within 12 nm of the U.S. coast.\nAircraft not originally certificated with an engine-driven electrical system are exempt in the veil, above B/C ceilings, and at/above 10,000 ft MSL, but must stay outside Class A, B, and C.\nATC may authorize deviations; ADS-B deviation requests go through the ADAPT tool, ideally at least 1 hour before the flight."
  },

  // ───────────────────────── SCENARIOS ─────────────────────────
  {
    id: "regs-scenario-001", type: "scenario", topic: "regs", ref: "14 CFR 91.155(c); 91.157", tags: ["flight-review"],
    q: "You are in a C172S on a day VFR cross-country, 10 miles from a Class D destination. ATIS reports wind calm, visibility 4 sm in mist, ceiling 800 ft overcast. The cloud bases look higher to you, and the tower is not busy. You are not instrument current but hold an instrument rating. What is the best course of action?",
    choices: [
      "Request a Special VFR clearance from the tower; you need 1 sm visibility and to remain clear of clouds, and daytime SVFR has no pilot currency requirement",
      "Continue VFR and land, since you can maintain 500 ft below the clouds in the pattern at 300 ft AGL",
      "Request an IFR clearance for the ILS; your instrument rating allows this in an emergency",
      "Declare an emergency to obtain priority handling and land VFR"
    ],
    a: 0,
    exp: "91.155(c) prohibits VFR beneath a ceiling below 1,000 ft in a Class D surface area, so a normal VFR arrival is illegal regardless of your cloud clearance. Daytime SVFR (91.157) requires only an ATC clearance, 1 sm flight and ground visibility, and clear of clouds; the instrument-rating and IFR-equipment requirement applies only at night. Filing IFR without currency violates 61.57(c), and this is not an emergency."
  },
  {
    id: "regs-scenario-002", type: "scenario", topic: "regs", ref: "14 CFR 61.57(c),(d); 91.109(c)", tags: ["ipc"],
    q: "A friend who owns a PA-44 Seminole asks you to act as PIC for an IFR flight next week. Checking your logbook, your last instrument experience was eight calendar months ago: six approaches with holding and course intercepts in a C172, which made you current at that time; you have logged nothing since. You hold a multiengine rating and a current second-class medical. What is your status?",
    choices: [
      "You are current; six approaches were logged within the preceding 12 months",
      "You are not current, but you may regain currency by flying six approaches, holding, and tracking with a safety pilot in VMC, or by completing an IPC",
      "You are not current and must complete an IPC because your last approaches were more than 6 months ago",
      "You are current for single-engine IFR only; multiengine IFR requires separate currency"
    ],
    a: 1,
    exp: "61.57(c) counts experience within the preceding 6 calendar months, so that session no longer counts and you cannot act as PIC under IFR. Under 61.57(d), the IPC becomes mandatory only once more than 6 calendar months have passed since currency lapsed. Here currency lapsed about 2 months ago, so you remain in the 6-month grace period, so you may regain currency with a safety pilot in VMC (91.109(c)) or take an IPC. Instrument currency is by category (airplane), not by class, so single- and multiengine share it."
  },
  {
    id: "regs-scenario-003", type: "scenario", topic: "regs", ref: "49 CFR 830.2; 830.5; 830.15",
    q: "On rollout in a PA-44 the left main gear collapses. The airplane slides off the runway; the left propeller is bent, the left wingtip is scraped, and the left flap is bent. Nobody is hurt. The owner wants to know whether this is an NTSB-reportable accident.",
    choices: [
      "Yes; any gear collapse is an accident and requires immediate notification",
      "No, provided the engine was shut down before the prop contacted the surface",
      "Probably not, because gear, flaps, wingtips, and ground damage to propeller blades are excluded from substantial damage, but check for structural damage such as the spar, nacelle, or gear attach structure, which would make it an accident",
      "No; the NTSB only investigates accidents involving injuries"
    ],
    a: 2,
    exp: "830.2 excludes damage to landing gear, flaps, wingtips, and ground damage to propeller blades from substantial damage. A gear collapse by itself is therefore often an incident, not an accident. However, if the slide damaged primary structure (spar, gear attach fittings, nacelle structure) in a way that adversely affects structural strength and requires major repair, it becomes substantial damage and thus an accident, requiring immediate notification under 830.5 and a Form 6120.1 report within 10 days under 830.15. A sudden engine stoppage also triggers a manufacturer prop-strike inspection, but that is an airworthiness matter, not an NTSB test."
  },
  {
    id: "regs-scenario-004", type: "scenario", topic: "regs", ref: "14 CFR 91.123(c),(d); 91.3",
    q: "In IMC at 7,000 ft in a C172S you lose the alternator and the G1000 battery annunciations begin. You are 20 minutes from an airport with an ILS. You tell Center you are declaring an emergency and need to descend and proceed direct. Center clears you, gives you priority, and asks you to call the facility after landing. What are your regulatory obligations?",
    choices: [
      "Notify ATC of the deviation (done), and submit a detailed report within 48 hours to the ATC facility manager because ATC requested it; a written report to the Administrator is due only if the FAA requests one under 91.3(c)",
      "File a written report with the FSDO within 10 days as required for all emergencies",
      "File a NASA ASRS report within 10 days; it is mandatory after any emergency declaration",
      "No report is required because you declared the emergency before deviating"
    ],
    a: 0,
    exp: "91.123(c) requires notifying ATC as soon as possible of any emergency deviation from a clearance; 91.123(d) requires a detailed report within 48 hours to the manager of the ATC facility if ATC requests it, which it did. 91.3(c) requires a written report of any rule deviation only upon the Administrator's request. ASRS filing is voluntary but recommended for its enforcement protections. Declaring early is good practice, not a substitute for the reporting requirements."
  },
  {
    id: "regs-scenario-005", type: "scenario", topic: "regs", ref: "14 CFR 61.133; 119.1; 91.147; AC 120-12A",
    q: "A local brewery offers to pay you to fly its owner and two customers in the owner's PA-44 from the home field to a distillery 180 nm away and back the same evening, departing after sunset. You hold commercial AMEL and an instrument rating, and are instrument current. Is this legal, and what rule governs?",
    choices: [
      "Illegal; carrying passengers for hire more than 50 nm or at night always requires Part 135",
      "Legal as private carriage: the owner supplies the aircraft and hires your pilot services, you are not holding out to the public, and your instrument rating removes the 61.133 night/50-nm passenger limitation",
      "Illegal unless you obtain a 91.147 letter of authorization",
      "Legal only if the brewery pays no more than the pro-rata share of fuel"
    ],
    a: 1,
    exp: "This is a classic pilot-services arrangement: the aircraft operator (the owner) is providing their own transportation and hiring you to fly it, so there is no holding out and no common carriage; Part 119 does not require an operating certificate. 61.133(b)(1) limits a commercial pilot without an instrument rating from carrying passengers for hire on cross-countries beyond 50 nm or at night, but you hold the rating. 91.147 LOAs cover commercial air tours within 25 sm. Pro-rata sharing is a private pilot limit (61.113(c)) and does not apply."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "regs-oral-001", type: "oral", topic: "regs", ref: "14 CFR 61.56; 61.57", tags: ["flight-review"],
    q: "You have been out of flying for about two years. Walk me through everything you need to be legal to carry passengers at night and fly IFR again as PIC.",
    answer: "First, a flight review under 61.56: at least 1 hour ground and 1 hour flight with an instructor and a logbook endorsement, because more than 24 calendar months have elapsed. A practical test for a new rating or a Part 135 or 121 check would also satisfy it. Second, a current medical: a second-class for commercial work (12 calendar months), or BasicMed for private-type operations. Third, passenger currency under 61.57(a) and (b): three takeoffs and landings within 90 days, and for night, three to a full stop between 1 hour after sunset and 1 hour before sunrise, in the same category and class. Fourth, since instrument currency lapsed more than 6 calendar months ago, 61.57(d) requires an instrument proficiency check with an authorized instructor or examiner; I cannot regain currency on my own with a safety pilot at this point. Practically, I would combine the flight review and the IPC into one session and have the instructor endorse both.",
    points: ["Flight review: 24 calendar months, 1 hr ground + 1 hr flight, endorsement", "Medical currency by class and age, or BasicMed limits", "Three landings in 90 days; night to a full stop in the 1-hour-after-sunset window", "Instrument currency lapsed more than 6 months: IPC required, safety pilot no longer sufficient", "Combine flight review and IPC; also check 61.31 endorsements and aircraft-specific checkouts"]
  },
  {
    id: "regs-oral-002", type: "oral", topic: "regs", ref: "14 CFR 61.113(i); Part 68; 61.23",
    q: "Explain BasicMed to me as it stands today, including what you cannot do with it.",
    answer: "BasicMed under 61.113(i) and Part 68 lets a pilot who has held an FAA medical at any time after 14 July 2006 fly without a current medical certificate, provided they hold a valid U.S. driver's license, have a physical exam with a state-licensed physician using the FAA checklist every 48 months, and complete the online medical education course every 24 calendar months. Since the 2024 Reauthorization Act the aircraft limit is 12,500 lb MTOW or less, no more than 6 passengers (7 occupants), not above 18,000 ft MSL, and not above 250 KIAS. The key limitation is that it is not valid for operations requiring a medical for compensation or hire, so no Part 135, 121, or commercial passenger work; flight instruction is the exception because the CFI is being paid to instruct, not to pilot. It also does not satisfy ICAO medical standards, so it is generally limited to the United States and countries that accept it. If my most recent FAA medical was denied, suspended, or revoked, I must obtain a new medical before BasicMed is available.",
    points: ["Driver's license + prior FAA medical after July 2006", "Physician exam every 48 months; online course every 24 calendar months", "12,500 lb, 6 passengers / 7 occupants, 18,000 ft MSL, 250 KIAS", "No compensation or hire except flight instruction; not ICAO compliant", "Most recent medical must not have been denied, suspended, or revoked"]
  },
  {
    id: "regs-oral-003", type: "oral", topic: "regs", ref: "14 CFR 61.133; 119.1; AC 120-12A",
    q: "As a commercial pilot, what can you actually do for compensation, and how do you know when you have crossed into Part 119 territory?",
    answer: "61.133 lets me act as PIC for compensation or hire and carry persons or property for compensation, but only when the operation is otherwise legal. The test is common carriage, defined in AC 120-12A as holding out to the public, to transport persons or property, from place to place, for compensation. If all four are present, the operator needs an air carrier certificate under Part 119, which typically means Part 135 for the operations I would be flying. Holding out can be advertising, a reputation for taking anyone, or working through agents; it does not require a sign. Private carriage, where an operator contracts with one or a very few customers, can be done under Part 91 but is narrow, and courts have found 18 to 24 contracts to be common carriage. The safe commercial-pilot jobs under Part 91 are pilot services for an owner who provides the aircraft, and the 119.1(e) exceptions such as flight instruction, aerial photography, banner towing, pipeline patrol, and nonstop air tours within 25 statute miles under a 91.147 LOA. Without an instrument rating, I also could not carry passengers for hire at night or more than 50 nm cross-country.",
    points: ["61.133 privileges are conditioned on the operation being otherwise legal", "Four elements of common carriage; holding out is the trigger", "Private carriage versus common carriage; few contracts versus many", "119.1(e) exceptions (instruction, aerial work, 25-sm tours under 91.147)", "Pilot-services model: owner provides aircraft, pilot provides skill", "61.133(b) night/50-nm passenger limit without an instrument rating"]
  },
  {
    id: "regs-oral-004", type: "oral", topic: "regs", ref: "14 CFR 91.7; 91.213; 91.405; 91.409",
    q: "Who determines whether an aircraft is airworthy, and how do you handle a piece of inoperative equipment on a Part 91 airplane with no MEL?",
    answer: "Under 91.7 the PIC is responsible for determining the aircraft is in a condition for safe flight, and must discontinue the flight when an unairworthy mechanical, electrical, or structural condition occurs; the owner is responsible for maintaining it in an airworthy condition under 91.403 and 91.405. Airworthy means it conforms to its type design and is in a condition for safe operation. For inoperative equipment with no MEL I use 91.213(d): the item must not be required by the VFR-day type certification, by the equipment list or KOEL for the kind of flight, by 91.205 or another operating rule, or by an AD. Then it must be removed and the control placarded with a logbook entry, or deactivated and placarded Inoperative, with any deactivation that is maintenance done under Part 43. Finally a pilot or mechanic must determine it is not a hazard. If any of that fails, the airplane needs repair or a special flight permit under 21.197 before it moves.",
    points: ["PIC determines condition for safe flight (91.7); owner maintains airworthiness (91.403/405)", "Airworthy = conforms to type design and safe to operate", "91.213(d) four-part test: type cert VFR-day list, KOEL, 91.205/ops rules, ADs", "Remove and record, or deactivate and placard; Part 43 for maintenance", "Hazard determination by pilot or mechanic; otherwise ferry permit"]
  },
  {
    id: "regs-oral-005", type: "oral", topic: "regs", ref: "14 CFR 91.203; 91.9; 91.417; 47.40",
    q: "What documents and records do you check before accepting an airplane, and what are you looking for in the maintenance logs?",
    answer: "On board I verify the airworthiness certificate, displayed at the cabin entrance per 91.203(b); the registration certificate, which since January 2023 is valid for 7 years; the operating limitations in the form of the AFM or POH with placards under 91.9; and current weight and balance data for this specific airframe. The radio station license is only needed for international operations. In the maintenance records under 91.417 I look for the annual within 12 calendar months, the 100-hour if the flight is for hire or instruction, the 24-calendar-month altimeter and static system check for IFR, the 24-calendar-month transponder check, the 12-month ELT inspection and battery date, compliance with ADs including recurring ones, and any open discrepancies or deferred items with proper placards. For an IFR airplane I also want the VOR check within 30 days if VOR will be used, and the GPS database currency.",
    points: ["ARROW: airworthiness, registration (7 years), radio (international), operating limitations, weight and balance", "Annual 12 months; 100-hour for hire/instruction; 10-hour overfly rule", "91.411 and 91.413: 24 calendar months", "ELT 12 months and battery; ADs; deferred items placarded", "VOR 30-day check and database currency for IFR"]
  },
  {
    id: "regs-oral-006", type: "oral", topic: "regs", ref: "49 CFR 830.2; 830.5; 830.6; 830.15",
    q: "Describe the NTSB notification and reporting process. What makes something an accident versus an incident, and when do you have to call?",
    answer: "An accident under 830.2 is an occurrence between boarding with intent to fly and disembarking in which a person suffers death or serious injury or the aircraft receives substantial damage. Serious injury includes more than 48 hours of hospitalization starting within 7 days, any fracture except simple fractures of fingers, toes, or nose, severe hemorrhage or nerve, muscle, or tendon damage, internal organ injury, or second- or third-degree burns or burns over more than 5 percent of the body. Substantial damage affects structural strength, performance, or flight characteristics and normally requires major repair; it specifically excludes single-engine failure, bent fairings or cowling, dented skin, small punctures, ground damage to prop blades, and damage to gear, wheels, tires, flaps, engine accessories, brakes, and wingtips. Anything that affects safety but is not an accident is an incident. The operator must immediately notify the nearest NTSB office for any accident and for the serious incidents in 830.5, such as flight control malfunction, crewmember incapacitation, in-flight fire, in-flight collision, property damage over $25,000, propeller blade release, loss of more than half the EFIS displays, an IFR ACAS RA that had to be followed, or an overdue aircraft. A Form 6120.1 report is due within 10 days after an accident, 7 days if an overdue aircraft is still missing, and for incidents only when the NTSB asks.",
    points: ["Accident: death, serious injury, or substantial damage, boarding to disembarking", "Serious injury criteria (48 hours/7 days, fractures, burns 5 percent)", "Substantial damage exclusions (gear, props on ground, wingtips, flaps, one engine)", "830.5 immediate notification list and the $25,000 property threshold", "830.15: 10 days accident report; 7 days overdue; incidents on request", "Preserve wreckage and records under 830.10 except to protect life or property"]
  },
  {
    id: "regs-oral-007", type: "oral", topic: "regs", ref: "14 CFR 91.205(d); 91.171; 91.411; 91.413; 91.205(e)",
    q: "What equipment and checks make a C172S with a G1000 legal for an IFR flight in controlled airspace?",
    answer: "Beyond the day and night VFR equipment in 91.205(b) and (c), 91.205(d) requires two-way radio and navigation equipment suitable for the route, a rate-of-turn indicator, slip-skid indicator, sensitive altimeter adjustable for barometric pressure, a clock showing hours, minutes, and seconds, a generator or alternator of adequate capacity, an attitude indicator, and a heading indicator; in a G1000 airplane the PFD and standby instruments satisfy these, and the KOEL in the POH tells me what must be operating for IFR. Maintenance checks are the altimeter and static system and encoder within 24 calendar months under 91.411 and the transponder within 24 calendar months under 91.413. If I will navigate by VOR, 91.171 requires a VOR accuracy check within 30 days, logged with date, place, bearing error, and signature. For GPS approaches I need a current navigation database or verified waypoints per the AFM supplement, and for non-WAAS units a RAIM prediction. ADS-B Out is required in the airspace listed in 91.225. At and above FL240 DME or suitable RNAV is required, which does not apply to a 172.",
    points: ["91.205(d) GRABCARD list and the G1000 KOEL", "91.411 altimeter/static and 91.413 transponder: 24 calendar months", "VOR check within 30 days if used, with logbook entry", "GPS database currency and RAIM/WAAS status", "ADS-B Out airspace under 91.225"]
  },
  {
    id: "regs-oral-008", type: "oral", topic: "regs", ref: "14 CFR 61.57(c),(d); 61.51(g)", tags: ["ipc"],
    q: "Can you log an instrument approach toward currency if you break out at 1,500 ft AGL in VMC? How does the FAA want approaches logged, and what counts in a simulator?",
    answer: "The FAA's position in its 2015 legal interpretation and in Information for Operators InFO 15012 is that to log an approach for 61.57(c) currency the aircraft must be operated solely by reference to instruments, either in actual IMC or under simulated conditions with a view-limiting device, and the approach must be flown to minimums, meaning the MDA or DA, unless you break out of actual IMC before that point, in which case the approach counts as long as it was flown in IMC to at least the final approach fix. Breaking out at 1,500 AGL in actual conditions therefore counts if the approach was in IMC from the FAF. Under simulated conditions the view-limiting device stays on until minimums. 61.51(g) requires logging the location and type of each approach and, for simulated conditions, the name of the safety pilot. For simulators, 61.57(c) allows the full set of six approaches, holding, and intercepting and tracking in a full flight simulator, FTD, or ATD representing the category of aircraft; approaches done in an ATD count for currency when accomplished under those rules; since the June 2018 rule change an authorized instructor no longer needs to be present for ATD currency, and the device must be FAA-approved with a letter of authorization.",
    points: ["Solely by reference to instruments: actual IMC or view-limiting device", "Flown to MDA/DA unless breaking out of actual IMC after the FAF", "Log location, type of approach, and safety pilot name (61.51(g))", "FFS, FTD, or ATD may be used for all 61.57(c) tasks under the applicable conditions", "InFO 15012 and the 2015 interpretation are the references DPEs expect"]
  }
);
