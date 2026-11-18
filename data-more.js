window.BANK = window.BANK || [];
window.BANK.push(
  // ═════════════════════════════════════════════════════════════════
  //  PERF — Performance & Weight-and-Balance
  // ═════════════════════════════════════════════════════════════════
  {
    id: "perf-mcq-001", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "Field elevation is 1,500 ft MSL and the altimeter setting is 30.12 in. Hg. What is the pressure altitude?",
    choices: [
      "1,300 ft",
      "1,500 ft",
      "1,700 ft",
      "1,100 ft"
    ],
    a: 0,
    exp: "Pressure altitude changes about 1,000 ft per inch of mercury. (29.92 − 30.12) × 1,000 = −200 ft, so PA = 1,500 − 200 = 1,300 ft. A setting higher than standard means the air is denser than standard, so pressure altitude is lower than field elevation. The common error is adding when the setting is above 29.92."
  },
  {
    id: "perf-mcq-002", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "Pressure altitude is 5,000 ft and the OAT is 25 °C. Using the rule of thumb of 120 ft per degree Celsius above standard, what is the approximate density altitude?",
    choices: [
      "5,600 ft",
      "7,400 ft",
      "6,200 ft",
      "8,000 ft"
    ],
    a: 1,
    exp: "Standard temperature at 5,000 ft is 15 − (2 × 5) = 5 °C. The air is 20 °C warmer than standard, and 20 × 120 = 2,400 ft, so DA ≈ 5,000 + 2,400 = 7,400 ft. The 120 ft/°C figure is an approximation that matches the DA chart well in the altitudes light airplanes use."
  },
  {
    id: "perf-mcq-003", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "An airport sits at 4,200 ft MSL. The altimeter setting is 29.62 and the OAT is 30 °C. What is the approximate density altitude?",
    choices: [
      "5,800 ft",
      "6,700 ft",
      "7,400 ft",
      "8,500 ft"
    ],
    a: 2,
    exp: "First get pressure altitude: (29.92 − 29.62) × 1,000 = +300 ft, so PA = 4,500 ft. ISA at 4,500 ft is 15 − 9 = 6 °C; the actual temperature is 24 °C above that. 24 × 120 = 2,880 ft, giving DA ≈ 7,380 ft, or about 7,400 ft. Two steps: altimeter correction first, then temperature correction."
  },
  {
    id: "perf-mcq-004", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "According to the Pilot's Handbook of Aeronautical Knowledge, a 10 percent increase in takeoff gross weight produces approximately what change in takeoff distance?",
    choices: [
      "A 5 percent increase",
      "A 10 percent increase",
      "A 15 percent increase",
      "At least a 21 percent increase"
    ],
    a: 3,
    exp: "PHAK Chapter 11 states that a 10 percent increase in takeoff gross weight causes about a 5 percent increase in takeoff velocity, at least a 9 percent decrease in acceleration, and at least a 21 percent increase in takeoff distance. Weight hurts twice: the airplane needs a higher liftoff speed and accelerates more slowly getting there, which is why distance grows faster than weight."
  },
  {
    id: "perf-mcq-005", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "A headwind equal to 10 percent of the liftoff airspeed will reduce the takeoff distance by approximately:",
    choices: [
      "19 percent",
      "10 percent",
      "5 percent",
      "30 percent"
    ],
    a: 0,
    exp: "PHAK Chapter 11: a headwind of 10 percent of the takeoff airspeed reduces takeoff distance about 19 percent, while a tailwind of 10 percent of the takeoff airspeed increases it about 21 percent. The effect is non-linear because distance depends on the square of the groundspeed at liftoff. Wind affects landing distance in the same way."
  },
  {
    id: "perf-mcq-006", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "A tailwind equal to 10 percent of the takeoff speed increases the takeoff distance by approximately:",
    choices: [
      "10 percent",
      "21 percent",
      "5 percent",
      "40 percent"
    ],
    a: 1,
    exp: "The PHAK figure is about 21 percent for a tailwind of 10 percent of the takeoff airspeed. Note the asymmetry with the headwind case (about 19 percent reduction): the tailwind penalty is slightly larger than the headwind benefit because groundspeed at liftoff must be higher. Most POHs are even more conservative, adding 10 percent per 2 knots of tailwind."
  },
  {
    id: "perf-mcq-007", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "A 10 percent increase in landing gross weight produces approximately what change in landing distance?",
    choices: [
      "A 21 percent increase",
      "A 5 percent increase",
      "A 10 percent increase",
      "No change, because approach speed is constant"
    ],
    a: 2,
    exp: "PHAK Chapter 11 says a 10 percent increase in landing weight causes about a 5 percent increase in landing speed and about a 10 percent increase in landing distance. Landing distance is less sensitive to weight than takeoff distance (10 percent vs. at least 21 percent) because heavier weight also increases the braking force available. The 21 percent figure belongs to the takeoff case and to a 10 percent increase in landing speed."
  },
  {
    id: "perf-mcq-008", type: "mcq", topic: "perf", ref: "C172S POH Sec. 2; PHAK Ch. 5", tags: ["kt","cax","c172"],
    q: "A C172S has a published maneuvering speed of 105 KIAS at 2,550 lb. Using the relationship Va(new) = Va × √(W / Wmax), what is Va at 2,200 lb?",
    choices: [
      "105 KIAS",
      "101 KIAS",
      "92 KIAS",
      "98 KIAS"
    ],
    a: 3,
    exp: "√(2,200 / 2,550) = √0.863 ≈ 0.929, and 105 × 0.929 ≈ 97.5, so about 98 KIAS, which matches the POH value. Va decreases with weight because a lighter airplane reaches the limit load factor at a lower speed: it stalls at a lower speed, so the wing can generate the full 3.8 G at a lower airspeed. Verify against your airplane's POH."
  },
  {
    id: "perf-mcq-009", type: "mcq", topic: "perf", ref: "PHAK Ch. 5; C172S POH Sec. 2", tags: ["kt","cax"],
    q: "Why does maneuvering speed decrease as aircraft weight decreases?",
    choices: [
      "A lighter airplane stalls at a lower speed, so it can reach the limit load factor at a lower airspeed",
      "The structure is weaker when the fuel tanks are partially empty",
      "Lighter airplanes have less inertia, so gusts produce larger airspeed changes",
      "The center of gravity moves forward, increasing the tail download"
    ],
    a: 0,
    exp: "Va is the speed at which the wing reaches the limit load factor at the same moment it stalls. Stall speed scales with √weight, so a lighter airplane stalls at a lower speed and can therefore pull the limit G at a lower speed. Above that speed, a full control deflection or sharp gust could exceed the limit load before the wing stalls. The structure itself does not change with fuel load."
  },
  {
    id: "perf-mcq-010", type: "mcq", topic: "perf", ref: "IPH Ch. 1; AIM 5-2-9", tags: ["kt","ira"],
    q: "A departure procedure requires a climb gradient of 200 ft per NM. At a groundspeed of 90 knots, what rate of climb is required?",
    choices: [
      "200 fpm",
      "300 fpm",
      "450 fpm",
      "600 fpm"
    ],
    a: 1,
    exp: "Rate (fpm) = gradient (ft/NM) × groundspeed (kt) ÷ 60. 200 × 90 ÷ 60 = 300 fpm. The conversion works because groundspeed in knots divided by 60 gives NM per minute (90 kt = 1.5 NM/min; 1.5 × 200 = 300 ft/min). Use groundspeed, not airspeed: a tailwind on departure raises the required rate of climb."
  },
  {
    id: "perf-mcq-011", type: "mcq", topic: "perf", ref: "IPH Ch. 1; AIM 5-2-9", tags: ["kt","ira"],
    q: "An ODP requires 350 ft per NM to 4,000 ft. Your planned groundspeed is 120 knots. What is the minimum rate of climb that meets the gradient?",
    choices: [
      "350 fpm",
      "525 fpm",
      "700 fpm",
      "1,050 fpm"
    ],
    a: 2,
    exp: "350 × 120 ÷ 60 = 700 fpm. At 120 knots the airplane covers 2 NM every minute, so it must gain 2 × 350 = 700 ft each minute. A Seminole or 172 on a hot day may not have this available, which is why gradient checks belong in preflight planning, not after takeoff."
  },
  {
    id: "perf-mcq-012", type: "mcq", topic: "perf", ref: "IPH Ch. 1", tags: ["kt","ira"],
    q: "Your airplane can climb at 500 fpm at a groundspeed of 100 knots. What climb gradient does that represent?",
    choices: [
      "200 ft/NM",
      "250 ft/NM",
      "500 ft/NM",
      "300 ft/NM"
    ],
    a: 3,
    exp: "Gradient (ft/NM) = rate (fpm) × 60 ÷ groundspeed. 500 × 60 ÷ 100 = 300 ft/NM. At 100 knots the airplane covers 1.667 NM per minute, so 500 ft spread over 1.667 NM is 300 ft per NM. This exceeds the standard 200 ft/NM assumed when no gradient is published."
  },
  {
    id: "perf-mcq-013", type: "mcq", topic: "perf", ref: "PHAK Ch. 11; 14 CFR 91.167", tags: ["kt","cax"],
    q: "A 250 NM leg will be flown at a groundspeed of 125 knots with a cruise fuel burn of 9.5 gal/hr. Including a 45-minute reserve at the same burn rate, how much fuel is required?",
    choices: [
      "26.1 gal",
      "22.6 gal",
      "19.0 gal",
      "28.5 gal"
    ],
    a: 0,
    exp: "Time en route = 250 ÷ 125 = 2.0 hours, so leg fuel = 2.0 × 9.5 = 19.0 gal. The 45-minute reserve is 0.75 × 9.5 ≈ 7.1 gal. Total ≈ 26.1 gal. This ignores climb and taxi allowances, which the POH adds separately; real planning starts from the POH climb table and adds the leg and reserve."
  },
  {
    id: "perf-mcq-014", type: "mcq", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    q: "Compute the CG. Basic empty weight 1,680 lb at arm 39.5 in; front seats 340 lb at arm 37.0; rear seat 180 lb at arm 73.0; fuel 40 gal at arm 48.0; baggage 50 lb at arm 95.0.",
    choices: [
      "41.8 in",
      "43.5 in",
      "45.2 in",
      "39.9 in"
    ],
    a: 1,
    exp: "Fuel: 40 gal × 6 lb = 240 lb. Moments: 1,680 × 39.5 = 66,360; 340 × 37 = 12,580; 180 × 73 = 13,140; 240 × 48 = 11,520; 50 × 95 = 4,750. Total weight 2,490 lb, total moment 108,350 lb-in. CG = 108,350 ÷ 2,490 = 43.5 in. Always convert gallons to pounds before computing moments; the most common error is using gallons directly."
  },
  {
    id: "perf-mcq-015", type: "mcq", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    q: "An airplane weighs 2,400 lb with the CG at 42.0 in. A 50-lb bag is moved from the station at 95 in to the station at 123 in. Where is the new CG?",
    choices: [
      "42.2 in",
      "43.1 in",
      "42.6 in",
      "43.8 in"
    ],
    a: 2,
    exp: "Weight shift formula: weight shifted ÷ total weight = CG change ÷ distance moved. 50 ÷ 2,400 = ΔCG ÷ 28, so ΔCG = 50 × 28 ÷ 2,400 = 0.58 in. Moving weight aft moves the CG aft: 42.0 + 0.58 = 42.6 in. Total weight is unchanged, so only the moment changes."
  },
  {
    id: "perf-mcq-016", type: "mcq", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    q: "An airplane departs at 2,490 lb with a total moment of 108,350 lb-in. It burns 20 gal of avgas from tanks at arm 48.0 in. What is the landing CG?",
    choices: [
      "43.5 in",
      "42.9 in",
      "44.0 in",
      "43.3 in"
    ],
    a: 3,
    exp: "20 gal × 6 lb = 120 lb removed. Moment removed = 120 × 48 = 5,760 lb-in. New weight = 2,370 lb; new moment = 102,590 lb-in. CG = 102,590 ÷ 2,370 = 43.3 in. Burning fuel from a station aft of the CG moves the CG forward slightly, which is why POHs require checking both takeoff and landing conditions."
  },
  {
    id: "perf-mcq-017", type: "mcq", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    q: "An airplane weighs 2,300 lb with the CG at 40.0 in. If 100 lb of baggage is added at station 95.0 in, where is the new CG?",
    choices: [
      "42.3 in",
      "41.5 in",
      "40.6 in",
      "43.0 in"
    ],
    a: 0,
    exp: "Original moment = 2,300 × 40 = 92,000 lb-in. Added moment = 100 × 95 = 9,500 lb-in. New weight 2,400 lb, new moment 101,500 lb-in, CG = 101,500 ÷ 2,400 = 42.3 in. Adding weight far aft moves the CG aft more than intuition suggests: 100 lb at 95 in moved it 2.3 in."
  },
  {
    id: "perf-mcq-018", type: "mcq", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    q: "What are the standard weights used in weight-and-balance computations for 100LL avgas and aviation oil?",
    choices: [
      "5.5 lb/gal avgas; 7.0 lb/gal oil",
      "6.0 lb/gal avgas; 7.5 lb/gal oil",
      "6.7 lb/gal avgas; 8.0 lb/gal oil",
      "6.0 lb/gal avgas; 6.0 lb/gal oil"
    ],
    a: 1,
    exp: "Avgas is 6 lb/gal and oil 7.5 lb/gal (1.875 lb per quart); Jet A is about 6.7 lb/gal. In a 172S, 53 gal usable is 318 lb and 8 qt of oil is 15 lb. Oil is usually included in basic empty weight, so you only account for it when the POH says so."
  },
  {
    id: "perf-mcq-019", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "A takeoff chart lists a ground roll of 1,080 ft at 2,000 ft pressure altitude and 1,260 ft at 4,000 ft pressure altitude. What ground roll should you expect at 3,500 ft pressure altitude?",
    choices: [
      "1,170 ft",
      "1,195 ft",
      "1,215 ft",
      "1,240 ft"
    ],
    a: 2,
    exp: "Interpolate linearly: 3,500 ft is 75 percent of the way from 2,000 to 4,000. The difference is 180 ft, and 0.75 × 180 = 135, so 1,080 + 135 = 1,215 ft. Interpolation is acceptable between chart values; extrapolating beyond the chart is not, and rounding up is the conservative choice when in doubt."
  },
  {
    id: "perf-mcq-020", type: "mcq", topic: "perf", ref: "PHAK Ch. 11; AFH Ch. 13", tags: ["kt","cax","pa44"],
    q: "The single-engine service ceiling of a light twin is the maximum density altitude at which the airplane, with one engine inoperative, can maintain a rate of climb of:",
    choices: [
      "0 fpm",
      "100 fpm",
      "200 fpm",
      "50 fpm"
    ],
    a: 3,
    exp: "Service ceiling is defined by a 100-fpm climb with all engines operating, but single-engine service ceiling uses 50 fpm. The single-engine absolute ceiling is where climb drops to zero. On a hot day these ceilings for a Seminole-class twin can be below the terrain along your route, which makes a drift-down plan part of IFR preflight in mountainous areas."
  },
  {
    id: "perf-mcq-021", type: "mcq", topic: "perf", ref: "PHAK Ch. 11; AFH Ch. 13", tags: ["kt","cax","pa44"],
    q: "Accelerate-stop distance is the distance required to:",
    choices: [
      "Accelerate to liftoff speed, lose an engine at that point, and bring the airplane to a stop",
      "Accelerate to rotation speed, lose an engine, continue the takeoff, and climb to 50 ft",
      "Accelerate to Vmc, abort, and clear the runway",
      "Reach Vyse, lose an engine, and return to the runway"
    ],
    a: 0,
    exp: "Accelerate-stop is the total of the acceleration distance to liftoff (or decision) speed plus the distance to stop after an engine failure at that speed. Accelerate-go is the companion figure: continue after the failure and clear a 50-ft obstacle. For a light twin, accelerate-go may exceed the runway or be impossible at high density altitude, which is why many operators brief 'below Vyse or below a safe altitude, we land'."
  },
  {
    id: "perf-mcq-022", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "Compared with a level, dry, paved runway, what is the effect of an uphill slope on takeoff and landing ground roll?",
    choices: [
      "Both takeoff and landing roll increase",
      "Takeoff roll increases; landing roll decreases",
      "Takeoff roll decreases; landing roll increases",
      "Both takeoff and landing roll decrease"
    ],
    a: 1,
    exp: "An upslope adds a component of weight opposing acceleration on takeoff, lengthening the roll, and the same component helps slow the airplane after landing, shortening the rollout. A downslope does the reverse. When the wind and slope disagree, use the POH corrections and remember that slope affects distance throughout the roll while a headwind's benefit is strongest at liftoff."
  },
  {
    id: "perf-mcq-023", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "The minimum dynamic hydroplaning speed can be estimated as 9 times the square root of the tire pressure in psi. For a main tire inflated to 36 psi, that speed is approximately:",
    choices: [
      "36 knots",
      "45 knots",
      "54 knots",
      "72 knots"
    ],
    a: 2,
    exp: "√36 = 6, and 9 × 6 = 54 knots. Above that groundspeed on a wet runway with standing water the tire can ride on the water film and braking becomes ineffective. Light airplanes with low tire pressures hydroplane at low speeds, often right in the touchdown speed range, so land on the upwind edge of a flooded runway and avoid heavy braking until well below this speed."
  },
  {
    id: "perf-mcq-024", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "Wind is from 30° off the runway heading at 20 knots. What are the approximate headwind and crosswind components?",
    choices: [
      "10 kt headwind, 17 kt crosswind",
      "20 kt headwind, 5 kt crosswind",
      "14 kt headwind, 14 kt crosswind",
      "17 kt headwind, 10 kt crosswind"
    ],
    a: 3,
    exp: "Headwind = 20 × cos 30° = 17.3 kt; crosswind = 20 × sin 30° = 10 kt. A quick rule: at 30° off the nose the crosswind is half the wind speed; at 45° about 70 percent; at 60° about 90 percent. Compare the crosswind to the max demonstrated value in the POH (15 kt for the 172S, 17 kt for the Seminole)."
  },
  {
    id: "perf-mcq-025", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "An airplane glides at a ratio of 9:1 from 6,000 ft AGL in no wind. Approximately how far can it glide?",
    choices: [
      "8.9 NM",
      "7.2 NM",
      "5.4 NM",
      "10.8 NM"
    ],
    a: 0,
    exp: "6,000 ft × 9 = 54,000 ft of horizontal distance; 54,000 ÷ 6,076 ft per NM ≈ 8.9 NM. A 172S at best glide (68 KIAS) achieves roughly 1.5 NM per 1,000 ft, which is consistent with this ratio. Wind changes the result directly: gliding into a 20-kt headwind at 68 KIAS cuts groundspeed by nearly 30 percent."
  },
  {
    id: "perf-mcq-026", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "A rule of thumb says true airspeed increases about 2 percent per 1,000 ft of density altitude for a given indicated airspeed. At 100 KIAS and 8,000 ft density altitude, TAS is approximately:",
    choices: [
      "108 knots",
      "116 knots",
      "112 knots",
      "120 knots"
    ],
    a: 1,
    exp: "2 percent × 8 = 16 percent, so TAS ≈ 100 × 1.16 = 116 knots. The airspeed indicator senses dynamic pressure, which falls with air density, so the same indicated speed corresponds to a higher true speed as density altitude rises. This is also why the airplane needs a higher groundspeed to lift off at high density altitude: the IAS at liftoff is the same, but the TAS and therefore the ground roll are higher."
  },
  {
    id: "perf-mcq-027", type: "mcq", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    q: "Which combination of conditions degrades takeoff and climb performance the most?",
    choices: [
      "High pressure altitude, low temperature, low humidity",
      "Low pressure altitude, high temperature, high humidity",
      "High pressure altitude, high temperature, high humidity",
      "Low pressure altitude, low temperature, high humidity"
    ],
    a: 2,
    exp: "High, hot, and humid all reduce air density: high pressure altitude means less pressure, high temperature means less density at that pressure, and water vapor is lighter than dry air so humidity lowers density further and also reduces engine power. Humidity is not included in the standard density-altitude computation, so treat the charted number as slightly optimistic on muggy days."
  },
  // ───────────── PERF card ─────────────
  {
    id: "perf-card-001", type: "card", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    front: "Pressure altitude from an altimeter setting (formula)",
    back: "PA = field elevation + (29.92 − altimeter setting) × 1,000 ft.\nSetting above 29.92 → PA below field elevation; below 29.92 → PA above.\nExample: 1,500 ft elev, 30.12 → 1,500 − 200 = 1,300 ft."
  },
  {
    id: "perf-card-002", type: "card", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    front: "Density altitude rule of thumb",
    back: "ISA temp at PA = 15 °C − 2 °C per 1,000 ft.\nDA ≈ PA + 120 ft × (OAT − ISA temp).\nExample: PA 5,000, OAT 25 °C: ISA = 5 °C, +20 °C → DA ≈ 7,400 ft.\nHumidity adds a further (uncharted) penalty."
  },
  {
    id: "perf-card-003", type: "card", topic: "perf", ref: "PHAK Ch. 11", tags: ["kt","cax"],
    front: "PHAK weight and wind rules for takeoff/landing distance",
    back: "+10% takeoff weight → +5% liftoff speed, −9% acceleration, at least +21% takeoff distance.\n+10% landing weight → +5% landing speed, +10% landing distance.\nHeadwind of 10% of liftoff speed → about −19% distance.\nTailwind of 10% of liftoff speed → about +21% distance.\nUpslope: longer takeoff, shorter landing roll."
  },
  {
    id: "perf-card-004", type: "card", topic: "perf", ref: "C172S POH Sec. 2; PHAK Ch. 5", tags: ["kt","cax","c172"],
    front: "Maneuvering speed by weight (formula and 172S values)",
    back: "Va(new) = Va(max) × √(W ÷ Wmax).\nC172S: 105 KIAS @ 2,550 lb; 98 @ 2,200; 90 @ 1,900 (POH).\nLighter airplane → lower Va because it reaches limit load at a lower speed.\nVerify against your airplane's POH."
  },
  {
    id: "perf-card-005", type: "card", topic: "perf", ref: "IPH Ch. 1; AIM 5-2-9", tags: ["kt","ira"],
    front: "Climb gradient ↔ rate of climb conversion",
    back: "fpm = (ft/NM) × groundspeed (kt) ÷ 60.\nft/NM = fpm × 60 ÷ groundspeed.\nStandard (unpublished) gradient: 200 ft/NM.\nExample: 200 ft/NM at 90 kt GS = 300 fpm; 350 ft/NM at 120 kt = 700 fpm.\nUse groundspeed, so tailwinds raise the required rate."
  },
  {
    id: "perf-card-006", type: "card", topic: "perf", ref: "PHAK Ch. 10", tags: ["kt","cax"],
    front: "Weight-and-balance formulas and standard weights",
    back: "Moment = weight × arm; CG = total moment ÷ total weight.\nWeight shift: (weight moved ÷ total weight) = (ΔCG ÷ distance moved).\nAdd/remove weight: recompute total moment and weight, then divide.\nAvgas 6 lb/gal; Jet A ≈ 6.7 lb/gal; oil 7.5 lb/gal (1.875 lb/qt)."
  },
  // ───────────── PERF scenarios ─────────────
  {
    id: "perf-scn-001", type: "scenario", topic: "perf", ref: "PHAK Ch. 11; C172S POH Sec. 5", tags: ["cax","c172"],
    q: "You are departing a 3,200-ft paved runway at a mountain airport, field elevation 6,100 ft, in a C172S at maximum gross weight with three adults and full fuel. The ATIS reports temperature 31 °C, altimeter 30.02, wind calm. The POH ground-roll figure you interpolate for these conditions is about 1,900 ft and the 50-ft obstacle distance about 3,400 ft. There are 60-ft trees 400 ft beyond the departure end. What is the best course of action?",
    choices: [
      "Depart as planned; the ground roll fits comfortably within the 3,200-ft runway",
      "Depart with a short-field technique and 10° of flaps to reduce the obstacle distance below 3,200 ft",
      "Lean the mixture for the climb and depart, since leaning restores the sea-level distances",
      "Reduce weight or wait for cooler temperatures, because the obstacle-clearance distance exceeds what is available"
    ],
    a: 3,
    exp: "The limiting number is not the ground roll but the distance to clear a 50-ft obstacle, which at roughly 3,400 ft already exceeds the runway with real trees just past the end and taller than 50 ft. Pressure altitude is about 6,000 ft (ISA there is 3 °C) and the temperature is about 28 °C above standard, giving a density altitude above 9,000 ft. Leaning for best power is required at this altitude but is already assumed by the POH chart; it does not recover sea-level performance. Removing a passenger or some fuel, or waiting for the morning, are the only options that change the arithmetic."
  },
  {
    id: "perf-scn-002", type: "scenario", topic: "perf", ref: "PHAK Ch. 10; C172S POH Sec. 6", tags: ["cax","c172"],
    q: "You are planning a flight in a C172S with a friend in the right seat and two adults in the back who have brought 70 lb of bags for the baggage area. Your initial computation shows the airplane 60 lb over maximum gross weight with the CG near the aft limit. Fuel is full. Which single change best addresses both problems?",
    choices: [
      "Leave 70 lb of baggage behind, which removes the overweight condition and moves the CG forward",
      "Defuel 10 gal and accept the aft CG, since weight is the only hard limit",
      "Move 40 lb of baggage to the rear-seat floor to shift the CG forward",
      "Move the heavier rear passenger to the front seat and keep the baggage"
    ],
    a: 0,
    exp: "The baggage sits at the most aft station, so removing it reduces weight and moves the CG forward at the same time. Moving baggage onto the rear-seat floor changes the arm only slightly and fixes neither problem. Defueling 10 gal (60 lb) cures the weight but leaves an aft CG, and the aft limit is as much a hard limit as gross weight because it degrades stall and stability characteristics. Swapping seats does nothing for the overweight condition. Verify any final loading against the POH envelope."
  },
  {
    id: "perf-scn-003", type: "scenario", topic: "perf", ref: "PHAK Ch. 11; AFH Ch. 13", tags: ["cax","pa44"],
    q: "You are planning an IFR departure in a PA-44 Seminole from an airport at 5,300 ft MSL on a summer afternoon, density altitude 8,400 ft. The ODP for your runway requires 320 ft per NM to 8,000 ft MSL. Your expected groundspeed in the climb is 100 knots, and the POH shows a two-engine climb of about 600 fpm at this weight and density altitude; the single-engine climb figure is negative. What should you conclude?",
    choices: [
      "The departure cannot be flown because the gradient requires 320 fpm and the single-engine climb is negative",
      "The departure is legal and the two-engine climb meets the gradient, but an engine failure after takeoff leaves no climb capability, so brief a return-and-land or straight-ahead plan and consider reducing weight",
      "The gradient does not apply because Part 91 departures are not required to comply with ODPs",
      "The departure is safe because 600 fpm exceeds the required gradient with margin for one engine"
    ],
    a: 1,
    exp: "Required rate = 320 × 100 ÷ 60 ≈ 533 fpm, so 600 fpm two-engine meets it with little margin. Nothing in the gradient accounts for an engine failure, and at this density altitude the Seminole cannot climb on one engine, so the published gradient would not be met after a failure. The honest conclusion is that the departure is legal but the single-engine plan is a landing, not a climb. Part 91 pilots are expected to fly the ODP when departing IFR even though it is not mandatory unless ATC assigns it; ignoring it in mountainous terrain is not an acceptable answer."
  },
  // ───────────── PERF oral ─────────────
  {
    id: "perf-oral-001", type: "oral", topic: "perf", ref: "PHAK Ch. 11", tags: ["cax"],
    q: "Explain density altitude. How do you compute it in the airplane without a chart, and why does it matter?",
    answer: "Density altitude is pressure altitude corrected for non-standard temperature: the altitude in the standard atmosphere at which the air has the same density as the air you are actually in. I get pressure altitude by setting 29.92 in the altimeter, or by adding 1,000 ft for each inch the setting is below 29.92. Then I compare OAT with the ISA temperature for that pressure altitude, 15 °C minus 2 °C per 1,000 ft, and add about 120 ft for each degree warmer. Density altitude is what the wing, the propeller, and a normally aspirated engine actually feel: higher density altitude means a longer takeoff roll at a higher groundspeed, lower rate of climb, and a longer landing roll. Humidity makes it slightly worse than the computed number.",
    points: ["Pressure altitude corrected for non-standard temperature","PA from altimeter: 1,000 ft per inch from 29.92","ISA lapse 2 °C per 1,000 ft; about 120 ft per °C deviation","Affects engine, propeller, and wing: longer roll, lower climb","Humidity adds an uncharted penalty"]
  },
  {
    id: "perf-oral-002", type: "oral", topic: "perf", ref: "PHAK Ch. 5; C172S POH Sec. 2", tags: ["cax","c172"],
    q: "What is maneuvering speed, why does it change with weight, and how do you use it in turbulence?",
    answer: "Va is the speed at or below which a full, abrupt deflection of a single control will stall the wing before the limit load factor is exceeded. It is set by the point where the stall line meets the limit load line on the V-g diagram. Stall speed goes up with the square root of weight, so a lighter airplane reaches the limit load at a lower airspeed, and Va goes down as weight goes down; in the 172S it is 105 KIAS at 2,550 lb, 98 at 2,200, and 90 at 1,900. In turbulence I slow to at or below Va for my current weight so that a sharp gust stalls the wing momentarily rather than overloading the structure. Va protects against a single full control input, not against combined or reversed inputs, and the POH's turbulent-air penetration speed, where published, is the better number to use.",
    points: ["Full single-control deflection stalls before limit load","Lower weight → lower Va, by √(W/Wmax)","172S: 105 / 98 / 90 KIAS at 2,550 / 2,200 / 1,900 lb","Slow to or below Va for current weight in turbulence","Not protection against combined or rapidly reversed inputs"]
  },
  {
    id: "perf-oral-003", type: "oral", topic: "perf", ref: "PHAK Ch. 10", tags: ["cax"],
    q: "Walk me through how you would handle a weight-and-balance problem where the airplane is within gross weight but the CG is slightly aft of the limit.",
    answer: "I would first confirm the numbers: the arms from the POH, 6 lb per gallon for fuel, and actual passenger and bag weights rather than estimates. Then I would fix the CG by moving weight forward, not by adding weight: move bags from the aft baggage area to a forward station, or swap a heavier passenger to a front seat. The weight-shift formula tells me how much to move: weight moved divided by total weight equals CG change divided by distance moved. I would also check the landing condition, because burning fuel from a tank aft of the CG moves the CG forward during flight, while in some airplanes fuel burn moves it aft. I would not fly with the CG aft of the limit because it reduces longitudinal stability, makes the stall and spin recovery worse, and lowers the stick force per G.",
    points: ["Verify arms and actual weights; fuel at 6 lb/gal","Move weight forward rather than adding weight","Weight-shift formula to size the move","Check takeoff and landing CG","Aft CG: reduced stability, worse stall/spin recovery"]
  },
  {
    id: "perf-oral-004", type: "oral", topic: "perf", ref: "PHAK Ch. 11; AFH Ch. 13", tags: ["cax","pa44"],
    q: "Define accelerate-stop and accelerate-go distance for a light twin, and explain how they shape your takeoff briefing in the Seminole.",
    answer: "Accelerate-stop is the distance to accelerate to liftoff speed, experience an engine failure at that instant, and stop; accelerate-go is the distance to accelerate, lose the engine at liftoff, continue, and clear a 50-ft obstacle. In a light twin the accelerate-go distance is often far longer than the runway and at high density altitude may not exist, because single-engine climb is marginal or negative. So my briefing is built around decision points: any abnormality before rotation, I close the throttles and stop on the runway; after liftoff with gear down and no runway remaining, below Vyse or below a safe altitude, I land straight ahead; only once I have Vyse, a positive rate, gear up, and enough altitude do I treat an engine failure as a feather-and-climb event. I compare both distances to the runway available before every departure.",
    points: ["Accelerate-stop: accelerate to liftoff speed, fail, stop","Accelerate-go: fail at liftoff, continue, clear 50 ft","Accelerate-go often exceeds runway; may be impossible at high DA","Briefing built around decision points: abort, land ahead, or climb","Compare both distances to runway available before departure"]
  },
  // ═════════════════════════════════════════════════════════════════
  //  COMMS — Communications & ATC
  // ═════════════════════════════════════════════════════════════════
  {
    id: "comms-mcq-001", type: "mcq", topic: "comms", ref: "AIM 4-4-7(b)", tags: ["kt","ira"],
    q: "According to the AIM, pilots of airborne aircraft should read back those parts of ATC clearances and instructions containing:",
    choices: [
      "Only the items the controller specifically asks to have read back",
      "Altimeter settings, frequencies, and transponder codes",
      "Altitude assignments, vectors, or runway assignments",
      "The complete clearance verbatim, in the order received"
    ],
    a: 2,
    exp: "AIM 4-4-7(b) names altitude assignments, vectors, and runway assignments as the items to read back as a means of mutual verification, always with your call sign. Reading back everything verbatim clogs the frequency; reading back only on request misses the point of the 'numbers' double-check. Altitudes in charted procedures need not be read back unless the controller states them."
  },
  {
    id: "comms-mcq-002", type: "mcq", topic: "comms", ref: "AIM 4-3-18(a)(9)", tags: ["kt","ira","cax"],
    q: "When taxi instructions are received, the AIM says pilots should always read back which items?",
    choices: [
      "The taxi route only",
      "Only hold-short instructions, since the controller must obtain that readback",
      "The ground frequency and the ATIS code",
      "The runway assignment, any clearance to enter a specific runway, and any instruction to hold short of a runway or line up and wait"
    ],
    a: 3,
    exp: "AIM 4-3-18(a)(9) lists three items: the runway assignment, any clearance to enter a specific runway, and any instruction to hold short of a specific runway or to line up and wait. ATC is required to obtain a readback of all runway hold-short instructions, but the pilot's duty is broader than hold-short alone. Include your call sign and the full runway designator, including left/right/center."
  },
  {
    id: "comms-mcq-003", type: "mcq", topic: "comms", ref: "AIM 5-2-5", tags: ["kt","ira"],
    q: "Tower says: 'Seminole 23 Bravo, runway 27, line up and wait.' Which readback is correct, and what does the instruction authorize?",
    choices: [
      "'Runway 27, line up and wait, 23 Bravo'; it authorizes taxiing onto the runway and waiting, not takeoff",
      "'Runway 27, cleared for takeoff, 23 Bravo'; LUAW is an abbreviated takeoff clearance",
      "'Line up and wait, 23 Bravo'; it authorizes takeoff once the preceding traffic is clear",
      "'Roger'; no readback is required for LUAW"
    ],
    a: 0,
    exp: "LUAW is not a takeoff clearance (AIM 5-2-5). You taxi onto the assigned runway, align with the departure direction, and wait; read back the runway and the LUAW instruction with your call sign. If no takeoff clearance arrives within a reasonable time, query the tower. Accidents have occurred when pilots read back LUAW correctly and then departed without a clearance."
  },
  {
    id: "comms-mcq-004", type: "mcq", topic: "comms", ref: "AIM 4-4-3; AIM 5-2-6", tags: ["kt","ira"],
    q: "The CRAFT mnemonic for copying an IFR clearance stands for:",
    choices: [
      "Call sign, Runway, Altitude, Fix, Time",
      "Clearance limit, Route, Altitude, Frequency, Transponder",
      "Clearance, Restrictions, Altimeter, Frequency, Taxi",
      "Course, Route, Altitude, Fuel, Transponder"
    ],
    a: 1,
    exp: "CRAFT follows the AIM 4-4-3 clearance sequence: Clearance limit (usually the destination airport), Route (including any DP and transition), Altitude (initial and expected, with a time or fix), Frequency for departure, and Transponder code. Writing the shorthand before you call means you only fill in blanks and can read back in the order given."
  },
  {
    id: "comms-mcq-005", type: "mcq", topic: "comms", ref: "AIM 5-2-6", tags: ["kt","ira"],
    q: "You receive 'Cleared to Springfield airport as filed, climb via the WRIGT TWO departure, HAVEN transition, departure frequency 125.1, squawk 4521.' What does 'as filed' include and NOT include?",
    choices: [
      "It includes the route and the filed cruising altitude",
      "It includes only the destination; the route will be issued after departure",
      "It includes the filed route and the DP; it does not include the filed altitude, which ATC must state separately",
      "It includes the route, altitude, and departure frequency from the flight plan"
    ],
    a: 2,
    exp: "AIM 5-2-6: 'cleared to (destination) airport as filed' means the route of flight is as filed, but it does NOT include the en route altitude from the flight plan. ATC states the DP name, number, and transition, and issues the altitude (here through the 'climb via' instruction, which assigns the SID's published altitudes and top altitude). Ask for clarification if any portion is unclear."
  },
  {
    id: "comms-mcq-006", type: "mcq", topic: "comms", ref: "AIM 5-2-2", tags: ["kt","ira","atp"],
    q: "An airline crew receives an IFR clearance by Pre-Departure Clearance (PDC) through ACARS. What acknowledgment is required?",
    choices: [
      "A full voice readback to clearance delivery",
      "A datalink acceptance message, as for CPDLC-DCL",
      "A readback of the transponder code only",
      "No acknowledgment or readback is required for a PDC"
    ],
    a: 3,
    exp: "AIM 5-2-2 states that no acknowledgment of receipt or readback is required for a PDC; the crew contacts clearance delivery by voice only if there is a question or concern. CPDLC-DCL is different: it requires a flight-crew response through the datalink. In both cases the crew still verifies the route and altitude against the flight plan and loads it into the FMS."
  },
  {
    id: "comms-mcq-007", type: "mcq", topic: "comms", ref: "AIM 5-3-8; P/CG", tags: ["kt","ira"],
    q: "ATC issues holding instructions with 'expect further clearance at 1545.' What is the purpose of that time?",
    choices: [
      "It is the time to depart the fix if two-way communications are lost, and the basis for the pilot's fuel decision",
      "It is the time you must leave the holding fix regardless of further instructions",
      "It is advisory only and has no procedural significance",
      "It is the time ATC will cancel your IFR clearance if you have not landed"
    ],
    a: 0,
    exp: "The EFC time has two jobs: it tells you how long the delay is expected to be so you can manage fuel and an alternate, and under 91.185 it is the time at which you leave the fix if communications fail. If ATC extends your hold, you receive a new EFC. You do not leave the fix at the EFC on your own if you are still talking to ATC; you ask."
  },
  {
    id: "comms-mcq-008", type: "mcq", topic: "comms", ref: "AIM 5-3-2; P/CG", tags: ["kt","ira"],
    q: "While IFR in a radar environment you hear 'Radar contact lost.' What changes?",
    choices: [
      "Your IFR clearance is cancelled and you must proceed VFR",
      "You resume making position reports over compulsory reporting points and the other non-radar reports",
      "Nothing; the phrase is informational and you continue as before",
      "You must squawk 7600 until radar contact is re-established"
    ],
    a: 1,
    exp: "AIM 5-3-2: position reports over designated reporting points are suspended once ATC says 'radar contact,' and must be resumed when ATC advises 'radar contact lost' or 'radar service terminated.' The non-radar additional reports in 5-3-3 also come back: leaving the FAF or outer marker inbound, and revised ETAs off by more than 2 minutes. The clearance itself is unchanged."
  },
  {
    id: "comms-mcq-009", type: "mcq", topic: "comms", ref: "AIM 5-3-2(d)", tags: ["kt","ira"],
    q: "Which list correctly gives the items of an IFR position report in a non-radar environment, in the AIM order?",
    choices: [
      "Position, time, altitude, identification, next fix, remarks",
      "Identification, altitude, groundspeed, position, time, destination ETA",
      "Identification, position, time, altitude, ETA and name of next reporting point, name of the following reporting point, remarks",
      "Identification, position, altitude, time, fuel remaining, next fix"
    ],
    a: 2,
    exp: "AIM 5-3-2 lists: identification; position; time; altitude or flight level; type of flight plan (not required when reporting directly to ARTCC or approach control); ETA and name of the next reporting point; name only of the next succeeding reporting point; pertinent remarks. Example: 'Center, Cessna 12345, over PEAKS at 1522, 7,000, estimating RIDGE at 1541, VALLY next.'"
  },
  {
    id: "comms-mcq-010", type: "mcq", topic: "comms", ref: "AIM 4-4-7(b); AIM 5-3-3", tags: ["kt","ira"],
    q: "Cleared from 7,000 to climb and maintain 11,000, the correct readback and report is:",
    choices: [
      "'Roger, 11,000'",
      "'Climb and maintain one one thousand, Cessna 345'",
      "'One one thousand' with no call sign, since ATC knows who was called",
      "'Leaving seven thousand, climbing to one one thousand, Cessna 345'"
    ],
    a: 3,
    exp: "Combine the readback with the required report: AIM 5-3-3 says to report, without request, when leaving any assigned altitude for a newly assigned one, and AIM 4-4-7 says every readback includes the call sign. 'Leaving seven thousand, climbing to one one thousand' plus the call sign does both and gives the controller a check that you heard the right number. Altitudes above 9,900 are spoken as separate digits before 'thousand'."
  },
  {
    id: "comms-mcq-011", type: "mcq", topic: "comms", ref: "AIM 4-2-9; AIM 4-2-8", tags: ["kt"],
    q: "Which altitude or frequency is spoken correctly per AIM phraseology?",
    choices: [
      "10,000 ft as 'one zero thousand'",
      "FL 190 as 'flight level nineteen zero'",
      "12,500 ft as 'twelve thousand five hundred'",
      "122.1 as 'one twenty-two point one'"
    ],
    a: 0,
    exp: "AIM 4-2-8 and 4-2-9: altitudes below 18,000 are stated as separate digits for the thousands plus hundreds, so 12,500 is 'one two thousand five hundred' and 10,000 is 'one zero thousand'. Flight levels use separate digits: 'flight level one niner zero'. Frequencies are separate digits with 'point': 'one two two point one'. Round hundreds and thousands up to 9,900 may be spoken as words, such as 'four thousand five hundred'."
  },
  {
    id: "comms-mcq-012", type: "mcq", topic: "comms", ref: "AIM 4-1-20; AIM 6-2-2", tags: ["kt"],
    q: "When changing a transponder from 1200 to 7200 as instructed, the AIM recommends which practice?",
    choices: [
      "Select standby, dial the new code, then return to ALT",
      "Dial the code in a sequence that avoids momentarily passing through 7500, 7600, or 7700",
      "Dial 7700 first, wait for ATC acknowledgment, then set 7200",
      "Squawk ident immediately after setting the new code"
    ],
    a: 1,
    exp: "AIM 4-1-20 cautions against inadvertent selection of 7500, 7600, or 7700 during routine changes because automated ground equipment may trigger a false alarm: change 1200 to 2200 and then 7200, not 7700 and then 7200. Switching to standby drops your target and is not recommended. Ident is used only when ATC requests it."
  },
  {
    id: "comms-mcq-013", type: "mcq", topic: "comms", ref: "AIM 4-2-13; 14 CFR 91.125", tags: ["kt","cax"],
    q: "Your transmitter fails while inbound VFR to a Class D airport in daylight. After joining the pattern you receive a steady green light from the tower. What does it mean and how should you acknowledge?",
    choices: [
      "Give way and continue circling; no acknowledgment is possible",
      "Return for landing; acknowledge by flashing the landing light",
      "Cleared to land; acknowledge by rocking the wings",
      "Cleared for takeoff; acknowledge by moving the ailerons"
    ],
    a: 2,
    exp: "To an aircraft in flight, steady green means cleared to land (flashing green: return for landing; steady red: give way and continue circling; flashing red: airport unsafe, do not land; alternating red and green: exercise extreme caution). AIM 4-2-13: with a transmitter inoperative, acknowledge by rocking the wings in daylight or blinking the landing or navigation lights at night. On the ground in daylight, acknowledge by moving ailerons or rudder. Squawk 7600 if the transponder works."
  },
  {
    id: "comms-mcq-014", type: "mcq", topic: "comms", ref: "AIM 6-3-1; AIM 6-3-2", tags: ["kt"],
    q: "What is the difference between MAYDAY and PAN-PAN, and how is each spoken?",
    choices: [
      "MAYDAY is for any abnormal situation; PAN-PAN is for medical problems; each is spoken once",
      "MAYDAY requires ATC permission; PAN-PAN does not",
      "MAYDAY is used only over water; PAN-PAN is used over land",
      "MAYDAY signals distress (grave and imminent danger requiring immediate assistance); PAN-PAN signals urgency (safety concern not requiring immediate assistance); each is preferably spoken three times"
    ],
    a: 3,
    exp: "AIM 6-3-1: distress communications have absolute priority and begin with MAYDAY, preferably repeated three times; urgency communications begin with PAN-PAN, also spoken three times, and have priority over everything except distress. Distress is a condition of being threatened by serious or imminent danger; urgency is a concern about safety that does not demand immediate assistance. The message then contains station called, identification and type, nature of the problem, weather, intentions, position, altitude, fuel in minutes, and souls on board."
  },
  {
    id: "comms-mcq-015", type: "mcq", topic: "comms", ref: "AIM 5-5-15; AIM 6-3-1", tags: ["kt","ira"],
    q: "What does declaring 'minimum fuel' accomplish, and when should you instead declare an emergency for fuel?",
    choices: [
      "'Minimum fuel' is an advisory that you cannot accept undue delay, with no priority implied; declare an emergency and state fuel remaining in minutes when you need priority to land safely",
      "'Minimum fuel' gives you traffic priority; declare an emergency only if the engine quits",
      "'Minimum fuel' is the Part 121 term; Part 91 pilots must always declare an emergency",
      "'Minimum fuel' requires a written report; an emergency declaration does not"
    ],
    a: 0,
    exp: "AIM 5-5-15: 'minimum fuel' tells ATC that on reaching the destination you cannot accept any undue delay. It is not an emergency and does not imply a need for traffic priority; it alerts controllers to avoid adding delay. If the remaining usable fuel suggests you need priority to ensure a safe landing, declare an emergency due to low fuel and report fuel remaining in minutes. Use 'minimum fuel' on initial contact right after the call sign."
  },
  {
    id: "comms-mcq-016", type: "mcq", topic: "comms", ref: "AIM 4-2-14; AIM 7-1-5", tags: ["kt"],
    q: "Which statement about Flight Service frequencies is correct today?",
    choices: [
      "Flight Watch (EFAS) on 122.0 provides en route weather nationwide",
      "122.2 is the common FSS frequency; EFAS on 122.0 was discontinued in 2015 and in-flight weather is obtained from FSS on 122.2 or the published RCO frequencies",
      "FSS is contacted only on 121.5",
      "In-flight weather updates are available only through ATC"
    ],
    a: 1,
    exp: "The dedicated En Route Flight Advisory Service ('Flight Watch') on 122.0 ended in 2015; its functions were consolidated into Flight Service on 122.2 and the discrete remote communications outlet frequencies shown on charts. Call 'Radio' with your call sign and the frequency you are on, and listen on the VOR frequency when a chart shows receive-only service. 121.5 is the emergency frequency, not a routine FSS channel."
  },
  {
    id: "comms-mcq-017", type: "mcq", topic: "comms", ref: "AIM 4-1-9", tags: ["kt","cax"],
    q: "At a non-towered airport, the AIM recommends self-announcing on the CTAF at which points when departing?",
    choices: [
      "Only before taking the runway",
      "After takeoff only, stating direction of flight",
      "Before taxiing and before taxiing onto the runway for departure",
      "Every 2 minutes while in the pattern"
    ],
    a: 2,
    exp: "AIM 4-1-9's recommended practice is to announce before taxiing and before taxiing onto the runway for departure, and, when departing the pattern, to announce the direction of departure. Arriving aircraft call 10 miles out, entering downwind, base, final, and leaving the runway. Use the airport name at the beginning and end of each transmission, and never say 'any traffic in the area please advise'."
  },
  {
    id: "comms-mcq-018", type: "mcq", topic: "comms", ref: "AIM 4-1-15", tags: ["kt","cax"],
    q: "VFR radar traffic advisories (flight following) are provided:",
    choices: [
      "As a mandatory service that relieves the pilot of see-and-avoid responsibility",
      "Automatically to any aircraft with ADS-B Out",
      "Only in Class B and C airspace",
      "On request, workload permitting; the pilot remains responsible to see and avoid, and vectors away from traffic are given only if requested"
    ],
    a: 3,
    exp: "AIM 4-1-15: traffic information to VFR aircraft is provided when requested and when the controller believes they are in a position to provide it; it does not relieve the pilot of continual vigilance to see and avoid, and VFR advisory service does not include vectors away from traffic unless the pilot asks. Expect 'radar service terminated, squawk VFR' when leaving the controller's area or when workload requires."
  },
  {
    id: "comms-mcq-019", type: "mcq", topic: "comms", ref: "P/CG; AIM 4-4-1", tags: ["kt","ira"],
    q: "ATC says 'Unable' to your request, or you need to decline an ATC instruction. Which statement is correct?",
    choices: [
      "A pilot who cannot comply should say 'unable' and, when practical, the reason; 'unable' from ATC means the request cannot be approved",
      "A pilot may never refuse a clearance once ATC issues it",
      "'Unable' is reserved for emergencies",
      "'Unable' must be followed by squawking 7700"
    ],
    a: 0,
    exp: "The Pilot/Controller Glossary defines UNABLE as indicating inability to comply with a specific instruction, request, or clearance, used by both pilots and controllers. AIM 4-4-1 and 91.123 make it the pilot's responsibility to accept or refuse a clearance; 'unable' with a short reason ('unable, terrain' or 'unable, icing at that altitude') gets you an alternative. It is not an emergency declaration."
  },
  {
    id: "comms-mcq-020", type: "mcq", topic: "comms", ref: "AIM 6-2-4; AIM 6-3-1", tags: ["kt"],
    q: "Regarding 121.5 MHz, the AIM encourages pilots to:",
    choices: [
      "Transmit a position report on it every 30 minutes over remote areas",
      "Monitor it in flight when a receiver is available, and listen for an ELT before engine shutdown",
      "Use it as a backup air-to-air chat frequency",
      "Avoid monitoring it, since only ATC and SAR are authorized to listen"
    ],
    a: 1,
    exp: "AIM 6-2-4 encourages pilots to monitor 121.5 and/or 243.0 in flight when a receiver is available and to listen briefly before engine shutdown to catch an inadvertent ELT activation. 121.5 is also the frequency on which ATC will try to reach a NORDO aircraft and on which intercepting military aircraft communicate. Testing an analog ELT is permitted only in the first 5 minutes after the hour, limited to three audible sweeps."
  },
  {
    id: "comms-mcq-021", type: "mcq", topic: "comms", ref: "AIM 4-2-4", tags: ["kt"],
    q: "On initial contact with a facility, the AIM says a civil pilot should state the aircraft identification how?",
    choices: [
      "The last three characters of the registration only",
      "'November' plus the full registration, never the aircraft type",
      "The aircraft type or manufacturer followed by the full registration characters, omitting the 'N'",
      "The flight school's call sign plus the pilot's name"
    ],
    a: 2,
    exp: "AIM 4-2-4: civil aircraft state the type or manufacturer and the registration characters, dropping the 'N' when a type is used, as in 'Cessna Three One Six Zero Foxtrot'. Never abbreviate on initial contact or when similar call signs are on frequency; once ATC abbreviates (prefix plus last three characters) the pilot may follow. Abbreviation protects against call-sign confusion, which is a leading cause of readback errors."
  },
  // ───────────── COMMS card ─────────────
  {
    id: "comms-card-001", type: "card", topic: "comms", ref: "AIM 4-4-7(b); AIM 4-3-18(a)(9)", tags: ["kt","ira"],
    front: "What must be read back? (airborne and on the ground)",
    back: "Airborne (4-4-7): altitude assignments, vectors, runway assignments; always with call sign; in the sequence given; charted altitudes not read back unless stated.\nTaxi (4-3-18): runway assignment; any clearance to enter a runway; any hold-short or line-up-and-wait instruction, with full runway designator.\nATC must obtain a readback of every hold-short."
  },
  {
    id: "comms-card-002", type: "card", topic: "comms", ref: "AIM 4-4-3; AIM 5-2-6", tags: ["kt","ira"],
    front: "CRAFT, and what 'cleared as filed' does and does not include",
    back: "C clearance limit, R route (DP + transition), A altitude (initial / expect), F departure frequency, T transponder.\n'Cleared ... as filed' = route as filed; does NOT include filed altitude; ATC states DP name, number, and transition.\nAsk for clarification of anything not understood."
  },
  {
    id: "comms-card-003", type: "card", topic: "comms", ref: "AIM 5-3-2; AIM 5-3-3", tags: ["kt","ira"],
    front: "Non-radar position report format and the extra non-radar reports",
    back: "ID, position, time, altitude/FL, (type of flight plan unless to ARTCC/approach), ETA + name of next fix, name only of the following fix, remarks.\nResume reports after 'radar contact lost' or 'radar service terminated'.\nNon-radar extras: leaving FAF/OM inbound; revised ETA when off by more than 2 min (3 min North Atlantic)."
  },
  {
    id: "comms-card-004", type: "card", topic: "comms", ref: "AIM 4-2-8; 4-2-9; 4-2-10; 4-2-11", tags: ["kt"],
    front: "Numbers phraseology: altitudes, flight levels, frequencies, headings, speeds",
    back: "Up to 9,900: words ('four thousand five hundred'). Above: digits + thousand ('one zero thousand', 'one three thousand five hundred').\nFL: 'flight level two three zero'.\nFrequency: 'one two two point one'.\nHeadings three digits, magnetic: 'heading zero five zero'.\nSpeed: 'two five zero knots'; 'Mach point seven eight'.\n9 = 'niner'."
  },
  {
    id: "comms-card-005", type: "card", topic: "comms", ref: "14 CFR 91.125; AIM 4-3-13; AIM 4-2-13", tags: ["kt","cax"],
    front: "Light gun signals (ground / in flight) and how to acknowledge",
    back: "Steady green: cleared for takeoff / cleared to land.\nFlashing green: cleared to taxi / return for landing.\nSteady red: stop / give way, continue circling.\nFlashing red: taxi clear of runway / airport unsafe, do not land.\nFlashing white: return to starting point (ground only).\nAlternating red-green: extreme caution.\nAck: day rock wings (flight) or move ailerons/rudder (ground); night blink landing/nav lights. Squawk 7600."
  },
  {
    id: "comms-card-006", type: "card", topic: "comms", ref: "AIM 6-3-1; AIM 5-5-15; AIM 4-1-20", tags: ["kt"],
    front: "Emergency and special-purpose phraseology and codes",
    back: "MAYDAY ×3 = distress; PAN-PAN ×3 = urgency; 121.5 / 243.0.\n'Minimum fuel' = advisory, no priority; need priority → declare emergency, give fuel in minutes.\nSquawk: 1200 VFR, 7500 hijack, 7600 lost comm, 7700 emergency; avoid dialing through them.\n'Squawk ident' = press IDENT only when asked.\n'Unable' = cannot comply (pilot or ATC)."
  },
  // ───────────── COMMS scenarios ─────────────
  {
    id: "comms-scn-001", type: "scenario", topic: "comms", ref: "AIM 4-3-18; AIM 5-2-5", tags: ["cax","ira"],
    q: "Taxiing a Seminole at a busy Class C airport, you hear: 'Seminole 46 Lima, taxi to runway 26 Left via Alpha, Charlie, hold short of runway 17.' You read back 'Alpha, Charlie, hold short 17, 46 Lima' and ground does not correct you. Approaching runway 17 you see no traffic. What is the correct action?",
    choices: [
      "Cross runway 17, since ground saw no conflict and did not repeat the hold-short",
      "Switch to tower and request takeoff clearance from the hold-short point",
      "Cross if you can see both approach ends are clear, then advise ground you are across",
      "Stop short of runway 17 at the hold line and wait for an explicit crossing clearance, then read it back with the runway number"
    ],
    a: 3,
    exp: "A hold-short instruction is in force until ATC explicitly clears you across that specific runway, and you must read that crossing clearance back with the runway number (AIM 4-3-18). The absence of traffic is irrelevant; runway incursions happen because pilots assumed. Note that your readback also omitted the runway assignment '26 Left', which AIM 4-3-18(a)(9) lists as a required readback item; include it next time. Contacting tower from the hold line is premature because you are not yet at your departure runway."
  },
  {
    id: "comms-scn-002", type: "scenario", topic: "comms", ref: "AIM 5-5-15; AIM 6-3-1; 14 CFR 91.3", tags: ["ira","cax"],
    q: "In a C172S IFR at night, you have been vectored around weather and then held for 20 minutes. By your calculation you will land at the destination with 40 minutes of fuel if there are no further delays, but a second vector or a missed approach would leave you below 30 minutes. Approach has just told you to expect another 10-minute delay. What is the best communication?",
    choices: [
      "State 'minimum fuel' now, and if the additional delay is confirmed declare an emergency for low fuel giving fuel remaining in minutes and requesting priority",
      "Advise 'minimum fuel' and continue to accept whatever delay is assigned",
      "Say nothing yet; 40 minutes still meets the 91.167 IFR reserve",
      "Declare MAYDAY immediately and refuse all further vectors"
    ],
    a: 0,
    exp: "Per AIM 5-5-15, 'minimum fuel' is the right call the moment you cannot accept undue delay, and it is not an emergency. When the controller then adds a delay, your remaining fuel no longer supports a safe landing with margin, which is exactly the trigger the AIM gives for declaring an emergency due to low fuel and stating fuel in minutes. 91.167 reserves are planning numbers, not an in-flight comfort level. A MAYDAY with 40 minutes and no delay yet is premature, but waiting until the engine sputters is the fatal error; the staged approach gets you priority while it still helps."
  },
  {
    id: "comms-scn-003", type: "scenario", topic: "comms", ref: "AIM 4-2-13; 14 CFR 91.125; AIM 6-4-2", tags: ["cax"],
    q: "Returning VFR to your home Class D airport in a C172S, you realize you can hear tower but they cannot hear you; the transponder works. It is daytime, winds favor runway 18, and you are 8 miles north. What should you do?",
    choices: [
      "Enter the pattern directly on a left downwind for 18 and land; the tower will see you",
      "Squawk 7600, remain outside or above the Class D until you have determined the traffic flow, then enter the pattern, continue to monitor tower, watch for light signals, and acknowledge them by rocking your wings",
      "Divert to the nearest non-towered airport, since Class D entry requires two-way communication",
      "Circle outside the Class D until the tower closes, then land under Class E rules"
    ],
    a: 1,
    exp: "AIM 4-2-13 covers exactly this: with the transmitter inoperative, remain outside or above the Class D surface area until the direction and flow of traffic are determined, then join the pattern and watch for light signals, acknowledging in daylight by rocking the wings. Squawk 7600 so the controller knows why you are not answering. 91.129 allows entry to Class D without two-way radio when the tower authorizes it, which the light signals accomplish; diverting is a reasonable backup but not required. Entering directly without observing the flow is how NORDO aircraft create conflicts."
  },
  // ───────────── COMMS oral ─────────────
  {
    id: "comms-oral-001", type: "oral", topic: "comms", ref: "AIM 4-4-7; AIM 4-3-18", tags: ["ira","cax"],
    q: "What are you required to read back to ATC, and what do you choose to read back beyond that?",
    answer: "The AIM says airborne pilots should read back the parts of a clearance or instruction that contain altitude assignments, vectors, and runway assignments, always with my call sign and in the order given, and that charted altitudes on a SID or approach are not read back unless the controller states them. On the ground, I read back the runway assignment, any clearance to enter or cross a runway, and any hold-short or line-up-and-wait instruction, with the full runway designator including left or right. ATC is required to get a readback of every hold-short. Beyond that I read back a full IFR clearance, frequency changes, and the altimeter when it is part of a descent clearance, because those are the items where a mis-hear hurts; I do not parrot traffic calls or ATIS acknowledgments.",
    points: ["Airborne: altitudes, vectors, runway assignments, with call sign","Ground: runway assignment, runway entry/crossing, hold short, LUAW with full designator","ATC must obtain hold-short readbacks","Charted procedure altitudes not read back unless stated","Full IFR clearance and frequency changes as good practice"]
  },
  {
    id: "comms-oral-002", type: "oral", topic: "comms", ref: "AIM 5-3-2; AIM 5-3-3", tags: ["ira"],
    q: "You are IFR and the controller says 'radar contact lost'. What reports are you now responsible for?",
    answer: "Once radar contact is lost I go back to non-radar reporting. That means a position report over every compulsory reporting point on my route, or over the fixes that define a direct route, in the AIM format: identification, position, time, altitude, estimate and name of the next fix, the name of the one after that, and remarks. I also make the non-radar additional reports: leaving the final approach fix or outer marker inbound, and a corrected estimate whenever my previous estimate is off by more than two minutes. The reports required at all times continue: leaving an assigned altitude, a missed approach, inability to climb or descend at 500 fpm, a true airspeed change of 5 percent or 10 knots, reaching or leaving a holding fix, and any navigation or communication equipment loss.",
    points: ["Resume compulsory and route-defining position reports","Format: ID, position, time, altitude, next fix ETA, following fix, remarks","Non-radar extras: FAF/OM inbound; ETA error over 2 minutes","Always-required reports continue (altitude changes, missed, 500 fpm, TAS change, holding, equipment loss)"]
  },
  {
    id: "comms-oral-003", type: "oral", topic: "comms", ref: "AIM 6-3-1; AIM 6-3-2; 14 CFR 91.3", tags: ["cax","ira"],
    q: "When would you use MAYDAY versus PAN-PAN, what goes in the message, and what are you worried about with the paperwork afterward?",
    answer: "MAYDAY is for distress, a condition of grave and imminent danger that needs immediate help, such as an engine failure or fire. PAN-PAN is for urgency, a safety-of-flight concern that does not need immediate assistance, such as being lost, a rough-running engine, or a sick passenger who is stable. Either word is spoken three times, then the station called, my identification and type, the nature of the problem, weather, intentions and request, position and heading, altitude, fuel remaining in minutes, and souls on board. Under 91.3(b) I can deviate from any Part 91 rule to the extent required by the emergency, and under 91.3(c) I only send a written report if the Administrator asks for one. The paperwork fear is overblown; declaring late is what gets people hurt.",
    points: ["MAYDAY: distress, immediate assistance; PAN-PAN: urgency","Each spoken three times; 121.5 if no other frequency","Message contents in AIM 6-3-2 order","91.3(b) deviation authority; 91.3(c) report only on request","Declare early; paperwork is not a reason to wait"]
  },
  {
    id: "comms-oral-004", type: "oral", topic: "comms", ref: "AIM 4-4-3; AIM 5-2-6; AIM 5-2-2", tags: ["ira","atp"],
    q: "Describe how you receive and verify an IFR clearance, from a voice clearance at a small tower to a PDC at an airline.",
    answer: "At a tower or FSS I call clearance delivery with my call sign, type, destination, and ATIS code, and I have CRAFT written out: clearance limit, route, altitude, frequency, transponder. I read back the full clearance in the order given with my call sign and ask for clarification on anything I did not understand. 'Cleared as filed' means my filed route, but it never includes my filed altitude, and the controller will state the SID name, number, and transition. With a PDC the clearance arrives by ACARS; no readback or acknowledgment is required, but I still compare it line by line with the flight plan, load and verify the route in the FMS, and call clearance delivery by voice if anything is off. With CPDLC-DCL the system requires a response from the crew, and a revised clearance must be reviewed and accepted the same way.",
    points: ["CRAFT prepared before calling; full readback with call sign","'As filed' excludes altitude; SID name, number, transition stated","PDC: no readback required; verify against flight plan and FMS","CPDLC-DCL requires a crew response","Request clarification for anything not understood"]
  },
  // ═════════════════════════════════════════════════════════════════
  //  EMERG — Emergency Procedures
  // ═════════════════════════════════════════════════════════════════
  {
    id: "emerg-mcq-001", type: "mcq", topic: "emerg", ref: "AFH Ch. 18; C172S POH Sec. 3", tags: ["cax","c172"],
    q: "The engine fails at 5,500 ft AGL in a C172S during cruise. What is the first action?",
    choices: [
      "Pitch for best glide (68 KIAS) and trim, then pick a landing area",
      "Switch fuel tanks and turn on the auxiliary fuel pump",
      "Transmit a MAYDAY on 121.5",
      "Pull the mixture to idle cutoff to prevent a fire"
    ],
    a: 0,
    exp: "The ABCDE flow starts with Airspeed: establish best glide (68 KIAS at max weight in the 172S, slightly less when light) because every second spent above or below it costs altitude you cannot get back. Then Best field, then the Checklist (restart flow: fuel selector BOTH, fuel shutoff in, mixture rich, aux pump on, magnetos BOTH or START), then Declare on the frequency you are already on or 121.5, and Exit preparation. Pulling the mixture is the engine-fire response, not the engine-failure one."
  },
  {
    id: "emerg-mcq-002", type: "mcq", topic: "emerg", ref: "C172S POH Sec. 3; AFH Ch. 18", tags: ["cax","c172"],
    q: "Which sequence best matches the C172S restart flow after an engine failure in flight?",
    choices: [
      "Master off, magnetos off, fuel selector off, then back on in reverse order",
      "Fuel selector BOTH, fuel shutoff valve in (ON), mixture rich, auxiliary fuel pump on, magnetos BOTH (then START if the propeller is stopped)",
      "Throttle idle, carburetor heat on, primer locked, magnetos START",
      "Alternator off, avionics off, throttle full, magnetos LEFT"
    ],
    a: 1,
    exp: "The fuel-injected IO-360 has no carburetor heat; the restart items are the things that stop an engine: fuel path (selector BOTH, shutoff valve in, aux pump on), mixture (rich), and ignition (magnetos BOTH). If the propeller has stopped windmilling, use START. Carburetor heat is a Seminole item (O-360 carbureted). Shutting the master would kill the aux pump and the starter. Verify the sequence against the POH checklist for your serial number."
  },
  {
    id: "emerg-mcq-003", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "For an engine fire in flight, the AFH guidance is to:",
    choices: [
      "Reduce power, keep the engine running to maintain oil pressure, and land",
      "Turn off the master switch first to remove ignition sources, then dive to blow out the fire",
      "Shut off fuel to the engine (mixture idle cutoff, fuel selector off), and if the fire goes out do not attempt a restart",
      "Open the cabin vents to clear smoke, then restart once the fire is out"
    ],
    a: 2,
    exp: "AFH Chapter 18: the first step is to stop feeding the fire by shutting off fuel (mixture cutoff and fuel selector or shutoff valve off) unless the POH says otherwise; the ignition can be left on briefly to burn fuel remaining in the lines. If the flames go out, no attempt should be made to restart; land as soon as possible. The master switch is not an automatic step because it removes the radios and transponder; consider it only for an electrical fire or when a crash landing is imminent. Closing cabin heat and vents is a POH item to keep smoke out, not opening them."
  },
  {
    id: "emerg-mcq-004", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "You smell burning insulation in the cabin and see a wisp of smoke from behind the panel. The best initial action is to:",
    choices: [
      "Open the windows and continue to destination",
      "Pull all circuit breakers at once, then reset them one by one in flight",
      "Turn the alternator off but leave the battery on so the avionics keep running",
      "Attempt to identify and isolate the faulty circuit; if you cannot, and conditions permit, turn off the battery master and alternator, and land as soon as possible"
    ],
    a: 3,
    exp: "AFH Chapter 18: burning insulation smell is the usual first sign of an electrical fire. Try to identify and isolate the faulty circuit (pull the breaker or switch off the item); if that fails and conditions allow, remove all electrical power with the master and alternator switches, use the extinguisher if needed, and land as soon as possible. Resetting breakers that tripped with smoke is prohibited by most POHs. Vent the cabin after the fire is out, because fresh air feeds flames."
  },
  {
    id: "emerg-mcq-005", type: "mcq", topic: "emerg", ref: "C172S POH Sec. 3 & 7; IFH Ch. 11", tags: ["ira","c172"],
    q: "In IMC the C172S shows a LOW VOLTS annunciation with the ammeter indicating discharge. After recycling the ALT side of the master once without success, the best plan is to:",
    choices: [
      "Shed non-essential electrical load, keep one nav/com and the transponder, advise ATC, and land at the nearest suitable airport, planning on roughly 30 minutes of battery (verify the POH figure for your airplane)",
      "Continue to destination 90 minutes away; the battery will hold the avionics for several hours",
      "Turn the master off completely to save the battery and navigate by magnetic compass until the approach",
      "Switch to the standby alternator and continue normally"
    ],
    a: 0,
    exp: "With the alternator offline everything runs on the battery, and the POH-based planning number is on the order of 30 minutes with load reduced; treat it as a budget, not a promise, and verify against your POH and the G1000 standby battery figures if equipped. Turn off everything not needed (second radio, lights, pitot heat only if clear of icing), tell ATC early so they can plan an expedited approach, and land at the nearest suitable airport. The 172S has no standby alternator. Turning the master off in IMC removes the attitude information you need in a G1000 airplane."
  },
  {
    id: "emerg-mcq-006", type: "mcq", topic: "emerg", ref: "PA-44 POH Sec. 3 & 7", tags: ["cax","pa44"],
    q: "The landing gear in a PA-44 Seminole fails to extend normally. How does the emergency extension work?",
    choices: [
      "A hand pump pressurizes the hydraulic system to force the gear down",
      "The emergency gear lever releases hydraulic pressure so the gear free-falls, assisted by springs and airload, after slowing to the POH speed",
      "A CO2 bottle blows the gear down and locked",
      "An electric backup motor drives the gear through a screw jack"
    ],
    a: 1,
    exp: "The Seminole gear is hydraulic, driven by an electric pump; the emergency extension lever releases pressure in the system so the gear falls by gravity, with springs assisting the nose gear and airloads helping the mains. The POH procedure also has you slow below the emergency extension speed, select gear down, and yaw if needed to help the locks engage, then confirm three green. Verify the exact speed and steps in your POH. There is no hand pump or CO2 blow-down in this airplane."
  },
  {
    id: "emerg-mcq-007", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax","c172"],
    q: "Immediately after takeoff in a single, the engine fails at 400 ft AGL. Based on the Airplane Flying Handbook, the lowest-risk action is generally to:",
    choices: [
      "Immediately turn back toward the departure runway",
      "Climb at Vx to gain altitude for a turnback",
      "Lower the nose to maintain flying speed and land straight ahead or with only slight turns",
      "Attempt a restart before lowering the nose"
    ],
    a: 2,
    exp: "AFH Chapter 18 states that continuing straight ahead or making a slight turn gives the pilot time to establish a safe landing attitude, and that a pilot who attempts to turn back without due consideration and training needs considerable luck. Its worked example shows a standard-rate turn from 300 ft ends about 1,000 ft below runway elevation. The first action is pitch down to hold glide speed; a restart attempt comes only after the airplane is under control and only if altitude permits. Decide your personal turnback altitude on the ground, not in the air."
  },
  {
    id: "emerg-mcq-008", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "A VFR pilot inadvertently enters IMC. The AFH's first priorities are:",
    choices: [
      "Descend immediately to regain visual contact with the ground",
      "Squawk 7700 and wait for ATC vectors before touching the controls",
      "Climb at Vy to get above the clouds",
      "Recognize the situation as an emergency, maintain control with wings level, trust the instruments over the inner ear, and use small, shallow-banked turns to get back to VMC and get help"
    ],
    a: 3,
    exp: "AFH Chapter 18 emphasizes recognition, maintaining airplane control with wings level as the top priority, trusting the instruments, trimming for level flight, and limiting bank to the smallest practical angle. A controlled turn back toward the conditions you just left is the usual exit, flown in small increments, and ATC should be told what is happening so they can help. Descending blindly toward terrain or climbing into unknown tops both trade one emergency for another. Instrument-rated pilots are not immune; the danger is the transition without a scan already running."
  },
  {
    id: "emerg-mcq-009", type: "mcq", topic: "emerg", ref: "AIM 7-1-19; AC 91-74B", tags: ["ira","cax","pa44"],
    q: "A Seminole with no ice protection encounters unforecast rime icing in cruise IMC. The best course of action is to:",
    choices: [
      "Exit the icing conditions immediately by changing altitude or course, tell ATC, and treat any accumulation as a reason to leave now rather than wait",
      "Continue and let the ice sublimate, since rime is light and self-shedding",
      "Slow to best glide speed to reduce the impact rate of droplets",
      "Descend to the minimum IFR altitude and hold there until the ice melts"
    ],
    a: 0,
    exp: "An airplane without approved ice protection has no legal or practical option other than leaving the conditions: climb above the layer if the tops are known and close, descend to warmer air if terrain allows, or turn around. Tell ATC and use the word 'unable' if the assigned altitude keeps you in ice. Slowing raises the angle of attack and exposes more of the lower wing to accretion. For airplanes with boots, the manufacturer's procedure governs activation; the old advice to wait for a thick layer before cycling is no longer recommended by most manufacturers, so follow the AFM if equipped."
  },
  {
    id: "emerg-mcq-010", type: "mcq", topic: "emerg", ref: "AFH Ch. 18; IFH Ch. 5", tags: ["ira","cax"],
    q: "During a descent in IMC, the altimeter seems to stop and the airspeed reads increasingly high as you descend while the VSI shows almost zero. The most likely cause is:",
    choices: [
      "A blocked pitot tube with the drain hole open",
      "A blocked static port or line",
      "A vacuum pump failure",
      "An encoder failure in the transponder"
    ],
    a: 1,
    exp: "With the static source blocked, the altimeter freezes at the altitude where the blockage occurred and the VSI stays near zero. The airspeed indicator compares pitot pressure to the trapped static pressure: as you descend into higher pitot pressure it reads higher than true. The AFH notes partial static blockage is insidious and may go unnoticed until a critical phase; confirm by opening the alternate static source while climbing or descending and use it for the rest of the flight. A pitot blockage affects the airspeed indicator only."
  },
  {
    id: "emerg-mcq-011", type: "mcq", topic: "emerg", ref: "AFH Ch. 18; IFH Ch. 5", tags: ["ira","cax"],
    q: "Flying in visible moisture with the pitot heat off, the airspeed indicator begins to behave like an altimeter, increasing in a climb and decreasing in a descent. What has happened?",
    choices: [
      "The static port is blocked",
      "The pitot ram inlet is blocked but the drain hole remains open",
      "The pitot tube ram inlet and drain hole are both blocked",
      "The alternate static source was left on"
    ],
    a: 2,
    exp: "When both the ram inlet and the drain are iced over, the pressure in the pitot line is trapped; the instrument then senses only the change in static pressure, so it reads higher as the airplane climbs and lower as it descends, exactly like an altimeter. If the inlet freezes but the drain stays open, the pitot pressure bleeds to ambient and the airspeed drops toward zero. Pitot heat on before entering visible moisture prevents the problem; if it is already there, pitot heat usually clears the ice in a few minutes."
  },
  {
    id: "emerg-mcq-012", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "The purpose and basic technique of an emergency descent are:",
    choices: [
      "Descend at Vne with gear and flaps up to minimize time; recover at pattern altitude",
      "Descend at Vy with full flaps to keep the airplane under control",
      "Descend at best glide to conserve altitude while troubleshooting",
      "Descend as rapidly as possible without exceeding structural limits: power idle, propeller high rpm, gear and flaps as the POH recommends, bank 30–45° while clearing, and recover with enough altitude to level off"
    ],
    a: 3,
    exp: "AFH Chapter 18: the emergency descent is used for fire, smoke, or loss of pressurization and is flown at the highest practical speed without exceeding Vne, Vle, or Vfe, with power at idle and the prop at high rpm so it acts as a brake, and in a 30–45° bank to clear for traffic and look for a landing area. Configuration depends on the POH (the Seminole uses the gear; the 172S has fixed gear and a flap limit of 110 KIAS at 10°). Begin the recovery high enough to return to level flight safely."
  },
  {
    id: "emerg-mcq-013", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "When ditching a low-wing retractable, the AFH recommends:",
    choices: [
      "Gear up unless the POH says otherwise, no more than intermediate flaps, touchdown at minimum speed in a normal landing attitude, and drag it in rather than diving toward smooth water",
      "Full flaps and gear down for the slowest touchdown",
      "A steep approach to minimize time over the water",
      "Gear down, full flaps, and a full-stall landing parallel to the swells"
    ],
    a: 0,
    exp: "AFH Chapter 18: a controlled touchdown at minimum speed in a normal landing attitude is less violent than a rough-terrain crash; keep retractable gear up unless the POH directs otherwise; on low-wing airplanes use no more than intermediate flaps because fully extended flaps can fail asymmetrically on contact; and because smooth water makes depth perception difficult, drag the airplane in rather than flying a steep descent. Land parallel to swells and into the wind when both can be managed. Intact wings and tanks can keep the airplane afloat for several minutes."
  },
  {
    id: "emerg-mcq-014", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "Choosing a field for a forced landing, which consideration is most consistent with the AFH?",
    choices: [
      "A road is always the best choice because the surface is paved",
      "Plan a low-speed, controlled touchdown into the wind in an open area, using the airplane's structure to absorb energy; avoid a steep nose-low approach",
      "Pick the field with the softest ground to cushion the impact, even if it means landing downwind",
      "Aim between obstacles so the wings strike them and stop the airplane quickly"
    ],
    a: 1,
    exp: "AFH Chapter 18 frames survival as managing deceleration: touch down under control at the slowest safe speed, into the wind when possible, in open terrain, and let the structure outside the cabin (wings, gear, belly) absorb energy. Roads invite wires and poles along the edges. A steep, nose-low approach concentrates the impact. Striking obstacles with the wings is a deliberate last resort in trees, where the handbook recommends low, dense canopy with both wings meeting resistance evenly, not a plan for an open field."
  },
  {
    id: "emerg-mcq-015", type: "mcq", topic: "emerg", ref: "14 CFR 91.3(b),(c)", tags: ["cax","ira","kt"],
    q: "Under 91.3, after a PIC deviates from a rule during an in-flight emergency requiring immediate action, what follows?",
    choices: [
      "A written report must be filed with the FSDO within 48 hours in every case",
      "The deviation must be reported to the NTSB within 10 days",
      "The PIC must send a written report of the deviation to the Administrator only upon request",
      "The pilot's certificate is automatically suspended pending investigation"
    ],
    a: 2,
    exp: "91.3(b) lets the PIC deviate from any rule of Part 91 to the extent required to meet an in-flight emergency requiring immediate action. 91.3(c) requires a written report only when the Administrator requests one. There is no automatic 48-hour report and no NTSB filing unless the event meets Part 830's accident or incident criteria. Declare early; the rule exists to protect the pilot who acts."
  },
  {
    id: "emerg-mcq-016", type: "mcq", topic: "emerg", ref: "AIM 6-2-4; 14 CFR 91.207", tags: ["kt"],
    q: "Which statement about ELTs is correct?",
    choices: [
      "An ELT may be tested at any time as long as the test lasts under 1 minute",
      "121.5 MHz ELTs are still tracked by satellite, so 406 MHz is optional",
      "ELT batteries must be replaced every 12 calendar months regardless of use",
      "406 MHz ELTs transmit a coded, registered signal to satellites and are stronger than 121.5 MHz units; satellites no longer monitor 121.5"
    ],
    a: 3,
    exp: "AIM 6-2-4: 406 MHz ELTs send a digital signal with the aircraft's registration to the COSPAS-SARSAT satellites, transmit a stronger signal, and most include a low-power 121.5 MHz homing signal; satellite monitoring of 121.5 ended in 2009, so a 121.5-only ELT relies on someone hearing it. 91.207 requires inspection every 12 calendar months and battery replacement after 1 hour of cumulative use or at 50 percent of useful life. Analog ELT tests are limited to the first 5 minutes after the hour and three sweeps."
  },
  {
    id: "emerg-mcq-017", type: "mcq", topic: "emerg", ref: "AFH Ch. 5", tags: ["cax","cfi"],
    q: "The PARE spin recovery sequence is:",
    choices: [
      "Power idle, Ailerons neutral, Rudder full opposite the rotation, Elevator briskly forward; then neutralize rudder when rotation stops and recover from the dive",
      "Pitch down, Ailerons into the spin, Rudder neutral, Engine full power",
      "Power full, Ailerons opposite, Rudder with the spin, Elevator back",
      "Power idle, Ailerons neutral, Rudder neutral, Elevator full aft until the nose rises"
    ],
    a: 0,
    exp: "AFH Chapter 5: power to idle removes the pro-spin effects of thrust and slipstream; neutral ailerons avoid aggravating the spin (aileron into the spin can flatten it in some airplanes); full rudder opposite the rotation stops the yaw; elevator forward breaks the stall. Once rotation stops, neutralize the rudder promptly to avoid entering a spin the other way, then recover from the resulting dive smoothly without a secondary stall. The POH recovery takes precedence if it differs."
  },
  {
    id: "emerg-mcq-018", type: "mcq", topic: "emerg", ref: "AFH Ch. 5; Commercial ACS", tags: ["cax","cfi"],
    q: "Per the ACS and current FAA guidance, the first and most important step in any stall recovery is:",
    choices: [
      "Apply full power to arrest the sink",
      "Reduce the angle of attack by moving the elevator forward",
      "Roll wings level with coordinated aileron and rudder",
      "Retract flaps to reduce drag"
    ],
    a: 1,
    exp: "A stall is an angle-of-attack event, so the recovery is an angle-of-attack reduction: pitch down (elevator forward) as the first action, then roll wings level, add power, and retract flaps and gear per the POH as the airplane accelerates. Power alone at high AOA can deepen the stall or produce a torque roll in a single; rolling first with ailerons at high AOA can drop a wing. The ACS evaluates whether the candidate reduces AOA promptly rather than fixating on minimum altitude loss."
  },
  {
    id: "emerg-mcq-019", type: "mcq", topic: "emerg", ref: "IFH Ch. 7; AFH Ch. 18", tags: ["ira","cax"],
    q: "You recognize a nose-low, high-airspeed, steeply banked unusual attitude (a spiral). The correct recovery order is:",
    choices: [
      "Pull back firmly to stop the descent, then level the wings",
      "Add power to prevent a stall, then roll level",
      "Reduce power, roll wings level, then raise the nose to level flight",
      "Extend flaps to slow down, then pull out"
    ],
    a: 2,
    exp: "In a spiral the airplane is well above stall speed and accelerating; pulling first while banked only tightens the spiral and raises the load factor. Reduce power to stop the acceleration, roll wings level with coordinated controls, then apply back pressure smoothly to return to level flight, watching airspeed and avoiding an overstress. Flaps at high speed could be structurally damaging. Nose-high recoveries reverse the order: power, lower the nose, then level the wings."
  },
  {
    id: "emerg-mcq-020", type: "mcq", topic: "emerg", ref: "AC 00-54; AIM 7-1-24", tags: ["cax","atp"],
    q: "Encountering a microburst on final with a rapid airspeed loss and increasing sink rate, the standard windshear escape is:",
    choices: [
      "Maintain the glide path by lowering the nose and reducing power to regain airspeed",
      "Continue the approach, since a microburst lasts only a few minutes",
      "Extend full flaps and gear to steepen the approach through the shear",
      "Apply maximum thrust, pitch to the recommended escape attitude, do not change configuration until clear, and accept airspeed below the reference until the shear ends"
    ],
    a: 3,
    exp: "The FAA Windshear Training Aid (AC 00-54) escape maneuver: full thrust, pitch up to the target attitude (about 15° in transport airplanes; whatever gives a positive climb without stalling in a light airplane), leave gear and flaps where they are, and respect the stick shaker or stall warning rather than a target airspeed. Chasing the glide path with the nose down is what converts a windshear encounter into ground contact. The real defense is avoidance: delay the approach when microburst indicators are present."
  },
  // ───────────── EMERG card ─────────────
  {
    id: "emerg-card-001", type: "card", topic: "emerg", ref: "C172S POH Sec. 3; AFH Ch. 18", tags: ["cax","c172"],
    front: "Engine failure in cruise, C172S: ABCDE and the restart flow",
    back: "A airspeed: best glide 68 KIAS, trim.\nB best field: within reach, into wind.\nC checklist/restart: fuel selector BOTH, fuel shutoff in, mixture rich, aux pump on, mags BOTH (START if prop stopped).\nD declare: 7700, MAYDAY on current freq or 121.5.\nE exit prep: securing items per POH (mixture cutoff, fuel off, mags off, master off when committed), belts tight, doors unlatched."
  },
  {
    id: "emerg-card-002", type: "card", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    front: "Engine fire in flight vs. electrical fire: the key differences",
    back: "Engine fire: stop the fuel (mixture cutoff, fuel selector/shutoff OFF), ignition can stay on briefly to burn lines dry, cabin heat/vents closed, emergency descent and land; NO restart if the fire goes out.\nElectrical fire: isolate the circuit if you can; otherwise master and alternator OFF, extinguisher, vent after the fire is out, land ASAP; do not reset breakers that tripped with smoke."
  },
  {
    id: "emerg-card-003", type: "card", topic: "emerg", ref: "AFH Ch. 18; IFH Ch. 5", tags: ["ira"],
    front: "Pitot-static failure signatures",
    back: "Pitot inlet + drain blocked: ASI acts like an altimeter (up in climb, down in descent).\nPitot inlet blocked, drain open: ASI drops toward zero.\nStatic blocked: altimeter frozen, VSI zero, ASI reads high in a descent and low in a climb.\nFix: pitot heat; alternate static (expect slight errors); break the VSI glass as a last resort."
  },
  {
    id: "emerg-card-004", type: "card", topic: "emerg", ref: "AFH Ch. 5; IFH Ch. 7; Commercial ACS", tags: ["cax","cfi"],
    front: "Stall, spin, and spiral recoveries in order",
    back: "Stall: reduce AOA (elevator forward) FIRST, roll level, power, clean up.\nSpin (PARE): Power idle, Ailerons neutral, Rudder full opposite, Elevator forward; neutralize rudder when rotation stops; recover from dive.\nSpiral (nose low): power reduce, roll level, then pitch up.\nNose high: power up, pitch down, then roll level."
  },
  {
    id: "emerg-card-005", type: "card", topic: "emerg", ref: "14 CFR 91.3; AIM 6-2-4; 14 CFR 91.207", tags: ["kt"],
    front: "Emergency authority and ELT facts",
    back: "91.3(b): PIC may deviate from any Part 91 rule to the extent required by an in-flight emergency.\n91.3(c): written report only if the Administrator requests.\nELT: 406 MHz registered digital signal to satellites; 121.5 homing only (satellite monitoring of 121.5 ended 2009).\n91.207: inspect every 12 calendar months; battery after 1 hr cumulative use or 50% life.\nTest: first 5 min after the hour, max 3 sweeps."
  },
  {
    id: "emerg-card-006", type: "card", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    front: "Engine failure after takeoff in a single: the AFH position on turning back",
    back: "Lowest risk is straight ahead or a slight turn: pitch down immediately to glide speed, land under control.\nA turnback needs altitude, a steep bank, and prior training; from 300 ft a standard-rate turn ends about 1,000 ft below the runway.\nDecide your turnback altitude before takeoff and brief it; do not attempt one unless you know it will succeed."
  },
  // ───────────── EMERG scenarios ─────────────
  {
    id: "emerg-scn-001", type: "scenario", topic: "emerg", ref: "AFH Ch. 18; C172S POH Sec. 3", tags: ["cax","c172"],
    q: "You are cruising a C172S at 6,500 ft MSL over farmland, terrain about 1,000 ft MSL, when the engine loses power and runs rough, then quits. You pitch for 68 KIAS. A paved airport is 8 NM ahead, into a 15-knot headwind; a large, flat, freshly harvested field is 2 NM to your right. What is the best decision?",
    choices: [
      "Head for the field 2 NM away, set up a high key over it, run the restart flow and declare while you have altitude to spare, and keep the airport out of the plan unless the engine restarts",
      "Head for the airport; 5,500 ft AGL at roughly 1.5 NM per 1,000 ft gives about 8 NM of glide",
      "Attempt the restart first and decide where to go once you see whether it works",
      "Descend at Vne toward the airport to minimize time in the air"
    ],
    a: 0,
    exp: "The no-wind glide of roughly 8 NM becomes much less into a 15-knot headwind at 68 KIAS (a groundspeed in the low 60s cuts the reach by roughly 20 percent), so the airport is marginal at best and arriving low over it with no options is the classic fatal outcome. The field is comfortably within reach, giving time to fly the restart flow, declare on 121.5 or the frequency in use, and brief the passengers while circling at a high key position. Choosing the field first and troubleshooting second is the ABCDE order; choosing to troubleshoot first wastes the altitude that makes the field easy."
  },
  {
    id: "emerg-scn-002", type: "scenario", topic: "emerg", ref: "PA-44 POH Sec. 3; AFH Ch. 13", tags: ["cax","pa44"],
    q: "In a PA-44 Seminole on downwind, you select gear down and get two green lights; the nose gear light stays out and the gear unsafe light is on. Recycling does not help. The fuel state is 20 gallons per side. What is the best sequence?",
    choices: [
      "Land immediately on the main gear and hold the nose off; the fuel is adequate and delaying only adds risk",
      "Leave the pattern, check the bulb and the circuit breaker, slow to the POH emergency-extension speed, perform the emergency (free-fall) extension and yaw to help the lock engage, have the tower confirm visually, and if still unsafe, burn fuel and prepare for a nose-gear-up landing",
      "Raise the gear and land gear-up on the grass to minimize damage",
      "Declare an emergency and request a tower fly-by without attempting the emergency extension"
    ],
    a: 1,
    exp: "The POH sequence is to first rule out an indication problem (bulb and breaker), then use the emergency extension: slow to the POH speed, release hydraulic pressure so the gear free-falls, and yaw the airplane to help the nose gear lock; a tower fly-by or a check with a mirror or ground observer confirms the gear position. With 40 gallons aboard there is time to do this methodically, and burning fuel down before any gear-compromised landing reduces fire risk and landing speed, as the AFH recommends. Landing immediately or choosing a gear-up landing skips the steps most likely to solve the problem. Verify speeds and steps in your POH."
  },
  {
    id: "emerg-scn-003", type: "scenario", topic: "emerg", ref: "C172S POH Sec. 3; AIM 5-5-15; 14 CFR 91.3", tags: ["ira","c172"],
    q: "Night IFR in a G1000 C172S, 45 minutes from destination in solid IMC with a 600-ft ceiling there. The ALT light illuminates and the main bus shows a discharge. The nearest airport with an ILS is 15 minutes away with a 1,200-ft ceiling; the destination has an RNAV approach to minimums close to its ceiling. You have reduced load. What is the best plan?",
    choices: [
      "Continue to destination; 45 minutes is within the battery's expected endurance",
      "Turn off the avionics master to conserve the battery and fly the remaining 45 minutes on the standby instruments, restoring power for the approach",
      "Declare an emergency, advise ATC of the electrical failure, and divert to the nearer airport with the better ceiling, requesting vectors to the ILS and keeping only essential equipment powered",
      "Climb to VMC on top and proceed VFR to the destination"
    ],
    a: 2,
    exp: "The battery budget is roughly 30 minutes with load shed (verify in the POH and G1000 supplements), so 45 minutes to an approach near minimums leaves no margin for a miss. The alternative is 15 minutes away, has a precision approach, and has a ceiling 600 ft higher. Declaring an emergency, not just advising, buys vectors, priority, and an expedited approach without a drawn-out clearance, and the written report under 91.3(c) is only on request. Turning the avionics off in IMC removes your attitude reference and ATC's ability to track you; climbing to VMC on top at night with an unknown layer thickness gambles the battery on an unknown."
  },
  {
    id: "emerg-scn-004", type: "scenario", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax","c172"],
    q: "Departing in a C172S on a 4,000-ft runway with a long clearway beyond, the engine quits at 500 ft AGL just after flap retraction. Ahead is a plowed field with a road crossing it; behind you the runway is 1.5 NM away. Winds are calm. You have practiced turnbacks at altitude and found you need about 700 ft to complete one. What do you do?",
    choices: [
      "Turn back; with calm winds the runway is the safest surface available",
      "Attempt a restart with the aux pump while continuing straight ahead at the current pitch attitude",
      "Climb at Vx to gain the 200 ft you need for the turnback",
      "Lower the nose to best glide immediately and land essentially straight ahead in the field, avoiding the road and its likely wires, with only shallow turns to align"
    ],
    a: 3,
    exp: "You already know from practice that 700 ft is your minimum, and you have 500, so the turnback question is answered before it is asked: the AFH says do not attempt one unless a successful turnback will result. With a suitable field ahead the decision is easy. The first physical action is to pitch down to glide speed; an airplane at climb attitude with no power decays toward a stall within seconds. A restart attempt is fine once the glide and the landing area are established, but not instead of them. Roads are tempting until you see the wires."
  },
  {
    id: "emerg-scn-005", type: "scenario", topic: "emerg", ref: "AFH Ch. 18; AIM 7-1-19", tags: ["ira","pa44"],
    q: "IFR in a Seminole at 8,000 ft, OAT −3 °C, in stratus. You notice ice building on the leading edges and the windshield; the airplane has no ice protection other than pitot heat. Tops were reported at 9,000 ft; MEA is 6,000 ft and the freezing level is forecast at 5,000 ft. Airspeed has dropped 8 knots. What is the best request to ATC?",
    choices: [
      "Request an immediate climb to 10,000 ft to get above the reported tops, advising ATC you are picking up ice and are unable to maintain altitude in icing",
      "Request a descent to the MEA, 6,000 ft, to get out of the clouds",
      "Request a block altitude and remain at 8,000 to see whether the ice sublimates",
      "Cancel IFR and descend visually"
    ],
    a: 0,
    exp: "The MEA keeps you in cloud and still below freezing, so a descent to 6,000 trades nothing; the freezing level is below the MEA, so you cannot get to warm air while staying legal. Tops reported only 1,000 ft above are the clear exit, and a non-ice-protected twin that has already lost 8 knots still has the performance to climb 1,000 ft if you act now rather than after another 10 minutes of accretion. Tell ATC the words 'icing' and 'unable' so the request is handled as the priority it is. Cancelling IFR in IMC is not an option. If the climb fails, a 180° turn back to where you were ice-free is the next move."
  },
  // ───────────── EMERG oral ─────────────
  {
    id: "emerg-oral-001", type: "oral", topic: "emerg", ref: "AFH Ch. 18; C172S POH Sec. 3", tags: ["cax","c172"],
    q: "Talk me through an engine failure at cruise altitude in the 172S, from the first symptom to touchdown.",
    answer: "First I fly the airplane: pitch and trim for best glide, 68 KIAS at gross weight, because altitude is the only resource I have and anything other than best glide spends it faster. Second I pick the field, ideally into the wind and within easy reach, and position for a high key so I can adjust. Third, the restart flow from memory and then the checklist: fuel selector both, fuel shutoff valve in, mixture rich, auxiliary fuel pump on, magnetos both or start if the propeller has stopped. Fourth, I declare: 7700 and MAYDAY on the frequency I am already on, or 121.5, with position, souls, and intentions. Finally, if it is not going to restart, I secure the engine for landing per the POH, mixture cutoff, fuel off, magnetos off, master off once I no longer need flaps, belts tight, doors unlatched, and fly a normal power-off approach to the field with flaps as needed, keeping the speed under control and accepting the touchdown point rather than stretching the glide.",
    points: ["Best glide 68 KIAS first; trim","Field selection into wind, within reach; high key","Restart flow: fuel selector, shutoff valve, mixture, aux pump, mags","Declare: 7700, MAYDAY, position and souls","Secure engine; flaps as needed; never stretch the glide"]
  },
  {
    id: "emerg-oral-002", type: "oral", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "What is the difference in your response to an engine fire versus a cabin electrical fire?",
    answer: "For an engine fire my goal is to starve it: mixture to idle cutoff, fuel selector or shutoff valve off, cabin heat and vents closed so smoke stays out, then an emergency descent and a landing as soon as possible. The ignition can be left on briefly so the fuel left in the lines burns off, and if the fire goes out I do not try to restart. The master switch is not the first step because I want the radios and transponder, unless the fire is clearly electrical or I am about to land off-airport. For an electrical fire the signature is the smell of burning insulation; I try to isolate the circuit by switch or breaker, and if I cannot, I shut off the master and alternator, use the extinguisher, and only after the fire is out do I open vents to clear the cabin. I never reset a breaker that tripped with smoke. Either way I land as soon as possible, not as soon as practical.",
    points: ["Engine fire: fuel off, mixture cutoff, vents closed, emergency descent, no restart","Master not automatic for engine fire; keep comms unless electrical","Electrical fire: isolate circuit; else master and alternator off, extinguisher","Vent only after the fire is out; no resetting smoked breakers","Land as soon as possible"]
  },
  {
    id: "emerg-oral-003", type: "oral", topic: "emerg", ref: "AFH Ch. 18; AFH Ch. 13", tags: ["cax","c172","pa44"],
    q: "How do you brief an engine failure after takeoff, and how does the briefing differ between the 172 and the Seminole?",
    answer: "In the 172 the brief is: any problem before rotation, throttle closed and stop on the runway; after liftoff below my turnback altitude, pitch down for 68, land ahead within about 30 degrees either side, flaps as needed, fuel and mags off when the landing is assured; above my turnback altitude, which I have set from practice and conditions, a turn back is an option only if I have briefed the direction and the wind. In the Seminole the brief adds the multi-engine decision points: below Vmc or with runway remaining, both throttles closed and land; after liftoff with gear down and no runway, treat it as a single and land ahead because the airplane will not climb on one engine in that configuration; above Vyse with gear up and a positive rate, pitch for blue line 88, mixtures, props, throttles full, flaps up, gear up, identify, verify, feather, then a climb or a return. I say the numbers out loud every takeoff so that when it happens I am executing, not deciding.",
    points: ["Before rotation: abort and stop","Single: pitch for 68, land ahead; turnback only above a pre-set, practiced altitude","Twin: below Vmc or runway remaining, close both and land","Twin: gear down, no runway: land ahead; above Vyse and gear up: feather and climb","Verbalize the numbers before every takeoff"]
  },
  {
    id: "emerg-oral-004", type: "oral", topic: "emerg", ref: "14 CFR 91.3; AIM 6-3-1; AIM 6-2-2", tags: ["cax","ira"],
    q: "A fellow pilot tells you they would rather not declare an emergency because of the paperwork. How do you respond?",
    answer: "I would tell them that 91.3(b) exists precisely so the PIC can deviate from any Part 91 rule when an in-flight emergency requires immediate action, and that 91.3(c) only requires a written report if the Administrator asks for one, which is rare and usually a brief statement. Declaring is what gets you priority handling, cleared airspace, vectors to the nearest suitable runway, and crash-fire-rescue standing by; not declaring is what gets you a hold while a problem grows. The words are MAYDAY for distress and PAN-PAN for urgency, squawk 7700 if it helps ATC find you, and give them what they need to help: nature of the problem, intentions, fuel in minutes, and souls on board. The NTSB reports that matter under Part 830 come from accidents, not declarations. Declaring early is a mark of good judgment, and a DPE or an airline interviewer will see it the same way.",
    points: ["91.3(b) deviation authority; 91.3(c) report only on request","Declaring buys priority, airspace, and rescue services","MAYDAY vs PAN-PAN; 7700","Give nature, intentions, fuel in minutes, souls on board","Early declaration is good judgment, not a liability"]
  },
  // ═════════════════════════════════════════════════════════════════
  //  HIALT — High-Altitude & Turbine
  // ═════════════════════════════════════════════════════════════════
  {
    id: "hialt-mcq-001", type: "mcq", topic: "hialt", ref: "14 CFR 91.211(b)(1)(i)", tags: ["atp","kt"],
    q: "Under 91.211(b), a pressurized airplane operating above FL250 must have what supplemental oxygen available, in addition to any required by 91.211(a)?",
    choices: [
      "At least a 10-minute supply for each occupant, for use in a descent after loss of pressurization",
      "A 30-minute supply for the flight crew only",
      "A 2-hour supply for each occupant",
      "A 10-minute supply for the pilots and a 5-minute supply for passengers"
    ],
    a: 0,
    exp: "91.211(b)(1)(i): above FL250 a pressurized aircraft must carry at least a 10-minute supply of supplemental oxygen for each occupant, for use in the event a descent is necessitated by loss of cabin pressurization, in addition to the unpressurized-cabin requirements of paragraph (a). Part 121 and 135 add their own, more demanding passenger oxygen rules on top of this."
  },
  {
    id: "hialt-mcq-002", type: "mcq", topic: "hialt", ref: "14 CFR 91.211(b)(1)(ii)", tags: ["atp","kt"],
    q: "Above FL350, 91.211(b) requires one pilot at the controls to wear and use an oxygen mask, except that this is not required at or below what altitude when two pilots are at the controls with quick-donning masks?",
    choices: [
      "FL390",
      "FL410",
      "FL400",
      "FL450"
    ],
    a: 1,
    exp: "91.211(b)(1)(ii): above FL350 one pilot at the controls must wear and use a secured, sealed mask that supplies oxygen continuously or automatically above a 14,000-ft cabin altitude, except that this is not required at or below FL410 if two pilots are at the controls and each has a quick-donning mask that can be placed on the face with one hand from the ready position within 5 seconds. Above FL410, one pilot wears the mask regardless."
  },
  {
    id: "hialt-mcq-003", type: "mcq", topic: "hialt", ref: "14 CFR 91.211(b)(2)", tags: ["atp","kt"],
    q: "At FL370 with quick-donning masks, the first officer leaves the flight deck. What does 91.211(b)(2) require?",
    choices: [
      "Nothing, because the airplane is below FL410",
      "The airplane must descend to FL350 or below until the first officer returns",
      "The remaining pilot must put on and use an oxygen mask until the other pilot returns to the station",
      "The remaining pilot must don the mask only if the cabin altitude exceeds 10,000 ft"
    ],
    a: 2,
    exp: "91.211(b)(2): notwithstanding the quick-donning exception, if for any reason one pilot leaves the controls at flight altitudes above FL350, the remaining pilot at the controls shall put on and use an oxygen mask until the other pilot has returned. The exception only works while two pilots are actually at the controls. At FL350 or below the rule does not apply."
  },
  {
    id: "hialt-mcq-004", type: "mcq", topic: "hialt", ref: "14 CFR 91.211(b)(1)(ii)", tags: ["atp","kt"],
    q: "A quick-donning oxygen mask, as described in 91.211, must be capable of being placed on the face with one hand from the ready position within:",
    choices: [
      "3 seconds",
      "10 seconds",
      "15 seconds",
      "5 seconds"
    ],
    a: 3,
    exp: "The regulatory definition is one hand, from the ready position, within 5 seconds, and the mask must then be supplying oxygen and be properly secured and sealed. The 5-second figure is the basis for the two-pilot exception up to FL410. Part 121 and 25 certification standards use the same 5-second criterion."
  },
  {
    id: "hialt-mcq-005", type: "mcq", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 17", tags: ["atp","kt"],
    q: "Approximate time of useful consciousness after a sudden loss of oxygen at FL250, FL350, and FL400, respectively, is:",
    choices: [
      "3–5 minutes; 30–60 seconds; 15–20 seconds",
      "10 minutes; 2 minutes; 1 minute",
      "1 minute; 30 seconds; 10 seconds",
      "20–30 minutes; 5 minutes; 1–2 minutes"
    ],
    a: 0,
    exp: "The FAA table (AC 61-107B Figure 2-3; PHAK Chapter 17 has a similar single-column table) gives TUC of 3–5 minutes at FL250, 30–60 seconds at FL350, and 15–20 seconds at FL400, with values roughly halved after a rapid decompression because the lungs are emptied of oxygen. 20–30 minutes applies at FL180 and 1–2 minutes at FL300. This is why the mask goes on before anything else in a decompression."
  },
  {
    id: "hialt-mcq-006", type: "mcq", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 17", tags: ["atp"],
    q: "Why is TUC after a rapid decompression shorter than after a gradual loss of oxygen at the same altitude?",
    choices: [
      "The sudden temperature drop slows brain metabolism",
      "The rapid pressure change forces oxygen out of the lungs, reversing the diffusion gradient and dropping blood oxygen almost immediately",
      "The noise and fog cause hyperventilation that consumes oxygen faster",
      "The pressurization system continues to remove oxygen from the cabin"
    ],
    a: 1,
    exp: "When cabin pressure drops suddenly, the partial pressure of oxygen in the lungs falls below that in the blood, so oxygen diffuses out of the bloodstream into the lungs instead of in. Blood oxygen saturation therefore collapses within a few breaths, and TUC is roughly half the value for a slow ascent. Fog, noise, and cold are real but secondary; they are cues to don the mask, not the cause of the shortened TUC."
  },
  {
    id: "hialt-mcq-007", type: "mcq", topic: "hialt", ref: "PHAK Ch. 7; AC 61-107B", tags: ["atp","kt"],
    q: "Cabin differential pressure is best described as:",
    choices: [
      "The difference between cabin altitude and aircraft altitude, in feet",
      "The rate at which cabin altitude changes, in feet per minute",
      "The difference between the air pressure inside the cabin and the ambient pressure outside, in psi",
      "The pressure the outflow valve must hold at maximum cabin altitude"
    ],
    a: 2,
    exp: "Differential pressure is the pressure inside the cabin minus the pressure outside, expressed in psi, and is limited structurally by the fuselage design (typically around 8–9 psi for jets). At the maximum differential, further climb raises the cabin altitude. Cabin altitude is the altitude corresponding to the cabin pressure; cabin rate is how fast that changes. Transport certification requires cabin altitude not above 8,000 ft at the maximum certificated altitude under normal conditions."
  },
  {
    id: "hialt-mcq-008", type: "mcq", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 7", tags: ["atp"],
    q: "Which distinguishes an explosive decompression from a rapid decompression?",
    choices: [
      "Explosive decompression involves a fire; rapid does not",
      "Explosive decompression is caused by the outflow valve; rapid by structural failure",
      "Rapid decompression only occurs above FL400",
      "Explosive decompression occurs faster than the lungs can decompress (under about 0.5 second), risking lung damage; rapid decompression takes longer and the lungs can keep up"
    ],
    a: 3,
    exp: "The distinction is time relative to the lungs: an explosive decompression happens in less than about 0.5 second, faster than air can leave the lungs, so lung injury is possible; a rapid decompression takes longer than that and the body keeps up, though fog, noise, cold, and short TUC still follow. Both demand the same crew response: oxygen masks on and 100 percent, establish crew communication, then begin the emergency descent."
  },
  {
    id: "hialt-mcq-009", type: "mcq", topic: "hialt", ref: "14 CFR 91.180; Part 91 Appendix G", tags: ["atp","kt"],
    q: "RVSM airspace in the United States is:",
    choices: [
      "FL290 through FL410 inclusive, with 1,000-ft vertical separation between approved aircraft",
      "FL180 through FL410, with 2,000-ft separation",
      "FL290 and above with no upper limit, with 1,000-ft separation",
      "FL250 through FL450, with 1,000-ft separation"
    ],
    a: 0,
    exp: "RVSM reduces vertical separation from 2,000 ft to 1,000 ft between FL290 and FL410 inclusive. Above FL410 and below FL290, 2,000-ft and 1,000-ft conventional separation respectively apply. Operating in RVSM airspace requires an aircraft that meets Appendix G's altimetry and altitude-keeping standards and either an operator authorization or, since 2019, qualifying ADS-B Out equipment with demonstrated altitude-keeping performance."
  },
  {
    id: "hialt-mcq-010", type: "mcq", topic: "hialt", ref: "Part 91 Appendix G Sec. 2 & 9", tags: ["atp","kt"],
    q: "Which equipment is required for an aircraft to be RVSM-compliant under Appendix G?",
    choices: [
      "A single air data computer and a Mode C transponder",
      "Two independent altitude measurement systems, an altitude alerting system, an automatic altitude-control system, and a transponder with altitude reporting",
      "GPS with WAAS, TCAS II, and a radio altimeter",
      "Dual FMS and an autothrottle"
    ],
    a: 1,
    exp: "Appendix G requires two independent altitude measurement systems, an altitude alerting system, an automatic altitude-control (autopilot altitude hold) system, and an SSR transponder with altitude reporting that can be connected to the operating altimetry source. TCAS is required by other rules for transport aircraft but is not an RVSM item. Section 9 allows operation without a specific authorization when the aircraft has qualifying ADS-B Out and meets altitude-keeping performance."
  },
  {
    id: "hialt-mcq-011", type: "mcq", topic: "hialt", ref: "PHAK Ch. 5; AC 61-107B", tags: ["atp","kt"],
    q: "Critical Mach number (Mcrit) is the:",
    choices: [
      "Highest Mach number at which the aircraft is controllable",
      "Mach number at which Mach tuck becomes unrecoverable",
      "Lowest free-stream Mach number at which airflow somewhere over the airplane first reaches Mach 1",
      "Mach number corresponding to Vmo at the tropopause"
    ],
    a: 2,
    exp: "Because air accelerates over the wing, local flow reaches sonic speed before the airplane does; Mcrit is the free-stream Mach number at which that first happens. Above Mcrit a shock wave forms, drag rises sharply (drag divergence), and the shock-induced separation and aft shift of the center of pressure produce the nose-down tendency called Mach tuck. Sweep and supercritical airfoils raise Mcrit; Mmo is set with a margin below the onset of these effects."
  },
  {
    id: "hialt-mcq-012", type: "mcq", topic: "hialt", ref: "PHAK Ch. 5", tags: ["atp","kt"],
    q: "Mach tuck is primarily caused by:",
    choices: [
      "Loss of elevator effectiveness due to ice on the stabilizer",
      "The thrust line moving above the center of gravity at high altitude",
      "Fuel moving aft in the tanks at high speed",
      "Aft movement of the wing's center of pressure and shock-induced flow separation as the airplane exceeds Mcrit, producing a nose-down pitching moment"
    ],
    a: 3,
    exp: "As a shock wave forms and moves aft with increasing Mach, the center of pressure shifts aft and the separated flow behind the shock reduces downwash on the tail; both effects pitch the nose down, which increases speed and worsens the tuck. Transport jets counter it with a Mach trim system that applies nose-up trim as Mach increases. Recovery is to reduce Mach: thrust back, speed brakes, and careful nose-up input."
  },
  {
    id: "hialt-mcq-013", type: "mcq", topic: "hialt", ref: "PHAK Ch. 5", tags: ["atp","kt"],
    q: "Compared with a straight wing, a swept wing tends to stall first at the:",
    choices: [
      "Tips, causing a loss of aileron effectiveness and a nose-up pitching tendency",
      "Root, causing a nose-down pitch that aids recovery",
      "Leading edge, causing a sudden roll",
      "Trailing edge, with no change in pitch"
    ],
    a: 0,
    exp: "Spanwise flow on a swept wing thickens the boundary layer toward the tips, so the tips stall first. Because the tips are behind the center of gravity, losing their lift moves the center of lift forward and pitches the nose up, deepening the stall, and the ailerons sit in separated air. Vortex generators, wing fences, and stick pushers are the designers' answers; the pilot's answer is prompt AOA reduction."
  },
  {
    id: "hialt-mcq-014", type: "mcq", topic: "hialt", ref: "PHAK Ch. 5", tags: ["atp","kt"],
    q: "Dutch roll in a swept-wing jet is:",
    choices: [
      "A pure rolling oscillation damped by the ailerons",
      "A coupled yaw-roll oscillation resulting from strong dihedral effect and weak directional stability, normally suppressed by a yaw damper",
      "A steady spiral divergence caused by excessive directional stability",
      "A pitch oscillation caused by Mach tuck"
    ],
    a: 1,
    exp: "Sweep gives a swept-wing airplane a strong rolling response to sideslip (dihedral effect); when that is stronger than the yaw-restoring force from the vertical fin, a disturbance sets up an oscillation in which yaw and roll alternate out of phase. The yaw damper senses yaw rate and applies rudder to kill it; with the damper inoperative, many AFMs limit altitude or speed. The opposite imbalance, strong directional stability with weak dihedral effect, gives spiral instability."
  },
  {
    id: "hialt-mcq-015", type: "mcq", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 5", tags: ["atp"],
    q: "'Coffin corner' refers to:",
    choices: [
      "The altitude at which the pressurization system can no longer maintain cabin altitude",
      "The corner of the V-g diagram where Va and Vne meet",
      "The altitude where the low-speed (stall) buffet and high-speed (Mach) buffet converge, leaving little margin between them",
      "The point on a departure chart where accelerate-stop and accelerate-go are equal"
    ],
    a: 2,
    exp: "As altitude increases, the indicated stall speed stays about the same while the IAS corresponding to Mmo falls; at the aerodynamic ceiling they meet, and any speed change, turn, or gust buffets the airplane either way. Weight and bank angle (load factor) raise the stall buffet speed and shrink the margin further, which is why cruise altitude selection in a jet considers buffet margin, typically 1.3 g, not just fuel burn."
  },
  {
    id: "hialt-mcq-016", type: "mcq", topic: "hialt", ref: "PHAK Ch. 7", tags: ["atp","kt"],
    q: "In a two-spool turbofan, N1 and N2 refer to:",
    choices: [
      "N1 is the compressor speed on the ground; N2 is the compressor speed in flight",
      "N1 is the fuel flow; N2 is the exhaust gas temperature",
      "N1 is the left engine; N2 is the right engine",
      "N1 is the fan and low-pressure spool speed; N2 is the high-pressure compressor and turbine spool speed, each as a percentage of a reference rpm"
    ],
    a: 3,
    exp: "The low-pressure spool (fan and LP compressor driven by the LP turbine) is N1 and is the primary thrust indication on most high-bypass turbofans; the high-pressure spool (HP compressor driven by the HP turbine) is N2 and is what the starter spins and what you watch for light-off and idle. EGT or ITT, measured aft of the turbine, is the temperature limit. Three-spool engines add N3."
  },
  {
    id: "hialt-mcq-017", type: "mcq", topic: "hialt", ref: "PHAK Ch. 7", tags: ["atp","kt"],
    q: "A hot start in a turbine engine is one in which:",
    choices: [
      "The EGT/ITT exceeds its start limit, usually from too much fuel for the available airflow",
      "The engine fails to light off within the allowed time",
      "The engine lights off but rpm stagnates below idle",
      "The starter fails to disengage after light-off"
    ],
    a: 0,
    exp: "Hot start: temperature exceeds the limit during the start, typically because fuel was introduced at too low an N2, airflow was insufficient (tailwind, high density altitude, weak battery), or the fuel control over-scheduled; the response is to cut fuel and motor the engine. A hung start is light-off followed by rpm hanging below idle with rising temperature. A no-start or wet start is fuel without ignition, which requires a dry motoring run to clear fuel before trying again."
  },
  {
    id: "hialt-mcq-018", type: "mcq", topic: "hialt", ref: "PHAK Ch. 7", tags: ["atp"],
    q: "A compressor stall or surge is best described as:",
    choices: [
      "A stall of the turbine blades caused by excessive EGT",
      "A disruption of airflow through the compressor when blade angle of attack becomes excessive, causing loud bangs, rpm fluctuation, and rising EGT",
      "Failure of the fuel control to schedule fuel with rpm",
      "The condition in which the engine cannot accelerate above idle"
    ],
    a: 1,
    exp: "Compressor blades are airfoils; when the inlet airflow is disturbed (crosswind on the ground, high angle of attack, ice, damage, or rapid throttle movement), their angle of attack exceeds the stall angle and the airflow breaks down, sometimes reversing with a bang and flame from the inlet or exhaust. Reduce thrust smoothly, reduce the angle of attack, and follow the AFM; a sustained surge can overtemp the turbine. Bleed valves and variable stator vanes are the engine's own defenses."
  },
  {
    id: "hialt-mcq-019", type: "mcq", topic: "hialt", ref: "14 CFR 1.2; 14 CFR 25.107", tags: ["atp","kt"],
    q: "V1 is best defined as:",
    choices: [
      "The speed at which the critical engine is assumed to fail",
      "The speed at which rotation is initiated",
      "The maximum speed during takeoff at which the pilot must take the first action to stop within the accelerate-stop distance, and the minimum speed at which, after an engine failure at VEF, the takeoff can be continued to the required height within the takeoff distance",
      "The speed to be attained at 35 ft with one engine inoperative"
    ],
    a: 2,
    exp: "14 CFR 1.2 gives V1 both halves: the latest point to begin the stop and the earliest point to continue after an engine failure at VEF. VR is rotation speed; V2 is the takeoff safety speed to be reached by 35 ft with the critical engine failed; VEF is the assumed engine-failure speed, which must be at least VMCG. The callout 'V1' means hands come off the thrust levers: the decision to stop is no longer available."
  },
  {
    id: "hialt-mcq-020", type: "mcq", topic: "hialt", ref: "14 CFR 25.109; 25.113", tags: ["atp","kt"],
    q: "A balanced field length exists when:",
    choices: [
      "The runway length equals the landing distance required",
      "V1 equals VR",
      "The headwind and crosswind components are equal",
      "The accelerate-stop distance equals the accelerate-go (takeoff) distance for the chosen V1"
    ],
    a: 3,
    exp: "Raising V1 shortens the continued-takeoff distance but lengthens the stopping distance; lowering it does the reverse. The V1 at which the two distances are equal gives the shortest runway on which both options are available, the balanced field length. With a clearway or stopway the field can be unbalanced and V1 adjusted within its limits (not below VMCG, not above VR or the brake-energy limit)."
  },
  {
    id: "hialt-mcq-021", type: "mcq", topic: "hialt", ref: "AC 120-60B; AC 91-74B", tags: ["atp"],
    q: "A holdover time for deicing/anti-icing fluid represents:",
    choices: [
      "The estimated time the applied fluid will prevent frost, ice, or snow from forming or accumulating on the treated surfaces, under the stated conditions",
      "The time the fluid takes to dry on the wing",
      "The maximum time between fluid application and engine start",
      "The guaranteed time until takeoff is no longer permitted"
    ],
    a: 0,
    exp: "Holdover tables (published by the FAA each winter) give estimated protection times by fluid type, concentration, precipitation type and intensity, and OAT; Type I fluids give short times and Type II/IV thickened fluids much longer. The time is an estimate that starts at the beginning of the final application; heavy precipitation, high winds, or jet blast shorten it. Regardless of the table, 121.629 requires a pretakeoff contamination check when the holdover time is exceeded or conditions are in doubt."
  },
  {
    id: "hialt-mcq-022", type: "mcq", topic: "hialt", ref: "AC 120-60B; AC 91-74B", tags: ["atp"],
    q: "After a long cruise at altitude, a jet lands and taxis in on a humid day above freezing. Frost forms on the upper wing surface over the fuel tanks. This is called:",
    choices: [
      "Hoar frost from radiation cooling",
      "Cold-soaked fuel frost, caused by fuel in the tanks remaining well below freezing and chilling the skin below the dew point",
      "Clear ice from freezing drizzle",
      "Runback ice"
    ],
    a: 1,
    exp: "Fuel that has been at −30 °C or colder for hours keeps the wing skin above the tanks below 0 °C long after landing, so moisture condenses and freezes even in above-freezing air. Depending on the airplane's AFM, a thin layer of cold-soaked fuel frost may be allowed on the upper wing within defined limits; otherwise it must be removed before takeoff, because even sandpaper-texture frost can reduce lift substantially. It can also form in flight during descent into humid air."
  },
  {
    id: "hialt-mcq-023", type: "mcq", topic: "hialt", ref: "AC 00-6B Ch. 1", tags: ["atp","kt"],
    q: "In the standard atmosphere the tropopause is at approximately what altitude and temperature, and what happens to temperature above it?",
    choices: [
      "About 50,000 ft and −70 °C; temperature increases immediately above it",
      "About 25,000 ft and −35 °C; temperature continues to decrease at 2 °C per 1,000 ft",
      "About 36,000 ft and −56.5 °C; temperature stops decreasing and remains roughly constant in the lower stratosphere",
      "About 18,000 ft and −21 °C; temperature becomes constant"
    ],
    a: 2,
    exp: "ISA puts the tropopause at 36,089 ft (11 km) and −56.5 °C, with the troposphere's 2 °C per 1,000 ft lapse rate ending there and an isothermal layer above. The real tropopause is higher and colder over the tropics, lower and warmer over the poles, and shows a break near the jet stream, which sits just below it. Flying at or above the tropopause usually means less convective weather, but clear-air turbulence and the coldest fuel temperatures live there too."
  },
  {
    id: "hialt-mcq-024", type: "mcq", topic: "hialt", ref: "AC 00-6B Ch. 8 & 17; AIM 7-1-23", tags: ["atp","kt"],
    q: "Clear air turbulence associated with the jet stream is most often found:",
    choices: [
      "Directly in the core of the jet, where winds are strongest",
      "Only in the equatorial side above FL450",
      "Well below the jet stream in the warm air mass",
      "On the polar (cold) side of the jet near the tropopause, in the strong wind-shear zone and especially where the jet curves sharply"
    ],
    a: 3,
    exp: "CAT concentrates where the vertical and horizontal wind shear is greatest: the cold, polar side of the jet core near and just below the tropopause, in troughs and sharp curvatures, and above and downwind of mountain ranges. If encountered, a change of altitude of a few thousand feet or a lateral deviation usually finds smoother air; a PIREP helps the next crew. The jet core itself can be smooth, which is why CAT surprises crews."
  },
  // ───────────── HIALT card ─────────────
  {
    id: "hialt-card-001", type: "card", topic: "hialt", ref: "14 CFR 91.211(b)", tags: ["atp","kt"],
    front: "91.211(b): oxygen rules for pressurized aircraft",
    back: "Above FL250: at least a 10-minute supply for each occupant for a descent after decompression (in addition to (a)).\nAbove FL350: one pilot at the controls wears and uses a sealed mask (continuous or auto-on above 14,000 ft cabin), EXCEPT at or below FL410 with two pilots at the controls and quick-donning masks (one hand, 5 seconds).\nAbove FL350, if one pilot leaves the controls the other puts the mask on until they return."
  },
  {
    id: "hialt-card-002", type: "card", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 17", tags: ["atp","kt"],
    front: "Time of useful consciousness (normal ascent / rapid decompression)",
    back: "AC 61-107B Fig. 2-3 (normal / after rapid decompression):\nFL180: 20–30 min / 10–15 min\nFL220: 10 min / 5–6 min\nFL250: 3–5 min / 1.5–2.5 min\nFL280: 2.5–3 min / 1–1.5 min\nFL300: 1–2 min / 30–60 s\nFL350: 30–60 s / 15–30 s\nFL400: 15–20 s\nFL430 and above: 9–12 s\nRapid decompression roughly halves TUC (AC 61-107B gives no separate figure above FL350). PHAK Ch. 17 single column differs slightly: FL220 5–10 min; FL450 9–15 s."
  },
  {
    id: "hialt-card-003", type: "card", topic: "hialt", ref: "14 CFR 91.180; Part 91 Appendix G", tags: ["atp","kt"],
    front: "RVSM essentials",
    back: "FL290–FL410 inclusive; 1,000-ft separation (2,000 ft above FL410).\nAircraft: two independent altimetry systems, altitude alerter, automatic altitude control, altitude-reporting transponder.\nOperator authorization (LOA/OpSpec) OR, since 2019, qualifying ADS-B Out with demonstrated altitude-keeping (App. G Sec. 9).\nNon-RVSM aircraft: climb/descend through only with ATC approval."
  },
  {
    id: "hialt-card-004", type: "card", topic: "hialt", ref: "PHAK Ch. 5", tags: ["atp","kt"],
    front: "High-speed and swept-wing aerodynamics vocabulary",
    back: "Mcrit: first local sonic flow. Mmo: max operating Mach.\nMach tuck: nose-down from aft CP shift and shock separation; Mach trim counters it.\nSwept wing: tips stall first → pitch-up, aileron loss.\nDutch roll: yaw-roll coupling from strong dihedral effect; yaw damper.\nCoffin corner: stall buffet meets Mach buffet; 1.3 g buffet margin for cruise."
  },
  {
    id: "hialt-card-005", type: "card", topic: "hialt", ref: "PHAK Ch. 7", tags: ["atp","kt"],
    front: "Turbine engine basics and start malfunctions",
    back: "N1 = fan/LP spool (thrust indication); N2 = HP spool (starter, idle); EGT/ITT = turbine temperature limit.\nHot start: temp exceeds limit → cut fuel, motor.\nHung start: lights off, rpm stalls below idle.\nWet/no start: fuel, no light → dry motor before retry.\nCompressor stall: airflow breakdown, bangs, rising EGT → reduce thrust smoothly.\nJet A freezes ≈ −40 °C; Jet A-1 ≈ −47 °C."
  },
  {
    id: "hialt-card-006", type: "card", topic: "hialt", ref: "14 CFR 1.2; 14 CFR 25.107–25.113", tags: ["atp","kt"],
    front: "Transport-category takeoff speeds and field length",
    back: "VEF: assumed engine-failure speed (≥ VMCG).\nV1: latest speed to begin a stop within accelerate-stop; earliest to continue after failure at VEF. Hands off thrust levers at V1.\nVR: rotation. VLOF: liftoff. V2: takeoff safety speed by 35 ft, engine out.\nBalanced field: accelerate-stop = accelerate-go at the chosen V1."
  },
  // ───────────── HIALT scenarios ─────────────
  {
    id: "hialt-scn-001", type: "scenario", topic: "hialt", ref: "14 CFR 91.211(b); AC 61-107B", tags: ["atp"],
    q: "You are a first officer at FL380 in a two-pilot jet with quick-donning masks. The captain steps out of the flight deck for a few minutes. Shortly after, you feel pressure in your ears, the cabin altitude is climbing through 12,000 ft, and the cabin rate shows a 2,000-fpm climb. What should already be true, and what do you do first?",
    choices: [
      "You should already be wearing your mask because the captain left the controls above FL350; now confirm 100 percent oxygen, establish communication, and begin the emergency descent",
      "You should don your mask only once the cabin altitude passes 14,000 ft, then descend",
      "Call the captain back before taking any action, since the emergency descent requires two pilots",
      "Reduce the cabin rate with the manual outflow valve before considering a descent"
    ],
    a: 0,
    exp: "91.211(b)(2) required you to put the mask on when the captain left the controls above FL350, so the only question is confirming it is sealed and on 100 percent. With TUC at FL380 measured in tens of seconds after a rapid event, the sequence is mask, communicate, then descend, usually with the autopilot while the other pilot returns and masks up. The 14,000-ft cabin altitude in 91.211(b) is the point above which the crew mask must supply oxygen automatically; it is not a donning trigger (passenger masks must deploy automatically before the cabin passes 15,000 ft under 14 CFR 25.1447). Troubleshooting the pressurization system comes after the airplane is heading down."
  },
  {
    id: "hialt-scn-002", type: "scenario", topic: "hialt", ref: "AC 61-107B; PHAK Ch. 5", tags: ["atp"],
    q: "Cruising at FL410 near maximum weight in a light jet, you are asked to climb to FL430 to avoid traffic. The FMS shows a buffet margin of barely 1.1 g at FL430 and moderate turbulence has been reported. What is the correct response?",
    choices: [
      "Accept; the airplane is certified to FL450 so FL430 is within limits",
      "Decline with 'unable' and request FL390 or a vector instead, because the buffet margin at FL430 leaves almost no room for turbulence or a turn before stall or Mach buffet",
      "Accept but slow to the stall speed plus 10 knots to improve the margin",
      "Accept and disconnect the autopilot to hand-fly through the turbulence"
    ],
    a: 1,
    exp: "At the aerodynamic ceiling the low-speed and Mach buffet speeds converge; a 1.1-g margin means a 25° bank or a moderate gust can put the airplane into buffet in either direction, and near maximum weight that margin shrinks further. Operators typically require about 1.3 g for cruise altitude selection. Certification ceiling is a structural and pressurization number, not a promise of maneuver margin at every weight. 'Unable' with a request for a lower altitude or a vector is the professional answer; slowing down is the wrong direction at coffin corner."
  },
  // ───────────── HIALT oral ─────────────
  {
    id: "hialt-oral-001", type: "oral", topic: "hialt", ref: "14 CFR 91.211; AC 61-107B", tags: ["atp"],
    q: "Explain the oxygen rules for a pressurized airplane under Part 91 and the physiology that justifies them.",
    answer: "Paragraph (a) still applies to cabin altitude: crew on oxygen above 12,500 ft cabin altitude after 30 minutes, above 14,000 ft at all times, and oxygen available to all occupants above 15,000 ft. Paragraph (b) adds rules for flight altitude: above FL250, at least a 10-minute supply for every occupant for the descent after a decompression; above FL350, one pilot at the controls wearing and using a sealed mask, except that at or below FL410, with two pilots at the controls and quick-donning masks that go on with one hand within 5 seconds, neither has to wear one; and above FL350, if one pilot leaves the controls, the other puts the mask on until they return. The physiology is time of useful consciousness: about 3 to 5 minutes at FL250, 30 to 60 seconds at FL350, 15 to 20 seconds at FL400, and roughly half those after a rapid decompression because oxygen diffuses out of the blood. The 5-second mask requirement and the FL350 and FL410 breakpoints are set so a pilot can get on oxygen inside those windows.",
    points: ["(a) cabin-altitude rules: 12,500/30 min, 14,000, 15,000","(b) above FL250: 10-minute supply per occupant","Above FL350: one pilot on mask; quick-donning exception to FL410","One pilot leaves above FL350: the other masks up","TUC: 3–5 min FL250; 30–60 s FL350; 15–20 s FL400; halved after rapid decompression"]
  },
  {
    id: "hialt-oral-002", type: "oral", topic: "hialt", ref: "14 CFR 91.180; Part 91 Appendix G", tags: ["atp"],
    q: "What is RVSM, what do the aircraft and operator need, and what happens if your autopilot altitude hold fails at FL350?",
    answer: "RVSM is Reduced Vertical Separation Minimum: 1,000 ft instead of 2,000 ft between FL290 and FL410 inclusive, which doubles the usable flight levels and lets jets fly closer to optimum altitude. Appendix G requires the aircraft to have two independent altitude measurement systems, an altitude alerting system, an automatic altitude-control system, and an altitude-reporting transponder, with altimetry system error within tight limits, plus either an operator authorization or, since 2019, qualifying ADS-B Out with demonstrated altitude-keeping performance. In flight, the crew cross-checks the two primary altimeters, typically within 200 ft of each other, and flies with the autopilot engaged in altitude hold. If the autopilot altitude-hold capability, an altimeter, or the transponder fails, the airplane no longer meets RVSM requirements; I advise ATC immediately using the phrase 'unable RVSM due equipment', and expect to be cleared out of RVSM airspace or given 2,000-ft separation. Severe turbulence that prevents holding altitude is reported the same way.",
    points: ["FL290–FL410 inclusive, 1,000-ft separation","Aircraft: two altimetry systems, alerter, auto altitude control, altitude-reporting transponder","Authorization or qualifying ADS-B Out (Appendix G Sec. 9)","Cross-check altimeters; autopilot altitude hold in cruise","Equipment failure: 'unable RVSM due equipment', expect exit or 2,000-ft separation"]
  },
  {
    id: "hialt-oral-003", type: "oral", topic: "hialt", ref: "PHAK Ch. 5; AC 61-107B", tags: ["atp"],
    q: "An airline interviewer asks: why do swept-wing jets have yaw dampers, Mach trim, and stick pushers? Connect each to the aerodynamics.",
    answer: "Each device patches a side effect of sweeping the wing for high-speed flight. Sweep produces a strong dihedral effect, a big rolling response to sideslip, which combined with the relatively weak directional stability of a long fuselage sets up Dutch roll, an out-of-phase yaw and roll oscillation; the yaw damper senses yaw rate and applies rudder to damp it, and with it inoperative the AFM usually limits altitude or speed. As the airplane approaches and passes critical Mach, shock waves move the center of pressure aft and reduce downwash on the tail, producing Mach tuck, a nose-down pitch that gets worse as speed increases; the Mach trim system adds nose-up trim with increasing Mach so the stick force stays conventional. At high angle of attack the swept wing's tips stall first because of spanwise flow, and since the tips are aft of the CG the nose pitches up into a deeper stall while the ailerons lose authority; the stick shaker warns at a margin above the stall and the stick pusher forces the nose down before the pitch-up can develop. In every case the pilot's job is the same: respect the margins so the device never has to work alone.",
    points: ["Dutch roll from dihedral effect vs. directional stability → yaw damper","Mach tuck from aft CP shift and shock separation → Mach trim","Tip stall and pitch-up on swept wings → stick shaker and pusher","AFM limitations with these systems inoperative","Respect buffet, Mach, and AOA margins"]
  },
  {
    id: "hialt-oral-004", type: "oral", topic: "hialt", ref: "14 CFR 1.2; 14 CFR 25.107–25.113", tags: ["atp"],
    q: "Define V1, VR, and V2 and explain what 'balanced field' means in practical terms for a takeoff briefing.",
    answer: "V1 is the takeoff decision speed with two halves in 14 CFR 1.2: the maximum speed at which the pilot must take the first action to stop within the accelerate-stop distance, and the minimum speed at which, after an engine failure at VEF, the takeoff can be continued to the required height within the takeoff distance. VR is the speed at which rotation begins so the airplane reaches V2 by 35 ft; V2 is the takeoff safety speed, the minimum climb speed with the critical engine failed, with margins above stall and VMCA. A balanced field is the runway length at which the accelerate-stop and accelerate-go distances are equal for the chosen V1; with a longer runway or a clearway or stopway, V1 can be moved within the range between VMCG and the brake-energy and VR limits to trade stop margin for go margin. In the briefing that becomes: 'before V1, for any master warning, engine failure, or fire, the captain will call reject and stop on the runway; at V1 hands off the thrust levers, and after V1 we continue, fly the engine-out procedure, and handle it in the air.'",
    points: ["V1: latest to begin stopping, earliest to continue after VEF failure","VR: rotation to reach V2 by 35 ft; V2: engine-out takeoff safety speed","Balanced field: accelerate-stop = accelerate-go","V1 range: ≥ VMCG, ≤ VR and brake-energy limit","Reject criteria before V1; hands off thrust levers at V1"]
  },
  // ═════════════════════════════════════════════════════════════════
  //  Existing-topic reinforcement (knowledge-test style), ids 1xx
  // ═════════════════════════════════════════════════════════════════
  {
    id: "regs-mcq-101", type: "mcq", topic: "regs", ref: "14 CFR 91.117(a),(b)", tags: ["kt","cax"],
    q: "Unless otherwise authorized, the maximum indicated airspeed below 10,000 ft MSL, and at or below 2,500 ft AGL within 4 NM of the primary airport of Class C or D airspace, are respectively:",
    choices: [
      "200 knots and 200 knots",
      "250 knots and 180 knots",
      "250 knots and 200 knots",
      "288 knots and 250 knots"
    ],
    a: 2,
    exp: "91.117(a): 250 KIAS below 10,000 ft MSL. 91.117(b): 200 KIAS at or below 2,500 ft AGL within 4 NM of the primary airport of Class C or D airspace unless ATC authorizes more. 91.117(c) adds 200 KIAS beneath Class B or in a VFR corridor through Class B. If the minimum safe speed for the operation is higher, 91.117(d) allows that minimum safe speed."
  },
  {
    id: "regs-mcq-102", type: "mcq", topic: "regs", ref: "14 CFR 91.155", tags: ["kt","cax"],
    q: "VFR in Class E airspace at 11,500 ft MSL requires what minimum visibility and cloud clearance?",
    choices: [
      "3 SM; 500 below, 1,000 above, 2,000 horizontal",
      "5 SM; 500 below, 1,000 above, 2,000 horizontal",
      "1 SM; clear of clouds",
      "5 SM; 1,000 below, 1,000 above, 1 SM horizontal"
    ],
    a: 3,
    exp: "At and above 10,000 ft MSL in Class E (and in Class G more than 1,200 ft AGL), 91.155 requires 5 SM visibility and 1,000 ft below, 1,000 ft above, and 1 SM horizontal from clouds, because closing speeds are higher there. Below 10,000 ft in Class E it is 3 SM and 500/1,000/2,000. Class B is 3 SM and clear of clouds; Class G below 1,200 AGL by day is 1 SM clear of clouds."
  },
  {
    id: "regs-mcq-103", type: "mcq", topic: "regs", ref: "14 CFR 91.159", tags: ["kt","cax"],
    q: "VFR cruising at more than 3,000 ft AGL on a magnetic course of 185°, which altitude complies with 91.159?",
    choices: [
      "6,500 ft MSL",
      "7,500 ft MSL",
      "5,500 ft MSL",
      "6,000 ft MSL"
    ],
    a: 0,
    exp: "91.159: magnetic course 0° through 179° takes odd thousands plus 500 ft; 180° through 359° takes even thousands plus 500 ft, when above 3,000 ft AGL and below 18,000 ft MSL. A course of 185° is in the even-plus-500 group, so 6,500 is correct; 5,500 and 7,500 are for eastbound courses and 6,000 is an IFR altitude. The rule is based on magnetic course, not heading."
  },
  {
    id: "regs-mcq-104", type: "mcq", topic: "regs", ref: "14 CFR 61.57(c),(d)", tags: ["kt","ipc"],
    q: "You last completed six approaches, holding, and tracking on 15 March 2026. With no instrument flying since, through what date may you act as PIC under IFR, and through what date may you regain currency without an IPC?",
    choices: [
      "PIC under IFR through 15 September 2026; regain without IPC through 15 March 2027",
      "PIC under IFR through 30 September 2026; regain without IPC through 31 March 2027",
      "PIC under IFR through 31 March 2027; regain without IPC through 30 September 2027",
      "PIC under IFR through 30 September 2026; regain without IPC through 30 September 2027"
    ],
    a: 1,
    exp: "61.57(c) uses calendar months: six calendar months after March 2026 runs through the last day of September 2026. 61.57(d) gives six more calendar months, through 31 March 2027, during which you may regain currency by flying the required tasks with a safety pilot or instructor (not as PIC under IFR). From 1 April 2027 an IPC is required. The day of the month is irrelevant; it is always the end of the calendar month."
  },
  {
    id: "regs-mcq-105", type: "mcq", topic: "regs", ref: "14 CFR 61.56(c)", tags: ["kt","flight-review"],
    q: "Your last flight review was completed on 20 October 2024, and you have had no practical tests or WINGS phases since. You may act as PIC through:",
    choices: [
      "20 October 2026",
      "30 September 2026",
      "31 October 2026",
      "31 December 2026"
    ],
    a: 2,
    exp: "61.56(c) requires the flight review within the preceding 24 calendar months, which means the month of the review counts in full: October 2024 plus 24 calendar months ends on 31 October 2026. Calendar-month rules in Part 61 always run to the end of the month, which can give you a few extra days but never fewer."
  },
  {
    id: "ifr-mcq-101", type: "mcq", topic: "ifr", ref: "AIM 5-3-8", tags: ["kt","ira"],
    q: "You are cleared to hold west of a VOR on the 270 radial, standard turns, inbound course 090. You arrive at the VOR on a heading of 230°. Which entry and initial outbound heading apply?",
    choices: [
      "Teardrop entry; turn to 240",
      "Parallel entry; turn left to 270",
      "Direct entry; turn right to 270",
      "Teardrop entry; turn to 300"
    ],
    a: 0,
    exp: "Right turns with inbound 090 put the pattern on the south side of the course with an outbound heading of 270. The teardrop sector is the 70° wedge on the holding side adjacent to the outbound heading, headings 200° through 270°; 230° falls inside it. For a teardrop you fly outbound at 30° toward the holding side of the outbound course, 270 − 30 = 240, for one minute, then turn right to intercept the inbound course. Parallel would apply to arrival headings between 270 and 020 via north; direct to the remaining 180°."
  },
  {
    id: "ifr-mcq-102", type: "mcq", topic: "ifr", ref: "AIM 5-3-8", tags: ["kt","ira"],
    q: "Maximum holding airspeeds and leg timing for a propeller airplane holding at 8,000 ft MSL are:",
    choices: [
      "200 KIAS; 1-minute inbound legs",
      "230 KIAS; 1-minute inbound legs",
      "230 KIAS; 1.5-minute inbound legs",
      "265 KIAS; 1.5-minute inbound legs"
    ],
    a: 1,
    exp: "AIM 5-3-8: maximum holding speeds are 200 KIAS at or below 6,000 ft MSL, 230 KIAS from 6,001 through 14,000 ft, and 265 KIAS above 14,000 ft. Inbound leg timing is 1 minute at or below 14,000 ft MSL and 1.5 minutes above. At 8,000 ft a Seminole or 172 is far below the speed limit, but the limit matters when a charted hold shows a lower restricted speed."
  },
  {
    id: "ifr-mcq-103", type: "mcq", topic: "ifr", ref: "14 CFR 91.175(c)(3)", tags: ["kt","ira"],
    q: "At the DA on an ILS you see only the approach light system. Under 91.175 you may:",
    choices: [
      "Continue to land, since the approach lights are an acceptable visual reference",
      "Continue to 50 ft above the runway and then decide",
      "Descend to 100 ft above the touchdown zone elevation; descending below that requires the red terminating bars or red side row bars, or another runway reference, to be visible",
      "Execute the missed approach immediately, because approach lights alone never authorize descent below DA"
    ],
    a: 2,
    exp: "91.175(c)(3)(i): with the approach light system in sight you may descend below DA/MDA but not below 100 ft above the touchdown zone elevation unless the red terminating bars or red side row bars are also distinctly visible and identifiable. The other references in the list (threshold, threshold markings or lights, REIL, VGSI, touchdown zone or its markings and lights, runway or its markings and lights) permit descent to landing provided the flight visibility is at or above the published minimum and the airplane is continuously in position for a normal landing."
  },
  {
    id: "ifr-mcq-104", type: "mcq", topic: "ifr", ref: "14 CFR 97.3; AIM 5-4-7", tags: ["kt","ira"],
    q: "Aircraft approach categories are based on 1.3 times the stall speed in the landing configuration at maximum certificated landing weight (or Vref). Category B covers speeds of:",
    choices: [
      "Less than 91 knots",
      "141 to 165 knots",
      "121 to 140 knots",
      "91 to 120 knots"
    ],
    a: 3,
    exp: "Category A is less than 91 knots, B is 91–120, C is 121–140, D is 141–165, and E is above 165. A 172S (1.3 × Vso 40 ≈ 52 knots) and a Seminole (1.3 × 55 ≈ 72 knots) are both Category A by certification, but AIM 5-4-7 says that if you fly the approach faster than the category's upper limit, for example circling at 95 knots, you must use the minimums for the higher category because the circling radius grows with speed."
  },
  {
    id: "weather-mcq-101", type: "mcq", topic: "weather", ref: "AC 00-45H; AIM 7-1-28", tags: ["kt","ira"],
    q: "Decode: METAR KSGF 181953Z 24012G20KT 3SM -RA BR BKN008 OVC015 12/11 A2968 RMK AO2 SLP052 P0004. Which statement is correct?",
    choices: [
      "Ceiling 1,500 ft, visibility 3 miles, conditions are MVFR",
      "Wind 240° at 12 knots with no gusts, visibility 3 km, heavy rain",
      "Ceiling 800 ft, visibility 3 SM, light rain and mist, conditions are IFR",
      "Temperature 12 °F, dew point 11 °F, altimeter 29.68, LIFR"
    ],
    a: 2,
    exp: "Wind 240° true at 12 gusting 20 knots; visibility 3 statute miles; light rain (-RA) and mist (BR); broken at 800 ft AGL and overcast at 1,500, so the ceiling is the lowest broken or overcast layer, 800 ft; temperature 12 °C, dew point 11 °C; altimeter 29.68; automated station with a precipitation sensor; sea-level pressure 1005.2 hPa; 0.04 inch of precipitation in the past hour. A ceiling of 500 to below 1,000 ft is IFR even though 3 SM visibility alone would be MVFR; the worse category governs."
  },
  {
    id: "weather-mcq-102", type: "mcq", topic: "weather", ref: "AC 00-45H; AIM 7-1-28", tags: ["kt","ira"],
    q: "TAF KSGF 181720Z 1818/1918 20010KT P6SM SCT040 FM190000 17015G25KT 4SM TSRA BKN025CB TEMPO 1902/1905 1SM +TSRA OVC010 FM190600 27008KT P6SM SKC. What is forecast at 0330Z on the 19th?",
    choices: [
      "A steady 1 SM in heavy thunderstorms for the full period from 0200Z to 0500Z",
      "Wind 200° at 10, visibility more than 6 SM, scattered at 4,000",
      "Wind 270° at 8, more than 6 SM, clear skies",
      "Prevailing wind 170° at 15 gusting 25, 4 SM in thunderstorms and rain, ceiling 2,500 broken, with temporary periods of 1 SM in heavy thunderstorms and rain and a 1,000-ft overcast"
    ],
    a: 3,
    exp: "The FM190000 group sets the prevailing conditions from 0000Z on the 19th until the next FM group at 0600Z: wind 170° at 15 gusting 25, 4 SM, thunderstorms with rain, ceiling broken 2,500 ft with cumulonimbus. TEMPO 1902/1905 means temporary fluctuations between 0200Z and 0500Z, each lasting less than an hour and in total less than half the period: 1 SM, heavy thunderstorms and rain, overcast 1,000. At 0330Z you plan for the prevailing conditions and must be ready for the TEMPO conditions. P6SM means more than 6 SM; SKC means clear."
  },
  {
    id: "weather-mcq-103", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["kt","ira"],
    q: "In a METAR, the group 'RMK AO2 PK WND 24035/1912 WSHFT 1905 FRQ LTGICCG OHD TS OHD MOV NE' tells you:",
    choices: [
      "Automated station with a precipitation discriminator; peak wind 240° at 35 knots at 1912Z; wind shift at 1905Z; frequent in-cloud and cloud-to-ground lightning overhead; thunderstorm overhead moving northeast",
      "Automated station without a precipitation discriminator; peak wind 240° at 35 knots at 1912Z; wind shift at 1905Z; frequent in-cloud and cloud-to-ground lightning overhead; thunderstorm overhead moving northeast",
      "Manual observation; wind 240° at 35 knots; frequent lightning to the northeast",
      "Automated station; wind shear at 1905Z; thunderstorm moving away to the northeast at 35 knots"
    ],
    a: 0,
    exp: "AO2 is an automated station with a precipitation discriminator (AO1 lacks one). PK WND dddff/hhmm gives the peak wind since the last report, here 240° at 35 knots at 1912Z. WSHFT 1905 is a wind shift at 1905Z (FROPA would be added if a frontal passage was indicated). FRQ LTGICCG OHD is frequent in-cloud and cloud-to-ground lightning overhead, and TS OHD MOV NE places the thunderstorm overhead moving northeast. WSHFT is a wind shift, not wind shear."
  },
  {
    id: "airspace-mcq-101", type: "mcq", topic: "airspace", ref: "AIM 3-2-4", tags: ["kt","cax"],
    q: "The typical dimensions of Class C airspace are:",
    choices: [
      "A 5-NM-radius core to 2,500 ft AGL and a 20-NM shelf to 4,000 ft AGL",
      "A 4-NM-radius area from the surface to 2,500 ft above the airport",
      "A 10-NM-radius core from the surface to 10,000 ft MSL with a 30-NM Mode C veil",
      "A 5-NM-radius core from the surface to 4,000 ft above the airport, and a 10-NM-radius shelf from 1,200 ft to 4,000 ft above the airport"
    ],
    a: 3,
    exp: "AIM 3-2-4: Class C usually consists of a 5-NM-radius core from the surface to 4,000 ft above the airport elevation and a 10-NM-radius shelf area from 1,200 ft to 4,000 ft above the airport elevation, with an outer area of about 20 NM where radar service is provided on request. Two-way radio communication must be established before entry and a Mode C transponder and ADS-B Out are required in and above it. The 4-NM/2,500-ft figure describes a typical Class D."
  },
  {
    id: "airspace-mcq-102", type: "mcq", topic: "airspace", ref: "14 CFR 91.125; AIM 4-3-13", tags: ["kt","cax"],
    q: "While taxiing at a towered airport with a failed radio you receive a flashing red light from the tower. It means:",
    choices: [
      "Taxi clear of the runway in use",
      "Cleared to taxi",
      "Stop",
      "Return to the starting point on the airport"
    ],
    a: 0,
    exp: "On the ground, flashing red means taxi clear of the runway in use; steady red means stop; flashing green means cleared to taxi; flashing white means return to the starting point on the airport; steady green means cleared for takeoff; alternating red and green means exercise extreme caution. In flight, flashing red means the airport is unsafe, do not land. Acknowledge on the ground in daylight by moving the ailerons or rudder, at night by blinking the landing or navigation lights."
  },
  {
    id: "airspace-mcq-103", type: "mcq", topic: "airspace", ref: "14 CFR 91.215; 91.225; AIM 3-2-3", tags: ["kt","cax"],
    q: "The Mode C veil around a Class B primary airport extends to what radius and altitude, and what equipment does it require?",
    choices: [
      "20 NM, up to 10,000 ft MSL; Mode C transponder only",
      "30 NM, from the surface up to 10,000 ft MSL; an altitude-reporting transponder and ADS-B Out",
      "30 NM, up to 18,000 ft MSL; ADS-B Out only",
      "10 NM, up to 4,000 ft AGL; Mode C transponder and two-way radio"
    ],
    a: 1,
    exp: "91.215 and 91.225 require an operating altitude-reporting transponder and ADS-B Out within 30 NM of a Class B primary airport from the surface up to 10,000 ft MSL, even when flying outside the Class B itself (the exception is for aircraft certificated without an engine-driven electrical system, which may operate outside the Class B and below its ceiling). The same equipment is required in and above Class C and in Class E at and above 10,000 ft MSL (except at or below 2,500 ft AGL)."
  },
  {
    id: "aero-mcq-101", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["kt","cax"],
    q: "A C172S stalls at 48 KIAS clean in level flight. In a coordinated, level 60° banked turn the stall speed is approximately:",
    choices: [
      "56 KIAS",
      "62 KIAS",
      "96 KIAS",
      "68 KIAS"
    ],
    a: 3,
    exp: "Load factor in a level turn is 1 ÷ cos(bank); at 60° that is 2.0 G. Stall speed increases with the square root of the load factor: 48 × √2 = 48 × 1.414 ≈ 68 KIAS. At 45° the load factor is 1.41 and stall speed rises to about 57 KIAS. Stall speed does not double at 2 G; the 96-knot answer forgets the square root."
  },
  {
    id: "aero-mcq-102", type: "mcq", topic: "aero", ref: "PHAK Ch. 11; AFH Ch. 5", tags: ["kt","cax"],
    q: "As a normally aspirated airplane climbs, how do Vx and Vy change in indicated airspeed, and where do they meet?",
    choices: [
      "Vx increases and Vy decreases; they converge at the absolute ceiling",
      "Both increase; they never meet",
      "Vx decreases and Vy increases; they converge at the service ceiling",
      "Both decrease; they converge at the service ceiling"
    ],
    a: 0,
    exp: "Indicated Vx rises slowly with altitude while indicated Vy falls, and they become equal at the absolute ceiling, where the only possible climb rate is zero, so the best angle and best rate are the same speed. The service ceiling is where the rate of climb falls to 100 fpm (50 fpm single-engine in a twin) and the two speeds are still slightly apart. Practically, POHs publish Vy decreasing roughly 1 knot per 1,000 ft."
  },
  {
    id: "nav-mcq-101", type: "mcq", topic: "nav", ref: "IFH Ch. 9; AIM 1-1-3", tags: ["kt","ira"],
    q: "A VOR CDI with 10° full-scale deflection shows one dot (2°) off course. At 60 NM from the station, how far off the course are you?",
    choices: [
      "1 NM",
      "0.5 NM",
      "4 NM",
      "2 NM"
    ],
    a: 3,
    exp: "One degree of arc at 60 NM subtends about 1 NM (the 60-to-1 rule), so 2° at 60 NM is about 2 NM. The same one-dot deflection at 30 NM is only 1 NM, which is why a VOR course becomes more sensitive, and the needle livelier, as you approach the station. Localizer deflection is about four times as sensitive, roughly 0.5° per dot."
  },
  {
    id: "nav-mcq-102", type: "mcq", topic: "nav", ref: "IFH Ch. 9", tags: ["kt","ira"],
    q: "You are located on the 120 radial of a VOR. To fly directly to the station with the CDI centered and a TO indication, you should set the OBS to:",
    choices: [
      "300",
      "120",
      "030",
      "210"
    ],
    a: 0,
    exp: "A radial is a magnetic course FROM the station. Being on the 120 radial means the station bears the reciprocal, 300°, from you. Setting 300 in the OBS gives a centered needle with TO; setting 120 also centers the needle but with FROM, and flying 120 would take you away. The 030 and 210 settings are 90° off and give full-scale deflection."
  },
  {
    id: "aeromed-mcq-101", type: "mcq", topic: "aeromed", ref: "AIM 8-1-2(d)", tags: ["kt","cax"],
    q: "After a recreational SCUBA dive that did not require a controlled (decompression-stop) ascent, how long should you wait before flying at cabin altitudes up to 8,000 ft, and before flying above 8,000 ft?",
    choices: [
      "4 hours; 12 hours",
      "24 hours; 48 hours",
      "12 hours; 24 hours",
      "8 hours; 24 hours"
    ],
    a: 2,
    exp: "AIM 8-1-2: wait at least 12 hours after a dive that did not require a controlled ascent before flying up to 8,000 ft, and at least 24 hours before flying above 8,000 ft. After any dive requiring a controlled ascent the wait is 24 hours regardless of altitude. The reduced pressure at altitude lets dissolved nitrogen come out of solution, producing decompression sickness even at altitudes that are otherwise benign."
  },
  {
    id: "aeromed-mcq-102", type: "mcq", topic: "aeromed", ref: "AC 61-107B; PHAK Ch. 17", tags: ["kt","cax"],
    q: "An unpressurized airplane loses its oxygen supply at 18,000 ft. The approximate time of useful consciousness is:",
    choices: [
      "30 to 60 seconds",
      "3 to 5 minutes",
      "1 to 2 minutes",
      "20 to 30 minutes"
    ],
    a: 3,
    exp: "The FAA TUC table gives 20 to 30 minutes at 18,000 ft (FL180), 10 minutes at FL220, 3 to 5 minutes at FL250, 1 to 2 minutes at FL300, and 30 to 60 seconds at FL350. The long TUC at 18,000 ft is deceptive: judgment degrades well before consciousness is lost, so the practical window to recognize the problem and descend or restore oxygen is much shorter than the table implies."
  },
  {
    id: "regs-card-101", type: "card", topic: "regs", ref: "14 CFR 91.155", tags: ["kt","cax"],
    front: "91.155 VFR minimums by airspace (quick table)",
    back: "Class A: not applicable.\nB: 3 SM, clear of clouds.\nC, D, E <10,000: 3 SM; 500 below / 1,000 above / 2,000 horizontal.\nE ≥10,000 MSL: 5 SM; 1,000 / 1,000 / 1 SM.\nG ≤1,200 AGL: day 1 SM clear of clouds; night 3 SM 500/1,000/2,000.\nG >1,200 AGL <10,000: day 1 SM, night 3 SM; 500/1,000/2,000.\nG >1,200 AGL and ≥10,000 MSL: 5 SM; 1,000/1,000/1 SM."
  },
  {
    id: "ifr-card-101", type: "card", topic: "ifr", ref: "AIM 5-3-8", tags: ["kt","ira"],
    front: "Holding numbers: speeds, timing, entry sectors",
    back: "Max speeds: ≤6,000 ft 200 KIAS; 6,001–14,000 ft 230 KIAS; >14,000 ft 265 KIAS.\nInbound leg: 1 min ≤14,000 ft; 1.5 min above.\nEntries (standard, right turns): teardrop = 70° sector on holding side next to outbound heading (fly outbound heading ±30° toward holding side); parallel = 110° sector on non-holding side; direct = the other 180°.\nStart timing outbound abeam the fix or wings level."
  },
  {
    id: "weather-card-101", type: "card", topic: "weather", ref: "AC 00-45H; AIM 7-1-7", tags: ["kt","ira"],
    front: "Flight categories from ceiling and visibility",
    back: "LIFR: ceiling < 500 ft and/or visibility < 1 SM.\nIFR: ceiling 500 to < 1,000 ft and/or vis 1 to < 3 SM.\nMVFR: ceiling 1,000–3,000 ft and/or vis 3–5 SM.\nVFR: ceiling > 3,000 ft and vis > 5 SM.\nCeiling = lowest BKN or OVC layer (or VV). The lower category of the two governs."
  },
  {
    id: "aero-card-101", type: "card", topic: "aero", ref: "PHAK Ch. 5", tags: ["kt","cax"],
    front: "Load factor and stall speed in a level turn",
    back: "n = 1 ÷ cos(bank): 30° = 1.15; 45° = 1.41; 60° = 2.0; 75° = 3.9.\nVs(turn) = Vs × √n: at 60°, Vs × 1.41 (48 → 68 KIAS in a 172S).\n172S normal-category limit +3.8 / −1.52 G (reached at about 75° bank in level flight)."
  },
  {
    id: "nav-card-101", type: "card", topic: "nav", ref: "IFH Ch. 9", tags: ["kt","ira"],
    front: "VOR and localizer CDI arithmetic",
    back: "VOR: 10° full scale, 2° per dot. 1° ≈ 1 NM at 60 NM (≈ 100 ft per NM). One dot at 30 NM ≈ 1 NM; at 60 NM ≈ 2 NM.\nLocalizer: about 2.5° full scale, 0.5° per dot (4× VOR sensitivity); 0.5° at 5 NM ≈ 265 ft.\nRadial = course FROM; bearing TO = radial ± 180."
  },
  // ═════════════════════════════════════════════════════════════════
  //  COMMS — Communications & ATC
  // ═════════════════════════════════════════════════════════════════
  {
    id: "comms-mcq-022", type: "mcq", topic: "comms", ref: "AIM 4-1-20; P/CG", tags: ["kt","cax"],
    q: "Leaving a Class C area after flight following, the controller says 'Radar service terminated, squawk VFR, frequency change approved.' What should you do?",
    choices: [
      "Set 1200 and squawk ident to confirm the change",
      "Keep the discrete code so the next facility can identify you, and switch to the next approach frequency",
      "Set 1200, continue to monitor the frequency until you leave the area, and self-navigate; traffic advisories have ended",
      "Set 7600, since you are no longer in contact with ATC"
    ],
    a: 2,
    exp: "Radar service terminated means traffic advisories and any other radar services have ended; 'squawk VFR' means set 1200 (AIM 4-1-20). Ident is activated only when ATC requests it, and 7600 is the lost-communications code. If you want advisories from the next facility you call them and they assign a new code; keeping the old discrete code can confuse automation. Many pilots remain on the frequency briefly to hear traffic calls until clear of the terminal area."
  },
  {
    id: "comms-mcq-023", type: "mcq", topic: "comms", ref: "P/CG; AIM 5-5-6", tags: ["kt","ira"],
    q: "While being vectored for an approach, ATC says 'Resume own navigation, direct HAVEN.' This means:",
    choices: [
      "You may fly any route you wish to the destination",
      "You should return to the last assigned heading",
      "Your IFR clearance has been cancelled",
      "Vectoring has ended; you are responsible for navigating to HAVEN and should remain on the assigned altitude until otherwise cleared"
    ],
    a: 3,
    exp: "The Pilot/Controller Glossary defines 'resume own navigation' as the end of radar vectoring; the pilot is responsible for navigating as cleared, here direct to HAVEN. It does not cancel the clearance and does not release you from the assigned altitude, and it is not a 'proceed as you wish' instruction. If the fix is not in your database or you cannot comply, say 'unable' and request an alternative."
  },
  // ═════════════════════════════════════════════════════════════════
  //  EMERG — Emergency Procedures
  // ═════════════════════════════════════════════════════════════════
  {
    id: "emerg-mcq-021", type: "mcq", topic: "emerg", ref: "AFH Ch. 18; C172S POH Sec. 3", tags: ["cax"],
    q: "Smoke fills the cabin from an unknown source. Which combination of actions is most appropriate?",
    choices: [
      "Open vents and windows immediately and continue to the destination",
      "Don available oxygen or smoke goggles, identify whether the source is electrical or engine, run the appropriate fire checklist, and land as soon as possible; ventilate once the fire is confirmed out",
      "Shut down the engine to stop the smoke and glide to the nearest field",
      "Climb to a higher altitude where the cooler air will suppress combustion"
    ],
    a: 1,
    exp: "Smoke is a symptom; the checklist you run depends on whether the source is electrical (burning insulation smell, avionics failures) or engine or heater related (oil or exhaust smell). The AFH priorities are protect yourself, isolate the source, and get on the ground. Ventilating before the fire is out feeds it oxygen, although most POHs do have you open vents after an electrical fire has been extinguished to clear the cabin. Shutting down a healthy engine for smoke of unknown origin converts one emergency into two."
  },
  {
    id: "emerg-mcq-022", type: "mcq", topic: "emerg", ref: "AIM 6-2-4; 14 CFR 91.207", tags: ["kt"],
    q: "After a forced landing in a remote area, the airplane is intact and the occupants are uninjured. Regarding the ELT, you should:",
    choices: [
      "Leave it off to avoid a false alarm and wait for the overdue flight plan to trigger a search",
      "Remove it from the airplane and carry it away from the wreckage to improve the signal",
      "Activate it manually with the cockpit remote switch, leave it on, and if possible monitor 121.5 on the aircraft radio to confirm it is transmitting",
      "Activate it only during the first 5 minutes after the hour"
    ],
    a: 2,
    exp: "The ELT's G-switch may not have triggered in a smooth forced landing, so activate it manually (most installations have a cockpit remote switch) and leave it on; a 406 MHz unit will alert the satellites with your registration within minutes and the 121.5 homing signal helps the search aircraft. The 5-minutes-after-the-hour window applies to tests, not real activations. Keep the antenna connected and the unit where it can transmit; stay with the airplane, which is far easier to find than a person."
  },
  {
    id: "emerg-mcq-023", type: "mcq", topic: "emerg", ref: "AFH Ch. 18", tags: ["cax"],
    q: "A cabin door pops open just after liftoff in a C172S. The AFH advises:",
    choices: [
      "Land immediately on the remaining runway regardless of distance",
      "Reduce airspeed to minimum controllable to reduce the air load on the door",
      "Have the passenger hold the door while you slip away from it to force it closed",
      "Fly the airplane, climb to pattern altitude, fly a normal pattern, and land; do not unbuckle to try to close the door"
    ],
    a: 3,
    exp: "AFH Chapter 18: an open door rarely affects flight and accidents from it come from distraction and loss of control. Fly the airplane, climb to pattern altitude, fly a normal pattern, and land normally; nobody unbuckles. A slip toward the open door tends to pull it wider and a slip away from it can help it close, but neither is worth the attention in the traffic pattern. Minimum controllable airspeed at low altitude with a distraction is the worst possible configuration."
  },
  {
    id: "regs-mcq-106", type: "mcq", topic: "regs", ref: "14 CFR 91.155(a),(b)", tags: ["kt","cax"],
    q: "At night in Class G airspace at 900 ft AGL, more than 3 SM from an airport, the basic VFR minimums are:",
    choices: [
      "1 SM, clear of clouds",
      "5 SM; 1,000 ft below, 1,000 ft above, 1 SM horizontal",
      "3 SM, clear of clouds",
      "3 SM; 500 ft below, 1,000 ft above, 2,000 ft horizontal"
    ],
    a: 3,
    exp: "Class G at 1,200 ft AGL or below: day is 1 SM and clear of clouds; night is 3 SM with 500/1,000/2,000 cloud clearance. The exception in 91.155(b)(2) that allows 1 SM clear of clouds at night applies only in the traffic pattern within one-half mile of the runway. Above 1,200 ft AGL but below 10,000 ft MSL, night Class G is also 3 SM with 500/1,000/2,000."
  },
  {
    id: "ifr-mcq-105", type: "mcq", topic: "ifr", ref: "14 CFR 91.169(c)", tags: ["kt","ira"],
    q: "For an airport with a precision approach to be filed as an IFR alternate under standard alternate minimums, the forecast at the ETA must be at least:",
    choices: [
      "Ceiling 600 ft and visibility 2 SM",
      "Ceiling 800 ft and visibility 2 SM",
      "Ceiling 1,000 ft and visibility 3 SM",
      "Ceiling 2,000 ft and visibility 3 SM"
    ],
    a: 0,
    exp: "91.169(c): unless otherwise specified in the approach procedure's alternate minimums, a precision approach requires 600-2 and a non-precision approach 800-2 at the ETA; an airport without an instrument approach can be an alternate only if descent from the MEA, approach, and landing can be made under basic VFR. The 2,000-3 figures are the 91.169(b) test for whether an alternate is required at all (ETA ±1 hour at the destination). An RNAV LNAV approach is planned as non-precision for this purpose."
  },
  {
    id: "ifr-mcq-106", type: "mcq", topic: "ifr", ref: "14 CFR 91.175(c),(e)", tags: ["kt","ira"],
    q: "On a non-precision approach you reach the MDA well before the missed approach point and see nothing. The correct action is to:",
    choices: [
      "Execute the missed approach immediately, turning toward the published missed approach course",
      "Continue at MDA to the missed approach point, and if the required references and flight visibility are not present, execute the missed approach there",
      "Descend 100 ft below MDA to improve the chance of seeing the runway",
      "Begin a circle to land at MDA to find the airport"
    ],
    a: 1,
    exp: "The MDA is an altitude, not a point; you fly level at it until the missed approach point, because the runway environment may come into view anywhere before the MAP. 91.175(e) requires the missed approach when the references of 91.175(c) are not visible at the MAP (or, for a DA, at the DA). Starting the missed early is acceptable only in the sense that you may climb early, but you must still fly to the MAP before turning, because obstacle protection on the missed is built from the MAP. Descending below MDA without the references is a violation."
  },
  {
    id: "weather-mcq-104", type: "mcq", topic: "weather", ref: "AC 00-45H; AIM 7-1-6", tags: ["kt","ira"],
    q: "An AIRMET Zulu, SIGMET, and Convective SIGMET respectively warn of:",
    choices: [
      "Turbulence; thunderstorms; volcanic ash",
      "Moderate icing and freezing level; severe non-convective weather such as severe icing or severe turbulence; thunderstorm-related hazards",
      "IFR conditions and mountain obscuration; moderate turbulence; severe turbulence",
      "Freezing level only; all turbulence; embedded thunderstorms only"
    ],
    a: 1,
    exp: "AIRMET Sierra covers IFR conditions and mountain obscuration, Tango moderate turbulence and sustained surface winds of 30 knots or more and low-level wind shear, Zulu moderate icing and freezing levels. A SIGMET covers non-convective hazards severe enough for all aircraft: severe icing, severe or extreme turbulence, dust or sand storms reducing visibility below 3 SM, and volcanic ash. A Convective SIGMET covers severe thunderstorms, embedded thunderstorms, lines of thunderstorms, and areas of thunderstorms affecting 40 percent or more of a 3,000-square-mile area, and implies severe turbulence, severe icing, and low-level wind shear."
  },
  {
    id: "weather-mcq-105", type: "mcq", topic: "weather", ref: "AC 00-45H", tags: ["kt","ira"],
    q: "A winds aloft forecast (FB) shows '9900' at 3,000 ft and '731960' at 30,000 ft. These decode as:",
    choices: [
      "Wind 990° at 0 knots; wind 730° at 19 knots, temperature +60",
      "Calm; wind 073° at 19 knots, temperature −60 °C",
      "Light and variable; wind 230° at 119 knots, temperature −60 °C",
      "Light and variable; wind 230° at 19 knots, temperature +60 °C"
    ],
    a: 2,
    exp: "9900 means light and variable (less than 5 knots). When the direction digits are greater than 36, 50 has been added to the direction to indicate winds of 100 knots or more: 73 − 50 = 23, so direction 230°, and the speed is 100 + 19 = 119 knots. Temperatures above 24,000 ft are always negative, so the sign is omitted: −60 °C. Temperatures are not forecast at 3,000 ft or within 2,500 ft of the station elevation."
  },
  {
    id: "airspace-mcq-104", type: "mcq", topic: "airspace", ref: "14 CFR 91.129; 91.130; AIM 3-2-5", tags: ["kt","cax"],
    q: "To enter Class D airspace, a pilot must:",
    choices: [
      "Receive an explicit clearance from the tower",
      "Have a Mode C transponder and ADS-B Out",
      "Establish two-way radio communication with the tower before entry; a reply with your call sign establishes it, even 'standby'",
      "File a VFR flight plan"
    ],
    a: 2,
    exp: "91.129(c): two-way radio communications must be established with the ATC facility providing services before entering Class D (and 91.130 says the same for Class C). AIM 3-2-1 explains that if the controller responds with your call sign, communications are established even if the reply is 'standby'; if the controller says 'aircraft calling, standby' without your call sign, they are not. A clearance is required for Class B only. Transponder and ADS-B are required for Class C and B, not plain Class D."
  },
  {
    id: "aero-mcq-103", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["kt","cax"],
    q: "In a level, coordinated 45° banked turn, the load factor and the percentage increase in stall speed are approximately:",
    choices: [
      "1.15 G and 7 percent",
      "1.41 G and 19 percent",
      "2.0 G and 41 percent",
      "1.41 G and 41 percent"
    ],
    a: 1,
    exp: "1 ÷ cos 45° = 1.41 G. Stall speed rises by the square root of the load factor: √1.41 ≈ 1.19, a 19 percent increase (48 KIAS becomes about 57). The 41 percent figure is the stall speed increase at 2.0 G (60° bank), not at 45°. Keeping this straight matters when deciding how much bank you can afford in the pattern at pattern speeds."
  },
  {
    id: "aero-mcq-104", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["kt","cax"],
    q: "An airplane with a normal-category limit load factor of +3.8 G will reach that limit in a level, coordinated turn at a bank angle of approximately:",
    choices: [
      "60°",
      "67°",
      "75°",
      "80°"
    ],
    a: 2,
    exp: "n = 1 ÷ cos(bank), so cos(bank) = 1 ÷ 3.8 = 0.263, and the bank angle is about 75°. At 60° the load factor is only 2 G; at 80° it is about 5.8 G. The steep-turn maneuver at 50° in the Commercial ACS produces about 1.56 G, well inside the envelope, but the curve becomes very steep past 60°, which is why a few extra degrees of bank in a spiral can overstress the airplane."
  },
  {
    id: "nav-mcq-103", type: "mcq", topic: "nav", ref: "IFH Ch. 9", tags: ["kt","ira"],
    q: "Tracking inbound on the 045 radial (course 225 to the station) with a 15-knot wind from the right, you find a 10° correction holds the course. After station passage, to continue outbound on the 225 radial you should:",
    choices: [
      "Reverse the correction to 10° left, because the wind is now from the left",
      "Keep the OBS at 225 and the same 10° right correction; the wind is from the same side relative to your course",
      "Set the OBS to 045 to avoid reverse sensing",
      "Fly heading 225 with no correction until the needle moves"
    ],
    a: 1,
    exp: "Your course over the ground is unchanged at 225°, so a wind from the right of track inbound is still from the right outbound and the same crab angle holds. The OBS stays at 225; the flag simply changes from TO to FROM at station passage and the needle keeps normal sensing. Setting 045 outbound would give reverse sensing. The classic error is reversing the correction because the radial number changed."
  },
  {
    id: "aeromed-mcq-103", type: "mcq", topic: "aeromed", ref: "AIM 8-1-2; AIM 8-1-3; PHAK Ch. 17", tags: ["kt","cax"],
    q: "Hyperventilation and hypoxia share many symptoms. If you suspect either in flight at 7,000 ft in an unpressurized airplane without supplemental oxygen, the best initial response is to:",
    choices: [
      "Consciously slow the breathing rate, talk aloud or breathe into a paper bag, since hypoxia is unlikely at that altitude and hyperventilation is the probable cause",
      "Descend immediately below 5,000 ft",
      "Breathe faster and deeper to increase oxygen intake",
      "Lean the mixture to reduce carbon monoxide"
    ],
    a: 0,
    exp: "At 7,000 ft significant hypoxia is unlikely in a healthy pilot, so the symptoms (lightheadedness, tingling, dizziness) most likely come from hyperventilation, which blows off carbon dioxide. Slowing the breathing rate, talking, or rebreathing exhaled air restores CO2. If supplemental oxygen were available the AIM says to use it, because it treats hypoxia and the slower, deliberate breathing usually corrects hyperventilation as well. Breathing faster makes hyperventilation worse. Carbon monoxide is a separate problem with a separate fix: fresh air and the heater off."
  },
  {
    id: "airspace-card-101", type: "card", topic: "airspace", ref: "AIM 3-2-3; 3-2-4; 3-2-5", tags: ["kt","cax"],
    front: "Class B, C, D dimensions and entry requirements",
    back: "B: individually tailored, usually to 10,000 ft MSL; clearance required; 3 SM clear of clouds; Mode C + ADS-B within 30-NM veil.\nC: 5-NM core to 4,000 ft AGL, 10-NM shelf 1,200–4,000 ft AGL, 20-NM outer area; two-way comms established; Mode C + ADS-B in and above.\nD: usually 4 NM to 2,500 ft AGL; two-way comms established (reply with call sign, even 'standby').\nE at/above 10,000 MSL: Mode C + ADS-B."
  },
  {
    id: "aeromed-card-101", type: "card", topic: "aeromed", ref: "AIM 8-1-2", tags: ["kt","cax"],
    front: "SCUBA and flying: wait times",
    back: "Dive without controlled ascent (no decompression stops): wait 12 hours before flying up to 8,000 ft; 24 hours before flying above 8,000 ft.\nDive requiring a controlled ascent (decompression stops): wait 24 hours before any flight.\nAltitudes are actual flight or cabin altitude; reason is nitrogen coming out of solution (decompression sickness)."
  }
);
