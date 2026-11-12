window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "ops-mcq-001", type: "mcq", topic: "ops", ref: "14 CFR 119.1, 119.5, 119.21; AC 120-12A", tags: ["part135"],
    q: "You own a PA-44 and post on social media that you will fly anyone who pays to any airport within 300 nm. Which best describes your regulatory situation?",
    choices: [
      "Legal under Part 91 as long as you hold a commercial certificate and a second-class medical",
      "Legal under Part 91 if you keep the flights under 25 statute miles of the departure airport",
      "You are holding out to the public for common carriage and need an Air Carrier Certificate and operations specifications under Part 119 before you may conduct the flights",
      "Legal under Part 91 if you only charge pro rata shared expenses plus a small fee for your time"
    ],
    a: 2,
    exp: "Advertising a willingness to carry anyone for compensation is 'holding out,' and 119.5(g) says no one may operate as a direct air carrier without an Air Carrier Certificate and operations specifications issued under Part 119. A commercial certificate is a pilot qualification, not an operating authority; the 25-sm exception in 119.1(e) covers nonstop commercial air tours under 91.147, not point-to-point transportation; and adding any fee for your time destroys the 61.113(c) pro-rata expense-sharing exception."
  },
  {
    id: "ops-mcq-002", type: "mcq", topic: "ops", ref: "AC 120-12A", tags: ["part135"],
    q: "Under AC 120-12A, common carriage exists when an operator holds out a willingness to:",
    choices: [
      "transport persons or property, from place to place, for compensation",
      "transport persons or property on a published schedule, in aircraft of more than 9 passenger seats",
      "transport property only, on an unscheduled basis, in exchange for any form of payment",
      "transport persons across state lines using a written contract with each customer"
    ],
    a: 0,
    exp: "The four elements are: (1) a holding out of a willingness to (2) transport persons or property (3) from place to place (4) for compensation. Schedules, seat counts, and state lines are not part of the test. Holding out can be done by advertising, through an agent or broker, or simply by reputation for taking anyone who asks; a written contract with a few select customers is the hallmark of private carriage, not common carriage."
  },
  {
    id: "ops-mcq-003", type: "mcq", topic: "ops", ref: "AC 120-12A; 14 CFR 119.23, 91.501", tags: ["part135"],
    q: "Which arrangement is most consistent with private (contract) carriage rather than common carriage?",
    choices: [
      "A charter broker lists the airplane on a website and books whoever responds",
      "The operator accepts any customer referred by the local FBO but never advertises",
      "The operator flies for a handful of long-term contract customers it selected and has no willingness to serve the public at large",
      "The operator serves a mixed group of 18 to 24 customers under short-term agreements"
    ],
    a: 2,
    exp: "Private carriage is carriage for one or a few selected customers, generally under long-term contracts, with no holding out to the public. AC 120-12A notes that operations for as few as three customers have been found to be private carriage, while serving 18 to 24 customers has been found to be common carriage. Holding out through a broker or agent, or by a reputation for taking everyone referred, is still holding out even without paid advertising."
  },
  {
    id: "ops-mcq-004", type: "mcq", topic: "ops", ref: "14 CFR 119.3, 119.21", tags: ["part135"],
    q: "A company flies scheduled passenger service with a 9-seat, non-turbojet airplane, 6 round trips per week on a published schedule between two points. Under Part 119 this is a:",
    choices: [
      "Domestic operation, conducted under Part 121",
      "Commuter operation, conducted under Part 135",
      "On-demand operation, conducted under Part 135",
      "Supplemental operation, conducted under Part 121"
    ],
    a: 1,
    exp: "119.3 defines a commuter operation as scheduled passenger-carrying service with at least five round trips per week on at least one route, in non-turbojet airplanes with 9 or fewer passenger seats and 7,500 lb or less payload (or rotorcraft). 119.21 sends commuter and on-demand operations to Part 135. The same schedule in a turbojet, or in an airplane with more than 9 passenger seats, would be a domestic operation under Part 121. Scheduled service with fewer than five round trips per week falls under the on-demand definition."
  },
  {
    id: "ops-mcq-005", type: "mcq", topic: "ops", ref: "14 CFR 135.243(c)", tags: ["part135"],
    q: "Minimum experience to serve as PIC under Part 135 in passenger-carrying IFR operations (airplane not requiring an ATP):",
    choices: [
      "500 hours total, 100 cross-country, 25 night, commercial certificate with instrument rating",
      "1,200 hours total, 500 cross-country, 100 night, 75 hours instrument of which at least 25 in actual flight",
      "1,200 hours total, 500 cross-country, 100 night, 75 hours actual or simulated instrument of which at least 50 in actual flight",
      "1,500 hours total, 500 cross-country, 100 night, 75 hours instrument, and an ATP certificate"
    ],
    a: 2,
    exp: "135.243(c) requires a commercial certificate with appropriate category/class ratings and instrument rating, plus 1,200 hours total, 500 cross-country, 100 night, and 75 hours of actual or simulated instrument time of which at least 50 hours were in actual flight. The 500/100/25 numbers are the VFR PIC minimums of 135.243(b). The 1,500-hour ATP minimum applies only when the aircraft or operation requires an ATP under 135.243(a)."
  },
  {
    id: "ops-mcq-006", type: "mcq", topic: "ops", ref: "14 CFR 135.243(a)", tags: ["part135", "atp"],
    q: "Under 135.243(a), an ATP certificate is required to act as PIC in which Part 135 operation?",
    choices: [
      "A turbojet airplane, an airplane with 10 or more passenger seats, or a multiengine airplane in a commuter operation",
      "Any multiengine airplane carrying passengers for hire",
      "Any IFR passenger-carrying flight, regardless of aircraft",
      "Any airplane with more than 6 passenger seats"
    ],
    a: 0,
    exp: "135.243(a) requires the PIC to hold an ATP with appropriate ratings for turbojet airplanes, for aircraft having a passenger-seat configuration of 10 seats or more (excluding pilot seats), and for multiengine airplanes used in commuter operations. An on-demand King Air or PA-44 charter can be flown by a commercial pilot who meets 135.243(b) or (c), which is why the 1,200-hour IFR PIC minimum matters."
  },
  {
    id: "ops-mcq-007", type: "mcq", topic: "ops", ref: "14 CFR 135.267(b),(c),(d)", tags: ["part135"],
    q: "In an unscheduled Part 135 operation with a two-pilot crew, the basic flight-time and duty limits in any 24 consecutive hours are:",
    choices: [
      "8 hours of flight time within a duty period of up to 16 hours, with 8 hours rest",
      "10 hours of flight time within a regularly assigned duty period of no more than 14 hours, with at least 10 consecutive hours of rest",
      "10 hours of flight time with no duty limit, as long as 8 hours of rest precede the assignment",
      "12 hours of flight time within a 14-hour duty period, with 10 hours rest"
    ],
    a: 1,
    exp: "135.267(b) limits flight time to 8 hours for a one-pilot crew and 10 hours for a two-pilot crew in 24 consecutive hours. 135.267(c) allows that flight time within a regularly assigned duty period of not more than 14 hours, provided the duty period is immediately preceded and followed by at least 10 consecutive hours of rest and duty plus rest equals 24 hours. 135.267(d) separately requires 10 consecutive hours of rest in the 24 hours preceding the planned completion of the assignment."
  },
  {
    id: "ops-mcq-008", type: "mcq", topic: "ops", ref: "14 CFR 135.267(e)", tags: ["part135"],
    q: "Weather delays caused a single-pilot Part 135 crewmember to exceed the 8-hour daily flight-time limit by 45 minutes. Before the next assignment, the required rest is:",
    choices: [
      "10 consecutive hours, the same as any other day",
      "11 consecutive hours",
      "16 consecutive hours",
      "12 consecutive hours"
    ],
    a: 3,
    exp: "135.267(e) permits an overrun only for circumstances beyond the control of the certificate holder or crewmember (such as adverse weather), and then prescribes compensatory rest: 11 consecutive hours if the limit was exceeded by 30 minutes or less, 12 hours if exceeded by more than 30 minutes up to 60 minutes, and 16 hours if exceeded by more than 60 minutes. A 45-minute overrun falls in the 12-hour band."
  },
  {
    id: "ops-mcq-009", type: "mcq", topic: "ops", ref: "14 CFR 135.265(a)", tags: ["part135"],
    q: "Cumulative flight-time limits for a pilot in scheduled Part 135 operations are:",
    choices: [
      "1,200 hours per calendar year, 120 hours per calendar month, 34 hours in any 7 consecutive days",
      "1,400 hours per calendar year, 500 hours per calendar quarter, 800 hours in two consecutive quarters",
      "1,000 hours per calendar year, 100 hours per calendar month, 30 hours in any 7 consecutive days",
      "1,000 hours in 365 days, 100 hours in 672 consecutive hours"
    ],
    a: 0,
    exp: "135.265(a) (scheduled operations) sets 1,200 hours in any calendar year, 120 hours in any calendar month, 34 hours in any 7 consecutive days, and 8 hours in any 24 consecutive hours for a one-pilot crew (8 hours between required rest periods for a two-pilot crew). The 500/800/1,400 quarterly scheme belongs to 135.267 (unscheduled). The 1,000-hour/100-hour figures are Part 121 (121.471) and Part 117 (117.23) limits."
  },
  {
    id: "ops-mcq-010", type: "mcq", topic: "ops", ref: "14 CFR 135.293, 135.297, 135.299", tags: ["part135"],
    q: "A Part 135 PIC flying IFR passenger operations must have passed, within the applicable window:",
    choices: [
      "A competency check every 6 calendar months and a line check every 24 calendar months",
      "An instrument proficiency check every 12 calendar months and a competency check every 6 calendar months",
      "A competency check (135.293) every 12 calendar months, an instrument proficiency check (135.297) every 6 calendar months, and a line check (135.299) every 12 calendar months",
      "A line check every 6 calendar months and a knowledge test every 12 calendar months"
    ],
    a: 2,
    exp: "135.293(a) requires an annual written or oral test and 135.293(b) a competency check within the preceding 12 calendar months; 135.297 requires an instrument proficiency check within the preceding 6 calendar months for IFR PICs; 135.299 requires a line check within the preceding 12 calendar months, flown over one of the certificate holder's route segments. The 135.297 IPC may be substituted for the 135.293(b) competency check for that aircraft, which is why many 135 pilots see them combined on the same ride."
  },
  {
    id: "ops-mcq-011", type: "mcq", topic: "ops", ref: "14 CFR 135.100(c); 121.542(c)", tags: ["part135", "atp"],
    q: "For the sterile-cockpit rule, 'critical phases of flight' include:",
    choices: [
      "All flight operations below 18,000 feet, including cruise",
      "All ground operations involving taxi, takeoff, and landing, and all other flight operations below 10,000 feet except cruise flight",
      "Takeoff, approach, and landing only; taxi is excluded",
      "Any phase of flight when the flight crew is operating in IMC"
    ],
    a: 1,
    exp: "135.100 and 121.542 use the same definition: all ground operations involving taxi, takeoff, and landing, and all other flight operations below 10,000 feet except cruise flight. During those phases no crewmember may perform or be required to perform non-essential duties, and non-essential conversation is prohibited. Level cruise at 8,000 feet is not a critical phase; a taxi at a busy airport is."
  },
  {
    id: "ops-mcq-012", type: "mcq", topic: "ops", ref: "14 CFR 135.117", tags: ["part135"],
    q: "Before each takeoff in a Part 135 passenger operation, the required oral briefing must cover, among other items:",
    choices: [
      "Cruise altitude, estimated time en route, and expected turbulence",
      "The names and qualifications of the crew and the aircraft's maintenance status",
      "The alternate airport and fuel on board",
      "Smoking, use of seat belts, seat backs upright, location and means of opening exits, location of survival equipment, and, if applicable, ditching/flotation and normal and emergency use of oxygen"
    ],
    a: 3,
    exp: "135.117(a) lists the required items: smoking; use of seat belts including how to fasten and unfasten them; placement of seat backs upright for takeoff and landing; location and means of opening the passenger entry door and emergency exits; location of survival equipment; ditching procedures and use of flotation equipment for extended overwater operations; normal and emergency use of oxygen when required; and location and operation of fire extinguishers. The briefing may be given by the PIC or another crewmember, may be supplemented by printed cards, and persons needing assistance must be briefed individually."
  },
  {
    id: "ops-mcq-013", type: "mcq", topic: "ops", ref: "14 CFR 135.203(a)", tags: ["part135"],
    q: "On a night VFR Part 135 flight in a PA-44 over non-mountainous terrain, the minimum altitude is:",
    choices: [
      "500 feet above the surface or 500 feet horizontally from any obstacle",
      "1,000 feet above the surface",
      "2,000 feet above the highest obstacle within a horizontal distance of 5 miles from the intended course",
      "1,000 feet above the highest obstacle within a horizontal distance of 5 miles from the intended course"
    ],
    a: 3,
    exp: "135.203(a)(2) requires, at night, at least 1,000 feet above the highest obstacle within 5 miles horizontally of the intended course, or 2,000 feet in designated mountainous terrain. The 500-foot rule is the daytime limit of 135.203(a)(1). These are stricter than the Part 91.119 minimums and apply to VFR operations under the certificate."
  },
  {
    id: "ops-mcq-014", type: "mcq", topic: "ops", ref: "14 CFR 135.223(a)", tags: ["part135"],
    q: "IFR fuel requirement for an airplane under Part 135 when an alternate is required:",
    choices: [
      "Fuel to fly to the first airport of intended landing, then to the alternate, then for 45 minutes at normal cruising speed",
      "Fuel to fly to the first airport of intended landing, then to the alternate, then for 30 minutes at normal cruising speed",
      "Fuel to fly to the destination, plus 10 percent of the en route time, plus 45 minutes",
      "Fuel to fly to the destination, then to the most distant alternate, then hold 30 minutes at 1,500 feet"
    ],
    a: 0,
    exp: "135.223(a) is the Part 91 IFR rule with the same 45-minute reserve: destination, alternate (when required), then 45 minutes at normal cruising speed. The 30-minute figure is the day VFR airplane reserve under 135.209. The 10-percent/30-minute scheme is Part 121 flag and supplemental (121.645), and 'most distant alternate' plus 45 minutes is Part 121 domestic (121.639)."
  },
  {
    id: "ops-mcq-015", type: "mcq", topic: "ops", ref: "14 CFR 135.223(b)", tags: ["part135"],
    q: "Under 135.223(b), an alternate airport is NOT required for an IFR flight if, for at least 1 hour before and 1 hour after the ETA, the forecast indicates:",
    choices: [
      "Ceiling at least 2,000 feet and visibility at least 3 miles",
      "Ceiling at least 1,000 feet above the lowest MDA and visibility at least 2 miles",
      "Ceiling at least 1,500 feet above the lowest circling MDA (or, if no circling approach, 1,500 feet above the lowest published minimum or 2,000 feet above the airport, whichever is higher), and visibility at least 3 miles or 2 miles more than the lowest applicable minimum, whichever is greater",
      "Visibility at least 1 mile above the lowest landing minimum, with no ceiling requirement"
    ],
    a: 2,
    exp: "The Part 135 'no-alternate' test is deliberately more conservative than Part 91's 1-2-3 rule. The ceiling must be at least 1,500 feet above the lowest circling MDA (or 1,500 above the lowest published minimum or 2,000 above the airport elevation, whichever is higher, if there is no circling procedure) and visibility at least 3 miles or 2 miles above the lowest applicable visibility minimum, whichever is greater. 2,000 and 3 is the Part 91 (91.167) and Part 121 domestic (121.619) standard."
  },
  {
    id: "ops-mcq-016", type: "mcq", topic: "ops", ref: "14 CFR 135.213(a)", tags: ["part135"],
    q: "Weather information used for a Part 135 flight must come from the National Weather Service, an NWS-approved source, or a source approved by the Administrator. The one exception is:",
    choices: [
      "Any IFR flight may use the PIC's own observations if the flight will remain in Class E airspace",
      "A night VFR flight may use observations from any licensed pilot at the destination",
      "Any flight may substitute a commercial weather app if the operator has approved it in its GOM",
      "For VFR operations, when no such report is available, the PIC may use weather based on the pilot's own observations or those of other persons competent to supply appropriate observations"
    ],
    a: 3,
    exp: "135.213(a) requires approved weather sources whenever a weather report or forecast is required, but permits the PIC on a VFR operation to use personal observations or those of other competent persons if no approved report is available. There is no such exception for IFR; 135.225 additionally requires an approved weather reporting facility at the airport before beginning an instrument approach (with the eligible on-demand exception)."
  },
  {
    id: "ops-mcq-017", type: "mcq", topic: "ops", ref: "14 CFR 135.225(a),(c),(d)", tags: ["part135"],
    q: "Under 135.225, a pilot who has already begun the final approach segment and then receives a weather report showing conditions below the landing minimums:",
    choices: [
      "May continue the approach, and may land if upon reaching the MDA or DA/DH the actual weather conditions are at or above the authorized minimums",
      "Must immediately execute a missed approach because the latest reported weather controls",
      "May continue only if the certificate holder's dispatcher approves the continuation",
      "May continue only to the MDA/DA and then must go around regardless of what is seen"
    ],
    a: 0,
    exp: "135.225(a) and (c) prohibit beginning an approach, or the final approach segment, unless the latest weather from an approved reporting facility is at or above minimums. 135.225(d) then allows a pilot who has already begun the final approach segment (for example, past the FAF on an ILS) and later receives a below-minimum report to continue to MDA or DA/DH and land if the actual conditions there meet the minimums. This is the Part 135 analogue of 121.651(c). Note 135.225(e) also adds 100 feet and 1/2 mile to the minimums for a turbine-airplane PIC with fewer than 100 hours PIC in that type."
  },
  {
    id: "ops-mcq-018", type: "mcq", topic: "ops", ref: "14 CFR 135.227(a),(b)", tags: ["part135"],
    q: "Preflighting a Part 135 airplane on a cold morning, you find a thin, smooth layer of frost on the wings. Under 135.227 you may:",
    choices: [
      "Take off if the frost has been polished smooth",
      "Take off if the frost is less than 1/8 inch thick and the airplane has de-ice boots",
      "Not take off until the frost is removed; the former 'polished frost' allowance no longer exists for Part 135",
      "Take off after confirming the frost is only on the upper wing surface"
    ],
    a: 2,
    exp: "135.227(a) prohibits takeoff with frost, ice, or snow adhering to any rotor blade, propeller, windshield, stabilizing or control surface, powerplant installation, or airspeed/altimeter/rate-of-climb/attitude instrument system, or wing. The FAA removed the 'polished frost' exception from Parts 125 and 135 (and 91.527) in 2009 because even thin roughness can cut lift and raise stall speed significantly. The remaining narrow exception is frost under the wing in the area of the fuel tanks if authorized by the FAA. 135.227(b) separately prohibits flight into known or forecast light or moderate icing unless the aircraft has functioning de-ice or anti-ice equipment protecting each propeller, windshield, wing, stabilizing or control surface, and each pitot-static and attitude system; (c) prohibits flight into known or forecast severe icing."
  },
  {
    id: "ops-mcq-019", type: "mcq", topic: "ops", ref: "14 CFR 91.175(f)", tags: ["part135", "atp"],
    q: "When no takeoff minimums are published for an airport, the standard takeoff visibility minimums for Part 121 and Part 135 airplanes are:",
    choices: [
      "1/2 statute mile for all airplanes",
      "1 statute mile for airplanes with two engines or less; 1/2 statute mile for airplanes with more than two engines",
      "1 statute mile for all airplanes, or 1/2 mile with an approved HUD",
      "The lowest straight-in landing minimum for the runway in use"
    ],
    a: 1,
    exp: "91.175(f)(2) sets the standard takeoff minimums for Parts 121, 125, 129, and 135: 1 statute mile visibility for airplanes (other than helicopters) having two engines or less, 1/2 statute mile for airplanes with more than two engines, and 1/2 mile for helicopters. Operators are routinely authorized lower-than-standard takeoff minimums through OpSpecs (e.g., C078/C079), and 135.225(i) allows departure at the lowest straight-in landing minimum only when the operator is approved and the approach is usable for an immediate return. Part 91 non-commercial operators have no takeoff minimums at all."
  },
  {
    id: "ops-mcq-020", type: "mcq", topic: "ops", ref: "14 CFR 121.645(b)", tags: ["atp"],
    q: "Minimum fuel for a turbine-powered airplane in a Part 121 flag operation (alternate required):",
    choices: [
      "Fuel to the destination, then to the most distant alternate, then 45 minutes at normal cruise",
      "Fuel to the destination, then to the alternate, then 45 minutes holding",
      "Fuel to the destination plus 15 percent of total trip fuel, then to the alternate",
      "Fuel to fly to and land at the destination, then 10 percent of the total time required to fly from departure to destination, then to the alternate, then 30 minutes holding at 1,500 feet above the alternate in standard temperature"
    ],
    a: 3,
    exp: "121.645(b) applies to turbine-engine-powered airplanes in flag and supplemental operations: destination fuel, plus 10 percent of the total time from takeoff to landing at the destination, plus fuel to the alternate, plus 30 minutes holding at 1,500 feet above the alternate airport in standard temperature. The 'most distant alternate plus 45 minutes' formula is 121.639, the domestic rule. Reciprocating-engine flag airplanes use 121.641."
  },
  {
    id: "ops-mcq-021", type: "mcq", topic: "ops", ref: "14 CFR 121.533, 121.593, 121.663", tags: ["atp"],
    q: "In a Part 121 domestic operation, who shares responsibility for preflight planning, delay, and the dispatch release of a flight?",
    choices: [
      "The PIC and the aircraft dispatcher, jointly",
      "The Director of Operations and the PIC",
      "The PIC alone; the dispatcher only provides weather",
      "The dispatcher alone; the PIC is responsible only once the flight departs"
    ],
    a: 0,
    exp: "121.533(b) makes the PIC and the aircraft dispatcher jointly responsible for preflight planning, delay, and dispatch release of a flight in domestic operations, and 121.535 says the same for flag operations. 121.593 says no domestic flight may start unless an aircraft dispatcher specifically authorizes it, and 121.663 requires a dispatch release signed by both. In supplemental operations (121.537) there is no dispatcher; the Director of Operations and the PIC share operational control through a flight release (121.597). Once airborne the PIC retains full responsibility and emergency authority under 121.533(e) and 121.557."
  },
  {
    id: "ops-mcq-022", type: "mcq", topic: "ops", ref: "14 CFR 121.436", tags: ["atp"],
    q: "To serve as second in command in Part 121 operations, a pilot must hold at minimum:",
    choices: [
      "A commercial certificate with instrument rating and an SIC type rating",
      "An ATP certificate (restricted-privileges ATP acceptable) and an aircraft type rating for the aircraft to be flown",
      "An ATP certificate with 1,000 hours of Part 121 SIC time",
      "A commercial certificate with 1,500 hours total time and a type rating"
    ],
    a: 1,
    exp: "Since the 2013 First Officer Qualification rule, 121.436(a) requires every Part 121 pilot (PIC or SIC) to hold an ATP certificate and an aircraft type rating; a restricted-privileges ATP issued under 61.160 satisfies this for an SIC. The 1,000-hour requirement (121.436(a)(3)) applies only to the PIC and may be met with SIC time in 121 operations, PIC time under 91.1053(a)(2)(i) or 135.243(a)(1), or a combination. An SIC-only type rating (61.55) does not satisfy 121.436."
  },
  {
    id: "ops-mcq-023", type: "mcq", topic: "ops", ref: "14 CFR 61.153, 61.159, 61.160", tags: ["atp"],
    q: "Which applicant may be issued an ATP certificate with restricted privileges (R-ATP) at 1,000 hours total time?",
    choices: [
      "A 21-year-old with a bachelor's degree with an aviation major from an institution of higher education, with at least 60 semester credit hours of aviation coursework, who completed commercial and instrument training through the school's Part 141 program",
      "A 23-year-old with an associate's degree with an aviation major",
      "A 21-year-old former military pilot with 750 hours total time",
      "Any applicant with 1,000 hours who has completed the ATP CTP course"
    ],
    a: 0,
    exp: "61.160 sets the reduced totals: 750 hours for military pilots (61.160(a)), 1,000 hours for a bachelor's degree with an aviation major and at least 60 semester credit hours of aviation coursework (61.160(b)), and 1,250 hours for either a bachelor's with 30-59 hours of aviation coursework (61.160(c)) or an associate's degree with an aviation major (61.160(d)). All R-ATP routes require at least age 21 and 200 hours cross-country (versus 23 and 500 cross-country for the unrestricted ATP under 61.153 and 61.159). An R-ATP holder may serve as SIC but not PIC in Part 121 operations until the unrestricted ATP is earned."
  },
  {
    id: "ops-mcq-024", type: "mcq", topic: "ops", ref: "14 CFR 61.156", tags: ["atp"],
    q: "The ATP Certification Training Program (ATP CTP) required before the ATP multiengine airplane knowledge test consists of:",
    choices: [
      "10 hours of academic training and 30 hours in a full flight simulator",
      "40 hours of academic training only",
      "20 hours of academic training and 20 hours of flight time in a multiengine airplane",
      "At least 30 hours of academic training plus at least 10 hours in flight simulation training devices, including at least 6 hours in a Level C or higher full flight simulator"
    ],
    a: 3,
    exp: "61.156 requires a graduation certificate from an approved ATP CTP course before taking the ATP airplane multiengine knowledge test. The course has at least 30 hours of academics (high-altitude aerodynamics, meteorology, automation, CRM, leadership, upset recovery, and so on) and at least 10 hours in FSTDs: at least 6 hours in a Level C or higher full flight simulator representing a multiengine turbine airplane of at least 40,000 lb MTOW, and the remainder in at least a Level 4 FTD. No airplane flight time is part of the CTP."
  },
  {
    id: "ops-mcq-025", type: "mcq", topic: "ops", ref: "14 CFR 117.11, Table A to Part 117", tags: ["atp"],
    q: "Under Part 117, the maximum scheduled flight time for an unaugmented two-pilot crew with a report time of 0430 is:",
    choices: [
      "9 hours",
      "10 hours",
      "8 hours",
      "13 hours"
    ],
    a: 2,
    exp: "Table A gives 8 hours for report times 0000-0459 and 2000-2359 (acclimated time) and 9 hours for 0500-1959. A 0430 report is in the 8-hour window. Augmented crews under 117.11(a)(2) and (a)(3) may fly 13 hours with three pilots or 17 with four. Flight time is block time (gate to gate), and the limit may be exceeded after takeoff only to the extent necessary to land safely when unforeseen circumstances arise (117.11(b)); the certificate holder must report any such overage to the FAA within 10 days (117.11(c))."
  },
  {
    id: "ops-mcq-026", type: "mcq", topic: "ops", ref: "14 CFR 117.23", tags: ["atp"],
    q: "Part 117 cumulative limits on flight time and flight duty period are:",
    choices: [
      "100 hours flight time in any calendar month; 1,000 hours in any calendar year; 30 FDP hours in 7 days",
      "120 hours flight time in 672 hours; 1,200 hours in 365 days; 60 FDP hours in 168 hours",
      "100 hours flight time in 672 hours; 1,000 hours in 365 days; 34 FDP hours in 7 days",
      "100 hours flight time in any 672 consecutive hours; 1,000 hours in any 365 consecutive calendar days; 60 FDP hours in any 168 consecutive hours; 190 FDP hours in any 672 consecutive hours"
    ],
    a: 3,
    exp: "117.23(b) limits flight time to 100 hours in any 672 consecutive hours (28 days) and 1,000 hours in any 365 consecutive calendar days; 117.23(c) limits FDP to 60 hours in any 168 consecutive hours (7 days) and 190 hours in any 672 consecutive hours. The limits are rolling (consecutive hours), not calendar months. The 34-hour and 120-hour figures belong to Part 135 scheduled operations."
  },
  {
    id: "ops-mcq-027", type: "mcq", topic: "ops", ref: "14 CFR 117.25", tags: ["atp"],
    q: "Before beginning a flight duty period under Part 117, a flightcrew member must be given a rest period of at least:",
    choices: [
      "8 consecutive hours, which may be reduced to 6 with compensatory rest",
      "10 consecutive hours, during which there must be an opportunity for at least 8 hours of uninterrupted sleep",
      "12 consecutive hours measured from arrival at the hotel",
      "24 consecutive hours free from all duty"
    ],
    a: 1,
    exp: "117.25(e) requires at least 10 consecutive hours of rest immediately before an FDP, and the 10 hours must include an opportunity for 8 hours of uninterrupted sleep; if transportation or hotel problems eat into the sleep opportunity, the rest period must be extended. 117.25(b) separately requires 30 consecutive hours free from all duty in any 168 consecutive hours. Part 117 does not allow a reduced rest with compensatory rest the way Part 135 does."
  },

  // ───────────────────────── SCENARIO ─────────────────────────
  {
    id: "ops-scn-001", type: "scenario", topic: "ops", ref: "14 CFR 117.11, 117.13, Tables A and B to Part 117", tags: ["atp"],
    q: "You are an acclimated first officer on an unaugmented two-pilot crew. Crew scheduling assigns a 0530 report with four flight segments and a scheduled release at 1700. Delays develop and the last leg will now release at 1815. What are your maximum scheduled FDP and flight time for this day, and does the delayed release require anything?",
    choices: [
      "FDP 13 hours, flight time 8 hours; the delay is within limits",
      "FDP 12 hours, flight time 9 hours; a release at 1815 is a 12 hr 45 min FDP, so continuing requires an extension under 117.19 that the PIC and the certificate holder must both concur with, and it must be reported to the FAA within 10 days",
      "FDP 14 hours, flight time 9 hours; the delay is within limits",
      "FDP 12 hours, flight time 8 hours; the crew must stop after the third leg"
    ],
    a: 1,
    exp: "Table B for a 0500-0559 report gives 12 hours FDP for 1 through 4 segments, and Table A gives 9 hours of flight time for a 0500-1959 report. A 0530 report with an 1815 release is 12:45 of FDP, 45 minutes over. 117.19(a) allows the PIC and the certificate holder to extend an unaugmented FDP for unforeseen operational circumstances by up to 2 hours, but any extension of more than 30 minutes requires concurrence of both, may occur only once before the next 30-hour rest period, and must be reported to the FAA within 10 days. 13 hours would apply to a 0600 report; 14 hours to a 0700-1159 report."
  },
  {
    id: "ops-scn-002", type: "scenario", topic: "ops", ref: "14 CFR 135.225(c),(d)", tags: ["part135"],
    q: "You are flying a Part 135 on-demand passenger flight in a PA-44 to an airport with an ILS and an ASOS. The ATIS reports 300 overcast and 3/4 mile; ILS minimums are 200 and 1/2. You are cleared for the approach and pass the final approach fix inbound. At that moment tower relays a special observation: visibility now 1/4 mile. What is your legal position?",
    choices: [
      "You must execute the missed approach immediately because reported visibility is now below minimums",
      "You may continue only if you switch to the localizer-only minimums",
      "You may continue only if you are within 5 miles of the airport",
      "You may continue to DA because you had begun the final approach segment before the below-minimum report; you may land only if, upon reaching DA, the flight visibility is at or above 1/2 mile and the required visual references are in sight"
    ],
    a: 3,
    exp: "135.225(c) prohibits beginning the final approach segment unless the latest report is at or above minimums; you met that test at the FAF. 135.225(d) then allows continuation when the below-minimum report arrives after the final approach segment has begun (on an ILS, after passing the final approach fix) and permits a landing only if the conditions at DA meet the authorized minimums. Visibility for landing is flight visibility as judged by the pilot, but the ASOS value is strong evidence; if you do not see the required references at DA you go missed. Switching to localizer minimums or any distance from the airport is irrelevant."
  },
  {
    id: "ops-scn-003", type: "scenario", topic: "ops", ref: "14 CFR 117.5", tags: ["atp"],
    q: "You are a Part 121 first officer on the second day of a trip. The hotel fire alarm went off twice overnight and you got about four hours of broken sleep. Your next FDP is a 1100 report with five legs. You feel foggy but the captain says, 'We'll be fine, it's an easy day.' What does Part 117 require of you?",
    choices: [
      "You must assess your own fitness; if you are too fatigued to safely perform duties, you report yourself unfit, the certificate holder may not assign you to the FDP, and you must affirmatively state you are fit for duty as part of the dispatch release before any flight",
      "You may fly because the 10-hour rest period was scheduled, which is all 117.25 requires",
      "You must fly unless the captain declares the crew fatigued, since the PIC makes the fatigue determination",
      "You may fly but must file a fatigue report within 24 hours so the airline can adjust future scheduling"
    ],
    a: 0,
    exp: "117.5(a) requires each flightcrew member to report for an FDP rested and prepared to perform assigned duties; (b) prohibits the certificate holder from assigning, and the crewmember from accepting, an FDP if the crewmember has reported being too fatigued; (c) prohibits continuing a flight if the crewmember is determined to be too fatigued; and (d) requires the crewmember to affirmatively state fitness for duty as part of the dispatch or flight release before every flight. A scheduled rest period is not the same as an actual sleep opportunity, and no captain or scheduler can override your own self-assessment. Airlines must have a fatigue risk management plan and a non-punitive fatigue reporting process, so calling in fatigued is a legitimate, expected action."
  },
  {
    id: "ops-scn-004", type: "scenario", topic: "ops", ref: "14 CFR 135.267(b),(c),(d)", tags: ["part135"],
    q: "You are the only pilot in a single-pilot Part 135 on-demand operation. You came on duty at 0600 after 11 hours off. Your flights so far total 7.2 hours of flight time and it is now 1830. The owner asks you to pick up a passenger 1.5 hours away and bring him back, a 3-hour round trip, and says 'you're well under 14 hours of duty.' Can you legally accept?",
    choices: [
      "Yes, because the 14-hour duty period would end at 2000 and the trip finishes by 2130, only slightly over",
      "Yes, because a two-pilot crew limit of 10 hours applies to any Part 135 operation",
      "No. Adding 3 hours would give 10.2 hours of flight time, exceeding the 8-hour single-pilot limit in 24 consecutive hours; the 14-hour duty period does not raise the flight-time limit, and the trip would also run past the 14-hour duty period that ends at 2000",
      "Yes, if you take a 1-hour break before departing so that the rest period restarts"
    ],
    a: 2,
    exp: "135.267(b) caps a single pilot at 8 hours of flight time in any 24 consecutive hours, and 135.267(c) only lets that flight time be scheduled anywhere within a regularly assigned duty period of up to 14 hours; it does not add hours. 7.2 + 3.0 = 10.2 hours of flight time, so the assignment is illegal before considering duty. The duty period that began at 0600 also ends at 2000, and the 10-hour rest must immediately follow it. A short break is not a rest period; rest must be a continuous period free of all duty, and the company may not reach you with an assignment. Only a 135.267(e) overrun for circumstances beyond anyone's control (weather, ATC) can legally exceed the flight-time limit, and that triggers 11-16 hours of compensatory rest."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "ops-card-001", type: "card", topic: "ops", ref: "14 CFR 119.65, 119.69", tags: ["part135", "atp"],
    front: "Required management personnel for a Part 135 certificate holder vs. a Part 121 certificate holder.",
    back: "Part 135 (119.69): Director of Operations, Chief Pilot, Director of Maintenance.\nPart 121 (119.65): Director of Safety, Director of Operations, Chief Pilot, Director of Maintenance, Chief Inspector.\nThe FAA may approve different titles or combined positions; qualifications are in 119.67 (121) and 119.71 (135)."
  },
  {
    id: "ops-card-002", type: "card", topic: "ops", ref: "14 CFR 135.244, 135.245, 135.247", tags: ["part135"],
    front: "Part 135 operating experience (135.244), SIC qualifications (135.245), and recent experience (135.247).",
    back: "135.244 operating experience before serving as PIC carrying passengers: 10 hr single-engine, 15 hr multiengine reciprocating, 20 hr turboprop, 25 hr turbojet (may be reduced up to 50% by substituting one additional takeoff and landing per hour).\n135.245: SIC must hold at least a commercial certificate with appropriate category/class ratings and an instrument rating (for airplane IFR).\n135.247: 3 takeoffs and landings in that type (or category/class as applicable) within preceding 90 days to carry passengers; at night (1 hr after sunset to 1 hr before sunrise) they must be to a full stop."
  },
  {
    id: "ops-card-003", type: "card", topic: "ops", ref: "14 CFR 135.209", tags: ["part135"],
    front: "Part 135 VFR fuel requirements (airplane and helicopter).",
    back: "Airplane, day VFR: fuel to the first point of intended landing plus 30 minutes at normal cruising fuel consumption.\nAirplane, night VFR: plus 45 minutes.\nHelicopter (day or night): plus 20 minutes.\nIFR (135.223): destination, alternate if required, then 45 minutes at normal cruising speed."
  },
  {
    id: "ops-card-004", type: "card", topic: "ops", ref: "14 CFR 121.619, 121.639", tags: ["atp"],
    front: "Part 121 domestic: when is an alternate required, and what is the minimum fuel?",
    back: "121.619 alternate not required if, for 1 hour before to 1 hour after ETA, forecast ceiling is at least 2,000 ft and visibility at least 3 miles (the 1-2-3 rule). Alternate minimums come from OpSpecs under 121.625 (not the standard 600-2 / 800-2).\n121.639 fuel: fly to the destination, then to the most distant alternate listed on the dispatch release, then 45 minutes at normal cruising fuel consumption.\nFlag/supplemental turbine (121.645(b)): destination + 10% of total flight time + alternate + 30 min holding at 1,500 ft above the alternate."
  },
  {
    id: "ops-card-005", type: "card", topic: "ops", ref: "14 CFR 121.687, 121.663, 121.597", tags: ["atp"],
    front: "Dispatch release (domestic/flag): what it is and what it must contain.",
    back: "Prepared by the dispatcher and signed by both the dispatcher and the PIC (121.663); the flight may not depart without it (121.593/121.595).\nContents (121.687): aircraft identification, trip number, departure airport, intermediate stops, destination, and alternates; type of operation (IFR/VFR); minimum fuel supply; and the latest weather reports and forecasts for the destination, intermediate stops, and alternates (may be attached).\nSupplemental operations use a flight release under 121.597 with the Director of Operations instead of a dispatcher."
  },
  {
    id: "ops-card-006", type: "card", topic: "ops", ref: "14 CFR 117.13, Table B to Part 117", tags: ["atp"],
    front: "Part 117 Table B: maximum unaugmented FDP by acclimated report time (1-2 segments / 5 segments / 7+ segments).",
    back: "0000-0359: 9 / 9 / 9\n0400-0459: 10 / 9 / 9\n0500-0559: 12 / 11.5 / 10.5\n0600-0659: 13 / 11.5 / 10.5\n0700-1159: 14 / 12.5 / 11.5\n1200-1259: 13 / 12.5 / 11.5\n1300-1659: 12 / 11.5 / 10.5\n1700-2159: 12 / 10 / 9\n2200-2259: 11 / 9 / 9\n2300-2359: 10 / 9 / 9\nFDP starts at report time and ends when the aircraft is parked after the last flight with no intent of further movement. Un-acclimated crews lose 30 minutes."
  },
  {
    id: "ops-card-007", type: "card", topic: "ops", ref: "14 CFR 117.3, 117.19, 117.25, 117.27", tags: ["atp"],
    front: "Part 117 key definitions and limits: acclimated, theater, FDP extension, rest, consecutive nights.",
    back: "Acclimated: in a theater for 72 hours, or given 36 consecutive hours of rest. Theater: departure and arrival points within 60 degrees of longitude.\nFDP extension (117.19): unaugmented up to 2 hr for unforeseen circumstances; more than 30 min needs PIC + certificate holder concurrence, only once before the next 30-hr rest, reported to FAA within 10 days.\nRest (117.25): 10 consecutive hr with 8 hr uninterrupted sleep opportunity before FDP; 30 consecutive hr free in any 168 hr; 56 hr (3 physiological nights) on return to base after >60 degrees longitude for more than 168 hr.\nConsecutive nights (117.27): max 3 FDPs infringing 0200-0459, or 5 with a 2-hr mid-duty sleep opportunity."
  },
  {
    id: "ops-card-008", type: "card", topic: "ops", ref: "14 CFR 61.153, 61.159, 121.383(c)", tags: ["atp"],
    front: "Unrestricted ATP (airplane) eligibility and aeronautical experience; Part 121 age limit.",
    back: "61.153: age 23, good moral character, English, hold commercial with instrument rating (or equivalent), pass knowledge and practical tests; ATP CTP (61.156) before the multiengine knowledge test.\n61.159: 1,500 hr total; 500 XC; 100 night; 50 in class (multiengine for AMEL); 75 instrument (actual or simulated); 250 PIC (or SIC performing PIC duties under supervision) including 100 XC and 25 night.\n121.383(c): no one who has reached their 65th birthday may serve as a pilot in Part 121 operations."
  },
  {
    id: "ops-card-009", type: "card", topic: "ops", ref: "14 CFR 121.542", tags: ["atp"],
    front: "121.542 sterile flight deck: what is prohibited and what was added in 2014?",
    back: "During critical phases (taxi, takeoff, landing, and all flight below 10,000 ft except cruise): no crewmember may perform, and no certificate holder may require, duties not essential to safe operation (company paperwork, PA announcements for sightseeing, meal orders, etc.); no non-essential conversation or activity that could distract.\n121.542(d) (2014): no flightcrew member may use a personal wireless communications device or laptop for personal use while at a duty station on the flight deck while the aircraft is being operated, in any phase of flight."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "ops-oral-001", type: "oral", topic: "ops", ref: "AC 120-12A; 14 CFR 119.1, 119.5", tags: ["part135"],
    q: "Explain 'holding out' and why it determines whether a flight is Part 91 or needs a Part 119 certificate.",
    answer: "Holding out is any communication of a willingness to carry anyone who wants transportation, whether by advertising, through an agent or broker, or by a reputation for taking all comers. Combined with carrying persons or property, from place to place, for compensation, that makes the operation common carriage, and under 119.5 common carriage requires an Air Carrier Certificate and OpSpecs; the operating rules then come from Part 121 or 135 depending on the aircraft and scheduling. Private carriage, by contrast, serves a few selected customers under contract with no holding out; it still needs an operating certificate under 119.23 (Part 125 for airplanes with 20 or more passenger seats or 6,000 lb or more payload, otherwise an operating certificate with Part 135 rules), but it is not an air carrier, and the FAA looks at substance over labels. A commercial pilot certificate only means I can be paid to fly; it provides no authority to sell transportation.",
    points: [
      "Four elements of common carriage: holding out, persons or property, place to place, compensation",
      "Holding out can be by advertising, agent/broker, or reputation",
      "Common carriage requires a Part 119 Air Carrier Certificate and OpSpecs",
      "Private carriage: a few selected customers, no willingness to serve the public",
      "Commercial certificate is a pilot privilege, not operating authority",
      "119.1(e) exceptions: flight training, 91.147 air tours, aerial work, ferry flights"
    ]
  },
  {
    id: "ops-oral-002", type: "oral", topic: "ops", ref: "14 CFR 135.267", tags: ["part135"],
    q: "Walk me through the flight-time, duty, and rest rules for an unscheduled Part 135 operation with a two-pilot crew.",
    answer: "In any 24 consecutive hours, the crew may fly 10 hours (8 for a single pilot) including all other commercial flying, and that flight time has to fit within a regularly assigned duty period of not more than 14 hours that is immediately preceded and followed by at least 10 consecutive hours of rest, so duty plus rest equals 24. Each assignment must give 10 consecutive hours of rest in the 24 hours preceding the planned completion time. If circumstances beyond anyone's control, like weather or ATC, push flight time past the limit, the rest before the next assignment increases to 11, 12, or 16 hours depending on whether the overrun was up to 30 minutes, 30 to 60 minutes, or more than an hour. Cumulatively, 500 hours per calendar quarter, 800 in two consecutive quarters, 1,400 per calendar year, and at least 13 rest periods of 24 hours each quarter. Rest means free of all duty and not reachable for assignment; being 'on call' at home with a phone you must answer is not rest.",
    points: [
      "8 hr (one pilot) / 10 hr (two pilots) flight time in 24 consecutive hours",
      "Flight time within a regularly assigned duty period of no more than 14 hours",
      "10 consecutive hours of rest before and after; duty + rest = 24",
      "Overrun for uncontrollable circumstances: 11 / 12 / 16 hr compensatory rest",
      "500 hr/quarter, 800 hr/two quarters, 1,400 hr/year; 13 rest periods of 24 hr per quarter",
      "Rest must be free of all duty and all responsibility to the company"
    ]
  },
  {
    id: "ops-oral-003", type: "oral", topic: "ops", ref: "14 CFR 117.5, 117.9, 117.11", tags: ["atp"],
    q: "You're legal on paper for your FDP but you feel fatigued. What does Part 117 say, and what would you actually do?",
    answer: "Part 117 puts the fitness-for-duty responsibility on me personally: 117.5 requires me to report rested and prepared, prohibits the airline from assigning me and me from accepting an FDP if I report that I am too fatigued, and requires me to affirmatively state that I am fit for duty as part of the dispatch release before each flight. Being within the Table A and B numbers is necessary but not sufficient. Practically, I would assess myself honestly using the fatigue training I receive under 117.9, tell the captain and crew scheduling early, and submit a fatigue report through the company's fatigue risk management program; those programs are required to be non-punitive. If fatigue develops during a trip, 117.5(c) prohibits continuing the flight once I am determined to be too fatigued to safely perform. The airline cannot discipline me for a good-faith fatigue call, and the alternative is accepting a risk the rule was written specifically to remove.",
    points: [
      "117.5: report rested; may not accept FDP if too fatigued; affirmative fit-for-duty statement on the release",
      "Flight time and FDP tables are a ceiling, not a guarantee of fitness",
      "Report early to captain and crew scheduling; use the non-punitive fatigue reporting system",
      "117.9 requires annual fatigue education and awareness training",
      "117.5(c) prohibits continuing a flight once determined too fatigued"
    ]
  },
  {
    id: "ops-oral-004", type: "oral", topic: "ops", ref: "14 CFR 121.533, 121.537, 121.557, 121.593, 121.663", tags: ["atp"],
    q: "What is operational control, and how is it exercised at a Part 121 domestic carrier versus a supplemental carrier?",
    answer: "Operational control is the authority over initiating, conducting, and terminating a flight, and it must be held by the certificate holder, never delegated to a customer or broker. At a domestic or flag carrier, 121.533 and 121.535 make the PIC and the aircraft dispatcher jointly responsible for preflight planning, delay, and dispatch release; no flight may start until a dispatcher specifically authorizes it (121.593), and both sign the dispatch release (121.663), which lists the airports, alternates, type of operation, minimum fuel, and weather. The dispatcher also monitors the flight and must pass along any information that could affect safety (121.601). At a supplemental carrier there is no dispatcher; 121.537 gives the Director of Operations and the PIC joint responsibility, exercised through a flight release under 121.597 prepared by a qualified flight follower. In every case the PIC retains full control and authority over the aircraft once underway and has emergency authority under 121.557 to deviate from any rule to the extent required.",
    points: [
      "Operational control = authority to initiate, conduct, and terminate a flight; stays with the certificate holder",
      "Domestic/flag: PIC and dispatcher jointly responsible (121.533/121.535); dispatcher must authorize (121.593)",
      "Dispatch release signed by both; contents per 121.687",
      "Supplemental: Director of Operations and PIC; flight release (121.597), flight followers",
      "PIC emergency authority (121.557) and final authority in flight"
    ]
  },
  {
    id: "ops-oral-005", type: "oral", topic: "ops", ref: "14 CFR 135.225", tags: ["part135"],
    q: "What does 135.225 require before you begin an instrument approach on a Part 135 flight, and what changes once you're past the final approach fix?",
    answer: "Before beginning an approach, the airport must have a weather reporting facility operated by the National Weather Service, an NWS-approved source, or an FAA-approved source, and the latest report from it must show weather at or above the authorized landing minimums; the same test applies again before beginning the final approach segment. An eligible on-demand operator may approach an airport without weather reporting if the alternate has reporting and a current local altimeter setting is available, or, failing that, the altimeter source shown on the approach chart. Once the final approach segment has begun, for example past the FAF on an ILS, a later report of below-minimum weather does not force a missed approach; I may continue to DA or MDA and land if conditions there meet the minimums. If I am a turbine-airplane PIC with fewer than 100 hours in type, I add 100 feet and a half mile to the published minimums, not to exceed the alternate minimums. The underlying logic is that Part 135 relies on reported weather rather than solely the pilot's judgment of flight visibility, which is why I cannot shoot an approach on a hunch the way a Part 91 pilot can.",
    points: [
      "Approved weather reporting at the airport; latest report at or above minimums to begin the approach",
      "Same check before beginning the final approach segment",
      "Eligible on-demand exception: alternate with weather reporting and a usable altimeter setting",
      "After the final approach segment has begun, may continue and land if conditions at DA/MDA meet minimums",
      "Fewer than 100 hr PIC in turbine type: add 100 ft and 1/2 mile",
      "Contrast with Part 91: no reported-weather requirement to begin an approach"
    ]
  },
  {
    id: "ops-oral-006", type: "oral", topic: "ops", ref: "14 CFR 61.153, 61.156, 61.159, 61.160, 121.436", tags: ["atp"],
    q: "What are the eligibility paths to an ATP certificate, and how does an R-ATP differ from an unrestricted ATP at a Part 121 carrier?",
    answer: "The unrestricted ATP under 61.153 and 61.159 requires age 23, a commercial certificate with instrument rating, the ATP CTP course before the multiengine knowledge test, and 1,500 hours total with 500 cross-country, 100 night, 75 instrument, 50 in class, and 250 PIC. 61.160 allows an ATP with restricted privileges at age 21 and 200 hours cross-country for military pilots at 750 hours, graduates of an aviation bachelor's program with 60 credit hours of aviation coursework at 1,000 hours, and graduates with a bachelor's with 30-59 hours or an associate's with 30 hours at 1,250 hours, in each case with the flight training done through the school's approved Part 141 program; a 21- or 22-year-old with 1,500 hours also receives an R-ATP until age 23. Under 121.436 every Part 121 pilot must hold an ATP and a type rating, and the R-ATP satisfies that for an SIC. To upgrade to captain, a pilot needs the unrestricted ATP plus 1,000 hours of qualifying time, typically as a Part 121 SIC.",
    points: [
      "Unrestricted ATP: 23 years old, 1,500 hr, 500 XC, 100 night, 75 instrument, 250 PIC; CTP before the knowledge test",
      "R-ATP (61.160): 21 years, 200 XC; 750 military / 1,000 bachelor's (60 hr) / 1,250 bachelor's (30-59 hr) or associate's",
      "R-ATP restriction: SIC only in Part 121 until unrestricted ATP",
      "121.436: all Part 121 pilots hold ATP and type rating; PIC needs 1,000 hr qualifying time",
      "ATP CTP: 30 hr academics + 10 hr FSTD (6 hr Level C+ FFS)"
    ]
  },
  {
    id: "ops-oral-007", type: "oral", topic: "ops", ref: "14 CFR 135.243, 135.293, 135.297, 135.299, 135.247, 135.244", tags: ["part135"],
    q: "A charter company wants to put you on the line as PIC of a PA-44 flying IFR passengers. What must be true of you before that first revenue leg?",
    answer: "I need a commercial certificate with multiengine and instrument ratings and a current second-class medical, and the 135.243(c) experience of 1,200 hours total, 500 cross-country, 100 night, and 75 hours of instrument time with at least 50 in actual flight. I must complete the company's approved training program and pass the 135.293(a) written or oral test on company and regulatory knowledge, a 135.293(b) competency check in the aircraft, a 135.297 instrument proficiency check within the preceding 6 months, and a 135.299 line check over a company route within the preceding 12 months. Under 135.244 I need 15 hours of operating experience in a multiengine reciprocating airplane with a qualified pilot before carrying passengers, and 135.247 requires three takeoffs and landings in the type within 90 days, to a full stop for night passengers. Along the way I would also be reviewing the GOM, OpSpecs, and the company's hazmat and crew resource management training, because the line check will expect me to operate by the company's procedures, not just the FARs.",
    points: [
      "135.243(c): commercial + instrument; 1,200 total / 500 XC / 100 night / 75 instrument (50 actual)",
      "135.293(a) written/oral test and (b) competency check within 12 calendar months",
      "135.297 instrument proficiency check within 6 calendar months",
      "135.299 line check within 12 calendar months over a company route segment",
      "135.244 operating experience: 15 hr multiengine reciprocating",
      "135.247: 3 takeoffs/landings in type in 90 days (full stop at night)"
    ]
  }
);
