window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "airspace-mcq-001", type: "mcq", topic: "airspace", ref: "14 CFR 91.135; AIM 3-2-2", tags: ["flight-review", "ipc"],
    q: "What are the vertical limits of Class A airspace, and what is required to operate in it?",
    choices: [
      "10,000 ft MSL up to FL 450; VFR permitted with ATC clearance and Mode C",
      "14,500 ft MSL up to FL 600; IFR flight plan or VFR-on-top with ATC authorization",
      "18,000 ft MSL up to and including FL 600; IFR clearance, instrument-rated pilot, IFR-equipped aircraft, and ADS-B Out",
      "18,000 ft MSL up to FL 450; VFR permitted above 24,000 ft with an operable transponder"
    ],
    a: 2,
    exp: "Class A runs from 18,000 ft MSL up to and including FL 600 over the contiguous states and within 12 NM of the coast. Unless otherwise authorized by ATC, operations must be IFR under an ATC clearance, with the aircraft equipped for IFR and for Class A (transponder with altitude reporting and ADS-B Out per 91.215/91.225). Altimeters are set to 29.92 at and above 18,000 ft because Class A uses flight levels."
  },
  {
    id: "airspace-mcq-002", type: "mcq", topic: "airspace", ref: "14 CFR 91.131", tags: ["flight-review"],
    q: "What is required before an aircraft may enter Class B airspace, and what is the minimum pilot certificate to act as PIC there?",
    choices: [
      "An ATC clearance into the Class B; at least a private pilot certificate, or a student, sport, or recreational pilot with the required training and endorsement under Part 61",
      "Two-way radio communications established with ATC; at least a private pilot certificate with no exceptions",
      "An ATC clearance; a commercial pilot certificate or an instrument rating",
      "Two-way radio communications established; a student pilot with a solo cross-country endorsement is sufficient at any Class B airport"
    ],
    a: 0,
    exp: "Class B is the only airspace where a VFR pilot needs an explicit clearance (\"cleared into the Class Bravo\") rather than merely established communications. The PIC must hold at least a private certificate, or be a student, sport, or recreational pilot who has received the ground and flight training and logbook endorsement required by 61.95 (or 61.325/61.101). Even with that endorsement, 91.131(b)(2) bars those pilots from taking off or landing at the 12 busiest Class B airports listed in Part 91 Appendix D, Section 4 (ATL, BOS, ORD, DFW, LAX, MIA, EWR, JFK, LGA, SFO, DCA, and Andrews)."
  },
  {
    id: "airspace-mcq-003", type: "mcq", topic: "airspace", ref: "AIM 3-2-4; 14 CFR 91.130", tags: ["flight-review"],
    q: "Describe the typical dimensions of Class C airspace.",
    choices: [
      "A 10 NM radius surface area from the surface to 2,500 ft AGL",
      "A 5 NM radius core from the surface to 4,000 ft above the airport elevation, and a 10 NM radius shelf from 1,200 ft to 4,000 ft above the airport elevation",
      "A 5 NM radius core to 2,500 ft AGL and a 20 NM radius outer area to 10,000 ft MSL",
      "A 4 NM radius core from the surface to 4,000 ft AGL with no shelf"
    ],
    a: 1,
    exp: "Although individually tailored, Class C normally consists of a 5 NM surface area to 4,000 ft above the airport elevation and a 10 NM shelf from 1,200 ft to 4,000 ft above airport elevation. There is also a non-regulatory 20 NM outer area where participating VFR aircraft receive the same services, but communications are not required there. The charted altitudes are MSL values derived from the airport elevation, so always read the actual numbers on the sectional."
  },
  {
    id: "airspace-mcq-004", type: "mcq", topic: "airspace", ref: "14 CFR 91.129; AIM 3-2-5", tags: ["flight-review"],
    q: "A Class D surface area typically extends to what altitude, and what is required to operate within it?",
    choices: [
      "4,000 ft above the airport elevation; an ATC clearance",
      "3,000 ft AGL; a transponder with Mode C and two-way radio",
      "1,200 ft AGL; two-way radio communications",
      "2,500 ft above the airport elevation; two-way radio communications established with the tower before entry and maintained while inside"
    ],
    a: 3,
    exp: "Class D generally extends from the surface to 2,500 ft above the airport elevation, charted in MSL (shown in a dashed blue box, e.g., [31] meaning 3,100 ft MSL). The only entry requirement is establishing two-way radio communications with the tower before entering and maintaining them while inside; no transponder or clearance is required. Note that 91.129(i) still requires a clearance to taxi on, take off from, or land on any runway or taxiway at a towered airport."
  },
  {
    id: "airspace-mcq-005", type: "mcq", topic: "airspace", ref: "AIM 3-2-6; 14 CFR 71.71", tags: ["flight-review", "ipc"],
    q: "Where Class E airspace is not otherwise designated by a surface area, a 700 ft transition area, or a Federal airway, at what altitude does it begin, and how high does it extend?",
    choices: [
      "1,200 ft AGL (or 14,500 ft MSL where no lower floor is charted); up to but not including 18,000 ft MSL",
      "700 ft AGL everywhere; up to 14,500 ft MSL",
      "The surface; up to FL 600",
      "1,200 ft AGL; up to 10,000 ft MSL"
    ],
    a: 0,
    exp: "Class E floors are the surface (surface areas), 700 ft AGL (magenta vignette), 1,200 ft AGL (blue vignette or the default floor over most of the country), or 14,500 ft MSL where none of those apply (except within 1,500 ft of the surface). Class E extends upward to, but not including, 18,000 ft MSL where Class A begins, and it also exists above FL 600. Knowing the floor matters because VFR minimums and IFR clearance limits change at the Class G/E boundary."
  },
  {
    id: "airspace-mcq-006", type: "mcq", topic: "airspace", ref: "14 CFR 91.155", tags: ["flight-review"],
    q: "What are the basic VFR weather minimums in Class G airspace at or below 1,200 ft AGL during the day?",
    choices: [
      "3 SM visibility; 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds",
      "1 SM visibility; 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds",
      "1 SM visibility; clear of clouds",
      "3 SM visibility; clear of clouds"
    ],
    a: 2,
    exp: "Low Class G in the daytime has the least restrictive minimums: 1 SM and clear of clouds. At night at or below 1,200 ft AGL it becomes 3 SM and 500/1,000/2,000, except that 91.155(b)(2) allows an aircraft to operate clear of clouds with 1 SM in the traffic pattern within 1/2 mile of the runway. Above 1,200 ft AGL but below 10,000 ft MSL, Class G requires 1 SM day / 3 SM night with 500/1,000/2,000 cloud clearance."
  },
  {
    id: "airspace-mcq-007", type: "mcq", topic: "airspace", ref: "14 CFR 91.155", tags: ["flight-review"],
    q: "What VFR weather minimums apply inside Class B airspace?",
    choices: [
      "3 SM visibility and 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds",
      "3 SM visibility and clear of clouds",
      "5 SM visibility and 1,000 ft above and below clouds",
      "1 SM visibility and clear of clouds"
    ],
    a: 1,
    exp: "Class B requires only 3 SM and clear of clouds because every aircraft inside is under positive ATC control and separation is provided between all aircraft. Class C, D, and E below 10,000 ft require 3 SM and 500/1,000/2,000. Even with the lower minimum, 91.155(c) and (d) still prohibit operating beneath a ceiling below 1,000 ft or taking off and landing within any surface area with ground visibility below 3 SM without a Special VFR clearance."
  },
  {
    id: "airspace-mcq-008", type: "mcq", topic: "airspace", ref: "14 CFR 91.155", tags: ["flight-review"],
    q: "In Class E airspace at or above 10,000 ft MSL, what are the VFR visibility and cloud clearance minimums, and why are they larger?",
    choices: [
      "3 SM; 500 ft below, 1,000 ft above, 2,000 ft horizontal, because ATC separates all traffic there",
      "5 SM; 1,000 ft above and below, 1 SM horizontal, because Class A rules apply above 10,000 ft",
      "3 SM; 1,000 ft above and below, 1 SM horizontal, because of reduced visibility at altitude",
      "5 SM; 1,000 ft below, 1,000 ft above, 1 SM horizontal, because aircraft above 10,000 ft may be flying faster than 250 kt and need more time to see and avoid"
    ],
    a: 3,
    exp: "Above 10,000 ft MSL the 250 KIAS speed limit no longer applies, so closure rates are higher and the regulation gives VFR pilots more room: 5 SM and 1,000/1,000/1 SM. The same minimums apply in Class G at or above 10,000 ft MSL when more than 1,200 ft AGL. Class A has no VFR minimums because VFR flight is not permitted there."
  },
  {
    id: "airspace-mcq-009", type: "mcq", topic: "airspace", ref: "14 CFR 91.117", tags: ["flight-review", "atp"],
    q: "What is the maximum indicated airspeed at or below 2,500 ft AGL within 4 NM of the primary airport of a Class C or Class D airspace area, unless otherwise authorized by ATC?",
    choices: [
      "200 KIAS",
      "250 KIAS",
      "230 KIAS",
      "180 KIAS"
    ],
    a: 0,
    exp: "91.117(b) limits speed to 200 KIAS at or below 2,500 ft AGL within 4 NM of the primary Class C or D airport, which protects the traffic pattern. The general limit below 10,000 ft MSL is 250 KIAS. If the minimum safe airspeed for a particular operation is higher than the limit, the aircraft may be flown at that minimum safe speed."
  },
  {
    id: "airspace-mcq-010", type: "mcq", topic: "airspace", ref: "14 CFR 91.117(c)", tags: ["flight-review"],
    q: "A pilot is flying VFR underneath a Class B shelf and later through a published VFR corridor through the Class B. What speed limit applies?",
    choices: [
      "250 KIAS, the standard limit below 10,000 ft MSL",
      "No specific limit other than the aircraft's Vno",
      "200 KIAS",
      "180 KIAS within the corridor and 250 KIAS beneath the shelf"
    ],
    a: 2,
    exp: "91.117(c) limits speed to 200 KIAS when operating in the airspace underlying Class B or in a VFR corridor designated through Class B. Those areas concentrate VFR traffic that is not being separated by ATC, so the lower speed increases see-and-avoid time. Inside the Class B itself under ATC control the 250 KIAS limit applies."
  },
  {
    id: "airspace-mcq-011", type: "mcq", topic: "airspace", ref: "AIM 3-2-4; AIM 3-2-5", tags: ["flight-review"],
    q: "Approaching Class D airspace, you transmit, \"Podunk Tower, Cessna 123AB, ten miles south, inbound with information Bravo.\" Which tower response means two-way radio communications have been established and you may enter?",
    choices: [
      "\"Aircraft calling Podunk Tower, standby.\"",
      "\"Cessna 123AB, standby.\"",
      "\"Aircraft calling, remain clear of the Class Delta.\"",
      "Silence for 30 seconds after a clear transmission"
    ],
    a: 1,
    exp: "The AIM states that if the controller responds with the aircraft's callsign, even if only to say \"standby,\" radio communications have been established and the pilot may enter. A response that does not use your callsign, such as \"aircraft calling, standby,\" does not establish communications and you must remain outside. If workload prevents entry, the controller will specifically tell you to remain clear. The same principle applies to Class C."
  },
  {
    id: "airspace-mcq-012", type: "mcq", topic: "airspace", ref: "14 CFR 91.215; AIM 3-2-3", tags: ["flight-review"],
    q: "What is the Mode C veil?",
    choices: [
      "The lateral limits of Class B airspace, within which an altitude-encoding transponder is required",
      "A 20 NM radius around Class C airports where Mode C is required from the surface to 10,000 ft MSL",
      "The airspace above 10,000 ft MSL where altitude reporting is mandatory",
      "The airspace within 30 NM of a Class B primary airport listed in Part 91 Appendix D, from the surface to 10,000 ft MSL, where a Mode C transponder (and ADS-B Out) is required"
    ],
    a: 3,
    exp: "The Mode C veil is the 30 NM ring around the primary Class B airports listed in Appendix D, Section 1, from the surface to 10,000 ft MSL. Inside it, 91.215 requires an operating transponder with altitude reporting and 91.225 requires ADS-B Out, even for aircraft well outside the Class B itself. Aircraft that were not originally certificated with an engine-driven electrical system (and have not since been so equipped) may operate within the veil but outside the Class B and below its ceiling without a transponder."
  },
  {
    id: "airspace-mcq-013", type: "mcq", topic: "airspace", ref: "14 CFR 91.225", tags: ["flight-review", "atp"],
    q: "In which of the following is ADS-B Out required?",
    choices: [
      "Class E airspace at and above 10,000 ft MSL, excluding airspace at and below 2,500 ft AGL",
      "All Class D airspace",
      "All Class E airspace above 1,200 ft AGL",
      "Class G airspace within 30 NM of any towered airport"
    ],
    a: 0,
    exp: "91.225 requires ADS-B Out in Class A, B, and C; within the Mode C veil; within the lateral limits of Class B or C up to 10,000 ft MSL; in Class E at and above 10,000 ft MSL except at and below 2,500 ft AGL; and in Class E over the Gulf of Mexico at and above 3,000 ft MSL within 12 NM of the coast. These mirror the Mode C transponder rule in 91.215. Class D and ordinary low-altitude Class E and G carry no ADS-B requirement."
  },
  {
    id: "airspace-mcq-014", type: "mcq", topic: "airspace", ref: "AIM 3-4-3", tags: ["flight-review", "ipc"],
    q: "What is required to fly through a restricted area, and how does an IFR flight typically handle one?",
    choices: [
      "Nothing; restricted areas only advise of military training and VFR flight is permitted",
      "Permission from the FAA Flight Standards District Office in advance",
      "Authorization from the using or controlling agency when the area is active; ATC will clear an IFR flight through it only if the area is not active, otherwise ATC will reroute",
      "A discrete transponder code and two-way communications with the controlling agency"
    ],
    a: 2,
    exp: "Restricted areas contain unusual, often invisible hazards such as artillery firing or aerial gunnery. When active, no one may fly through without permission from the using or controlling agency. For IFR flights, if the area is not active and has been released to the controlling agency, ATC will allow the aircraft through without a specific clearance; if it is active, ATC issues a clearance that avoids the area. Times of use and the controlling agency are listed on the chart margin."
  },
  {
    id: "airspace-mcq-015", type: "mcq", topic: "airspace", ref: "AIM 3-4-5", tags: ["flight-review"],
    q: "May a VFR aircraft fly through an active Military Operations Area (MOA)?",
    choices: [
      "No; MOAs are closed to all civil traffic when active",
      "Yes; no clearance is required, but the pilot should exercise extreme caution and should contact the controlling agency or FSS to determine whether it is active",
      "Yes, but only with a transponder code assigned by the controlling agency",
      "Only above 10,000 ft MSL"
    ],
    a: 1,
    exp: "MOAs separate certain military training activities (such as air combat maneuvers and aerobatics) from IFR traffic. Nonparticipating IFR traffic may be cleared through only if ATC can provide separation; otherwise it is rerouted. VFR pilots are not prohibited but should exercise extreme caution, since military pilots may be flying at high speed and are exempt from 91.303 aerobatic limits. Check activity with the controlling agency or FSS listed on the chart."
  },
  {
    id: "airspace-mcq-016", type: "mcq", topic: "airspace", ref: "AIM 3-4-4; AIM 3-4-6; AIM 3-4-7", tags: ["flight-review"],
    q: "Which statement about special use airspace is correct?",
    choices: [
      "An alert area requires a clearance from the controlling agency because of hazardous activity",
      "A warning area is always entirely within U.S. domestic airspace and is closed to VFR traffic",
      "A controlled firing area (CFA) is depicted on sectional charts with a blue hatched border",
      "A warning area begins 3 NM offshore and contains hazards to nonparticipating aircraft; a CFA is not charted because activities are suspended when spotter aircraft or radar detect an approaching aircraft"
    ],
    a: 3,
    exp: "Warning areas extend from 3 NM outward from the U.S. coast over international or domestic waters and contain restricted-area-type hazards, but because they may be over international waters, entry is not legally prohibited. Alert areas inform pilots of high volumes of training or unusual activity; no clearance is required. CFAs are not charted because activity stops immediately when an aircraft approaches. National Security Areas are areas where pilots are requested to voluntarily avoid flight."
  },
  {
    id: "airspace-mcq-017", type: "mcq", topic: "airspace", ref: "14 CFR 91.161; 14 CFR Part 93 Subpart V", tags: ["flight-review"],
    q: "Which pilots must complete the FAA's Washington, DC Special Flight Rules Area (SFRA) awareness training?",
    choices: [
      "Any pilot who flies under VFR within 60 NM of the DCA VOR/DME",
      "Only pilots who intend to land at an airport inside the Flight Restricted Zone",
      "Only pilots operating IFR into the Washington area",
      "Only pilots based at airports inside the 30 NM SFRA"
    ],
    a: 0,
    exp: "91.161 requires special awareness training (available free on faasafety.gov) for any pilot flying VFR within 60 NM of the DCA VOR/DME, with the certificate kept available. The SFRA is a 30 NM ring around DCA requiring a flight plan, discrete squawk, and two-way communications; the inner FRZ (roughly 13-15 NM) is closed to general aviation except for specifically vetted operations. Violations commonly result in intercepts and certificate action, so this is one TFR-like area to treat with great respect."
  },
  {
    id: "airspace-mcq-018", type: "mcq", topic: "airspace", ref: "AIM 4-3-13; 14 CFR 91.125", tags: ["flight-review"],
    q: "Your radio fails in the pattern at a towered airport. On final, the tower points a flashing red light at you. What does it mean?",
    choices: [
      "Give way to other aircraft and continue circling",
      "Return for landing; a steady green will follow at the proper time",
      "Airport unsafe, do not land",
      "Exercise extreme caution"
    ],
    a: 2,
    exp: "In flight, steady green means cleared to land, flashing green means return for landing (steady green will follow), steady red means give way and continue circling, flashing red means airport unsafe, do not land, and alternating red and green means exercise extreme caution. On the ground the same colors mean: cleared for takeoff, cleared to taxi, stop, taxi clear of the runway in use, and extreme caution; flashing white on the ground means return to your starting point. Acknowledge in daylight by rocking the wings, at night by flashing the landing or navigation lights."
  },
  {
    id: "airspace-mcq-019", type: "mcq", topic: "airspace", ref: "AIM 2-3-5", tags: ["flight-review"],
    q: "A runway holding position marking consists of two solid and two dashed yellow lines. From which side may an aircraft cross without an ATC clearance?",
    choices: [
      "From the solid-line side, because the solid lines face the runway",
      "From the dashed-line side; the dashed lines are on the runway side, so an aircraft exiting the runway crosses them freely, while an aircraft on the solid-line side must hold until cleared",
      "From either side, as long as the tower has been advised",
      "From neither side without a clearance at a towered airport"
    ],
    a: 1,
    exp: "The solid lines are always on the side where the aircraft must hold; the dashed lines are on the runway side. An aircraft exiting the runway crosses from the dashed side and is not clear of the runway until the entire aircraft is past the holding position marking. The same pattern painted on a runway marks a hold point for LAHSO or for intersecting runways, where you must stop short when instructed."
  },
  {
    id: "airspace-mcq-020", type: "mcq", topic: "airspace", ref: "AIM 2-3-5; AIM 2-3-8", tags: ["flight-review", "ipc"],
    q: "What does a yellow 'ladder'-style holding position marking across a taxiway, together with a sign showing a ladder graphic, indicate?",
    choices: [
      "A taxiway hold point used only for intersecting taxiways",
      "The boundary between the movement and non-movement areas",
      "A runway approach area hold point used when the runway is closed",
      "The ILS critical area holding position; hold there when instructed because taxiing beyond it can disturb the localizer or glideslope signal for aircraft on approach"
    ],
    a: 3,
    exp: "The ILS critical area holding position is marked with a yellow ladder-shaped marking and a sign with a ladder graphic. When the ILS is in use and weather is below a prescribed ceiling and visibility (typically 800 ft/2 SM), ATC will instruct you to hold short of the ILS critical area, and you must read it back. Beyond it, the aircraft's structure can distort the localizer or glideslope. The boundary sign on the back has a ladder graphic and tells you when you are clear of the critical area."
  },
  {
    id: "airspace-mcq-021", type: "mcq", topic: "airspace", ref: "AIM 2-3-6", tags: ["flight-review"],
    q: "How is the non-movement area boundary marked, and which side is the movement area?",
    choices: [
      "One solid and one dashed yellow line; the dashed line is on the movement area side, where ATC clearance is required to proceed",
      "Two solid yellow lines; the movement area is the side away from the ramp",
      "A single white line; the movement area is on the runway side",
      "Two dashed yellow lines; the movement area is on the solid side"
    ],
    a: 0,
    exp: "The non-movement area boundary is a solid yellow line and a dashed yellow line side by side. The solid line is on the non-movement (ramp) side where no ATC authorization is needed; the dashed line is on the movement area side. Crossing from solid to dashed means entering taxiways or runways controlled by ATC, so you need a taxi clearance first. Compare with the runway holding position marking, which is two solid plus two dashed lines."
  },
  {
    id: "airspace-mcq-022", type: "mcq", topic: "airspace", ref: "AIM 2-3-3", tags: ["flight-review"],
    q: "Which statement correctly describes a displaced threshold and a blast pad or stopway area?",
    choices: [
      "The displaced threshold area may be used for landing but not takeoff; the chevroned area may be used for taxi only",
      "Neither area may be used for any aircraft operation",
      "The displaced threshold area (white arrows) may be used for taxi, takeoff, and landing rollout from the opposite direction, but not for landing; the yellow-chevroned blast pad or stopway may not be used for taxi, takeoff, or landing",
      "The displaced threshold area may be used for landing in an emergency only; the chevroned area may be used for takeoff"
    ],
    a: 2,
    exp: "A displaced threshold moves the landing point down the runway, usually for obstacle clearance on approach; the pavement before it is full-strength and is available for taxi, takeoff, and rollout from the opposite direction, marked with white arrows leading to a demarcation bar. Yellow chevrons mark a blast pad or stopway that is not load-bearing for normal use and is unusable except as an emergency overrun. Demarcation bars (yellow) separate a displaced threshold from a blast pad or taxiway that precedes it."
  },
  {
    id: "airspace-mcq-023", type: "mcq", topic: "airspace", ref: "AIM 2-1-6; AIM 2-1-11", tags: ["flight-review", "atp"],
    q: "While taxiing toward a runway crossing at a large airport, you see red in-pavement lights illuminate ahead of you at the runway edge. Tower has just cleared you to cross. What should you do?",
    choices: [
      "Continue crossing, because an ATC clearance always overrides automated lighting",
      "Stop; these are Runway Entrance Lights (RELs), part of the Runway Status Light system, indicating the runway is unsafe to enter, and advise ATC",
      "Expedite the crossing, because the lights indicate an aircraft is about to depart",
      "Stop only if the lights are flashing; steady red means proceed with caution"
    ],
    a: 1,
    exp: "Runway Status Lights (RWSL) operate automatically from surveillance data, independent of ATC. Red RELs at a taxiway/runway intersection mean it is unsafe to enter or cross; red Takeoff Hold Lights (THLs) on the runway mean unsafe to depart. The AIM directs pilots never to cross or take off over illuminated red lights even with a clearance, and to notify ATC. Lead-on/lead-off taxiway centerline lights alternating green and yellow, by contrast, simply warn you are within the runway environment or ILS critical area."
  },
  {
    id: "airspace-mcq-024", type: "mcq", topic: "airspace", ref: "AIM 4-3-18; AIM 4-4-7", tags: ["flight-review", "atp"],
    q: "Which ATC instructions must the pilot read back, including the runway designator and callsign?",
    choices: [
      "Only the initial taxi clearance",
      "Frequency changes and altimeter settings",
      "Only hold-short instructions",
      "Runway assignments, hold-short instructions for runways, and line up and wait, plus any clearance to enter, cross, taxi onto, or take off from a specific runway"
    ],
    a: 3,
    exp: "The AIM requires pilots to read back all runway assignments and all hold-short instructions with the runway designator and callsign, and controllers are required to obtain that readback. Line up and wait, cross runway, and takeoff clearances should also be read back with the runway. A full readback catches hearback errors, which are a leading cause of runway incursions. If any instruction is unclear, ask; never guess which runway or taxiway was meant."
  },
  {
    id: "airspace-mcq-025", type: "mcq", topic: "airspace", ref: "AIM 2-1-10", tags: ["flight-review"],
    q: "The rotating beacon at a Class D airport is operating during the day. What does this generally indicate?",
    choices: [
      "The ground visibility is less than 3 SM and/or the ceiling is less than 1,000 ft, so a Special VFR or IFR clearance is required to operate in the surface area",
      "The tower is closed and the airport has reverted to Class E",
      "The runway is closed for maintenance",
      "Nothing; beacons at towered airports operate continuously"
    ],
    a: 0,
    exp: "In Class B, C, D, and E surface areas, daytime beacon operation often indicates the weather is below basic VFR minimums (ground visibility less than 3 SM and/or ceiling less than 1,000 ft), meaning an ATC clearance under 91.157 Special VFR is needed. The AIM is careful to say there is no regulatory requirement for daytime operation, so the beacon is a hint, not a weather report: confirm with ATIS, METAR, or the tower. Beacon colors: white/green civil land airport, white/yellow water, white/green/yellow heliport, two white flashes alternating with green for military."
  },
  {
    id: "airspace-mcq-026", type: "mcq", topic: "airspace", ref: "AIM 2-1-9", tags: ["flight-review"],
    q: "To turn on pilot-controlled lighting and select high intensity, what do you do?",
    choices: [
      "Key the microphone 3 times within 5 seconds on the CTAF",
      "Key the microphone 5 times within 5 seconds on the tower frequency",
      "Key the microphone 7 times within 5 seconds on the specified frequency (usually the CTAF); 5 clicks selects medium and 3 selects low",
      "Key the microphone 7 times within 10 seconds on 122.9"
    ],
    a: 2,
    exp: "Always key 7 times first to turn the system on at the highest intensity, then key 5 or 3 times if you want it lower; the lights run for 15 minutes from the most recent keying, so re-key on final if you are close to the timeout. The frequency is published in the Chart Supplement and on the chart (often the CTAF, but not always). Keying on the wrong frequency is a common reason the lights do not come on."
  },
  {
    id: "airspace-mcq-027", type: "mcq", topic: "airspace", ref: "14 CFR 91.157", tags: ["flight-review", "ipc"],
    q: "What are the requirements for a Special VFR clearance at night within a Class D surface area?",
    choices: [
      "1 SM visibility, clear of clouds, and an ATC clearance; no additional pilot or aircraft requirements",
      "3 SM visibility, clear of clouds, and an ATC clearance",
      "1 SM visibility, clear of clouds, an ATC clearance, and the pilot must be instrument rated and current with the aircraft equipped for IFR",
      "Special VFR is never available at night"
    ],
    a: 2,
    exp: "Special VFR within a surface area requires an ATC clearance, flight visibility of at least 1 SM (ground visibility of 1 SM for takeoff and landing), and clear of clouds. Between sunset and sunrise (or in Alaska when the sun is more than 6 degrees below the horizon) the pilot must be instrument rated and current and the aircraft must be IFR equipped, because a 1-mile night clear-of-clouds operation is essentially instrument flying. Some busy Class B airports prohibit SVFR for fixed-wing aircraft (listed in Appendix D, Section 3), and helicopters are exempt from the 1 SM visibility requirement."
  },
  {
    id: "airspace-mcq-028", type: "mcq", topic: "airspace", ref: "14 CFR 91.126; AIM 4-3-3", tags: ["flight-review"],
    q: "Approaching a non-towered airport in Class G airspace, which traffic pattern procedure is required by regulation and which is recommended?",
    choices: [
      "Required: enter on a 45-degree leg to downwind; recommended: left turns",
      "Required: all turns to the left unless the airport displays visual indicators for right traffic; recommended: entering at pattern altitude (typically 1,000 ft AGL) on a 45-degree leg to the downwind",
      "Required: 1,000 ft AGL pattern altitude; recommended: straight-in approaches",
      "Required: monitor UNICOM; recommended: a midfield crosswind entry"
    ],
    a: 1,
    exp: "91.126(b) (and 91.127 for Class E airports) is the regulatory part: airplanes make all turns to the left unless light signals or visual markings such as the segmented circle indicate right traffic. The AIM and AC 90-66 give the recommended practices: 1,000 ft AGL pattern altitude for piston aircraft (1,500 ft for large and turbine aircraft), 45-degree entry to the downwind at pattern altitude, and departing straight out or with a 45-degree turn in the direction of the pattern after reaching pattern altitude. Straight-in approaches are not prohibited, but the pilot must not interfere with aircraft already established in the pattern."
  },
  {
    id: "airspace-mcq-029", type: "mcq", topic: "airspace", ref: "AIM 4-3-11", tags: ["flight-review", "atp"],
    q: "Which statement about Land and Hold Short Operations (LAHSO) is correct?",
    choices: [
      "A LAHSO clearance is mandatory once issued, and the pilot must plan to stop within the available landing distance",
      "ATC may issue LAHSO clearances whenever the runway is dry, regardless of ceiling and visibility",
      "Student pilots may accept LAHSO as long as their instructor has endorsed them for it",
      "The pilot in command may decline a LAHSO clearance and should do so if it would compromise safety; ATC issues LAHSO only with at least a 1,000 ft ceiling and 3 SM visibility, and student pilots and pilots unfamiliar with LAHSO should not participate"
    ],
    a: 3,
    exp: "LAHSO is a pilot-elected program: the PIC has final authority to accept or decline and must decline if safety would be compromised (wet runway, tailwind, unfamiliar airport, long or fast aircraft). Weather must be at least basic VFR (1,000 and 3) and the available landing distance (ALD) is published in the Chart Supplement and on the airport diagram. If you accept, you must read back the full clearance including the hold-short point; if a go-around becomes necessary, you are expected to maintain safe separation from the crossing traffic and advise ATC."
  },

  // ───────────────────────── CARD ─────────────────────────
  {
    id: "airspace-card-001", type: "card", topic: "airspace", ref: "AIM 4-3-13", tags: ["flight-review"],
    front: "ATC light gun signals: give the meaning of each color, on the ground and in flight.",
    back: "Steady green: ground = cleared for takeoff; air = cleared to land\nFlashing green: ground = cleared to taxi; air = return for landing (steady green to follow)\nSteady red: ground = stop; air = give way to other aircraft and continue circling\nFlashing red: ground = taxi clear of runway in use; air = airport unsafe, do not land\nFlashing white: ground = return to starting point on airport (not used in flight)\nAlternating red/green: ground and air = exercise extreme caution\nAcknowledge: rock wings (day) or flash landing/nav lights (night)"
  },
  {
    id: "airspace-card-002", type: "card", topic: "airspace", ref: "AIM 2-1-2", tags: ["flight-review"],
    front: "VASI and PAPI: what do the color combinations tell you, and what obstacle clearance do they guarantee?",
    back: "2-bar VASI: red over white = on glide path (\"red over white, you're all right\"); white/white = too high; red/red = too low (\"red over red, you're dead\")\n3-bar VASI: near/middle bars = lower glide path (most aircraft); middle/far bars = upper glide path for high-cockpit aircraft\nPAPI (4 lights in a row): 2 white/2 red = on path; 3 white = slightly high; 4 white = high; 3 red = slightly low; 4 red = low\nVASI gives safe obstruction clearance within +/-10 degrees of the extended centerline out to 4 NM; PAPI to 3.4 NM. Outside that, do not assume terrain clearance."
  },
  {
    id: "airspace-card-003", type: "card", topic: "airspace", ref: "AIM 2-3-8 through 2-3-13", tags: ["flight-review"],
    front: "Airport sign colors: what does each color scheme mean?",
    back: "White on red = mandatory instruction (runway holding position, ILS critical area, no entry)\nYellow on black = location (\"you are here\": taxiway or runway you are on)\nBlack on yellow = direction (arrow to a taxiway) or destination (arrow to runway, ramp, FBO, etc.)\nWhite on black = runway distance remaining (thousands of feet)\nYellow with black graphic = boundary signs: runway safety area/OFZ boundary (hold-short graphic on back of the hold sign) and ILS critical area boundary (ladder); use them to know when you are clear\nBlack on yellow with no arrow = information (noise abatement, frequencies)"
  },
  {
    id: "airspace-card-004", type: "card", topic: "airspace", ref: "AIM 4-1-9; AIM 4-1-11", tags: ["flight-review"],
    front: "CTAF, UNICOM, and MULTICOM: what are they and what frequency is MULTICOM?",
    back: "CTAF = Common Traffic Advisory Frequency: whatever frequency is designated for self-announcing at an airport without an operating tower (may be the UNICOM, MULTICOM, FSS, or part-time tower frequency). Identified by the solid blue circle with a 'C' on the chart.\nUNICOM = non-government air/ground station (FBO) providing airport info (fuel, wind, runway in use); common UNICOM frequencies 122.7, 122.725, 122.8, 122.975, 123.0, 123.05, 123.075.\nMULTICOM = 122.9, used as CTAF where there is no tower, FSS, or UNICOM.\nSelf-announce position within 10 miles inbound, entering downwind, base, final, exiting runway; when departing, before taxi and before takeoff."
  },
  {
    id: "airspace-card-005", type: "card", topic: "airspace", ref: "AIM 4-1-15; AIM 5-1-3", tags: ["flight-review"],
    front: "VFR flight following: what is it, what does ATC provide, and what are its limits?",
    back: "Radar traffic information service for VFR aircraft, requested from approach control or center (\"request flight following\") and provided on a workload-permitting basis.\nATC provides traffic advisories, safety alerts, and will help with airspace (and usually coordinates Class B/C/D entry), but the pilot remains responsible for see-and-avoid, terrain, weather, and airspace compliance unless explicitly cleared.\nATC may terminate it any time (\"radar service terminated, squawk VFR\"). Note that flight following is NOT a Class B clearance; you still need to hear \"cleared into the Class Bravo.\""
  },
  {
    id: "airspace-card-006", type: "card", topic: "airspace", ref: "AIM 5-1-3", tags: ["flight-review", "ipc"],
    front: "NOTAM types and where to get them.",
    back: "NOTAM (D): distant; all navaids in the NAS, public-use airports, and seaplane bases listed in the Chart Supplement (runway/taxiway closures, lighting outages, obstructions, airspace). Keyworded (RWY, TWY, APRON, NAV, COM, SVC, OBST, AIRSPACE, ODP, SID, STAR, etc.)\nFDC NOTAMs: regulatory in nature; amendments to instrument approach procedures and charts, and TFRs (also Special Notices)\nPointer NOTAMs point to another NOTAM; SAA NOTAMs for special activity airspace; Military NOTAMs for military airfields; International NOTAMs\nSources: FAA NOTAM Search (notams.aim.faa.gov), FSS briefing (1-800-WX-BRIEF / 1800wxbrief.com), EFB briefings, and the FAA Domestic Notices and International Notices web pages (which replaced the NTAP in 2020). 91.103 requires familiarity with all available information, which includes NOTAMs."
  },
  {
    id: "airspace-card-007", type: "card", topic: "airspace", ref: "AIM 2-3-3; AIM 4-3-4", tags: ["flight-review"],
    front: "Runway numbering, and how to read the wind sock, tetrahedron, and segmented circle.",
    back: "Runway number = magnetic azimuth of the runway centerline rounded to the nearest 10 degrees with the last zero dropped (e.g., 268 degrees magnetic = Runway 27). Parallel runways add L/C/R. Numbers change over time as magnetic variation drifts.\nWind sock (cone): wind blows into the large end, so the small end points downwind; land toward the large end (into the wind). A fully extended sock indicates roughly 15 kt or more.\nTetrahedron: small end points in the direction of landing; it may be manually locked to show the runway in use, so do not rely on it for wind. Disregard it when a tower is operating.\nSegmented circle: contains the wind indicator plus landing strip indicators and L-shaped traffic pattern indicators; the short leg shows the base leg and tells you whether the pattern is left or right for each runway."
  },
  {
    id: "airspace-card-008", type: "card", topic: "airspace", ref: "AIM 5-1-4; AIM 5-1-14", tags: ["flight-review"],
    front: "VFR flight plans: how are they activated and closed, and what happens if you forget?",
    back: "File with FSS (1800wxbrief.com, phone, or EFB). A VFR flight plan is NOT automatically activated: open it with FSS after departure (radio or phone). It is also not automatically closed on landing: close it with FSS by phone or radio (a tower does not close VFR flight plans unless you ask and they agree).\nIf not closed within 30 minutes after the ETA, FSS begins search procedures (information requests to the destination, then alerting Search and Rescue). Update your ETA with FSS if you will be more than 30 minutes late.\nA DVFR flight plan is required to penetrate an ADIZ."
  },
  {
    id: "airspace-card-009", type: "card", topic: "airspace", ref: "14 CFR 91.155; AIM 3-1-4", tags: ["flight-review"],
    front: "Basic VFR weather minimums by airspace class (visibility / cloud clearance).",
    back: "Class A: VFR not permitted\nClass B: 3 SM / clear of clouds\nClass C, D, and E below 10,000 MSL: 3 SM / 500 below, 1,000 above, 2,000 horizontal\nClass E at or above 10,000 MSL: 5 SM / 1,000 below, 1,000 above, 1 SM horizontal\nClass G at or below 1,200 AGL: day 1 SM clear of clouds; night 3 SM, 500/1,000/2,000\nClass G above 1,200 AGL but below 10,000 MSL: day 1 SM, night 3 SM; 500/1,000/2,000\nClass G above 1,200 AGL and at or above 10,000 MSL: 5 SM / 1,000/1,000/1 SM\nSurface areas: no VFR beneath a ceiling below 1,000 ft; takeoff/landing requires 3 SM ground visibility (or SVFR)"
  },
  {
    id: "airspace-card-010", type: "card", topic: "airspace", ref: "AIM 5-6-1; 14 CFR Part 99; AIM 3-5-3", tags: ["flight-review"],
    front: "ADIZ and TFR basics: what do you need to penetrate an ADIZ, and how do you learn about TFRs?",
    back: "ADIZ (Air Defense Identification Zone): a flight plan is required (IFR, or DVFR for VFR), two-way radio, an operating transponder with altitude reporting, and position reports, with the ADIZ penetration time and point reported to ATC or FSS; significant deviations from the filed estimate or route must be reported. Applies to the U.S. coastal/contiguous ADIZ and the Alaska ADIZ.\nTFRs are issued as FDC NOTAMs under 91.137-91.145 (disaster/hazard areas, VIP movement under 91.141, stadium/sporting events under 99.7 special security instructions, space launches, etc.). Get them from the FSS briefing, tfr.faa.gov, and EFB overlays; a stadium TFR (3 NM / 3,000 ft AGL, one hour before to one hour after a major sporting event) is a standing NOTAM that does not show up as a separate TFR on many apps."
  },

  // ───────────────────────── SCENARIO ─────────────────────────
  {
    id: "airspace-scn-001", type: "scenario", topic: "airspace", ref: "AIM 3-2-4; 14 CFR 91.130", tags: ["flight-review", "c172"],
    q: "You are flying a 172S VFR at 2,500 ft MSL toward a Class C airport (field elevation 400 ft) to land. Fifteen miles out you call, \"Metro Approach, Cessna 4521J, fifteen miles northeast at two thousand five hundred, landing Metro with information Delta.\" The controller answers, \"Aircraft calling Metro Approach, standby.\" Two minutes later you are 9 miles out and still have not heard your callsign. What is the correct action?",
    choices: [
      "Continue inbound; the controller's acknowledgment of your call established communications and you have a transponder and ADS-B Out",
      "Continue inbound but climb above 4,400 ft MSL so you remain above the Class C shelf until you hear your callsign",
      "Remain outside the Class C (turn, slow down, or circle outside the 10 NM shelf) until the controller responds using your callsign; if nothing is heard, call again",
      "Switch to the tower frequency and call the tower directly, since the tower owns the surface area"
    ],
    a: 2,
    exp: "Two-way communications are established only when ATC responds using your callsign; \"aircraft calling, standby\" does not count, so you may not enter the Class C. At 9 NM you are about to penetrate the 10 NM shelf whose floor is 1,200 ft above the field (1,600 ft MSL here) and you are at 2,500 ft, so you must maneuver to stay outside or below it until you are acknowledged. Climbing above the shelf top (4,000 ft above field = 4,400 ft MSL) is legal in principle but is poor judgment this close to arrival. Calling the tower is wrong: approach control is the facility that provides Class C service and sequencing."
  },
  {
    id: "airspace-scn-002", type: "scenario", topic: "airspace", ref: "AIM 4-3-11", tags: ["flight-review", "pa44"],
    q: "You are the PIC of a PA-44 Seminole arriving at night after rain showers have moved through. The runway is reported wet. Tower says, \"Seminole 8MA, cleared to land Runway 27, hold short of Runway 18 for departing traffic.\" The Chart Supplement lists the available landing distance for Runway 27 before Runway 18 as 3,100 ft. Your POH landing distance over a 50 ft obstacle on a dry runway is about 2,200 ft at your weight. What should you do?",
    choices: [
      "Accept the clearance and read it back; 3,100 ft exceeds the POH dry-runway distance with a comfortable margin",
      "Decline: \"Unable hold short, Seminole 8MA,\" and request a full-length landing clearance, because a wet runway at night with POH figures based on dry pavement and maximum braking leaves inadequate margin",
      "Accept the clearance but plan to go around if the landing looks long",
      "Accept the clearance and land on the first few hundred feet of the runway at minimum airspeed to ensure stopping"
    ],
    a: 1,
    exp: "LAHSO is pilot-elected and the AIM expects the PIC to decline whenever it would compromise safety; POH landing distances assume a dry, level runway, ideal technique, and maximum braking, and wet pavement at night with a possible tailwind component can easily add 50 percent or more. The LAHSO program itself is designed for dry runways and basic VFR conditions, and a go-around is not an acceptable substitute for a decision made before the clearance is accepted. Declining does not require a reason, though a brief one helps ATC; it will cost a few minutes of sequencing and nothing else."
  },
  {
    id: "airspace-scn-003", type: "scenario", topic: "airspace", ref: "AIM Ch. 7 Sec. 4 (Wake Turbulence)", tags: ["flight-review", "c172"],
    q: "You are holding short in a 172S at a towered airport with a light, quartering tailwind. A Boeing 737 has just rotated about 4,000 ft down the 9,000 ft runway, and tower says, \"Cessna 21J, caution wake turbulence, departing seven thirty-seven, Runway 9, cleared for takeoff.\" What is the best course of action?",
    choices: [
      "Take off immediately and stay below the 737's flight path until clear of its climb-out",
      "Take off, rotate before the 737's rotation point, and climb above its flight path, turning upwind of its track; if that is not possible, tell tower you will wait",
      "Take off and plan to rotate well beyond the 737's rotation point so you stay in the air behind it",
      "Decline and ask for at least 3 minutes, since a 2-minute wait is required by regulation for a small aircraft behind a large jet"
    ],
    a: 1,
    exp: "Wingtip vortices begin at rotation, sink at 300-500 fpm, and drift with the wind; a light quartering tailwind is the worst case because it keeps the upwind vortex on the runway and pushes it toward your rotation point. The correct technique behind a departing large aircraft is to rotate before its rotation point and climb above its flight path while staying upwind, which in a 172 behind a 737 is often impossible, in which case the right answer is to tell tower you will wait. When a pilot accepts a takeoff clearance with a wake turbulence advisory, the pilot has accepted responsibility for separation; ATC applies mandatory time intervals (2 or 3 minutes) only in specific cases such as departures behind a heavy or intersection departures behind a large aircraft; a 737 is a large aircraft departing full length ahead of you, so no interval is required and it is up to you to request more time."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "airspace-oral-001", type: "oral", topic: "airspace", ref: "14 CFR 91.131; 91.215; 91.225; AIM 3-2-3", tags: ["flight-review", "cfi"],
    q: "Walk me through everything required to operate in Class B airspace: pilot, aircraft, and ATC.",
    answer: "Class B requires an ATC clearance before entry; two-way communications alone are not enough, and I need to hear the words \"cleared into the Class Bravo.\" The aircraft needs an operable two-way radio, a transponder with altitude reporting, and ADS-B Out, and for IFR operations a VOR or TACAN receiver or a suitable RNAV system. The pilot must hold at least a private pilot certificate, or be a student, recreational, or sport pilot with the specific training and endorsement from 61.95 (or the equivalent), and even then cannot take off or land at the twelve airports in Appendix D, Section 4. Inside Class B, VFR minimums are 3 SM and clear of clouds because ATC separates all traffic, the speed limit is 250 KIAS, and beneath a shelf or in a VFR corridor it is 200 KIAS. The Mode C veil extends the transponder and ADS-B requirement to 30 NM from the primary airport, surface to 10,000 ft MSL.",
    points: [
      "Explicit ATC clearance required (not just communications)",
      "Two-way radio, Mode C transponder, ADS-B Out; VOR/TACAN or RNAV for IFR",
      "Private pilot minimum; student/sport/recreational need 61.95-type endorsement; Appendix D Section 4 airports excluded",
      "VFR minimums 3 SM clear of clouds; 250 KIAS inside, 200 beneath/VFR corridor",
      "Mode C veil: 30 NM, surface to 10,000 ft MSL"
    ]
  },
  {
    id: "airspace-oral-002", type: "oral", topic: "airspace", ref: "AIM 3-2-4; 3-2-5; 14 CFR 91.129; 91.130", tags: ["flight-review", "cfi"],
    q: "Compare Class C and Class D: dimensions, equipment, and exactly what it takes to legally enter each.",
    answer: "Class C is normally a 5 NM core from the surface to 4,000 ft above the airport and a 10 NM shelf from 1,200 to 4,000 ft above the airport, with a 20 NM outer area where services are available but nothing is required. Class D is roughly a 4 NM radius from the surface to 2,500 ft above the airport. Both require only that two-way radio communications be established before entry and maintained while inside. Communications are established when the controller responds with my callsign, even if it is only \"Cessna 123AB, standby\"; a reply without my callsign does not count. Class C additionally requires a transponder with altitude reporting and ADS-B Out; Class D has no equipment requirement beyond the radio. Both have 3 SM and 500/1,000/2,000 VFR minimums, and within 4 NM of the primary airport at or below 2,500 ft AGL the speed limit is 200 KIAS.",
    points: [
      "Class C: 5 NM core to 4,000 ft above airport, 10 NM shelf 1,200-4,000; Class D: ~4 NM to 2,500 ft above airport",
      "Entry for both: two-way radio communications established (callsign used by ATC)",
      "\"Standby\" with callsign = established; without callsign = not established",
      "Class C needs Mode C transponder and ADS-B Out; Class D needs radio only",
      "200 KIAS within 4 NM at or below 2,500 AGL"
    ]
  },
  {
    id: "airspace-oral-003", type: "oral", topic: "airspace", ref: "AIM 3-4-1 through 3-4-8; AIM 3-5-3", tags: ["flight-review", "cfi"],
    q: "Name the types of special use airspace and tell me which ones you may fly through VFR, which require permission, and how you find out whether they are active.",
    answer: "Prohibited areas are closed to all flight for national security reasons. Restricted areas contain hazards such as live fire; when active I need authorization from the using or controlling agency, and IFR flights are routed around unless ATC confirms the area is cold. Warning areas start 3 NM offshore and contain similar hazards, but because they may lie in international airspace entry is not prohibited, so I treat them like restricted areas. MOAs separate military training from IFR traffic; VFR flight is allowed but I should contact the controlling agency or FSS and exercise extreme caution. Alert areas simply warn of high-volume training or unusual activity with no restriction. Controlled firing areas are not charted because activity stops when aircraft are detected, and National Security Areas are voluntary avoidance. Times, altitudes, and the controlling agency are printed in the chart margin, and real-time status comes from FSS, the controlling agency, ATC with flight following, and SAA NOTAMs on sua.faa.gov. TFRs are separate, issued as FDC NOTAMs, and must be checked on every flight.",
    points: [
      "Prohibited: no entry; Restricted: permission when active, ATC routes IFR around",
      "Warning areas: 3 NM offshore, hazardous, entry not legally prohibited",
      "MOA: VFR permitted with caution; Alert: no restriction; CFA: uncharted; NSA: voluntary avoidance",
      "Status from chart margin, FSS, controlling agency, ATC, SAA NOTAMs",
      "TFRs are FDC NOTAMs; check every flight"
    ]
  },
  {
    id: "airspace-oral-004", type: "oral", topic: "airspace", ref: "AIM 2-3-5; AIM 4-3-18; AIM 4-3-20; AC 91-73", tags: ["flight-review", "atp", "cfi"],
    q: "What do you do, as a matter of personal procedure, to avoid a runway incursion at an unfamiliar airport?",
    answer: "I start on the ground with the airport diagram out and the hot spots identified, write down the taxi clearance, and read it back in full with every runway assignment, hold-short instruction, and crossing. I taxi with the diagram oriented to my heading, confirm each sign and marking against the clearance, and treat any confusion as a reason to stop and ask rather than continue. I never cross a runway holding position marking (solid lines on my side) or illuminated red runway status lights without an explicit clearance, even if I think I was cleared. After landing I keep rolling until the entire airplane is past the holding position marking and only then stop, finish the after-landing checklist, and switch to ground. I keep the cockpit sterile during taxi, with lights on when crossing or entering runways so I am visible. If I lose situational awareness, I stop, tell ATC where I think I am, and ask for progressive taxi.",
    points: [
      "Brief the diagram and hot spots; write and read back full taxi clearance",
      "Read back runway assignments, hold-short, LUAW, crossings with runway and callsign",
      "Never cross hold-short lines or red RWSL without clearance; stop and ask when unsure",
      "Clear of runway only when entire aircraft is past the marking; checklists after",
      "Sterile cockpit; use lights; request progressive taxi if lost"
    ]
  },
  {
    id: "airspace-oral-005", type: "oral", topic: "airspace", ref: "14 CFR 91.157; AIM 2-1-10; AIM 4-4-6", tags: ["flight-review", "ipc", "cfi"],
    q: "You arrive at a Class D airport in the afternoon and notice the beacon is on. Explain what that tells you and what your options are.",
    answer: "A beacon running during daylight hours in a Class B, C, D, or E surface area generally means the ground visibility is below 3 SM and/or the ceiling is below 1,000 ft, so the field is IFR. The AIM is careful to say there is no regulatory requirement for daytime beacon operation, so I confirm with the ATIS or ASOS rather than assuming. If the field is below basic VFR, I cannot enter the surface area VFR; my options are to divert, hold outside the surface area in VFR conditions, request a Special VFR clearance (at least 1 SM visibility and clear of clouds, ATC permitting, and at night only if I am instrument rated and current in an IFR-equipped airplane), or pick up an IFR clearance if I am instrument current. Special VFR is issued only if it does not delay IFR traffic and is not available to fixed-wing aircraft at some Class B airports.",
    points: [
      "Daytime beacon generally = ground visibility under 3 SM and/or ceiling under 1,000 ft",
      "Not a regulatory requirement; confirm with ATIS/ASOS",
      "Options: divert, hold outside, Special VFR, or IFR clearance",
      "SVFR: 1 SM, clear of clouds, ATC clearance; night requires IFR pilot and aircraft",
      "SVFR subordinate to IFR traffic; prohibited at some Class B airports"
    ]
  },
  {
    id: "airspace-oral-006", type: "oral", topic: "airspace", ref: "AIM Ch. 7 Sec. 4 (Wake Turbulence)", tags: ["flight-review", "cfi"],
    q: "Explain how wingtip vortices behave and the techniques you use to avoid them on takeoff and landing behind a large aircraft.",
    answer: "Vortices are generated whenever the wing is producing lift, so from rotation to touchdown; they are strongest when the generating aircraft is heavy, clean, and slow. They sink at 300-500 fpm and level off roughly 500 to 900 ft below the flight path, and in a no-wind condition they spread laterally at about 2-3 kt; a 1-5 kt crosswind component can hold the upwind vortex on the runway and drift the downwind one onto a parallel runway, and a light quartering tailwind is the worst case because it moves the vortices toward the touchdown or rotation zone. Landing behind a large aircraft, I stay at or above its flight path and land beyond its touchdown point; landing behind a departing aircraft, I land well before its rotation point. Departing behind a departing large aircraft, I rotate before its rotation point and climb above and upwind of its path, or wait. Departing behind a landing aircraft, I rotate beyond its touchdown point. In the en route environment I avoid flying directly below and behind a heavy, and ATC applies extra separation such as 2- or 3-minute departure intervals behind heavies or for intersection departures behind large aircraft, but once I accept a clearance with a wake turbulence advisory the avoidance is my responsibility.",
    points: [
      "Generated from rotation to touchdown; worst when heavy, clean, slow",
      "Sink 300-500 fpm, level off 500-900 ft below; light quartering tailwind is worst case",
      "Landing: stay above the flight path, land beyond their touchdown point",
      "Takeoff: rotate before their rotation point, climb above and upwind; or wait",
      "Pilot responsible once accepting clearance with advisory; can request more time"
    ]
  }
);
