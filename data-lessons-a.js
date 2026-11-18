window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
{
  id: "regs-getting-current",
  topic: "regs",
  title: "Getting current again: flight review, IPC, medical",
  minutes: 7,
  refs: ["14 CFR 61.56", "14 CFR 61.57(c),(d)", "14 CFR 61.23", "14 CFR 61.113(i); Part 68", "AC 61-98D", "Instrument ACS (FAA-S-ACS-8C), IPC appendix"],
  tags: ["flight-review", "ipc"],
  quiz: ["regs-mcq-001", "regs-mcq-002", "regs-mcq-005", "regs-mcq-006", "regs-mcq-007", "regs-card-002", "regs-oral-001", "ifr-oral-010"],
  keywords: ["flight review", "IPC", "medical", "BasicMed", "61.56", "61.23", "currency", "WINGS"],
  body: [
    { h: "Why it matters" },
    { p: "After two years away you have three separate clocks to reset, and they are independent of each other: the **flight review** (61.56) lets you act as PIC at all, the **instrument proficiency check** (61.57(d)) restores IFR privileges once currency has fully lapsed, and the **medical** (61.23) decides which privileges you can exercise. DPEs and interviewers love to ask which one covers which, because the wrong answer is 'the flight review makes me legal for everything.' It does not." },
    { h: "Flight review (61.56)" },
    { ul: [
      "Trigger words: no person may act as **PIC** unless, within the preceding **24 calendar months**, they have accomplished a flight review **and** received a **logbook endorsement** from an authorized instructor certifying satisfactory completion.",
      "Minimum content: **1 hour of flight training** and **1 hour of ground training**. Ground must include a review of the current general operating and flight rules of Part 91; flight includes the maneuvers and procedures the instructor deems necessary to demonstrate safe exercise of your privileges.",
      "Calendar months: a review completed on 18 November 2026 is good through **30 November 2028**.",
      "The instructor must be rated for the aircraft; a review done in a single-engine airplane covers your PIC privileges in the Seminole too, because 61.56 is per pilot, not per category or class.",
      "There is no pass/fail paperwork like a checkride; an instructor who is not satisfied simply does not endorse the review. Nothing goes on your record."
    ] },
    { p: "Substitutes that satisfy 61.56 (within the same 24 calendar months): a **pilot proficiency check or practical test** given by an examiner, an approved pilot check airman, or the U.S. Armed Forces for a pilot certificate, rating, or operating privilege (so a commercial, instrument, multi, CFI, or type-rating checkride, a 61.58 check, or a 135.293/135.297 check resets the clock); or completing a **phase of WINGS**. A CFI who, inside the window, met the 61.197 recent-experience requirements (what used to be called 'renewal' before the December 2024 rule removed CFI expiration dates) or reinstated through a FIRC does not need the one hour of **ground** training but still needs the flight portion (61.56(f))." },
    { callout: "An IPC by itself does **not** satisfy the flight review. It is not a practical test for a certificate, rating, or privilege. A CFII can combine the two on one flight and endorse both, as long as the Part 91 ground review and the one hour of flight training are actually done.", kind: "warn" },
    { h: "Instrument: currency vs IPC (61.57(c),(d))" },
    { p: "Currency needs, within the preceding **6 calendar months**: **6 instrument approaches**, **holding** procedures and tasks, and **intercepting and tracking** courses using navigation systems, in actual or simulated conditions, or in an approved FFS/FTD/ATD. If you miss that, you have a further 6 calendar months (12 total from the last month you were current) in which you cannot act as PIC under IFR but can still regain currency with a safety pilot, a CFII, or a device. Once **more than 6 calendar months** have passed beyond the 6-month window, the only way back is an **IPC** given by a CFII, an examiner, or other authorized person, covering the tasks in the Instrument ACS IPC table (holding, unusual attitudes, intercept/track and DME arcs, all of Area VI including a circling approach, partial-panel approach, and for a multiengine airplane the one-engine-inoperative approach). Two years away means an IPC is your only route." },
    { callout: "Two years out = flight review **and** IPC. Plan one combined session: ground review of Part 91, then a flight that covers the IPC task list in the airplane you will fly IFR (the OEI approach makes the Seminole IPC longer than a 172 IPC).", kind: "tip" },
    { h: "Medical (61.23)" },
    { table: { head: ["Class", "Under 40", "40 and over", "Privileges when expired"], rows: [
      ["First", "12 calendar months", "6 calendar months", "drops to second-class, then third-class privileges"],
      ["Second (commercial)", "12 calendar months", "12 calendar months", "drops to third-class privileges"],
      ["Third", "60 calendar months", "24 calendar months", "none, unless BasicMed applies"]
    ] } },
    { p: "A medical never becomes 'invalid'; it steps down in privileges. If your second-class is more than 12 calendar months old you can still fly as a private pilot on its third-class privileges for the rest of the 24 or 60 months, but you cannot be paid to fly. For any Part 135 or paid commercial work you need a **current second-class** (12 calendar months, any age)." },
    { p: "**BasicMed** (61.113(i), Part 68, amended effective November 2024): aircraft up to **12,500 lb** MTOW, up to **6 passengers / 7 occupants**, at or below **18,000 ft MSL** and **250 KIAS**, within the U.S. You must have held an FAA medical at some point after 14 July 2006, complete the online course every **24 calendar months**, and have a physician exam every **48 months**. It cannot be used for compensation or hire, except that a CFI may instruct under BasicMed, and it is not valid for Part 135." },
    { memo: { title: "24 / 6+6 / 12", text: "Flight review every 24 calendar months; instrument currency every 6 with 6 more to self-recover, then IPC; commercial medical every 12." } },
    { h: "Order of operations for your return" },
    { ol: [
      "Get the medical first; a second-class if you want to be hireable immediately.",
      "Book a CFII for a combined flight review + IPC; ask for the IPC in the class you intend to fly IFR.",
      "Rebuild 61.57(a)/(b) landing currency on the same flights before carrying anyone (see the 61.57 lesson).",
      "Log everything with the exact endorsement wording from AC 61-65 so an interviewer can find it."
    ] },
    { h: "Check yourself" },
    { ul: [
      "Your last flight review was 3 October 2024. On what date does your PIC privilege lapse?",
      "Name three things other than a flight review that reset the 61.56 clock.",
      "Why does an IPC alone not satisfy 61.56?",
      "You are 43 with a second-class issued 14 months ago. What can you legally do today?",
      "List the four BasicMed aircraft/operation limits as amended in 2024."
    ] }
  ]
},
{
  id: "regs-6157-currency",
  topic: "regs",
  title: "Instrument and passenger currency (61.57)",
  minutes: 6,
  refs: ["14 CFR 61.57(a),(b),(c),(d)", "14 CFR 61.51(g)", "14 CFR 91.109(c)", "InFO 15012"],
  tags: ["flight-review", "ipc"],
  quiz: ["regs-mcq-003", "regs-mcq-004", "regs-mcq-005", "regs-mcq-015", "regs-card-001", "regs-scenario-002", "regs-oral-008"],
  keywords: ["61.57", "currency", "takeoffs and landings", "night", "6-6-HIT", "safety pilot", "approach logging"],
  body: [
    { h: "Why it matters" },
    { p: "61.57 is the rule you will be asked about in every oral and every airline interview, and it is also the one most easily misremembered after a layoff because every sub-paragraph uses a different clock: **90 days** for landings, **6 calendar months** for instrument tasks. Note also that 61.57 only applies when you carry **passengers** (for (a) and (b)) or act as **PIC under IFR or in weather below VFR minimums** (for (c)). Solo day VFR with an expired everything in 61.57 is legal as long as the flight review and medical are good." },
    { h: "Passengers, day: 61.57(a)" },
    { ul: [
      "No person may act as PIC of an aircraft carrying passengers unless within the preceding **90 days** they have made **3 takeoffs and 3 landings** as **sole manipulator of the controls**.",
      "They must be in an aircraft of the same **category, class, and type** (type only if a type rating is required). Landings in the 172 do not count for the Seminole; landings in the Seminole do not count for the 172, because class differs (ASEL vs AMEL).",
      "**Tailwheel**: the landings must be to a **full stop**."
    ] },
    { h: "Passengers, night: 61.57(b)" },
    { ul: [
      "Night here means the period beginning **1 hour after sunset** and ending **1 hour before sunrise** (not civil twilight, which is the 'night' for logging night time, and not sunset-to-sunrise, which is the lighting rule in 91.209).",
      "Within the preceding **90 days**: **3 takeoffs and 3 landings to a full stop** during that period, sole manipulator, same category, class, and type.",
      "Night landings count for day currency; day landings never count for night."
    ] },
    { h: "Instrument: 61.57(c)" },
    { memo: { title: "6-6-HIT", text: "6 approaches in the preceding 6 calendar months, plus Holding, Intercepting and Tracking courses with navigation systems." } },
    { p: "The tasks may be done in actual conditions, in simulated conditions with a **safety pilot**, or in an FFS, FTD, or FAA-approved ATD representing the aircraft category. Since 2018 an instructor does not have to be present for ATD currency work, and you can mix aircraft and device time freely within the six months. What makes an approach loggable (InFO 15012 and the 2015 Chief Counsel interpretation): flown **solely by reference to instruments**, in actual IMC or under a view-limiting device, and flown to **DA or MDA**, except that in actual conditions you may break out above minimums and still log it provided you were in IMC from at least the **final approach fix**. Log location, type of approach, and for simulated conditions the **safety pilot's name** (61.51(g))." },
    { h: "Lapse and the IPC: 61.57(d)" },
    { p: "If you have not met (c) within the preceding 6 calendar months, you may not act as PIC under IFR, but for the **next 6 calendar months** you can still get current the normal way with a safety pilot or a device. Once more than 6 calendar months pass beyond that (12 calendar months since you were last current, counting from the end of the month), you need an **IPC** from an authorized instructor, examiner, or other person authorized by the FAA, covering the areas of operation and tasks listed in the Instrument ACS. The IPC may be done partly in an FFS/FTD/ATD, but the circling approach and landing tasks must be in an aircraft or FFS." },
    { callout: "Calendar-month arithmetic: last current in January 2025 means legal IFR through 31 July 2025, self-recovery allowed through 31 January 2026, IPC required from 1 February 2026.", kind: "tip" },
    { h: "Safety pilot rules (91.109(c)) the DPE will probe" },
    { ul: [
      "At least a **private pilot** certificate with **category and class** ratings appropriate to the aircraft (a single-engine-only private pilot cannot be your safety pilot in the Seminole).",
      "Adequate forward and side vision from the other seat, or a competent observer.",
      "The safety pilot is a **required crewmember**, so they need a medical. Under the FAA's stated position a BasicMed pilot can serve as safety pilot only if they are also acting as PIC.",
      "Logging: the safety pilot may log PIC only if they are the acting PIC by agreement (61.51(e)(1)(iii)); otherwise they log SIC time for the period the view-limiting device is in use."
    ] },
    { h: "Common interview follow-ups" },
    { ul: [
      "Do approaches in VMC without a hood count? No. Solely by reference to instruments is the test.",
      "Does the hold have to be a published hold? No, but it must be a holding procedure, not just a turn in the practice area.",
      "Can a CFII count an approach the student flies? In **actual IMC**, yes: the 2008 Levy Chief Counsel interpretation lets the instructor log the approach (and the instrument time, 61.51(g)(2)) because of the oversight responsibility of instructing in actual conditions. Under **simulated** conditions only the pilot under the hood, who is the sole manipulator, logs it; the instructor is acting as safety pilot.",
      "Part 121/135 pilots are covered by their own checks (61.57(e)); the civilian carve-outs do not apply to you until you are on a certificate."
    ] },
    { h: "Check yourself" },
    { ul: [
      "State the night window in 61.57(b) and why it differs from the logging definition of night.",
      "You did 3 full-stop night landings in a 172 last week. Can you carry passengers at night in the Seminole?",
      "What four things must be logged for a simulated approach to count?",
      "Your last 6-6-HIT month was March 2026. When does the IPC become mandatory?",
      "Who can be your safety pilot for hood work in a PA-44, and what do they log?"
    ] }
  ]
},
{
  id: "regs-commercial-privileges",
  topic: "regs",
  title: "Commercial privileges, holding out, and what you can be paid for",
  minutes: 7,
  refs: ["14 CFR 61.133", "14 CFR 119.1(e)", "14 CFR 119.5", "14 CFR 91.147", "14 CFR 61.113", "AC 120-12A"],
  tags: ["cax", "part135"],
  quiz: ["regs-mcq-012", "regs-scenario-005", "regs-oral-003", "ops-mcq-001", "ops-mcq-002", "ops-mcq-003", "ops-oral-001"],
  keywords: ["commercial privileges", "holding out", "common carriage", "119.1", "61.133", "compensation", "air tour"],
  body: [
    { h: "Why it matters" },
    { p: "The commercial certificate answers a narrow question: **may this pilot be paid?** It says nothing about whether the **operation** is legal. That second question is answered by Part 119 and the FAA's common-carriage doctrine in AC 120-12A. Every examiner asks a version of 'a friend wants to pay you to fly him and his aircraft to Vegas; can you?' and the answer depends on who provides the airplane and whether anyone is holding out." },
    { h: "61.133: what the certificate lets you do" },
    { ul: [
      "A commercial pilot may act as PIC of an aircraft **carrying persons or property for compensation or hire**, provided the person is qualified under Part 61 **and** the applicable parts of the regulations that govern the operation (61.133(a)(1)). That second clause is the hook: if the operation needs a Part 119 certificate, your commercial certificate alone does not make it legal.",
      "A commercial pilot may be paid to **fly** (pilot services), but if you also **provide the aircraft** to the customer you have become an operator and need an air carrier or operating certificate unless an exception in 119.1(e) applies.",
      "**No instrument rating** (61.133(b)(1)): you may not carry passengers for hire on **cross-country flights more than 50 NM** or **at night**. You have the rating, so this limitation does not apply to you, but expect the question.",
      "Private pilots (61.113) may only share **pro rata** direct operating costs (fuel, oil, airport expenditures, rental) and must have a common purpose; commercial pilots have no such restriction on being paid."
    ] },
    { h: "Common carriage: the four elements (AC 120-12A)" },
    { ol: [
      "A **holding out** of a willingness to",
      "transport **persons or property**",
      "from **place to place**",
      "for **compensation**."
    ] },
    { p: "If all four are present, the operation is common carriage and needs an air carrier certificate (Part 121 or 135, with Part 119 as the certification rule). **Holding out** can be advertising, a website, a card on the FBO bulletin board, or simply a reputation for taking anyone who calls. The number of customers is not the test; a willingness to serve the public at large is. **Private carriage** (contract carriage) is carrying one or a few selected customers under long-term contracts without holding out; it still requires an operating certificate (Part 125 or 135 depending on the aircraft) but is not common carriage. The AC warns that a 'contract' with many customers is treated as holding out." },
    { callout: "The FAA treats **compensation** broadly: building flight time, goodwill, a free rental, or expectation of future business all count. 'I did not charge for the flight, only the fuel' is still compensation if the pilot is receiving something of value beyond a pro-rata share.", kind: "warn" },
    { h: "119.1(e): operations you can do commercially without a certificate" },
    { p: "Part 119 does not apply to the following, so a commercial pilot can be paid to do them under Part 91 (as long as the specific rule for each is met):" },
    { ul: [
      "**Student instruction**",
      "**Nonstop commercial air tours** that begin and end at the same airport within a **25 SM** radius, conducted under **91.147** (requires a Letter of Authorization, drug and alcohol program, and passenger briefing rules)",
      "**Ferry or training flights**",
      "**Aerial work**: crop dusting, seeding, spraying, bird chasing; **banner towing**; **aerial photography or survey**; **fire fighting**; helicopter construction/repair work; **pipeline and power-line patrol**",
      "**Sightseeing flights in hot-air balloons** and **parachute operations** within 25 SM",
      "Helicopter flights within a 25 SM radius with specific restrictions",
      "Emergency mail service, and carrying candidates in elections (91.321)"
    ] },
    { h: "The classic scenarios" },
    { table: { head: ["Scenario", "Legal under Part 91?", "Why"], rows: [
      ["Owner pays you to fly his own Seminole with him aboard", "Yes", "Pilot services only; owner provides the aircraft; no holding out"],
      ["You rent a 172, charge a stranger $300 to fly him to a wedding", "No", "You provide both aircraft and pilot to the public for compensation: common carriage, needs Part 135"],
      ["Brewery pays you to fly its owner and customers in the brewery's airplane", "Usually yes", "Corporate flight department under 91; the company is not carrying the public for hire. Watch 91.501 if large/turbine"],
      ["You post 'will fly anyone anywhere, cheap' on social media", "No", "Holding out, even before a single flight"],
      ["Scenic flight, same airport, within 25 SM, operator has an LOA", "Yes", "119.1(e)(2) + 91.147"],
      ["Flight instruction in a student's airplane", "Yes", "119.1(e)(1); CFI is paid for instruction, not transport"]
    ] } },
    { memo: { title: "Pilot vs operator", text: "Paid to FLY someone else's airplane = 61.133. Providing the AIRPLANE and the pilot to the public = Part 119 certificate (121/135)." } },
    { h: "Other commercial limits examiners pair with this" },
    { ul: [
      "A second-class medical is required to exercise commercial privileges for compensation (61.23(a)(2)); BasicMed and third-class do not qualify except for CFI instruction.",
      "A 100-hour inspection is required on any aircraft **you provide** for hire or for instruction for hire (91.409(b)); if the customer provides the aircraft it is not required.",
      "Part 91 commercial sightseeing under 91.147 is the one place a commercial pilot can sell seats to the public without a 135 certificate, and only within the 25 SM nonstop rule."
    ] },
    { h: "Check yourself" },
    { ul: [
      "Recite the four elements of common carriage.",
      "A friend offers to pay you $500 to fly him in a rented 172 to a business meeting 200 NM away. Legal? What would make it legal?",
      "What does 61.133(b)(1) restrict for a commercial pilot without an instrument rating?",
      "Name five 119.1(e) operations a commercial pilot can be paid to do under Part 91.",
      "Which medical class do you need to be paid, and does BasicMed ever count?"
    ] }
  ]
},
{
  id: "regs-equipment-inspections",
  topic: "regs",
  title: "Required equipment, inspections and inoperative equipment (91.205/91.213/91.409)",
  minutes: 8,
  refs: ["14 CFR 91.205", "14 CFR 91.213(d)", "14 CFR 91.409", "14 CFR 91.411; 91.413", "14 CFR 91.207", "14 CFR 91.171", "14 CFR 91.203; 47.40", "14 CFR 91.7; 91.403; 91.407"],
  tags: ["flight-review", "ipc"],
  quiz: ["regs-mcq-027", "regs-mcq-028", "regs-mcq-029", "regs-mcq-031", "regs-mcq-033", "regs-mcq-034", "regs-mcq-037", "regs-card-006", "regs-card-007", "regs-oral-004", "regs-oral-007"],
  keywords: ["91.205", "91.213", "91.409", "inoperative", "annual", "100-hour", "ARROW", "ELT", "transponder check", "altimeter check"],
  body: [
    { h: "Why it matters" },
    { p: "This is the preflight-legality cluster: is the **airplane** legal for the flight, and what do you do when something is broken. The DPE script is predictable: 'What do you need for IFR tonight?', 'The strobe is inoperative, can you go?', and 'The 100-hour is 3 hours overdue, can you reposition it?' All three answers come from four rules." },
    { h: "Documents on board (91.203, 91.9)" },
    { memo: { title: "ARROW", text: "Airworthiness certificate (displayed), Registration (valid 7 years since 2023), Radio station license (only for international flights), Operating limitations (AFM/POH, placards, markings), Weight and balance (current, aircraft-specific)." } },
    { h: "Required instruments and equipment (91.205)" },
    { table: { head: ["Flight", "Mnemonic", "Items"], rows: [
      ["Day VFR (b)", "A TOMATO FLAMES", "Airspeed, Tachometer (each engine), Oil pressure (each engine), Manifold pressure (each altitude engine), Altimeter, Temperature gauge (each liquid-cooled engine), Oil temperature (each air-cooled engine), Fuel gauge (each tank), Landing gear position indicator (retractable), Anticollision lights (aircraft certificated after March 1996), Magnetic compass, ELT (91.207), Safety belts and shoulder harnesses"],
      ["Night VFR (c)", "+ FLAPS", "Fuses (spare set or 3 of each kind if accessible), Landing light (if for hire), Anticollision lights, Position lights, Source of electrical energy"],
      ["IFR (d)", "+ GRABCARD", "Generator/alternator of adequate capacity, Radios/nav equipment suitable for the route, Attitude indicator, Ball (slip-skid), Clock with sweep second hand or digital presentation, Altimeter (sensitive, adjustable), Rate of turn indicator, Directional gyro"]
    ] } },
    { p: "Above **FL240** (91.205(e)) you also need DME or suitable RNAV if VOR navigation is required. For the glass-cockpit 172S, the G1000 provides attitude, heading, turn rate and the clock, but the **standby** attitude, altimeter and airspeed are required by the type certificate and the KOEL, which brings us to 91.213." },
    { h: "Inoperative equipment without an MEL (91.213(d))" },
    { p: "Part 91 lets you fly a non-turbine airplane, rotorcraft, glider, balloon, powered parachute or weight-shift aircraft with inoperative equipment **without** an MEL or ferry permit only if **all** of these are true:" },
    { ol: [
      "The item is **not** part of the day-VFR type certification instruments and equipment for that aircraft.",
      "It is **not** indicated as required on the aircraft's **equipment list** or **Kinds of Operations Equipment List (KOEL)** for the kind of flight being conducted.",
      "It is **not** required by **91.205** or any other rule of Part 91 for the specific kind of flight (day, night, IFR).",
      "It is **not** required by an **Airworthiness Directive**.",
      "The item is either **removed** (cockpit control placarded, maintenance recorded under 43.9) or **deactivated and placarded 'Inoperative'**; if deactivation requires maintenance it must be done under Part 43.",
      "A **pilot** certificated under Part 61 or a **mechanic** determines the inoperative item does not constitute a **hazard** to the aircraft."
    ] },
    { callout: "Turbine airplanes and any aircraft with an approved MEL must use the MEL (91.213(a)); if the item is not on the MEL and is inoperative, the choice is fix it or get a **special flight permit** (ferry permit) under 21.197. A 'No MEL' Seminole or 172 is a 91.213(d) airplane.", kind: "warn" },
    { p: "Worked example: the C172S cabin heat fan fails before a day VFR flight. Not in 91.205, not on the KOEL for day VFR, no AD. Pull the breaker, placard it, log the deactivation, make the no-hazard determination: go. Change it to the **strobe** at night: anticollision lights are required by 91.205(c), so it is a no-go unless 91.209(b) applies (you may turn anticollision lights off when the PIC decides it is in the interest of safety, but that is not permission to fly with them broken). Interviewers also ask who decides airworthiness: the **owner/operator** maintains it (91.403), the **PIC** determines the aircraft is in condition for safe flight before each flight (91.7) and must discontinue the flight when an unairworthy condition occurs." },
    { h: "Inspections (91.409 and friends)" },
    { table: { head: ["Inspection", "Interval", "Who needs it"], rows: [
      ["Annual (91.409(a))", "12 calendar months", "Everyone (an annual also satisfies the 100-hour; a 100-hour never satisfies the annual)"],
      ["100-hour (91.409(b))", "100 hours time in service", "Aircraft carrying persons for hire, or instruction for hire where the instructor/school provides the aircraft"],
      ["Altimeter/static system (91.411)", "24 calendar months", "IFR in controlled airspace"],
      ["Transponder (91.413)", "24 calendar months", "Any transponder use"],
      ["ELT (91.207)", "12 calendar months inspection; battery after 1 hour cumulative use or 50% of useful life", "Everyone (with exceptions for training within 50 NM, etc.)"],
      ["VOR check (91.171)", "30 days", "IFR using VOR"],
      ["Progressive (91.409(d))", "Per approved schedule", "Replaces annual/100-hour"]
    ] } },
    { p: "The 100-hour may be exceeded by **not more than 10 hours** while **en route to reach a place** where the inspection can be done, and the excess time **counts toward the next 100 hours** (so an inspection done 3 hours over, at 103 hours since the last one, makes the next one due 97 hours later, at 200, not 203). You may not use the 10 hours to finish the day's lessons. After maintenance that 'may have appreciably changed flight characteristics,' 91.407(b) requires an operational check flight by a pilot with at least a private certificate before carrying anyone other than essential crew." },
    { memo: { title: "AV1ATE", text: "Annual 12 months, VOR 30 days, 100-hour, Altimeter 24 months, Transponder 24 months, ELT 12 months." } },
    { h: "Check yourself" },
    { ul: [
      "List GRABCARD and say which item is added for flight above FL240.",
      "Walk through the six 91.213(d) conditions for an inoperative turn coordinator in a glass 172 on a day VFR flight.",
      "The 100-hour is due at 1,250.0 and the tach reads 1,254.3 at the home field. Can you fly a lesson? Reposition to the shop 50 NM away?",
      "Which inspections are required for an IFR flight in controlled airspace, and how often?",
      "What does ARROW stand for and how long is a registration valid?"
    ] }
  ]
},
{
  id: "regs-vfr-minimums-altitudes",
  topic: "regs",
  title: "VFR weather minimums and cruising altitudes",
  minutes: 7,
  refs: ["14 CFR 91.155", "14 CFR 91.157", "14 CFR 91.159", "14 CFR 91.179", "14 CFR 91.151", "AIM 3-1-4"],
  tags: ["flight-review", "kt"],
  quiz: ["regs-mcq-021", "regs-mcq-022", "regs-mcq-023", "regs-mcq-024", "regs-mcq-025", "regs-card-005", "regs-scenario-001", "airspace-mcq-006", "airspace-mcq-007", "airspace-mcq-008", "airspace-card-009"],
  keywords: ["91.155", "VFR minimums", "cloud clearance", "special VFR", "91.159", "cruising altitude", "hemispheric", "91.179"],
  body: [
    { h: "Why it matters" },
    { p: "Knowledge-test and oral staple, but also an operational one: the flight-review rule in 61.56 specifically includes a review of Part 91 flight rules, and 91.155 is the first thing a CFI will ask. Restore the table, then the three gotchas that live in paragraphs (b), (c), (d) and in 91.157." },
    { h: "91.155 basic VFR weather minimums" },
    { table: { head: ["Airspace", "Flight visibility", "Distance from clouds"], rows: [
      ["Class A", "N/A", "N/A (VFR not permitted)"],
      ["Class B", "3 SM", "Clear of clouds"],
      ["Class C, D, and E below 10,000 MSL", "3 SM", "500 below, 1,000 above, 2,000 horizontal"],
      ["Class E at or above 10,000 MSL", "5 SM", "1,000 below, 1,000 above, 1 SM horizontal"],
      ["Class G, day, 1,200 AGL or less", "1 SM", "Clear of clouds"],
      ["Class G, night, 1,200 AGL or less", "3 SM", "500 / 1,000 / 2,000"],
      ["Class G, above 1,200 AGL but below 10,000 MSL, day", "1 SM", "500 / 1,000 / 2,000"],
      ["Class G, above 1,200 AGL but below 10,000 MSL, night", "3 SM", "500 / 1,000 / 2,000"],
      ["Class G, above 1,200 AGL and at or above 10,000 MSL", "5 SM", "1,000 / 1,000 / 1 SM"]
    ] } },
    { memo: { title: "3-152, 5-111", text: "Most controlled airspace below 10,000: 3 SM and 500 below / 1,000 above / 2,000 horizontal. At or above 10,000 MSL (E or high G): 5 SM and 1,000 / 1,000 / 1 SM." } },
    { h: "The paragraphs after the table" },
    { ul: [
      "**(b) Class G night exception**: an airplane at night, below 1,200 AGL, within **1/2 mile of the runway** in the **traffic pattern**, may operate with **1 SM** visibility clear of clouds. Helicopters have their own lower numbers.",
      "**(c) Under a ceiling**: within the lateral boundaries of the **surface area** of Class B, C, D, or E designated for an airport, no VFR beneath a ceiling when the **ceiling is less than 1,000 ft**.",
      "**(d) Takeoff, landing, pattern**: in those same surface areas, no VFR takeoff, landing, or entering the pattern unless **ground visibility is at least 3 SM**, or if ground visibility is not reported, **flight visibility at least 3 SM**.",
      "**(e)** An aircraft at the floor of a Class E area is considered to be in the airspace directly below it (the lower minimums apply at the shelf altitude itself)."
    ] },
    { h: "Special VFR (91.157)" },
    { ul: [
      "Available only within the surface area of Class B, C, D, or E for an airport, with an **ATC clearance** that you must request; ATC will not offer it.",
      "Minimums for airplanes: **1 SM** flight visibility (ground visibility 1 SM for takeoff/landing) and **clear of clouds**; helicopters need only clear of clouds.",
      "**Night** SVFR (sunset to sunrise): pilot must be **instrument rated and current** and the aircraft must be **IFR equipped** per 91.205(d).",
      "Some Class B surface areas prohibit SVFR for fixed-wing aircraft (Appendix D, Section 3; shown 'NO SVFR' on the sectional)."
    ] },
    { callout: "Ceiling 900 overcast, visibility 5 at a Class D field: you cannot operate VFR beneath the ceiling (91.155(c)) even though visibility is fine, so you need SVFR or an IFR clearance to land.", kind: "warn" },
    { h: "VFR cruising altitudes (91.159)" },
    { p: "In level cruising flight **more than 3,000 ft above the surface** and below 18,000 ft MSL, fly by **magnetic course** (not heading): **0 through 179: odd thousands plus 500** (3,500, 5,500, 7,500); **180 through 359: even thousands plus 500** (4,500, 6,500). At and above 18,000 ft MSL (Class A) VFR flight is not permitted and ATC will not authorize VFR-on-top there (AIM 4-4-8); 91.159(b) simply says above 18,000 ft maintain the altitude or flight level ATC assigns. VFR-on-top below Class A uses the same odd/even-plus-500 scheme as VFR. IFR under 91.179: in controlled airspace fly what ATC assigns; in uncontrolled airspace below 18,000, odd thousands for 0 to 179 and even for 180 to 359; in RVSM airspace (FL290 to FL410) the same odd/even rule applies at 1,000-ft intervals, and above FL410 (or non-RVSM above FL290) 4,000-ft intervals (FL290, 330, 370 eastbound; 310, 350, 390 westbound)." },
    { memo: { title: "Odd pilots fly east", text: "Magnetic course 0-179 = ODD thousands (+500 VFR). 180-359 = EVEN thousands (+500 VFR). Only above 3,000 AGL for VFR." } },
    { h: "Fuel reserves that go with the VFR flight (91.151)" },
    { ul: [
      "Day VFR: fuel to the first point of intended landing, then **30 minutes** at normal cruise.",
      "Night VFR: **45 minutes** at normal cruise.",
      "Rotorcraft: 20 minutes day or night."
    ] },
    { h: "Check yourself" },
    { ul: [
      "Daytime, Class G, 900 ft AGL: visibility and cloud clearance?",
      "Class E at 11,500 MSL: visibility and cloud clearance?",
      "What two things must be true of pilot and aircraft for night SVFR?",
      "Magnetic course 185, cruising at 6,200 MSL over terrain at 1,500 MSL: what altitudes are legal?",
      "A Class D field reports ceiling 800 and visibility 4. What are your options to get in VFR?"
    ] }
  ]
},
{
  id: "ifr-fuel-alternates",
  topic: "ifr",
  title: "IFR fuel and alternates (91.167/91.169) incl. GPS/WAAS alternate rules",
  minutes: 8,
  refs: ["14 CFR 91.167", "14 CFR 91.169", "AIM 1-1-17", "AIM 1-1-18", "AIM 5-4-5 (alternate minimums symbols)"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-001", "ifr-mcq-002", "ifr-mcq-003", "ifr-mcq-004", "ifr-scn-004", "ifr-oral-001", "nav-mcq-011", "nav-scn-001", "nav-oral-001", "charts-scn-001"],
  keywords: ["alternate", "1-2-3", "fuel", "91.167", "91.169", "600-2", "800-2", "WAAS", "RAIM", "alternate minimums"],
  body: [
    { h: "Why it matters" },
    { p: "Alternate planning is the one regulation an examiner can turn into a 20-minute conversation, because it chains four questions together: do I need an alternate, which airports qualify, how much fuel does that drive, and what does my GPS let me plan on. Get the trigger words exact and the rest follows." },
    { h: "Fuel (91.167)" },
    { p: "No person may operate a civil aircraft in IFR conditions unless it carries enough fuel (considering weather reports, forecasts and conditions) to: (1) fly to the **first airport of intended landing**; (2) then fly to the **alternate** (if one is required); and (3) then fly after that for **45 minutes at normal cruising speed** (airplanes; helicopters 30 minutes). The reserve is computed at **normal cruise**, not best economy, and it is a planning requirement: there is no rule that says you must land with 45 minutes, but you must have planned to." },
    { memo: { title: "D-A-45", text: "Destination, then Alternate, then 45 minutes at normal cruise (airplane). Part 135 (135.223) uses the same formula." } },
    { h: "When is an alternate required? (91.169(b))" },
    { p: "An alternate is **not** required when, for the first airport of intended landing, **both** are true: (1) a standard or special **instrument approach procedure** is published for that airport; and (2) weather reports or forecasts, or any combination, indicate that from **1 hour before to 1 hour after the ETA** the **ceiling will be at least 2,000 ft above the airport elevation** and the **visibility will be at least 3 SM**. Miss either one and you file an alternate." },
    { memo: { title: "1-2-3", text: "Within 1 hour before and after ETA, ceiling at least 2,000 ft and visibility at least 3 SM, or you need an alternate. No IAP at the destination means you always need one." } },
    { callout: "A TEMPO or PROB group inside the ETA window that drops the forecast below 2,000/3 counts against you. The FAA Chief Counsel treats conditional forecast language as part of 'the forecast'.", kind: "warn" },
    { h: "What makes an airport a legal alternate? (91.169(c))" },
    { table: { head: ["Alternate has", "Required forecast at ETA at the alternate"], rows: [
      ["Published nonstandard alternate minimums ('A' triangle, listed in TPP front section)", "Those minimums"],
      ["Standard minimums, precision approach (ILS, PAR, GLS)", "Ceiling 600 ft and visibility 2 SM"],
      ["Standard minimums, non-precision approach (incl. RNAV LNAV, LP, LNAV/VNAV for planning)", "Ceiling 800 ft and visibility 2 SM"],
      ["'A NA' symbol (alternate not authorized)", "Cannot be used as an alternate (often because weather reporting is not available)"],
      ["No instrument approach at all", "Ceiling and visibility must allow descent from the MEA, approach, and landing under **basic VFR**"]
    ] } },
    { p: "The 600-2 / 800-2 numbers are **planning** numbers only. Once you divert and arrive at the alternate you fly the approach to its **published** minimums. The reverse gotcha: an airport can have a 200-ft ILS and still be 'A NA' because it has no weather reporting, or it may have a note like 'ILS NA when tower closed'; read the alternate minimums page for every alternate you file." },
    { h: "GPS equipment changes the plan (AIM 1-1-17, 1-1-18)" },
    { ul: [
      "**Non-WAAS GPS (TSO-C129 or TSO-C196)**: you may plan to use a GPS-based approach at the **destination or the alternate, but not both**. The other airport needs a usable ground-based approach for which the aircraft is equipped. Before flight, a **RAIM prediction** is required for the destination (and alternate) ETA; TSO-C196 units have FDE, which the FAA accepts for some flexibility, but the one-airport limit remains.",
      "**WAAS (TSO-C145/C146)**: you may plan RNAV (GPS) approaches at **both** destination and alternate, **but** at the alternate you must plan on the **LNAV or circling MDA** line, or the LNAV/VNAV DA only if the aircraft has **baro-VNAV**. Never plan on LPV at the alternate. Because you plan on a non-precision line, the standard alternate minimum is **800-2** even if the airport also has an LPV with a 200-ft DA. On arrival, if the box shows LPV, fly LPV.",
      "Either equipment type: the alternate's RNAV (GPS) approach must not be marked 'A NA' for GPS use; the FAA has been removing the NA symbol from procedures approved for WAAS users.",
      "GPS NOTAMs and WAAS UNRELIABLE NOTAMs for the route and both airports are part of 91.103 preflight."
    ] },
    { h: "Worked example" },
    { p: "WAAS-equipped 172S, destination forecast 1,500 overcast and 5 SM at ETA. Ceiling below 2,000, so an alternate is required. Candidate alternate has an ILS (standard minimums) and an RNAV LPV. Forecast there is 700 overcast, 3 SM. Planning on the ILS requires 600-2: legal. Planning on the RNAV requires 800-2 (LNAV line): not legal with 700. Either way you file it (one legal basis is enough), carry fuel for destination, the alternate, plus 45 minutes, and if you divert you may fly the LPV to its 200-ft DA." },
    { h: "Check yourself" },
    { ul: [
      "Recite 91.167 for an airplane and say what 'normal cruising speed' implies for your fuel number.",
      "Destination has an ILS; TAF shows BKN025 4SM, TEMPO 1900 OVC015 2SM, ETA 2000Z. Alternate required?",
      "Standard alternate minimums for an airport with only an RNAV (GPS) approach with LPV minimums?",
      "Non-WAAS TSO-C129 GPS: destination has only an RNAV approach. What must be true of the alternate?",
      "Why can a 200-ft ILS airport still be unusable as an alternate?"
    ] }
  ]
},
{
  id: "ifr-holding",
  topic: "ifr",
  title: "Holding patterns",
  minutes: 7,
  refs: ["AIM 5-3-8", "AIM 5-3-3", "AIM 4-4-3", "IFH Ch. 10"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-014", "ifr-mcq-015", "ifr-mcq-016", "ifr-card-005", "ifr-scn-006", "ifr-oral-004", "charts-mcq-004"],
  keywords: ["hold", "holding", "entry", "EFC", "teardrop", "parallel", "direct", "holding speed"],
  body: [
    { h: "Why it matters" },
    { p: "Holding is a required IPC task and an ACS task, and in the real world it is what you get when the airport goes below minimums or the approach course is saturated. Everything you need lives in AIM 5-3-8: the clearance format, the speeds, the timing, the entry, and what to report." },
    { h: "What ATC must give you" },
    { p: "A holding clearance contains, in this order: **direction** of holding from the fix (eight cardinal/intercardinal points), the **fix**, the **radial, course, bearing, airway or route** on which to hold, the **leg length in miles** if DME or RNAV is to be used, **direction of turns if left** (right is standard and will not be stated), and the **expect further clearance (EFC)** time plus any pertinent additional delay information. 'Hold as published' means the charted pattern; if you do not have the chart, ask for the full clearance. If you reach a clearance limit with no holding instructions, hold in a **standard pattern on the course on which you approached the fix** and ask for further clearance (AIM 5-3-8)." },
    { h: "Speeds and timing" },
    { table: { head: ["Altitude (MSL)", "Max holding KIAS", "Inbound leg"], rows: [
      ["Minimum holding altitude through 6,000", "200", "1 minute"],
      ["6,001 through 14,000", "230 (210 where charted with an icon)", "1 minute"],
      ["Above 14,000", "265", "1.5 minutes"]
    ] } },
    { ul: [
      "Cross the fix initially at or below the maximum holding speed: **slow to holding speed within 3 minutes** of your ETA at the fix. The Seminole and 172 are never close to these limits, but the question still gets asked.",
      "Timing: the **inbound** leg is what is timed. Start the outbound timing **abeam the fix** or when **wings level** outbound, whichever occurs later; adjust the outbound time so the inbound leg is 1 minute (or 1.5).",
      "DME/GPS legs: the outbound leg ends when the charted distance from the fix is reached (DME) or when the along-track distance is reached (RNAV); no timing.",
      "Wind: correct the inbound leg normally, then **triple the drift correction on the outbound leg**."
    ] },
    { h: "Entries" },
    { p: "Draw the holding course, then the **70-degree line** through the fix on the holding side. Your heading as you arrive at the fix tells you the entry:" },
    { ul: [
      "**Direct**: arriving from the sector that lets you turn directly onto the outbound leg (the large 180-plus-degree sector). Cross the fix, turn to the outbound heading.",
      "**Teardrop**: arriving with a heading within 70 degrees of the outbound course on the holding side. Cross the fix, fly outbound on a heading **30 degrees** from the outbound course toward the holding side for 1 minute, then turn in the direction of the pattern to intercept the inbound course.",
      "**Parallel**: arriving from the non-holding side. Cross the fix, turn to parallel the holding course **outbound** on the non-holding side for 1 minute, then turn **toward the holding side** through more than 180 degrees to intercept inbound.",
      "The AIM allows **plus or minus 5 degrees** on the sector boundaries; pick the easier entry."
    ] },
    { memo: { title: "Thumb rule (standard, right turns)", text: "Right thumb over the heading indicator on the inbound course, thumb tip at the top: the heading under your thumb area is teardrop, the opposite small sector is parallel, everything else direct. Use the left thumb for left turns." } },
    { h: "Reports and the rest of the procedure" },
    { ul: [
      "Mandatory reports (AIM 5-3-3): **time and altitude** reaching the holding fix, and **when leaving** the fix. Also report when you are unable to make the EFC-based plan.",
      "Hold at the **last assigned altitude**; if cleared to hold at a new altitude, do the climb or descent on the way to the fix.",
      "If your EFC passes with no further clearance and you have lost comms, the 91.185 clock starts from the EFC (see Lost communications).",
      "GPS: load the hold from the procedure if it is published; for an ad hoc hold use OBS/SUSP so the unit stops sequencing, set the inbound course, and remember that the turn-anticipation and leg-length are now up to you.",
      "Standard pattern: **right** turns; non-standard **left** turns will always be stated."
    ] },
    { h: "Clearance example" },
    { p: "'Seminole 123AB, hold southeast of the ABC VOR on the 135 radial, left turns, 5-mile legs, expect further clearance at 1630.' You hold on the southeast side, the inbound course is the reciprocal of the radial (**315**), turns are to the left, the outbound leg ends at 5 DME, and you fly inbound toward the VOR on 315. With left turns the holding side is the **southwest** side of that course line. Measure the sectors from the outbound heading (135): the 70-degree teardrop sector is on the holding side (headings 135 through 205), the 110-degree parallel sector is on the other side (025 through 135), and the remaining 180 degrees (205 through 025, which includes arriving along the inbound course) is direct. Arriving from the north on a heading of 180 you are in the teardrop sector: cross the VOR, turn to 165 (30 degrees toward the holding side from the outbound course) for 1 minute, then a left turn to intercept 315 inbound. Arriving on a heading of 090 would be a parallel entry; arriving on 300 (as in the bank scenario) is direct." },
    { callout: "Read back the full holding clearance, including the EFC. If ATC gives no EFC, ask; you need it for lost-comms planning and fuel.", kind: "tip" },
    { h: "Check yourself" },
    { ul: [
      "What six items are in a complete holding clearance, in order?",
      "Max holding speed at 9,000 ft and at 15,000 ft, and the inbound leg time at each?",
      "Hold west of a VOR on the 270 radial, standard turns. You arrive heading 090. Which entry and why?",
      "When does the outbound timing start?",
      "What do you report, and when, in a hold?"
    ] }
  ]
},
{
  id: "ifr-lost-comms",
  topic: "ifr",
  title: "Lost communications (91.185)",
  minutes: 7,
  refs: ["14 CFR 91.185", "AIM 6-4-1", "AIM 6-4-2", "AIM 4-1-20 (code 7600)", "14 CFR 91.121; 91.177"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-009", "ifr-mcq-010", "ifr-mcq-011", "ifr-mcq-012", "ifr-mcq-013", "ifr-card-002", "ifr-card-003", "ifr-scn-002", "ifr-oral-003"],
  keywords: ["lost comms", "91.185", "AVEF", "MEA", "7600", "radio failure", "clearance limit", "EFC"],
  body: [
    { h: "Why it matters" },
    { p: "Two-way radio failure in IMC is the scenario every examiner uses to test whether you understand that ATC will **protect the airspace you are expected to use**. 91.185 is short and precise. The AIM (6-4-1) adds the judgment layer: the regulation cannot cover every case, and if an emergency is involved you may deviate under 91.3. But you must first know the default." },
    { h: "First: is it really lost comms?" },
    { ul: [
      "Check volume, squelch, headset jacks, audio panel, frequency, the other radio, the other frequency, and try the **last assigned** frequency and the one before it.",
      "Try **121.5**, FSS, an ARTCC frequency from the chart, or a nearby tower; listen on the **VOR voice** feature; try your phone to the facility if you have a number; ask another aircraft to relay.",
      "Squawk **7600** (AIM 4-1-20). If the failure is a receiver only, transmit in the blind on the assigned frequency with your intentions. If your transmitter only is dead, follow ATC's instructions and acknowledge with IDENT if asked.",
      "At a tower you may receive **light gun signals** (AIM 4-3-13): steady green is cleared to land, flashing green return for landing, steady red give way/continue circling, flashing red airport unsafe."
    ] },
    { h: "VFR conditions (91.185(b))" },
    { p: "If the failure occurs in VFR conditions, or if VFR conditions are encountered **after** the failure, each pilot shall **continue the flight under VFR and land as soon as practicable**. Practicable, not possible: the AIM says this does not mean the nearest airport if a suitable one is reasonably close, and it is not a license to fly on to the destination through IMC because the weather there might be VFR. Once you are VFR, stay VFR." },
    { h: "IFR conditions: route (91.185(c)(1))" },
    { memo: { title: "AVEF", text: "Assigned route; if being Vectored, direct from the point of failure to the fix, route, or airway specified in the vector clearance; otherwise the route ATC said to Expect in a further clearance; otherwise the route Filed in the flight plan." } },
    { h: "IFR conditions: altitude (91.185(c)(2))" },
    { p: "Fly the **highest** of the following for the **route segment being flown**: (i) the altitude or flight level **assigned** in the last ATC clearance; (ii) the **minimum altitude** (MEA, or the 91.177 minimum IFR altitude where no MEA) for IFR operations; (iii) the altitude ATC has advised may be **expected** in a further clearance. It is reevaluated segment by segment: climb to a higher MEA when you reach that segment, then descend back to the assigned altitude when the MEA drops, unless the expected altitude is higher." },
    { memo: { title: "MEA, highest of", text: "Minimum (MEA), Expected, Assigned. Take the highest, segment by segment." } },
    { p: "Example: assigned 6,000, told to expect 9,000 in 10 minutes, next segment MEA 7,000. Fly 6,000 until 10 minutes have elapsed or the 7,000 MEA segment begins, whichever comes first, then 7,000 on that segment, then 9,000 once the 10 minutes are up, and stay at 9,000 (the expected altitude) thereafter unless a later MEA is higher." },
    { h: "When to leave the clearance limit (91.185(c)(3))" },
    { table: { head: ["Clearance limit is...", "EFC received?", "Action"], rows: [
      ["A fix from which an approach begins (IAF)", "Yes", "Commence descent/approach as close as possible to the EFC"],
      ["A fix from which an approach begins", "No", "Commence descent/approach as close as possible to the ETA calculated from the filed or amended (with ATC) ETE"],
      ["Not a fix from which an approach begins", "Yes", "Leave the fix at the EFC, proceed to an IAF, start the approach as close as possible to the ETA"],
      ["Not a fix from which an approach begins", "No", "Leave the fix upon arrival over it, proceed to an IAF, start the approach as close as possible to the ETA"]
    ] } },
    { p: "Arriving early at an IAF with no EFC means **holding** until the ETA, because ATC is protecting the approach airspace based on your flight-plan ETA. Arriving late, start down immediately. The approach you fly is any published one at the destination; the AIM asks you to pick the one most appropriate and, if you can, to tell someone." },
    { callout: "The ETA is computed from your **filed ETE** applied to your actual departure time, as amended with ATC. If ATC gave you a shortcut earlier, your ETA moved; use the amended one.", kind: "tip" },
    { h: "Judgment layer (AIM 6-4-1)" },
    { ul: [
      "The regulation presumes ATC loses only your voice; they still have your transponder and will clear traffic around the expected route and altitude. Flying something unexpected (a direct to the nearest ILS) is only defensible as an emergency under 91.3(b).",
      "If the failure is accompanied by an electrical problem, it **is** an emergency: squawk 7700 if able and do what safety requires, then file the report if ATC asks.",
      "Modern reality: most 'lost comms' are a wrong frequency or a stuck mic. Settle the simple failures before invoking 91.185."
    ] },
    { h: "Check yourself" },
    { ul: [
      "Recite the route priority and the altitude rule, with the regulation paragraphs.",
      "You break out into VMC 40 NM from the destination which is reporting IMC. What does 91.185 require?",
      "Clearance limit is a VOR that is not an IAF, no EFC. What do you do on arrival over it?",
      "Assigned 5,000, MEA ahead 8,000, no expected altitude. Altitude on that segment, and after it?",
      "What transponder code and what frequency do you try first?"
    ] }
  ]
},
{
  id: "ifr-91175-minimums-missed",
  topic: "ifr",
  title: "Descending below DA/MDA and the missed approach (91.175)",
  minutes: 8,
  refs: ["14 CFR 91.175(c),(d),(e),(h),(i),(j)", "AIM 5-4-21", "AIM 5-4-5 (VDP)", "AIM 2-1-1", "14 CFR 135.225(e)"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-007", "ifr-mcq-008", "ifr-mcq-025", "ifr-mcq-030", "ifr-mcq-031", "ifr-card-008", "ifr-scn-001", "ifr-scn-003", "ifr-oral-002", "ifr-oral-006", "charts-mcq-013", "charts-mcq-014", "charts-card-005"],
  keywords: ["91.175", "DA", "MDA", "visual references", "missed approach", "approach lights", "red terminating bars", "RVR", "circling", "VDP"],
  body: [
    { h: "Why it matters" },
    { p: "91.175(c) is the sentence you recite at minimums on every approach for the rest of your career. The DPE will ask for the three conditions, then for the ten visual references, then for the one trap in the list (the approach lights), then what triggers the missed. Learn it as a decision script." },
    { h: "The three conditions to go below DA or MDA (91.175(c))" },
    { ol: [
      "The aircraft is **continuously in a position** from which a descent to a landing on the intended runway can be made at a **normal rate of descent using normal maneuvers**; for Part 121 and 135, that descent must allow touchdown **within the touchdown zone**.",
      "The **flight visibility** is not less than the visibility prescribed in the approach being used (it is flight visibility, judged by the pilot, that governs the descent; the reported value governs whether Part 121/135 may **begin** the approach).",
      "At least **one** of the listed visual references for the intended runway is **distinctly visible and identifiable** to the pilot."
    ] },
    { h: "The ten visual references" },
    { ul: [
      "**Approach light system** (see trap below)",
      "**Threshold**",
      "**Threshold markings**",
      "**Threshold lights**",
      "**Runway end identifier lights (REIL)**",
      "**Visual glideslope indicator** (VASI/PAPI)",
      "**Touchdown zone** or touchdown zone markings",
      "**Touchdown zone lights**",
      "**Runway** or runway markings",
      "**Runway lights**"
    ] },
    { callout: "Approach lights alone let you descend only to **100 ft above the touchdown zone elevation**. To go lower on the approach lights you must also see the **red terminating bars** or the **red side row bars** (ALSF-1/ALSF-2 only). MALSR has no red bars: on a MALSR runway you can go from DA to 100 above TDZE on the lights, then you need one of the other nine references.", kind: "warn" },
    { h: "DA versus MDA" },
    { ul: [
      "**DA** (precision and APV approaches: ILS, LPV, LNAV/VNAV): a **decision** altitude. You may momentarily dip below DA while initiating the missed because the decision is made at DA; the obstacle evaluation assumes it.",
      "**MDA** (non-precision: LOC, VOR, LNAV, LP, circling): a floor. You may not go below MDA unless (c) is satisfied, and you may arrive at MDA well before the MAP and level off. The **VDP**, where published, is the point from which a normal descent (about 3 degrees) from MDA reaches the runway; past the VDP you will probably not meet the 'normal rate of descent' condition even if you see the runway.",
      "**Landing** (91.175(d)): no one may land if **flight visibility** is less than that prescribed for the approach, even if they saw the runway at DA."
    ] },
    { h: "When the missed is mandatory (91.175(e))" },
    { ul: [
      "Whenever the conditions in (c) are **not met** when the aircraft is **operating below MDA**, or **upon arrival at the MAP** (including a DA where one is specified), and at any time after that until touchdown.",
      "Whenever an **identifiable part of the airport** is not distinctly visible during a **circling** maneuver at or above MDA, unless the loss of visual contact is only the result of a normal bank during the circle.",
      "Circling missed technique (AIM 5-4-21): make an initial **climbing turn toward the landing runway** and continue the turn until established on the missed approach course; different turns from different positions in the circle, so brief it.",
      "On a non-precision approach, if you decide early that you will not get in, you still fly to the MAP before turning, because the missed obstacle clearance begins there; you may climb early but not turn early."
    ] },
    { h: "Related sub-paragraphs the examiner pairs with (c)" },
    { table: { head: ["Paragraph", "Rule"], rows: [
      ["91.175(f)", "Takeoff minimums for 121/125/129/135: if none published, 1 SM for 2 engines or less, 1/2 SM for more than 2. Part 91 has no takeoff minimums (but the ODP climb gradient still exists)."],
      ["91.175(h)", "RVR to ground visibility conversion when RVR is not reported: 1600 = 1/4, 2400 = 1/2, 3200 = 5/8, 4000 = 3/4, 4500 = 7/8, 5000 = 1, 6000 = 1 1/4 SM."],
      ["91.175(i)", "On an unpublished route or on radar vectors, when you receive the approach clearance you maintain the **last assigned altitude** until established on a segment of a published route or the IAP (unless ATC assigns another altitude); radar vectors may substitute for the initial/intermediate segments."],
      ["91.175(j)", "No procedure turn without ATC clearance when: radar vectored to the final approach course or fix, conducting a timed approach from a holding fix, or the chart says NoPT."],
      ["91.175(k)", "Basic ILS components are the localizer, glide slope and outer marker (plus inner marker for CAT II/III); a compass locator, PAR/ASR, DME fix, a VOR/NDB fix, or a suitable RNAV/GPS fix may substitute for the OM. Raised minimums for inoperative components come from the TPP Inoperative Components Table at the front of the volume."],
      ["135.225(e)", "Part 135 PIC of a **turbine-powered airplane** with fewer than 100 hours PIC in that type: add 100 ft to the MDA/DA and 1/2 SM to the visibility, not to exceed the airport's alternate minimums ('high-minimums captain')."]
    ] } },
    { h: "Decision script at minimums" },
    { ol: [
      "Pilot flying: 'Minimums.' Pilot monitoring (or you, single-pilot): 'Approach lights in sight' / 'Runway in sight' / 'No contact, go around.'",
      "With approach lights only: continue to 100 ft above TDZE; then you need red bars (ALSF) or another reference, or go missed.",
      "At any point below DA/MDA, if you lose the reference or cannot make a normal descent to the touchdown zone, missed approach: power, pitch, flaps, positive rate, gear, then navigate the missed and talk."
    ] },
    { h: "Check yourself" },
    { ul: [
      "State the three 91.175(c) conditions without looking.",
      "At DA on an ILS with a MALSR you see only the approach lights. How low can you go and what do you need next?",
      "RVR 2400 is published but RVR is not being reported. What visibility do you need?",
      "You lose sight of the runway at MDA on a circling approach, midfield downwind. Describe the missed.",
      "Can you turn toward the missed approach course before the MAP on a VOR approach? Why not?"
    ] }
  ]
},
{
  id: "ifr-departures-enroute",
  topic: "ifr",
  title: "Departures: ODP/SID, climb gradients, and enroute altitudes",
  minutes: 8,
  refs: ["AIM 5-2-9", "AIM 5-3-4", "AIM 5-3-5", "14 CFR 91.177", "14 CFR 91.175(f)", "IPH Ch. 1-2"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-027", "ifr-mcq-028", "ifr-mcq-029", "ifr-card-009", "ifr-card-010", "charts-mcq-001", "charts-mcq-006", "charts-card-002"],
  keywords: ["ODP", "SID", "climb gradient", "200 ft/NM", "DER", "climb via", "MEA", "MOCA", "MCA", "MRA", "MAA", "OROCA", "91.177"],
  body: [
    { h: "Why it matters" },
    { p: "Approach briefings get all the attention, but obstacle departures are where a light twin on one engine, or a 172 at a mountain airport, has no margin. The examiner wants three things: what the standard assumptions are, how to convert a gradient to a vertical speed, and the difference between an ODP and a SID. Then the enroute altitude alphabet." },
    { h: "Standard departure assumptions (AIM 5-2-9)" },
    { ul: [
      "You cross the **departure end of runway (DER)** at least **35 ft** above DER elevation.",
      "You climb to **400 ft above DER elevation** before making the initial turn (unless the procedure says otherwise).",
      "You maintain a climb gradient of at least **200 ft/NM** to the minimum IFR altitude, unless a higher gradient is published.",
      "The obstacle identification surface slopes up at **152 ft/NM** (40:1) from the DER; the 48 ft/NM difference is your required obstacle clearance, which is why a published gradient is non-negotiable.",
      "If obstacles penetrate the 40:1 surface, the FAA publishes **non-standard takeoff minimums** (ceiling/visibility to see and avoid) and/or a **higher climb gradient** and/or an **ODP**. **Low, close-in obstacles** within 1 NM of the DER are listed in the notes but do not generate a gradient: you are expected to see and avoid them."
    ] },
    { memo: { title: "35-400-200", text: "Cross the DER at 35 ft, climb to 400 ft AGL before turning, at least 200 ft/NM." } },
    { h: "Gradient to rate" },
    { p: "**Required fpm = gradient (ft/NM) x groundspeed (kt) / 60.** An ODP requiring 350 ft/NM at 90 kt groundspeed needs 350 x 90 / 60 = **525 fpm**. At a Seminole single-engine climb of a few hundred fpm on a hot day, that is the number that tells you a one-engine departure from that airport is not survivable, so the brief includes 'engine failure after V1-equivalent decision: land straight ahead or return VFR'. The TPP front section has the rate-of-climb table so you do not have to do the arithmetic." },
    { h: "ODP vs SID" },
    { table: { head: ["", "ODP", "SID"], rows: [
      ["Purpose", "Obstacle clearance only", "ATC system efficiency and reduced comms, plus obstacle clearance"],
      ["Form", "Textual (TPP 'Takeoff Minimums, (Obstacle) Departure Procedures, and Diverse Vector Area' section) or graphic with '(OBSTACLE)' in the title", "Always graphic, with transitions"],
      ["Clearance needed?", "No; may be flown without ATC clearance unless ATC assigns something else", "Must be assigned by ATC; file 'NO SID' in remarks if you do not want one"],
      ["Who should use it", "Part 91 is not required to but is strongly encouraged in IMC; 121/135 must comply with ops specs", "Anyone assigned"]
    ] } },
    { p: "The **'T' in a black triangle** on an approach plate means non-standard takeoff minimums and/or an ODP exist for that airport: look them up. ATC assumes that a departing IFR aircraft in IMC will fly the ODP unless a SID or radar vectors are issued; a **Diverse Vector Area (DVA)** lets ATC vector you below the MVA right after takeoff, and you will see 'DVA' noted in the same TPP section. 'Climb via SID' means comply with the lateral path **and** the published altitude and speed restrictions, climbing to the top altitude; 'climb via SID except maintain 5,000' replaces the top altitude only." },
    { h: "Enroute minimum altitudes (AIM 5-3-4, 5-3-5)" },
    { table: { head: ["Term", "Guarantee", "Chart"], rows: [
      ["MEA", "Obstacle clearance and nav signal coverage for the whole segment; 1,000 ft (2,000 ft designated mountainous) within the airway", "Plain altitude under the segment; arrows if directional; 'G' suffix = GNSS (RNAV) MEA"],
      ["MOCA", "Same obstacle clearance; nav signal only within 22 NM of the VOR", "Asterisk, e.g. *3400"],
      ["MRA", "Lowest altitude at which an off-airway fix can be received", "MRA flag at the fix"],
      ["MCA", "Altitude you must cross the fix at when proceeding toward a higher MEA; start the climb before the fix", "MCA flag with airway, altitude, direction"],
      ["MAA", "Highest usable altitude on the segment (signal overlap or airspace)", "MAA-15000"],
      ["OROCA", "1,000 ft (2,000 ft mountainous) above the highest obstacle in the quadrangle; no nav or comm guarantee", "Large grid numbers"],
      ["MVA / MIA", "ATC's vectoring and instrument altitudes; not on pilot charts", "None"]
    ] } },
    { p: "**91.177** is the off-airway rule: where no MEA/MOCA applies, stay **2,000 ft above the highest obstacle within 4 NM** of course in **designated mountainous** areas and **1,000 ft** elsewhere. 91.177(a)(1) adds that where both an MEA and a MOCA are published you may operate below the MEA but not below the MOCA when within 22 NM of the VOR (for VOR navigation), and 91.177(b) says climbs to a higher minimum altitude begin **immediately after** passing the fix unless an MCA is published, in which case you must be at the MCA crossing the fix. **MEA gap** on the chart means a hole in signal coverage; the altitude still gives obstacle clearance. **T-routes** are RNAV low-altitude routes from 1,200 AGL (or as designated) to but not including 18,000 ft." },
    { callout: "ATC can clear an RNAV-equipped aircraft below the MEA down to the MOCA, and can assign an MVA/MIA that is below both. The chart numbers are your floor when you are **navigating yourself**; on vectors the controller owns terrain clearance down to the MVA, but you still own situational awareness.", kind: "tip" },
    { h: "Check yourself" },
    { ul: [
      "State the three standard departure assumptions and the OCS slope.",
      "ODP requires 425 ft/NM to 4,000 at 100 kt groundspeed. Required fpm?",
      "Can you fly an ODP without telling ATC? What should you do anyway?",
      "What does the asterisk mean under an airway altitude, and how far from the VOR can you use it?",
      "Define MCA and say when the climb must begin."
    ] }
  ]
},
{
  id: "charts-approach-plate",
  topic: "charts",
  title: "Reading an approach plate top to bottom",
  minutes: 8,
  refs: ["AIM 5-4-5", "FAA Chart User's Guide (Terminal Procedures)", "14 CFR 97.3", "AIM 5-4-7", "AIM 5-4-20", "IPH Ch. 4"],
  tags: ["ipc", "ira"],
  quiz: ["charts-mcq-001", "charts-mcq-002", "charts-mcq-003", "charts-mcq-012", "charts-mcq-015", "charts-card-001", "charts-card-002", "charts-card-003", "charts-scn-002", "charts-oral-001", "ifr-mcq-019", "ifr-mcq-026"],
  keywords: ["approach plate", "briefing strip", "plan view", "profile view", "minimums", "MSA", "TDZE", "HAT", "approach category", "circling", "FAF", "Maltese cross"],
  body: [
    { h: "Why it matters" },
    { p: "An FAA (government) plate is laid out in the order you brief it. If you read it top to bottom you will not miss the note that says 'DME required' or the 'A NA' that kills your alternate. Use this lesson to rebuild your briefing flow; the oral question 'brief me this approach' is really 'show me you know where everything lives.'" },
    { h: "1. Margins and the briefing strip" },
    { ul: [
      "**Top margin**: city/state, airport name and identifier, procedure title. The title tells you the navigation source and the straight-in runway ('ILS or LOC RWY 36', 'RNAV (GPS) RWY 17'); a letter instead of a runway ('VOR-A') means circling minimums only. 'Z' and 'Y' suffixes distinguish multiple approaches of the same type to the same runway.",
      "**Amendment/effective date** in the margin; the chart is valid only in the current 56-day cycle (TPP is republished every 56 days).",
      "**Briefing strip, row 1**: primary navaid frequency or WAAS channel, final approach course, runway length, **TDZE** (touchdown zone elevation) and **airport elevation**.",
      "**Row 2, notes**: equipment requirements ('RADAR required', 'DME required', 'GPS required'), temperature limits for baro-VNAV, the **snowflake** with a temperature (cold-temperature airport: apply altitude corrections at or below it), the **black triangle 'T'** (non-standard takeoff minimums and/or ODP published), the **black triangle 'A'** (non-standard alternate minimums) or **'A NA'** (alternate not authorized), and **circling restrictions**.",
      "**Row 3, missed approach** in text, with icons repeated in the profile view.",
      "**Row 4, frequencies** in the order you will use them: ATIS/AWOS, approach, tower, ground, UNICOM/CTAF, with 'when tower closed' notes."
    ] },
    { h: "2. Plan view" },
    { ul: [
      "**MSA** circle: minimum safe altitude, normally within **25 NM** of the facility named, giving **1,000 ft** obstacle clearance per sector; emergency use only, no nav guidance implied. RNAV plates may use a **TAA** instead, with its own sectored minimum altitudes that are operationally usable.",
      "**IAFs** labeled, **feeder routes** with course, distance and altitude, the **procedure turn barb** (or a bold **hold-in-lieu** pattern) with the 'remain within 10 NM' note, and **NoPT** on routes where a PT is prohibited.",
      "Fly-by waypoints are plain four-point stars; **fly-over** waypoints have a circle around the star (common at the MAP and in missed approach segments).",
      "Obstacles with elevations, the highest obstacle in bold with a larger dot, and the airport sketch footprint. Minimum altitudes in the plan view are MSL."
    ] },
    { h: "3. Profile view" },
    { ul: [
      "Course, altitudes, and distances from the IAF to the MAP. **Underlined** altitudes are minimums, **overlined** are maximums, both lines means mandatory.",
      "**FAF**: a **Maltese cross** for the non-precision final approach fix; a **lightning bolt** marks glideslope/glidepath intercept on a precision or APV approach (the precision FAF is wherever you intercept the glideslope at the published altitude).",
      "Stepdown fixes with their minimum altitudes, the **VDP** ('V'), the **MAP** (end of the solid line, often at the runway threshold for ILS, at a named waypoint or a DME/timing point for non-precision), and the missed approach icons.",
      "**TCH** (threshold crossing height) and glideslope/glidepath angle, plus the timing table (FAF to MAP by groundspeed) where timing is authorized."
    ] },
    { h: "4. Minimums" },
    { table: { head: ["Category", "Speed basis (97.3)", "Typical aircraft"], rows: [
      ["A", "up to 90 kt", "C172S (1.3 x 40 = 52), PA-44 (1.3 x 55 = 72)"],
      ["B", "91-120 kt", "Light turboprops, some light jets"],
      ["C", "121-140 kt", "Most airliners"],
      ["D", "141-165 kt", "Heavier jets"],
      ["E", "above 165 kt", "Military"]
    ] } },
    { p: "The category is based on **Vref**, or if none is specified, **1.3 Vso at maximum certificated landing weight**. If you fly the final or the circle faster than your category speed, use the **next higher category's minimums**. Each line shows the DA or MDA, the visibility (statute miles, or RVR in hundreds of feet, e.g. 'RVR 24'), and the **HAT** (height above touchdown, straight-in) or **HAA** (height above airport, circling) in small type; the military ceiling-visibility pair in parentheses is not for civil use. Straight-in minimums apply only if the final approach course is within 30 degrees of runway alignment and the descent gradient is normal; otherwise the procedure carries only circling minimums. Circling minimums are shown by category; plates with the **inverse 'C'** symbol use the expanded 2013 circling radii (which are larger and altitude-dependent), and circling may be prohibited in sectors noted in the briefing strip." },
    { h: "5. Airport sketch and lighting" },
    { ul: [
      "Runway layout, dimensions, lighting, displaced thresholds, and the **approach light system icon**: an **inverse 'A' with a number** identifies the system (ALSF-1, ALSF-2, SSALR, MALSR, MALSF, ODALS and so on; the number keys to the approach lighting legend in the TPP front matter), a **dot** on the icon means sequenced flashers, and a negative (reversed) symbol means pilot-controlled lighting.",
      "Whether the approach lights have **red terminating or side-row bars** (ALSF-1/ALSF-2) determines whether you can descend below 100 ft above TDZE on the lights alone (91.175(c)(3)(i)).",
      "Airport diagram pages for larger airports follow in the TPP; the **inoperative components table** is at the front of the TPP volume, as are the takeoff/alternate minimums pages."
    ] },
    { h: "A briefing that follows the plate" },
    { ol: [
      "Name and date of the procedure; navaid and course set; weather vs minimums vs category.",
      "Notes: equipment, temperature, T/A symbols, circling restrictions.",
      "Missed approach: first two actions and the holding fix.",
      "Frequencies loaded.",
      "Plan view: how I get from here to the FAF (vectors, IAF, PT or NoPT), MSA.",
      "Profile: FAF altitude, stepdowns, DA/MDA, VDP, MAP identification, timing.",
      "Minimums for my category and the inop components adjustments.",
      "Runway: length, lighting, approach light type, expected exit."
    ] },
    { h: "Check yourself" },
    { ul: [
      "What do the 'T' and 'A' triangles mean and where do you go to read the details?",
      "Which symbol marks the FAF on a VOR approach, and where is the FAF on an ILS?",
      "What does the MSA give you and what does it not give you?",
      "Your Seminole circles at 95 kt. Which category minimums apply?",
      "Where on the plate do you find whether the ALS has red bars, and why does that matter?"
    ] }
  ]
},
{
  id: "charts-enroute",
  topic: "charts",
  title: "Enroute chart altitudes and symbols",
  minutes: 7,
  refs: ["FAA Chart User's Guide (IFR Enroute)", "AIM 5-3-4", "AIM 5-3-5", "AIM 5-3-6", "AIM 5-3-2", "14 CFR 91.177"],
  tags: ["ipc", "ira", "kt"],
  quiz: ["charts-mcq-006", "charts-mcq-007", "charts-mcq-008", "charts-mcq-009", "charts-mcq-010", "charts-card-006", "ifr-mcq-028", "ifr-mcq-029", "ifr-card-010"],
  keywords: ["enroute chart", "MEA", "MOCA", "MRA", "MCA", "MAA", "COP", "changeover", "T-route", "victor airway", "reporting point", "MEA gap"],
  body: [
    { h: "Why it matters" },
    { p: "The IFR low-altitude enroute chart is dense and your eye has to re-learn where each number lives. Everything on it answers one of three questions: how low can I go, how do I know where I am, and who do I talk to. This lesson rebuilds the legend in that order." },
    { h: "Routes" },
    { ul: [
      "**Victor airways** (V-routes) are VOR-based, from **1,200 ft AGL** (or higher where designated) up to but not including **18,000 ft MSL**. Protected width is 4 NM either side of centerline. Shown as a black line with the V number in a box.",
      "**T-routes** are RNAV (GPS) low-altitude routes with the same altitude band, shown in blue with a 'T' number; they need an IFR-approved GPS/WAAS receiver.",
      "**Jet routes** (J) and **Q-routes** live on the high-altitude chart from FL180 to FL450.",
      "**Mileage**: segment distances between fixes; the **total mileage between navaids** appears in a box; an **'x'** is a mileage breakdown point with no fix name.",
      "**Changeover point (COP)**: a staggered-line symbol with the mileage to each VOR; change frequency there instead of midway. Without a COP symbol, change over midway on a straight segment, or at the bend on a dogleg (AIM 5-3-6).",
      "**MEA gap**: 'MEA GAP' printed along a segment means navigation signal coverage is interrupted; the MEA still provides obstacle clearance."
    ] },
    { h: "Altitudes on the segment" },
    { table: { head: ["What you see", "Meaning"], rows: [
      ["5000", "MEA: obstacle clearance (1,000 ft, or 2,000 ft in designated mountainous terrain) plus navaid reception for the segment"],
      ["5000 with an arrow", "Directional MEA: applies only in the arrow's direction; the other direction has its own value"],
      ["*3400", "MOCA: same obstacle clearance; VOR reception assured only within 22 NM of the facility"],
      ["5000G", "GNSS (RNAV) MEA for GPS-equipped aircraft, usually lower than the VOR MEA"],
      ["MAA-15000", "Maximum authorized altitude on that segment"],
      ["MRA flag at a fix", "Minimum reception altitude: the lowest altitude at which the cross radial that defines the fix can be received"],
      ["MCA flag: V210 10900 SW", "Minimum crossing altitude: cross the fix at 10,900 when continuing southwest on V210; begin the climb before the fix"],
      ["Large grid number, e.g. 12 5", "OROCA for the quadrangle (12,500): 1,000 ft (2,000 ft mountainous) above the highest obstacle; no signal or ATC guarantee"]
    ] } },
    { callout: "91.177 lets you fly below the MEA down to the MOCA only within 22 NM of the VOR, and in RNAV-equipped aircraft ATC may assign the MOCA or a GNSS MEA. Off-airway, 91.177(a)(2) applies: 2,000 ft above the highest obstacle within 4 NM in designated mountainous areas, 1,000 ft elsewhere.", kind: "warn" },
    { h: "Fixes and reporting points" },
    { ul: [
      "Intersections are five-letter names; a **solid triangle** is a **compulsory reporting point**, an **open triangle** non-compulsory. Position reports are required only when **not in radar contact** (AIM 5-3-2), then at every compulsory point, or at the points ATC specifies when you are on a direct route.",
      "Fix formation: arrows from a VOR indicate which radial defines the fix; a **'D'** or DME arrow shows that DME from that facility identifies the fix; a mileage number beside the arrow gives the DME distance. A fix named on a T-route may be an RNAV waypoint only.",
      "**Waypoints** on T-routes and RNAV fixes are the same four-point star symbol used on plates."
    ] },
    { h: "Navaid boxes" },
    { ul: [
      "VOR, VOR/DME, VORTAC, and TACAN each have a distinct symbol; the frequency box shows identifier, frequency, Morse code and, after the ident, the class in parentheses: **(T)**, **(L)**, **(H)** or the newer **(VL)** / **(VH)**.",
      "A navaid box with a **shadow** indicates a navaid with FSS or voice capability; an **underlined** frequency means no voice; a frequency box with a line to the navaid (remote communications outlet) gives the FSS frequency you can use through that site.",
      "ARTCC sector frequencies appear in **postage-stamp boxes** with the center name and the remote site; use the one nearest your position when checking in after a lost-comm or an uncontrolled-airport departure."
    ] },
    { h: "Airports and airspace" },
    { ul: [
      "**Blue or green** airport symbols have a published instrument approach (or radar minima); **brown** airports have none. Airport data block gives elevation, longest runway length in hundreds of feet, lighting, and whether weather (ASOS/AWOS/ATIS) is available with the frequency.",
      "Class B and C are outlined; special use airspace is labeled with altitudes and hours, with details in the chart panel; military training routes (IR/VR) are shown as thin lines with the route number.",
      "ARTCC boundaries are heavy serrated lines; the chart edge shows the adjoining chart number.",
      "**Date and cycle**: enroute charts are revised every **56 days** like the TPP."
    ] },
    { memo: { title: "MEA / MOCA / MRA / MCA / MAA", text: "MEA = Everything (obstacles + signal). MOCA = Obstacles, signal only within 22 NM. MRA = Reception for the fix. MCA = Crossing altitude before a higher MEA. MAA = Maximum." } },
    { h: "Check yourself" },
    { ul: [
      "You see *3400 under a segment whose MEA is 5000. When may you fly at 3400?",
      "How do you know where to switch VOR frequencies on a long segment with no COP?",
      "What does a solid triangle at a fix require of you, and when?",
      "What is a T-route and what equipment do you need?",
      "An airport symbol is brown. What does that tell you for alternate planning?"
    ] }
  ]
},
{
  id: "nav-vor-hsi-rmi",
  topic: "nav",
  title: "VOR, HSI and RMI essentials",
  minutes: 8,
  refs: ["AIM 1-1-3", "AIM 1-1-8", "14 CFR 91.171", "IFH Ch. 9 (Navigation Systems)", "IFH Ch. 5 (Flight Instruments)"],
  tags: ["ipc", "ira"],
  quiz: ["nav-mcq-001", "nav-mcq-002", "nav-mcq-003", "nav-mcq-004", "nav-mcq-015", "nav-card-001", "nav-oral-002", "nav-oral-004", "ifr-mcq-005", "ifr-mcq-006", "ifr-card-001"],
  keywords: ["VOR", "HSI", "RMI", "radial", "reverse sensing", "service volume", "VOR check", "91.171", "time to station", "VOR MON"],
  body: [
    { h: "Why it matters" },
    { p: "GPS has made VOR skills rusty for everyone, but the IPC still includes intercepting and tracking with 'navigation systems' plural, the VOR check is a regulation, and interviewers like the RMI question because it exposes whether you can picture your position. Restore the mental model first, then the numbers." },
    { h: "The mental model" },
    { ul: [
      "A VOR broadcasts 360 **radials** outbound from the station, referenced to **magnetic north at the station**. Your position is on exactly one radial; the radial is the **FROM** bearing; the **TO** bearing is its reciprocal.",
      "The CDI compares the OBS-selected course with the radial you are on. It knows nothing about your heading. **Full-scale deflection is 10 degrees; each dot is 2 degrees** (5 dots). On a localizer the same needle is about 4 times more sensitive (full scale roughly 2.5 degrees, about half a degree per dot).",
      "**Reverse sensing** happens with a conventional CDI whenever the selected course is more than 90 degrees from your heading (flying a radial with the reciprocal set, or a localizer back course with the front course not set). The fix is always the same: set the OBS to the course you are flying, or in the case of a back course set the **front course** on an HSI.",
      "The **cone of confusion** over the station causes the flag and needle to wander; use the TO/FROM flip, not the needle, to identify station passage.",
      "Always **identify** the station by Morse code; a navaid under maintenance radiates no ident or 'TEST', and the signal must not be used. VOR accuracy is on the order of **1 degree**; receiver tolerance is what 91.171 checks."
    ] },
    { h: "HSI" },
    { p: "An HSI is a CDI slaved to the heading indicator: the course arrow rotates with the compass card so the deviation bar always shows the course **pictorially** relative to your heading. Benefits: no reverse sensing as long as the course arrow is set to the course you intend to fly (for a localizer back course set the **front course** and the bar reads correctly), and intercepts are easier because the head of the course arrow shows where the course is relative to you. The TO/FROM indicator is a triangle near the center. With a slaved HSI, check the slaving meter and the compass for precession; with a G1000, the HSI is driven by the AHRS and magnetometer." },
    { h: "RMI" },
    { memo: { title: "Head to, tail from", text: "RMI needle HEAD = magnetic bearing TO the station. Needle TAIL = the radial you are on (bearing FROM)." } },
    { p: "The RMI card is a heading indicator; the needle(s) point at the station regardless of heading. To fly direct, turn until the head is under the lubber line and keep it there with wind correction. Example: heading 090, needle head on 240: you are on the **060 radial**, bearing to the station 240, and the station is 150 degrees to your right. The RMI makes DME arcs and bearing intercepts easy: on an arc, keep the needle on the wingtip reference (90 degrees off the nose) and the arc flies itself." },
    { h: "Time and distance from a station (wing-tip bearing change)" },
    { ul: [
      "Turn so the station is on the wingtip (90 degrees), note the time to change bearing by a few degrees.",
      "**Minutes to station = 60 x minutes flown / degrees of bearing change.**",
      "**Distance NM = TAS (or GS) x minutes flown / degrees of bearing change.**",
      "Example: 10 degrees of change in 2 minutes at 120 kt: 12 minutes and 24 NM to the station.",
      "The **1-in-60 rule**: 1 degree off course is about 1 NM off at 60 NM; 2 NM off at 30 NM is 4 degrees, so double it (8 degrees) to get back by the next 30 NM."
    ] },
    { h: "Service volumes (AIM 1-1-8)" },
    { table: { head: ["Class", "Range and altitude band (above the facility)"], rows: [
      ["T (Terminal)", "25 NM, 1,000 to 12,000 ft"],
      ["L (Low)", "40 NM, 1,000 to 18,000 ft"],
      ["H (High)", "40 NM 1,000-14,500; 100 NM 14,500-18,000; 130 NM 18,000-45,000; 100 NM 45,000-60,000"],
      ["VL (new low)", "40 NM 1,000-5,000; 70 NM 5,000-18,000"],
      ["VH (new high)", "40 NM 1,000-5,000; 70 NM 5,000-14,500; then as H above 14,500"]
    ] } },
    { p: "Published airways and routes are flight-checked and may be used beyond the standard service volume; off-route random navigation may not. The FAA **VOR Minimum Operational Network (MON)** is decommissioning roughly a third of VORs; the surviving network keeps an aircraft at 5,000 ft AGL within **100 NM** of a 'MON airport' with an ILS or VOR approach that needs no GPS, DME, ADF or radar (AIM 1-1-3). Expect 'VOR decommissioned' NOTAMs and plan GPS outages with that in mind." },
    { h: "The VOR check (91.171) for IFR" },
    { ul: [
      "Within the preceding **30 days**: **VOT** plus or minus **4 degrees** (CDI centered reads **360 FROM / 180 TO**; an RMI points to 180 regardless of position); FAA-designated **ground checkpoint** plus or minus **4 degrees**; **airborne checkpoint** plus or minus **6 degrees**; a prominent landmark on a published radial more than **20 NM** away at reasonably low altitude, plus or minus **6 degrees**; or **dual VOR** cross-check, **4 degrees** between the two indications.",
      "Log the **date, place, bearing error, and signature** (SLED: Signature, Location, Error, Date).",
      "A VOT or checkpoint list is in the Chart Supplement."
    ] },
    { h: "Check yourself" },
    { ul: [
      "Define a radial and state what the CDI compares and what it ignores.",
      "RMI needle on 300 with a heading of 120: what radial, and where is the station relative to the nose?",
      "Why does an HSI not reverse-sense on a back course, and what must you set?",
      "List all 91.171 check methods with their tolerances and the logging items.",
      "What is the standard service volume of an (L) VOR, and when may you use it beyond that?"
    ] }
  ]
},
{
  id: "nav-gps-waas",
  topic: "nav",
  title: "GPS/WAAS: modes, CDI scaling, RAIM and minima lines",
  minutes: 9,
  refs: ["AIM 1-1-17", "AIM 1-1-18", "AIM 5-4-5", "AIM 7-3-3 (cold temperature)", "AC 90-107", "14 CFR 91.169"],
  tags: ["ira", "ipc"],
  quiz: ["nav-mcq-009", "nav-mcq-010", "nav-mcq-011", "nav-mcq-012", "nav-card-003", "nav-card-004", "nav-card-006", "nav-scn-001", "nav-scn-002", "nav-oral-001", "nav-oral-003", "ifr-mcq-020"],
  keywords: ["GPS", "WAAS", "RAIM", "FDE", "LPV", "LNAV", "LNAV/VNAV", "LP", "CDI scaling", "TSO-C129", "TSO-C145", "TSO-C146", "LOI", "database"],
  body: [
    { h: "Why it matters" },
    { p: "Every approach you fly in the 172S with a G1000 or a GTN-equipped Seminole is a WAAS approach, and the examiner's questions are about the parts the box does silently: what it is doing to the CDI, what 'LPV' means for the regulations, and what to do when the integrity annunciator lights. Learn the receiver's behavior first, then the alternate rules that depend on it." },
    { h: "Equipment classes" },
    { table: { head: ["TSO", "Type", "Integrity", "Approaches"], rows: [
      ["TSO-C129", "Non-WAAS GPS", "RAIM (some with FDE)", "LNAV only; RAIM prediction required for IFR planning"],
      ["TSO-C196", "Non-WAAS GPS with FDE", "RAIM + FDE", "LNAV only"],
      ["TSO-C145/C146", "WAAS (SBAS)", "WAAS integrity (HPL/VPL), FDE", "LNAV, LNAV/VNAV, LP, LPV; no RAIM check needed unless WAAS is NOTAMed unavailable"]
    ] } },
    { h: "RAIM and FDE" },
    { ul: [
      "**RAIM** needs **5 satellites** (or 4 plus baro-aiding) to detect a bad satellite; **FDE** needs **6** (or 5 plus baro) to detect **and exclude** it and keep navigating.",
      "Non-WAAS: a **RAIM prediction** for the ETA at the destination (and alternate) is required before an IFR flight that depends on GPS; if RAIM is predicted unavailable, plan another approach or delay. GPS NOTAMs (including 'GPS interference testing' areas) are part of the briefing.",
      "WAAS: the receiver computes its own protection levels; no separate RAIM prediction unless WAAS is NOTAMed 'unreliable' or unavailable. Then plan as a non-WAAS unit.",
      "**LOI** (loss of integrity) or a **RAIM flag**: the receiver cannot guarantee the position. Before the FAWP: do not descend below the current altitude and do not complete the approach; continue to the MAP via the FAWP, fly the missed, and tell ATC. After the FAWP: **execute the missed approach immediately**. A WAAS **downgrade** (LPV to LNAV) is different from an integrity loss: if it happens before the FAWP, continue on the LNAV line; the receiver shows which line it can support."
    ] },
    { h: "CDI scaling and modes (what the box is doing)" },
    { table: { head: ["Phase", "Full-scale deflection", "Annunciation / where it changes"], rows: [
      ["Enroute", "2.0 NM (WAAS); 5.0 NM for older TSO-C129 units", "ENR; more than 30 NM from departure and destination"],
      ["Terminal", "1.0 NM", "TERM; within 30 NM of the departure or destination airport"],
      ["Approach, LNAV", "Ramps from 1.0 NM to 0.3 NM over the 2 NM before the FAWP", "LNAV (or LNAV+V with advisory glidepath); must be active by 2 NM before the FAWP or do not descend on the final"],
      ["Approach, LPV / LP", "Angular, like a localizer, converging toward the runway", "LPV / LP; vertical guidance for LPV, none for LP"],
      ["Approach, LNAV/VNAV", "Lateral angular like LPV on WAAS units such as the G1000 and GTN (the angle comes from the database); vertical from WAAS or baro-VNAV", "L/VNAV"],
      ["Missed", "0.3 NM until the first missed waypoint, then 1.0 NM terminal", "Sequencing resumes after the MAP when you activate the missed (or press SUSP/OBS on older units)"]
    ] } },
    { callout: "'+V' is **advisory** vertical guidance on an LNAV or LP approach. Fly it, but your minimum is still the **MDA**, you must honor the stepdown fixes, and you may not treat it as a DA.", kind: "warn" },
    { h: "Minima lines on an RNAV (GPS) plate" },
    { ul: [
      "**LPV**: WAAS lateral and vertical, flown to a **DA**, as low as **200 ft HAT**; technically an **APV** (approach with vertical guidance), not a 'precision approach', but flown exactly like an ILS. Requires WAAS.",
      "**LNAV/VNAV**: lateral GPS with vertical from **WAAS or baro-VNAV**; flown to a **DA**. If the vertical source is baro-VNAV, the chart **temperature limits** apply (outside the range LNAV/VNAV is NA); WAAS vertical is unaffected by temperature.",
      "**LP**: WAAS lateral only, angular, flown to an **MDA**; published where terrain or obstacles prevent an LPV. Requires WAAS.",
      "**LNAV**: lateral only, linear 0.3 NM, **MDA**. Any approved GPS.",
      "**Circling**: as published, any GPS.",
      "The receiver annunciates the **highest** service level it can support for that approach based on the integrity it has at the time; if it says LNAV on an LPV plate, fly the LNAV line."
    ] },
    { h: "Alternate planning depends on the box (AIM 1-1-17, 1-1-18)" },
    { ul: [
      "**Non-WAAS**: GPS-based approach at the **destination or the alternate, not both**; the other airport needs a conventional approach you can fly.",
      "**WAAS**: GPS approaches may be planned at **both**, but at the alternate plan on the **LNAV or circling MDA**, or LNAV/VNAV **only with baro-VNAV**; never LPV. Standard alternate minimum for that planning is therefore the non-precision **800-2**. On arrival, use whatever service level the receiver gives you.",
      "An 'A NA' on the alternate's RNAV plate removes it from consideration as a GPS alternate even for WAAS users; the FAA has been removing that symbol from procedures that WAAS users may plan on."
    ] },
    { h: "Database and other legalities" },
    { ul: [
      "The navigation database must be **current for approaches**; with an expired database you may fly enroute and terminal only if you **verify each waypoint** against current charts, and approaches are not authorized unless the procedure is verified unchanged and the operator's approval (ops specs) allows it. Part 91 practice: keep it current.",
      "GPS approaches must be **retrieved from the database by name**; you may not build one from user waypoints.",
      "An IFR GPS installation requires an **AFM supplement**; the 'VFR only' GPS or a tablet is not a navigation source for IFR.",
      "Cold temperature airports (snowflake with a Celsius limit): at or below that temperature, correct the altitudes in the segments the FAA CTA list names (intermediate, final, and/or missed). The DA or MDA is **corrected** on every approach type; the ILS glideslope and the WAAS glidepath are unaffected by cold and simply deliver you to the corrected DA. Baro-VNAV temperature limits on the plate are a separate restriction and do not apply to WAAS vertical guidance (AIM 7-3-3)."
    ] },
    { memo: { title: "LPV / LP / LNAV", text: "LPV = Localizer Performance with Vertical guidance (DA). LP = Localizer Performance, no vertical (MDA). LNAV = Lateral NAVigation (MDA). L/VNAV = DA from WAAS or baro." } },
    { h: "Check yourself" },
    { ul: [
      "How many satellites for RAIM and for FDE, and which equipment needs a RAIM prediction?",
      "At what point must approach mode be active, and what do you do if it is not?",
      "What does '+V' allow and not allow?",
      "WAAS airplane, alternate has an LPV with DA 250 ft and no other approach. What forecast do you need there?",
      "Which minima lines require WAAS, and which are flown to a DA?"
    ] }
  ]
},
{
  id: "ops-135-duty-pic",
  topic: "ops",
  title: "Part 135 flight/duty/rest and PIC minimums",
  minutes: 8,
  refs: ["14 CFR 135.267", "14 CFR 135.265", "14 CFR 135.263", "14 CFR 135.243", "14 CFR 135.244; 135.245; 135.247", "14 CFR 135.293; 135.297; 135.299", "14 CFR 135.225(e)"],
  tags: ["part135"],
  quiz: ["ops-mcq-005", "ops-mcq-006", "ops-mcq-007", "ops-mcq-008", "ops-mcq-009", "ops-mcq-010", "ops-scn-004", "ops-card-002", "ops-oral-002", "ops-oral-007"],
  keywords: ["135.267", "135.265", "135.243", "duty", "rest", "flight time", "PIC minimums", "1200 hours", "competency check", "line check", "135.297"],
  body: [
    { h: "Why it matters" },
    { p: "A charter interview will ask two things from this lesson: whether you meet 135.243 today, and whether you understand the flight, duty and rest limits well enough to refuse an illegal assignment. Both are numbers questions. The subtle part is that Part 135 regulates **flight time** and **rest**, and 'duty' only appears inside one paragraph of 135.267." },
    { h: "PIC eligibility (135.243)" },
    { table: { head: ["Operation", "Certificate", "Total", "XC", "Night", "Instrument"], rows: [
      ["(a) Turbojet, 10+ passenger seats, or multiengine commuter (scheduled) ops", "ATP", "ATP minimums", "", "", ""],
      ["(b) VFR passenger ops", "Commercial with category/class (and type if required) **plus an instrument rating for airplanes**", "500", "100", "25", ""],
      ["(c) IFR passenger ops", "Commercial with instrument rating (or ATP)", "1,200", "500", "100", "75 (at least 50 in actual flight)"]
    ] } },
    { callout: "The instrument rating is required even for a **VFR-only** 135 airplane PIC (135.243(b)(3)). And the 1,200-hour IFR minimum is where most new commercial pilots get stuck; the 'CFI to 135' path exists because the hours are the gate, not the certificate.", kind: "tip" },
    { h: "Before you can carry passengers as PIC" },
    { ul: [
      "**135.244 operating experience**: 10 hours single-engine, **15 hours multiengine reciprocating**, 20 hours multiengine turbine, 25 hours turbojet, flying as PIC under the supervision of a check pilot or qualified PIC; may be reduced up to 50% by substituting one additional takeoff and landing for each hour.",
      "**135.247 recent experience**: 3 takeoffs and landings in the preceding 90 days in the type (category and class), at night to a full stop; this is the Part 135 version of 61.57.",
      "**135.293** written or oral test and competency flight check (12 calendar months); **135.297** instrument proficiency check for IFR PICs (**6 calendar months**); **135.299** line check on a representative route (12 calendar months). The 135.297 check satisfies 61.57(c) currency.",
      "**135.225(e)**: a PIC of a **turbine-powered airplane** with fewer than **100 hours PIC in that type** adds 100 ft and 1/2 SM to published approach minimums, not to exceed the airport's alternate minimums (the 'high-minimums captain' rule). It does not apply to a piston Seminole, but expect the question.",
      "SIC (135.245): commercial with category/class ratings and an instrument rating; the SIC does not need 135.243 hours."
    ] },
    { h: "Unscheduled (on-demand) one- and two-pilot crews: 135.267" },
    { table: { head: ["Paragraph", "Limit"], rows: [
      ["(a) cumulative", "500 hr per calendar quarter; 800 hr in any two consecutive quarters; 1,400 hr per calendar year"],
      ["(b) daily", "In any 24 consecutive hours: 8 hr flight time (1 pilot) or 10 hr (2 pilots), including other commercial flying"],
      ["(c) the 14-hour duty option", "Flight time may be scheduled beyond (b) only within a regularly assigned duty period of no more than 14 hours, immediately preceded and followed by at least 10 consecutive hours of rest, with the 8/10-hour flight limit still applying"],
      ["(d) rest", "Each assignment must provide at least 10 consecutive hours of rest in the 24-hour period that precedes the planned completion time of the assignment"],
      ["(e) overage beyond your control", "Rest before the next assignment: 11 hr if exceeded by 30 min or less; 12 hr if more than 30 to 60 min; 16 hr if more than 60 min"],
      ["(f) days off", "At least 13 rest periods of at least 24 consecutive hours each per calendar quarter"]
    ] } },
    { callout: "There is **no** reduced-rest provision in 135.267. The 'reduce to 8 hours if followed by 10' language is in **135.265(c)** for scheduled operations (and in 135.273 for flight attendants). A common interview error is to import it into on-demand ops.", kind: "warn" },
    { p: "Two more trigger words: **135.263** says a certificate holder may not assign and a crewmember may not accept an assignment if it would not comply with these limits, and 'rest' means a continuous period **free of all restraint**, determined prospectively; a phone from scheduling that requires you to answer is not rest. **Flight time** is block time (first movement under own power for flight to the stop at the end). Weather delays that push you past 8 hours are legal only if the flight was scheduled within the limits and the overage was beyond control (135.267(e) then sets the extra rest)." },
    { h: "Scheduled (commuter) operations: 135.265" },
    { ul: [
      "**1,200 hr per calendar year**, **120 hr per calendar month**, **34 hr in any 7 consecutive days**; 8 hr between required rest periods (two pilots) or in any 24 consecutive hours (one pilot).",
      "Scheduled rest between duty periods: **9 hr** for less than 8 hr scheduled flight time, **10 hr** for 8 to less than 9, **11 hr** for 9 or more; each may be reduced (to 8, 8, or 9 hr) only if a longer compensatory rest (10, 11, or 12 hr) begins within 24 hours.",
      "**24 consecutive hours off in any 7 consecutive days** (135.265(d))."
    ] },
    { memo: { title: "135.267 in one line", text: "8 single / 10 dual flight hours in 24; 14-hour duty; 10 hours rest before completion; 500 / 800 / 1,400 cumulative; 13 days off per quarter; 11-12-16 after an overage." } },
    { h: "Worked example" },
    { p: "Single-pilot on-demand: you came on duty at 0600 after 11 hours of rest, flew 6.5 hours, and the last leg home is 1.8 hours with a 1945 planned block-in. Flight time 8.3 exceeds the 8-hour limit: the leg cannot be **assigned**. If a weather hold during the last leg had pushed an otherwise legal 7.9-hour day to 8.4 (24 minutes over), you could land (beyond your control) and then need **11 hours** of rest before the next assignment; 8.6 or more (over by more than 30 minutes) would make it 12 hours, and more than an hour over makes it 16. Separately, if the planned completion is 1945, the 24 hours preceding it began at 1945 the previous day and must contain 10 consecutive hours of rest: 1900 to 0600 satisfies that." },
    { h: "Check yourself" },
    { ul: [
      "Recite 135.243(c) for an IFR PIC, then (b) for VFR, including the rating gotcha.",
      "How much operating experience does 135.244 require in a PA-44, and how can it be reduced?",
      "Name the three recurring 135 checks and their intervals; which one covers 61.57(c)?",
      "Two-pilot on-demand crew: flight time limit in 24 hours, maximum duty period, and required rest?",
      "You exceed 8 hours by 50 minutes due to a diversion. What rest is required next?"
    ] }
  ]
},
{
  id: "ops-part-117",
  topic: "ops",
  title: "Part 117 for airline crews",
  minutes: 8,
  refs: ["14 CFR 117.3", "14 CFR 117.5", "14 CFR 117.11 and Table A", "14 CFR 117.13 and Table B", "14 CFR 117.19", "14 CFR 117.23", "14 CFR 117.25", "14 CFR 117.27"],
  tags: ["atp"],
  quiz: ["ops-mcq-025", "ops-mcq-026", "ops-mcq-027", "ops-scn-001", "ops-scn-003", "ops-card-006", "ops-card-007", "ops-oral-003"],
  keywords: ["Part 117", "FDP", "flight duty period", "Table A", "Table B", "rest", "acclimated", "WOCL", "fatigue", "extension", "cumulative"],
  body: [
    { h: "Why it matters" },
    { p: "Part 117 (in force since 2014) governs Part 121 passenger crews and most interviews ask at least one question about it, usually a Table B lookup or 'what do you do if you are legal but fatigued.' The structure is simple: three clocks (flight time, flight duty period, cumulative limits) and one floor (rest), all measured in **acclimated** local time." },
    { h: "Definitions that drive everything (117.3)" },
    { ul: [
      "**Flight duty period (FDP)**: begins when you **report** for duty with the intention of conducting a flight and ends when the aircraft is **parked after the last flight** with no intention of further movement; it includes deadheading before a flight, training in an aircraft, and airport standby.",
      "**Flight time**: block to block.",
      "**Acclimated**: in a theater for **72 hours** or given **36 consecutive hours free from duty**. **Theater**: departure and arrival points within **60 degrees of longitude**. An unacclimated crewmember's Table B limit is reduced by **30 minutes**.",
      "**Window of circadian low (WOCL)**: **0200 to 0559** home-base time. **Physiological night's rest**: 10 hours of rest encompassing **0100 to 0700** at home base.",
      "**Rest period**: continuous, determined **prospectively**, free from all restraint; a 'suitable accommodation' is a room with a bed, dark, quiet, temperature-controlled.",
      "**Unforeseen operational circumstance**: an unplanned event of insufficient duration to allow schedule adjustments (unforecast weather, equipment malfunction, ATC delay)."
    ] },
    { h: "Flight time (117.11, Table A)" },
    { table: { head: ["Acclimated report time", "Unaugmented (2 pilots)"], rows: [
      ["0000-0459", "8 hours"],
      ["0500-1959", "9 hours"],
      ["2000-2359", "8 hours"]
    ] } },
    { p: "Augmented: **13 hours** with 3 pilots, **17 hours** with 4. Flight time may not be **scheduled** beyond the table; it may be **exceeded** only if unforeseen circumstances arise after takeoff and only to the extent necessary to land safely, with a report to the FAA within 10 days (117.11(b),(c))." },
    { h: "Flight duty period (117.13, Table B)" },
    { table: { head: ["Report time", "1-2 segments", "3", "4", "5", "6", "7+"], rows: [
      ["0000-0359", "9", "9", "9", "9", "9", "9"],
      ["0400-0459", "10", "10", "10", "9", "9", "9"],
      ["0500-0559", "12", "12", "12", "11.5", "11", "10.5"],
      ["0600-0659", "13", "12", "12", "11.5", "11", "10.5"],
      ["0700-1159", "14", "13", "13", "12.5", "12", "11.5"],
      ["1200-1259", "13", "13", "13", "12.5", "12", "11.5"],
      ["1300-1659", "12", "12", "12", "11.5", "11", "10.5"],
      ["1700-2159", "12", "11", "11", "10", "9", "9"],
      ["2200-2259", "11", "10", "10", "9", "9", "9"],
      ["2300-2359", "10", "10", "9", "9", "9", "9"]
    ] } },
    { p: "Read it as: the best you can do is **14 hours** for a mid-morning report with one or two legs; early-morning and late-evening reports and more segments shrink it toward 9. Augmented FDPs use Table C (117.17) and depend on rest-facility class and number of pilots, with no more than 3 segments. **Split duty** (117.15, unaugmented only): a scheduled rest opportunity of at least **3 hours** in a suitable accommodation, between **2200 and 0500 local**, is excluded from the FDP, but the FDP plus the rest may not exceed **14 hours** in total." },
    { h: "Extensions (117.19)" },
    { ul: [
      "Unaugmented FDP may be extended up to **2 hours** for unforeseen circumstances; an extension of more than 30 minutes requires concurrence of the **PIC and the certificate holder**, is allowed only **once** before the next 30-hour rest, and must be reported to the FAA within **10 days** if it exceeds 30 minutes.",
      "Augmented FDPs may be extended up to 3 hours under the same concurrence rule.",
      "If the extension would exceed the limit by more than that, the flight may not depart; after takeoff the flight may continue to a safe landing."
    ] },
    { h: "Cumulative limits (117.23)" },
    { memo: { title: "100 / 1,000 / 60 / 190", text: "Flight time: 100 hr in any 672 consecutive hours, 1,000 hr in any 365 consecutive days. FDP: 60 hr in any 168 consecutive hours, 190 hr in any 672 consecutive hours." } },
    { h: "Rest (117.25) and consecutive nights (117.27)" },
    { ul: [
      "Before any FDP: **10 consecutive hours** of rest with at least **8 hours of uninterrupted sleep opportunity**; the certificate holder must extend the rest if travel to the hotel eats into the 8 hours.",
      "**30 consecutive hours** free from all duty in any **168 consecutive hours** (the weekly day off).",
      "After a trip of more than 168 hours away from base in a theater more than 60 degrees of longitude away: **56 consecutive hours** of rest at home base encompassing **three physiological nights**.",
      "Consecutive nights: no more than **3 consecutive FDPs** that infringe on the WOCL, or up to **5** if each includes a mid-duty rest opportunity of at least **2 hours** in a suitable accommodation.",
      "Reserve (117.21): a short-call reserve availability period may not exceed **14 hours**, and RAP plus FDP together may not exceed the lesser of the Table B FDP plus 4 hours or **16 hours** (unaugmented); on long-call reserve you must get **12 hours' notice** if the assigned FDP begins before and runs into the WOCL. Airport standby counts entirely as FDP."
    ] },
    { h: "Fitness for duty (117.5): the interview answer" },
    { p: "No certificate holder may assign, and no crewmember may accept, an FDP if the crewmember reports **too fatigued to safely perform duties**. You must affirmatively state you are fit when you report (most carriers do this on sign-in), the airline must have a non-punitive fatigue reporting system and a **fatigue risk management plan** (117.7/117.9), and a fatigue call is not something the company may discipline. The expected answer: 'Legal does not mean safe. I would assess sleep in the last 24 and 48 hours, time awake, and the WOCL exposure, and if I am not fit I call in fatigued, document it, and the FRMP handles the rest.'" },
    { h: "Check yourself" },
    { ul: [
      "Report at 0545, 3 legs, acclimated: maximum FDP and maximum flight time?",
      "What makes you 'acclimated', and what happens to your limits if you are not?",
      "State the four cumulative limits.",
      "How long may an unaugmented FDP be extended, who must agree, and how often?",
      "What are the pre-FDP rest requirement and the weekly rest requirement?"
    ] }
  ]
},
{
  id: "ops-atp-path",
  topic: "ops",
  title: "ATP eligibility, R-ATP, ATP CTP and the Part 121 path",
  minutes: 8,
  refs: ["14 CFR 61.153", "14 CFR 61.156", "14 CFR 61.159", "14 CFR 61.160", "14 CFR 61.39", "14 CFR 121.436", "14 CFR 121.434", "14 CFR 121.383(c)"],
  tags: ["atp"],
  quiz: ["ops-mcq-022", "ops-mcq-023", "ops-mcq-024", "ops-card-008", "ops-oral-006"],
  keywords: ["ATP", "R-ATP", "ATP CTP", "1500 hours", "61.159", "61.160", "121.436", "type rating", "age 65", "consolidation"],
  body: [
    { h: "Why it matters" },
    { p: "Since the 2013 first officer qualification rule, every Part 121 seat needs an ATP or a restricted ATP (R-ATP) plus a type rating. If the airline path is in play, you need to know the hour gates, what counts toward them, what the ATP CTP is, and what happens after you are hired. Interviewers ask about 61.159 and 61.160 in detail because they want to know you have audited your own logbook." },
    { h: "Eligibility (61.153)" },
    { ul: [
      "Age **23** (unrestricted) or **21** (R-ATP); good moral character; read, speak, write and understand English.",
      "Hold at least a **commercial certificate with an instrument rating** (or meet the military/foreign equivalents).",
      "Pass the ATP knowledge test; for the **airplane multiengine** test you must first present an **ATP CTP graduation certificate** (61.156). The ATP airplane multiengine knowledge test is valid for **60 calendar months** (61.39(a)(1)(ii)), unlike the 24 months of other tests.",
      "Meet the aeronautical experience of 61.159 (or 61.160), then pass the practical test (61.157), which is normally combined with a type rating in a Level C/D simulator at an airline or Part 142 center."
    ] },
    { h: "Aeronautical experience: 61.159(a)" },
    { table: { head: ["Requirement", "Hours", "Notes"], rows: [
      ["Total time as a pilot", "1,500", "Up to 100 hours may be FFS/FTD time in an approved 121/135/141/142 course (61.159(a)(6))"],
      ["Cross-country", "500", "For ATP, a flight more than 50 NM from the departure point counts even without a landing (61.1 definition for ATP)"],
      ["Night", "100", "After 20 night takeoffs/landings to a full stop, each additional one may count as 1 hour, up to 25 hours (61.159(b))"],
      ["Instrument", "75", "Actual or simulated; FFS/FTD limited to 25 hours, or 50 hours in a Part 142 course"],
      ["In class (multiengine for AMEL)", "50", "Up to 25 in an FFS in an approved course"],
      ["PIC, or SIC performing PIC duties under supervision", "250", "Including 100 XC and 25 night"]
    ] } },
    { p: "Two logbook gotchas: the **cross-country** definition for the ATP is the 'more than 50 NM, no landing required' version, so straight-out repositioning legs count even if you never landed away; and **safety-pilot** PIC time counts as PIC time only if you were the acting PIC by agreement. Airlines audit these columns; keep the arithmetic defensible." },
    { h: "R-ATP (61.160): fewer hours, restricted privileges" },
    { table: { head: ["Path", "Total time", "Other conditions"], rows: [
      ["Military pilot (61.160(a))", "750", "Graduate of a military undergraduate pilot training program; not removed from flying status"],
      ["Bachelor's degree with aviation major (61.160(b))", "1,000", "FAA-authorized institution (61.169 LOA), 60 semester credit hours of aviation coursework, commercial and instrument done under Part 141 through the school"],
      ["Associate's degree with aviation major (61.160(c))", "1,250", "30 semester credit hours of aviation coursework, same Part 141 conditions"],
      ["Bachelor's with 30-59 aviation credit hours (61.160(d))", "1,250", "Otherwise as (b)"],
      ["Age 21-22 with full hours (61.160(f))", "1,500", "Standard experience; restricted only by age"]
    ] } },
    { ul: [
      "All R-ATP paths need only **200 hours** cross-country instead of 500 (61.160(e),(f)); everything else in 61.159 still applies.",
      "Privileges: the R-ATP lets you serve as **SIC** in Part 121; you may not be a 121 PIC until the restriction is removed, which happens on application once you meet 61.159 (1,500 hours, 500 XC) and are 23.",
      "You cannot use R-ATP time credits twice: the 1,000-hour degree pilot still needs 100 night, 75 instrument, 250 PIC, and so on."
    ] },
    { h: "ATP CTP (61.156)" },
    { p: "A course, not a test: at least **30 hours of academics** (high-altitude aerodynamics and stall/upset, meteorology, air carrier operations, automation and navigation, CRM, leadership and professional development) plus at least **10 hours in FSTDs**: at least **6 hours in a Level C or higher full flight simulator** representing a multiengine turbine airplane of at least 40,000 lb, and the remainder in at least a **Level 4 FTD**. No airplane time, no checkride, and the certificate never expires. Most regionals and some universities run it; if you are self-funding, do it right before the knowledge test so the material is fresh." },
    { h: "Part 121 after you are hired" },
    { ul: [
      "**121.436**: every 121 pilot holds an ATP (R-ATP acceptable for SIC) and a **type rating**; a 121 PIC also needs **1,000 hours** as SIC in 121 operations, or PIC in 91K/135 ops as listed, or a combination.",
      "Training sequence: basic indoctrination, aircraft systems ground school, FTD/FFS, type rating practical test (ATP practical if you do not already hold one), then **initial operating experience (IOE)** with a check airman on the line.",
      "**121.434(g) consolidation of knowledge and skills**: **100 hours** of line operating flight time within **120 days** after the practical test; the carrier may extend to 150 days only if by day 120 you complete refresher training or a check pilot observes you proficient on a supervised line flight.",
      "**Age**: no person may serve as a pilot in Part 121 after reaching their **65th birthday** (121.383(c)).",
      "Expect a 121.411 recurrent cycle, a line check every 12 calendar months, and a first-class medical every 6 months once you are 40."
    ] },
    { memo: { title: "1,500-500-100-75-250", text: "ATP: 1,500 total, 500 XC, 100 night, 75 instrument, 250 PIC (with 100 XC and 25 night). R-ATP: 750 / 1,000 / 1,250 with 200 XC." } },
    { h: "Check yourself" },
    { ul: [
      "List the 61.159 hour requirements and the simulator caps on each.",
      "What are the four R-ATP hour levels and the cross-country reduction?",
      "What is in an ATP CTP and when must you have it?",
      "How long is an ATP airplane knowledge test result valid?",
      "What does a 121 PIC need beyond the ATP and type rating, and what is consolidation?"
    ] }
  ]
},
{
  id: "comms-phraseology-readbacks",
  topic: "comms",
  title: "Phraseology and required readbacks",
  minutes: 8,
  refs: ["AIM 4-2-1 through 4-2-12", "AIM 4-4-7", "AIM 4-3-18", "AIM 4-3-11", "AIM 5-2-5 (LUAW)", "Pilot/Controller Glossary"],
  tags: ["flight-review", "ipc", "atp"],
  quiz: ["airspace-mcq-024", "airspace-mcq-029", "airspace-card-001", "airspace-mcq-018", "ifr-mcq-023", "ifr-oral-009"],
  keywords: ["phraseology", "readback", "hold short", "line up and wait", "LUAW", "runway assignment", "call sign", "wilco", "roger", "hearback", "altitude phraseology"],
  body: [
    { h: "Why it matters" },
    { p: "Radio work is the first thing that decays and the first thing a CFI, a DPE, or an airline sim evaluator notices. The AIM is specific about what you **must** read back and what you merely acknowledge. Rebuild the rules, then the words, then the gotchas that cause runway incursions." },
    { h: "Required readbacks" },
    { ul: [
      "**Airborne (AIM 4-4-7(b))**: read back those parts of a clearance or instruction containing **altitude assignments**, **vectors (headings)**, or **runway assignments**, in the **same sequence** given, and always include your **aircraft identification**. Charted altitudes in a SID, STAR or approach are not read back unless the controller states them.",
      "**On the ground (AIM 4-3-18)**: read back the **runway assignment**, any clearance to **enter a specific runway**, and any instruction to **hold short of a runway** or to **line up and wait**, each with the runway designator (including left, right, or center). ATC is **required to obtain a readback of every runway hold-short instruction** and will ask again if you do not give one.",
      "**Takeoff and landing clearances**: read back with the runway ('Cleared for takeoff runway 27L, Seminole 3AB'); 'cleared for the option' and 'cleared to land' likewise.",
      "**LAHSO (AIM 4-3-11)**: a full readback including 'hold short of runway XX' is required, and the pilot in command may decline LAHSO without explanation.",
      "**Runway crossings**: ATC must issue an explicit crossing instruction for each runway ('cross runway 9 at Delta'); a taxi instruction to the departure runway does **not** authorize crossing it or entering it. Read back every crossing instruction with the runway."
    ] },
    { callout: "LUAW is **not** a takeoff clearance (AIM 5-2-5). Pilots have read back 'line up and wait' correctly and then departed. Before the takeoff roll, confirm you have heard the words 'cleared for takeoff' with your call sign and runway. The AIM notes that in LUAW accidents two minutes or more typically elapsed between the LUAW instruction and the event; if a takeoff clearance has not arrived within a reasonable time (treat about a minute as your trigger), query the tower.", kind: "warn" },
    { h: "What is not required but expected" },
    { p: "Frequency changes, altimeter settings, speed assignments, transponder codes and traffic calls need only an acknowledgment with your call sign, but reading back frequencies and altimeters is universal professional practice because it catches **hearback errors** (the controller mishears your readback). If a readback is wrong and the controller does not correct it, the error is now shared; listen for 'readback correct' when it is given and ask 'verify' when in doubt." },
    { h: "The words (AIM 4-2, P/CG)" },
    { table: { head: ["Item", "Say it this way"], rows: [
      ["Initial contact (4-2-3)", "Facility, full call sign, position (on the ground) or altitude, request: 'Columbia Ground, Seminole 123AB, south ramp, IFR to Memphis'"],
      ["Call signs (4-2-4)", "Never abbreviated on initial contact; use the prefix plus last three characters only after ATC does; air carrier call signs are not abbreviated; similar call signs on frequency: state the full call sign every time"],
      ["Altitudes (4-2-9)", "Below 18,000: separate digits of thousands plus hundreds: 'one two thousand five hundred', 'four thousand five hundred', 'one zero thousand'. FL180 and above: 'flight level two seven five'"],
      ["Headings/courses/winds (4-2-10)", "Three digits, magnetic: 'heading zero five zero', 'wind two two zero at one five'; 'true' is stated only if applicable"],
      ["Speeds (4-2-11)", "Separate digits then 'knots': 'one two zero knots'; Mach as 'Mach point eight two'"],
      ["Frequencies (4-2-8)", "'one two two point one'; 'point', not 'decimal' (ICAO)"],
      ["Numbers", "'niner', 'tree', 'fife' per ICAO; 'niner' is the one ATC expects"],
      ["Acknowledgments", "Roger = I received all of your last transmission (not yes). Wilco = received, understood, will comply. Affirmative = yes. Negative = no. Say again. Stand by. Unable = I cannot comply."]
    ] } },
    { h: "Phrases with regulatory weight" },
    { ul: [
      "**'Radar contact'**: ATC has identified you; position reports are no longer required until 'radar contact lost' or 'radar service terminated'.",
      "**'Resume own navigation'**: you are responsible for the route again; it does not cancel an altitude restriction.",
      "**'Cruise'**: a block from the minimum IFR altitude to the cruise altitude and a clearance to begin an approach at the destination (P/CG).",
      "**'Expedite'** and **'immediately'**: expedite means promptly; immediately means do it now because safety is involved.",
      "**'Maintain VFR'**, **'at pilot's discretion'**, **'climb via'**, **'descend via'**: each changes who owns the altitude; know the definitions before you accept them.",
      "**'Unable'** is a complete sentence. A clearance is not authority to deviate from a regulation or minimum altitude (AIM 4-4-1); if the clearance would put you below the MEA, into a cloud VFR, or beyond your performance, say unable and ask for an amendment (91.123)."
    ] },
    { h: "Pattern and towered-airport flow" },
    { ol: [
      "ATIS first, then ground with the ATIS code: 'Ground, Skyhawk 7EC at the FBO with information Bravo, VFR to the north, ready to taxi.'",
      "Read back the full taxi route with hold-short instructions; stop and ask if any part is unclear. Never guess at a runway designator.",
      "At the hold line: 'Tower, Skyhawk 7EC holding short runway 17, ready for departure.' Avoid 'ready for takeoff' per AIM practice; 'takeoff' is reserved for the clearance.",
      "Read back LUAW and takeoff clearances with the runway; verify the runway in front of you matches.",
      "Inbound: 'Tower, Skyhawk 7EC, 10 miles north, 3,500, with Charlie, full stop.' Read back pattern entry and sequence; report the traffic in sight only when you actually see it.",
      "Landing clearance readback includes the runway; after landing, exit, stop past the hold line, and do not switch to ground until told."
    ] },
    { h: "Check yourself" },
    { ul: [
      "List the items that must be read back on the ground and in the air.",
      "What exactly do 'roger' and 'wilco' mean, and when is each wrong?",
      "Say 10,500 ft, 4,500 ft, FL240 and heading 050 in correct phraseology.",
      "What does a taxi clearance to runway 27 authorize about runway 22, which crosses your route?",
      "You are told 'line up and wait' and the tower goes quiet. What do you do and when?"
    ] }
  ]
},
{
  id: "comms-ifr-clearances",
  topic: "comms",
  title: "IFR clearances: CRAFT, PDC, and what to do when a clearance differs from what you filed",
  minutes: 8,
  refs: ["AIM 4-4-3", "AIM 5-2-2", "AIM 5-2-3", "AIM 5-2-6", "AIM 5-2-7", "AIM 5-2-9", "AIM 4-4-10", "14 CFR 91.123"],
  tags: ["ipc", "ira"],
  quiz: ["ifr-mcq-023", "ifr-oral-009", "ifr-mcq-027", "ifr-card-009"],
  keywords: ["CRAFT", "clearance", "PDC", "DCL", "CPDLC", "cleared as filed", "full route clearance", "void time", "hold for release", "release time", "climb via", "91.123"],
  body: [
    { h: "Why it matters" },
    { p: "The clearance is the contract that defines where ATC will protect you. Copying it correctly, understanding what 'as filed' does and does not include, and knowing what to do when it is not what you filed are IPC-level skills. Paragraph numbers in the AIM moved in recent editions: 'cleared as filed' is now **5-2-6**, void times and hold-for-release are **5-2-7**, and PDC/DCL is **5-2-2**." },
    { h: "CRAFT: the shape of every clearance (AIM 4-4-3)" },
    { memo: { title: "CRAFT", text: "Clearance limit, Route, Altitude, Frequency, Transponder. 'Cleared to Memphis as filed, climb and maintain 3,000, expect 7,000 one zero minutes after departure, departure frequency 125.8, squawk 4521.'" } },
    { ul: [
      "**C**learance limit is normally the destination airport; it can be a fix, in which case expect further clearance and plan for lost comms from that fix.",
      "**R**oute: 'as filed', or a DP with transition, or a full route. ATC will say the DP by name ('Solar One departure, Gatlin transition'); 'as filed' never includes the DP.",
      "**A**ltitude: the initial altitude to maintain, and the altitude to **expect** plus **when** (minutes after departure). 'Cleared as filed' does **not** include the altitude you filed; it is always stated separately. The expected altitude is what you climb to under 91.185 if you lose comms.",
      "**F**requency: departure control; sometimes 'contact departure' is left to the tower.",
      "**T**ransponder: four digits. Read the whole clearance back; ATC must hear a correct readback or will restate it."
    ] },
    { h: "'Cleared as filed' and the full route clearance (AIM 5-2-6)" },
    { p: "ATC issues the abbreviated clearance **only when the filed route can be approved with little or no revision**. Three things to remember: (1) you may not accept 'as filed' if **you** changed the route or destination before departure, because the controller's strip may show the old plan; (2) controllers **will issue a detailed clearance** whenever they know the filed plan has been changed, and will do so if you **request a full route clearance**; (3) the abbreviated clearance still contains the DP, transition, altitude, frequency and squawk explicitly. If the route you hear is not what you filed, that is normal: ATC has amended it. Copy it, load it, and fly it; or say 'unable' with a reason and negotiate before you accept." },
    { h: "PDC and CPDLC-DCL (AIM 5-2-2)" },
    { ul: [
      "A **PDC** (pre-departure clearance) is delivered by data link or a portal; the AIM says no acknowledgment or readback is required for a PDC, though many airports and operators have you call ground or clearance with 'PDC received'. Call clearance delivery if anything in it is unclear.",
      "If the clearance is **revised** before you pick it up, the PDC is rejected and the clearance is delivered **verbally**, so a PDC that fails to arrive means call for it.",
      "One PDC per departure airport in an 18-hour period for pilots who file multiple plans.",
      "**CPDLC-DCL** (Data Comm) can deliver revisions, including revised routes, and **requires a response** from the crew (WILCO/UNABLE via the data link). Load the route from the uplink and compare it with the strip; the most common error is flying the filed route in the FMS after accepting an amended one by data link.",
      "Either way, verify the **route** line by line against what you loaded, especially the first fix and any DP transition."
    ] },
    { h: "Void times, hold for release, release times (AIM 5-2-7)" },
    { ul: [
      "At an uncontrolled airport (AIM 5-2-3) you get the clearance by phone, FSS, RCO, or relay, and it will usually include a **clearance void time**: if you are not airborne by that time the clearance is void. If you do not depart, you must advise ATC **as soon as possible**, and in any case **within 30 minutes** of the void time, or ATC starts search and rescue.",
      "**'Hold for release'**: you may not depart until released; ATC will give the release and usually an expiration.",
      "**'Release time'**: the earliest time you may depart.",
      "**EDCT** (expect departure clearance time): a traffic-management slot, not a void time; be ready to go at it."
    ] },
    { h: "Departure procedures in the clearance (AIM 5-2-9, 4-4-10)" },
    { ul: [
      "**'Climb via SID'**: fly the lateral path and comply with all published altitude and speed restrictions up to the SID's top altitude. **'Climb via SID except maintain 5,000'** replaces only the top altitude; restrictions still apply.",
      "**'Climb and maintain 5,000'** after a SID is assigned cancels the SID's altitude restrictions unless ATC restates them, but you still fly the lateral route.",
      "If ATC assigns an altitude lower than a published restriction you cannot meet safely, say so; the last clearance has precedence over the previous one (AIM 4-4-10), and it is your job to accept or refuse.",
      "Filing 'NO SID' in remarks means you will get vectors or an ODP; it does not relieve you of a published ODP climb gradient."
    ] },
    { h: "When the clearance is not what you want (91.123)" },
    { ul: [
      "You may not deviate from an ATC clearance except in an **emergency**, in response to a **TCAS RA**, or after obtaining an **amended clearance** (91.123(a),(b)). If you deviate in an emergency, notify ATC as soon as possible and submit a written report within 48 hours **if requested** (91.123(c),(d)).",
      "A clearance is never authority to break a rule or go below a minimum altitude (AIM 4-4-1); if ATC clears you below the MEA on your own navigation, you still own terrain clearance.",
      "'Unable' plus a brief reason gets you an amended clearance; accepting and then quietly doing something else is a pilot deviation.",
      "If you lose the clearance limit or the EFC in a busy readback, ask again before you take off; it is the lost-comms plan."
    ] },
    { callout: "Copy the clearance as CRAFT, read it back verbatim, then **load and verify** it in the GPS/FMS before you taxi. Most route deviations come from a correct readback and an incorrect box.", kind: "tip" },
    { h: "Check yourself" },
    { ul: [
      "Expand CRAFT and say what 'as filed' does and does not include.",
      "When will ATC refuse to issue an abbreviated clearance, and how do you get a full route clearance?",
      "Does a PDC require a readback? What about a DCL?",
      "Your void time is 1445 and you are still on the ground at 1446. What must you do and by when?",
      "What does 'climb via SID except maintain 6,000' change?"
    ] }
  ]
},
{
  id: "comms-emergency-atc",
  topic: "comms",
  title: "Talking to ATC in an emergency: declaring, minimum fuel vs emergency fuel, 7700, Pan-Pan vs Mayday",
  minutes: 8,
  refs: ["AIM 6-1-1", "AIM 6-1-2", "AIM 6-3-1", "AIM 6-3-2", "AIM 5-5-15", "AIM 6-2-2 (transponder)", "14 CFR 91.3", "14 CFR 91.123(c),(d)", "AC 00-46 (ASRS)"],
  tags: ["flight-review", "ipc", "atp"],
  quiz: ["regs-mcq-013", "regs-mcq-020", "regs-scenario-004", "ifr-mcq-013", "systems-mcq-021"],
  keywords: ["emergency", "declare", "Mayday", "Pan-Pan", "minimum fuel", "emergency fuel", "7700", "121.5", "91.3", "48 hours", "ASRS", "fuel remaining in minutes"],
  body: [
    { h: "Why it matters" },
    { p: "Pilots delay declaring emergencies because they fear paperwork, and the AIM (6-1-2) says bluntly that delay has caused accidents and cost lives. The words you use decide what help you get: 'minimum fuel' gets you nothing but awareness; 'Mayday' or 'declaring an emergency' gets you priority. Know the three levels and the exact phrases." },
    { h: "Authority: 91.3 and 91.123" },
    { ul: [
      "**91.3(b)**: in an in-flight emergency requiring immediate action, the PIC may **deviate from any rule of Part 91** to the extent required to meet that emergency.",
      "**91.3(c)**: each PIC who deviates shall, **upon the request of the Administrator**, send a written report. There is no automatic report.",
      "**91.123(c)**: if you deviate from an ATC clearance in an emergency, notify ATC **as soon as possible**. **91.123(d)**: if ATC gives you **priority**, you must submit a detailed report within **48 hours** to the manager of the ATC facility **if requested**.",
      "Declaring an emergency does not, by itself, trigger an investigation or a violation. Declaring late and causing an accident does."
    ] },
    { h: "Three levels of fuel and trouble" },
    { table: { head: ["Level", "Words", "What ATC does"], rows: [
      ["Advisory: minimum fuel (AIM 5-5-15)", "'Seminole 123AB, minimum fuel'", "Relays your status to the next facility and avoids undue delay; it is **not an emergency** and gives **no traffic priority**"],
      ["Urgency (AIM 6-3-1)", "'PAN-PAN, PAN-PAN, PAN-PAN'", "Warns other stations not to interfere; ATC provides assistance appropriate to a condition that concerns safety but is not yet immediate danger"],
      ["Distress (AIM 6-3-1)", "'MAYDAY, MAYDAY, MAYDAY' or 'declaring an emergency'", "Absolute priority over all other traffic; Mayday commands radio silence on the frequency; ATC does whatever is necessary"]
    ] } },
    { p: "The AIM says a minimum fuel advisory 'merely indicates that an emergency situation is possible should any undue delay occur.' When the remaining usable fuel suggests you need **traffic priority to ensure a safe landing**, you must **declare an emergency due to low fuel and report fuel remaining in minutes**. The AIM does not use the phrase 'emergency fuel'; ICAO phraseology that U.S. controllers recognize is **'MAYDAY MAYDAY MAYDAY FUEL'**, meaning you will land with less than your planned final reserve. Say 'minimum fuel' when you can accept no further delay; say Mayday when you need priority. Nothing in between helps you." },
    { memo: { title: "Minimum vs Mayday", text: "MINIMUM FUEL = no delay please, no priority. MAYDAY FUEL (or 'declaring an emergency, low fuel') = priority, fuel in minutes, souls on board." } },
    { h: "How to make the call (AIM 6-3-2)" },
    { p: "Use the frequency in use first; if no answer, **121.5 MHz** (243.0 UHF), which every tower, center and FSS guards, then any nearby tower. If you cannot reach anyone, squawk **7700** and Mode C, and transmit in the blind. Include as many of these as needed, in this order:" },
    { ol: [
      "Distress or urgency signal (Mayday or Pan-Pan, three times) and the station called",
      "Aircraft identification and type",
      "Nature of the emergency",
      "Weather",
      "Pilot's intentions and request",
      "Present position and heading, or if lost, last known position, time, and heading since",
      "Altitude or flight level",
      "**Fuel remaining in minutes**",
      "**Number of people on board**",
      "Any other useful information"
    ] },
    { ul: [
      "ATC will ask for fuel in minutes and souls on board if you do not give them; have the numbers ready before you key the mic.",
      "If you change frequency and lose contact, go back to the frequency where you last had two-way communication (AIM 6-3-2).",
      "Transponder codes: **7700** emergency, **7600** lost comms, **7500** hijack; do not cycle through 7500 or 7700 when changing codes.",
      "Pan-Pan is appropriate for a rough-running engine with a field in range, a sick passenger, being lost, or weather you need help getting out of; Mayday is engine failure, fire, loss of control, or any condition where you need the airspace cleared now. If in doubt, declare the emergency; you can downgrade later."
    ] },
    { h: "What happens afterward" },
    { ul: [
      "ATC may ask for the 91.123(d) report; write it factually within 48 hours. Keep a copy.",
      "File a **NASA ASRS** report within **10 days**; it is confidential and, under AC 00-46, the FAA will not impose a civil penalty or certificate suspension for an inadvertent, non-criminal violation disclosed in it (one use every 5 years).",
      "An emergency declaration is not an NTSB report. 49 CFR 830.5 immediate notification applies only to accidents and the listed incidents (flight control malfunction, in-flight fire, crew incapacitation, and so on).",
      "In a Part 135 or 121 operation, the company's emergency and irregularity reporting (and the fuel policy) add their own forms, but they never prohibit you from declaring."
    ] },
    { callout: "The interviewer's favorite: 'You are on a 45-minute reserve, the destination goes to a 30-minute hold, and the alternate is 25 minutes away. What do you say?' Answer: divert now; if any delay would make you land below reserve, declare an emergency with fuel in minutes rather than saying 'minimum fuel' and hoping.", kind: "tip" },
    { h: "Check yourself" },
    { ul: [
      "What does a minimum fuel advisory get you, and what does it not?",
      "Say the first transmission for a rough-running engine 8 miles from an airport in VMC, and for an engine failure in IMC.",
      "List the emergency message elements in order; which two will ATC always ask for?",
      "When is a written report required after an emergency deviation, and to whom?",
      "What frequency and transponder code do you use when you cannot raise anyone?"
    ] }
  ]
}
);
