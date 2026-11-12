window.BANK = window.BANK || [];
window.BANK.push(
  // ═══════════════════════════ AERO ═══════════════════════════
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "aero-mcq-001", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review"],
    q: "In steady, unaccelerated straight-and-level flight, which statement about the four forces is correct?",
    choices: [
      "The sum of all upward forces equals the sum of all downward forces, and the sum of all forward forces equals the sum of all rearward forces",
      "Lift always exceeds weight slightly so the airplane can maintain altitude against drag",
      "Thrust equals lift and drag equals weight",
      "Thrust must exceed drag by a small margin to keep the airplane from decelerating"
    ],
    a: 0,
    exp: "Unaccelerated flight means the net force is zero: upward forces (chiefly lift) balance downward forces (weight plus any tail download), and forward forces (thrust) balance rearward forces (drag). Lift does not exceed weight in level flight; if it did, the airplane would accelerate upward. Thrust and drag are an independent pair from lift and weight."
  },
  {
    id: "aero-mcq-002", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "An airplane's critical angle of attack is best described as",
    choices: [
      "The angle of attack that produces the best lift-to-drag ratio and therefore best glide",
      "The angle of attack at which flow separation causes the coefficient of lift to peak and then fall; it is unchanged by weight, airspeed, or density altitude",
      "An angle of attack that increases with weight because a heavier airplane needs more lift",
      "An angle of attack that decreases at high density altitude because the air is less dense"
    ],
    a: 1,
    exp: "A wing always stalls at the same critical angle of attack (typically 15–20° for a conventional airfoil) regardless of weight, airspeed, load factor, or density altitude. What changes with those variables is the indicated airspeed at which the critical AOA is reached, which is why stall speed rises with weight and load factor even though the stalling AOA does not."
  },
  {
    id: "aero-mcq-003", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["cfi"],
    q: "According to the lift equation L = CL × ½ρV² × S, doubling true airspeed while holding everything else constant will",
    choices: [
      "Double lift",
      "Increase lift by a factor of 1.41",
      "Quadruple lift",
      "Have no effect on lift because the angle of attack is unchanged"
    ],
    a: 2,
    exp: "Lift varies with the square of velocity, so doubling V multiplies lift by four. The other factors are the coefficient of lift (a function of AOA and airfoil shape), air density, and wing area. This squared relationship is why a small airspeed change at low speed matters so much and why stall speed scales with the square root of load factor and weight."
  },
  {
    id: "aero-mcq-004", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "How do induced drag and parasite drag change with airspeed, and what is significant about the speed where they are equal?",
    choices: [
      "Both increase with airspeed; where they are equal, the airplane is at its maximum level-flight speed",
      "Induced drag increases with airspeed while parasite drag decreases; where they are equal is Va",
      "Induced drag decreases with airspeed while parasite drag increases; where they are equal is the stall speed",
      "Induced drag decreases with airspeed while parasite drag increases; where they are equal, total drag is at its minimum and the airplane is at L/D max"
    ],
    a: 3,
    exp: "Induced drag is a by-product of lift and is greatest at high angles of attack (low speed), falling off roughly with the inverse square of speed. Parasite drag (form, skin friction, interference) rises with the square of speed. Total drag is lowest where the two curves cross; that point is L/D max, which yields best glide and, for a propeller airplane, close to best range."
  },
  {
    id: "aero-mcq-005", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "A Cessna 172S has a published best glide speed of 68 KIAS at maximum gross weight. If the airplane is 400 lb lighter, the pilot should expect that",
    choices: [
      "The best glide speed is unchanged because L/D max occurs at a fixed indicated airspeed",
      "The glide ratio is unchanged, but the best glide airspeed is slightly higher than 68 KIAS",
      "The glide ratio improves, and the best glide airspeed is unchanged",
      "The glide ratio is unchanged, but the best glide airspeed is slightly lower than 68 KIAS"
    ],
    a: 3,
    exp: "L/D max occurs at a specific angle of attack, not a specific airspeed. A lighter airplane reaches that AOA at a lower indicated airspeed, so best glide speed decreases (and increases when heavier). The glide ratio and glide distance are the same at any weight; the heavier airplane simply covers the same ground faster and arrives sooner. Weight does not change the lift-to-drag ratio of the airframe."
  },
  {
    id: "aero-mcq-006", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "An airplane flying in the region of reversed command (behind the power curve) exhibits which characteristic?",
    choices: [
      "Pitch controls altitude and power controls airspeed exactly as in cruise flight",
      "A lower airspeed requires a higher power setting to maintain level flight",
      "A lower airspeed requires a lower power setting to maintain level flight",
      "The airplane cannot be flown in this region without stalling"
    ],
    a: 1,
    exp: "On the back side of the power-required curve, flying slower raises induced drag faster than parasite drag falls, so more power is needed to hold altitude as speed decreases. This is the region of slow flight, short-field approaches, and the initial climb. The danger is that pitching up to arrest a sink rate without adding power raises drag further and deepens the sink."
  },
  {
    id: "aero-mcq-007", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "In a constant-altitude, coordinated 60° banked turn, the load factor and the approximate stall speed of a Cessna 172S (Vs1 48 KIAS) are",
    choices: [
      "2 G and about 68 KIAS",
      "1.41 G and about 57 KIAS",
      "2 G and about 96 KIAS",
      "3 G and about 83 KIAS"
    ],
    a: 0,
    exp: "Load factor in a level turn equals 1 ÷ cos(bank angle); cos 60° = 0.5, so n = 2 G. Stall speed increases with the square root of the load factor: 48 × √2 ≈ 68 KIAS. A 45° bank gives 1.41 G and roughly 57 KIAS. Doubling the stall speed (96 KIAS) would require 4 G, which is a 75.5° bank."
  },
  {
    id: "aero-mcq-008", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "Why does design maneuvering speed (Va) decrease as the airplane's weight decreases?",
    choices: [
      "Because the wing's structural limit load is lower at lighter weights",
      "Because a lighter airplane has a lower stall speed, so it can stall before exceeding the limit load factor at the same airspeed",
      "Because a lighter airplane reaches its critical angle of attack at a lower airspeed, so a given gust or control input produces a larger load factor; a lower Va keeps the wing stalling before the limit load is exceeded",
      "Because the regulations define Va as a fixed percentage of stall speed at maximum gross weight"
    ],
    a: 2,
    exp: "Va is the speed at which a full, abrupt control deflection (or a strong gust) causes the wing to stall just as the limit load factor is reached. The wing can produce a given amount of lift at a given speed regardless of weight; a lighter airplane with the same lift experiences a greater acceleration (higher G). To keep that G at or below the limit, the protective speed must be lower. The published Va for the 172S falls from 105 KIAS at 2,550 lb to 90 KIAS at 1,900 lb."
  },
  {
    id: "aero-mcq-009", type: "mcq", topic: "aero", ref: "PHAK Ch. 11", tags: ["flight-review", "cfi"],
    q: "As altitude increases, how do the indicated airspeeds for Vx and Vy change, and where do they meet?",
    choices: [
      "Both increase with altitude and never converge",
      "Vx decreases and Vy increases, converging at the service ceiling",
      "Vx increases and Vy decreases, converging at the absolute ceiling where only one airspeed produces zero excess thrust and power",
      "Both decrease with altitude at the same rate, so they remain a constant distance apart"
    ],
    a: 2,
    exp: "Vx (best angle, maximum excess thrust) rises slightly in IAS with altitude, while Vy (best rate, maximum excess power) falls in IAS as altitude increases. They converge at the absolute ceiling, where the airplane has exactly zero climb capability at a single airspeed. The service ceiling is lower, defined as the altitude where the best rate of climb drops to 100 fpm (50 fpm single-engine for a twin)."
  },
  {
    id: "aero-mcq-010", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "Ground effect is most pronounced within about one wingspan of the surface and causes which aerodynamic change?",
    choices: [
      "A reduction in induced drag because the ground interferes with wingtip vortices and downwash, so the airplane can lift off before it can sustain flight out of ground effect",
      "An increase in induced drag because the ground compresses the air beneath the wing, cushioning the airplane",
      "A reduction in parasite drag because airflow over the fuselage is smoother near the surface",
      "An increase in lift because the ground increases air density beneath the wing"
    ],
    a: 0,
    exp: "The surface restricts the downwash and wingtip vortices, reducing the induced angle of attack and induced drag (per the PHAK, about 48 percent at one-tenth of a wingspan, 24 percent at one-quarter wingspan, and about 7 percent at half a wingspan). This lets an airplane lift off at a speed that cannot sustain climb once out of ground effect, which is why a premature liftoff with a high density altitude or an overloaded airplane can end in settling back to the runway. On landing the same effect produces float if excess speed is carried."
  },
  {
    id: "aero-mcq-011", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "Adverse yaw in a roll into a left turn is caused by",
    choices: [
      "Torque from the engine pulling the nose left",
      "The down-aileron on the right wing creating more lift and more induced drag, yawing the nose to the right (away from the turn)",
      "The up-aileron on the left wing creating more drag, yawing the nose to the left (into the turn)",
      "Gyroscopic precession of the propeller acting 90° ahead of the applied force"
    ],
    a: 1,
    exp: "To roll left, the right aileron deflects down, increasing that wing's lift and, with it, its induced drag; the left aileron goes up, reducing lift and drag. The drag differential yaws the nose opposite the direction of roll. Rudder applied in the direction of the roll, plus design features like differential and Frise ailerons, counteracts it."
  },
  {
    id: "aero-mcq-012", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "In a single-engine airplane with a clockwise-turning propeller (viewed from the cockpit), which left-turning tendency is strongest during a full-power climb at a high angle of attack?",
    choices: [
      "Gyroscopic precession, because the propeller disc is tilted relative to the relative wind",
      "Torque reaction, because the airplane rolls left in reaction to the propeller turning right",
      "Spiraling slipstream, because the slipstream strikes the right side of the fin",
      "P-factor (asymmetric thrust), because the descending blade on the right side has a higher angle of attack and produces more thrust"
    ],
    a: 3,
    exp: "At high AOA the descending (right) blade meets the relative wind at a larger angle than the ascending (left) blade, so thrust is offset to the right of center and yaws the nose left. Torque and spiraling slipstream are also present (spiraling slipstream strikes the LEFT side of the vertical fin, yawing the nose left), but P-factor is the dominant effect at high AOA and high power. Gyroscopic precession is mainly a tailwheel-airplane issue when the tail comes up on takeoff."
  },
  {
    id: "aero-mcq-013", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["cfi"],
    q: "An airplane that, after a pitch disturbance, oscillates with steadily decreasing amplitude and returns to its trimmed attitude is exhibiting",
    choices: [
      "Positive static stability and neutral dynamic stability",
      "Positive static stability and positive dynamic stability",
      "Neutral static stability and positive dynamic stability",
      "Positive static stability and negative dynamic stability"
    ],
    a: 1,
    exp: "Static stability describes the initial tendency after a disturbance (positive = tendency to return). Dynamic stability describes what happens over time (positive = oscillations damp out). Diverging oscillations would indicate positive static but negative dynamic stability, a dangerous combination. Longitudinal stability about the lateral axis is set mainly by CG location and horizontal tail; lateral stability (roll) by dihedral, sweepback, and keel effect; directional stability (yaw) by the vertical fin."
  },
  {
    id: "aero-mcq-014", type: "mcq", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "Compared with a forward CG, loading an airplane toward its aft CG limit results in",
    choices: [
      "Greater longitudinal stability, a higher stall speed, and a lower cruise speed",
      "Greater longitudinal stability, a lower stall speed, and a higher cruise speed",
      "Reduced longitudinal stability, a lower stall speed, and a slightly higher cruise speed",
      "Reduced longitudinal stability, a higher stall speed, and a slightly lower cruise speed"
    ],
    a: 2,
    exp: "With an aft CG the horizontal tail needs less download to balance the airplane, so the wing carries less total lift; that lowers stall speed, reduces trim drag, and raises cruise speed slightly. The cost is a shorter arm between CG and the tail, which makes the airplane less stable in pitch and harder to recover from a stall or spin. A forward CG is more stable but needs more tail download, raising stall speed and drag."
  },
  {
    id: "aero-mcq-015", type: "mcq", topic: "aero", ref: "AFH Ch. 5", tags: ["flight-review", "cfi"],
    q: "The PARE spin recovery sequence recommended for most light airplanes is",
    choices: [
      "Power idle, Ailerons neutral, Rudder full opposite rotation, Elevator briskly forward to break the stall; then neutralize the rudder when rotation stops and recover from the dive",
      "Power full, Ailerons into the spin, Rudder neutral, Elevator back to raise the nose",
      "Power idle, Ailerons opposite rotation, Rudder neutral, Elevator forward",
      "Pitch down, Ailerons neutral, Rudder with the rotation, Elevator aft"
    ],
    a: 0,
    exp: "Reducing power removes gyroscopic and slipstream effects that can flatten the spin; neutral ailerons avoid aggravating the spin (aileron into the spin can flatten it); full opposite rudder stops the rotation; and forward elevator breaks the stall. Once rotation stops, neutralize the rudder promptly to avoid entering a spin in the other direction, then level the wings and recover from the resulting dive without exceeding Vne or the limit load factor. Always follow the specific POH procedure."
  },
  {
    id: "aero-mcq-016", type: "mcq", topic: "aero", ref: "AFH Ch. 5", tags: ["flight-review", "cfi"],
    q: "A pilot in a nose-low, rolling descent notices airspeed rapidly increasing. This most likely indicates a",
    choices: [
      "Spiral dive, which is NOT stalled; recovery is to reduce power, level the wings, then gently raise the nose",
      "Developed spin, which requires full opposite rudder and forward elevator",
      "Incipient spin, which requires neutral ailerons and power to idle",
      "Spin that has transitioned to a flat mode, requiring full power to recover"
    ],
    a: 0,
    exp: "In a spin the wing is stalled and the airspeed stays low and fairly steady near stall speed. In a spiral the wing is flying, the bank steepens, and the airspeed builds rapidly. Applying spin recovery (forward elevator) to a spiral only steepens the dive; instead reduce power, roll level, and ease out of the dive. Misidentifying the two can result in structural failure."
  },
  {
    id: "aero-mcq-017", type: "mcq", topic: "aero", ref: "AIM 7-4-4", tags: ["flight-review", "ipc", "atp"],
    q: "Wingtip vortices generated by a large jet in flight tend to",
    choices: [
      "Rise above the aircraft's flight path and dissipate within a few seconds",
      "Remain at the aircraft's altitude indefinitely in calm air",
      "Sink below the aircraft's flight path at several hundred feet per minute (about 300–500 fpm), slowing their descent and stabilizing up to roughly 900 ft below, and drift with the wind",
      "Sink at about 2,000 fpm and reach the ground within a mile"
    ],
    a: 2,
    exp: "Vortices sink at a few hundred feet per minute, slow their descent, and level off below the generating aircraft's path, which is why the technique is to fly at or above the preceding aircraft's flight path and upwind of it. Vortex strength is greatest when the generating aircraft is heavy, clean, and slow (high AOA). A light crosswind of a few knots can hold the upwind vortex on the runway or move the downwind vortex onto a parallel runway."
  },
  {
    id: "aero-mcq-018", type: "mcq", topic: "aero", ref: "AIM 7-4-6, 7-4-9", tags: ["flight-review", "atp"],
    q: "Departing on the same runway behind a heavy jet that has just taken off, the recommended technique and the separation ATC applies are",
    choices: [
      "Rotate before the heavy's rotation point, climb below its flight path, and ATC provides 1 minute of separation",
      "Rotate after the heavy's rotation point and remain below its flight path until turning away; ATC provides 1 minute",
      "Rotate at the same point as the heavy and accept 2 minutes of separation",
      "Rotate before the heavy's rotation point, climb above and upwind of its flight path, and expect ATC to apply a 2-minute (or equivalent radar) interval, 3 minutes if departing from an intersection"
    ],
    a: 3,
    exp: "On takeoff the vortex begins at the preceding aircraft's rotation point, so lifting off before that point and climbing above and upwind of its path avoids the wake. ATC applies a 2-minute interval behind a departing heavy or super on the same runway, and 3 minutes when the following aircraft departs from an intersection (or in the opposite direction). On landing behind a large aircraft, stay above its path and land beyond its touchdown point. Controllers may not reduce or waive the intervals behind a heavy or super; only the 3-minute intersection/opposite-direction interval behind a large (non-B757) aircraft may be waived on specific pilot request, and the pilot then takes responsibility for wake avoidance."
  },
  {
    id: "aero-mcq-019", type: "mcq", topic: "aero", ref: "PHAK Ch. 6", tags: ["flight-review", "cfi"],
    q: "Which flap type increases wing area as well as camber, producing the largest increase in lift coefficient with the least drag penalty at moderate settings?",
    choices: [
      "Plain flap",
      "Fowler flap",
      "Split flap",
      "Slotted flap"
    ],
    a: 1,
    exp: "A Fowler flap slides aft on tracks, increasing both camber and wing area, and often opens a slot as well; it is the most effective but mechanically complex (common on transport aircraft; the Cessna single-slotted flap has some Fowler motion). A plain flap simply hinges down, a split flap deflects only the lower surface (high drag, little pitch change), and a slotted flap ducts high-energy air over the flap to delay separation. Initial flap settings mostly add lift; larger settings mostly add drag, which is why go-around technique calls for retracting to an intermediate setting first."
  },
  {
    id: "aero-mcq-020", type: "mcq", topic: "aero", ref: "PHAK Ch. 5, AC 91-74", tags: ["flight-review", "ipc"],
    q: "A thin layer of frost on the upper wing surface before takeoff",
    choices: [
      "Is acceptable if it is thin enough to see the paint through it, because it adds negligible weight",
      "Disrupts the smooth airflow over the wing, reducing lift and raising stall speed enough to prevent takeoff or cause a stall just after liftoff, and must be removed",
      "Only matters because of its weight and can be ignored on a short runway with full power",
      "Is only hazardous if it has formed on the lower surface of the wing"
    ],
    a: 1,
    exp: "Frost's roughness causes early boundary-layer separation, which can reduce maximum lift by as much as 30 percent and raise stall speed well above normal even though the airplane's weight is essentially unchanged. The airplane may rotate at the usual speed and then be unable to climb or may stall in ground effect. Under 14 CFR 91.527 (large/turbine) and good practice for all aircraft, frost adhering to wings, control surfaces, and propellers must be removed before takeoff; the old 'polished frost' allowance was deleted from 91.527 and the FAA no longer accepts polishing."
  },
  {
    id: "aero-mcq-021", type: "mcq", topic: "aero", ref: "PHAK Ch. 11", tags: ["flight-review"],
    q: "Density altitude is best defined as",
    choices: [
      "Pressure altitude corrected for nonstandard temperature; a high density altitude reduces engine power, propeller efficiency, and wing lift",
      "The altitude indicated when the altimeter is set to 29.92 in Hg",
      "The altitude above mean sea level corrected for nonstandard pressure",
      "True altitude corrected for temperature and humidity"
    ],
    a: 0,
    exp: "Density altitude is the altitude in the standard atmosphere that has the same air density as the actual conditions; it rises with high temperature, low pressure, high elevation, and high humidity. A normally aspirated engine loses roughly 3 percent of its power per 1,000 ft of density altitude, the propeller gets less bite, and the wing must be flown at a higher true airspeed to generate the same lift. Pressure altitude is what the altimeter shows at 29.92."
  },
  {
    id: "aero-mcq-022", type: "mcq", topic: "aero", ref: "AFH Ch. 9", tags: ["flight-review", "cfi"],
    q: "A pilot plans eights-on-pylons with a groundspeed of 100 knots. The approximate pivotal altitude is",
    choices: [
      "1,130 ft AGL",
      "500 ft AGL",
      "1,000 ft MSL",
      "885 ft AGL"
    ],
    a: 3,
    exp: "Pivotal altitude in feet AGL is approximately groundspeed in knots squared divided by 11.3: 100² ÷ 11.3 ≈ 885 ft AGL (in mph the divisor is 15). Because groundspeed changes around the eight with the wind, pivotal altitude is highest when the airplane is headed downwind (highest groundspeed) and lowest when headed into the wind, so the pilot climbs as groundspeed increases and descends as it decreases. Pivotal altitude is independent of the distance from the pylon."
  },
  {
    id: "aero-mcq-023", type: "mcq", topic: "aero", ref: "PHAK Ch. 10", tags: ["flight-review", "cfi"],
    q: "An airplane weighs 2,400 lb with a CG at station 40.0. How far aft does the CG move if 100 lb is shifted from the forward baggage area (station 10) to the aft baggage area (station 70)?",
    choices: [
      "0.4 in",
      "1.25 in",
      "2.5 in",
      "6.0 in"
    ],
    a: 2,
    exp: "The weight-shift formula is: weight shifted ÷ total weight = change in CG ÷ distance moved. So ΔCG = 100 × (70 − 10) ÷ 2,400 = 6,000 ÷ 2,400 = 2.5 in aft. The total weight is unchanged, so only the moment changes. The same relationship, solved for weight, tells you how much to move to bring an out-of-limits CG back into the envelope."
  },
  {
    id: "aero-mcq-024", type: "mcq", topic: "aero", ref: "PHAK Ch. 11", tags: ["flight-review"],
    q: "According to the PHAK rule of thumb, a 10 percent increase in gross weight produces approximately what change in takeoff performance?",
    choices: [
      "A 5 percent increase in takeoff distance",
      "A 10 percent increase in takeoff distance and no change in liftoff speed",
      "A 21 percent increase in takeoff distance, driven by a higher liftoff speed, more mass to accelerate, and more rolling resistance",
      "A 50 percent increase in takeoff distance"
    ],
    a: 2,
    exp: "The PHAK states that a 10 percent increase in weight causes about a 5 percent increase in liftoff speed, a reduced rate of acceleration, and roughly a 21 percent increase in takeoff distance (the distance varies roughly with the square of the weight ratio). Other performance factors are density altitude, headwind/tailwind components (a tailwind hurts more than an equal headwind helps), runway slope, and surface condition. Landing distance also rises with weight because approach speed must increase to hold the same AOA margin."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "aero-card-001", type: "card", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    front: "Load factor in a level, coordinated turn and the stall speed multiplier at 30°, 45°, and 60° of bank",
    back: "n = 1 ÷ cos(bank)\nVs(turn) = Vs × √n\n30°: 1.15 G → Vs × 1.07\n45°: 1.41 G → Vs × 1.19\n60°: 2.0 G → Vs × 1.41\n75.5°: 4 G → Vs × 2.0"
  },
  {
    id: "aero-card-002", type: "card", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    front: "The four left-turning tendencies of a single-engine airplane with a clockwise-rotating propeller, and when each is strongest",
    back: "Torque reaction: rolls airplane left; strongest at high power, low airspeed.\nP-factor: descending blade (right) makes more thrust at high AOA; yaws left.\nSpiraling slipstream: strikes left side of fin; yaws left; strongest at high power, low speed.\nGyroscopic precession: force applied to prop disc acts 90° ahead in rotation; raising a tailwheel on takeoff yaws left."
  },
  {
    id: "aero-card-003", type: "card", topic: "aero", ref: "PHAK Ch. 5", tags: ["cfi"],
    front: "Design features that provide lateral (roll) stability, and the feature that provides directional (yaw) stability",
    back: "Lateral: dihedral (sideslip increases AOA on the low wing), sweepback (low wing presents more effective span to the relative wind in a sideslip), keel effect (side area and CG below the wing), and high-wing/pendulum effect.\nDirectional: vertical fin (weathervane effect) plus fuselage side area aft of the CG; sweepback contributes."
  },
  {
    id: "aero-card-004", type: "card", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    front: "Effects of a forward vs aft CG on stability, stall speed, cruise speed, and stall/spin recovery",
    back: "Forward CG: more longitudinally stable, more tail download → higher stall speed, more drag → lower cruise, heavier elevator forces, possible inability to flare.\nAft CG: less stable, lower stall speed, slightly faster cruise, light elevator forces, harder stall/spin recovery (may be unrecoverable past the aft limit)."
  },
  {
    id: "aero-card-005", type: "card", topic: "aero", ref: "AIM 7-4-4, 7-4-6", tags: ["flight-review", "atp"],
    front: "Wake turbulence: when vortices are strongest, how they move, and the avoidance techniques for takeoff and landing",
    back: "Strongest: heavy, clean, slow (high AOA).\nMovement: sink several hundred fpm (~300–500), slowing and stabilizing up to ~900 ft below the flight path, drift with the wind; light crosswind (~1–5 kt) can hold a vortex on the runway.\nTakeoff behind a departing large aircraft: rotate before its rotation point, climb above and upwind of its path.\nLanding behind a landing large aircraft: stay at or above its path, land beyond its touchdown point.\nLanding behind a departing one: land well before its rotation point."
  },
  {
    id: "aero-card-006", type: "card", topic: "aero", ref: "AFH Ch. 9, Commercial ACS", tags: ["cfi"],
    front: "Commercial maneuvers: define the chandelle, lazy eight, steep spiral, and eights-on-pylons",
    back: "Chandelle: maximum-performance 180° climbing turn; constant 30° bank to the 90° point with pitch increasing, then constant pitch with bank rolling out to level at just above stall at 180°.\nLazy eight: two 180° turns in opposite directions with continuously changing pitch and bank; max pitch at 45°, max bank (~30°) at 90°, level at 180°.\nSteep spiral: constant-radius gliding turn around a point, ≥3 turns, bank up to ~60°, airspeed constant, clearing engine periodically.\nEights-on-pylons: at pivotal altitude (GS² ÷ 11.3 ft AGL), the lateral reference line stays on the pylon; altitude is adjusted with groundspeed."
  },
  {
    id: "aero-card-007", type: "card", topic: "aero", ref: "PHAK Ch. 10", tags: ["flight-review"],
    front: "Weight and balance formulas: CG location, moment, and the weight-shift formula",
    back: "Moment = weight × arm\nCG = total moment ÷ total weight\nWeight shift: (weight shifted ÷ total weight) = (ΔCG ÷ distance weight is moved)\nAdding/removing weight: new CG = (old moment ± added moment) ÷ (old weight ± added weight)"
  },
  {
    id: "aero-card-008", type: "card", topic: "aero", ref: "PHAK Ch. 6, 11", tags: ["flight-review"],
    front: "Constant-speed propeller basics: what the blue knob does, why the engine is 'oversquare' at high MP and low RPM, and what the governor holds constant",
    back: "Prop control sets the governor's target RPM; the governor varies blade pitch (via oil pressure) to hold that RPM as load/airspeed change.\nThrottle sets manifold pressure (power); prop sets RPM. Low pitch/high RPM for takeoff (small bite, like low gear); high pitch/low RPM for cruise (efficiency).\nOversquare (MP in inches > RPM/100) is permitted when the POH power chart allows it; follow the chart, and reduce MP before RPM, increase RPM before MP, to avoid overboost on turbocharged engines."
  },

  // ───────────────────────── SCENARIOS ─────────────────────────
  {
    id: "aero-scen-001", type: "scenario", topic: "aero", ref: "PHAK Ch. 5, AFH Ch. 4", tags: ["flight-review", "cfi"],
    q: "You are flying a Cessna 172S at 2,500 lb on a summer afternoon from a field with a density altitude of 7,200 ft. On a short-field takeoff with 10° flaps the airplane lifts off at 55 KIAS, but as you pitch for Vx it stops climbing about 15 ft above the runway with the stall horn chirping and 1,500 ft of runway ahead. What is happening and what is the correct response?",
    choices: [
      "The engine is losing power from carburetor ice; apply full carburetor heat and continue the climb",
      "You lifted off in ground effect at a speed and angle of attack that cannot sustain a climb out of ground effect at this density altitude; lower the nose slightly to accelerate in ground effect toward Vx/Vy before climbing, or if acceleration is not possible, land straight ahead on the remaining runway",
      "The flaps are producing too much drag; retract them immediately to 0° to reduce drag and climb",
      "You are in the region of reversed command; pull back harder to trade airspeed for altitude and clear the obstacle"
    ],
    a: 1,
    exp: "Ground effect reduced induced drag enough to let the airplane fly at a speed that cannot support climb once the wing is more than a wingspan above the surface, and at 7,200 ft density altitude the normally aspirated engine is making roughly 75 percent of its rated power. Pulling harder only increases induced drag at an AOA already near critical. Retracting flaps at this speed would raise the stall speed and risk settling. The 172S is fuel injected, so carburetor ice is not a factor. Accelerate in ground effect; if the airplane will not accelerate, use the remaining runway."
  },
  {
    id: "aero-scen-002", type: "scenario", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "In a Cessna 172S loaded to 1,950 lb you are descending through moderate turbulence toward a mountain airport. The POH lists Va as 105 KIAS at 2,550 lb, 98 at 2,200 lb, and 90 at 1,900 lb. You are indicating 104 KIAS because you want to stay well under the 129 KIAS Vno. A strong updraft hits. Which assessment is correct?",
    choices: [
      "You are safe because 104 KIAS is below the published Va of 105 KIAS",
      "You are safe because the airplane is light, so the wing cannot generate enough lift to exceed the limit load",
      "You are safe as long as you stay below Vno, which is the turbulent-air penetration speed",
      "You are about 14 knots above the Va appropriate to your weight; at this speed a strong gust can load the wing past 3.8 G before it stalls, so you should slow to roughly 90–92 KIAS"
    ],
    a: 3,
    exp: "Va decreases with weight because a lighter airplane reaches the critical AOA at a lower speed; above that speed the wing can generate more lift than the limit load allows before it stalls and unloads itself. At 1,950 lb the appropriate Va is just over 90 KIAS. Vno is the maximum structural cruising speed for smooth air only. Being light does not protect the structure; the same lift acting on less mass produces a higher load factor."
  },
  {
    id: "aero-scen-003", type: "scenario", topic: "aero", ref: "AIM 7-4-6, 7-4-9", tags: ["flight-review", "atp"],
    q: "You are number two for departure in a PA-44 Seminole at a towered airport behind a Boeing 767 (heavy) departing the same 10,000 ft runway from the full length. The wind is 3 knots from the left, across the runway. The 767 rotates about 5,000 ft down the runway. Tower clears you for takeoff 2 minutes later with 'caution wake turbulence.' What is the best course of action?",
    choices: [
      "Accept the clearance, plan to lift off well before the 767's rotation point, climb on or above its climb path, and turn upwind (left) as early as practical; be ready to delay further if the wind would hold the vortex on the runway",
      "Accept the clearance and remain below the 767's climb path until clear of the airport, because vortices rise above the generating aircraft",
      "Request an intersection departure to reduce the wait, since the required interval from an intersection is 2 minutes",
      "Decline the clearance because ATC is required to provide 3 minutes behind a heavy from the full length of the same runway"
    ],
    a: 0,
    exp: "ATC's standard interval behind a departing heavy on the same runway is 2 minutes (3 minutes from an intersection, which is longer, not shorter). The vortex begins at the 767's rotation point and sinks below its path, so a light twin that lifts off early and climbs above and upwind of that path stays clear. The 3-knot crosswind from the left can hold the upwind (left) vortex near the runway and push the downwind one away; a slight delay or a turn toward the upwind side is reasonable. The pilot can always ask for more time."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "aero-oral-001", type: "oral", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi", "atp"],
    q: "Explain why an airplane always stalls at the same angle of attack but not the same airspeed. Give examples of what changes the stall speed.",
    answer: "The critical angle of attack is a property of the airfoil: beyond it the boundary layer separates and the lift coefficient falls, regardless of how fast the airplane is going. Airspeed matters only because lift depends on CL × ½ρV² × S; whenever the airplane needs more lift for a given speed it must fly at a higher AOA, so it reaches the critical AOA at a higher speed. Anything that increases the lift required raises stall speed: more weight, more load factor in a turn or pull-up, or a forward CG that needs more tail download. Anything that changes the wing's lift curve, such as flaps, frost, or ice, changes the stall AOA and speed. Because the stall speed is an indicated airspeed, density altitude does not change the IAS at which the airplane stalls, although true airspeed is higher.",
    points: [
      "Critical AOA is fixed for the airfoil/configuration",
      "Stall speed varies with weight (√ of weight ratio) and load factor (√n)",
      "Load factor in a level turn = 1/cos bank; 60° = 2 G, Vs × 1.41",
      "Forward CG raises stall speed; flaps lower it; ice/frost raise it",
      "Indicated stall speed is essentially constant with altitude"
    ]
  },
  {
    id: "aero-oral-002", type: "oral", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "What is maneuvering speed, why does it change with weight, and what does it actually protect you from?",
    answer: "Va is the speed at or below which a single full, abrupt deflection of one primary control, or a strong vertical gust, will stall the wing before the limit load factor is exceeded. It is derived from Vs × √(limit load factor); that formula sets the minimum the manufacturer may use (for the 172S, 48 × √3.8 ≈ 94 knots in round indicated numbers), and the manufacturer may publish a higher value, which is why the 172S POH gives 105 KIAS at 2,550 lb. Because Vs falls as weight falls, Va falls too: a lighter airplane generates the same lift at a given speed but has less mass to accelerate, so it experiences a higher G. Va protects against stalling the wing above the limit load with a single control input; it does not protect against repeated or reversing control inputs, combined inputs, or control-surface loads at the rudder, as the AA587 accident showed.",
    points: [
      "Definition: full single abrupt control input stalls wing before limit load",
      "Va ≈ Vs × √(limit load factor); published in POH",
      "Decreases with decreasing weight (172S: 105/98/90 KIAS)",
      "Not a guarantee against multiple or alternating inputs",
      "Different from Vno (smooth-air structural cruise) and Vb (turbulence penetration, transport category)"
    ]
  },
  {
    id: "aero-oral-003", type: "oral", topic: "aero", ref: "PHAK Ch. 5", tags: ["cfi", "atp"],
    q: "Describe how induced and parasite drag vary with airspeed, and how that relates to best glide, best endurance, and best range for a propeller airplane.",
    answer: "Induced drag comes from producing lift; it is highest at high AOA and falls roughly with the inverse square of airspeed. Parasite drag (form, friction, interference) rises with the square of airspeed. Total drag is minimum where the two are equal, which is L/D max; that is best glide speed and gives the greatest distance per foot of altitude lost. For a propeller airplane, minimum power required (best endurance) is at a slower speed, about 76 percent of L/D max speed, and best range is at L/D max in no wind, with corrections of faster into a headwind and slower with a tailwind. Weight moves every one of these speeds up or down because they are all tied to specific angles of attack.",
    points: [
      "Induced drag ∝ 1/V²; parasite drag ∝ V²",
      "Crossover point = minimum total drag = L/D max = best glide",
      "Best endurance (prop) at minimum power required, slower than L/D max",
      "Best range (prop) at L/D max; adjust for wind",
      "All of these are AOA-based, so they scale with weight"
    ]
  },
  {
    id: "aero-oral-004", type: "oral", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "What is the region of reversed command, when do you encounter it, and why is it dangerous during an approach?",
    answer: "The region of reversed command is the slow-speed side of the power-required curve, where it takes more power to fly slower in level flight because induced drag is rising faster than parasite drag is falling. You are in it during slow flight, soft- and short-field approaches, and the initial climb. The hazard on approach is that a pilot who sees a high sink rate and raises the nose without adding power increases AOA and drag, which deepens the sink and can lead to a stall or a hard, short landing. The correct response is to add power to arrest the sink and manage airspeed with pitch; a stabilized approach at the right speed keeps you from getting deep into the region in the first place.",
    points: [
      "Back side of the power curve: slower requires more power",
      "Occurs in slow flight, short-field approach, initial climb",
      "Pitching up without power increases drag and sink",
      "Add power to arrest sink; fly a stabilized approach",
      "Especially critical at high density altitude with less excess power"
    ]
  },
  {
    id: "aero-oral-005", type: "oral", topic: "aero", ref: "PHAK Ch. 5", tags: ["flight-review", "cfi"],
    q: "Explain the difference between a spin and a spiral dive and how you would recognize and recover from each.",
    answer: "A spin is an aggravated stall with autorotation: one wing is more deeply stalled than the other, the airplane descends in a helical path, and the airspeed stays low and roughly constant near stall speed. A spiral is a steep, descending turn in which the wing is not stalled; the bank steepens, the nose drops, and airspeed and G build quickly. The key discriminator is the airspeed indicator: steady and low means spin, increasing means spiral. For a spin, use PARE: power idle, ailerons neutral, rudder full opposite the rotation, elevator forward to break the stall, then neutralize rudder and recover from the dive. For a spiral, reduce power, roll wings level with coordinated aileron and rudder, then gently raise the nose, watching Vne and load factor. Applying forward elevator in a spiral steepens the dive.",
    points: [
      "Spin: stalled, autorotation, low steady airspeed",
      "Spiral: not stalled, steepening bank, airspeed building",
      "Spin recovery: PARE per POH",
      "Spiral recovery: power off, level wings, then ease nose up",
      "Wrong diagnosis can overstress the airframe"
    ]
  },
  {
    id: "aero-oral-006", type: "oral", topic: "aero", ref: "PHAK Ch. 11", tags: ["flight-review", "atp"],
    q: "Walk me through the factors that affect takeoff and landing performance, and tell me which ones a pilot can actually control on the day.",
    answer: "Takeoff and landing distances depend on density altitude (temperature, pressure altitude, humidity), weight, wind component, runway slope, runway surface and contamination, and the airplane's configuration and technique. Density altitude reduces engine power and propeller thrust and raises the true airspeed needed for liftoff, so distance grows quickly in hot, high conditions. Weight increases liftoff speed and reduces acceleration; a 10 percent weight increase adds about 21 percent to takeoff distance. A headwind shortens the ground roll, while a tailwind of the same strength lengthens it by more. Upslope or a soft, wet, or grassy surface adds rolling resistance. The pilot controls weight, time of day (temperature), runway choice for wind and slope, flap setting and technique, and the decision to go; the POH charts should be run with conservative margins, since the published numbers come from a new airplane flown by a test pilot.",
    points: [
      "Density altitude: power, thrust, and TAS all degrade",
      "Weight: +10% weight ≈ +21% takeoff distance",
      "Wind: headwind helps less than an equal tailwind hurts",
      "Runway slope and surface contamination",
      "Pilot-controllable: weight, timing, runway, technique, go/no-go",
      "Apply a safety margin to POH numbers"
    ]
  },

  // ═══════════════════════════ MULTI ═══════════════════════════
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "multi-mcq-001", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "The critical engine of a conventional light twin (both propellers turning clockwise as viewed from behind) is the left engine. Which factor set explains why its failure is more critical?",
    choices: [
      "The left engine drives the only hydraulic pump and vacuum pump",
      "P-factor, Accelerated slipstream, Spiraling slipstream, and Torque: the right engine's descending blade is farther from the centerline, creating a longer thrust arm and more yaw when the left engine fails",
      "The left engine is mounted farther from the centerline on most twins",
      "The right engine's propeller rotates in the opposite direction, so its thrust line is offset outboard"
    ],
    a: 1,
    exp: "With both props turning clockwise, each descending (higher-thrust) blade is on the right side of its engine. On the right engine that blade is farther from the fuselage centerline, so when the left engine fails the remaining thrust has a longer moment arm and produces more yaw and roll. Accelerated slipstream over the right wing, spiraling slipstream that helps the rudder only from the left engine, and torque that rolls the airplane left all compound the effect. PAST summarizes these factors."
  },
  {
    id: "multi-mcq-002", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "Why does the Piper PA-44 Seminole have no critical engine?",
    choices: [
      "Both engines are mounted close enough to the centerline that asymmetric thrust is negligible",
      "The Seminole's engines are counter-rotating, so P-factor is eliminated entirely on both engines",
      "The airplane's large rudder provides enough authority to make either engine failure equally controllable",
      "The right engine (an LO-360) turns counterclockwise as viewed from behind, so both descending blades are inboard and the thrust arms are equal; failure of either engine produces the same yaw and roll"
    ],
    a: 3,
    exp: "On the Seminole the left engine turns clockwise and the right engine counterclockwise (viewed from the cockpit), so each descending blade is next to the fuselage. The thrust arms are equal and the PAST factors are symmetric, so neither engine is more critical than the other. P-factor still exists on each engine; it simply affects both sides equally. 'No critical engine' does not mean 'no Vmc': the Seminole's Vmc is 56 KIAS."
  },
  {
    id: "multi-mcq-003", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Under the Vmc certification conditions described in the AFH (historically 14 CFR 23.149), Vmc is determined with which combination of conditions?",
    choices: [
      "Critical engine windmilling, maximum takeoff power on the operating engine, most unfavorable (aft) CG and weight, flaps in the takeoff position, gear up, out of ground effect, not more than 5° of bank toward the operating engine",
      "Critical engine feathered, cruise power on the operating engine, forward CG, gear down, flaps up, in ground effect, wings level",
      "Critical engine windmilling, maximum continuous power on the operating engine, forward CG, flaps and gear up, wings level, trimmed for cruise",
      "Both engines at takeoff power until one is cut, maximum landing weight, gear down, flaps landing, 10° of bank toward the operating engine"
    ],
    a: 0,
    exp: "The certification conditions produce the worst realistic control case shortly after takeoff: the critical engine's propeller windmilling (not feathered, maximum drag), takeoff power on the good engine, the most unfavorable (aft) CG for the shortest rudder arm, the most unfavorable weight (lighter raises Vmc; older editions said maximum takeoff weight), takeoff flaps, gear retracted, airplane trimmed for takeoff, airborne out of ground effect, and not more than 5° of bank. Part 23 was rewritten in 2017, so these conditions now live in the AFH and the consensus standards rather than in a numbered CFR section. Any real-world condition that differs changes the actual Vmc."
  },
  {
    id: "multi-mcq-004", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "How does a reduction in airplane weight affect Vmc at a given bank angle, and why?",
    choices: [
      "Vmc decreases because a lighter airplane has less inertia to resist yaw",
      "Vmc is unaffected because weight does not act in the yaw axis",
      "Vmc increases because the horizontal component of lift that counters the sideslip is smaller at a lighter weight, reducing the benefit of bank toward the operating engine",
      "Vmc decreases because the lighter airplane stalls at a lower speed"
    ],
    a: 2,
    exp: "When the airplane is banked toward the operating engine, the horizontal component of lift helps oppose the yawing and sideslip; at a given bank angle that component is proportional to weight, so a heavier airplane gets more help and has a lower Vmc. Lighter weight therefore raises Vmc, which is why certification uses the most unfavorable weight. Stall speed moves the other way (lower when light), narrowing the gap between stall and Vmc."
  },
  {
    id: "multi-mcq-005", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Compared with the sea-level standard-day certification value, how does a high density altitude change actual Vmc and stall speed in a normally aspirated twin?",
    choices: [
      "Both Vmc and stall speed (IAS) decrease",
      "Vmc increases because the rudder is less effective in thin air; stall speed is unchanged",
      "Vmc decreases because the operating engine produces less power and thus less asymmetric thrust, while indicated stall speed stays essentially the same; Vmc can fall below stall speed, so the airplane may stall before losing directional control",
      "Vmc is unchanged because it is a published red line; stall speed increases"
    ],
    a: 2,
    exp: "The red-line Vmc is a single certified value, but the actual speed at which directional control is lost depends on how much asymmetric thrust the operating engine makes. At altitude a normally aspirated engine makes less power, so actual Vmc is lower. Indicated stall speed does not change with altitude. At some altitude the two cross; above that, a Vmc demonstration becomes a single-engine stall, with a strong rolling moment toward the dead engine and a high probability of a spin. That is why Vmc demonstrations are done at a safe altitude and recovery begins at the first sign of stall or loss of control."
  },
  {
    id: "multi-mcq-006", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Which combination of conditions results in the LOWEST actual Vmc?",
    choices: [
      "Aft CG, gear up, windmilling propeller, bank toward the dead engine",
      "Forward CG, gear up, windmilling propeller, wings level",
      "Aft CG, gear down, feathered propeller, 5° bank toward the operating engine",
      "Forward CG, gear down, feathered propeller, 5° bank toward the operating engine"
    ],
    a: 3,
    exp: "A forward CG lengthens the rudder's arm about the CG; extended gear adds keel effect and some directional stability; a feathered propeller eliminates most of the drag on the dead side; and banking toward the operating engine uses the horizontal component of lift to counter the yaw. Each of these lowers Vmc. The opposite conditions (aft CG, gear up, windmilling prop, wings level or bank toward the dead engine) raise it; the AFH notes that Vmc may increase more than 3 knots for each degree of bank reduction between 5° and wings level, and banking toward the dead engine raises it further."
  },
  {
    id: "multi-mcq-007", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "pa44"],
    q: "Vsse, Vyse, and Vxse are, respectively,",
    choices: [
      "The single-engine stall speed, the single-engine best rate of climb speed (blue line), and the single-engine best angle of climb speed",
      "The minimum control speed, the single-engine cruise climb speed, and the single-engine obstacle-clearance speed",
      "The single-engine safe speed, the single-engine best glide speed, and the single-engine approach speed",
      "The safe intentional one-engine-inoperative speed (minimum speed at which to intentionally fail an engine in training), the single-engine best rate of climb speed (blue line), and the single-engine best angle of climb speed"
    ],
    a: 3,
    exp: "Vsse is the minimum speed at which the manufacturer recommends intentionally rendering an engine inoperative for training, chosen to reduce the chance of a loss of control; in the Seminole it is 82 KIAS. Vyse (88 KIAS, the blue radial) gives the best rate of climb or slowest descent with one engine inoperative. Vxse (82 KIAS) gives the best angle. The AFH says no in-flight engine failure should ever be introduced below Vsse; simulated failures on the takeoff roll are introduced at no more than 50 percent of Vmc, and below 3,000 ft AGL in flight the failure is simulated with a smooth throttle reduction rather than the mixture."
  },
  {
    id: "multi-mcq-008", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "With one engine inoperative and the airplane flown wings level with the ball centered, what is happening aerodynamically, and what is the better technique?",
    choices: [
      "The airplane is in zero sideslip and climb performance is maximized; this is the correct technique",
      "The airplane is sideslipping toward the operating engine, which improves rudder effectiveness; this is the correct technique",
      "The airplane is sideslipping toward the dead engine, adding drag and raising Vmc; instead bank about 2–3° toward the operating engine with the ball displaced roughly one-third to one-half toward the operating engine (zero sideslip)",
      "The airplane is sideslipping toward the dead engine, which lowers Vmc; the technique should be a 5° bank toward the dead engine"
    ],
    a: 2,
    exp: "With wings level and the ball centered, holding the nose straight with rudder alone requires the fuselage to be yawed into a sideslip toward the dead engine. That sideslip blankets the rudder, adds fuselage drag, and raises Vmc. Banking roughly 2° to 3° toward the operating engine so the horizontal component of lift offsets the rudder side force produces zero sideslip, best climb performance, and the lowest Vmc; the inclinometer then shows the ball about one-third to one-half deflected toward the operating engine. A yaw string on the nose would stream straight. Bank beyond about 5° trades climb for a sideslip in the other direction."
  },
  {
    id: "multi-mcq-009", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Losing one engine in a light twin reduces available power by 50 percent but reduces climb performance by",
    choices: [
      "About 80 percent or more, because climb depends on excess power above what is required for level flight, and most of that excess is lost",
      "About 50 percent, in proportion to the power lost",
      "About 25 percent, because the remaining engine can be operated at a higher power setting",
      "About 65 percent, because of the drag of the windmilling propeller"
    ],
    a: 0,
    exp: "Rate of climb is a function of excess power (power available minus power required). A light twin needs most of one engine's output just to maintain level flight; when half the power available disappears, nearly all the excess goes with it, and the added drag of the dead engine, rudder deflection, and sideslip removes more. The AFH puts the loss at 80 to 90 percent. A Seminole that climbs around 1,200 fpm on two engines may manage roughly 200 fpm or less on one at sea level, and the single-engine service ceiling may be only a few thousand feet on a warm day."
  },
  {
    id: "multi-mcq-010", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "After an engine failure in a light twin, which single item creates the greatest drag and therefore the greatest loss of single-engine climb performance until it is dealt with?",
    choices: [
      "Extended landing gear",
      "A windmilling propeller on the failed engine",
      "Full flaps",
      "The deflected rudder needed to hold heading"
    ],
    a: 1,
    exp: "A windmilling propeller at low pitch acts like a large flat disc and is the single greatest drag item; feathering it is what makes a light twin's single-engine performance possible at all. Extended landing gear and then flaps are the next largest penalties in most light twins, which is why the engine-failure flow is flaps up, gear up, identify, verify, feather. Rudder deflection and sideslip add drag too, which is why zero sideslip matters, but far less than a windmilling prop."
  },
  {
    id: "multi-mcq-011", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp", "pa44"],
    q: "In the engine-failure-in-flight flow, the pilot identifies the failed engine by 'dead foot, dead engine' and then verifies before feathering by",
    choices: [
      "Checking which fuel pressure gauge reads zero",
      "Pulling the propeller control of the suspected engine to feather and watching for a change in yaw",
      "Retarding the throttle of the suspected dead engine; if there is no change in yaw or sound, the identification is confirmed",
      "Turning off the magnetos on the suspected engine and listening for a change"
    ],
    a: 2,
    exp: "The foot that is not pushing (no rudder pressure required on that side) is on the dead engine's side. Verification uses the throttle because it is reversible: if you pull the wrong throttle you will immediately feel the yaw change and can push it back up. Feathering the wrong propeller, or killing the good engine with mags or mixture, converts an emergency into a glider. The full flow is mixtures, props, throttles forward; flaps up; gear up; identify; verify; feather; then secure (mixture, fuel, mags, alternator, cowl flaps per POH)."
  },
  {
    id: "multi-mcq-012", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp", "pa44"],
    q: "An engine fails during the takeoff roll in a PA-44 Seminole at 60 KIAS, before rotation. The correct action is to",
    choices: [
      "Continue the takeoff on one engine because Vmc is 56 KIAS and the airplane is controllable",
      "Rotate at 75 KIAS as planned and climb at Vyse",
      "Rotate early, accelerate in ground effect to Vyse, then retract the gear",
      "Close both throttles immediately and stop on the remaining runway, using brakes as required"
    ],
    a: 3,
    exp: "Any engine failure before liftoff, or before Vmc and the rotation speed are both reached, is a rejected takeoff: close both throttles and stop. Continuing on one engine from this speed would mean trying to accelerate and climb with less than 20 percent of normal climb capability, at or near Vmc, with the gear down. The AFH is unequivocal that the takeoff should be aborted if an engine fails before liftoff or before the speed and runway available make continuing a reasonable option. Briefing this decision before every takeoff is the standard."
  },
  {
    id: "multi-mcq-013", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "An engine fails just after liftoff in a light twin with a usable runway still ahead and the gear still down. The AFH guidance is to",
    choices: [
      "Retract the gear immediately and climb at Vyse to the single-engine service ceiling",
      "Turn back to the departure runway at the lowest safe altitude",
      "Feather the failed engine first, then decide whether to continue or land",
      "Land straight ahead on the remaining runway or overrun under control, closing both throttles; a landing under control is paramount"
    ],
    a: 3,
    exp: "With runway remaining and the airplane still in the landing configuration, the safest outcome is to land, even if the airplane ends up in the overrun. Light twins have marginal single-engine climb, and the time it takes to clean up and feather may exceed what is available at a few feet above the runway. Continuing the takeoff should be chosen only when the airplane has reached Vyse or at least Vxse, the gear is up or coming up, and climb performance for the conditions has been verified before takeoff. Turning back at low altitude is as dangerous in a twin as in a single."
  },
  {
    id: "multi-mcq-014", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PHAK Ch. 11", tags: ["cfi", "atp"],
    q: "The single-engine service ceiling and single-engine absolute ceiling are defined as the density altitudes at which the airplane, with one engine inoperative and the other at maximum continuous power, can climb at",
    choices: [
      "100 fpm and 0 fpm respectively",
      "50 fpm and 0 fpm respectively",
      "0 fpm and 50 fpm respectively",
      "200 fpm and 100 fpm respectively"
    ],
    a: 1,
    exp: "The single-engine service ceiling is the altitude at which the best single-engine rate of climb has fallen to 50 fpm; the absolute ceiling is where it reaches zero. (The all-engine service ceiling uses 100 fpm.) If an engine fails above the single-engine absolute ceiling, the airplane will drift down to that altitude, so terrain and the ceiling for the day's weight and temperature must be part of every preflight for a light twin, especially over mountains or in IMC."
  },
  {
    id: "multi-mcq-015", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Accelerate-stop distance and accelerate-go distance for a light twin are defined as",
    choices: [
      "Accelerate-stop: distance to accelerate to liftoff speed, lose an engine, and brake to a stop; accelerate-go: distance to accelerate to liftoff speed, lose an engine, and continue the takeoff on one engine to clear a 50-ft obstacle",
      "Accelerate-stop: distance to accelerate to Vr and stop after rejecting; accelerate-go: distance to accelerate to Vr and climb over an obstacle on both engines",
      "Accelerate-stop: distance to accelerate to Vmc and stop; accelerate-go: distance to accelerate to Vyse and climb to pattern altitude",
      "Both are certified balanced-field distances that guarantee a safe continued takeoff from any point after V1"
    ],
    a: 0,
    exp: "Accelerate-stop is the runway needed to accelerate to the decision/liftoff speed, experience an engine failure, and bring the airplane to a stop. Accelerate-go is the distance to accelerate to that speed, lose an engine, and continue the takeoff on one engine to a 50-ft obstacle. Light twins are not certified to a balanced-field or V1 concept, and accelerate-go distances can exceed 3,000 ft and assume perfect technique and a feathered prop; many instructors treat accelerate-go as a number that tells you whether continuing is even conceivable, not a plan. If accelerate-stop exceeds runway available, an engine failure near liftoff may force a landing off the end."
  },
  {
    id: "multi-mcq-016", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "In a light twin with full-feathering propellers such as the Seminole, which force drives the blades toward low pitch (high RPM), and which drives them toward high pitch and feather?",
    choices: [
      "Governor oil pressure drives the blades toward low pitch/high RPM; the feathering spring and blade counterweights drive them toward high pitch and feather, so a loss of oil pressure results in feather",
      "Governor oil pressure drives the blades toward high pitch/feather; the spring and counterweights drive them toward low pitch, so a loss of oil pressure results in high RPM",
      "Centrifugal force on the blades drives them toward feather; oil pressure holds them at low pitch",
      "A nitrogen charge drives the blades toward feather; oil pressure and counterweights drive them toward low pitch"
    ],
    a: 0,
    exp: "On a light twin the system is deliberately arranged opposite to most single-engine constant-speed props: oil pressure from the governor pushes the piston toward low pitch (high RPM), while a feathering spring and counterweights on the blade shanks push toward high pitch and ultimately feather. Pulling the prop control fully aft dumps the oil and the spring/counterweights feather the blades. If the engine loses oil pressure, the prop tends toward feather, which is the safest failure mode for a twin. Nitrogen in an accumulator (where installed) is used for unfeathering, not feathering."
  },
  {
    id: "multi-mcq-017", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "Why does the propeller NOT feather when a Seminole's engine is shut down normally on the ground, and what is the operational consequence in flight?",
    choices: [
      "The governor is bypassed on the ground by the squat switch, so oil pressure continues to hold low pitch",
      "Centrifugal start locks (latch pins) engage when RPM drops below roughly 950 RPM in the Seminole (the AFH cites about 800 RPM for typical light twins) and hold the blades at low pitch; in flight, if an engine is failing, the pilot should feather before RPM decays below the lock speed, since the propeller cannot be feathered once the pins have engaged",
      "The feathering spring is too weak to move the blades without airflow",
      "The oil in the hub is cold and viscous, which prevents the blades from moving"
    ],
    a: 1,
    exp: "Without start locks the propeller would feather every time the engine was shut down, and the starter could not turn a feathered propeller against the air load. Centrifugal latches engage at low RPM to hold the blades at low pitch. In flight, a windmilling propeller normally keeps RPM well above the latch speed; but with a seized engine or a prop windmilling very slowly, the pins can engage and feathering becomes impossible. The lesson is to feather promptly once the failed engine is positively identified and verified. Verify the latch RPM against your airplane's POH."
  },
  {
    id: "multi-mcq-018", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "To unfeather a propeller in flight on a light twin, the usual methods are",
    choices: [
      "Pull the propeller control to feather and increase airspeed above Vne",
      "Use an unfeathering accumulator (if installed), which releases stored oil pressure to the propeller hub when the prop control is moved forward, or use the starter to rotate the engine until oil pressure builds and the governor moves the blades out of feather",
      "Dive to windmill the propeller; the airflow alone will always bring a feathered propeller out of feather",
      "Turn on the electric fuel pump and the magnetos; combustion will unfeather the propeller"
    ],
    a: 1,
    exp: "A feathered propeller has stopped and is streamlined to the airflow, so it will not windmill on its own. An accumulator stores engine oil under a nitrogen charge and, when the prop control is moved forward, sends it to the hub to push the blades toward low pitch so the prop begins to windmill and the engine can be restarted. Without an accumulator, the starter is used to crank the engine; once it runs, governor oil pressure moves the blades out of feather. Expect a brief overspeed and yaw as the engine comes back; follow the POH airstart procedure (mixture, throttle, fuel pump, mags set before cranking)."
  },
  {
    id: "multi-mcq-019", type: "mcq", topic: "multi", ref: "Commercial ACS, AFH Ch. 13", tags: ["cfi", "pa44"],
    q: "During a Vmc demonstration, the Commercial ACS requires the applicant to recover at the first indication of",
    choices: [
      "The airspeed reaching the published red-line Vmc",
      "The ball reaching full deflection",
      "A heading change of 20° or more",
      "Loss of directional control, stall warning, or buffet, whichever occurs first, by reducing power on the operating engine and lowering the nose to regain airspeed; then accelerating to Vsse/Vyse"
    ],
    a: 3,
    exp: "The demonstration is flown at a safe altitude with the simulated-failed engine at idle (never feathered), the operating engine at takeoff power, and airspeed reduced about 1 knot per second while holding heading with rudder and up to 5° bank toward the operating engine. Recovery begins at the first sign of loss of directional control, stall warning, or buffet, because at altitude actual Vmc may be below stall speed and continuing would risk a single-engine stall and spin. Reduce power on the operating engine to remove the asymmetric thrust and pitch down to regain speed; recovery should not be delayed to see the red line."
  },
  {
    id: "multi-mcq-020", type: "mcq", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp", "pa44"],
    q: "On a single-engine approach in a light twin, once the gear and full flaps are extended and the airplane is below Vyse on short final, a go-around",
    choices: [
      "Can be flown normally as long as the airplane is above Vmc",
      "Should be initiated with full power, gear up first, then flaps up",
      "Should not be attempted; the airplane is committed to land because it probably cannot climb, or even hold altitude, in that configuration on one engine",
      "Is acceptable if the propeller on the inoperative engine is windmilling rather than feathered"
    ],
    a: 2,
    exp: "The drag of extended gear and full flaps combined with the slow speed means the single engine cannot produce enough excess power to climb, and the time needed to retract gear and flaps and accelerate to Vyse usually exceeds what is available. The AFH recommends delaying full flaps on a single-engine approach until landing is assured and treating the point where full flaps go down as the commit point. Plan the single-engine approach to land, with a longer final and a stabilized descent at or above Vyse until landing is assured."
  },
  {
    id: "multi-mcq-021", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "Fuel crossfeed in a light twin such as the Seminole is intended for",
    choices: [
      "Extending single-engine range or balancing fuel in level cruise flight only; it is not used for takeoff or landing, and the selector should be returned to the main tank before landing",
      "Takeoff and landing to ensure both engines have an uninterrupted fuel supply",
      "Transferring fuel from one tank to the other on the ground",
      "Feeding both engines from the fullest tank during all phases of flight"
    ],
    a: 0,
    exp: "Crossfeed routes fuel from the tank on the dead-engine side to the operating engine so that fuel is not stranded and the airplane stays laterally balanced. It is a cruise-only tool; takeoff and landing are flown with each engine on its own tank so a crossfeed valve problem cannot interrupt fuel to the running engine at low altitude, and the AFH says crossfeed should be terminated before landing. The Seminole's selector positions are ON, OFF, and X-FEED; it does not transfer fuel between tanks."
  },
  {
    id: "multi-mcq-022", type: "mcq", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "After feathering the propeller following an engine fire in flight, the securing steps generally include",
    choices: [
      "Mixture rich, fuel selector to crossfeed, electric fuel pump on, magnetos on, to attempt a restart",
      "Mixture rich, fuel selector on, throttle full, and dive to blow out the fire",
      "Mixture idle cutoff, fuel selector OFF, electric fuel pump off, magnetos off, alternator off, cowl flap closed per POH; do not attempt a restart of an engine that was on fire",
      "Magnetos off only; leave fuel on so the engine can be restarted if the fire goes out"
    ],
    a: 2,
    exp: "Securing the engine removes every source of fuel and ignition from the fire: mixture to idle cutoff, fuel selector off, boost pump off, mags off, alternator off, and cowl flap as the POH directs. Feathering stops the prop from pumping air through the nacelle and reduces drag. An engine that was on fire is not restarted. The airplane then flies the single-engine profile to the nearest suitable airport, with the pilot managing electrical load now that one alternator is offline."
  },
  {
    id: "multi-mcq-023", type: "mcq", topic: "multi", ref: "PA-44 POH", tags: ["pa44"],
    q: "The PA-44 Seminole's landing gear is",
    choices: [
      "Electrically driven through a gear motor and torque tubes, with a hand crank for emergency extension",
      "Pneumatically actuated, with a blow-down bottle for emergency extension",
      "Manually operated with a Johnson bar, like the flaps",
      "Hydraulically actuated by an electrically driven pump, held up by hydraulic pressure, with emergency extension by releasing the pressure so the gear free-falls and locks"
    ],
    a: 3,
    exp: "The Seminole uses a reversible electric hydraulic pump controlled by the gear selector; the gear is held retracted by hydraulic pressure, not mechanical uplocks. Emergency extension means pulling the emergency gear extension control, which releases the hydraulic pressure and lets the gear fall by gravity (assisted by springs) into the down-locked position; slowing the airplane and yawing can help the gear lock. The flaps are manual (handle), the gear is not. Verify details against your airplane's POH."
  },
  {
    id: "multi-mcq-024", type: "mcq", topic: "multi", ref: "PA-44 POH", tags: ["pa44"],
    q: "The Seminole's gear warning horn sounds when the gear is not down and locked and",
    choices: [
      "Either throttle is retarded below approximately 14 in Hg manifold pressure, or the flaps are extended beyond the first (10°) notch, or the gear selector is placed UP while on the ground; verify the exact conditions against your airplane's POH",
      "The airspeed drops below the blue line",
      "The airspeed drops below Vle of 140 KIAS",
      "The electric fuel pumps are turned on"
    ],
    a: 0,
    exp: "The horn is tied to the conditions that normally precede a landing: low manifold pressure on either engine, flaps beyond the first notch, and a squat-switch interlock that also sounds the horn if the selector is UP on the ground. The warning tied to low manifold pressure can be silenced on some airplanes; the flap-triggered warning cannot. A single-engine approach with one throttle at idle will sound the horn until the gear is down, which pilots should anticipate rather than silence by habit."
  },
  {
    id: "multi-mcq-025", type: "mcq", topic: "multi", ref: "PA-44 POH", tags: ["pa44"],
    q: "Fuel capacity and configuration of the PA-44 Seminole are",
    choices: [
      "100 gal total / 98 usable in wing tanks, selector Left/Right/Both",
      "110 gal total / 108 usable in two nacelle tanks (55 gal each, 54 usable), 100LL, selector ON / OFF / X-FEED, with an engine-driven pump and an electric pump per engine",
      "120 gal total / 110 usable in wingtip tanks, selector Main/Aux",
      "108 gal total / 100 usable in four tanks, selector Main/Aux/Crossfeed"
    ],
    a: 1,
    exp: "Each nacelle holds a 55-gallon tank with 54 usable, for 110 total and 108 usable. Each engine has an engine-driven fuel pump and an electric pump; the electric pumps are used for priming, takeoff, landing, and whenever the engine-driven pump may be in question. Each engine draws from its own side with the selector ON; X-FEED lets an engine draw from the opposite tank. Verify these figures against your airplane's POH."
  },
  {
    id: "multi-mcq-026", type: "mcq", topic: "multi", ref: "PA-44 POH", tags: ["pa44"],
    q: "Which PA-44 Seminole speed set is correct?",
    choices: [
      "Vmc 56, Vyse 88, Vxse 82, Vsse 82, Vle 140, Vlo retraction 109 KIAS",
      "Vmc 62, Vyse 88, Vxse 82, Vsse 88, Vle 140, Vlo retraction 140 KIAS",
      "Vmc 56, Vyse 82, Vxse 88, Vsse 82, Vle 109, Vlo retraction 109 KIAS",
      "Vmc 56, Vyse 88, Vxse 82, Vsse 82, Vle 140, Vlo retraction 140 KIAS"
    ],
    a: 0,
    exp: "Vmc (red line) is 56 KIAS, below the 57 KIAS Vs1, which means the Seminole will typically stall before losing directional control at sea level. Blue line Vyse is 88 (same as Vy), and Vxse and Vsse are both 82. The gear may be extended and remain extended up to 140 KIAS, but retraction is limited to 109 KIAS because of the air loads on the gear doors and the nose gear as it retracts. Verify against your airplane's POH."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "multi-card-001", type: "card", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    front: "PAST: the four factors that make an engine 'critical' on a conventional twin",
    back: "P-factor: descending blade of the right engine is farther from centerline → longer thrust arm when the left engine fails.\nAccelerated slipstream: lift from prop wash is farther outboard on the right wing → more rolling moment.\nSpiraling slipstream: left engine's slipstream hits the fin and helps the rudder; the right engine's does not.\nTorque: both engines roll the airplane left; losing the left engine leaves the right engine's torque adding to the roll toward the dead engine.\nSeminole: counter-rotating → no critical engine."
  },
  {
    id: "multi-card-002", type: "card", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    front: "Vmc certification conditions as described in the AFH (historically 14 CFR 23.149; Part 23 was rewritten in 2017)",
    back: "Critical engine inoperative, propeller windmilling (prop controls in takeoff position)\nMaximum available takeoff power on the operating engine\nMost unfavorable weight (older editions: maximum takeoff weight) and most unfavorable (aft) CG\nFlaps in takeoff position, landing gear retracted\nTrimmed for takeoff\nAirborne, out of ground effect\nNot more than 5° bank toward the operating engine\nMust be able to maintain control and hold heading within 20°"
  },
  {
    id: "multi-card-003", type: "card", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    front: "Factors that RAISE actual Vmc vs the certified value",
    back: "Lighter weight (less horizontal lift component at a given bank)\nAft CG (shorter rudder arm)\nLower density altitude / more power on the good engine\nWindmilling (unfeathered) propeller\nGear up (less keel effect)\nWings level or bank toward the dead engine (AFH: may be >3 kt per degree of bank reduction between 5° and wings level)\nSideslip toward the dead engine"
  },
  {
    id: "multi-card-004", type: "card", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["cfi", "pa44"],
    front: "Seminole V-speeds for one-engine-inoperative flight",
    back: "Vmc (red line): 56 KIAS\nVs1: 57 KIAS (stall before Vmc at sea level)\nVsse: 82 KIAS (min intentional engine cut)\nVxse: 82 KIAS\nVyse (blue line): 88 KIAS\nVr 75, Vy 88, Vlo up 109, Vle/Vlo down 140, Vfe 111\n(verify against your POH)"
  },
  {
    id: "multi-card-005", type: "card", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    front: "Zero sideslip: bank angle, ball position, and why it matters",
    back: "~2–3° bank toward the operating engine (airplane-specific; less than 5°)\nBall displaced about ⅓ to ½ toward the operating engine\nA yaw string streams straight back\nEliminates fuselage sideslip drag and rudder blanketing → best single-engine climb and lowest Vmc\nWings level/ball centered = sideslip toward the dead engine, worse performance, higher Vmc\n>5° bank = sideslip the other way, performance falls again"
  },
  {
    id: "multi-card-006", type: "card", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["cfi", "atp", "pa44"],
    front: "Engine failure after liftoff flow (light twin)",
    back: "Maintain control: pitch for Vyse (blue line), rudder to stop yaw, bank 2–3° toward the good engine\nMixtures, props, throttles: full forward\nFlaps: up\nGear: up (once no usable runway remains)\nIdentify: dead foot = dead engine\nVerify: retard the suspected throttle; no change confirms\nFeather: prop control full aft on the dead engine\nSecure: mixture ICO, fuel pump off, fuel selector OFF, mags off, alternator off, cowl flap per POH\nThen: zero sideslip, declare, land at nearest suitable airport"
  },
  {
    id: "multi-card-007", type: "card", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    front: "Full-feathering propeller on a light twin: forces and failure modes",
    back: "Toward low pitch / high RPM: governor oil pressure\nToward high pitch / feather: feathering spring + blade counterweights\nLoss of oil pressure → prop feathers\nStart locks (centrifugal latch pins) engage below ~950 RPM in the Seminole (AFH: ~800 RPM typical) → prop will not feather below that RPM; feather before RPM decays\nUnfeather: accumulator (stored oil + nitrogen, where installed) or starter crank until oil pressure builds\nFeathering check on runup: pull prop to feather briefly, watch RPM drop, push forward before it falls to the latch range"
  },
  {
    id: "multi-card-008", type: "card", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    front: "Performance definitions: single-engine service ceiling, absolute ceiling, accelerate-stop, accelerate-go",
    back: "SE service ceiling: density altitude where best SE rate of climb = 50 fpm (all-engine: 100 fpm)\nSE absolute ceiling: SE rate of climb = 0 fpm; airplane drifts down to it after a failure above it\nAccelerate-stop: distance to accelerate to liftoff/decision speed, lose an engine, and stop\nAccelerate-go: distance to accelerate, lose an engine at liftoff, and continue on one engine to 50 ft\nLight twins have no balanced-field/V1 guarantee"
  },
  {
    id: "multi-card-009", type: "card", topic: "multi", ref: "Commercial ACS, AFH Ch. 13", tags: ["cfi", "pa44"],
    front: "Vmc demonstration: setup and recovery (Commercial ACS)",
    back: "Safe altitude (per AFH, enough to recover from a stall/spin), landing gear up, flaps takeoff\nOne engine throttle idle (simulated failure, NOT feathered), prop controls full forward\nOperating engine: takeoff power\nPitch up to decelerate ~1 kt/sec, hold heading with rudder and ≤5° bank toward the operating engine\nRecover at FIRST sign of: loss of directional control, stall warning, or buffet\nRecovery: reduce power on the operating engine, pitch down to regain airspeed, re-establish heading, accelerate to Vsse/Vyse, then restore power\nHeading ±20° during recovery"
  },
  {
    id: "multi-card-010", type: "card", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    front: "Single-engine approach and landing: planning points",
    back: "Fly a longer, wider pattern; configure early but keep drag items (full flaps) until landing is assured\nMaintain at least Vyse until landing assured\nGear down on final once landing is certain; expect the gear horn with one throttle at idle\nCommit point: once full flaps are down and speed is below Vyse, do NOT attempt a go-around\nCrossfeed off, fuel selectors to ON (own tank) before landing\nAfter touchdown expect asymmetric braking/thrust; no reverse of a feathered engine"
  },

  // ───────────────────────── SCENARIOS ─────────────────────────
  {
    id: "multi-scen-001", type: "scenario", topic: "multi", ref: "AFH Ch. 13", tags: ["pa44", "cfi", "atp"],
    q: "You are departing in a PA-44 Seminole at 3,700 lb from a 6,000 ft runway, density altitude 2,500 ft. Right after rotation at 75 KIAS, about 20 ft in the air with the gear still down, the right engine loses power. You have roughly 2,000 ft of runway plus a 500 ft overrun ahead. What is the best course of action?",
    choices: [
      "Close both throttles, lower the nose, and land on the remaining runway and overrun, braking as needed; accept running into the overrun if necessary",
      "Maintain the climb at Vyse, retract the gear, identify and verify the failed engine, and feather",
      "Pitch for Vxse, retract the gear, and continue the takeoff since Vmc is only 56 KIAS and the Seminole has no critical engine",
      "Bank 5° toward the left engine, hold 75 KIAS, and fly a tight left pattern back to the runway"
    ],
    a: 0,
    exp: "Below Vyse, at a few feet, gear down, and with a windmilling prop, the Seminole has little or no climb capability; even at best, cleaning up and feathering takes longer than the time available. With 2,500 ft of usable surface ahead, a controlled landing is the safest outcome. 'No critical engine' does not change the performance problem, and Vmc being low says nothing about the ability to climb. Turning back at pattern speed just above Vmc with the gear down is how many light-twin takeoff accidents end."
  },
  {
    id: "multi-scen-002", type: "scenario", topic: "multi", ref: "AFH Ch. 13", tags: ["pa44", "cfi", "atp"],
    q: "Same Seminole, but the left engine fails passing 600 ft AGL on climbout at 88 KIAS with the gear already up and flaps up. You have 1,200 ft of altitude to pattern altitude and the airport is 2 miles behind you. What is the correct sequence?",
    choices: [
      "Immediately pull the left propeller control to feather, then push everything else forward and turn back",
      "Reduce power on the right engine to keep the airplane balanced, then troubleshoot the left engine",
      "Maintain directional control and Vyse with a slight bank toward the right engine; mixtures, props, throttles forward; verify flaps and gear up; identify (dead foot), verify by retarding the left throttle, feather the left propeller; secure the engine; establish zero sideslip; declare an emergency and return to land",
      "Pitch up to Vxse to gain altitude as quickly as possible before doing anything else"
    ],
    a: 2,
    exp: "The first job is control and airspeed (blue line, 88 KIAS), then performance by removing drag: everything forward, flaps and gear confirmed up, then identify, verify with the throttle, feather, and secure. Feathering without verifying risks feathering the good engine. Reducing power on the good engine would eliminate what little climb capability remains. Vxse gives the best angle but a worse rate and less margin above Vmc; Vyse is the speed to fly unless an obstacle demands otherwise. Once the airplane is cleaned up, fly the single-engine pattern and plan a committed landing."
  },
  {
    id: "multi-scen-003", type: "scenario", topic: "multi", ref: "AFH Ch. 13", tags: ["pa44", "cfi"],
    q: "You are instructing a Vmc demonstration in a Seminole at 5,000 ft MSL on a warm day (density altitude about 7,000 ft). The student has the left throttle at idle, right engine at full power, and is decelerating through 65 KIAS, holding heading with full right rudder and 5° right bank. The airspeed is still well above the 56 KIAS red line when you feel a light buffet and the stall horn begins to sound. What should happen?",
    choices: [
      "Continue the demonstration until the heading begins to drift, since Vmc has not been reached",
      "Apply more right rudder and increase the bank to 10° to hold heading until 56 KIAS",
      "Pull the right propeller control to feather to remove the asymmetric thrust",
      "Recover now: reduce power on the right engine and lower the nose, then accelerate to Vsse/Vyse; at this density altitude the actual Vmc is below stall speed, so continuing would produce a single-engine stall with a strong roll toward the dead engine"
    ],
    a: 3,
    exp: "At altitude the operating engine makes less power, so the speed at which directional control is actually lost falls below the sea-level red line and below the indicated stall speed (57 KIAS Vs1 in the Seminole). The first indication of stall is the recovery cue under the Commercial ACS, regardless of what the airspeed reads. More bank or rudder would only mask the problem until the stall breaks asymmetrically. Feathering the operating engine is never part of the maneuver. This is why some operators limit the demonstration to a block of pressure altitudes or use a reduced power setting on the operating engine."
  },
  {
    id: "multi-scen-004", type: "scenario", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "atp"],
    q: "Cruising a Seminole at 9,500 ft over mountainous terrain, the right engine's oil pressure drops to zero and the oil temperature is climbing. The engine is still producing power and running smoothly. The single-engine service ceiling for today's weight and temperature works out to about 5,500 ft, and the terrain below is 6,000–7,000 ft. The nearest airport is 25 miles ahead. What is the best course of action?",
    choices: [
      "Continue on both engines and monitor, since the engine is still running smoothly and shutting it down guarantees a descent below the terrain",
      "Reduce power on the right engine, feather its propeller and secure it now while it is still turning well above the start-lock RPM, declare an emergency, and begin a drift-down toward the nearest airport while there is altitude to spare, because a seized engine may be impossible to feather",
      "Switch the right fuel selector to crossfeed to lower the oil temperature",
      "Shut down the right engine by pulling the mixture but leave the propeller windmilling so it can be restarted if needed"
    ],
    a: 1,
    exp: "With no oil pressure the engine will seize; when it does, RPM may decay through the start-lock range before the pilot can feather, leaving a windmilling or stopped unfeathered propeller that destroys single-engine performance. Feathering while the engine still turns normally is the deliberate choice, and the prop system on a light twin will feather without oil pressure because the spring and counterweights do the work. Starting the drift-down from 9,500 ft with 25 miles to go, across terrain 1,000–1,500 ft above the single-engine service ceiling, requires conserving every foot of altitude: declare, establish Vyse and zero sideslip, and plan to arrive with altitude to spare. Crossfeed has nothing to do with oil."
  },
  {
    id: "multi-scen-005", type: "scenario", topic: "multi", ref: "AFH Ch. 13", tags: ["pa44", "atp", "ipc"],
    q: "You are flying a single-engine ILS in the Seminole in IMC after a left-engine failure and feathering. Ceiling is 400 ft, visibility 1 mile. At 1,000 ft AGL on glideslope you extend the gear; the horn sounds because the left throttle is closed. Passing 500 ft AGL you are stable at 90 KIAS with gear down and 10° of flaps. At 300 ft AGL you break out slightly right of centerline. What is the best plan?",
    choices: [
      "Add full power on the right engine, retract the gear, and go around to a better-aligned approach",
      "Extend full flaps now to slow down and sidestep to the centerline",
      "Keep the current configuration, correct to the centerline with a shallow turn, hold at least Vyse until landing is assured, then add final flaps as needed and land; treat the approach as committed because a single-engine go-around from this point is unlikely to succeed",
      "Reduce power on the right engine to idle to keep the airplane symmetric and glide to the runway"
    ],
    a: 2,
    exp: "On one engine with the gear down, below pattern altitude, and in IMC, the airplane is committed to land once the approach is stabilized. Attempting a go-around means retracting gear and flaps, accelerating, and climbing at a rate that may be near zero while in cloud; the AFH advises against it. The correct plan was set before the approach: delay full flaps until landing is assured, hold Vyse or more, and accept minor alignment corrections. A small offset at 300 ft on a runway can be corrected with a gentle turn. Idling the good engine turns a controlled single-engine approach into a dead-stick landing."
  },
  {
    id: "multi-scen-006", type: "scenario", topic: "multi", ref: "AFH Ch. 13", tags: ["pa44", "cfi"],
    q: "During a simulated engine failure in a Seminole at 4,000 ft AGL, the instructor retards the right throttle to idle. The student establishes blue line, pushes everything forward, identifies the right engine, verifies by retarding the right throttle, and then reaches for the right propeller control to feather it. The instructor stops the student and sets 'zero thrust' on the right engine instead. Why?",
    choices: [
      "Because the propeller cannot be feathered above 3,000 ft AGL",
      "Because an actual feather in training is prohibited by the Commercial ACS",
      "Because the student verified with the wrong control; the mixture should have been used",
      "Because a zero-thrust power setting on the operating-but-simulated-failed engine duplicates the drag of a feathered propeller without the risk of being unable to restart, and the AFH recommends actual feathering only at a safe altitude where a landing could be made if the engine will not restart"
    ],
    a: 3,
    exp: "Simulated feathering with a zero-thrust setting (a manifold pressure/RPM combination from the POH or an instructor's reference) lets the student fly the real single-engine performance without the engine actually stopping. Actual feathering is part of multiengine training, but the AFH says it should be done where a safe landing at an established airport could be made if the propeller will not unfeather, with the unfeathering and restart planned to be complete no lower than 3,000 ft AGL. The student's throttle verification was correct. The ACS does not prohibit actual feathering; it simply requires appropriate risk management."
  },
  {
    id: "multi-scen-007", type: "scenario", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44"],
    q: "In cruise in a Seminole, the LEFT engine fails and you feather it and secure it per the checklist. You have 20 gallons in the left tank and 12 gallons in the right tank, with 45 minutes to the nearest suitable airport at your single-engine fuel burn of about 10 gph. What is the best fuel management decision?",
    choices: [
      "Set the right fuel selector to X-FEED so the right engine draws from the left tank; return the right selector to ON before landing",
      "Leave both selectors ON; the left engine's fuel will be useless, but the right tank has enough to reach the airport",
      "Set the left fuel selector to X-FEED so the left tank feeds the right engine",
      "Set both fuel selectors to X-FEED to feed from both tanks simultaneously"
    ],
    a: 0,
    exp: "Crossfeed on the Seminole is selected on the OPERATING engine's selector to draw from the opposite (dead-engine side) tank; the dead engine's selector goes to OFF as part of securing it. Twelve gallons for 45 minutes at 10 gph leaves only about 27 minutes of fuel on arrival, less than even the 30-minute day-VFR planning reserve, and the 20 gallons on the left side would otherwise be stranded; crossfeeding also keeps the airplane laterally balanced. The AFH says crossfeed is for cruise flight and should be terminated before landing with the operating engine back on its own tank. Both selectors to X-FEED is not a valid configuration."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "multi-oral-001", type: "oral", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp", "pa44"],
    q: "What is Vmc, and what are the conditions under which it is determined? Then tell me why the number on the airspeed indicator may not be the speed at which you would actually lose control today.",
    answer: "Vmc is the minimum airspeed at which directional control can be maintained with the critical engine suddenly inoperative and the remaining engine at takeoff power, under the certification conditions described in the AFH (historically 14 CFR 23.149): critical engine windmilling, maximum takeoff power on the operating engine, most unfavorable weight and CG (aft), takeoff flaps, gear up, trimmed for takeoff, out of ground effect, and not more than 5° of bank toward the operating engine, holding heading within 20°. The red line is a single certified number, but actual Vmc moves with every one of those variables. It goes up with lighter weight, aft CG, a windmilling prop, gear up, lower density altitude, and any bank toward the dead engine; it goes down with a feathered prop, forward CG, gear down, higher density altitude, and bank toward the good engine. At altitude, actual Vmc can drop below stall speed, which turns a loss-of-control problem into a single-engine stall and spin problem. In the Seminole the published Vmc is 56 and Vs1 is 57, so even at sea level the stall is usually the limiting event.",
    points: [
      "Definition: min speed for directional control, critical engine suddenly inoperative, takeoff power on the other",
      "Certification conditions: windmilling prop, max takeoff power, most unfavorable weight and aft CG, takeoff flaps, gear up, out of ground effect, ≤5° bank",
      "Each condition's effect on actual Vmc (weight, CG, DA, prop, gear, bank)",
      "DA lowers Vmc but not IAS stall speed → crossover, stall/spin risk",
      "Seminole: Vmc 56 vs Vs1 57; no critical engine but still a Vmc"
    ]
  },
  {
    id: "multi-oral-002", type: "oral", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Explain the critical engine concept using the PAST factors, and tell me why the Seminole doesn't have one.",
    answer: "The critical engine is the one whose failure most adversely affects performance and handling. On a conventional twin with both propellers turning clockwise as seen from behind, each descending blade, which produces more thrust at a positive angle of attack, is on the right side of its engine. P-factor therefore puts the right engine's thrust centroid farther from the fuselage than the left's, so losing the left engine leaves a longer thrust arm and more yaw. Accelerated slipstream over the right wing produces lift farther outboard, adding roll. Spiraling slipstream from the left engine strikes the vertical fin and helps the rudder, while the right engine's spirals away; losing the left engine loses that help. Torque from the right engine rolls the airplane left, toward the dead engine. The Seminole's right engine turns counterclockwise, so both descending blades are inboard, the arms are equal, and the slipstream and torque effects are symmetric; neither engine is critical, although P-factor and Vmc still exist.",
    points: [
      "Critical engine: failure most adversely affects performance/handling",
      "P-factor: descending blade location and thrust arm",
      "Accelerated slipstream: outboard lift on the right wing",
      "Spiraling slipstream: left engine helps the rudder",
      "Torque: right engine rolls toward the dead left engine",
      "Seminole counter-rotating → symmetric → no critical engine"
    ]
  },
  {
    id: "multi-oral-003", type: "oral", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "Why does a light twin lose about 80 percent of its climb performance when it loses 50 percent of its power, and what does that mean for how you plan a takeoff?",
    answer: "Climb comes from excess power, not total power. A light twin on both engines might need 60 to 70 percent of its total power just to maintain level flight at Vy, leaving 30 to 40 percent as excess for climbing. When one engine fails the airplane loses half of the total, but the power required to fly level does not fall; in fact it rises because of the drag of the windmilling or feathered propeller, the rudder deflection, and the sideslip. Nearly all the excess disappears, so climb drops by 80 to 90 percent, from perhaps 1,200 fpm to 200 fpm or less, and at high density altitude or with gear and flaps hanging it can be zero or negative. That is why the takeoff briefing must include the accelerate-stop distance, the single-engine climb expected for today's weight and density altitude, the altitude at which continuing becomes a realistic option, and the decision to land straight ahead if the engine fails before then.",
    points: [
      "Climb = excess power; level flight consumes most of a light twin's power",
      "Losing one engine removes nearly all excess plus adds drag",
      "80–90% loss of climb per AFH",
      "Plan: accelerate-stop vs runway, SE climb for today's DA and weight",
      "Brief: abort before liftoff; land ahead with runway; continue only when clean and at Vyse"
    ]
  },
  {
    id: "multi-oral-004", type: "oral", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "Describe how the Seminole's propeller feathers, why it feathers that way, what the start locks do, and how you would get the propeller back out of feather in flight.",
    answer: "The Hartzell constant-speed, full-feathering propeller uses governor oil pressure to drive the blades toward low pitch and high RPM, while a feathering spring in the hub and counterweights on the blade shanks push toward high pitch and feather. Pulling the propeller control fully aft opens the governor's drain, oil leaves the hub, and the spring and counterweights move the blades to feather; a loss of engine oil pressure does the same thing, which is the safe failure mode for a twin because a feathered prop has far less drag than a windmilling one. Centrifugal start locks engage when the propeller slows below roughly 950 RPM on the Seminole (the AFH cites about 800 for typical light twins) so that a normal shutdown does not leave the prop feathered, which the starter could not overcome; it also means that if a failing engine's RPM decays below that value before you feather, it may not feather at all. To unfeather in flight, an accumulator, where installed, releases stored oil under nitrogen pressure into the hub when the prop control is pushed forward, moving the blades toward low pitch so the prop windmills and the engine can be restarted. Without an accumulator, the starter cranks the engine until it fires and governor oil pressure brings the blades out of feather.",
    points: [
      "Oil pressure → low pitch/high RPM; spring + counterweights → feather",
      "Loss of oil pressure → feather (fail-safe for a twin)",
      "Start locks engage below ~950 RPM (Seminole); prevent feathering on shutdown and if RPM decays",
      "Feather promptly after identify/verify",
      "Unfeather: accumulator (if installed) or starter-assisted restart per POH"
    ]
  },
  {
    id: "multi-oral-005", type: "oral", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp"],
    q: "What is zero sideslip, how do you find it without a yaw string, and why is it better than keeping the ball centered?",
    answer: "Zero sideslip is the condition in which the fuselage is aligned with the relative wind during single-engine flight. With one engine producing thrust off-center, the rudder must create a side force to stop the yaw; if the wings are held level with the ball centered, that side force is balanced by the fuselage flying slightly sideways toward the dead engine, which adds drag, blankets part of the rudder, and raises Vmc. Banking about 2 to 3 degrees toward the operating engine lets the horizontal component of lift balance the rudder side force instead, so the fuselage flies straight. In the cockpit this looks like a slight bank toward the good engine with the ball displaced about one-third to one-half of a ball width toward the operating engine. It gives the best single-engine climb and the lowest Vmc; banking more than about 5 degrees produces a sideslip in the other direction and performance falls again.",
    points: [
      "Fuselage aligned with relative wind, one engine out",
      "Ball centered/wings level = sideslip toward dead engine, more drag, higher Vmc",
      "2–3° bank toward operating engine; ball ⅓–½ toward operating engine",
      "Best SE climb and lowest Vmc",
      ">5° bank degrades performance"
    ]
  },
  {
    id: "multi-oral-006", type: "oral", topic: "multi", ref: "AFH Ch. 13, Commercial ACS", tags: ["cfi", "atp"],
    q: "Walk me through your takeoff briefing in a light twin, including what you will do if an engine fails at each stage.",
    answer: "Before takeoff I confirm the accelerate-stop distance against runway available, the expected single-engine climb for today's weight and density altitude, and the departure obstacles. The brief is: any malfunction or engine failure before rotation or before Vmc and Vr, I close both throttles and stop on the runway. After liftoff with usable runway or overrun ahead, or below Vyse with the gear down, I land straight ahead under control, closing both throttles. Once the gear is up and I have Vyse and a positive rate with the runway behind me, I will continue: maintain control and blue line, bank slightly toward the good engine, mixtures, props, throttles forward, flaps and gear confirmed up, identify by dead foot, verify with the throttle, feather, secure, declare, and return to land with a committed single-engine approach. I also brief the altitude where I would consider a return versus a straight-ahead landing, and remind myself that Vmc being low does not mean the airplane will climb.",
    points: [
      "Performance numbers checked for today's conditions",
      "Before liftoff/Vmc/Vr: abort",
      "After liftoff with runway remaining or gear down below Vyse: land ahead",
      "Clean and at Vyse: control, blue line, flow, identify/verify/feather, secure",
      "Committed single-engine approach; no go-around once configured"
    ]
  },
  {
    id: "multi-oral-007", type: "oral", topic: "multi", ref: "AFH Ch. 13, PA-44 POH", tags: ["pa44", "cfi"],
    q: "Describe the Seminole's landing gear system and the emergency extension procedure. What tells you the gear is down, and what might keep it from locking?",
    answer: "The Seminole's gear is retracted and extended hydraulically by a reversible, electrically driven pump that is controlled by the gear selector; the gear is held retracted by hydraulic pressure rather than mechanical uplocks, and a pressure switch cycles the pump as needed. A squat switch on a main gear prevents retraction on the ground. Three green lights indicate each gear down and locked, and the warning horn sounds if the gear is not down when a throttle is reduced below about 14 inches of manifold pressure, when the flaps are extended beyond the first notch, or when the selector is placed up on the ground. For emergency extension, after checking circuit breakers and the master, the procedure is to slow below the POH's emergency extension speed, select gear down, and pull the emergency gear extension control, which releases the hydraulic pressure so the gear free-falls and locks under gravity and spring assistance. If a green light does not illuminate, yawing the airplane or a brief positive-G maneuver can help the gear lock; if it still will not lock, plan a gear-up or partial-gear landing per the POH. Exact numbers should be verified against your airplane's POH.",
    points: [
      "Hydraulic, electric reversible pump, held up by pressure",
      "Squat switch prevents retraction on ground",
      "Three greens; horn with low MP, flaps beyond first notch, or UP on ground",
      "Emergency: slow, select down, pull release knob → free-fall",
      "Yaw/maneuver to lock; plan a gear-up landing if not"
    ]
  },
  {
    id: "multi-oral-008", type: "oral", topic: "multi", ref: "AFH Ch. 13", tags: ["cfi", "atp", "ipc"],
    q: "An engine fails in IMC in a light twin at cruise. What changes about the way you fly the airplane, and what are the traps?",
    answer: "First is control: a sudden yaw and roll in cloud is disorienting, so the priority is to stop the yaw with rudder, set the attitude for Vyse, and bank slightly toward the good engine before doing anything else. Then the flow: everything forward, confirm clean, identify, verify, feather, secure. With the engine secured the airplane will drift down to its single-engine ceiling, which may be below the MEA or the freezing level, so I need to tell ATC immediately, declare, and get vectors toward the nearest suitable approach with the lowest minimums, not necessarily the destination. I lose one alternator and possibly a vacuum pump or hydraulic pump depending on the airplane, so I check what systems went with that engine and shed electrical load. The approach is flown committed: I keep at least Vyse, delay full flaps until landing is assured, and brief that there will be no go-around once configured. The traps are feathering the wrong engine in the confusion, letting airspeed decay below Vyse while troubleshooting, trying to maintain an altitude the airplane cannot hold, and flying a normal missed approach profile that the airplane cannot deliver.",
    points: [
      "Control first: rudder, Vyse attitude, bank toward good engine",
      "Flow: forward, clean, identify, verify, feather, secure",
      "Drift-down vs MEA; declare, nearest suitable approach",
      "Systems lost with the engine: alternator, vacuum, hydraulics (airplane-specific)",
      "Committed approach; no single-engine missed approach once configured"
    ]
  }
);
