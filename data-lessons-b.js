window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
  {
    id: "weather-stability", topic: "weather", title: "Stability, lapse rates and what the sky tells you", minutes: 6,
    refs: ["PHAK Ch. 12", "AC 00-6B"], tags: ["flight-review", "ipc", "cfi"],
    quiz: ["weather-mcq-001", "weather-mcq-002", "weather-mcq-003", "weather-mcq-004", "weather-mcq-006", "weather-card-001", "weather-oral-001"],
    keywords: ["stability", "lapse rate", "adiabatic", "inversion", "dew point", "cumulus", "stratus"],
    body: [
      { h: "Why it matters" },
      { p: "Stability is the one weather concept that predicts almost everything else you care about: whether the clouds will be stratus or cumulus, whether the ride will be smooth or rough, whether precipitation will be steady drizzle or a shower, and whether the visibility will be poor in haze or good between the bumps. If you can name the stability of the air mass from the briefing, you can predict the flight." },
      { h: "The three lapse rates" },
      { table: { head: ["Lapse rate", "Value", "What it describes"], rows: [
        ["Standard (ISA)", "2°C (3.5°F) per 1,000 ft", "The model atmosphere used for altimetry and performance charts; 15°C and 29.92 in Hg at sea level"],
        ["Dry adiabatic (DALR)", "3°C (5.4°F) per 1,000 ft", "How fast an unsaturated parcel cools as it rises (expansion only, no heat exchange)"],
        ["Moist adiabatic (MALR)", "about 1.1–2.8°C per 1,000 ft (varies with temperature; roughly 1.5°C is a common working figure)", "A saturated parcel cools more slowly because condensation releases latent heat"]
      ] } },
      { p: "The environmental lapse rate (ELR) is whatever the real atmosphere is doing that day, measured by the sounding. Stability is simply the comparison: lift a parcel, let it cool at the adiabatic rate, and ask whether it ends up warmer (keeps rising, unstable) or colder (sinks back, stable) than the air around it." },
      { ul: [
        "ELR greater than 3°C/1,000 ft: **absolutely unstable**. Any lifted parcel is warmer than its surroundings and accelerates upward.",
        "ELR less than the moist rate: **absolutely stable**. Even a saturated parcel ends up colder than the environment and sinks back.",
        "ELR between the moist and dry rates: **conditionally unstable**. Stable while dry, unstable once the parcel saturates. This is the common afternoon case that produces towering cumulus from a benign-looking morning."
      ] },
      { callout: "A temperature inversion (temperature increasing with height) is the most stable case. Expect a smooth, stable layer with haze, smoke and fog trapped beneath it, and a sharp wind shear and turbulence zone at its top.", kind: "tip" },
      { h: "Reading the sky" },
      { table: { head: ["Indicator", "Stable air", "Unstable air"], rows: [
        ["Clouds", "Stratiform, layered", "Cumuliform, vertical development"],
        ["Turbulence", "Smooth", "Rough, thermals, gusts"],
        ["Precipitation", "Steady, continuous, drizzle", "Showery, heavy, brief"],
        ["Visibility", "Poor (haze, smoke, fog)", "Good, except in showers"],
        ["Icing", "Rime in stratus, over a long distance", "Clear ice in cumulus, intense but local"]
      ] } },
      { p: "What makes air unstable: warming from below (surface heating on a summer afternoon, cold air advected over warm ground or water) and cooling aloft. What makes it stable: cooling from below (clear nights, warm air moving over a cold surface) and warming aloft (subsidence under a high, the warm sector of a front). Moisture tips a conditionally unstable layer over the edge, which is why a humid day with the same temperature profile produces thunderstorms while a dry one produces only thermals." },
      { h: "Dew point and cloud bases" },
      { p: "The temperature-dew point spread is your fog and cloud-base gauge. A rising dry parcel cools 5.4°F per 1,000 ft while its dew point falls about 1°F per 1,000 ft, so they converge at 4.4°F per 1,000 ft. Estimated convective cloud base (AGL) = spread in °F ÷ 4.4 × 1,000, or spread in °C ÷ 2.5 × 1,000. A 77°F/59°F surface reading gives an 18°F spread, about 4,100 ft AGL. This only works for convective (cumulus) bases, not for stratus produced by lifting or advection." },
      { callout: "Evening METAR with a 1–2°C spread, calm wind, clear sky: expect radiation fog by dawn. Spread closing with wind moving moist air over a colder surface: advection fog, which does not burn off on schedule.", kind: "warn" },
      { h: "DPE and interview follow-ups" },
      { ul: [
        "\"Why does moist air cool more slowly?\" Latent heat of condensation is released into the parcel.",
        "\"Where is the turbulence in an inversion?\" At the top, where the stable layer meets the wind above it.",
        "\"Is cold air stable?\" Not by itself. Cold air over warm ground is unstable. The question is always the temperature profile, not the temperature."
      ] },
      { h: "Check yourself" },
      { ul: [
        "State the standard, dry adiabatic and moist adiabatic lapse rates without looking.",
        "Define conditional instability in one sentence and give the typical afternoon example.",
        "Surface 84°F / dew point 62°F: estimate the cumulus base.",
        "Name three flight indications of stable air and three of unstable air.",
        "Why does an inversion trap haze, and what hazard sits at its top?"
      ] }
    ]
  },
  {
    id: "weather-fronts", topic: "weather", title: "Fronts and pressure systems", minutes: 7,
    refs: ["PHAK Ch. 12", "AC 00-6B"], tags: ["flight-review", "ipc"],
    quiz: ["weather-mcq-007", "weather-mcq-008", "weather-mcq-009", "weather-mcq-010", "weather-card-003", "weather-scen-004"],
    keywords: ["front", "cold front", "warm front", "occluded", "stationary", "low pressure", "high pressure", "squall line", "isobar"],
    body: [
      { h: "Why it matters" },
      { p: "Fronts organize the weather you will actually fly through. Knowing the slope, speed and typical cloud sequence of each type lets you predict ceilings, icing and turbulence hours ahead of the TAF, and it is the first thing a DPE asks when you open a surface analysis chart." },
      { h: "Pressure systems" },
      { ul: [
        "**Low**: in the Northern Hemisphere air flows counterclockwise, inward and upward. Rising air cools, condenses, and produces clouds and precipitation. Lows are where the fronts live.",
        "**High**: clockwise, outward and downward. Subsidence warms and dries the air, so highs mean fair weather, but also stable air with haze, smoke and low-level inversions. Winter highs breed radiation fog.",
        "**Wind and isobars**: closely spaced isobars mean a strong pressure gradient and strong wind. Aloft the wind parallels the isobars (Coriolis balances the gradient); within roughly 2,000 ft of the surface friction slows it and turns it toward low pressure, so surface wind crosses the isobars at an angle and the wind veers (turns clockwise) as you climb out of the friction layer.",
        "**Buys Ballot**: with your back to the wind in the Northern Hemisphere, low pressure is on your left. Flying from a high into a low with no altimeter update, the altimeter reads high and you are lower than indicated: \"high to low, look out below.\""
      ] },
      { h: "Front anatomy" },
      { p: "A front is the boundary between air masses of different density, named for the air that is advancing. Across any front expect a change in temperature, a change in dew point, a wind shift (veering clockwise as a front passes in the Northern Hemisphere), and a pressure change: pressure falls as a front approaches and rises after it passes. The pressure trough and the wind shift are the most reliable passage signs even when no clouds are visible." },
      { table: { head: ["Front", "Slope and speed", "Typical weather"], rows: [
        ["Cold", "Steep; fast, 25–30 mph or more", "Narrow band of cumuliform clouds, showers or thunderstorms along and just ahead of the front, brief passage, then rapid clearing with gusty wind and good visibility. Squall lines may form 50–300 mi ahead of a fast cold front and can be more violent than the front itself."],
        ["Warm", "Shallow, on the order of 1:200; slow, 10–25 mph", "Long, orderly cloud sequence hundreds of miles ahead: cirrus, cirrostratus, altostratus, nimbostratus. Steady precipitation, low ceilings, widespread IFR, fog, and freezing rain where rain falls through a sub-freezing layer. Embedded thunderstorms if the warm air is unstable."],
        ["Stationary", "Little movement", "Weather like a warm front but persistent for days along the boundary."],
        ["Occluded", "Cold front overtakes the warm front", "Combines both: warm-front cloud sequence with cold-front convection along the occlusion; the worst combination of ceilings, icing and turbulence. Cold-type occlusions are most common in the U.S."]
      ] } },
      { callout: "Freezing rain means warmer air above. The classic warm-front winter trap: rain falling from the warm air aloft freezes on contact in the cold layer below. Climbing into the warm layer is often the escape, descending is not.", kind: "warn" },
      { h: "Flying a cold front" },
      { p: "The hazard is concentrated in a narrow band, which makes it tempting to punch through. Do not plan to penetrate a line of thunderstorms. Wait for the front to pass (it moves fast), or go around the end of the line. Post-frontal air is cold, unstable and gusty: expect low-level turbulence, strong crosswinds and, in winter, snow showers and the beginning of a cold-air stratocumulus deck with rime icing." },
      { h: "Flying a warm front" },
      { p: "Weather is widespread and arrives slowly, so the problem is duration, not intensity: long stretches of IMC with low ceilings, poor visibility in rain and fog, and icing throughout the nimbostratus. Alternate planning matters because the whole region may be below minimums at the same time. The wind shear and turbulence at the frontal surface aloft can be sharp even in smooth-looking stratus." },
      { h: "Dry lines, troughs and the jet" },
      { ul: [
        "A **dry line** separates moist Gulf air from dry desert air (Plains, spring): dew point drops sharply, and it is a thunderstorm trigger with no temperature change.",
        "A **trough** is an elongated area of low pressure; a **ridge** is elongated high pressure. Weather on a chart generally lives in the troughs.",
        "The **polar front jet** sits above the surface polar front; clear air turbulence is most likely on the polar (cold) side of the jet and near the sharp upper trough."
      ] },
      { h: "Check yourself" },
      { ul: [
        "List four things that change when you cross a front, and which two are most reliable.",
        "Which way does the wind shift (Northern Hemisphere) as a front passes?",
        "Put the warm-front cloud sequence in order from farthest out to the front.",
        "Why does freezing rain tell you to consider climbing?",
        "Where do squall lines form relative to a cold front, and how far ahead?"
      ] }
    ]
  },
  {
    id: "weather-thunderstorms", topic: "weather", title: "Thunderstorms, wind shear and microbursts", minutes: 7,
    refs: ["AIM 7-1-24", "AIM 7-1-27", "AC 00-54", "AC 00-6B"], tags: ["flight-review", "ipc", "atp", "part135"],
    quiz: ["weather-mcq-011", "weather-mcq-012", "weather-mcq-013", "weather-mcq-014", "weather-mcq-015", "weather-card-004", "weather-card-005", "weather-oral-005"],
    keywords: ["thunderstorm", "microburst", "wind shear", "squall line", "downdraft", "gust front", "hail", "LLWS"],
    body: [
      { h: "Why it matters" },
      { p: "Thunderstorms contain every hazard in the book at once: severe turbulence, severe icing, hail, lightning, low-level wind shear, microbursts, heavy rain and tornadoes. The AIM's rules are blunt and the numbers are small. Airline interviewers and DPEs expect you to know the three ingredients, the three stages, the 20-mile rule and the microburst numbers cold." },
      { h: "Ingredients and stages" },
      { p: "Three ingredients: **unstable air, moisture, and a lifting action** (surface heating, a front, orographic lift, convergence). Remove any one and you get no storm." },
      { table: { head: ["Stage", "Signature", "Hazard"], rows: [
        ["Cumulus", "Updrafts throughout, cloud building; can exceed 3,000 fpm", "Turbulence; no precipitation at the surface yet"],
        ["Mature", "Begins when precipitation reaches the surface; updrafts and downdrafts side by side", "Most violent stage: greatest turbulence, shear, hail, lightning, heavy rain, microbursts"],
        ["Dissipating", "Downdrafts dominate, anvil spreads", "Still dangerous below the cloud; downbursts continue"]
      ] } },
      { p: "A single air-mass cell lives 20 minutes to an hour and a half. Frontal and squall-line storms regenerate continuously and are the ones that produce steady-state supercells. Any storm a radar paints as intense, or that is topped by an anvil and overshooting top, is severe until proven otherwise." },
      { h: "The AIM rules (7-1-27)" },
      { ul: [
        "Avoid by **at least 20 miles** any thunderstorm identified as severe or giving an intense radar echo. Hail and severe turbulence extend well outside the visible cloud, especially under the anvil.",
        "Do not land or take off in the face of an approaching thunderstorm; a sudden gust front or wind shear can cause loss of control.",
        "Do not attempt to fly under a thunderstorm even if you can see through to the other side: shear and microbursts live there.",
        "Do not trust the visual appearance to judge the turbulence inside; the worst turbulence is often in the smooth-looking cloud.",
        "Circumnavigate the entire area when coverage reaches 6/10.",
        "Do not expect ATC to steer you around weather; ask for deviations, listen for PIREPs, and use datalink NEXRAD for strategic planning only (it is minutes old)."
      ] },
      { callout: "If penetration is unavoidable: tighten belts and secure loose objects, set power for the turbulence penetration speed (or Va, lower at light weight), turn up the panel lights, keep your eyes on the instruments, hold a constant attitude and let altitude vary, and do not turn back once inside. A straight path through is shorter than a turn.", kind: "warn" },
      { h: "Microbursts: the numbers (AIM 7-1-24)" },
      { table: { head: ["Parameter", "Value"], rows: [
        ["Downdraft", "up to 6,000 fpm"],
        ["Horizontal outflow winds", "up to 45 kt at the surface"],
        ["Headwind-to-tailwind shear", "up to 90 kt across the microburst"],
        ["Size", "downdraft typically less than 1 mi across; outflow to about 2.5 mi"],
        ["Life", "seldom more than 15 min; intensifies for about 5 min after striking the ground; peak winds 2–4 min"]
      ] } },
      { p: "The encounter on approach: first a performance-increasing headwind (airspeed up, you balloon above the glidepath and are tempted to reduce power), then the downdraft, then a tailwind with airspeed and lift collapsing at the same moment the ground is closest. Microbursts can also be dry, with only virga and blowing dust as the warning. Pilots should report shear as the gain or loss of airspeed and the altitude where it occurred, never as \"positive\" or \"negative\" shear." },
      { memo: { title: "Shear recognition triggers (AC 00-54)", text: "±15 kt airspeed, ±500 fpm vertical speed, ±5° pitch, one dot of glideslope, or an unusual throttle position held for a significant time: any of these on approach means go around, now." } },
      { h: "Escape" },
      { ol: [
        "Maximum power immediately; disconnect the autopilot and autothrottle if installed.",
        "Pitch to the go-around attitude and hold it. Respect the stall warning, but trade airspeed for altitude: do not chase airspeed back to Vref.",
        "Do not change configuration (no gear or flap retraction) until clear of the shear; configuration changes reduce lift momentarily.",
        "If a microburst alert or LLWAS warning is issued, delay the approach or departure. Avoidance beats recovery; a light airplane may not have the performance to escape a strong microburst."
      ] },
      { h: "Check yourself" },
      { ul: [
        "What event defines the start of the mature stage?",
        "Quote the AIM avoidance distance for a severe storm and the coverage at which you circumnavigate the whole area.",
        "Give the microburst downdraft, outflow and total shear numbers.",
        "List three of the five AC 00-54 wind-shear recognition triggers.",
        "Why is the approach-end encounter so deceptive in the first few seconds?"
      ] }
    ]
  },
  {
    id: "weather-icing", topic: "weather", title: "Icing: structural, induction, and the rules", minutes: 7,
    refs: ["AIM 7-1-19", "AIM 7-1-20", "AC 91-74B", "14 CFR 91.527", "PHAK Ch. 12"], tags: ["ipc", "flight-review", "c172", "pa44", "part135"],
    quiz: ["weather-mcq-016", "weather-mcq-017", "weather-mcq-018", "weather-mcq-019", "weather-card-006", "weather-scen-003", "weather-oral-003"],
    keywords: ["icing", "rime", "clear ice", "carburetor ice", "known icing", "freezing rain", "tailplane stall", "frost"],
    body: [
      { h: "Why it matters" },
      { p: "Neither the 172S nor the Seminole is approved for flight into known icing. That makes icing a planning and escape problem rather than an equipment problem, and the examiner wants to hear that you know what \"known icing\" legally means, what you will do in the first minute of an encounter, and why the airplane behaves differently with ice on it." },
      { h: "Structural icing" },
      { p: "Two conditions are required: **visible moisture** (cloud, rain, drizzle) and an **aircraft surface temperature at or below 0°C**. Supercooled liquid water exists down to about −40°C, but most icing occurs between 0 and −20°C, and the heaviest clear ice sits in the 0 to −10°C band." },
      { table: { head: ["Type", "Where", "Character"], rows: [
        ["Clear", "0 to −10°C, large droplets, cumulus and freezing rain", "Glossy, dense, runs aft before freezing, hard to see and hard to shed; the heaviest and most dangerous"],
        ["Rime", "−15 to −20°C, small droplets, stratus", "Opaque, brittle, builds forward on the leading edge; distorts the airfoil more than its weight suggests"],
        ["Mixed", "−10 to −15°C", "Both at once; common in layered clouds with embedded convection"]
      ] } },
      { p: "Freezing rain and freezing drizzle (SLD, supercooled large droplets) are the deadly cases: droplets run back beyond the protected area and build ice where boots and heated surfaces cannot reach. Freezing rain beneath a warm front means warmer air above, so a climb may be the way out." },
      { h: "What ice does to the airplane" },
      { ul: [
        "Lift down, drag up, weight up, stall speed up, and the stall AOA down. Ice on the leading edge can cut the stall margin so much that the stall warning never activates before the wing lets go.",
        "**Tailplane stall**: the horizontal stabilizer collects ice faster than the wing (thinner, sharper leading edge). Extending flaps increases the tail's download and AOA; a tailplane stall after flap extension pitches the nose down abruptly. If pitch control gets strange after flaps go down, retract them to the previous setting. Land with reduced or no flaps and extra speed when carrying ice.",
        "Pitot and static ports ice over (pitot heat on before entering visible moisture below 10°C); antennas vibrate and can break; the propeller sheds ice asymmetrically and vibrates; the windshield opaques.",
        "Induction or carburetor ice: a fixed-pitch prop shows it as an rpm drop; a constant-speed prop hides it as a manifold pressure drop until the governor hits its limit."
      ] },
      { h: "Induction and carburetor ice" },
      { p: "Carburetor ice needs no visible moisture. Fuel vaporization and venturi expansion can drop the carburetor temperature by as much as 60°F (about 33°C), so ice forms at outside temperatures as high as 21°C (70°F) with high humidity; the most likely band is roughly −7 to 21°C. In the carbureted Seminole, with its constant-speed props, the first sign is a drop in manifold pressure with no rpm change; in a fixed-pitch airplane, an rpm drop. Apply full carb heat and expect it to get worse first as the ice melts and the water goes through the engine. The fuel-injected 172S cannot get carburetor ice but can suffer impact icing of the air filter; the alternate air source (automatic on the 172S) bypasses it at a cost in power." },
      { h: "The legal picture" },
      { ul: [
        "The POH limitation for both airplanes: flight into known icing conditions is prohibited. Violating a limitation is 91.9; continuing into icing is a 91.13 careless-or-reckless case.",
        "**Known icing conditions** (FAA 2009 Bell interpretation, AC 91-74B): conditions in which a reasonable and prudent pilot would expect a substantial likelihood of ice forming on the aircraft along the route, altitude and time of flight. It is the forecast picture available to you, not just ice you can see.",
        "AIM 7-1-20: **known or observed or detected ice accretion** is ice actually seen on the aircraft or detected by onboard sensors; **forecast icing conditions** are conditions expected by the NWS or an FAA-approved provider to be conducive to inflight icing.",
        "**91.527** (large and turbine-powered multiengine airplanes): no takeoff with **any** frost, ice or snow adhering to the wings, propellers, windshield, stabilizing or control surfaces, powerplant installation or pitot-static instrument systems (the old \"polished frost\" allowance was deleted from 91.527, 125.221 and 135.227 effective February 2010; the only exception is frost under the wing in the fuel-tank area if authorized by the FAA); no IFR into known or forecast **light or moderate** icing and no VFR into known **light or moderate** icing unless the airplane has functioning deice/anti-ice on the listed surfaces or is certified for icing; no flight into known or forecast **severe** icing.",
        "Frost: even a thin, rough layer can reduce lift enough to prevent takeoff. Remove it."
      ] },
      { h: "PIREP intensities (AIM 7-1-19)" },
      { p: "The current scale is tied to ice-protection workload: **trace** (ice just noticeable, under about 1/4 in per hour; consider leaving), **light** (occasional cycling of deice systems, about 1/4 to 1 in per hour; consider exiting), **moderate** (frequent cycling, 1 to 3 in per hour; exit as soon as possible), **severe** (ice protection cannot keep up and ice forms in unprotected areas, more than 3 in per hour; immediate exit is required by regulation). There is no \"heavy\" level in the current AIM table. Report the type too: rime, clear, or mixed." },
      { h: "Your first minute in ice" },
      { ol: [
        "Pitot heat on, autopilot off so you feel the trim changes, and tell ATC immediately that you are in icing and need a new altitude or a 180.",
        "Change altitude: colder, drier air above if the tops are known and the airplane still climbs; warmer air below if the freezing level is above terrain; or a 180 back into the air you just flew.",
        "Keep the speed up, avoid abrupt maneuvering, no flaps with ice on the tail.",
        "Plan the landing: longer runway, faster approach, partial flaps, unreliable stall warning. File a PIREP."
      ] },
      { h: "Check yourself" },
      { ul: [
        "What two conditions must coexist for structural icing, and which temperature band produces clear ice?",
        "Define known icing conditions in the FAA's legal sense.",
        "What does 91.527 say about frost on the wings, and which operations does the section apply to?",
        "First indication of carb ice in the Seminole versus the 172S?",
        "Why not extend flaps with ice on the horizontal stabilizer?"
      ] }
    ]
  },
  {
    id: "weather-metar-taf", topic: "weather", title: "Decoding METAR, TAF and PIREPs", minutes: 7,
    refs: ["AC 00-45H", "AIM 7-1-18", "AIM 7-1-6", "14 CFR 91.169"], tags: ["ipc", "flight-review", "kt"],
    quiz: ["weather-mcq-023", "weather-mcq-024", "weather-mcq-025", "weather-mcq-026", "weather-mcq-028", "weather-card-007", "weather-card-008", "weather-card-010", "weather-scen-001"],
    keywords: ["METAR", "TAF", "PIREP", "RVR", "TEMPO", "PROB30", "FM", "ceiling", "vertical visibility", "AIRMET", "SIGMET"],
    body: [
      { h: "Why it matters" },
      { p: "Two years away and the codes blur. Decoding fast is a currency skill: the 91.169 alternate decision, the 91.175 approach decision and the VFR/IFR go decision all come straight from these products. The gotchas examiners use are the remarks section, the difference between FM and TEMPO, and what counts as a ceiling." },
      { h: "METAR, group by group" },
      { p: "METAR KDEN 211853Z AUTO 27015G25KT 240V300 3/4SM R35L/2400FT -SN BR BKN008 OVC015 M03/M05 A2992 RMK AO2 PK WND 28032/1835 SLP134 P0002 T10281050" },
      { table: { head: ["Group", "Meaning"], rows: [
        ["211853Z", "21st day, 1853 UTC. SPECI = unscheduled special observation"],
        ["AUTO / COR", "Fully automated / corrected report"],
        ["27015G25KT 240V300", "True direction 270, 15 gusting 25 kt; direction varying 240–300. VRB = variable (light wind). Winds in a METAR are TRUE; tower and ATIS winds are MAGNETIC"],
        ["3/4SM", "Prevailing visibility in statute miles; M1/4SM = less than 1/4"],
        ["R35L/2400FT", "RVR runway 35L 2,400 ft; V = variable, P/M = more/less than the reportable range"],
        ["-SN BR", "Intensity (- light, none moderate, + heavy), descriptor (SH, TS, FZ, BL, DR, MI, BC, PR, VC = vicinity 5–10 SM), phenomena. FG requires visibility below 5/8 SM; BR (mist) is 5/8 to 6 SM. FZRA, FZDZ and +TSRA GR are the ones that end a flight"],
        ["BKN008 OVC015", "Sky in hundreds of feet AGL. FEW 1–2 oktas, SCT 3–4, BKN 5–7, OVC 8. Ceiling = lowest BKN or OVC layer, or VV. VV004 = indefinite ceiling, vertical visibility 400 ft. CB and TCU are appended to the layer"],
        ["M03/M05", "Temperature −3°C, dew point −5°C"],
        ["A2992", "Altimeter 29.92 in Hg"],
        ["RMK AO2", "Automated station with a precipitation discriminator (AO1 cannot tell rain from snow)"],
        ["PK WND 28032/1835", "Peak wind 280 at 32 kt at 1835Z"],
        ["SLP134", "Sea-level pressure 1013.4 hPa (add 10 or 9 and insert the decimal)"],
        ["P0002", "0.02 in of precipitation in the past hour"],
        ["T10281050", "Precise temperature −2.8°C / dew point −5.0°C (1 = negative)"]
      ] } },
      { p: "Other remarks to recognize: RAB15 (rain began at :15), RAE30, TSB05E40, WSHFT 1830 FROPA (wind shift, frontal passage), PRESRR/PRESFR (pressure rising or falling rapidly), $ (maintenance needed), and LTG DSNT W. A \"CIG 008V012\" remark means the ceiling is variable; plan on the low number." },
      { h: "TAF conventions (NWS)" },
      { p: "TAF KSTL 211720Z 2118/2218 20012KT P6SM SCT050 FM220000 18008KT 5SM BR BKN012 WS020/27045KT TEMPO 2203/2206 2SM BR OVC006 PROB30 2208/2212 1SM -RA" },
      { ul: [
        "Issued four times daily (around 0000, 0600, 1200, 1800Z), valid 24 hours (30 hours at some large airports), covering about 5 SM around the airport. The valid period is DDHH/DDHH.",
        "**FM**: a rapid, permanent change; a complete new forecast starts at that time (hhmm).",
        "**TEMPO**: temporary fluctuations expected to last less than an hour at a time and less than half the period in total. The prevailing conditions still apply between fluctuations, but for alternate planning, treat TEMPO conditions as controlling if they are below your minimums.",
        "**PROB30**: 30 percent probability of the condition; the NWS does not use PROB in the first 9 hours of a TAF and does not use PROB40.",
        "**BECMG** is not used in NWS TAFs (international and military TAFs use it for a gradual change over a period).",
        "**WS020/27045KT**: non-convective low-level wind shear at 2,000 ft AGL, 270 at 45 kt; forecast only in the lowest 2,000 ft.",
        "P6SM = greater than 6 SM. SKC = clear. NSW = no significant weather. CAVOK is not used in U.S. TAFs."
      ] },
      { callout: "The alternate test is applied at the ETA, using the TAF line that covers it. If a TEMPO or PROB30 group drags the forecast below 600-2 (precision) or 800-2 (non-precision) at the ETA, the airport does not qualify under the standard minimums (91.169) unless the chart lists different alternate minimums.", kind: "tip" },
      { h: "PIREPs (AIM 7-1-18)" },
      { p: "UA = routine, UUA = urgent (severe or extreme turbulence, severe icing, hail, tornadoes or funnel clouds, LLWS, volcanic ash). Elements in order: /OV location, /TM time, /FL altitude, /TP aircraft type (required for turbulence and icing reports to mean anything), /SK sky, /WX weather and visibility, /TA temperature, /WV wind, /TB turbulence, /IC icing, /RM remarks. Heights in a PIREP are MSL; in a METAR they are AGL. Turbulence is reported as light, moderate, severe or extreme, with duration (occasional, intermittent, continuous) and whether it was in cloud. Icing as trace, light, moderate or severe plus type." },
      { h: "The advisories" },
      { ul: [
        "**AIRMET** (G-AIRMET graphics, 3-hour snapshots over a 12-hour period): Sierra for IFR and mountain obscuration, Tango for moderate turbulence, surface winds of 30 kt or more and non-convective LLWS, Zulu for moderate icing and freezing level.",
        "**SIGMET**: non-convective hazards to all aircraft, valid up to 4 hours (6 for volcanic ash): severe icing, severe or extreme turbulence or CAT, dust or sandstorm or volcanic ash reducing visibility below 3 SM.",
        "**Convective SIGMET**: issued hourly at H+55, valid 2 hours, for severe thunderstorms (surface wind 50 kt or more, hail 3/4 in or more, tornadoes), embedded thunderstorms, lines of thunderstorms, or thunderstorms covering 40 percent or more of a 3,000 sq mi area. It implies severe turbulence, severe icing and LLWS, so none of those are listed separately.",
        "**CWA** (Center Weather Advisory) and **AWW** (Severe Weather Watch Bulletin) fill the gaps between scheduled products."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Decode: SPECI KBOS 041215Z 09020G31KT 1/2SM R04R/1600V2400FT +RA FG VV002 10/10 A2965 RMK AO2 PRESFR.",
        "What is the difference between FM and TEMPO, and which one controls the 91.169 alternate test at your ETA?",
        "FG versus BR: the visibility threshold?",
        "PIREP heights are MSL or AGL? METAR cloud heights?",
        "What makes a PIREP urgent (UUA)?"
      ] }
    ]
  },
  {
    id: "aero-aoa-stalls", topic: "aero", title: "Angle of attack, stalls and load factor", minutes: 7,
    refs: ["PHAK Ch. 5", "AFH Ch. 5", "Commercial ACS (FAA-S-ACS-7B)"], tags: ["flight-review", "cfi", "cax", "c172", "pa44"],
    quiz: ["aero-mcq-002", "aero-mcq-007", "aero-mcq-008", "aero-mcq-015", "aero-mcq-016", "aero-card-001", "aero-oral-001", "aero-oral-002", "aero-oral-005"],
    keywords: ["angle of attack", "stall", "load factor", "maneuvering speed", "spin", "PARE", "accelerated stall", "critical angle"],
    body: [
      { h: "Why it matters" },
      { p: "The single most-asked oral question in aerodynamics is still \"can an airplane stall at any airspeed?\" The answer is yes, and everything that follows (load factor, Va, accelerated stalls, spins, why the stall speed in a 60° turn is what it is) is one chain of reasoning from the lift equation. Rebuild the chain once and the numbers come back." },
      { h: "The chain of reasoning" },
      { ul: [
        "L = CL × ½ρV² × S. CL depends on angle of attack, and it peaks at the **critical angle of attack** (typically 15–20° for a light airplane wing). Exceed it and airflow separates; CL falls and the wing stalls.",
        "The wing always stalls at the same **critical AOA**, regardless of airspeed, attitude, weight or bank. Airspeed is just the speed at which that AOA happens to be reached in 1 G flight.",
        "Anything that demands more lift at a given airspeed forces a higher AOA: more weight, a turn, a pull-up, turbulence. So the **stall speed** rises with weight and with load factor, even though the stall AOA never moves.",
        "Load factor in a constant-altitude coordinated turn: n = 1 ÷ cos(bank). Stall speed in the turn: Vs × √n."
      ] },
      { table: { head: ["Bank", "Load factor", "Stall speed multiplier", "172S flaps-up (Vs1 48)", "Seminole (Vs1 57)"], rows: [
        ["30°", "1.15 G", "1.07", "≈ 52 KIAS", "≈ 61 KIAS"],
        ["45°", "1.41 G", "1.19", "≈ 57 KIAS", "≈ 68 KIAS"],
        ["60°", "2.0 G", "1.41", "≈ 68 KIAS", "≈ 81 KIAS"],
        ["75°", "3.9 G", "1.97", "≈ 94 KIAS", "≈ 112 KIAS"]
      ] } },
      { callout: "The curve is flat until about 45° and then goes vertical: 60° doubles the load, 75° nearly quadruples it. A 172S limited to +3.8 G in the normal category reaches its limit at roughly 75° of level bank; the published Va of 105 KIAS at 2,550 lb is the speed below which the wing stalls before it can produce 3.8 G.", kind: "tip" },
      { h: "Maneuvering speed" },
      { p: "Va is the speed at which a full, abrupt control deflection (one axis, one time) produces the limit load factor exactly as the wing stalls. Above Va the wing can produce more than the limit load before stalling; below it the stall protects the structure. Because the stall speed drops with weight while the limit load does not, **Va decreases as weight decreases**: Va_new = Va_max × √(W_new ÷ W_max). For the 172S, 105 × √(2,200 ÷ 2,550) ≈ 98 KIAS and 105 × √(1,900 ÷ 2,550) ≈ 91 KIAS, which match the POH values (98 and 90) within rounding. The Seminole goes from 135 KIAS at 3,800 lb to 112 KIAS at 2,700 lb. Flying a light airplane at the heavy-weight Va in turbulence is the classic trap. Va does not protect against repeated or multi-axis full deflections (AA587)." },
      { h: "Stall types the ACS asks for" },
      { table: { head: ["Stall", "Setup", "The point"], rows: [
        ["Power-off", "Landing configuration, approach descent", "Recognize and recover promptly after the full stall; minimal altitude loss"],
        ["Power-on", "Takeoff or departure configuration, high power", "High pitch, strong left-turning tendency; bank no more than 20° in the turning version; wing drop control with rudder, not aileron"],
        ["Accelerated", "Turn of about 45° bank with increasing back pressure (commercial)", "Stall at a higher-than-normal airspeed; recover at the first indication, never full"],
        ["Cross-control", "Skidding base-to-final turn: inside rudder, opposite aileron, back pressure", "The inside wing stalls first with little warning; the spin entry at pattern altitude"],
        ["Elevator trim", "Go-around with full nose-up trim and full power", "Pitch rises faster than you can push; manage trim and power together"],
        ["Secondary", "Recovering too aggressively from a stall", "Pulling before airspeed is restored stalls it again"]
      ] } },
      { p: "Recovery is always the same first step: reduce the angle of attack by moving the elevator forward until the wing is flying, then level the wings with coordinated controls and add power. The AFH stresses AOA reduction first; adding power with the nose high only deepens the stall. The ACS stall tasks expect you to acknowledge the cues of the impending stall and recover after the full stall occurs (power-on and power-off), and at the first indication for the accelerated stall." },
      { h: "Spins" },
      { p: "A spin needs two things: a stall and yaw. The low wing is more stalled (higher AOA, less lift, more drag), the high wing less so, and the asymmetry sustains autorotation. Phases: entry, incipient (first two turns), developed, recovery. Airspeed is low and roughly constant in a spin; in a spiral it is increasing rapidly, which is the discriminator when you are disoriented. The 172S recovers with the standard sequence; the Seminole, like nearly all light twins, is not approved for spins and a spin in a twin may be unrecoverable." },
      { memo: { title: "PARE", text: "Power idle, Ailerons neutral, Rudder full opposite the rotation, Elevator briskly forward (through neutral). Neutralize the rudder as rotation stops, then recover from the dive without exceeding Vne or the G limit. Always use the POH sequence for your airplane." } },
      { h: "Other numbers worth having back" },
      { ul: [
        "Limit load factors: normal category +3.8 / −1.52 (172S); utility +4.4 / −1.76; acrobatic +6.0 / −3.0. The structure has a 1.5 safety factor above these to ultimate load.",
        "Stall warning: 172S pneumatic horn; Seminole electric lift detectors. Both are set to sound 5–10 kt above the stall, and neither works reliably with ice on the wing.",
        "The region of reversed command (behind the power curve): slower requires more power, and a sink rate cannot be arrested with pitch alone. On a dragged-in approach you fix it with power, not back pressure."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Compute the 172S flaps-up stall speed in a 45° level turn and the load factor.",
        "Why does Va fall with weight, and what is the 172S Va at 1,900 lb?",
        "What two ingredients make a spin, and how do you tell a spin from a spiral?",
        "Recite PARE and say why ailerons stay neutral.",
        "First action in every stall recovery, and why power alone is wrong?"
      ] }
    ]
  },
  {
    id: "aero-stability-cg", topic: "aero", title: "Stability and CG effects", minutes: 6,
    refs: ["PHAK Ch. 5", "PHAK Ch. 10"], tags: ["flight-review", "cfi", "cax", "atp"],
    quiz: ["aero-mcq-013", "aero-mcq-014", "aero-card-003", "aero-card-004", "aero-scen-002"],
    keywords: ["stability", "static stability", "dynamic stability", "center of gravity", "aft CG", "forward CG", "dihedral", "Dutch roll", "phugoid"],
    body: [
      { h: "Why it matters" },
      { p: "CG questions show up on every oral because they connect loading to handling: why an aft-loaded airplane stalls slower but recovers worse, why a nose-heavy one may not flare. The vocabulary (static versus dynamic, the three axes, the design features) is cheap to restore and the CFI and ATP orals both lean on it." },
      { h: "Static versus dynamic" },
      { ul: [
        "**Static stability** is the initial tendency after a disturbance: positive (returns toward equilibrium), neutral (stays where it was put), negative (diverges).",
        "**Dynamic stability** is what happens over time once it starts back: positive dynamic means oscillations decrease; neutral means they continue at the same amplitude; negative means they grow. An airplane can be statically stable and dynamically unstable (it comes back, overshoots, and the overshoots grow).",
        "Normal category airplanes are designed with positive static and positive dynamic stability on all three axes, strongest in pitch."
      ] },
      { h: "The three axes" },
      { table: { head: ["Axis / motion", "Stability", "Provided by"], rows: [
        ["Longitudinal axis / roll", "Lateral stability", "Dihedral, sweepback, keel effect (side area and CG below the wing), weight distribution; high wing adds pendulum effect"],
        ["Lateral axis / pitch", "Longitudinal stability", "Horizontal stabilizer behind the CG; CG ahead of the neutral point so the tail download restores pitch"],
        ["Vertical axis / yaw", "Directional stability", "Vertical fin and fuselage side area aft of the CG (weathervane effect); sweepback contributes"]
      ] } },
      { p: "Pitch is the one that matters most. In a conventional airplane the CG is ahead of the center of lift and the tail pushes down to balance it. Slow down, the tail download decreases, the nose drops, speed recovers: positive longitudinal stability. The two pitch oscillations are the **phugoid** (long period, airspeed and altitude trade, easily damped by the pilot) and the **short period** (AOA oscillation, seconds long, must be well damped by design because the pilot can couple with it)." },
      { h: "Roll-yaw coupling" },
      { ul: [
        "**Dutch roll**: lateral stability strong relative to directional stability; the airplane wallows in a combined yaw-roll oscillation. Swept-wing jets are prone to it and carry a yaw damper. Mild in light airplanes.",
        "**Spiral instability**: directional stability strong relative to lateral; a bank slowly tightens into a descending spiral. Most light airplanes are slightly spirally unstable, which is why hands-off flight in IMC ends in a graveyard spiral.",
        "Designers trade one against the other; you cannot have both perfect."
      ] },
      { h: "CG effects" },
      { table: { head: ["", "Forward CG", "Aft CG"], rows: [
        ["Longitudinal stability", "More stable", "Less stable; past the aft limit, unstable"],
        ["Tail download needed", "More (longer arm to balance)", "Less"],
        ["Stall speed", "Higher (wing must lift the extra download)", "Lower"],
        ["Cruise speed", "Lower (more trim drag)", "Slightly higher"],
        ["Control forces", "Heavier; may be unable to flare or rotate", "Light; easy to over-control and over-stress"],
        ["Stall and spin recovery", "Easier (nose drops)", "Harder; may be unrecoverable aft of the limit"]
      ] } },
      { callout: "The examiner's follow-up: \"so an aft CG gives better performance, why not load aft?\" Because the airplane is still only certified inside the envelope, and beyond it the tail can no longer generate a nose-down moment at high AOA. Recovery margin is what you are buying with a forward CG.", kind: "tip" },
      { h: "Practical loading points" },
      { ul: [
        "The 172S envelope narrows at the top: the forward limit moves aft as weight increases (see the POH envelope; do not memorize the numbers, read them). Two heavy people in front, no baggage and full fuel is the classic forward-limit case at light weight.",
        "The Seminole, with nacelle tanks near the CG, moves little as fuel burns; aft baggage and rear seats move it most. Always run a landing-weight CG, not just the takeoff one.",
        "Fuel burn moves the CG toward the empty-weight CG. If the fuel arm is behind the loaded CG (typical in a 172), burning fuel moves the CG forward; land-weight CG can go out the forward limit even though takeoff was legal.",
        "Lateral imbalance: 172 fuel on one side (selector on L or R for too long) produces a persistent roll; the Seminole crossfeed is for emergencies, not for balancing."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Define positive static and negative dynamic stability, and describe an airplane that has both.",
        "Which design feature gives lateral stability on a low-wing airplane with no visible dihedral?",
        "List four effects of an aft CG and the one that kills people.",
        "Why does an aft CG lower the stall speed?",
        "Dutch roll versus spiral instability: which stability is too strong in each case?"
      ] }
    ]
  },
  {
    id: "aero-commercial-maneuvers", topic: "aero", title: "Commercial maneuvers refresher", minutes: 8,
    refs: ["AFH Ch. 10", "AFH Ch. 7", "AFH Ch. 9", "Commercial ACS (FAA-S-ACS-7B)"], tags: ["cax", "cfi", "c172"],
    quiz: ["aero-mcq-022", "aero-card-006", "foi-oral-002"],
    keywords: ["chandelle", "lazy eight", "eights on pylons", "pivotal altitude", "steep spiral", "power-off 180", "steep turn", "commercial maneuvers"],
    body: [
      { h: "Why it matters" },
      { p: "A CFI applicant has to teach these; a commercial pilot who is rusty will be asked to fly them on a flight review in a 172S. The ACS standards are tight, and the point of each maneuver is a specific skill: planning, coordination, and feel for a changing airspeed and load factor. Here are the profiles with the numbers (tolerances are from the Commercial ACS; verify against the current edition before a checkride)." },
      { h: "Steep turns" },
      { p: "Clearing turns first. 50° bank (±5°), altitude ±100 ft, airspeed ±10 kt, rollout ±10° of entry heading, a 360 in each direction. Entry at or below Va. Load factor at 50° is about 1.56 G; expect to add power and back pressure as you roll past 30°, and to lead the rollout by about half the bank angle. In the 172S trim lightly nose-up at the start and expect to need about 100 rpm more to hold speed." },
      { h: "Chandelle" },
      { p: "A maximum-performance 180° climbing turn. Entry: clearing turns, Va or the POH-recommended speed, wings level, pick a reference 90° off the wing. First 90°: roll to about 30° bank and hold it while pitch increases steadily so that maximum pitch is reached at the 90° point. Second 90°: hold that pitch attitude constant while rolling out so the wings come level exactly at 180°, just above the stall (ACS: airspeed just above stall, roll out within ±10° of the 180° heading), then hold momentarily and accelerate in level flight. The hard part is torque: the left chandelle needs right rudder from the start as the speed decays; the right chandelle needs less, then left rudder at the end as the airplane slows. Altitude is not specified; airspeed and heading are." },
      { h: "Lazy eight" },
      { p: "Two 180° turns in opposite directions with continuously changing pitch and bank, never a constant state. Pick a reference on the horizon 90° off. Entry at the recommended speed (Va or below)." },
      { table: { head: ["Point", "Bank", "Pitch", "Airspeed"], rows: [
        ["45°", "about 15°", "Maximum nose-up", "Decreasing"],
        ["90°", "about 30° (maximum)", "Passing level", "Minimum, 5–10 kt above stall"],
        ["135°", "about 15°", "Maximum nose-down", "Increasing"],
        ["180°", "Level", "Level", "Entry speed, entry altitude"]
      ] } },
      { p: "ACS at the 180° points: altitude ±100 ft, airspeed ±10 kt of entry, heading ±10°, bank roughly 30° at the steepest point. Rate the roll so the bank is still shallow when the nose is highest; the common error is rolling too fast, which makes the maneuver a steep turn with a bump in it. Rudder: as in the chandelle, slow-speed torque at the top of each loop needs right rudder, especially on the left-turning half." },
      { h: "Eights on pylons" },
      { p: "The only maneuver flown at **pivotal altitude**, where the lateral reference line (through your eye, parallel to the lateral axis) appears to pivot on the pylon. Pivotal altitude (ft AGL) ≈ groundspeed in knots squared ÷ 11.3 (mph squared ÷ 15). At 100 kt that is about 885 ft AGL; at 90 kt about 717 ft. Pivotal altitude depends only on groundspeed, not on distance from the pylon or bank angle. Because groundspeed changes around each turn, you descend as the groundspeed drops (headwind side) and climb as it increases (downwind side): if the pylon moves ahead of the reference line, lower the nose; if it moves behind, raise it. Enter on the downwind leg, 45° to the pylons, bank 30–40° at the steepest, and select pylons about 3–5 seconds of straight flight apart. Altitude is not graded directly; keeping the line on the pylon and coordination are. Never use rudder to hold the pylon." },
      { h: "Steep spiral" },
      { p: "A constant-radius gliding turn around a point, power idle, used to lose altitude over a selected spot. At least three 360° turns, bank up to but not exceeding 60° at the steepest point, airspeed ±10 kt of the specified glide speed, roll out toward a specified heading ±10°, and complete the maneuver no lower than 1,500 ft AGL. Wind correction is the same as turns around a point: steepest bank on the downwind side, shallowest upwind. Clear the engine every 360 with a brief application of power (and keep the mixture appropriate for the altitude), and watch Vne and the load factor if the bank gets steep. Plan the rollout at a specified altitude and heading, since this is often flown as the setup for an emergency approach." },
      { h: "Power-off 180 accuracy approach" },
      { p: "Abeam the touchdown point on downwind, 1,000 ft AGL, throttle to idle and leave it there. Fly a 180° approach to touch down within **200 ft beyond** the specified point, never short of it, on the centerline, in a normal landing attitude. Everything is energy management: glide speed (172S best glide 68, or the POH-recommended power-off approach speed), configuration added only when the field is made, slips and flaps as your variable, no power. If you are going to land short, go around; a short landing is a failing item while a go-around is a judgment call. Wind decides the pattern size: in a strong wind turn base early." },
      { callout: "Across all of these, the examiner is watching the ball. Uncoordinated flight at low speed and high pitch is the common thread in the stall-spin accidents these maneuvers are designed to inoculate against.", kind: "warn" },
      { h: "Check yourself" },
      { ul: [
        "Steep turn tolerances and the load factor at 50° bank?",
        "In a chandelle, what is constant in the first 90° and what is constant in the second 90°?",
        "Lazy eight: where is bank maximum, where is pitch maximum?",
        "Pivotal altitude at 95 kt groundspeed, and which way do you correct when the pylon moves ahead of the reference line?",
        "Power-off 180: where must the touchdown occur, and what do you do if you are short?"
      ] }
    ]
  },
  {
    id: "multi-vmc", topic: "multi", title: "Vmc: what it is and what moves it", minutes: 7,
    refs: ["AFH Ch. 13", "Commercial ACS (FAA-S-ACS-7B)", "PA-44 POH Sec. 2"], tags: ["cax", "cfi", "atp", "pa44"],
    quiz: ["multi-mcq-001", "multi-mcq-002", "multi-mcq-003", "multi-mcq-004", "multi-mcq-005", "multi-mcq-006", "multi-mcq-019", "multi-card-001", "multi-card-002", "multi-card-003", "multi-card-009", "multi-oral-001", "multi-oral-002"],
    keywords: ["Vmc", "critical engine", "PAST", "P-factor", "accelerated slipstream", "spiraling slipstream", "torque", "Vmc demo", "red line"],
    body: [
      { h: "Why it matters" },
      { p: "Vmc is the multiengine oral. The examiner wants the definition, the certification conditions, which way each factor moves the real number, and why the red line on the Seminole (56 KIAS) is only true on one specific day. The commercial multi add-on, the MEI and the ATP interview all ask the same questions." },
      { h: "Definition" },
      { p: "Vmc is the minimum airspeed at which directional control can be maintained with the critical engine suddenly made inoperative and the remaining engine at takeoff power, under a prescribed set of conditions. It is a control speed, not a performance speed: at Vmc the rudder runs out, and below it the airplane yaws and rolls into the dead engine no matter what you do with the controls, unless you reduce power on the good engine. The published value is a certification number, determined with up to 150 lb of rudder force and a heading change of no more than 20°." },
      { h: "Certification conditions (AFH Ch. 13, historically 14 CFR 23.149)" },
      { ol: [
        "Critical engine inoperative and its propeller **windmilling** (prop control in the takeoff position; feathered only if the airplane has autofeather).",
        "Operating engine at **maximum available takeoff power**.",
        "**Most unfavorable weight** (lighter is worse; older editions said maximum takeoff weight).",
        "**Most unfavorable (aft) CG**.",
        "Flaps in the **takeoff position**, landing gear **retracted**.",
        "Trimmed for takeoff, airborne and **out of ground effect**.",
        "**Not more than 5° of bank** toward the operating engine.",
        "Sea level, standard day (the engine makes its most power here, so Vmc is highest)."
      ] },
      { h: "Critical engine and PAST" },
      { p: "The critical engine is the one whose failure most adversely affects performance and handling. On a conventional twin with both props turning clockwise (seen from behind), it is the **left** engine, for four reasons." },
      { memo: { title: "PAST", text: "P-factor: the descending blade (right side of each disc) has more thrust; the right engine's thrust arm is longer, so its yaw is worse. Accelerated slipstream: the right engine's airflow over the wing lifts the wing farther from the centerline, so losing the left engine leaves a stronger rolling moment. Spiraling slipstream: the left engine's slipstream wraps onto the vertical fin and helps the rudder; the right engine's goes away from the tail. Torque: losing the left engine leaves the right engine's torque rolling left, into the dead engine." } },
      { p: "The Seminole's engines are counter-rotating (the right engine turns counterclockwise), so the descending blades are both inboard, the arms are equal, and the slipstream and torque effects cancel: **no critical engine**. Vmc is the same either way, and lower than it would be on a conventional twin of the same size." },
      { h: "What moves Vmc" },
      { table: { head: ["Factor", "Actual Vmc goes", "Why"], rows: [
        ["Higher density altitude", "Down", "Less power on the good engine, less asymmetric thrust (but performance is worse: the two curves converge)"],
        ["Lower weight", "Up", "Less horizontal component of lift from the bank; the airplane has less inertia against yaw"],
        ["Aft CG", "Up", "Shorter arm from CG to rudder, less rudder authority"],
        ["Windmilling prop (not feathered)", "Up", "Enormous drag on the dead side, more yaw"],
        ["Gear down", "Down", "Keel effect; the gear adds stabilizing side area"],
        ["Flaps extended", "Down slightly", "More drag-and-lift symmetry; varies by airplane"],
        ["Bank away from the good engine, or wings level", "Up", "Loss of the lift component fighting the yaw; the AFH cites roughly 3 kt per degree between 5° and wings level"],
        ["Ground effect", "Generally slightly down", "Certification is done airborne and out of ground effect, so the published number does not count on it; expect no help once clear of the runway"]
      ] } },
      { callout: "The gotcha: high density altitude lowers Vmc but also lowers the power and the climb performance. At some altitude the stall speed and Vmc meet; above it the airplane stalls before it reaches Vmc, and a Vmc demonstration becomes a single-engine stall with a spin entry. That is why the demonstration is done with care in summer at altitude.", kind: "warn" },
      { h: "The Vmc demonstration (Commercial ACS)" },
      { ol: [
        "Entry altitude that allows completion no lower than 3,000 ft AGL or the manufacturer's recommended altitude, whichever is higher.",
        "Gear up, flaps takeoff, props forward, trim for takeoff, airspeed at or above Vsse (82 KIAS in the Seminole).",
        "Reduce one throttle to idle (simulated failure; never feather), bring the other to takeoff power, and establish a bank of up to 5° toward the operating engine.",
        "Increase pitch to decelerate about 1 kt per second, holding heading with rudder.",
        "Recover at the **first** of: loss of directional control, stall warning, or buffet. Recovery is simultaneous: reduce power on the operating engine, lower the nose to regain airspeed, re-establish heading, accelerate to Vsse or Vyse, then restore power. Heading within ±20° during recovery."
      ] },
      { h: "Seminole numbers" },
      { ul: [
        "Vmc 56 KIAS (red line), Vsse 82, Vxse 82, Vyse 88 (blue line), Vs1 57, Vso 55.",
        "Note how close Vmc (56) and Vs1 (57) are at sea level; the two converge quickly with altitude."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Recite the Vmc certification conditions, including which engine, which prop state and how much bank.",
        "Explain PAST and why the Seminole has no critical engine.",
        "Which factors raise actual Vmc above the red line?",
        "Why can a high-DA Vmc demonstration turn into a spin?",
        "What are the three recovery cues in the ACS demonstration, and what is the first control action?"
      ] }
    ]
  },
  {
    id: "multi-engine-failure", topic: "multi", title: "Engine failure: the flow and the decisions", minutes: 7,
    refs: ["AFH Ch. 13", "PA-44 POH Sec. 3", "Commercial ACS (FAA-S-ACS-7B)"], tags: ["cax", "pa44", "cfi", "atp"],
    quiz: ["multi-mcq-011", "multi-mcq-012", "multi-mcq-013", "multi-mcq-020", "multi-card-006", "multi-card-010", "multi-scen-001", "multi-scen-002", "multi-oral-006", "multi-oral-008"],
    keywords: ["engine failure", "dead foot", "identify verify feather", "Vyse", "blue line", "accelerate-stop", "takeoff briefing", "single-engine approach", "commit point"],
    body: [
      { h: "Why it matters" },
      { p: "Light twins are not required to climb on one engine, and the Seminole at gross weight on a hot day may not. The flow has to be automatic because the decision window after liftoff is seconds long, and the decision has to be made before the throttles go forward, in the takeoff briefing. Examiners test both: the mechanical flow and the pre-decided plan." },
      { h: "The flow (memorize, then confirm with the checklist)" },
      { p: "First, fly the airplane: pitch for Vyse (blue line, 88 KIAS), rudder to stop the yaw, and 2–3° of bank toward the good engine. Then the flow, in this order:" },
      { ol: [
        "**Mixtures** full rich, **props** full forward, **throttles** full forward.",
        "**Flaps** up, **gear** up (once no usable runway remains).",
        "**Identify**: dead foot, dead engine. The foot doing no work is on the side of the failed engine.",
        "**Verify**: slowly retard the throttle of the suspected engine. No change confirms it. This is the step that prevents feathering the good engine.",
        "**Feather**: prop control of the dead engine full aft to the feather detent. Do this before rpm decays into the start-lock range (about 950 rpm in the Seminole; verify POH), or it will not feather.",
        "**Secure**: mixture idle cut-off, electric fuel pump off, fuel selector OFF, magnetos off, alternator off, cowl flap closed on the dead side (per POH), crossfeed as needed.",
        "Then: zero sideslip, declare an emergency, nearest suitable airport, brief the single-engine approach."
      ] },
      { callout: "The AFH flow is sometimes taught as \"everything forward, everything up, identify, verify, feather.\" Whatever the phrasing, the two steps that matter are verify before feather, and feather before the rpm decays.", kind: "tip" },
      { h: "The takeoff decision points" },
      { table: { head: ["Failure", "Action"], rows: [
        ["Before Vr / on the runway", "Abort: throttles closed, brake, stay on the runway. The Seminole Vr is 75 KIAS; below Vmc there is no decision to make."],
        ["After liftoff, gear still down, runway remaining", "Land. Close both throttles and land straight ahead, even into the overrun. The time to clean up and feather exceeds what is available a few feet off the ground."],
        ["After liftoff, gear up or coming up, at or above Vyse, climb available", "Continue: the flow above, climb at Vyse, come back for a single-engine landing."],
        ["After liftoff, below Vyse, or no single-engine climb available (hot, heavy, high)", "Land ahead, under control, within roughly 30° of the nose. Do not try to climb an airplane that cannot."]
      ] } },
      { p: "The pre-takeoff briefing fixes the third and fourth rows before they happen: compute the single-engine climb for today's weight and density altitude, and know whether the airplane will climb at all. Losing one engine removes 50 percent of the power but about 80 percent of the excess power that climb depends on. The Seminole's single-engine rate of climb at gross weight on a standard sea-level day is a couple of hundred feet per minute; at a high-density-altitude airport it can be zero (read the POH single-engine climb chart, do not guess)." },
      { h: "Accelerate-stop and accelerate-go" },
      { ul: [
        "**Accelerate-stop**: distance to accelerate to liftoff speed, lose an engine, and stop. If the runway is shorter than this number, an engine failure near Vr ends off the end of the pavement.",
        "**Accelerate-go**: distance to accelerate, lose an engine at liftoff, and continue to 50 ft on one engine. It is often enormous and assumes immediate, perfect technique. Light twins have no balanced-field or V1 concept; these charts are information, not a guarantee.",
        "Rotate at Vr and accelerate to Vyse as early as practical. Vmc (56) is far below Vr (75) in the Seminole, so control is not the problem at rotation; performance is."
      ] },
      { h: "In cruise and on approach" },
      { p: "A cruise failure gives time: identify, verify, feather, secure, then drift down at Vyse toward the single-engine ceiling and plan. In IMC the challenge is instrument flying while running the flow; the autopilot may not be approved single-engine (check the POH). On a single-engine approach fly a longer, stabilized final at or above Vyse, gear down when landing is certain, and treat full flaps as the **commit point**: once the gear and full flaps are down and the speed is below Vyse, a go-around is not available. Expect the gear horn whenever one throttle is at idle with the gear up." },
      { h: "Check yourself" },
      { ul: [
        "Recite the engine-failure flow from \"mixtures\" through \"secure.\"",
        "How do you identify and then verify the failed engine, and why is verification non-negotiable?",
        "What happens if you delay feathering until the rpm falls below the start-lock speed?",
        "State the four takeoff decision points and the action at each.",
        "What is the commit point on a single-engine approach?"
      ] }
    ]
  },
  {
    id: "multi-feather-zero-sideslip", topic: "multi", title: "Feathering, zero sideslip and single-engine performance", minutes: 7,
    refs: ["AFH Ch. 13", "PA-44 POH Sec. 5", "PA-44 POH Sec. 7"], tags: ["cfi", "atp", "pa44", "cax"],
    quiz: ["multi-mcq-008", "multi-mcq-009", "multi-mcq-010", "multi-mcq-014", "multi-mcq-016", "multi-mcq-017", "multi-mcq-018", "multi-card-005", "multi-card-007", "multi-card-008", "multi-oral-003", "multi-oral-004", "multi-oral-005"],
    keywords: ["feather", "zero sideslip", "single-engine service ceiling", "absolute ceiling", "drift down", "windmilling", "start locks", "unfeather", "accumulator", "excess thrust"],
    body: [
      { h: "Why it matters" },
      { p: "Three ideas explain why a light twin flies the way it does on one engine: a windmilling propeller is a giant disc of drag, the airplane only climbs on excess thrust, and the ball lies to you. Interviewers love \"why does it lose 80 percent of its climb?\" and \"how do you find zero sideslip?\" because both separate pilots who understand from pilots who memorized." },
      { h: "The full-feathering propeller" },
      { ul: [
        "On the Seminole's Hartzell, governor oil pressure drives the blades toward **low pitch / high rpm**; a feathering spring and blade counterweights drive them toward **high pitch / feather**. Lose oil pressure (engine failure, or pull the prop control to feather, which dumps the oil) and the blades go to feather on their own.",
        "**Start locks** (centrifugal latch pins) engage when rpm falls below roughly 950 rpm (verify POH) so the prop does not feather at every shutdown. The consequence in flight: if a failed engine's rpm has already decayed below the latch speed, the prop will not feather. Feather promptly.",
        "Feathering check on run-up: pull each prop control to feather briefly, confirm the rpm drops, push it back forward before the rpm reaches the latch range.",
        "**Unfeathering** in flight: an accumulator (oil stored under nitrogen pressure) where installed pushes the blades out of feather when the control is moved forward; otherwise, prop control forward and crank with the starter until the engine turns and oil pressure builds. Expect an overspeed as the engine comes back; retard the throttle and prop first."
      ] },
      { h: "Why windmilling is the enemy" },
      { p: "A windmilling propeller at flat pitch is being driven by the airflow and acts like a flat plate roughly the diameter of the disc. On a light twin the drag of the windmilling prop is the single largest controllable drag item, bigger than the gear or the flaps, and it is all on one side, so it is also a yaw and roll moment. The AFH and FAA-P-8740-66 (Flying Light Twins Safely) list the drag items that erase single-engine climb: the windmilling propeller first, then extended landing gear and flaps beyond the optimum setting, then flying wings-level with the ball centered instead of at zero sideslip. Feathering the prop recovers most of the airplane's remaining climb." },
      { h: "Where the 80 percent comes from" },
      { p: "Climb rate depends on **excess thrust** (thrust minus drag), not total thrust. Suppose each engine supplies 100 units and the airplane needs 160 units to hold altitude at Vyse. Two engines: 40 units of excess. One engine: 100 minus 160 is negative before you fix anything; after feathering and cleaning up, drag might be 90 units and excess is 10. Half the power, but a quarter of the excess, and the real-world loss is typically 80 percent or more because the dead side also adds asymmetric drag. That is why the airplane must be flown at exactly Vyse (88 KIAS in the Seminole): any other speed costs excess thrust the airplane does not have." },
      { h: "Zero sideslip" },
      { p: "With one engine out, the good engine yaws the airplane toward the dead side and the rudder stops it. If you hold the wings level and the ball centered, the airplane is actually flying with the fuselage sideways to the relative wind (a sideslip toward the dead engine), the vertical fin is partly blanked, and the fuselage drag is up. Banking about 2–3° toward the operating engine (airplane-specific, always less than the 5° used for Vmc certification) puts the relative wind straight down the fuselage: **zero sideslip**. In that condition the ball is displaced about one-third to one-half a ball toward the operating engine (it is sensing the bank, not a slip). A yaw string on the nose streams straight back. Zero sideslip gives the best single-engine climb and the lowest actual Vmc." },
      { callout: "Too much bank is also wrong. Beyond about 5°, the airplane is now sideslipping the other way, with the lift vector tilted enough to cost climb. The target is the small bank, half-ball, straight yaw string, flown at blue line.", kind: "tip" },
      { h: "Single-engine performance definitions" },
      { table: { head: ["Term", "Definition"], rows: [
        ["Single-engine service ceiling", "Density altitude at which the best single-engine rate of climb is 50 fpm (all-engine service ceiling: 100 fpm)"],
        ["Single-engine absolute ceiling", "Density altitude at which the single-engine rate of climb is zero; the airplane drifts down to this altitude after a failure above it"],
        ["Drift-down", "Descent at Vyse from cruise altitude toward the single-engine absolute ceiling; plan the route so terrain and MEAs are below it"],
        ["Vyse (blue line)", "Best single-engine rate of climb; fly it after a failure and on the single-engine approach until landing is assured (88 KIAS Seminole)"],
        ["Vxse", "Best single-engine angle of climb; obstacle clearance only (82 KIAS Seminole)"],
        ["Vsse", "Safe single-engine speed, the minimum for intentionally failing an engine in training (82 KIAS Seminole)"]
      ] } },
      { p: "Both ceilings fall with weight, temperature and any unfeathered drag, and the POH charts assume the prop is feathered, gear and flaps up, zero sideslip and Vyse. Over mountains in summer, the Seminole's single-engine absolute ceiling may be below the MEA; that is an IFR route-planning input, not a surprise to discover after the failure." },
      { h: "Check yourself" },
      { ul: [
        "Which forces drive the Seminole prop toward feather and which toward low pitch, and what do the start locks do?",
        "Why does the airplane lose about 80 percent of its climb with 50 percent of its power?",
        "Describe zero sideslip: bank, ball, yaw string, and why wings-level and ball-centered is wrong.",
        "Define single-engine service ceiling and absolute ceiling.",
        "Which single drag item hurts single-engine climb most, and what else erases it?"
      ] }
    ]
  },
  {
    id: "systems-c172s", topic: "systems", title: "The 172S: engine, fuel, electrical, G1000 failure modes", minutes: 8,
    refs: ["C172S POH Sec. 7", "C172S POH Sec. 3", "IFH Ch. 5", "PHAK Ch. 7"], tags: ["c172", "flight-review", "ipc"],
    quiz: ["systems-mcq-003", "systems-mcq-008", "systems-mcq-011", "systems-mcq-012", "systems-mcq-013", "systems-mcq-017", "systems-card-002", "systems-card-006", "systems-card-007", "systems-scen-001", "systems-scen-002", "systems-oral-003"],
    keywords: ["172S", "IO-360", "G1000", "AHRS", "ADC", "standby battery", "essential bus", "LOW VOLTS", "fuel injection", "hot start", "reversionary"],
    body: [
      { h: "Why it matters" },
      { p: "The 172S is the airplane you will most likely rent for a flight review and an IPC, and the systems oral for it is predictable: what powers what, what the annunciators mean, what you lose when a G1000 box dies, and the fuel-injection hot-start trick. Every number here is a POH value; verify against the airplane you fly, because Nav III airplanes vary by year." },
      { h: "Engine and propeller" },
      { ul: [
        "Lycoming IO-360-L2A, 180 hp at 2,700 rpm, fuel injected, horizontally opposed four cylinders, dual magnetos. Fixed-pitch 76-inch two-blade McCauley prop, so power is set with rpm alone.",
        "Oil: 8 qt maximum; the POH lists a minimum for flight and a higher minimum for extended flight (read it). Oil pressure falling with oil temperature rising is a loss of oil, not a gauge problem: land.",
        "Magneto check at 1,800 rpm: maximum drop 150 rpm on either magneto, maximum difference 50 rpm. No drop at all means a magneto is not grounding (broken P-lead): the engine is hot even with the key out.",
        "Fuel injection means no carburetor ice, but impact icing can block the induction air filter; a spring-loaded alternate air door opens automatically if the filter clogs, at a small power penalty.",
        "Hot start: a hot engine boils fuel in the injection lines (vapor lock). The POH procedure uses the auxiliary pump with the mixture at idle cut-off to purge vapor, then cranks with the mixture coming rich as it fires; a flooded engine gets the flooded-start procedure instead (throttle open, mixture cut-off, crank). Know which one you are in."
      ] },
      { h: "Fuel system" },
      { p: "Two integral wing tanks, 56 gal total, 53 usable (28 per tank, 26.5 usable), 100LL. Gravity feeds through the selector (BOTH, LEFT, RIGHT; a shutoff is on the selector or a separate pull valve depending on the year) to a reservoir tank, then the engine-driven pump, the fuel-air control unit and the flow divider. The electric auxiliary pump is for priming, vapor suppression on hot starts, and backup if the engine-driven pump fails. **Thirteen** drains: five per wing plus the reservoir, selector and strainer drains under the belly. LOW FUEL L and R annunciators come on when a tank falls below about 5 gal for 60 seconds; plan on time, not the gauge. The left tank has an external vent, the tanks are cross-vented and the caps are vented; a blocked vent collapses the fuel flow." },
      { callout: "Fly on BOTH for takeoff, landing and any maneuvering. Uneven feeding in prolonged slips, skids or uncoordinated flight can unport a tank; on BOTH in cruise, one tank often feeds faster, which is normal.", kind: "tip" },
      { h: "Electrical system" },
      { ul: [
        "28 V system: a 60 A belt-driven alternator, a 24 V main battery, and on Nav III airplanes a 24 V standby battery that automatically feeds the **essential bus** when main bus voltage drops. Buses: main 1 and 2, essential, avionics 1 and 2, crossfeed. The master switch has BAT and ALT halves; the STBY BATT switch has ARM, OFF and TEST (the before-start test checks that the standby battery holds voltage).",
        "Annunciators: LOW VOLTS (usually the alternator offline), STBY BATT (standby battery supplying the essential bus), OIL PRESS, LOW FUEL L/R, and on later airplanes PITOT HEAT OFF/FAIL and a CO monitor. Main and essential bus volts and both battery amps are on the EIS.",
        "Alternator failure: LOW VOLTS plus discharge. Confirm ALT on, one reset (ALT off then on), check the ALT field breaker. If it will not come back, shed load and plan on the standby battery carrying the essential bus (PFD, AHRS, ADC, one nav/com) for at least 30 minutes once the main battery is down. Land as soon as practical; in IMC, as soon as possible.",
        "Alive without electrical power: the engine (magnetos), the pneumatic stall horn, the standby airspeed and altimeter, the compass. Dead: flaps, transponder, lights, pitot heat, radios, the G1000, and the electric standby attitude indicator once its own short reserve (where fitted) runs out."
      ] },
      { h: "G1000 architecture and failure modes" },
      { table: { head: ["Unit", "Provides", "Failure looks like", "Fallback"], rows: [
        ["AHRS (GRS)", "Attitude, heading (with magnetometer), rate of turn, slip/skid", "Red X over the attitude and heading displays", "Standby attitude indicator, magnetic compass, turn coordination from the standby instruments"],
        ["ADC (GDC)", "Airspeed, altitude, vertical speed, TAS, OAT", "Red X over the tapes", "Standby airspeed and altimeter; VSI by timing"],
        ["Magnetometer (GMU)", "Heading reference for AHRS", "Heading flagged; AHRS may still give attitude", "Magnetic compass"],
        ["GIA 63 (two units)", "Each holds a GPS, a nav receiver and a com", "Loss of one nav/com/GPS; LOI or dead reckoning on the map", "The other GIA; VOR/ILS on the remaining nav; ask for vectors"],
        ["PFD display", "Primary flight display", "Screen dark", "Reversionary mode: press the red DISPLAY BACKUP button on the audio panel and the MFD shows the PFD data (automatic on some failures)"],
        ["Engine indication (GEA)", "EIS data", "Red X over engine instruments", "Fly by sound and feel, lean conservatively, land"]
      ] } },
      { p: "Two gotchas: a magnetometer error gives a smooth, wrong heading that only the wet compass can catch; and GPS integrity loss produces LOI, which means no approach guidance and dead reckoning on the map. The standby instruments are the legal IFR backup; check them on every preflight and cross-check them in cruise." },
      { h: "Limits and speeds worth confirming" },
      { p: "MTOW 2,550 lb (utility 2,200). Vso 40, Vs1 48, Vr 55, Vx 62, Vy 74, best glide 68, Va 105/98/90 at 2,550/2,200/1,900 lb, Vfe 110 (10°) and 85 (10–30°), Vno 129, Vne 163 KIAS; maximum demonstrated crosswind 15 kt; load factor +3.8/−1.52. Flaps electric, 0/10/20/30. Stall warning is a pneumatic reed horn. No vacuum system on a Nav III airplane." },
      { h: "Check yourself" },
      { ul: [
        "Magneto check limits, and what no rpm drop means.",
        "Trace fuel from the tank to the cylinder and name what the auxiliary pump is for.",
        "LOW VOLTS in cruise: your first three actions, and what the standby battery buys you.",
        "AHRS fails in IMC: what is lost, what is left, and how do you get heading?",
        "How do you get the PFD data onto the MFD if the PFD goes dark?"
      ] }
    ]
  },
  {
    id: "systems-pa44", topic: "systems", title: "The Seminole: gear, props, fuel, electrical", minutes: 8,
    refs: ["PA-44 POH Sec. 7", "PA-44 POH Sec. 3", "AFH Ch. 13"], tags: ["pa44", "cax", "cfi"],
    quiz: ["systems-mcq-004", "systems-mcq-005", "systems-mcq-009", "systems-mcq-015", "systems-mcq-016", "systems-mcq-018", "systems-card-005", "systems-card-009", "systems-scen-003", "systems-oral-006", "multi-mcq-023", "multi-mcq-024", "multi-mcq-025", "multi-oral-007"],
    keywords: ["Seminole", "PA-44", "landing gear", "emergency extension", "gear horn", "crossfeed", "feather", "start locks", "O-360", "alternator"],
    body: [
      { h: "Why it matters" },
      { p: "A multiengine checkride, an MEI add-on and most Part 135 Seminole jobs start with a systems oral, and the examiner's favorite areas are the gear (because it has the most failure modes), the props (because feathering is what keeps you alive) and fuel crossfeed (because it is misunderstood). These are POH values; verify them against the specific airframe, and remember that the electrical system voltage differs by model year." },
      { h: "Engines and propellers" },
      { ul: [
        "Two Lycoming O-360-A1H6, 180 hp at 2,700 rpm each, carbureted, counter-rotating (the right engine is an LO-360 that turns counterclockwise viewed from behind), so there is no critical engine. Carburetor heat is available and needed: the first sign of carb ice with a constant-speed prop is a loss of manifold pressure with no rpm change.",
        "Hartzell two-blade constant-speed, full-feathering props. Oil pressure from the governor drives the blades toward low pitch/high rpm; a spring and counterweights drive them toward feather. Loss of oil pressure feathers the prop. Centrifugal start locks engage below about 950 rpm so the prop does not feather at shutdown, which is also why a failed engine must be feathered before its rpm decays.",
        "Unfeathering accumulators are optional equipment; without them, unfeathering means prop control forward and cranking with the starter.",
        "Run-up: magneto check per POH limits, carb heat check, prop cycle, feather check (pull each prop to feather briefly and watch rpm fall, push forward before the latch range), and a governor check."
      ] },
      { h: "Landing gear" },
      { p: "Retractable tricycle gear, **hydraulically** actuated by an **electrically driven reversible pump**. The gear selector controls the pump; hydraulic pressure holds the gear up (there are no mechanical uplocks), and a pressure switch cycles the pump if pressure bleeds off, so a pump that runs repeatedly in cruise is a leak warning. Down locks are mechanical. Indications: three green lights for down and locked, a red light for gear in transit or unsafe; the lights dim when the nav lights are on, which has fooled people at dusk into thinking a light was out. A squat switch on the left main prevents retraction on the ground (and sounds the horn if the selector is moved to UP on the ground)." },
      { ul: [
        "**Gear warning horn**: gear not down and locked and either throttle below about 14 in Hg manifold pressure, or flaps extended beyond the first (10°) notch, or the selector UP on the ground. The manifold-pressure horn sounds on every single-engine approach with one throttle at idle; anticipate it rather than silence it by habit.",
        "**Emergency extension**: slow below the POH emergency extension speed (about 100 KIAS), gear selector DOWN, pull the emergency gear extension knob, which releases hydraulic pressure so the gear free-falls with spring assistance on the nose gear. Yawing the airplane helps the mains lock. Confirm three green; the horn silence is only a hint.",
        "Speeds: Vlo (retraction) 109 KIAS, Vlo (extension) 140, Vle 140. Gear retraction at Vlo 109 means the gear comes up early in the climb at the Seminole's Vy of 88."
      ] },
      { h: "Fuel system" },
      { ul: [
        "One tank in each nacelle, 55 gal each, 110 total, 108 usable, 100LL. Each engine normally feeds from its own tank.",
        "Selectors: ON, OFF, X-FEED. **Crossfeed** lets an engine draw from the opposite tank; it is for extending single-engine range and balancing after an engine failure, in level flight only, never for takeoff or landing, and never both selectors on crossfeed at once (that leaves both engines on one tank with no supply to either from the other side).",
        "Each engine has an engine-driven pump and an electric pump. Electric pumps ON for priming, takeoff, landing, tank switching and whenever fuel pressure fluctuates. Fuel pressure gauges show each side.",
        "Sump drains on each tank plus strainer drains; the combustion heater burns aircraft fuel, so the heater is a fuel consumer too."
      ] },
      { h: "Electrical system" },
      { p: "Two engine-driven alternators operated in parallel, one battery, with an alternator-inoperative light and a loadmeter or ammeter for each side. The voltage and alternator ratings depend on the model year (older airframes 14 V, 2000-and-later airframes 28 V), so read the POH for the airplane you fly and do not assume. One alternator carries the entire load if the other fails; the response is to confirm the failed side, reduce electrical load, and continue, because the gear pump, flaps indication, fuel pumps, lights and avionics all need it. The gear can still be extended by free-fall with no electrical power at all, which is the point of the emergency system." },
      { h: "Other systems to know" },
      { ul: [
        "Flaps: manual handle, 0/10/25/40, Vfe 111 KIAS. Manual flaps work with everything else failed.",
        "Stall warning: two electric lift-detector vanes on the left wing (one active flaps up or at 10°, the other for larger flap settings), an electric horn, disabled on the ground by the squat switch. Lifting the vane on preflight does not sound the horn.",
        "Pitot heat and an alternate static source. Heated pitot is the only ice protection; the airplane is not approved for flight into known icing.",
        "Combustion heater with an overheat light; follow the cool-down procedure before shutdown.",
        "Limits: MTOW 3,800 lb, maximum ramp 3,816, maximum landing 3,800. Vmc 56, Vsse 82, Vxse 82, Vyse 88, Vx 82, Vy 88, Vr 75, Vso 55, Vs1 57, Vno 169, Vne 202, Va 135 at 3,800 and 112 at 2,700 lb. Maximum demonstrated crosswind 17 kt. Spins prohibited."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Describe the gear system: what moves it, what holds it up, what locks it down, and what the squat switch does.",
        "List the three conditions that sound the gear horn.",
        "Walk through an emergency gear extension, including the speed.",
        "When is crossfeed used, and what two things must never be done with it?",
        "What drives the prop toward feather, and why must you feather before the rpm decays?"
      ] }
    ]
  },
  {
    id: "systems-pitot-static-gyro", topic: "systems", title: "Pitot-static and gyro instruments: what fails how", minutes: 7,
    refs: ["IFH Ch. 5", "PHAK Ch. 8", "14 CFR 91.411"], tags: ["ipc", "flight-review", "ira", "cfi"],
    quiz: ["systems-mcq-014", "systems-card-008", "systems-oral-004", "ifr-mcq-033", "ifr-card-011", "ifr-scn-007", "nav-card-005"],
    keywords: ["pitot", "static", "blocked pitot", "blocked static", "alternate static", "gyro", "attitude indicator", "heading indicator", "turn coordinator", "precession", "vacuum failure"],
    body: [
      { h: "Why it matters" },
      { p: "Instrument failures are subtle. A blocked static port does not announce itself; it just makes the altimeter stop moving. A failing vacuum pump gives you an attitude indicator that slowly lies while every other instrument tells the truth. The IPC and every instrument oral ask you to reason through each blockage from the plumbing, so rebuild the plumbing first." },
      { h: "Who uses what" },
      { table: { head: ["Instrument", "Pitot (ram) pressure", "Static pressure"], rows: [
        ["Airspeed indicator", "Yes", "Yes (it measures the difference)"],
        ["Altimeter", "No", "Yes"],
        ["Vertical speed indicator", "No", "Yes, through a calibrated leak"]
      ] } },
      { p: "The pitot tube has a ram inlet and a drain hole. The static port(s) sit on the fuselage side; many airplanes have two, averaged, to cancel sideslip error. The alternate static source (in the cabin on unpressurized airplanes) is selected by a valve. Pitot heat protects only the pitot tube." },
      { h: "Blockages" },
      { table: { head: ["Blockage", "Airspeed", "Altimeter", "VSI"], rows: [
        ["Pitot ram inlet blocked, drain open", "Drops to zero (pressure bleeds out the drain)", "Normal", "Normal"],
        ["Pitot ram inlet and drain both blocked", "Acts like an altimeter: reads higher in a climb, lower in a descent, constant in level flight whatever the real speed", "Normal", "Normal"],
        ["Static port blocked", "Reads low above the blockage altitude, high below it (the trapped static is wrong by the altitude change)", "Frozen at the blockage altitude", "Zero, regardless of climb or descent"],
        ["Alternate static selected (unpressurized cabin, lower pressure)", "Reads slightly high", "Reads slightly high", "Momentary climb indication, then normal"]
      ] } },
      { callout: "The gotcha scenario: pitot ices over during a climb in IMC with the drain also blocked. Airspeed rises steadily as you climb, you lower the nose to \"fix\" it, airspeed keeps climbing while you accelerate for real. Cross-check: pitch attitude plus power equals performance. If attitude and power say 90 knots, the tape is lying.", kind: "warn" },
      { p: "Static blockage recovery: select the alternate static source and expect the small errors above; if there is no alternate, breaking the VSI glass (the VSI is the least important instrument) opens the static line to the cabin, and the VSI then reads reversed. Pitot blockage recovery: pitot heat on and wait; if it stays blocked, fly attitude and power from the POH tables." },
      { h: "Gyro instruments" },
      { ul: [
        "**Attitude indicator**: rigidity in space; the gyro spins on a vertical axis and the horizon bar stays put. Errors: a slight pitch-up and bank toward the inside during a long turn at the 180° point, and acceleration showing a false climb (ignore during the takeoff roll). Spins up over several minutes; it should be erect and stable before taxi.",
        "**Heading indicator**: rigidity in space, horizontal spin axis, no magnetic sensing. Precession (friction, bearings) drifts it about 3° per 15 minutes; reset to the compass in straight, level, unaccelerated flight. Drift beyond that means a failing instrument or a dying pump.",
        "**Turn coordinator**: precession of a canted gyro, electrically driven in most light airplanes so it survives a vacuum failure. It shows rate of roll and rate of turn, not bank; the ball is a separate inclinometer. Standard rate is 3°/s (a two-minute turn). A turn-and-slip indicator shows rate of turn only.",
        "**Magnetic compass** backs up heading: variation, deviation, dip (UNOS in turns, ANDS on east/west headings when accelerating), oscillation. It is the only heading source that needs no power."
      ] },
      { h: "Vacuum failure in a conventional panel" },
      { p: "The Seminole with a vacuum (pressure) system and the pre-G1000 172 share the classic failure: the suction gauge drops and the attitude indicator and heading indicator wind down slowly over minutes, staying plausible while they go. The attitude indicator will show a slow bank; the pilot follows it and enters a spiral. Defense: include the suction gauge and the annunciator in the scan, cross-check the AI against the turn coordinator and the HI against the compass, and when they disagree, believe the instrument that still has a power source. Then cover the dead instruments and fly partial panel: turn coordinator for bank, altimeter and VSI for pitch, compass and timed turns for heading. On the G1000 172S the equivalent is an AHRS failure: red X, standby attitude indicator, and the same partial-panel discipline." },
      { h: "Legal and preflight" },
      { ul: [
        "91.411: altimeter and static system test within the preceding 24 calendar months for IFR in controlled airspace; 91.413: transponder test on the same interval. 91.205(d) adds the required IFR instruments (gyroscopic rate-of-turn, slip-skid, sensitive altimeter adjustable for pressure, clock, generator or alternator, attitude indicator, heading indicator).",
        "Preflight: pitot cover off and the inlet and drain clear, static ports clear (never blow into them), pitot heat checked by touch, altimeter within 75 ft of field elevation when set, VSI reading zero (or note the error), AI erect within 5 minutes and stable, HI set, compass card present and legible, turn coordinator showing the correct direction during taxi turns with the ball opposite."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Pitot ram and drain both blocked, climbing: what does the airspeed do, and how do you catch it?",
        "Static port blocked: three instruments, three indications.",
        "What does the alternate static source do to each instrument, and why?",
        "Which gyro instrument is usually electric, and what does that mean after a vacuum failure?",
        "How much HI precession is acceptable, and how do you reset it correctly?"
      ] }
    ]
  },
  {
    id: "airspace-classes", topic: "airspace", title: "Airspace classes at a glance", minutes: 7,
    refs: ["AIM Ch. 3 Sec. 2", "14 CFR 91.126–91.135", "14 CFR 91.155", "14 CFR 91.215", "14 CFR 91.225"], tags: ["flight-review", "ipc", "kt"],
    quiz: ["airspace-mcq-001", "airspace-mcq-002", "airspace-mcq-003", "airspace-mcq-004", "airspace-mcq-005", "airspace-mcq-006", "airspace-mcq-007", "airspace-mcq-008", "airspace-mcq-009", "airspace-mcq-013", "airspace-card-009", "airspace-oral-001", "airspace-oral-002"],
    keywords: ["Class A", "Class B", "Class C", "Class D", "Class E", "Class G", "VFR minimums", "Mode C veil", "ADS-B", "speed limit", "transponder"],
    body: [
      { h: "Why it matters" },
      { p: "Airspace is the one subject the FAA knowledge test, the flight review and the IPC all return to, and the answers are a handful of tables. Restore the tables, then the two things people actually get violated for: entering Class B without the word \"cleared,\" and the ADS-B and Mode C rules that follow the airspace." },
      { h: "The classes" },
      { table: { head: ["Class", "Where", "Entry requirement", "Equipment", "Speed limit"], rows: [
        ["A", "18,000 ft MSL to FL600", "IFR clearance, instrument-rated pilot", "IFR equipment, Mode C, ADS-B Out", "No 250-kt rule (it starts above 10,000); Mach as assigned"],
        ["B", "Surface to about 10,000 ft MSL, upside-down wedding cake, 30 NM Mode C veil", "ATC **clearance** (hear \"cleared into the Bravo\"); private pilot or student/sport/recreational with the 61.95 endorsement, and some Bravos bar students entirely", "Two-way radio, Mode C, ADS-B Out (inside the veil too)", "250 kt below 10,000; 200 kt under a Bravo shelf or in a VFR corridor"],
        ["C", "Surface to 4,000 ft above the airport: 5 NM core, 10 NM shelf from 1,200 ft; outer area 20 NM", "Two-way radio communication established (your call sign acknowledged; \"stand by\" counts)", "Two-way radio, Mode C, ADS-B Out", "200 kt within 4 NM of the primary airport at or below 2,500 ft AGL"],
        ["D", "Surface to about 2,500 ft above the airport, about 4 NM radius", "Two-way radio communication established", "Two-way radio", "200 kt within 4 NM at or below 2,500 ft AGL"],
        ["E", "Surface areas, 700 ft or 1,200 ft AGL floors, 14,500 ft MSL where nothing lower is charted, up to 18,000; airways, and above FL600", "None VFR; IFR clearance when IFR", "ADS-B Out and Mode C at and above 10,000 ft MSL except at and below 2,500 ft AGL", "250 kt below 10,000"],
        ["G", "Uncontrolled: surface to the Class E floor", "None", "None", "250 kt below 10,000"]
      ] } },
      { p: "Class D and E surface areas, and most Class C cores, extend up to a charted ceiling; above and beside them is Class E. Class G rarely goes above 1,200 ft AGL in the eastern U.S. and can reach 14,500 ft MSL in the mountain West. Class B and C are tailored, so read the chart, not the textbook shape." },
      { h: "VFR weather minimums (91.155)" },
      { table: { head: ["Airspace", "Visibility", "Cloud clearance"], rows: [
        ["A", "n/a", "n/a"],
        ["B", "3 SM", "Clear of clouds"],
        ["C, D, and E below 10,000 ft MSL", "3 SM", "500 below, 1,000 above, 2,000 horizontal"],
        ["E at or above 10,000 ft MSL", "5 SM", "1,000 below, 1,000 above, 1 SM horizontal"],
        ["G, 1,200 ft AGL or less, day", "1 SM", "Clear of clouds"],
        ["G, 1,200 ft AGL or less, night", "3 SM", "500/1,000/2,000"],
        ["G, above 1,200 ft AGL but below 10,000 ft MSL, day", "1 SM", "500/1,000/2,000"],
        ["G, above 1,200 ft AGL but below 10,000 ft MSL, night", "3 SM", "500/1,000/2,000"],
        ["G, above 1,200 ft AGL and at or above 10,000 ft MSL", "5 SM", "1,000/1,000/1 SM"]
      ] } },
      { ul: [
        "Surface areas (B, C, D, E designated for an airport): to operate beneath the ceiling, the reported ground visibility must be at least 3 SM and the ceiling at least 1,000 ft, or you need Special VFR (1 SM, clear of clouds; at night only with an instrument rating and an IFR-equipped airplane).",
        "The night Class G exception: within one-half mile of the runway in a traffic pattern, 1 SM and clear of clouds is enough at night below 1,200 ft AGL.",
        "Memory key: the 500/1,000/2,000 cloud clearances follow you everywhere except Bravo (clear of clouds), low Golf by day (clear of clouds) and the high-altitude set (1,000/1,000/1 SM)."
      ] },
      { h: "Transponder and ADS-B Out (91.215, 91.225)" },
      { p: "Both are required in the same places: Class A, B and C; within the 30 NM Mode C veil of a Class B primary airport from the surface to 10,000 ft MSL; above the ceiling and within the lateral boundaries of Class B or C up to 10,000 ft MSL; in Class E at and above 10,000 ft MSL except at and below 2,500 ft AGL; and (ADS-B) in Class E over the Gulf of Mexico at and above 3,000 ft MSL within 12 NM of the coast. Class D needs neither. An aircraft never certificated with an engine-driven electrical system (gliders, some antiques) is exempt from the veil, the above-B/C and the high Class E requirements, but not from Class A, B or C themselves. ADS-B Out must be on at all times in airspace that requires it, and a deviation request to ATC (for an inoperative unit) must be made in advance, at least an hour, through the FAA ADAPT tool for the ADS-B case." },
      { h: "The two entries people get wrong" },
      { ul: [
        "Class B: \"radar contact\" is not a clearance. \"Cleared into the Class Bravo\" is. If you cannot get the words, stay out.",
        "Class C and D: you need two-way communication **established**, meaning the controller used your call sign. \"Aircraft calling, stand by\" does not establish it; \"Cessna 123AB, stand by\" does. If told to remain outside, remain outside."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Dimensions and entry requirement for Class C, and the speed limit near the primary airport.",
        "VFR minimums in Class G at 1,500 ft AGL at night below 10,000 ft MSL.",
        "Where is ADS-B Out required but Mode C not, and where is neither required?",
        "What does it take to fly into a Class D surface area when the reported ceiling is 900 ft overcast?",
        "Which pilots may enter Class B, and what is the minimum certificate?"
      ] }
    ]
  },
  {
    id: "airspace-signs-incursions", topic: "airspace", title: "Airport signs, markings, lights and runway incursion avoidance", minutes: 8,
    refs: ["AIM Ch. 2 Sec. 1 and Sec. 3", "AC 91-73B", "AIM 4-3-18", "AIM 4-4-7"], tags: ["flight-review", "atp", "part135", "kt"],
    quiz: ["airspace-mcq-019", "airspace-mcq-020", "airspace-mcq-021", "airspace-mcq-022", "airspace-mcq-023", "airspace-mcq-024", "airspace-mcq-029", "airspace-card-001", "airspace-card-002", "airspace-card-003", "airspace-oral-004"],
    keywords: ["runway incursion", "hold short", "holding position", "sign colors", "runway lighting", "RWSL", "runway guard lights", "stop bar", "LAHSO", "displaced threshold", "read back"],
    body: [
      { h: "Why it matters" },
      { p: "Runway incursions are the FAA's top-of-list ground hazard, airline interviews ask how you avoid them, and the flight review includes surface operations. The knowledge is simple but perishable: what each color means, what a sign is telling you, what you must read back, and what the red lights in the pavement are saying." },
      { h: "Signs" },
      { table: { head: ["Sign", "Colors", "Meaning"], rows: [
        ["Mandatory instruction", "White on red", "Runway holding position (\"27-9\"), runway approach area hold, ILS critical area hold, NO ENTRY. Never pass without a clearance."],
        ["Location", "Yellow on black", "The taxiway or runway you are ON (\"B\", \"27\")"],
        ["Direction", "Black on yellow with arrow", "Taxiway you are approaching, arrow shows the turn"],
        ["Destination", "Black on yellow with arrow", "Runway, ramp, FBO, military, civil"],
        ["Runway distance remaining", "White on black", "Thousands of feet remaining"],
        ["Boundary", "Yellow with black graphic", "Runway safety area/OFZ boundary (back of the hold sign) and ILS critical area boundary (ladder): once you are past it, you are clear"],
        ["Information", "Black on yellow", "Noise abatement, frequencies, procedures"]
      ] } },
      { p: "A runway sign with the lower number on the left (\"27-9\") tells you runway 27 is to your left. A sign with one number and an arrow (\"27 →\") means the runway ahead is runway 27 for taxiing onto in that direction. \"27-APCH\" is a runway approach area hold: you are not on the runway, but you are under its approach path." },
      { h: "Markings" },
      { ul: [
        "**Runway holding position**: two solid lines, two dashed; solid lines on the side where you must hold, dashed on the runway side. You are not clear of the runway until the entire airplane is past the marking.",
        "**ILS critical area holding position**: yellow ladder. Hold there when instructed (typically when the ILS is in use and the weather is below about 800 ft and 2 SM).",
        "**Taxiway edge**: double solid yellow means do not cross (pavement is not usable); double dashed means the adjacent pavement is usable (an apron).",
        "**Non-movement area boundary**: one solid and one dashed yellow line; the solid line is on the non-movement side (ramp). Crossing into the movement area requires ATC clearance.",
        "**Displaced threshold**: white arrows to a solid threshold bar; usable for taxi, takeoff and rollout, not for landing. **Chevrons** mark blast pad or stopway, usable only for an emergency overrun. A yellow **X** means closed.",
        "Enhanced taxiway centerline (dashed yellow lines either side of the centerline for about 150 ft before a hold line) warns that a runway hold is coming."
      ] },
      { h: "Lights" },
      { ul: [
        "Runway edge lights white; on instrument runways the last 2,000 ft (or half the runway, whichever is less) is yellow. Centerline lights (where installed): white, then alternating red and white for the last 3,000 ft, then all red for the last 1,000 ft. Touchdown zone lights: the first 3,000 ft or half the runway. Threshold lights green from the approach side, red from the runway side (runway end).",
        "Taxiway edge lights blue, centerline green. Clearance bar lights (three in-pavement yellow) mark a hold point; **runway guard lights** (elevated or in-pavement flashing yellow) mark a runway holding position at night and in low visibility.",
        "**Stop bar lights**: a row of red in-pavement lights at a hold line in low visibility operations. Never cross an illuminated stop bar, even with a clearance; ATC turns it off with the clearance and the lead-on lights come on.",
        "**Runway status lights (RWSL)**: automatic, surveillance-driven, independent of ATC. Red Runway Entrance Lights (RELs) mean unsafe to enter or cross; red Takeoff Hold Lights (THLs) mean unsafe to depart. Never cross or take off over red lights even if cleared; stop and tell ATC.",
        "PAPI and VASI: PAPI two white, two red on glidepath; VASI red over white is right. Both guarantee obstacle clearance only within about 10° of the extended centerline, out to 4 NM (VASI) or 3.4 NM (PAPI)."
      ] },
      { h: "Incursion avoidance (AC 91-73B, AIM 4-3-18)" },
      { ol: [
        "Study the diagram before taxi; brief the route, hot spots and every runway you will cross. Write the clearance down.",
        "Read back every runway assignment and hold-short instruction with the runway designator and your call sign; ATC must hear it. \"Line up and wait\" and every clearance to enter, cross, take off from or land on a runway also gets a full readback.",
        "A taxi clearance never includes crossing a runway. Since 2010 ATC must issue an explicit instruction to cross or hold short of each runway on your route (two runways with centerlines less than 1,000 ft apart may be crossed on one instruction). If you did not hear \"cross runway 27,\" hold short and ask.",
        "Sterile cockpit on the ground: no heads-down programming while moving; taxi slowly at unfamiliar airports and stop if in doubt about position.",
        "Lights: taxi light on while moving, all exterior lights on when crossing a runway and when lined up, strobes once cleared for takeoff. Transponder and ADS-B on from the start of taxi.",
        "After landing: clear the hold line completely, stop, and only then get the ground frequency.",
        "LAHSO: you may decline; accept only if you can stop within the published available landing distance, and read back \"hold short of runway XX.\""
      ] },
      { callout: "The pattern in incursion reports: an expectation ahead of the clearance, a readback that was really a hearback, and a taxi in low visibility without the diagram. Fix all three by slowing down.", kind: "tip" },
      { h: "Check yourself" },
      { ul: [
        "Describe the four sign color combinations you must know and give one example of each.",
        "Which side of the holding position marking is solid, and when are you clear of the runway?",
        "What do red RELs and THLs mean, and what do you do if cleared across them?",
        "List the ATC instructions that require a full readback with runway designator.",
        "Runway edge light colors in the last 2,000 ft, and centerline lights in the last 3,000 and 1,000 ft."
      ] }
    ]
  },
  {
    id: "airspace-sua-tfr-notam", topic: "airspace", title: "Special use airspace, TFRs and NOTAMs", minutes: 7,
    refs: ["AIM Ch. 3 Sec. 4 and Sec. 5", "14 CFR 91.133", "14 CFR 91.137", "14 CFR 91.141", "14 CFR 91.145", "14 CFR 99.7", "AIM 5-1-3"], tags: ["flight-review", "ipc", "kt"],
    quiz: ["airspace-mcq-014", "airspace-mcq-015", "airspace-mcq-016", "airspace-mcq-017", "airspace-card-006", "airspace-card-010", "airspace-oral-003"],
    keywords: ["special use airspace", "restricted", "prohibited", "MOA", "warning area", "alert area", "CFA", "TFR", "NOTAM", "FDC", "stadium TFR", "SFRA", "MTR"],
    body: [
      { h: "Why it matters" },
      { p: "Special use airspace questions test whether you know which lines on the chart you may cross, which need permission, and which just want caution. TFRs are where pilots get intercepted, and the stadium TFR and the DC SFRA are the two that catch returning pilots because they do not look like anything on a sectional. NOTAMs are how you find out about all of it, and 91.103 makes them your responsibility." },
      { h: "Special use airspace" },
      { table: { head: ["Type", "Chart", "VFR entry", "IFR handling"], rows: [
        ["Prohibited (P-)", "Blue hatched", "Never without specific authorization (P-56 Washington, Camp David). Security reasons.", "ATC routes around"],
        ["Restricted (R-)", "Blue hatched", "Only with permission of the controlling agency when active; hazards such as artillery, missiles, aerial gunnery. Check the chart panel for times and the controlling agency; FSS and ATC know the status.", "ATC clears you through when it is inactive or released; otherwise reroutes"],
        ["Warning (W-)", "Blue hatched, 3 NM offshore and beyond", "No legal restriction (international or coastal waters), but the hazard is the same as a restricted area", "Same as restricted for routing"],
        ["MOA", "Magenta hatched", "Permitted. Military training with high-speed, abrupt maneuvers; exercise extreme caution, contact the controlling agency or FSS for real-time status, and consider talking to ATC", "ATC clears IFR traffic through only if it can provide separation from the participants; otherwise reroutes"],
        ["Alert (A-)", "Magenta hatched", "Permitted; high volume of training or unusual activity. All pilots share collision avoidance", "No restriction"],
        ["Controlled firing area (CFA)", "Not charted", "Activities are suspended when a spotter sees an aircraft approaching; no action needed", "None"],
        ["National security area (NSA)", "Dashed magenta", "Voluntary avoidance requested; can be made prohibited temporarily under 99.7", "ATC routes around when prohibited"]
      ] } },
      { p: "Also on the chart: **military training routes** (IR for IFR, VR for VFR; four-digit routes have all segments at or below 1,500 ft AGL, three-digit routes have at least one segment above), flown at up to 250 kt and more; **TRSAs** (voluntary participation around some Class D airports); **parachute jump areas**; and wildlife refuges and parks where 2,000 ft AGL is requested. Look at the chart margin or Chart Supplement for the altitudes, times and controlling agency of every SUA on your route." },
      { h: "Temporary flight restrictions" },
      { ul: [
        "**91.137 disaster and hazard areas**, three flavors: (a)(1) protect persons and property on the surface (only relief aircraft); (a)(2) a safe environment for disaster relief aircraft (you may enter if carrying relief, authorized by the agency, IFR under ATC, operating to or from an airport within the area without hampering relief, or news media with a flight plan); (a)(3) prevent an unsafe congestion of sightseeing aircraft (enter if IFR, operating to or from an airport within the area, or on a flight plan filed with FSS and in radio contact). Wildfires, hurricanes and major accidents produce these.",
        "**91.141 presidential and VIP movements**: usually a 10 NM inner ring and a 30 NM outer ring with specific requirements (flight plan, discrete squawk, two-way comm, no loitering); read the NOTAM.",
        "**91.143 space flight operations**, **91.145 aerial demonstrations and major sporting events** (air shows, the Super Bowl), and **91.138** Hawaii.",
        "**99.7 special security instructions, the stadium TFR**: 3 NM radius, 3,000 ft AGL, from one hour before to one hour after any MLB, NFL, NCAA Division I football or major motor speedway event in a stadium of 30,000 or more seats. It is a standing FDC NOTAM, so it does not appear as a separate TFR on many apps; you have to know the schedule.",
        "**DC SFRA and FRZ**: the SFRA (roughly 30 NM around the DCA VOR) requires a flight plan, a discrete code and two-way comm; the FRZ (about 15 NM) is effectively closed. 91.161 requires the FAA's online SFRA awareness course before any VFR flight within 60 NM of the DCA VOR/DME."
      ] },
      { callout: "An intercept means you did something wrong, or are about to. If a military aircraft appears beside you: do not maneuver abruptly, follow the signals (rocking wings means follow me), squawk 7700, and try 121.5. AIM 5-6-2 has the signals; know that they exist before you need them.", kind: "warn" },
      { h: "NOTAMs" },
      { table: { head: ["Type", "Content"], rows: [
        ["NOTAM (D)", "Distant: all navaids in the NAS, public-use airports and seaplane bases in the Chart Supplement. Keyworded: RWY, TWY, APRON, AD, OBST, NAV, COM, SVC, AIRSPACE, ODP, SID, STAR, CHART, DATA, IAP, VFP, ROUTE, SPECIAL, SECURITY, (O) other"],
        ["FDC", "Flight Data Center: regulatory. Amendments to instrument procedures and charts, TFRs, special notices. An FDC NOTAM on an approach changes the minimums you may use"],
        ["Pointer", "Points to another NOTAM (typically to make a TFR easier to find)"],
        ["SAA", "Special activity airspace: schedules for SUA activation beyond the charted times"],
        ["Military", "Military airfields and navaids"],
        ["International", "ICAO-format NOTAMs for operations outside the U.S."]
      ] } },
      { p: "Sources: FAA NOTAM Search, the Flight Service briefing (1-800-WX-BRIEF or 1800wxbrief.com), an EFB briefing, and the FAA Domestic and International Notices pages, which replaced the Notices to Air Missions Publication in 2020 and hold long-term items that never appear in a local NOTAM search. The U.S. NOTAM system has been moving to the ICAO format, so expect Q-lines and coordinates in the raw text; the plain-language translation in your EFB is still your friend, but it is not the regulatory text." },
      { h: "Check yourself" },
      { ul: [
        "Which three SUA types may a VFR pilot enter without permission, and which two need it?",
        "How does ATC handle a restricted area on your IFR route?",
        "State the stadium TFR dimensions, timing and which events trigger it.",
        "Under 91.137(a)(3), what lets you enter the area?",
        "Which NOTAM type changes an approach's minimums, and where do long-term notices live?"
      ] }
    ]
  },
  {
    id: "aeromed-hypoxia-illusions", topic: "aeromed", title: "Hypoxia, hyperventilation, CO and illusions", minutes: 8,
    refs: ["PHAK Ch. 17", "AIM 8-1-2", "AIM 8-1-3", "AIM 8-1-4", "AIM 8-1-5", "14 CFR 91.211"], tags: ["flight-review", "ipc", "atp", "cfi"],
    quiz: ["aeromed-mcq-001", "aeromed-mcq-002", "aeromed-mcq-003", "aeromed-mcq-004", "aeromed-mcq-005", "aeromed-mcq-006", "aeromed-mcq-007", "aeromed-mcq-008", "aeromed-mcq-009", "aeromed-mcq-010", "aeromed-mcq-012", "aeromed-card-004", "aeromed-card-005", "aeromed-card-006", "aeromed-oral-001", "aeromed-oral-002"],
    keywords: ["hypoxia", "hyperventilation", "carbon monoxide", "time of useful consciousness", "spatial disorientation", "illusion", "leans", "somatogravic", "black hole", "night vision", "oxygen"],
    body: [
      { h: "Why it matters" },
      { p: "Aeromedical questions are easy points on any oral and life-or-death in the airplane, because every one of these conditions attacks the judgment you would use to recognize it. A Seminole at 11,500 ft on a long leg, a 172 with a cracked muffler in winter, a black-hole approach at night: the examiner wants to hear that you know the symptoms, the numbers and the first action." },
      { h: "Hypoxia: four kinds, one result" },
      { table: { head: ["Type", "Cause", "Example"], rows: [
        ["Hypoxic", "Not enough oxygen partial pressure in the lungs", "Altitude; the normal case above 10,000 ft"],
        ["Hypemic", "Blood cannot carry enough oxygen", "Carbon monoxide, anemia, recent blood donation"],
        ["Stagnant", "Blood is not circulating well", "G-loading, cold, shock, a leg that fell asleep"],
        ["Histotoxic", "Cells cannot use the oxygen delivered", "Alcohol, drugs, cyanide"]
      ] } },
      { p: "Symptoms vary by person but are consistent for each person, which is why a chamber or PROTE session is worth doing once: euphoria, impaired judgment, slowed reaction, headache, tingling, tunnel vision, cyanosis, then unconsciousness. Night vision degrades from about 5,000 ft. The dangerous feature is that hypoxia removes the self-criticism needed to notice it: you feel fine, even pleased." },
      { table: { head: ["Altitude", "Time of useful consciousness (normal ascent, resting; AC 61-107B / PHAK Ch. 17)"], rows: [
        ["18,000 ft", "20–30 min"],
        ["22,000 ft", "5–10 min"],
        ["25,000 ft", "3–5 min"],
        ["28,000 ft", "2.5–3 min"],
        ["30,000 ft", "1–2 min"],
        ["35,000 ft", "30–60 s"],
        ["40,000 ft", "15–20 s"],
        ["43,000 ft and above", "9–12 s"]
      ] } },
      { p: "Rapid decompression roughly halves these times. Treatment is the same for all types once recognized: oxygen on and 100 percent, descend below 10,000 ft, and land if the cause is not simply altitude." },
      { h: "The rules (91.211, unpressurized)" },
      { ul: [
        "Above **12,500 ft MSL** up to and including 14,000 ft: the required minimum flight crew must use oxygen for any part of the flight at those altitudes that exceeds **30 minutes**.",
        "Above **14,000 ft MSL**: the required crew uses oxygen for the entire time at those altitudes.",
        "Above **15,000 ft MSL**: every occupant must be **provided** with oxygen (passengers need not use it).",
        "The AIM recommends oxygen above 10,000 ft by day and above 5,000 ft at night. Part 135 (135.89) is stricter: oxygen use begins at 10,000 ft for a pilot after 30 minutes, continuous above 12,000 ft."
      ] },
      { h: "Hyperventilation" },
      { p: "Over-breathing from stress or fear blows off carbon dioxide; the blood becomes alkaline and the symptoms overlap with hypoxia: lightheadedness, tingling in the fingers and around the mouth, visual disturbance, a feeling of suffocation, hot and cold flashes, and eventually fainting. The fix is to slow the breathing rate: talk aloud, breathe into a bag, consciously breathe slowly. The gotcha: if you cannot tell hypoxia from hyperventilation, put oxygen on. It cures the first and the deliberate, calm breathing through a mask tends to cure the second." },
      { h: "Carbon monoxide" },
      { p: "Colorless, odorless, and about 200 times as attracted to hemoglobin as oxygen, so a small leak produces hypemic hypoxia that persists for hours after exposure. The source in the 172 is the exhaust-muffler heat exchanger feeding the cabin heat; in the Seminole, the combustion heater or an exhaust leak. Symptoms: headache, drowsiness, dizziness, nausea, impaired judgment. Action: cabin heat off, vents and windows open, oxygen if available, land as soon as practical, and do not fly again until the source is found. A detector (later G1000 172s annunciate CO LVL HIGH) is cheap insurance in winter." },
      { h: "Vestibular illusions (spatial disorientation)" },
      { memo: { title: "ICEFLAGS", text: "Inversion, Coriolis, Elevator, False horizon, Leans, Autokinesis, Graveyard spiral, Somatogravic. The vestibular ones: Inversion (abrupt level-off from a climb feels like tumbling backward), Coriolis (head movement in a prolonged turn feels like rotation on another axis), Elevator (updraft feels like a climb, pilot pushes), Leans (a slow roll goes unnoticed; the correction feels like a bank the other way), Graveyard spiral (a prolonged descending turn feels level; pulling up tightens it), Somatogravic (acceleration feels nose-up, deceleration nose-down; the night takeoff over water push-over)." } },
      { p: "The inner ear senses only changes in motion and loses a steady turn after about 20 seconds; it cannot tell gravity from acceleration. Every one of these is defeated the same way: establish the instrument scan, believe the instruments, avoid sudden head movements, and do not mix visual and instrument references at night. Recovery from the leans takes a minute or two of wings-level flight on instruments while the sensation fades." },
      { h: "Visual illusions on approach (AIM 8-1-5)" },
      { table: { head: ["Illusion", "You feel", "Tendency"], rows: [
        ["Narrower-than-usual runway", "Higher than you are", "Low approach"],
        ["Wider-than-usual runway", "Lower than you are", "High approach, flare too high"],
        ["Upsloping runway or terrain", "Higher than you are", "Low approach"],
        ["Downsloping runway", "Lower than you are", "High approach"],
        ["Featureless terrain, black hole, water at night", "Higher than you are", "Low approach, CFIT"],
        ["Haze or rain on the windshield", "Farther away or higher", "Low approach"],
        ["Bright runway and approach lights", "Closer than you are", "High approach"],
        ["False horizon (sloping cloud deck, ground lights)", "Wrong attitude", "Wings not level"]
      ] } },
      { p: "Defense: fly a published glidepath (ILS, LPV, VASI or PAPI) whenever one exists, especially at night and at unfamiliar airports, cross-check altitude against distance on final (300 ft per NM for a 3° path), and brief the illusion you expect before you see it." },
      { h: "Night vision and the small stuff" },
      { ul: [
        "Rods need about 30 minutes to dark-adapt and a bright white light resets the clock; use dim lighting and look 5–10° off center to see faint objects.",
        "Scuba: wait at least 12 hours after a dive that did not need a decompression stop before flying up to 8,000 ft MSL; 24 hours after a dive that did, or before any flight above 8,000 ft (AIM 8-1-2).",
        "Alcohol: 8 hours bottle to throttle and 0.04 percent blood alcohol are the legal limits; the FAA and most operators want 12 hours or more."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Name the four types of hypoxia with one cause each.",
        "Time of useful consciousness at 25,000 ft, and what rapid decompression does to it.",
        "Recite 91.211 for an unpressurized airplane.",
        "What do you do when you cannot tell hypoxia from hyperventilation, and why does it work?",
        "A narrow, upsloping runway at night with no approach lights: which way does each illusion push you?"
      ] }
    ]
  },
  {
    id: "aeromed-adm", topic: "aeromed", title: "ADM: IMSAFE, PAVE, DECIDE, hazardous attitudes, personal minimums", minutes: 7,
    refs: ["PHAK Ch. 2", "AC 60-22", "AIM 8-1-1", "14 CFR 61.53", "14 CFR 91.3"], tags: ["flight-review", "cfi", "atp", "part135"],
    quiz: ["aeromed-mcq-013", "aeromed-mcq-014", "aeromed-mcq-015", "aeromed-mcq-016", "aeromed-mcq-017", "aeromed-mcq-018", "aeromed-mcq-019", "aeromed-card-001", "aeromed-card-002", "aeromed-card-003", "aeromed-card-008", "aeromed-oral-003", "aeromed-oral-004", "aeromed-oral-005", "aeromed-oral-006"],
    keywords: ["ADM", "IMSAFE", "PAVE", "DECIDE", "hazardous attitudes", "antidote", "personal minimums", "risk management", "SRM", "CRM", "TEM", "get-there-itis"],
    body: [
      { h: "Why it matters" },
      { p: "Aeronautical decision-making is the only subject that appears in every ACS task, and it is what the airline interviewer is really asking about when they say \"tell me about a time you made a difficult decision.\" The acronyms are the vocabulary; the examiner wants to hear them applied to a specific flight, not recited. Here they are, with what each one is actually for." },
      { h: "The pilot: IMSAFE and 61.53" },
      { memo: { title: "IMSAFE", text: "Illness, Medication, Stress, Alcohol, Fatigue, Emotion (some versions: Eating). A self-assessment before every flight. 61.53 makes it a rule: you may not act as PIC while you know of or have reason to know of a medical condition that would make you unable to meet the requirements of your medical certificate." } },
      { p: "Fatigue is the one that is always underreported. Acute fatigue is fixed by sleep; chronic fatigue is not fixed by one night, and it produces the same errors as alcohol: slowed reaction, narrowed attention and poor judgment of your own impairment. Stress has a sweet spot: some improves performance, and beyond it performance collapses, especially under task saturation." },
      { h: "The flight: PAVE" },
      { memo: { title: "PAVE", text: "Pilot, Aircraft, enVironment, External pressures. A checklist of the four risk categories for a specific flight: your currency and condition; the airplane's equipment, performance and squawks; weather, terrain, airspace, airport, night; and the pressures (schedule, passengers, money, pride) that push a marginal go into a bad one." } },
      { p: "External pressures are the dangerous quadrant because they are invisible until you look for them and they distort the other three. The FAA defense is to decide the limits before the pressure exists: personal minimums written down on a good day, and an alternate plan (a rental car, a hotel, a phone call) arranged before departure so the pressure has somewhere to go." },
      { h: "Risk assessment" },
      { ul: [
        "A **hazard** is a condition or event (ice in the forecast); **risk** is the future impact of that hazard if it is not controlled (ice on an airplane with no deice over mountains at night).",
        "The FAA risk matrix rates **likelihood** (probable, occasional, remote, improbable) against **severity** (catastrophic, critical, marginal, negligible). High and serious cells require mitigation or a no-go; the output of the matrix is a decision, not a number.",
        "Mitigation changes one axis: carry more fuel (severity), leave earlier (likelihood), take a safety pilot, choose a different route or altitude, or cancel.",
        "The **3P model**: Perceive the hazard, Process the risk, Perform the mitigation, and loop. The **5P check** (Plan, Plane, Pilot, Passengers, Programming) is the same idea applied at fixed points in a flight (preflight, before takeoff, cruise, before descent, before approach)."
      ] },
      { h: "Hazardous attitudes and antidotes (AC 60-22)" },
      { table: { head: ["Attitude", "Sounds like", "Antidote"], rows: [
        ["Anti-authority", "\"Don't tell me.\"", "Follow the rules. They are usually right."],
        ["Impulsivity", "\"Do it quickly.\"", "Not so fast. Think first."],
        ["Invulnerability", "\"It won't happen to me.\"", "It could happen to me."],
        ["Macho", "\"I can do it.\"", "Taking chances is foolish."],
        ["Resignation", "\"What's the use?\"", "I'm not helpless. I can make a difference."]
      ] } },
      { p: "The trick the examiner is listening for: recognize the thought as it occurs, name the attitude, and say the antidote. A pilot who says \"I noticed I was thinking 'I've flown worse than this' and recognized it as invulnerability\" has passed the question. Related biases with no acronym: **plan continuation bias** (get-there-itis, the tendency to continue the original plan as conditions deteriorate because the sunk cost feels real) and **confirmation bias** (seeing the weather you want to see). The defense is a pre-set decision point: a hard altitude, a hard time, a hard fuel number at which the decision is already made." },
      { h: "Making the decision: DECIDE" },
      { memo: { title: "DECIDE", text: "Detect that a change has occurred, Estimate the need to counter or react, Choose a desirable outcome, Identify actions to control the change, Do the necessary action, Evaluate the effect. A structured model for a problem with time to think; the automatic, trained response handles the ones without." } },
      { h: "Personal minimums" },
      { p: "Personal minimums are limits above the legal ones, set for your current proficiency and written down when calm: a margin on ceiling, visibility, wind and crosswind, runway length, fuel reserve, night and time since the last flight, adjusted only on the ground. After two years away the honest numbers are higher than they were: a 172 crosswind limit of 10 kt rather than the demonstrated 15, a 1,000-ft ceiling for VFR, IFR minimums well above published until the IPC and a few approaches are behind you. Lower them deliberately as proficiency returns." },
      { h: "Crew concepts for the interview" },
      { ul: [
        "**CRM** is the use of all available resources (people, equipment, information) in a crew; **SRM** is the same discipline for a single pilot: task management, automation management, risk management, situational awareness, CFIT awareness and ADM.",
        "**Threat and error management**: threats come from outside the crew (weather, terrain, ATC, a MEL item), errors from the crew, and an undesired aircraft state is where unmanaged threats and errors lead. Identify threats in the briefing, trap errors with cross-checks and callouts, recover from undesired states before they become outcomes.",
        "**91.3**: the PIC is directly responsible for and the final authority as to the operation of the aircraft, and may deviate from any rule to the extent required to meet an emergency; a written report only if the Administrator asks."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Recite IMSAFE and PAVE and give one personal example of an external pressure.",
        "Hazard versus risk, and the two axes of the risk matrix.",
        "All five hazardous attitudes with their antidotes.",
        "Describe plan continuation bias and the one defense that works.",
        "What is an undesired aircraft state, and how does TEM prevent it?"
      ] }
    ]
  },
  {
    id: "perf-takeoff-landing", topic: "perf", title: "Takeoff and landing performance: factors and chart method", minutes: 9,
    refs: ["PHAK Ch. 11", "AFH Ch. 6", "C172S POH Sec. 5", "PA-44 POH Sec. 5", "AC 91-79A"], tags: ["flight-review", "kt", "c172", "pa44", "cax"],
    quiz: ["perf-mcq-001", "perf-mcq-002", "perf-mcq-003", "perf-mcq-004", "perf-mcq-005", "perf-mcq-006", "perf-mcq-007", "perf-mcq-010", "perf-mcq-019", "perf-mcq-022", "perf-mcq-023", "perf-mcq-024", "perf-card-001", "perf-card-002", "perf-card-003", "perf-card-005", "perf-scn-001", "perf-oral-001", "aero-mcq-021", "aero-scen-001", "weather-scen-005", "multi-mcq-015"],
    keywords: ["density altitude", "pressure altitude", "takeoff distance", "landing distance", "headwind", "tailwind", "crosswind component", "interpolation", "50-foot obstacle", "contaminated runway", "hydroplaning"],
    body: [
      { h: "Why it matters" },
      { p: "The FAA knowledge tests are built on chart problems, and the real-world version is the summer afternoon at a high airport where the 172 that took off fine in March will not clear the trees. The method is the same every time: convert the day to density altitude, correct for weight and wind, read the chart with interpolation, then add the margin the chart does not include." },
      { h: "Density altitude" },
      { ol: [
        "**Pressure altitude** = field elevation + (29.92 − altimeter setting) × 1,000. Example: elevation 5,000 ft, altimeter 29.72: PA = 5,000 + 200 = 5,200 ft.",
        "**ISA temperature** at that pressure altitude = 15 − 2 × (PA ÷ 1,000) °C. At 5,200 ft, ISA is about 4.6°C.",
        "**Density altitude** ≈ PA + 120 × (OAT − ISA temperature). With OAT 30°C: DA ≈ 5,200 + 120 × 25.4 ≈ 8,250 ft. The POH charts are entered with pressure altitude and temperature, which is the same thing done for you; the DA number is for your own judgment and the koch chart."
      ] },
      { p: "High density altitude hurts three times: the engine makes less power (about 3 percent per 1,000 ft, normally aspirated), the propeller gets less bite, and the wing needs a higher true airspeed for the same indicated speed, so the ground roll is longer and the climb gradient flatter. Rotate at the same **indicated** speed; the airplane will look fast over the ground, and pulling it off early stalls it in ground effect." },
      { h: "Rules of thumb (PHAK Ch. 11)" },
      { table: { head: ["Change", "Effect"], rows: [
        ["Gross weight +10%", "Takeoff speed +5%, acceleration −9%, takeoff distance about +21%"],
        ["Headwind equal to 10% of takeoff speed", "Takeoff distance about −19%"],
        ["Tailwind equal to 10% of takeoff speed", "Takeoff distance about +21%"],
        ["Landing speed +10% (fast approach)", "Landing distance at least +21%"],
        ["Density altitude", "Landing distance about +3.5% per 1,000 ft (about 16% longer at 5,000 ft than at sea level)"]
      ] } },
      { p: "Cessna POH notes for the 172S (verify in Section 5): decrease distances 10 percent for each 9 kt of headwind; with tailwinds up to 10 kt, increase distances 10 percent for each 2 kt; on dry grass add 15 percent of the ground roll for takeoff and 45 percent for landing. A widely used non-POH rule adds about 10 percent of takeoff distance per percent of upslope." },
      { h: "Wind components" },
      { p: "Crosswind = wind × sin(angle between wind and runway); headwind = wind × cos(angle). Shortcuts: 30° off gives 50 percent crosswind, 45° about 70 percent, 60° about 90 percent, and the headwind component is the complement (87, 70, 50 percent). Runway 27, wind 300 at 20 kt: 30° off, so 10 kt crosswind, 17 kt headwind. Compare with the maximum demonstrated crosswind (172S 15 kt, Seminole 17 kt), which is a demonstrated value by a test pilot, not a limitation, and with your own personal limit, which should be lower after a layoff." },
      { h: "Reading the chart" },
      { p: "POH takeoff and landing tables are entered with pressure altitude (rows) and temperature (columns) at a given weight, and they give ground roll and total distance over a **50-ft obstacle**. Interpolate linearly when you fall between rows or columns, or use the next higher row for a conservative answer. An illustrative example (numbers invented for the arithmetic, not from any POH): at 2,000 ft PA the table shows 1,380 ft at 10°C and 1,490 ft at 20°C; at 3,000 ft PA it shows 1,500 ft and 1,620 ft. For 2,500 ft and 15°C: at 2,000 ft, halfway between 1,380 and 1,490 is 1,435; at 3,000 ft, halfway between 1,500 and 1,620 is 1,560; halfway between those is about 1,500 ft. Then apply the wind and surface notes in the order the POH states, and compare with the runway length from the Chart Supplement, not from memory." },
      { ul: [
        "The 50-ft figure assumes the POH short-field technique: the stated flap setting, full power before brake release, liftoff and climb at the POH 50-ft speed (below Vx), on a paved, level, dry runway. Normal takeoffs take longer. Landing figures assume the POH approach speed, power off at 50 ft, maximum braking and no float.",
        "Add a margin: many operators require the runway to be at least 1.5 times the 50-ft distances. The 70/50 technique (abort if you lack 70 percent of rotation speed by 50 percent of the runway) catches a mistake in the arithmetic.",
        "For the Seminole, run the accelerate-stop distance and the single-engine climb chart for the actual weight and density altitude, and brief what you will do if the airplane will not climb on one engine."
      ] },
      { h: "Contaminated runways" },
      { ul: [
        "Wet or contaminated pavement lengthens the stopping distance and does nothing for the takeoff until an abort, when it matters most; slush and standing water also add drag on the roll.",
        "**Hydroplaning**: dynamic (tire rides on a water film; onset about 9 × √(tire pressure in psi), roughly 50 kt for a light-airplane tire around 30 psi), viscous (thin film on smooth or rubber-coated pavement, any speed), reverted rubber (locked wheel). Touch down firmly, on speed, and brake smoothly without locking the wheels.",
        "Runway condition reports use the Runway Condition Assessment Matrix: a code from 6 (dry) to 0 (nil) by runway third in the FICON NOTAM, with braking action reports of good, good to medium, medium, medium to poor, poor and nil."
      ] },
      { p: "Climb: Vx (172S 62, Seminole 82) for obstacles, Vy (74 and 88) for time. With altitude the indicated Vy decreases and Vx increases until they meet at the absolute ceiling. A gradient in ft per NM converts to a rate: fpm = (ft per NM × groundspeed) ÷ 60, so 200 ft per NM at 90 kt is 300 fpm, which a 172 at 8,000 ft density altitude may not have." },
      { h: "Check yourself" },
      { ul: [
        "Elevation 4,500 ft, altimeter 30.12, OAT 28°C: pressure altitude and approximate density altitude?",
        "Quote the PHAK weight, headwind and tailwind rules of thumb.",
        "Runway 18, wind 240 at 18 kt: crosswind and headwind components, and are you under the 172S demonstrated value?",
        "What technique does the POH 50-ft obstacle distance assume?",
        "Dynamic hydroplaning onset speed for a 36-psi tire?"
      ] }
    ]
  },
  {
    id: "perf-weight-balance", topic: "perf", title: "Weight and balance arithmetic", minutes: 8,
    refs: ["PHAK Ch. 10", "FAA-H-8083-1B (Weight and Balance Handbook)", "C172S POH Sec. 6", "PA-44 POH Sec. 6"], tags: ["flight-review", "kt", "c172", "pa44", "cax"],
    quiz: ["perf-mcq-014", "perf-mcq-015", "perf-mcq-016", "perf-mcq-017", "perf-mcq-018", "perf-card-006", "perf-scn-002", "perf-oral-003", "aero-mcq-023", "aero-card-007", "aero-mcq-014", "aero-card-004"],
    keywords: ["weight and balance", "center of gravity", "moment", "arm", "datum", "weight shift", "envelope", "ramp weight", "zero fuel weight", "percent MAC"],
    body: [
      { h: "Why it matters" },
      { p: "Weight and balance arithmetic is three formulas and a habit of writing things down. The knowledge test asks you to compute a CG, shift a weight and add or remove a passenger; the DPE asks you to show the computation for the checkride airplane and then asks what happens to handling if the CG is where you say. The envelope limits for the 172S and Seminole are in each POH; this lesson deliberately does not quote them. Look them up and plot the result." },
      { h: "The vocabulary" },
      { ul: [
        "**Datum**: the manufacturer's reference plane (the front face of the firewall on the 172; a point well forward of the wing on the PA-44). Arms aft of the datum are positive.",
        "**Arm** (station): inches from the datum to the item's CG. **Moment** = weight × arm, in lb-in, often shown as an index divided by 1,000.",
        "**Basic empty weight**: airframe, engine, unusable fuel, full oil, installed equipment. It changes with every modification, so use the current weighing record, not a sample.",
        "**Ramp weight** includes fuel for start and taxi; **takeoff weight** is what the limit applies to at brake release; **landing weight** is takeoff minus fuel burned. Seminole: maximum ramp 3,816 lb, maximum takeoff and landing 3,800 lb. 172S: maximum takeoff 2,550 lb (2,200 utility). Check for a maximum zero-fuel weight if the POH lists one.",
        "Standard weights: avgas 6 lb per gal, oil 7.5 lb per gal (1.875 lb per qt). Use actual occupant weights."
      ] },
      { h: "The three formulas" },
      { ol: [
        "**CG = total moment ÷ total weight.** List every item, multiply, add, divide.",
        "**Weight shift**: (weight shifted ÷ total weight) = (change in CG ÷ distance the weight is moved). Solve for whichever you need.",
        "**Adding or removing weight**: new CG = (old moment ± added moment) ÷ (old weight ± added weight). Or: change in CG = (weight added × distance from the old CG to the item's arm) ÷ new total weight."
      ] },
      { h: "Worked example 1: a loaded 172S" },
      { p: "Arms below are typical for a 172 and used only to show the method; use the arms and empty-weight data from the airplane's own POH." },
      { table: { head: ["Item", "Weight (lb)", "Arm (in)", "Moment (lb-in)"], rows: [
        ["Basic empty weight (from the weighing record)", "1,680", "39.5", "66,360"],
        ["Pilot and front passenger", "340", "37.0", "12,580"],
        ["Rear passenger", "170", "73.0", "12,410"],
        ["Fuel, 53 gal usable × 6", "318", "48.0", "15,264"],
        ["Baggage area 1", "40", "95.0", "3,800"],
        ["Total", "2,548", "", "110,414"]
      ] } },
      { p: "CG = 110,414 ÷ 2,548 = 43.3 in aft of datum. Weight is 2 lb under the 2,550 lb maximum, so there is no room for anything else, including a heavier pilot than you assumed. Plot 2,548 lb and 43.3 in on the POH envelope. Then do the landing case: burn 30 gal (180 lb at arm 48): weight 2,368, moment 110,414 − 8,640 = 101,774, CG = 43.0 in. Fuel is aft of this CG, so burning it moves the CG forward; check that the landing point is still inside the envelope, which narrows at the forward limit as weight changes." },
      { h: "Worked example 2: a Seminole that is over" },
      { p: "Illustrative arms again. Basic empty weight 2,460 lb at 86.0 in (moment 211,560). Two front occupants 360 lb at 80.5 (28,980); two rear occupants 340 lb at 118.1 (40,154); full fuel 108 gal = 648 lb at 95.0 (61,560); baggage 60 lb at 142.8 (8,568). Total 3,868 lb, over the 3,816 lb ramp limit by 52 lb and the 3,800 lb takeoff limit by 68 lb. Something leaves. Removing 12 gal of fuel (72 lb) gives 3,796 lb: moment 211,560 + 28,980 + 40,154 + (576 × 95.0 = 54,720) + 8,568 = 343,982, CG = 90.6 in. Plot it, and note the trade: 12 gal is roughly 35–40 minutes of two-engine cruise." },
      { h: "Worked example 3: shifting and adding" },
      { ul: [
        "**Shift**: in the 172S above, move the 40 lb bag from area 1 (95 in) to area 2 (123 in). Change in CG = 40 × (123 − 95) ÷ 2,548 = 0.44 in aft. Total weight unchanged, so only the moment changes: new CG about 43.8 in.",
        "**How much to shift**: an airplane at 2,400 lb needs the CG to move 1.5 in forward and there is 60 in between the aft and forward baggage areas. Weight to move = 1.5 × 2,400 ÷ 60 = 60 lb.",
        "**Add**: a 2,300 lb airplane with CG at 40.0 in (moment 92,000) adds 100 lb at 95 in. New CG = (92,000 + 9,500) ÷ 2,400 = 42.3 in. Shortcut: 100 × (95 − 40) ÷ 2,400 = 2.3 in aft.",
        "**Remove**: take the 170 lb rear passenger out of example 1: moment 110,414 − 12,410 = 98,004, weight 2,378, CG 41.2 in. Removing weight from behind the CG moves it forward."
      ] },
      { h: "Percent MAC and the judgment part" },
      { p: "Larger airplanes express CG as a percentage of the mean aerodynamic chord: %MAC = (CG − LEMAC) ÷ MAC × 100. The physics is the same: an aft CG lowers stall speed and stability and makes stall and spin recovery harder; a forward CG raises stall speed and trim drag and can leave you unable to flare. Two gotchas: an avionics upgrade can remove 20 lb from the nose and move the empty CG aft, and the 172S utility-category envelope is a separate, smaller box with its own loading restrictions for spins and the commercial maneuvers." },
      { h: "Check yourself" },
      { ul: [
        "Write the CG formula and the weight-shift formula from memory.",
        "A 2,450 lb airplane at CG 42.0 adds 50 lb at station 95: new weight and CG?",
        "How much weight must move 60 in forward to shift the CG of a 3,600 lb Seminole 1.0 in forward?",
        "Fuel is aft of the loaded CG; which way does the CG move as fuel burns, and which limit do you check at landing?",
        "Where do the 172S and Seminole envelope limits come from, and why are they not quoted here?"
      ] }
    ]
  },
  {
    id: "emerg-single-engine", topic: "emerg", title: "Engine failure, fire and forced landing in a single", minutes: 8,
    refs: ["AFH Ch. 18", "C172S POH Sec. 3", "AIM 6-1-2", "AIM 6-3-1", "14 CFR 91.3"], tags: ["flight-review", "c172", "cfi", "cax"],
    quiz: ["emerg-mcq-001", "emerg-mcq-002", "emerg-mcq-003", "emerg-mcq-004", "emerg-mcq-007", "emerg-mcq-012", "emerg-mcq-014", "emerg-mcq-015", "emerg-mcq-021", "emerg-card-001", "emerg-card-002", "emerg-card-005", "emerg-card-006", "emerg-scn-001", "emerg-scn-004", "emerg-oral-001", "emerg-oral-002", "emerg-oral-003", "aero-mcq-005", "regs-mcq-013", "regs-mcq-020"],
    keywords: ["engine failure", "forced landing", "best glide", "ABCDE", "engine fire", "electrical fire", "cabin fire", "emergency descent", "restart", "impossible turn", "mayday", "7700"],
    body: [
      { h: "Why it matters" },
      { p: "The engine-failure flow has to be in your hands, not in the checklist, because the first ten seconds decide the outcome: pitch for best glide, pick the field, then try to get the engine back. The AFH sets the principles; the POH sets the numbers and the order. The 172S is the example here; verify POH values against the airplane you fly." },
      { h: "Engine failure in flight" },
      { memo: { title: "ABCDE", text: "Airspeed: best glide (172S 68 KIAS at gross; slightly less when light). Best field: into the wind if you can, within gliding range, and commit to it. Checklist: the restart flow. Declare: 121.5 or the frequency you are on, squawk 7700. Execute (or Exit): secure the airplane, brief the passengers, land and get out." } },
      { p: "The 172S POH restart flow (verify in Section 3) is a fuel-and-spark sweep: airspeed 68 KIAS, fuel selector BOTH, fuel shutoff valve ON (in), auxiliary fuel pump ON, mixture RICH (if no restart in a few seconds, lean it toward cutoff and back; a flooded engine wants less fuel), magnetos BOTH, or START if the propeller has stopped. Most engine failures in singles are fuel: a tank run dry, the selector in the wrong place, a shutoff valve pulled, or carburetor ice in a carbureted airplane. The flow checks each of them in order. If it does not restart, do not keep troubleshooting below about 1,000 ft AGL; fly the landing." },
      { ul: [
        "At 68 KIAS the 172S glides roughly 1.5 NM per 1,000 ft in still air (about 9:1). Best glide is for distance; minimum sink is slower and buys time, not range.",
        "Pick the field early and fly a pattern to it: a key position abeam the touchdown point at about 1,000 ft AGL, then base and final, with flaps and a slip as the variable. Overshooting into a field is survivable; stalling short of it usually is not."
      ] },
      { h: "Engine failure after takeoff" },
      { p: "The AFH's worked example is the argument against the turn back: an engine failure at 300 ft AGL with a 4-second reaction, a standard-rate turn through 225° and a 65-kt glide ends up about 1,000 ft below the runway elevation. Lower the nose immediately to the POH speed (172S: 70 KIAS flaps up, 65 KIAS with flaps; verify), land within roughly 30° either side of the nose, and use the remaining seconds for fuel off, mixture off, magnetos off, master off and doors unlatched. Brief the altitude at which a turn back becomes an option for your airplane and your airport before every takeoff, and do not improvise it." },
      { h: "Fires" },
      { table: { head: ["Fire", "Flow (172S POH principles; verify)", "Notes"], rows: [
        ["Engine fire during start", "Keep cranking to draw the fire into the engine. If it starts, run at about 1,700 rpm for a few minutes, shut down and inspect. If it does not: throttle full open, mixture idle cut-off, keep cranking, then fuel shutoff OFF, master OFF, magnetos OFF, evacuate with the extinguisher.", "Induction fires are almost always the result of over-priming."],
        ["Engine fire in flight", "Mixture idle cut-off, fuel shutoff OFF, auxiliary pump OFF, master OFF (after the last radio call), cabin heat and air OFF, airspeed about 100 KIAS (verify POH; increase it if the fire does not go out), forced landing.", "Starve the fire of fuel first. Never attempt a restart after an engine fire. Dense black smoke means an oil fire."],
        ["Electrical fire in flight", "Master OFF, avionics OFF, all switches except magnetos OFF, vents closed, extinguisher; ventilate once out. If power is essential: master ON, breakers checked, radios on one at a time.", "The goal is to isolate the circuit; re-energizing recreates the problem, so land as soon as possible."],
        ["Cabin fire", "Master OFF if electrical, vents closed, extinguisher, then open vents and windows to clear smoke; land as soon as possible.", "Fight the fire first, then the smoke; opening vents too early feeds it."]
      ] } },
      { callout: "The airplane is expendable. Once fuel is off and the fire is out, the only objective is a controlled arrival on the surface with the occupants able to get out. Positive airplane control through the flare has priority over every checklist item and every piece of the airplane.", kind: "warn" },
      { p: "Emergency descent (uncontrollable fire): power idle, bank about 30–45° to start down without abruptly loading the airplane, gear and flaps per the POH, and respect Vne, Vfe and Va in turbulence; the AFH wants it flown as a maneuver, not a dive." },
      { h: "The forced landing itself" },
      { ul: [
        "Before touchdown: flaps once the field is assured, mixture idle cut-off, fuel shutoff OFF, magnetos OFF, master OFF just before touchdown (after the last radio call and flap setting), doors unlatched, belts tight.",
        "Touch down at the lowest controllable airspeed in a normal landing attitude; a sink rate above about 500 fpm at contact is injurious, and a steep bank or nose-low attitude near the ground is worse than any obstacle. A controlled arrival into small trees beats a stall from 50 ft.",
        "Terrain: into the wind, along the furrows, uphill rather than downhill, roads only if clear of wires. At night, toward the dark area next to lights and turn the landing light on late.",
        "After: evacuate upwind, account for everyone, confirm the ELT is transmitting, call 911."
      ] },
      { h: "Declaring" },
      { p: "\"Mayday\" three times is distress; \"Pan-Pan\" three times is urgency. Squawk 7700; 121.5 is guarded by ATC, FSS and most airliners. The PIC may deviate from any rule to the extent required by the emergency (91.3) and files a written report only if the Administrator asks; if ATC gave you priority, 91.123 lets the facility request a report within 48 hours. Nobody has ever been sorry they declared early." },
      { h: "Check yourself" },
      { ul: [
        "Recite ABCDE and the 172S restart flow in order.",
        "What speed and heading limits apply to an engine failure right after takeoff, and why not turn back?",
        "Engine fire in flight: first two actions, and what you do not do afterward.",
        "Electrical fire: how do you get power back if you need it?",
        "What does 91.3 allow, and what report might be required?"
      ] }
    ]
  },
  {
    id: "emerg-imc-ice-electrical", topic: "emerg", title: "Inadvertent IMC, icing encounter, and electrical failure under IFR", minutes: 8,
    refs: ["AFH Ch. 18", "IFH Ch. 11", "14 CFR 91.3", "14 CFR 91.185", "14 CFR 91.123", "AIM 6-4-1", "AC 91-74B"], tags: ["flight-review", "ipc", "ira", "c172", "pa44"],
    quiz: ["emerg-mcq-005", "emerg-mcq-008", "emerg-mcq-009", "emerg-mcq-015", "emerg-scn-003", "emerg-scn-005", "emerg-oral-004", "ifr-mcq-009", "ifr-mcq-010", "ifr-mcq-012", "ifr-mcq-013", "ifr-card-002", "ifr-card-003", "systems-scen-001", "regs-scenario-004", "weather-scen-003"],
    keywords: ["inadvertent IMC", "VFR into IMC", "180 turn", "icing encounter", "electrical failure", "alternator failure", "lost comms", "7600", "7700", "declare emergency", "91.3", "91.185"],
    body: [
      { h: "Why it matters" },
      { p: "These three emergencies share a cause (the airplane is fine, the situation is not) and a cure (a decision made early). VFR into IMC still kills more general aviation pilots per encounter than almost anything else; icing in an airplane with no deice is an exit problem; an electrical failure in IMC is a clock problem. In each case the examiner wants the first three actions and the rule that gives you permission to break the other rules." },
      { h: "Inadvertent IMC (AFH Ch. 18)" },
      { ol: [
        "**Recognize and accept it as an emergency.** The AFH's most-stressed point: do not panic, and do not try to stay visual by descending. Keep the wings level.",
        "**Go to the instruments and trust them.** Trim for hands-off level flight at cruise airspeed, make small, smooth inputs, and keep the scan moving. Turns at the smallest practical bank, never more than 10°; pitch changes of no more than one bar width; power changes of about 100 rpm or 1 in Hg; descents under 500 fpm. No combined maneuvers.",
        "**Decide**: the traditional escape is a gentle 180 back to the VMC you just left (a timed one-minute standard-rate turn), if you know the weather behind you is still there. If the terrain is rising or you climbed into it, climb to a safe altitude instead, level the wings and get help.",
        "**Get help**: 7700, 121.5 or the frequency you have, \"Mayday\" or \"Pan-Pan,\" and ask for vectors to VMC or the nearest ILS. Current or not, say the words; controllers will clear and vector a pilot who asks.",
        "Autopilot: if you know how to engage it, use it for wings-level and altitude hold; it does not get disoriented."
      ] },
      { callout: "The AFH notes that an untrained pilot can lose control within minutes; the old 178-second study is the number everyone remembers. For a rated pilot out of currency the skills are there but the scan is slow, and the leans arrive when you look down for a frequency. Fly the airplane first, talk second.", kind: "warn" },
      { h: "Icing encounter without deice" },
      { ol: [
        "Pitot heat on, autopilot off so you feel the trim and airspeed trend, and tell ATC in the same breath: \"picking up ice, request\" and the altitude or heading you want. If there is no time to wait, 91.3 covers the deviation; tell them what you did.",
        "Change altitude or turn around: warmer air below if the freezing level is above terrain, colder and drier air above if you can climb, or a 180 to the clear air you left. In freezing rain, climbing into the warm layer is the escape.",
        "Keep the speed up and the configuration clean; no flaps with ice on the tail, and if pitch control changes after flap extension, retract to the previous setting.",
        "Land with reduced or no flaps, 10–15 kt extra, a long runway, and a stall warning you cannot trust. File a PIREP afterward."
      ] },
      { h: "Electrical failure under IFR" },
      { p: "In the 172S the first symptom is LOW VOLTS with the ammeter showing discharge. The flow: ALT switch confirmed on, one reset attempt, ALT field breaker checked; if nothing, shed load to what you need (one nav/com, transponder, pitot heat if in icing, panel lights at night) and start the clock. When the main battery sags, the standby battery carries the essential bus (PFD, AHRS, ADC, one nav/com) for at least 30 minutes. The Seminole's second alternator usually makes this a non-event, and the gear and flaps still work manually with nothing at all. Decisions, in order:" },
      { ul: [
        "Tell ATC while you still have a radio: what you lost, what you have left, and that you need the nearest approach with the shortest flight time, vectors to the ILS or LPV rather than the full procedure.",
        "Pick the nearest airport with weather above minimums and an approach you can fly with what remains, not the destination.",
        "If the radios die: 7600 if the transponder is powered, then 91.185. In VFR conditions, or when VFR is encountered later, continue VFR and land as soon as practicable. In IMC: route in the order assigned, vectored, expected, filed (AVEF); altitude the **highest** of the MEA, the expected altitude, or the last assigned; if the clearance limit is a fix from which an approach begins, start the approach as close as possible to the EFC, or if none was given, as close as possible to the ETA; if it is not, leave it at the EFC (or on arrival if none), proceed to an approach fix and begin the approach as close as possible to the ETA. A handheld radio or a phone call to approach through Flight Service beats all of it.",
        "At a towered airport with no radio, expect light-gun signals: steady green cleared to land, flashing green return for landing, steady red continue circling, flashing red airport unsafe.",
        "Keep the standby instruments in the scan; the pitot-static instruments and the compass work regardless."
      ] },
      { h: "Declaring and the paperwork" },
      { ul: [
        "**91.3(b)**: in an in-flight emergency requiring immediate action, the PIC may deviate from any rule of Part 91 to the extent required to meet it. **91.3(c)**: a written report only if the Administrator requests one. **91.123(d)**: if ATC gave you priority, the facility may ask for a detailed report within 48 hours.",
        "\"Mayday\" three times for distress, \"Pan-Pan\" three times for urgency; give identification, position, the problem, intentions and what you need. AIM 6-1-2: a pilot apprehensive for their safety for any reason should request assistance immediately. Declaring does not cost a certificate.",
        "\"Minimum fuel\" is an advisory that you cannot accept undue delay, not priority. Declaring an emergency is."
      ] },
      { h: "Check yourself" },
      { ul: [
        "Inadvertent IMC: the first four actions and the bank and pitch limits the AFH gives.",
        "You are in ice at 7,000 ft, OAT −4°C, no deice: what do you say to ATC and what are your three escape options?",
        "LOW VOLTS in IMC in the 172S: your flow, and roughly how long the standby battery gives you.",
        "Lost comms in IMC: altitude rule, route rule, and when you leave the clearance limit.",
        "What report can be required after an emergency deviation, and under which rules?"
      ] }
    ]
  },
  {
    id: "hialt-pressurization", topic: "hialt", title: "Pressurization, oxygen and rapid decompression", minutes: 8,
    refs: ["PHAK Ch. 7", "PHAK Ch. 17", "14 CFR 91.211(b)", "14 CFR 121.333", "AIM 8-1-2", "AIM 4-6-1"], tags: ["atp", "part135", "kt"],
    quiz: ["hialt-mcq-001", "hialt-mcq-002", "hialt-mcq-003", "hialt-mcq-004", "hialt-mcq-005", "hialt-mcq-006", "hialt-mcq-007", "hialt-mcq-008", "hialt-mcq-009", "hialt-mcq-010", "hialt-card-001", "hialt-card-002", "hialt-card-003", "hialt-scn-001", "hialt-oral-001", "hialt-oral-002", "aeromed-mcq-003"],
    keywords: ["pressurization", "cabin altitude", "differential pressure", "outflow valve", "rapid decompression", "explosive decompression", "quick-donning", "oxygen mask", "FL250", "FL350", "FL410", "RVSM", "time of useful consciousness"],
    body: [
      { h: "Why it matters" },
      { p: "The ATP written and the airline interview both expect you to explain how a pressurized cabin works, what the oxygen rules say above FL250, and what you do in the first thirty seconds after a decompression. The Part 91 rule has exact flight levels; the Part 121 rule has different thresholds that changed in 2020. Know which one you are quoting." },
      { h: "How pressurization works" },
      { ul: [
        "Bleed air from the engine compressors (or a separate compressor on some pistons and turboprops) is cooled and fed into the sealed cabin continuously; cabin pressure is set by metering how fast air leaves through the **outflow valve**, which the controller modulates to hold a selected cabin altitude and a comfortable cabin rate (typically 300–500 fpm).",
        "**Cabin altitude** is the pressure altitude inside, about 8,000 ft at cruise for most transports. **Cabin differential** is inside minus outside pressure, limited by the structure (on the order of 8–9 psi for jets, much less for pressurized pistons). Once the maximum differential is reached, cabin altitude climbs with the airplane.",
        "Safety devices: a **positive-pressure relief (safety) valve** if the differential exceeds the limit, a **negative-pressure relief valve** so outside pressure can never exceed cabin pressure, and a **dump valve** or manual mode for smoke evacuation or a controller failure.",
        "Warnings: a cabin altitude warning at about 10,000 ft cabin altitude, and passenger masks that deploy automatically at around 14,000 ft, the threshold the regulation mirrors."
      ] },
      { h: "Decompression" },
      { table: { head: ["Type", "Time", "Signs"], rows: [
        ["Explosive", "Less than about half a second; faster than the lungs can decompress", "Bang, fog, debris, extreme cold, immediate hypoxia; risk of lung damage"],
        ["Rapid", "Longer than half a second but still seconds", "Fog as moisture condenses, ear pain, wind noise, the cabin altitude warning"],
        ["Gradual (slow)", "Minutes; a seal leak or a failed controller", "The dangerous one: no cue but the cabin altimeter and the first symptoms of hypoxia, which remove your ability to notice them"]
      ] } },
      { p: "The primary danger of any decompression is hypoxia. Time of useful consciousness at the altitude you are flying is already short (3–5 minutes at 25,000 ft, 30–60 seconds at 35,000 ft, 15–20 seconds at 40,000 ft) and a rapid decompression roughly halves it, because the lungs are emptied of oxygen in the event itself. Other hazards: decompression sickness (the bends) above about 25,000 ft, cold, and being pulled toward a breach if unrestrained. Masks on first, then everything else." },
      { h: "The response" },
      { ol: [
        "Masks on, 100 percent, confirm flow, both pilots, before anything else; establish crew communication through the mask microphones.",
        "Emergency descent per the airplane's procedure: thrust idle, speed brakes, descend at Vmo/Mmo (or the turbulence penetration speed) to 10,000 ft or the MEA, whichever is higher, turning off the airway as you go.",
        "7700, tell ATC, seatbelt signs on; the cabin crew manages passenger masks.",
        "Level off, assess the structure, and plan the diversion: fuel burn at 10,000 ft is far higher than at cruise and the filed alternate may be out of range."
      ] },
      { h: "The rules: Part 91 (91.211(b)), verified text" },
      { ul: [
        "**Above FL250**: at least a **10-minute supply** of supplemental oxygen for **each occupant**, in addition to any oxygen required by the unpressurized rules, for use in the event of a descent necessitated by loss of cabin pressurization.",
        "**Above FL350**: **one pilot at the controls** must wear and use an oxygen mask that is secured and sealed and that either supplies oxygen at all times or automatically supplies it whenever the cabin pressure altitude exceeds **14,000 ft MSL**.",
        "Exception: the pilot need not wear the mask while **at or below FL410** if there are **two pilots at the controls** and each has a **quick-donning** mask that can be placed on the face with one hand, properly secured, sealed and supplying oxygen, **within 5 seconds**.",
        "If one pilot leaves the controls **above FL350**, the remaining pilot at the controls must put on and use the mask until the other returns."
      ] },
      { callout: "Interview gotcha: the Part 91 triggers are FL250 (10-minute supply), FL350 (mask on one pilot) and FL410 (end of the quick-donning exception). Below FL350 in a pressurized Part 91 airplane there is no mask-wearing requirement at all; above FL410 somebody is wearing the mask no matter what.", kind: "tip" },
      { h: "Part 121 differs (121.333)" },
      { p: "Above **FL250** each flight deck crewmember must have a quick-donning mask at their station, and one pilot at the controls must wear it, except that with quick-donning masks for all flight deck crew the exception runs up to **FL410** for airplanes with more than 30 passenger seats or a payload over 7,500 lb, and to **FL350** for smaller airplanes (the 2020 amendment raised the large-airplane threshold from FL350). When one pilot leaves the controls above the applicable level, the other dons the mask, and each crewmember checks their own oxygen equipment before takeoff. Passenger supply rules are in 121.329 and 121.331." },
      { h: "RVSM in one paragraph" },
      { p: "Reduced Vertical Separation Minimum runs from FL290 through FL410 with 1,000-ft separation. The airplane must be RVSM-approved (two independent primary altimeters, altitude alerting, an autopilot with altitude hold, an altitude-reporting transponder), and since 2019 qualifying ADS-B Out replaces the separate LOA. A non-RVSM aircraft may be cleared through only to climb or descend. The crew cross-checks the altimeters at intervals and tells ATC immediately of any loss of RVSM capability; the tolerances are in AIM 4-6." },
      { h: "Check yourself" },
      { ul: [
        "Explain cabin altitude, cabin differential and what the outflow valve does.",
        "Three types of decompression and why the slow one is the most dangerous.",
        "Quote 91.211(b): the three flight levels and what happens at each.",
        "What is a quick-donning mask, and how fast must it go on?",
        "First two actions after a rapid decompression, and the target altitude for the descent."
      ] }
    ]
  },
  {
    id: "hialt-turbine-swept-wing", topic: "hialt", title: "Turbine engines and swept-wing high-speed aerodynamics for the interview", minutes: 9,
    refs: ["PHAK Ch. 7", "PHAK Ch. 5", "AFH Ch. 16", "AFH Ch. 15"], tags: ["atp", "kt"],
    quiz: ["hialt-mcq-011", "hialt-mcq-012", "hialt-mcq-013", "hialt-mcq-014", "hialt-mcq-015", "hialt-mcq-016", "hialt-mcq-017", "hialt-mcq-018", "hialt-mcq-019", "hialt-mcq-020", "hialt-card-004", "hialt-card-005", "hialt-card-006", "hialt-scn-002", "hialt-oral-003", "hialt-oral-004", "aero-mcq-013"],
    keywords: ["turbine", "N1", "N2", "EGT", "ITT", "EPR", "compressor stall", "hot start", "hung start", "spool-up", "Mach tuck", "critical Mach", "Dutch roll", "yaw damper", "coffin corner", "deep stall", "Vref", "V1", "V2", "swept wing"],
    body: [
      { h: "Why it matters" },
      { p: "A jet interview assumes you have never flown a turbine and tests whether you have done the reading: what N1 and N2 are, what a compressor stall sounds like, why swept wings tuck, what the yaw damper is for, what coffin corner means. The AFH chapter on transition to jets and the PHAK chapters on systems and high-speed flight cover it at exactly the depth asked." },
      { h: "Turbine engines" },
      { ul: [
        "Four types: **turbojet** (all thrust from the exhaust), **turbofan** (a fan driven by the core makes most of the thrust; high bypass ratio means quiet and efficient at subsonic speed), **turboprop** (the turbine drives a propeller through a gearbox; most efficient at roughly 250–400 mph and 18,000–30,000 ft per the PHAK), **turboshaft** (helicopters, APUs).",
        "The core: compressor, combustion section, turbine. The turbine drives the compressor; a two-spool engine has a low-pressure spool (fan and LP compressor driven by the LP turbine) and a high-pressure spool (HP compressor driven by the HP turbine), concentric, turning at different speeds.",
        "Indications: **N1** is the low-pressure (fan) spool speed in percent rpm and the primary thrust indication on most turbofans; **N2** is the high-pressure (core) spool. **EGT / ITT / TIT** is the limiting parameter during start and at high power. **EPR** (turbine discharge pressure over compressor inlet) is the thrust indication on some engines. Turboprops add torque and propeller rpm.",
        "Thrust stays roughly constant with airspeed, so power (thrust × velocity) rises with speed. Thrust falls as air density falls, yet the engine is most efficient at high altitude, which is why the airplane lives in the flight levels."
      ] },
      { table: { head: ["Start malfunction", "What you see", "Action"], rows: [
        ["Hot start", "EGT rising fast toward or past the limit during start", "Cut fuel, keep the starter motoring to cool the turbine; record the peak temperature for maintenance"],
        ["Hung start", "Light-off occurs but rpm stagnates below idle, EGT high", "Cut fuel and motor; usually a weak starter or low bleed air"],
        ["Wet (no) start", "Fuel flowing, no light-off, no EGT rise", "Cut fuel, motor to clear fuel from the tailpipe before another attempt"]
      ] } },
      { p: "**Compressor stall** (surge) is an aerodynamic stall of the compressor blades, usually from disturbed inlet air at high power (a crosswind on the takeoff roll, a rapid throttle movement, ice or damage). Indications: one or more loud bangs, vibration, rising EGT, falling rpm, possibly flames from the inlet or exhaust. Action: reduce thrust on that engine, reduce the airplane's angle of attack, and shut it down if it does not clear. Bleed valves and variable stator vanes prevent it at low rpm. A **flameout** is loss of combustion from fuel interruption, heavy precipitation or ice; the QRH relight envelope gives the airspeed and altitude for a restart." },
      { callout: "Spool-up: a turbine engine accelerates slowly from low power, because the compressor has to speed up before it can deliver the airflow for more fuel. The AFH says the transition from idle to full power can take up to 10 seconds. That is why jets fly approaches with thrust well above idle (spooled up) and why a go-around decision is made earlier than in a piston airplane.", kind: "warn" },
      { h: "Swept wings and the transonic regime" },
      { ul: [
        "**Critical Mach number (Mcrit)**: the free-stream Mach number at which airflow somewhere over the wing first reaches Mach 1.0. Above it a shock wave forms, drag rises sharply (drag divergence) and the flow behind the shock separates (shock-induced buffet). Sweep raises Mcrit because the airfoil sees only the flow component perpendicular to the leading edge; thin and supercritical airfoils do the same.",
        "**Mach tuck**: past Mcrit the shock wave and the center of pressure move aft and the downwash on the tail changes, producing a nose-down pitching tendency that grows with Mach. It develops gradually; a **Mach trim** system trims nose-up automatically as Mach rises, and if it fails the maximum Mach is reduced. Respond to the airspeed trend or buffet before the nose-down force becomes large.",
        "**Vmo / Mmo**: maximum operating speed as an indicated airspeed and as a Mach number (the barber pole shows whichever limits). Vmo limits at low altitude, Mmo at high altitude because the speed of sound falls with temperature.",
        "**Coffin corner**: at high altitude the low-speed (stall) buffet and the high-speed Mach buffet converge. A turn or turbulence raises the low-speed buffet (the AFH example: at 51,000 ft and Mach 0.73 an airplane may buffet at 1.4 G), so cruise with maneuvering margin on the buffet boundary chart and use the turbulence penetration speed.",
        "**Swept-wing stall**: spanwise flow thickens the boundary layer at the tips, so the tips stall first; the center of lift moves inboard and forward, giving a **pitch-up** at the stall and loss of aileron control. Fences, vortilons, vortex generators, stall strips and washout fight it. Stall warning is a **stick shaker** (about 107 percent of stall speed per the AFH) and often a **stick pusher**. Recovery: reduce angle of attack first, roll level, then thrust.",
        "**Deep stall**: on T-tail airplanes at very high angle of attack the wing's wake blankets the horizontal tail, the elevator loses authority, and the airplane locks into a stable high-sink stall that may be unrecoverable. The defense is to respect the shaker and pusher.",
        "**Dutch roll**: a coupled yaw-roll oscillation when lateral (dihedral) stability is strong relative to directional stability, which sweep makes worse. The **yaw damper** senses yaw rate and moves the rudder to stop it; without it many jets are altitude-limited. The opposite trade gives spiral instability."
      ] },
      { h: "Takeoff and landing speeds" },
      { table: { head: ["Speed", "Meaning"], rows: [
        ["V1", "Takeoff decision speed: the maximum speed at which a rejected takeoff can be stopped on the remaining runway, and the minimum speed from which the takeoff can be continued after an engine failure to 35 ft"],
        ["Vr", "Rotation speed"],
        ["V2", "Takeoff safety speed: gives the required one-engine-inoperative climb gradient at 35 ft"],
        ["Vref", "1.3 × Vso in the landing configuration; below it a sink rate develops that spool-up cannot arrest"],
        ["Balanced field", "Runway length at which accelerate-stop and accelerate-go distances are equal"]
      ] } },
      { h: "Check yourself" },
      { ul: [
        "What do N1, N2, EGT and EPR each tell you, and which is the primary thrust indication?",
        "Describe a compressor stall: cause, indications, action.",
        "Define Mcrit and explain Mach tuck and what Mach trim does.",
        "Dutch roll: which stability is too strong, and what is the yaw damper doing?",
        "Define V1, V2 and Vref, and explain why a jet never gets slow on final."
      ] }
    ]
  },
  {
    id: "foi-learning-theory", topic: "foi", title: "Learning theory the CFI oral asks about", minutes: 8,
    refs: ["AIH (FAA-H-8083-9B) Ch. 2, Human Behavior", "AIH (FAA-H-8083-9B) Ch. 3, The Learning Process", "AIH (FAA-H-8083-9B) Ch. 5, The Teaching Process"], tags: ["cfi"],
    quiz: ["foi-mcq-001", "foi-mcq-002", "foi-mcq-003", "foi-mcq-004", "foi-mcq-005", "foi-mcq-006", "foi-mcq-007", "foi-card-001", "foi-card-002", "foi-card-003", "foi-card-004", "foi-oral-001", "foi-oral-003"],
    keywords: ["fundamentals of instructing", "laws of learning", "levels of learning", "domains of learning", "learning plateau", "transfer", "memory", "forgetting", "defense mechanisms", "motivation", "perception", "insight", "scenario-based training"],
    body: [
      { h: "Why it matters" },
      { p: "The FOI oral is vocabulary applied to a student in front of you. The examiner names a behavior (a student who regresses, who rationalizes, who freezes) and asks you to name the concept and the instructor response. The Aviation Instructor's Handbook chapters on human behavior and the learning process hold all of it; this lesson is the list, organized the way the questions come." },
      { h: "What learning is" },
      { p: "The AIH definition: learning is a change in behavior as a result of experience. Its characteristics: learning is **purposeful** (each student has goals), the **result of experience** (it happens to the learner, not the teacher), **multifaceted** (verbal, conceptual, perceptual, motor, problem solving and emotional at once) and an **active process** (the student must respond, not just receive)." },
      { memo: { title: "REEPIR, the laws of learning", text: "Readiness (the student must be ready, physically and mentally, with a reason to learn), Exercise (what is practiced is remembered; meaningful repetition), Effect (learning is strengthened by a pleasant feeling and weakened by an unpleasant one; a first lesson that ends in fear is a loss), Primacy (what is learned first is learned best; teach it right the first time, because unteaching is harder), Intensity (a vivid, dramatic experience teaches more than a routine one; the real airplane beats the lecture), Recency (the most recently learned is best remembered; review before the checkride, not a month before)." } },
      { h: "Domains and levels" },
      { ul: [
        "**Cognitive** domain (knowledge; Bloom's levels: remember, understand, apply, analyze, evaluate, create), **affective** domain (attitudes, values, motivation: receiving, responding, valuing, organizing, characterizing) and **psychomotor** domain (skills: observation, imitation, practice, habit). A student who can recite the crosswind technique but will not use it has a cognitive success and an affective failure.",
        "**Levels of learning**: rote (recite without understanding), understanding (grasp the concept), application (do it in the airplane), correlation (connect it to other knowledge and new situations; the level the ACS and the oral are aimed at). The instructor's job is to push past rote and application into correlation with scenarios and \"what if\" questions.",
        "**Skill knowledge** develops in stages: cognitive (thinking through every step), associative (steps link into chunks, errors are recognized), automatic response (performed without conscious thought, attention free for other tasks). A pilot who is flying the airplane while handling a radio call and an engine indication is in the third stage."
      ] },
      { h: "Perception, insight and the obstacles" },
      { p: "All learning begins with perception, which depends on the physical organism, the student's goals and values, self-concept, time and opportunity, and the **element of threat**: a threatened student narrows attention to the threat and stops learning. Insight is the grouping of perceptions into a meaningful whole; the instructor promotes it by relating new material to what the student already knows in a safe environment. **Negative transfer** is a habit from a previous airplane or task fighting the new one (a fuel selector that had to be switched between tanks, carried into an airplane with BOTH); **positive transfer** is why the building-block approach works." },
      { h: "Memory and forgetting" },
      { ul: [
        "Three systems: the **sensory register** (fractions of a second, filtered by attention), **short-term or working memory** (about 20–30 seconds, roughly 5–9 items unless rehearsed or chunked) and **long-term memory** (organized by meaning; retrieval depends on how it was coded). Rehearsal, coding and chunking move material from short-term to long-term.",
        "Why students forget: **retrieval failure** (it is there but the cue is missing), **fading** (disuse), **interference** (new and old learning compete) and **repression or suppression** (unpleasant material is pushed out). Each has an instructor answer: cues and associations, meaningful repetition, spacing of similar material, and a non-threatening debrief.",
        "Retention aids: praise, recall through association, favorable attitudes, learning with all the senses, meaningful repetition, and mnemonics."
      ] },
      { h: "Plateaus, motivation and human behavior" },
      { ul: [
        "A **learning plateau** is a normal leveling-off after rapid early progress, not a lack of ability. Responses: change the activity, move to a related task and come back, reassure the student, and check whether your own instruction has become repetitive. A **regression** often means fatigue, stress or an attempt to apply a new concept; back up a step rather than drilling harder.",
        "**Motivation**: positive (goals, achievement) outperforms negative (fear of failure) for anything beyond short-term compliance; intrinsic motivation is the most durable. Maslow's hierarchy as the AIH presents it (physiological, security, belonging, esteem, cognitive and aesthetic, self-actualization) explains why a cold, hungry or frightened student cannot learn a chandelle.",
        "**Anxiety and stress**: normal reactions are rapid, exact and appropriate responses; abnormal reactions are inappropriate ones (extreme over-cooperation, painstaking self-control, inappropriate laughter or singing, rapid mood changes). A student showing abnormal reactions needs a different approach and possibly a conversation about continuing.",
        "**Defense mechanisms** (unconscious, anxiety-reducing, all of them blocking learning from the error): repression, denial, compensation, projection, rationalization, fantasy, displacement, reaction formation. The student who blames the controller for the botched approach is rationalizing or projecting; lower the threat and redirect to what the student can control."
      ] },
      { h: "How it gets used" },
      { p: "The teaching process has four steps: preparation, presentation, application and assessment (the older edition called the last step review and evaluation), built from the known to the unknown and simple to complex. Scenario-based training exploits correlation and intensity: a realistic problem with no single right answer forces decision-making rather than recall. And assessment (in the AIH's words: objective, flexible, acceptable, comprehensive, constructive, organized, thoughtful, specific) is itself teaching under the law of effect: a debrief that leaves the student feeling capable and clear about the next step produces more learning than the flight did." },
      { h: "Check yourself" },
      { ul: [
        "Recite the six laws of learning and give one flight-training example for primacy and for effect.",
        "Name the four levels of learning and describe a student at each level for the same task.",
        "A student who was progressing plateaus for three lessons: what is happening and what do you do?",
        "Define negative transfer and give an aircraft-transition example.",
        "List the eight defense mechanisms and the one instructor response that applies to all of them."
      ] }
    ]
  }
);
