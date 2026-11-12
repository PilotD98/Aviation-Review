window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "weather-mcq-001", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review", "ipc"],
    q: "In the International Standard Atmosphere, what are the sea-level temperature and pressure, and how do they change with altitude in the lower atmosphere?",
    choices: [
      "15°C and 29.92 in Hg; temperature falls about 2°C and pressure about 1 in Hg per 1,000 ft",
      "15°C and 29.92 in Hg; temperature falls about 3°C and pressure about 2 in Hg per 1,000 ft",
      "20°C and 30.00 in Hg; temperature falls about 2°C and pressure about 1 in Hg per 1,000 ft",
      "15°C and 1013.2 in Hg; temperature falls about 1°C and pressure about 1 in Hg per 1,000 ft"
    ],
    a: 0,
    exp: "ISA sea level is 15°C (59°F) and 29.92 in Hg (1013.2 hPa). The standard lapse rate is about 2°C (3.5°F) per 1,000 ft up to the tropopause, and pressure drops roughly 1 in Hg per 1,000 ft in the lower atmosphere. These are the baselines for pressure altitude, density altitude, and ISA deviations in performance charts."
  },
  {
    id: "weather-mcq-002", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review"],
    q: "A parcel of unsaturated air is lifted. Which lapse rate governs how fast it cools, and what happens to the parcel if the surrounding environmental lapse rate is greater than that value?",
    choices: [
      "Moist adiabatic rate (~1.2–1.5°C/1,000 ft); the parcel sinks back, indicating stable air",
      "Standard lapse rate (2°C/1,000 ft); the parcel is neutrally stable",
      "Dry adiabatic rate (~3°C/1,000 ft); the parcel stays warmer than its surroundings and keeps rising, indicating unstable air",
      "Dry adiabatic rate (~3°C/1,000 ft); the parcel becomes colder than its surroundings and sinks, indicating stable air"
    ],
    a: 2,
    exp: "Unsaturated air cools at the dry adiabatic lapse rate, about 3°C per 1,000 ft. If the environment cools faster than that with height, a lifted parcel ends up warmer (less dense) than its surroundings and continues rising: the atmosphere is absolutely unstable. Once saturated, the parcel cools more slowly (moist adiabatic, roughly 1.2–1.5°C/1,000 ft) because latent heat is released, which makes instability more likely."
  },
  {
    id: "weather-mcq-003", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review", "ipc"],
    q: "Which combination of flight conditions is most characteristic of stable air?",
    choices: [
      "Cumuliform clouds, turbulence, good visibility, showery precipitation",
      "Stratiform clouds, smooth air, poor visibility, continuous precipitation",
      "Stratiform clouds, turbulence, good visibility, showery precipitation",
      "Cumuliform clouds, smooth air, poor visibility, continuous precipitation"
    ],
    a: 1,
    exp: "Stable air resists vertical motion, so clouds spread out in layers (stratiform), the ride is smooth, pollutants and haze stay trapped (poor visibility), and precipitation is steady. Unstable air produces the opposite: cumuliform clouds, turbulence, good visibility between clouds, and showery precipitation."
  },
  {
    id: "weather-mcq-004", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review"],
    q: "What is a temperature inversion, and why does it matter to a pilot?",
    choices: [
      "Temperature decreasing faster than standard with altitude; it indicates instability and thunderstorms",
      "Temperature increasing with altitude; it forms a stable layer that traps haze, smoke, and fog and can produce wind shear at its top",
      "Temperature equal to dew point at the surface; it guarantees fog formation",
      "Temperature increasing with altitude; it indicates unstable air and good visibility beneath it"
    ],
    a: 1,
    exp: "An inversion is a layer in which temperature rises with height, most commonly formed on clear, calm nights by surface radiational cooling. Because it is extremely stable, it traps smoke, haze, and moisture beneath it (poor visibility and possibly fog), and a low-level jet can develop above it, creating wind shear at the inversion boundary."
  },
  {
    id: "weather-mcq-005", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review", "ipc"],
    q: "Fog that forms when warm, moist air moves over a colder surface, such as sea air flowing over cool coastal land, is classified as",
    choices: [
      "Radiation fog",
      "Upslope fog",
      "Steam fog",
      "Advection fog"
    ],
    a: 3,
    exp: "Advection fog needs wind to move moist air horizontally over a colder surface; it is common on coasts and can persist with winds up to about 15 kt, unlike radiation fog, which needs calm, clear nights and burns off after sunrise. Upslope fog forms from adiabatic cooling of air forced up terrain, and steam fog forms when cold air moves over warmer water."
  },
  {
    id: "weather-mcq-006", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review"],
    q: "The evening METAR shows temperature 12°C, dew point 11°C, winds calm, and sky clear. What should you expect for an early-morning departure?",
    choices: [
      "Radiation fog is likely as the surface cools overnight and the spread closes",
      "Advection fog is likely because of the light wind",
      "Low stratus is unlikely because the sky is clear",
      "Visibility will be unrestricted since the spread is already small and stable"
    ],
    a: 0,
    exp: "A small temperature/dew-point spread, clear skies, and calm wind are the classic radiation-fog recipe: the ground radiates heat away overnight, the air near the surface cools to its dew point, and fog forms in the hours around sunrise. It typically dissipates a few hours after sunrise as the surface warms. Advection fog requires wind to move moist air over a cold surface."
  },
  {
    id: "weather-mcq-007", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review", "ipc"],
    q: "Which sequence best describes the weather associated with a fast-moving cold front?",
    choices: [
      "A wide band of stratiform cloud and steady rain well ahead of the front, with gradual clearing afterward",
      "A narrow band of cumuliform cloud and showers or thunderstorms at or just ahead of the front, with rapid clearing, gusty winds, and a temperature drop behind it",
      "Persistent low ceilings and drizzle for a day or more as the front stalls",
      "Little weather change except a gradual wind shift from southeast to southwest"
    ],
    a: 1,
    exp: "Cold fronts have a steep slope, so lifting is abrupt and concentrated in a narrow band, often producing cumulonimbus, squall lines ahead of the front, and showers. Passage brings a wind shift (typically from southwesterly to northwesterly in the Northern Hemisphere), a sharp temperature drop, rising pressure, and quickly improving visibility. The wide stratiform band describes a warm front."
  },
  {
    id: "weather-mcq-008", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["ipc"],
    q: "Flying IFR toward a warm front in winter, what hazard should you specifically anticipate in the precipitation ahead of the surface front?",
    choices: [
      "Severe clear-air turbulence from the strong wind shift",
      "Freezing rain where rain falls from the warm air aloft into sub-freezing air near the surface",
      "Large hail from embedded cumulonimbus",
      "Microbursts from the low stratiform layer"
    ],
    a: 1,
    exp: "The warm air overrunning the retreating cold air can be above freezing aloft while the surface layer remains below freezing, so rain falls through cold air and freezes on contact: freezing rain, the most dangerous structural icing. Ice pellets at the surface are a warning sign that freezing rain exists above."
  },
  {
    id: "weather-mcq-009", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review"],
    q: "Which observation most reliably confirms you have just crossed a front?",
    choices: [
      "A sudden increase in the temperature/dew-point spread",
      "An abrupt change in wind direction, usually accompanied by a temperature change and a pressure change",
      "A change in cloud type from cumulus to stratus",
      "The onset of light turbulence"
    ],
    a: 1,
    exp: "Every front is a boundary between air masses, so wind direction always shifts across it (pressure falls ahead of and rises behind a cold front; the pressure trough lies along the front). Temperature, dew point, and pressure trend changes support the wind shift. Cloud type and turbulence vary with stability and do not by themselves identify a front."
  },
  {
    id: "weather-mcq-010", type: "mcq", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review"],
    q: "In the Northern Hemisphere, air circulates around a surface low-pressure system",
    choices: [
      "Clockwise and outward, producing descending air and fair weather",
      "Counterclockwise and inward, producing rising air and generally poor weather",
      "Clockwise and inward, producing rising air and generally poor weather",
      "Counterclockwise and outward, producing descending air and fair weather"
    ],
    a: 1,
    exp: "Pressure gradient force pushes air toward the low, Coriolis deflects it to the right, and surface friction lets it spiral inward: counterclockwise and inward. Converging air must rise, so lows are associated with clouds and precipitation. Highs are the opposite: clockwise, outward, descending air, and fair weather. A flight toward a low with a tailwind in the Northern Hemisphere drifts you to the right if uncorrected."
  },
  {
    id: "weather-mcq-011", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review"],
    q: "The three ingredients required for thunderstorm formation are",
    choices: [
      "Moisture, a conditionally unstable lapse rate, and a lifting action",
      "Moisture, a stable lapse rate, and strong surface winds",
      "High pressure, surface heating, and an inversion",
      "A cold front, dry air aloft, and high humidity at the surface"
    ],
    a: 0,
    exp: "Thunderstorms need sufficient water vapor, an atmosphere unstable enough that a lifted parcel keeps rising once saturated, and something to start the lift: a front, orographic lifting, surface heating, or convergence. Remove any one and you get, at most, fair-weather cumulus."
  },
  {
    id: "weather-mcq-012", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review", "ipc"],
    q: "What event marks the beginning of the mature stage of a thunderstorm cell?",
    choices: [
      "The first lightning discharge",
      "The cloud top reaching the tropopause and forming an anvil",
      "Precipitation beginning to fall from the base of the cloud and reaching the surface",
      "The cell's updrafts exceeding 3,000 fpm"
    ],
    a: 2,
    exp: "The cumulus stage is all updraft. When precipitation falls through the cloud and reaches the surface, downdrafts begin alongside the updrafts, and that coexistence defines the mature stage, which is the most violent, with the strongest updrafts, downdrafts, shear, hail, and lightning. The dissipating stage is dominated by downdrafts as the storm cuts off its own moisture supply."
  },
  {
    id: "weather-mcq-013", type: "mcq", topic: "weather", ref: "AIM 7-1-27", tags: ["flight-review", "ipc"],
    q: "The AIM recommends avoiding any thunderstorm identified as severe or giving an intense radar echo by at least",
    choices: [
      "5 miles",
      "10 miles",
      "20 miles",
      "40 miles"
    ],
    a: 2,
    exp: "AIM 7-1-27 says to avoid severe or intense-echo storms by at least 20 miles, because hail and severe turbulence can extend well outside the visible cloud, especially beneath and downwind of the anvil. The same paragraph warns not to attempt flight beneath a storm even in clear air (shear and microbursts) and to clear tops by 1,000 ft for every 10 kt of wind at the top when overflying."
  },
  {
    id: "weather-mcq-014", type: "mcq", topic: "weather", ref: "AIM 7-1-24", tags: ["flight-review", "ipc", "atp"],
    q: "Which statement about microbursts is correct?",
    choices: [
      "They typically last 30 to 60 minutes and produce downdrafts of about 1,000 fpm",
      "Downdrafts can reach 6,000 fpm with horizontal surface winds of 45 kt, producing up to 90 kt of shear, and an individual microburst seldom lasts more than 15 minutes",
      "They only occur with visible heavy precipitation, so clear air beneath a storm is safe",
      "They affect only large aircraft because of their wide horizontal extent"
    ],
    a: 1,
    exp: "AIM 7-1-24 describes downdrafts as strong as 6,000 fpm, horizontal outflow winds up to 45 kt (a 90 kt headwind-to-tailwind shear across the microburst), and a life of seldom more than 15 minutes with the most intense winds in the first 2–4 minutes. Dry microbursts under high-based cumulus can occur with virga and little visible rain, so clear air under a convective cloud is not safe."
  },
  {
    id: "weather-mcq-015", type: "mcq", topic: "weather", ref: "AC 00-54 / AIM 7-1-24", tags: ["flight-review", "ipc"],
    q: "On final approach you suddenly see airspeed increase 20 kt and the airplane balloon above the glidepath, followed moments later by a rapid airspeed loss and sink. What is happening and what is the correct response?",
    choices: [
      "A normal gust; reduce power to recapture the glidepath and continue",
      "You are flying through a microburst: the performance-increasing headwind is followed by the downdraft and tailwind; go around immediately with full power and pitch to maintain a safe attitude, accepting the loss of glidepath",
      "Wake turbulence from the preceding aircraft; offset upwind and continue",
      "A pitot-static blockage; cross-check the standby airspeed and continue the approach"
    ],
    a: 1,
    exp: "The signature of a microburst encounter is an initial performance increase (headwind, airspeed up, balloon) followed by the downdraft core and then a performance-decreasing tailwind. Reducing power for the initial gain sets you up with low energy for the loss that follows. The correct action at the first recognition is an immediate go-around with maximum power, pitching to the escape attitude and respecting stall warning, not chasing the glidepath."
  },
  {
    id: "weather-mcq-016", type: "mcq", topic: "weather", ref: "AC 00-6B / AIM 7-1-20", tags: ["ipc", "flight-review"],
    q: "Structural icing requires which two conditions?",
    choices: [
      "Visible moisture and an outside air temperature of 0°C or below at the point where the moisture strikes the aircraft",
      "Precipitation and an outside air temperature below −10°C",
      "Relative humidity above 80% and a temperature between 20°F and 70°F",
      "Clouds of any kind and a temperature below freezing at the surface"
    ],
    a: 0,
    exp: "Ice accretes when supercooled liquid water strikes a surface that is at or below 0°C. Both conditions are required: visible moisture (cloud, rain, drizzle) and freezing temperature at the aircraft. The 20–70°F/high-humidity range describes carburetor icing, which does not require visible moisture."
  },
  {
    id: "weather-mcq-017", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["ipc"],
    q: "Clear ice is most likely in which temperature range, and why is it considered more hazardous than rime?",
    choices: [
      "−10°C to −20°C; because it forms quickly on all surfaces",
      "0°C to −10°C; because large supercooled droplets flow back before freezing, forming dense, heavy, hard-to-remove ice that distorts the airfoil beyond the boots",
      "0°C to −10°C; because it is opaque and blocks the pilot's view",
      "Below −20°C; because the ice crystals are sharper"
    ],
    a: 1,
    exp: "Clear ice forms from large supercooled droplets at temperatures near freezing (roughly 0 to −10°C, often in cumuliform clouds or freezing rain); the droplets spread and freeze slowly into a glossy, dense sheet that runs aft of protected surfaces. Rime forms from small droplets freezing instantly (roughly −10 to −20°C), trapping air to make a brittle, opaque, lighter deposit that stays near the leading edge. Mixed icing combines both."
  },
  {
    id: "weather-mcq-018", type: "mcq", topic: "weather", ref: "PHAK Ch. 7 and Ch. 12", tags: ["flight-review", "c172", "pa44"],
    q: "Carburetor icing is most likely at what conditions, and how does it first appear in an airplane with a fixed-pitch propeller versus one with a constant-speed propeller?",
    choices: [
      "Only below freezing with visible moisture; RPM drop in both",
      "Between about 20°F and 70°F with high relative humidity, even in clear air; a drop in RPM with a fixed-pitch prop, and a drop in manifold pressure with a constant-speed prop",
      "Above 70°F with low humidity; a rise in RPM with a fixed-pitch prop",
      "Between about 20°F and 70°F with high relative humidity; a drop in manifold pressure with a fixed-pitch prop and a drop in RPM with a constant-speed prop"
    ],
    a: 1,
    exp: "Fuel vaporization and the venturi pressure drop can cool the carburetor throat by 60°F or more, so ice can form in clear air at OATs well above freezing, with roughly 20–70°F and high humidity being the most likely range. With a fixed-pitch prop the power loss shows as a falling RPM (and roughness); with a constant-speed prop the governor holds RPM, so the first indication is a drop in manifold pressure. The Seminole is carbureted and has carburetor heat; the fuel-injected 172S has no carburetor and no carb heat."
  },
  {
    id: "weather-mcq-019", type: "mcq", topic: "weather", ref: "AC 00-6B / PHAK Ch. 5", tags: ["flight-review"],
    q: "How does frost on the wings affect takeoff, and what is the required action?",
    choices: [
      "It adds enough weight to exceed MTOW; reduce fuel load",
      "It changes the camber of the wing and increases lift; no action is needed",
      "It roughens the surface, disrupting the boundary layer so the wing stalls at a lower angle of attack and may not produce enough lift to lift off at normal speed; remove all frost before flight",
      "It only affects visibility through the windshield; clear the windshield only"
    ],
    a: 2,
    exp: "Even a thin, sandpaper-like layer of frost disrupts smooth airflow over the wing, reducing maximum lift coefficient and raising stall speed; the airplane may fail to lift off or stall shortly after. Frost does not change the wing's shape the way heavy ice does, but its effect on lift is still significant. Remove all frost, ice, and snow from lifting and control surfaces before takeoff."
  },
  {
    id: "weather-mcq-020", type: "mcq", topic: "weather", ref: "AIM 7-1-21", tags: ["flight-review", "ipc"],
    q: "A PIREP of \"moderate turbulence\" means the aircraft experienced",
    choices: [
      "Momentary slight, erratic changes in altitude or attitude",
      "Changes in altitude and/or attitude of greater intensity than light, but the aircraft remained in positive control at all times; occupants feel definite strains against seat belts",
      "Large, abrupt changes in altitude or attitude with the aircraft momentarily out of control",
      "The aircraft was violently tossed about and practically impossible to control"
    ],
    a: 1,
    exp: "AIM 7-1-21 defines the intensities by their effect on the aircraft and occupants: light (slight erratic changes), moderate (greater intensity, positive control maintained, definite strain against belts, unsecured objects dislodged), severe (large abrupt changes, momentarily out of control, occupants forced violently against belts), extreme (violently tossed, practically impossible to control, may cause structural damage). Report duration as occasional (less than 1/3 of the time), intermittent (1/3 to 2/3), or continuous."
  },
  {
    id: "weather-mcq-021", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["flight-review", "ipc"],
    q: "Mountain wave turbulence should be anticipated when",
    choices: [
      "Winds of 40 kt or more blow perpendicular to a ridge with stable air above the ridge; the rotor beneath the first wave crest is the most dangerous zone",
      "Winds of any speed blow parallel to a ridge in unstable air",
      "Lenticular clouds are absent, since those clouds indicate smooth air",
      "The air is unstable, producing cumulus over the ridges"
    ],
    a: 0,
    exp: "Standing mountain waves form when stable air is forced over a ridge by winds of 40 kt or more (the AC 00-6B figure; treat even 25 kt across a ridge as a reason for caution) blowing roughly perpendicular to the ridge. Smooth-looking lenticular clouds mark the wave crests; the rotor cloud beneath the first crest marks violent turbulence. Downdrafts on the lee side can exceed a light airplane's climb capability, so cross ridges at a 45° angle with ample altitude."
  },
  {
    id: "weather-mcq-022", type: "mcq", topic: "weather", ref: "AC 00-6B", tags: ["atp"],
    q: "Clear air turbulence (CAT) associated with the jet stream is most likely found",
    choices: [
      "In the warm air on the equatorial side of the jet core, well above the tropopause",
      "On the polar (cold) side of the jet core near the tropopause, especially where the jet curves sharply around a deep trough, and in the shear zone above and below the core",
      "Only inside the cirrus cloud bands that mark the jet",
      "At low altitudes beneath the jet core where it meets the surface"
    ],
    a: 1,
    exp: "CAT results from strong wind shear in the vicinity of the jet stream, typically on the polar side of the core near the tropopause where the horizontal temperature gradient is tightest, and where the jet curves sharply around a trough or ridge. It occurs in clear air, so cirrus is not required. Changing altitude or heading out of the shear layer is the usual mitigation."
  },
  {
    id: "weather-mcq-023", type: "mcq", topic: "weather", ref: "AC 00-45H / AIM 7-1-28", tags: ["flight-review", "ipc"],
    q: "Decode: METAR KDEN 211853Z 27015G25KT 3/4SM R35L/2400FT -SN BR BKN008 OVC015 M03/M05 A2992 RMK AO2 PK WND 28032/1835 SLP134 SNB42",
    choices: [
      "Visibility 3/4 mile, RVR for runway 35L is 2,400 ft, light snow and mist, ceiling 800 ft broken, peak wind 280 at 32 kt at 1835Z, sea-level pressure 1013.4 hPa, snow began at 42 past the hour",
      "Visibility 3/4 mile, RVR 2,400 meters, light snow and fog, ceiling 1,500 ft, peak wind 32 kt at 1835Z, pressure 29.92 in Hg at sea level, snow ended at 42 past the hour",
      "Visibility 3/4 mile, RVR 2,400 ft, moderate snow and mist, ceiling 800 ft, sea-level pressure 1013.4 hPa, snow began at 1842Z the previous day",
      "Visibility 3/4 statute mile with RVR 2,400 ft, light snow and mist, ceiling 1,500 ft overcast, peak wind 280 at 32 kt, sea-level pressure 29.92 in Hg"
    ],
    a: 0,
    exp: "R35L/2400FT is runway visual range in feet; -SN is light snow; BR is mist (visibility 5/8 sm or more); the ceiling is the lowest broken or overcast layer, BKN008; A2992 is the altimeter setting while SLP134 is sea-level pressure 1013.4 hPa; PK WND 28032/1835 gives peak wind direction, speed, and time; SNB42 means snow began at 42 minutes past the hour. Remember that M03/M05 are minus 3 and minus 5 degrees Celsius."
  },
  {
    id: "weather-mcq-024", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["ipc"],
    q: "In a METAR, what is the difference between FG and BR, and what does VV004 indicate?",
    choices: [
      "FG is fog with visibility less than 5/8 sm; BR is mist with visibility 5/8 sm to 6 sm; VV004 is an indefinite ceiling with vertical visibility 400 ft",
      "FG is fog with visibility less than 3 sm; BR is haze; VV004 is a variable ceiling between 400 ft and the surface",
      "FG and BR both mean fog, differing only by temperature; VV004 is a 400 ft visibility in meters",
      "FG is freezing fog; BR is blowing snow; VV004 is a vertical visibility of 4,000 ft"
    ],
    a: 0,
    exp: "By definition, fog (FG) is reported when it restricts visibility below 5/8 sm; the same obscuration with visibility 5/8 to 6 sm is reported as mist (BR). Freezing fog is FZFG and haze is HZ. VV004 means the sky is totally obscured and the vertical visibility is 400 ft; for approach-minimums purposes it is treated as the ceiling."
  },
  {
    id: "weather-mcq-025", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    q: "A METAR reports \"TS\" in the present-weather group, while a different station reports \"+SHRA\" with \"CB\" in the remarks. How should you interpret these?",
    choices: [
      "Both are identical; TS and +SHRA are interchangeable codes",
      "TS means thunder is heard or lightning observed at the station (a thunderstorm in progress); +SHRA is heavy rain showers without thunder observed, though the CB remark tells you cumulonimbus is in sight and convection is nearby",
      "TS indicates a thunderstorm forecast within 2 hours; +SHRA indicates heavy rain of any type",
      "TS is reported only by automated stations; +SHRA only by human observers"
    ],
    a: 1,
    exp: "A thunderstorm (TS) is reported when thunder is heard or lightning is seen at the station; it may be combined with precipitation, as in TSRA. Showery precipitation without thunder is coded SH, with intensity prefixes (−, none, +). Remarks such as CB DSNT W or TCU (towering cumulus) describe convective clouds observed from the station and are your cue that thunderstorm conditions exist or are developing even if no thunder has been heard."
  },
  {
    id: "weather-mcq-026", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    q: "Decode: TAF KSTL 211720Z 2118/2218 20012KT P6SM SCT050 FM220000 18008KT 5SM BR BKN012 WS020/27045KT TEMPO 2203/2206 2SM BR OVC006 PROB30 2208/2212 1SM -RA OVC004",
    choices: [
      "Valid from the 21st at 1800Z through the 22nd at 1800Z; from 0000Z on the 22nd, visibility 5 sm, non-convective low-level wind shear at 2,000 ft AGL from 270 at 45 kt; temporarily between 0300Z and 0600Z visibility 2 sm with a 600 ft overcast; 30% probability of 1 sm and 400 ft overcast between 0800Z and 1200Z",
      "Valid for 18 hours from issuance; wind shear expected at 20,000 ft; a 30% chance of thunderstorms between 0800Z and 1200Z",
      "Valid from 1720Z on the 21st; P6SM means visibility less than 6 sm; the TEMPO conditions are expected to prevail for the entire 0300–0600Z period",
      "Valid from the 21st at 1800Z through the 22nd at 1800Z; the wind shear group indicates surface winds of 45 kt; PROB30 indicates conditions are 30% likely to be better than forecast"
    ],
    a: 0,
    exp: "The valid period 2118/2218 is 24 hours (some TAFs are 30 hours). P6SM is visibility greater than 6 sm. FM marks a rapid, permanent change. WS020/27045KT forecasts non-convective low-level wind shear at 2,000 ft AGL, wind 270 at 45 kt (WS is only forecast up to 2,000 ft AGL). TEMPO means the condition is expected for less than half the period, in fluctuations; PROB30 is a 30% probability and is not used in the first 9 hours of an NWS TAF. Note that NWS TAFs use FM, TEMPO, and PROB30 only; BECMG appears in military and international TAFs."
  },
  {
    id: "weather-mcq-027", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    q: "In a winds and temperatures aloft forecast (FB), the 30,000 ft group for a station reads \"780852\". What does it mean?",
    choices: [
      "Wind 280° at 8 kt, temperature +52°C",
      "Wind 280° at 108 kt, temperature −52°C",
      "Wind 780° variable, speed 85 kt, temperature −2°C",
      "Wind 280° at 8 kt, temperature −52°C; the 7 is a quality flag"
    ],
    a: 1,
    exp: "When wind speed is 100 kt or more, 50 is added to the direction and 100 subtracted from the speed: 78 − 50 = 28 (280°) and 08 + 100 = 108 kt. Above 24,000 ft all temperatures are negative so the minus sign is omitted. Other conventions: 9900 means light and variable (less than 5 kt), 199 kt or more is coded 99, winds are not forecast within 1,500 ft of station elevation, and temperatures are not forecast for the 3,000 ft level or within 2,500 ft of the station."
  },
  {
    id: "weather-mcq-028", type: "mcq", topic: "weather", ref: "AIM 7-1-6 / AC 00-45H", tags: ["ipc", "flight-review"],
    q: "Which statement correctly distinguishes AIRMETs, SIGMETs, and Convective SIGMETs?",
    choices: [
      "AIRMET Sierra covers icing, Tango covers IFR, and Zulu covers turbulence; SIGMETs are valid 2 hours and Convective SIGMETs 4 hours",
      "AIRMET Sierra covers IFR and mountain obscuration, Tango covers turbulence, surface winds of 30 kt or more, and non-convective LLWS, and Zulu covers icing and freezing levels; a non-convective SIGMET is valid up to 4 hours; a Convective SIGMET is valid 2 hours and covers severe thunderstorms (surface wind 50 kt or more, hail 3/4 in or larger, or tornadoes), embedded thunderstorms, lines of thunderstorms, and large areas of strong thunderstorms",
      "AIRMETs are issued for severe icing and severe turbulence; SIGMETs for moderate; Convective SIGMETs only for tornadoes",
      "AIRMETs and SIGMETs are identical except that AIRMETs apply only below 10,000 ft"
    ],
    a: 1,
    exp: "AIRMETs (now primarily G-AIRMETs, issued every 6 hours with 3-hour snapshots) address weather significant to light aircraft: Sierra (IFR, mountain obscuration), Tango (moderate turbulence, sustained surface winds 30 kt or more, non-convective LLWS), Zulu (moderate icing, freezing level). SIGMETs cover non-convective hazards to all aircraft (severe icing, severe or extreme turbulence/CAT, dust or sandstorms, volcanic ash) and are valid up to 4 hours (6 for volcanic ash). Convective SIGMETs are issued hourly at H+55, valid 2 hours, and imply severe or greater turbulence, severe icing, and LLWS."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "weather-card-001", type: "card", topic: "weather", ref: "AC 00-6B", tags: ["flight-review"],
    front: "Lapse rates: standard, dry adiabatic, moist adiabatic",
    back: "Standard (ISA): 2°C / 1,000 ft (3.5°F)\nDry adiabatic: ~3°C / 1,000 ft (5.4°F)\nMoist adiabatic: ~1.2–1.5°C / 1,000 ft (varies with temperature; latent heat release slows cooling)\nStability: compare the environmental lapse rate to these. Environmental > DALR = absolutely unstable; < MALR = absolutely stable; between = conditionally unstable (unstable once saturated)."
  },
  {
    id: "weather-card-002", type: "card", topic: "weather", ref: "PHAK Ch. 12", tags: ["flight-review", "ipc"],
    front: "Five fog types and how each forms",
    back: "Radiation: clear calm night, ground cools air to dew point; burns off after sunrise.\nAdvection: moist air moves over colder surface (coasts); needs wind, can persist.\nUpslope: moist air cooled adiabatically as it flows up terrain; persists while wind blows.\nPrecipitation (frontal): warm rain falls through cool air and saturates it (ahead of warm fronts).\nSteam: cold air over warm water; shallow but can have icing/turbulence."
  },
  {
    id: "weather-card-003", type: "card", topic: "weather", ref: "AC 00-6B", tags: ["flight-review", "ipc"],
    front: "Front types: slope, typical clouds and precipitation, passage signs",
    back: "Cold: steep, fast; narrow band of CU/CB, showers, squall lines ahead; passage = sharp wind shift (SW→NW), temp drop, pressure rises, vis improves.\nWarm: shallow, slow; wide band of CI→CS→AS→NS, steady precip, low ceilings/fog, freezing rain in winter; passage = wind SE→SW, temp rises, pressure steadies.\nStationary: fronts stall; persistent weather for days.\nOccluded: cold front overtakes warm; mix of both; worst weather near the point of occlusion."
  },
  {
    id: "weather-card-004", type: "card", topic: "weather", ref: "AC 00-6B / AIM 7-1-27", tags: ["flight-review", "ipc"],
    front: "Thunderstorm stages and key avoidance rules",
    back: "Cumulus: updrafts only, building.\nMature: begins when precipitation reaches the surface; up- and downdrafts coexist; most hazardous.\nDissipating: downdrafts dominate.\nAvoid severe/intense echo by 20 NM; never fly under the anvil or beneath a storm; clear tops by 1,000 ft per 10 kt of wind at the top; expect hail downwind; embedded storms = cannot be seen; squall line = non-frontal line, often ahead of a fast cold front, worst conditions."
  },
  {
    id: "weather-card-005", type: "card", topic: "weather", ref: "AIM 7-1-24", tags: ["flight-review", "ipc"],
    front: "Microburst numbers (AIM)",
    back: "Downdraft up to 6,000 fpm\nHorizontal outflow up to 45 kt → up to 90 kt headwind-to-tailwind shear\nHorizontal extent ~1–2.5 miles, vertical depth ~1,000 ft\nLife seldom more than 15 min, peak intensity in first 2–4 min\nEncounter: airspeed/performance increase, then downdraft, then tailwind/sink. Escape: max power, go-around attitude, respect stall warning."
  },
  {
    id: "weather-card-006", type: "card", topic: "weather", ref: "AC 00-6B / AIM 7-1-20", tags: ["ipc"],
    front: "Structural icing types, temperature bands, and PIREP intensities",
    back: "Requires visible moisture + aircraft surface ≤ 0°C.\nClear: ~0 to −10°C, large droplets, dense, runs aft, hardest to shed (freezing rain, CU).\nRime: ~−10 to −20°C, small droplets, brittle, opaque, leading edge.\nMixed: in between.\nIntensities (AIM 7-1-20): trace, light, moderate, severe (de/anti-ice fails to control; immediate exit required).\nInduction icing: blocks air intake or carburetor; no visible moisture needed for carb ice."
  },
  {
    id: "weather-card-007", type: "card", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    front: "METAR remark decoding: RAB15, SLP134, PK WND 28032/1835, A2992, VV004, FG vs BR, TCU/CB",
    back: "RAB15: rain began at :15 past the hour (E = ended)\nSLP134: sea-level pressure 1013.4 hPa\nPK WND 28032/1835: peak wind 280° at 32 kt at 1835Z\nA2992: altimeter 29.92 in Hg\nVV004: indefinite ceiling, vertical visibility 400 ft\nFG: fog, vis < 5/8 sm; BR: mist, vis 5/8–6 sm\nTCU: towering cumulus; CB: cumulonimbus (with direction, e.g., CB DSNT W)\nAO2: automated station with precipitation discriminator"
  },
  {
    id: "weather-card-008", type: "card", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    front: "TAF change groups and conventions (NWS)",
    back: "Valid period: 24 hr (30 hr at some airports), DDHH/DDHH.\nFM: rapid, permanent change; starts a new line and full forecast.\nTEMPO: temporary fluctuations, each < 1 hr, total < half the period.\nPROB30: 30% probability; not used in the first 9 hr of an NWS TAF.\nBECMG: not used in NWS TAFs (military/international only).\nWS020/27045KT: non-convective LLWS at 2,000 ft AGL (forecast only to 2,000 ft AGL).\nP6SM: vis > 6 sm. VC: within 5–10 sm of the airport. 00000KT calm. VRB variable direction."
  },
  {
    id: "weather-card-009", type: "card", topic: "weather", ref: "AC 00-45H", tags: ["ipc", "flight-review"],
    front: "Winds and temperatures aloft (FB) conventions",
    back: "DDSSTT: direction (tens of degrees), speed (kt), temp (°C).\n9900 = light and variable (< 5 kt).\nSpeed ≥ 100 kt: add 50 to direction, subtract 100 from speed (780852 = 280° / 108 kt / −52°C). 199 kt+ coded 99.\nNo winds forecast within 1,500 ft of station elevation; no temps at 3,000 ft or within 2,500 ft of station.\nAbove 24,000 ft all temps negative, sign omitted.\nIssued for 6, 12, 24 hr forecast periods; valid time and 'for use' window stated in the header."
  },
  {
    id: "weather-card-010", type: "card", topic: "weather", ref: "AIM 7-1-18", tags: ["ipc", "flight-review"],
    front: "PIREP format elements",
    back: "UA = routine, UUA = urgent (severe icing/turbulence, LLWS, tornado, volcanic ash, etc.)\n/OV location (fix/radial/distance)\n/TM time (UTC)\n/FL altitude (hundreds of ft MSL)\n/TP aircraft type (required for icing/turbulence)\n/SK sky cover (bases/tops)\n/WX flight visibility and weather\n/TA temperature (°C)\n/WV wind (direction/speed)\n/TB turbulence (intensity, type, altitude)\n/IC icing (intensity, type, altitude)\n/RM remarks\nExample: UA /OV OKC /TM 1530 /FL085 /TP PA44 /TB MOD /IC LGT RIME 080-090"
  },

  // ───────────────────────── SCENARIOS ─────────────────────────
  {
    id: "weather-scen-001", type: "scenario", topic: "weather", ref: "AC 00-45H / 14 CFR 91.169", tags: ["ipc", "c172"],
    q: "You plan an IFR flight in a C172S from KMSP to KDSM, ETA 2300Z. The KDSM TAF reads: FM212100 18010KT 4SM BR OVC008 TEMPO 2122/2201 2SM -RA OVC004 PROB30 2201/2204 1SM -DZ OVC002. The ILS at DSM has a 200 ft DA with 1/2 sm visibility. The nearest alternate with reasonable weather is 90 NM away. What is the best assessment?",
    choices: [
      "The flight is legal and routine; the prevailing forecast at ETA is above ILS minimums and no alternate is required",
      "The prevailing forecast at ETA is above ILS minimums, but ceilings below 2,000 ft and visibility below 3 sm require an alternate; the TEMPO and PROB30 groups bracket your ETA and show ceilings near or below minimums, so plan the alternate, carry fuel to it plus 45 minutes, and set a personal decision point for diverting",
      "The TEMPO group makes the destination illegal for IFR flight planning; file to the alternate instead",
      "Because PROB30 is only 30%, the TEMPO and PROB30 groups can be disregarded for planning purposes"
    ],
    a: 1,
    exp: "The 1-2-3 rule (91.169) uses the forecast one hour before to one hour after ETA: OVC008 and 4 sm fails 2,000 ft and 3 sm, so an alternate is required. Legally the prevailing forecast (800 ft, 4 sm) exceeds ILS minimums, but TEMPO 400 ft and PROB30 200 ft cannot be disregarded for safety, and both apply to your ETA window. In a single-engine piston airplane with no de-ice, the prudent plan is the alternate with fuel reserves, plus early decision criteria such as ATIS below 400 ft or a missed approach triggering immediate diversion."
  },
  {
    id: "weather-scen-002", type: "scenario", topic: "weather", ref: "AIM 7-1-27 / AC 00-6B", tags: ["flight-review", "pa44"],
    q: "Cruising VFR at 7,500 ft in a PA-44 on a summer afternoon, you see a line of building cumulonimbus 30 NM ahead stretching 50 NM across your route, with tops well above you. Ground radar on your tablet shows a solid line of red and yellow echoes with a Convective SIGMET in effect. ATC says the line has gaps and offers vectors through a 10-mile gap between cells. What is the best decision?",
    choices: [
      "Accept the vectors through the gap; a 10-mile gap gives 5 miles from each cell, which is adequate",
      "Climb to overfly the line, since the Seminole can reach 15,000 ft",
      "Decline the gap, divert to land short of the line or deviate well around its end, because a 10-mile gap gives half the 20 NM separation recommended for severe cells, cells in a line can merge, and datalink radar is several minutes old",
      "Descend below the bases and fly under the line in visual conditions, where the air is usually smooth"
    ],
    a: 2,
    exp: "A squall line is the most dangerous thunderstorm arrangement; gaps close and new cells build quickly, and tablet NEXRAD imagery can be 5–20 minutes old. AIM 7-1-27 recommends 20 miles from severe or intense-echo storms, so a 10-mile gap is inadequate. Overflying is impossible for a light twin, and flying beneath exposes you to microbursts, hail, and shear. Landing to wait it out or going around the end of the line are the sound choices."
  },
  {
    id: "weather-scen-003", type: "scenario", topic: "weather", ref: "AC 00-6B / AIM 7-1-20", tags: ["ipc", "c172"],
    q: "You are IFR in a C172S at 6,000 ft in stratus, OAT −4°C, and notice rime accumulating on the strut and leading edges. The freezing level per the briefing was 4,000 ft, tops reported at 7,000 ft, and the terrain MEA is 5,000 ft. Which action is best?",
    choices: [
      "Continue and monitor; rime ice is light and the 172S can carry it for the remaining 40 minutes",
      "Request an immediate climb to 8,000 ft to get on top where the sun will sublimate the ice, accepting that the climb through the icing layer may be slow with ice already on the airframe; if the airplane cannot climb, descend to the MEA at 5,000 ft which is above the freezing level only by 1,000 ft, so the better exit is likely to reverse course to known ice-free air",
      "Immediately descend to 3,000 ft below the freezing level regardless of the MEA",
      "Turn on pitot heat and cabin heat; the ice will melt off the wings"
    ],
    a: 1,
    exp: "The 172S is not approved for flight in known icing, so any accretion requires an immediate exit and an urgent PIREP. Options are up, down, or back: tops at 7,000 ft are close, but climb performance with ice is degraded and may be insufficient; descending below the MEA in IMC is not an option, and 5,000 ft may still be in icing conditions. Reversing course to the air you just flew through, which was ice-free, is often the most reliable exit. Pitot heat protects the airspeed indication only."
  },
  {
    id: "weather-scen-004", type: "scenario", topic: "weather", ref: "PHAK Ch. 12 / AC 00-6B", tags: ["flight-review", "pa44"],
    q: "Planning a dawn VFR departure in a PA-44 from a river-valley airport, the 0500 local METAR shows 08/08, calm wind, clear skies, and 10 sm visibility. The forecast calls for sunrise at 0630 and winds becoming 180 at 5 kt by 0800. Your passengers want to depart at 0615. What should you expect and plan?",
    choices: [
      "Conditions are VFR and the forecast is benign, so depart as planned",
      "Radiation fog is likely to form in the valley around sunrise as the zero spread combines with calm wind and clear skies; brief passengers on a possible delay until 2–3 hours after sunrise, and check the latest METAR/webcam before engine start",
      "Advection fog is likely because of the southerly wind forecast, so depart before 0800 to beat it",
      "Fog is impossible because the visibility is currently 10 sm"
    ],
    a: 1,
    exp: "A zero temperature/dew-point spread, calm wind, clear skies, and low terrain that collects cool, moist air are the classic ingredients for radiation (ground) fog, which often forms or thickens right at sunrise when the surface is coldest. It typically burns off two to three hours after sunrise. Even if the airport is clear at engine start, fog can form during the taxi, so have a plan to hold short and wait."
  },
  {
    id: "weather-scen-005", type: "scenario", topic: "weather", ref: "PHAK Ch. 11 / AC 00-6B", tags: ["flight-review", "c172"],
    q: "You plan a C172S departure from a mountain airport at 6,500 ft elevation at 1500 local in July: temperature 32°C, altimeter 30.10, runway 5,000 ft with rising terrain off the departure end, four adults and full fuel. What is the most important consideration?",
    choices: [
      "The high altimeter setting means pressure altitude is below field elevation, so performance will be better than book",
      "Density altitude is roughly 10,000 ft, which lengthens the takeoff roll and sharply reduces climb rate; the loaded airplane is near or over MTOW, so reduce weight, depart early morning when cooler, or do not go",
      "Lean the mixture for takeoff and use flaps 30 for the shortest ground roll",
      "Density altitude only affects true airspeed, not takeoff distance, so the 5,000 ft runway is adequate"
    ],
    a: 1,
    exp: "Pressure altitude is about 6,320 ft (30.10 is 0.18 in above standard, roughly 180 ft lower), but 32°C is about 30°C above ISA at that altitude, which adds roughly 3,600 ft, giving a density altitude near 10,000 ft. The normally aspirated engine loses about 3% power per 1,000 ft of density altitude, and takeoff distance and climb gradient degrade dramatically; with rising terrain this is a go/no-go question. Leaning for best power is correct at high density altitude, but flaps 30 is not a takeoff setting in the 172S (10° is the short-field setting)."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "weather-oral-001", type: "oral", topic: "weather", ref: "AC 00-6B / PHAK Ch. 12", tags: ["flight-review", "cfi"],
    q: "Explain atmospheric stability to me as you would to a commercial student, and tell me how you would determine it from the weather products available before a flight.",
    answer: "Stability is the atmosphere's resistance to vertical motion. A lifted parcel cools dry-adiabatically at about 3°C per 1,000 ft (about 1.2–1.5°C once saturated); if the surrounding air cools faster with height than the parcel does, the parcel stays warmer and keeps rising, which is instability, and if the environment cools more slowly the parcel is colder and sinks back, which is stability. Moisture and surface heating both increase instability; cooling from below, subsidence, and inversions increase stability. Before flight I look at the temperature profile (Skew-T, winds/temps aloft), the lapse rate implied by surface temperatures versus forecast temperatures aloft, the cloud types in METARs and PIREPs (cumuliform means unstable, stratiform means stable), and the AIRMET/SIGMET and convective outlook products. Unstable air gives me turbulence, showers, good visibility, and thunderstorm potential; stable air gives me smooth air but low ceilings, fog, and steady precipitation.",
    points: [
      "Definition: resistance to vertical motion, judged by comparing environmental lapse rate to adiabatic rates",
      "DALR ~3°C/1,000 ft; MALR ~1.2–1.5°C/1,000 ft; standard 2°C/1,000 ft",
      "Moisture and heating destabilize; inversions and cooling from below stabilize",
      "Stable = stratiform, smooth, poor vis, steady precip; unstable = cumuliform, turbulence, good vis, showers",
      "Sources: Skew-T, FB temps, METAR/PIREP cloud types, convective outlooks"
    ]
  },
  {
    id: "weather-oral-002", type: "oral", topic: "weather", ref: "AC 00-6B / AIM 7-1-24 / AIM 7-1-27", tags: ["flight-review", "atp"],
    q: "Walk me through the life cycle of a thunderstorm and the specific hazards you would brief a crew on when operating near convective weather.",
    answer: "A cell needs moisture, instability, and lift. In the cumulus stage it is all updraft; the mature stage begins when precipitation reaches the surface, so updrafts and downdrafts coexist and that is when turbulence, hail, lightning, shear, and microbursts peak; in the dissipating stage downdrafts dominate and the cell rains itself out. The hazards I brief are severe turbulence inside and up to 20 miles outside the cell, hail thrown out under and downwind of the anvil, microbursts with downdrafts to 6,000 fpm and 90 kt of shear that last about 15 minutes, lightning and static, heavy rain and possible engine flameout or induction problems, rapid altimeter changes near the gust front, and icing in the updrafts above the freezing level. Operationally that means 20 NM from severe cells, never under an anvil or through a gap in a squall line, no overflight unless we clear tops by 1,000 ft per 10 kt of wind, and treating embedded storms as a no-go without onboard radar.",
    points: [
      "Ingredients: moisture, unstable lapse rate, lifting action",
      "Stages: cumulus (updraft), mature (precip reaches surface, most violent), dissipating (downdraft)",
      "Hazards: turbulence, hail, lightning, microburst/LLWS, icing, heavy rain, altimeter error",
      "20 NM avoidance; no flight beneath; 1,000 ft per 10 kt over tops",
      "Embedded storms and squall lines require diversion"
    ]
  },
  {
    id: "weather-oral-003", type: "oral", topic: "weather", ref: "AC 00-6B / AIM 7-1-20", tags: ["ipc", "atp"],
    q: "What conditions produce airframe icing, what types form in what temperatures, and what would you do about an icing encounter in an airplane not approved for flight in icing?",
    answer: "Structural icing needs visible moisture and an airframe temperature at or below 0°C. Clear ice forms from large supercooled droplets near freezing, roughly 0 to −10°C, in cumuliform clouds and freezing rain; it spreads aft, is dense and heavy, and distorts the airfoil beyond any boots. Rime forms from small droplets at roughly −10 to −20°C, freezing instantly into an opaque, brittle deposit on the leading edges; mixed ice is a combination. The greatest threat is freezing rain or drizzle, because droplets are large and the accretion rate is high. In a non-approved airplane any accretion requires an immediate exit: climb if tops are close and performance allows, descend to warmer air if terrain permits, or reverse course to the ice-free air I just left, while giving an urgent PIREP, turning on pitot heat, and avoiding flap extension and slow flight because the stall speed is now unknown.",
    points: [
      "Visible moisture plus surface temperature ≤ 0°C",
      "Clear 0 to −10°C (large droplets, runs aft); rime −10 to −20°C (small droplets, leading edge); mixed between",
      "Freezing rain/drizzle most dangerous; ice pellets at surface imply freezing rain aloft",
      "Non-approved aircraft: exit immediately (up, down, or back), PIREP, pitot heat",
      "Do not extend flaps or slow to normal approach speeds with ice aboard"
    ]
  },
  {
    id: "weather-oral-004", type: "oral", topic: "weather", ref: "AC 00-45H / AIM 7-1-5", tags: ["flight-review", "ipc"],
    q: "Describe the weather briefing you obtain before an IFR cross-country, the products you look at, and the difference between the three types of briefings available from Flight Service.",
    answer: "I start with a big-picture look at the surface analysis and prog charts to understand where fronts, lows, and air masses are, then the GFA and Skew-T for stability and freezing levels, then route-specific products: METARs, TAFs for departure, destination, and alternates, winds and temperatures aloft for performance and icing, G-AIRMETs and SIGMETs including Convective SIGMETs, PIREPs for actual tops, icing, and turbulence, radar and satellite trends, and NOTAMs and TFRs. Then I get a standard briefing from Flight Service through 1800wxbrief or by phone, which provides adverse conditions, a VFR-not-recommended statement if applicable, synopsis, current conditions, en route and destination forecasts, winds aloft, NOTAMs, and ATC delays. An abbreviated briefing updates or supplements information I already have, and an outlook briefing is for a departure six or more hours away and gives forecast data only, to be followed by a standard briefing closer to departure. The goal is to know what the weather is doing, why, and what it is likely to do while I am airborne.",
    points: [
      "Big picture first: surface analysis, prog charts, synopsis",
      "Route products: METAR/TAF, FB winds, G-AIRMET/SIGMET/Convective SIGMET, PIREPs, radar/satellite, NOTAMs/TFRs",
      "Standard briefing contents: adverse conditions, synopsis, current, forecast, winds aloft, NOTAMs, delays",
      "Abbreviated = update/supplement; outlook = 6+ hours out, forecast only",
      "Sources: 1800wxbrief (Leidos), aviationweather.gov, EFB; briefing is recorded"
    ]
  },
  {
    id: "weather-oral-005", type: "oral", topic: "weather", ref: "AC 00-54 / AIM 7-1-24", tags: ["atp", "part135"],
    q: "How would you recognize low-level wind shear on approach, and what is your recovery?",
    answer: "I set myself up to recognize it by knowing the environment: convective activity or a Convective SIGMET near the field, LLWS alerts from the tower or a WS group in the TAF, a strong inversion with a low-level jet, frontal passage, or PIREPs from preceding aircraft. In the airplane the cues are uncommanded airspeed changes of about 15 kt or more, vertical speed changes of about 500 fpm, pitch changes of 5° or more, a glideslope deviation of a dot or more, or unusual power settings for a stable approach. A performance increase (airspeed rising, ballooning) on final is the classic entry into a microburst, with the decrease coming seconds later. The recovery is an immediate go-around: maximum power, pitch to the go-around attitude and hold it, respect the stall warning, do not change configuration until clear, and fly the energy state rather than chasing the glidepath. If I did not take the go-around on the performance increase, the performance decrease may leave no energy to recover.",
    points: [
      "Environment cues: convection, LLWS alerts/TAF WS, inversions, fronts, PIREPs",
      "Aircraft cues: ±15 kt airspeed, ±500 fpm, ±5° pitch, 1 dot glideslope, unusual power",
      "Microburst signature: performance increase then decrease",
      "Recovery: immediate go-around, max power, pitch attitude, respect stall warning, no configuration changes",
      "Decide early; delay the decision and the energy is gone"
    ]
  },
  {
    id: "weather-oral-006", type: "oral", topic: "weather", ref: "AC 00-45H / AIM 7-1-6", tags: ["ipc", "flight-review"],
    q: "A Convective SIGMET is issued for your route, but the TAF at your destination shows VFR conditions. How do you reconcile these and what does the Convective SIGMET imply that is not written in it?",
    answer: "A TAF is a point forecast for the five-statute-mile area around a terminal, while a Convective SIGMET is an area advisory for en-route convective hazards, so both can be true at once: the airport may be clear while a line of storms sits across my route. Convective SIGMETs are issued hourly at 55 past the hour, valid two hours, for severe thunderstorms with surface winds of 50 kt or more, hail three-quarters of an inch or larger, or tornadoes, for embedded thunderstorms, for lines of thunderstorms, and for thunderstorms at VIP level 4 or greater affecting 40% or more of an area of at least 3,000 square miles. The part that is implied rather than written is that any Convective SIGMET carries severe or greater turbulence, severe icing, and low-level wind shear, so no separate SIGMET is issued for those. I would look at the radar, the convective outlook, and the SIGMET's movement to decide whether to route around, delay, or land short, rather than relying on the destination TAF.",
    points: [
      "TAF is a point forecast; Convective SIGMET is an en-route area advisory",
      "Issued hourly at H+55, valid 2 hours",
      "Criteria: severe TS (50 kt wind, 3/4 in hail, tornado), embedded, lines, VIP 4+ over 40% of 3,000 sq mi",
      "Implied hazards: severe turbulence, severe icing, LLWS",
      "Use radar and movement to plan deviation or delay"
    ]
  }
);
