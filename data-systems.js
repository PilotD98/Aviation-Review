window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "systems-mcq-001", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review"],
    q: "Why do reciprocating aircraft engines use two magnetos and two spark plugs per cylinder?",
    choices: [
      "So the engine can be started without the battery, since one magneto has an impulse coupling",
      "Primarily to allow the engine to run at a lower RPM during taxi",
      "To double the voltage available to each spark plug",
      "For redundancy if one ignition system fails, and for more complete, efficient combustion from two flame fronts in each cylinder"
    ],
    a: 3,
    exp: "Each magneto is a self-contained generator that needs no aircraft electrical power, so the engine keeps running after a total electrical failure, and the loss of one magneto leaves the engine running on the other. Dual plugs also ignite the charge from two points, which shortens the burn time and improves power and detonation margin; that is why RPM drops slightly when you select a single magneto. The impulse coupling is a starting aid, not the reason for having two magnetos."
  },
  {
    id: "systems-mcq-002", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "cfi"],
    q: "What is the function of the magneto P-lead, and why is a broken P-lead dangerous?",
    choices: [
      "It supplies battery power to the magneto; a broken P-lead means the engine will not start",
      "It grounds the magneto's primary circuit when the ignition switch is OFF; a broken P-lead leaves that magneto 'hot,' so the engine can fire if the propeller is moved even with the switch OFF",
      "It connects the magneto to the starter solenoid; a broken P-lead prevents the starter from engaging",
      "It carries high voltage to the distributor; a broken P-lead causes a rough-running engine"
    ],
    a: 1,
    exp: "A magneto generates its own spark whenever the engine turns. The P-lead (primary lead) is the only thing that disables it: with the switch OFF, the P-lead grounds the primary coil so no spark can be produced. If it is broken or disconnected, that magneto is live regardless of switch position. The grounding check at idle before shutdown (momentarily selecting OFF and confirming the engine starts to quit) verifies the P-leads; treat every propeller as if the mags are hot."
  },
  {
    id: "systems-mcq-003", type: "mcq", topic: "systems", ref: "C172S POH Sec. 4", tags: ["c172", "flight-review"],
    q: "During the magneto check in a Cessna 172S at 1,800 RPM, the POH limits are",
    choices: [
      "A maximum drop of 150 RPM on either magneto and no more than 50 RPM difference between the two",
      "A maximum drop of 175 RPM on either magneto and no more than 75 RPM difference between the two",
      "A maximum drop of 100 RPM on either magneto with no limit on the difference",
      "A maximum drop of 200 RPM on either magneto and no more than 100 RPM difference"
    ],
    a: 0,
    exp: "The 172S POH calls for the check at 1,800 RPM with a drop not exceeding 150 RPM on either magneto and a differential of no more than 50 RPM. An absence of any drop is also abnormal: it suggests a broken P-lead (the magneto you think is off is still firing). An excessive drop or rough running points to a fouled plug, bad harness, or mag timing problem; the POH's lean-to-clear procedure may clean a lead-fouled plug, but a persistent discrepancy is a no-go."
  },
  {
    id: "systems-mcq-004", type: "mcq", topic: "systems", ref: "PHAK Ch. 7, C172S POH", tags: ["c172", "pa44", "flight-review"],
    q: "Which statement correctly contrasts the fuel-injected Cessna 172S with the carbureted PA-44 Seminole?",
    choices: [
      "The 172S is susceptible to carburetor ice and has carb heat; the Seminole is not",
      "Both are susceptible to carburetor icing because both use float-type induction systems",
      "The 172S is not susceptible to carburetor icing (it has no carburetor) but can suffer vapor lock and hot-start difficulty; the Seminole's carbureted engines can form carburetor ice, which is why it has carburetor heat controls",
      "The Seminole uses fuel injection on both engines and has an alternate air door instead of carb heat"
    ],
    a: 2,
    exp: "Carburetor ice forms from the temperature drop at the venturi and from fuel vaporization; a fuel-injected engine has no venturi or float bowl, so the 172S cannot form carb ice (it has an alternate induction air source for a blocked filter, not carb heat). The trade-offs of injection are vapor lock in hot fuel lines and a trickier hot start. The Seminole's Lycoming O-360s are carbureted, so carburetor heat is part of its engine-failure and approach checklists."
  },
  {
    id: "systems-mcq-005", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["pa44", "flight-review"],
    q: "In a carbureted engine such as the Seminole's O-360, the first indications of carburetor ice with a constant-speed propeller are",
    choices: [
      "A drop in RPM followed by a rise in oil temperature",
      "A rise in manifold pressure and a loss of RPM",
      "A drop in manifold pressure with little or no change in RPM, possibly followed by roughness; applying full carburetor heat initially makes it worse before ice clears",
      "A drop in both RPM and manifold pressure, with carburetor heat producing an immediate improvement"
    ],
    a: 2,
    exp: "With a constant-speed prop the governor holds RPM, so the loss of power from ice shows up as a decreasing manifold pressure. (With a fixed-pitch prop it shows as an RPM drop.) Full carb heat introduces warm, less dense air and melting ice into the engine, so power drops further and the engine may run rough before manifold pressure recovers; partial heat without a carb temperature gauge can move the mixture into the icing range. Carb ice can form at temperatures well above freezing with high humidity, especially at low power settings."
  },
  {
    id: "systems-mcq-006", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "cfi"],
    q: "Detonation differs from pre-ignition in that",
    choices: [
      "Detonation is the uncontrolled, explosive burning of the fuel-air charge after normal ignition, typically from high temperatures, low-grade fuel, or an excessively lean mixture at high power; pre-ignition is ignition before the spark from a hot spot such as a glowing carbon deposit",
      "Pre-ignition is the explosive burning of the charge after normal ignition; detonation is ignition from a hot spot before the spark",
      "Detonation occurs only in fuel-injected engines; pre-ignition occurs only in carbureted engines",
      "Detonation is caused by an overly rich mixture; pre-ignition is caused by an overly lean mixture"
    ],
    a: 0,
    exp: "Detonation is a timing-and-temperature problem: the end gas spontaneously explodes after the plug fires, hammering the piston and overheating the cylinder. Causes include using a lower octane fuel than specified, high power with a lean mixture, high cylinder head temperatures, and over-boosting. Pre-ignition is a hot-spot problem: the charge lights off early, and the effects are similar. Either can destroy an engine in minutes; the remedy is to enrich the mixture, reduce power, and lower cylinder temperatures (open cowl flaps, increase airspeed)."
  },
  {
    id: "systems-mcq-007", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review"],
    q: "Why is the mixture leaned during cruise at altitude, and what happens if it is left full rich?",
    choices: [
      "Because the fuel becomes denser at altitude; a full-rich mixture will cause detonation",
      "Because air density decreases with altitude while the fuel metering stays the same, so the mixture becomes progressively richer; left full rich, the engine loses power, fouls plugs, and burns excess fuel",
      "Because the engine runs hotter at altitude; a full-rich mixture will overheat the cylinders",
      "Because the magnetos require a leaner mixture to produce a spark at lower pressure"
    ],
    a: 1,
    exp: "The carburetor or fuel injector meters fuel by volume of air flow; as the air thins, the same volume contains fewer oxygen molecules, so the fuel-air ratio drifts rich. Leaning restores the ratio, recovers power, keeps plugs from lead fouling, and reduces fuel burn. Full rich is used for takeoff and climb at low density altitude because the extra fuel cools the cylinders; at high density altitude the mixture is leaned for takeoff per the POH to regain power."
  },
  {
    id: "systems-mcq-008", type: "mcq", topic: "systems", ref: "PHAK Ch. 7, C172S POH", tags: ["c172", "flight-review"],
    q: "A Cessna 172S shows oil pressure steadily falling in cruise while oil temperature is rising. The best interpretation and action is",
    choices: [
      "The oil pressure gauge has probably failed; continue to the destination and have it checked",
      "The oil has thinned from heat; reduce power to cool it and continue",
      "The engine is overfilled with oil; this is normal and will stabilize",
      "An oil leak or pump problem is likely and engine failure may follow; reduce power, land at the nearest suitable airport, and be prepared for a forced landing"
    ],
    a: 3,
    exp: "Low pressure with rising temperature is the classic signature of a real oil problem: less oil is reaching the bearings, so friction and temperature rise. A gauge failure typically shows one indication going abnormal with the other normal. The 172S holds 8 quarts maximum and the POH specifies a minimum quantity for flight; do not take off below it. The oil system lubricates, cools, seals, and cleans; losing it means a seizure, so land as soon as practical and expect the engine to quit."
  },
  {
    id: "systems-mcq-009", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["pa44", "flight-review"],
    q: "In a constant-speed propeller system, the propeller governor maintains the selected RPM by",
    choices: [
      "Varying the manifold pressure to the engine",
      "Using flyweights that sense engine RPM to move a pilot valve, which directs or releases oil pressure to the propeller hub to change blade pitch",
      "Electrically driving a pitch-change motor in the hub",
      "Adjusting the mixture to the engine"
    ],
    a: 1,
    exp: "The governor's flyweights spin with the engine; an increase in RPM swings them outward, moving the pilot valve so oil flows to (or from) the propeller piston and the blades take a bigger bite, loading the engine back to the set RPM. The prop control sets the speeder spring tension, i.e., the target RPM. The throttle controls manifold pressure. In the Seminole, oil pressure moves the blades toward low pitch and the spring/counterweights toward high pitch and feather; on most non-feathering singles it is the reverse."
  },
  {
    id: "systems-mcq-010", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "ipc"],
    q: "The function of the voltage regulator in an alternator-equipped aircraft is to",
    choices: [
      "Convert the alternator's AC output to DC for the battery",
      "Limit current flow to the battery during starting",
      "Disconnect the alternator from the bus when the battery is fully charged",
      "Control the alternator's output voltage (by varying field current) so the bus stays at a constant voltage slightly above the battery's, keeping the battery charged without overcharging"
    ],
    a: 3,
    exp: "An alternator's output depends on RPM and field strength; the regulator adjusts the field current to hold the bus at about 28 volts in a 24-volt system (or 14 in a 12-volt system). Rectifier diodes inside the alternator do the AC-to-DC conversion. An overvoltage sensor, where installed, takes the alternator offline if the regulator fails high, which protects avionics and is one cause of a sudden 'alternator failure' indication that may be cleared by cycling the alternator switch once."
  },
  {
    id: "systems-mcq-011", type: "mcq", topic: "systems", ref: "C172S POH Sec. 7", tags: ["c172", "ipc"],
    q: "The Cessna 172S Nav III electrical system consists of",
    choices: [
      "A 14-volt system with a 12-volt battery and a 60-amp generator",
      "A 28-volt system with a 24-volt battery and two 60-amp alternators",
      "A 28-volt system with a 60-amp engine-driven alternator, a 24-volt main battery, and a standby battery that can power the essential bus for a limited period (about 30 minutes) after an alternator failure",
      "A 28-volt system with a 70-amp alternator and no standby battery"
    ],
    a: 2,
    exp: "The 172S uses a 28-volt bus with a 60-amp alternator and a 24-volt main battery. Nav III airplanes add a standby battery that automatically powers the essential bus (PFD, AHRS, ADC, one nav/com, and related items) when main bus voltage drops; the POH describes roughly 30 minutes of standby power, which is why the standby battery test is part of the before-start checklist. Verify the details and times against your airplane's POH."
  },
  {
    id: "systems-mcq-012", type: "mcq", topic: "systems", ref: "C172S POH Sec. 3", tags: ["c172", "ipc", "flight-review"],
    q: "In a Cessna 172S, the LOW VOLTS annunciator illuminates in cruise and the ammeter shows discharge. The appropriate sequence is",
    choices: [
      "Check that the ALT side of the master switch is on and try cycling it once (per the POH) and check the alternator circuit breaker; if the alternator does not come back online, reduce electrical load to essentials, plan to land as soon as practical, and expect the standby battery to carry the essential bus when the main battery is depleted",
      "Turn the master switch off immediately to preserve the battery and continue to the destination",
      "Turn on all electrical equipment to test the system, then leave the alternator off",
      "Pull the alternator field circuit breaker and reset it repeatedly until the light goes out"
    ],
    a: 0,
    exp: "The POH procedure is to confirm the switch position and attempt one reset of the alternator; if it stays offline, the airplane is on battery power, and the goal is to stretch it by shedding load (lights, second radio, pitot heat only if needed) and get on the ground. Turning the master off would also shut down the avionics, and in IMC you need them. Repeatedly resetting a tripped breaker risks a fire. On the G1000 airplane the essential bus with the standby battery gives roughly 30 minutes of PFD, AHRS, ADC, and one nav/com once the main battery is gone; the transponder, flaps, and most lighting are not on the essential bus."
  },
  {
    id: "systems-mcq-013", type: "mcq", topic: "systems", ref: "C172S POH Sec. 7, IFH Ch. 5", tags: ["c172", "ipc"],
    q: "In a G1000-equipped Cessna 172S, the AHRS fails in flight. What is lost and what remains?",
    choices: [
      "The attitude and heading information on the PFD are lost (red X), while airspeed, altitude, and vertical speed from the ADC remain; the pilot reverts to the standby attitude indicator and magnetic compass for attitude and heading",
      "All PFD information is lost; the pilot must fly on the MFD",
      "Airspeed and altitude are lost, but attitude and heading remain",
      "The GPS navigation is lost, but all flight instruments remain"
    ],
    a: 0,
    exp: "The G1000 separates the Attitude and Heading Reference System (attitude, heading, rate of turn) from the Air Data Computer (airspeed, altitude, VSI, OAT, TAS). An AHRS failure removes attitude and heading from the PFD but leaves the air data tapes. The standby instruments (on Nav III airplanes an electrically powered standby attitude indicator fed by the essential bus/standby battery, plus a pneumatic standby airspeed indicator and altimeter; there is no vacuum system; later airplanes use a battery-backed electronic standby) and the magnetic compass provide the backup. An ADC failure does the opposite, leaving attitude and heading and requiring the standby airspeed and altimeter."
  },
  {
    id: "systems-mcq-014", type: "mcq", topic: "systems", ref: "IFH Ch. 5, PHAK Ch. 8", tags: ["ipc", "flight-review"],
    q: "If the static port becomes blocked in flight (with the pitot tube clear), which indications result?",
    choices: [
      "The airspeed indicator reads zero, the altimeter freezes, and the VSI shows a climb",
      "The airspeed indicator acts like an altimeter, the altimeter is unaffected, and the VSI reads zero",
      "The altimeter freezes at the altitude of the blockage, the VSI reads zero, and the airspeed indicator reads too low above that altitude and too high below it; opening the alternate static source restores the instruments with small errors",
      "The altimeter continues to work normally, but the VSI and airspeed indicator fail"
    ],
    a: 2,
    exp: "The altimeter and VSI depend entirely on static pressure, so they freeze. The airspeed indicator compares pitot (ram plus static) against the trapped static: climbing above the blockage, actual static falls while the trapped reference stays high, so indicated airspeed reads low; descending below it, indicated airspeed reads high (the classic trap on approach is thinking you are faster than you are). The alternate static source draws cabin air, which is at slightly lower pressure, so the altimeter reads slightly high, airspeed slightly high, and the VSI shows a momentary climb. A blocked pitot (ram and drain) makes the ASI behave like an altimeter."
  },
  {
    id: "systems-mcq-015", type: "mcq", topic: "systems", ref: "C172S POH Sec. 7, PA-44 POH Sec. 7", tags: ["c172", "pa44"],
    q: "How do the stall warning systems on the Cessna 172S and the PA-44 Seminole differ?",
    choices: [
      "Both use electric lift detector vanes that require the master switch on",
      "The 172S uses an electric vane and horn; the Seminole uses a pneumatic reed",
      "Both use pneumatic reed horns that work with the master switch off",
      "The 172S uses a pneumatic reed-type horn driven by suction at a wing leading-edge port, so it works with the master switch off; the Seminole uses electric lift-detector vanes on the left wing with an electric horn, disabled on the ground by a squat switch, so it requires electrical power"
    ],
    a: 3,
    exp: "On the 172S, as angle of attack increases the stagnation point moves below the leading-edge port, air is drawn through the port, and a reed in the horn sounds; the preflight check is to suck gently on the port and listen for the horn. The Seminole uses two lift-detector vanes on the left wing (one active with flaps up or 10°, the other for larger flap settings), an electric horn, and a squat switch that keeps it from sounding on the ground, so lifting the vane on preflight will not sound the horn; the preflight is a visual check of the vanes for freedom of movement and condition. Both are set to sound 5 to 10 knots above the stall. Verify your airplane's details against the POH."
  },
  {
    id: "systems-mcq-016", type: "mcq", topic: "systems", ref: "PA-44 POH Sec. 7", tags: ["pa44"],
    q: "The PA-44 Seminole landing gear system has which features?",
    choices: [
      "Electric gear motor, mechanical uplocks, hand-crank emergency extension, and a horn tied only to airspeed",
      "Hydraulic actuation by an electrically driven reversible pump, gear held up by hydraulic pressure, a squat switch that prevents retraction on the ground, three green down-and-locked lights, and an emergency extension control that releases hydraulic pressure so the gear free-falls",
      "Pneumatic actuation with a nitrogen bottle, mechanical downlocks only, and no warning horn",
      "Hydraulic actuation by an engine-driven pump on the left engine, so an engine failure requires manual extension"
    ],
    a: 1,
    exp: "The Seminole's pump is electric, so gear operation does not depend on either engine running, and it is controlled by the selector switch; a pressure switch stops the pump once the gear is up and pressure is built, and restarts it if pressure bleeds off. With no mechanical uplocks, releasing the pressure through the emergency extension control lets gravity and springs extend and lock the gear. The horn sounds with the gear up when a throttle is reduced below about 14 in Hg, flaps are extended beyond the first notch, or the selector is UP on the ground. Verify against your airplane's POH."
  },
  {
    id: "systems-mcq-017", type: "mcq", topic: "systems", ref: "C172S POH Sec. 7", tags: ["c172", "flight-review"],
    q: "The Cessna 172S fuel system is correctly described as",
    choices: [
      "A pressure-fed system using the engine-driven pump to draw from two wing tanks with a Left/Right selector and 7 drain points",
      "A gravity-feed system from two 28-gallon tanks (26.5 usable each, 53 total usable) through a Both/Left/Right selector, a reservoir tank, the fuel shutoff valve, an engine-driven fuel pump and an electric auxiliary pump for priming and vapor suppression, and 13 fuel drains (5 per wing plus 3 under the fuselage)",
      "A gravity-feed system from two 26.5-gallon tanks through a Both/Left/Right selector, with no electric pump because fuel injection does not require one",
      "A gravity-feed system with 56 gallons usable, a Both/Left/Right selector, and 5 fuel drains"
    ],
    a: 1,
    exp: "The high wing lets gravity deliver fuel through the selector to the reservoir tank and then to the engine-driven pump and injection servo; the electric auxiliary pump is used for priming and if the engine-driven pump fails or vapor is suspected. Thirteen sump drains (five per wing, plus the reservoir, selector, and strainer drains under the fuselage) are why the 172S preflight takes a while. Total fuel is 56 gallons with 53 usable; a LOW FUEL annunciator warns when a tank falls below roughly 5 gallons for 60 seconds. Verify against your POH."
  },
  {
    id: "systems-mcq-018", type: "mcq", topic: "systems", ref: "PA-44 POH Sec. 7", tags: ["pa44"],
    q: "In the PA-44 Seminole, the electric fuel pumps are normally turned ON for",
    choices: [
      "Takeoff, landing, and engine starting (priming), and whenever an engine-driven pump may have failed or fuel pressure fluctuates",
      "Cruise flight only, to reduce the load on the engine-driven pumps",
      "Ground operations only, since the engine-driven pumps handle all flight conditions",
      "Crossfeed operations only"
    ],
    a: 0,
    exp: "Each Seminole engine has an engine-driven pump as its primary source and an electric pump as a backup and for priming. Low-altitude phases (takeoff, landing, and the approach) are flown with the electric pumps on so a failure of an engine-driven pump cannot interrupt fuel flow when there is no time to troubleshoot. The pumps are also used during crossfeed and as a first response to fuel-pressure fluctuation. Verify the specific checklist usage against your airplane's POH."
  },
  {
    id: "systems-mcq-019", type: "mcq", topic: "systems", ref: "PHAK Ch. 7, AIM 8-1-1", tags: ["flight-review"],
    q: "At a self-serve pump you draw a fuel sample that is clear and smells like kerosene. The correct identification and action is",
    choices: [
      "It is 100LL that has lost its dye; it is safe to use",
      "It is Jet A (clear/straw colored, kerosene odor), which must never be used in a piston engine; do not fly until the tanks are drained and the system is flushed, because a piston engine on jet fuel will detonate and fail shortly after takeoff",
      "It is 100LL mixed with water; sump the tanks until the sample is blue",
      "It is a mogas blend and may be used in the 172S if it is at least 91 octane"
    ],
    a: 1,
    exp: "100LL is dyed blue; Jet A is clear to straw colored with a distinctive kerosene smell and an oily feel. Jet A in a piston engine will run briefly, then detonate and destroy itself, typically just after takeoff when power is highest. Misfueling is prevented by checking the fuel truck or pump placard, the nozzle (jet fuel nozzles are larger and should not fit a 100LL filler with restrictor), and the sample's color and smell. If there is any doubt, do not fly; even a few gallons of Jet A contaminating a tank of avgas is unacceptable."
  },
  {
    id: "systems-mcq-020", type: "mcq", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review"],
    q: "Before refueling an aircraft, the required precaution against static electricity is to",
    choices: [
      "Turn the master switch on so the aircraft is grounded through the electrical system",
      "Leave the engine running at idle so the alternator keeps the airframe at ground potential",
      "Bond the fuel truck or pump to the aircraft (and the nozzle to the aircraft) before opening the filler cap, so any static charge equalizes before fuel flows",
      "Wait at least 10 minutes after engine shutdown for static to dissipate"
    ],
    a: 2,
    exp: "Fuel flowing through a hose and splashing into a tank generates static charge; a spark across the filler neck in fuel vapor can cause a fire. Bonding the aircraft to the fueling source (and the nozzle to the airframe) equalizes potential so no spark occurs. The master switch and engine should be off during fueling; the aircraft's electrical system has nothing to do with grounding. The same bonding applies to defueling and to draining large fuel quantities."
  },
  {
    id: "systems-mcq-021", type: "mcq", topic: "systems", ref: "14 CFR 91.207, AIM 6-2-4", tags: ["flight-review"],
    q: "Which statement about the emergency locator transmitter is correct?",
    choices: [
      "An ELT must be tested in the first 5 minutes after the hour, and its battery replaced after 1 cumulative hour of use or when 50 percent of its useful life has expired; inspection is required every 12 calendar months",
      "An ELT may be tested at any time for no more than 3 sweeps, and its battery must be replaced annually",
      "A 121.5 MHz ELT is monitored by satellite, so no other action is needed after a hard landing",
      "An ELT battery must be replaced after every activation regardless of duration"
    ],
    a: 0,
    exp: "Under 91.207 the ELT is inspected within the preceding 12 calendar months for installation, battery corrosion, control and crash-sensor operation, and signal radiation, and the battery is replaced after 1 hour cumulative use or 50 percent of useful life. Operational tests on the air are limited to the first 5 minutes after the hour, no more than three sweeps. Satellites no longer monitor 121.5 MHz; a 406 MHz ELT transmits a coded, registered signal that COSPAS-SARSAT detects. After a hard landing, monitor 121.5 and check the ELT for inadvertent activation; a 406 unit should be registered to the owner."
  },
  {
    id: "systems-mcq-022", type: "mcq", topic: "systems", ref: "PHAK Ch. 7, AC 91-13C", tags: ["flight-review"],
    q: "On a morning with an outside air temperature of 0°F, the best practice before starting a Lycoming engine in a 172S or Seminole is to",
    choices: [
      "Start the engine normally but use a higher RPM during warm-up to speed oil heating",
      "Preheat the engine (and ideally the cabin and battery) per the manufacturer's cold-weather guidance before starting, because starting a cold-soaked engine causes most of its wear from thick oil, tight clearances, and poor fuel vaporization; then warm up at low RPM until oil pressure and temperature are in the green",
      "Pull the propeller through by hand 20 times to loosen the oil, then start normally",
      "Run the electric fuel pump for 2 minutes to warm the fuel before cranking"
    ],
    a: 1,
    exp: "Cold oil does not flow to bearings and cam lobes for many seconds after a start, aluminum pistons and steel cylinders contract at different rates, and cold fuel does not vaporize well, which leads to over-priming and induction fires. Lycoming and the airframe POH each publish a temperature below which preheat is recommended (check both for your airplane), and a cold battery delivers a fraction of its rated capacity. High RPM on a cold engine before oil is circulating is exactly what causes the damage. Pulling the prop through on a possibly hot magneto is a hazard, not a technique."
  },

  // ───────────────────────── CARDS ─────────────────────────
  {
    id: "systems-card-001", type: "card", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "cfi"],
    front: "Four-stroke cycle, and what the magneto, P-lead, and impulse coupling each do",
    back: "Intake, compression, power, exhaust (spark fires near the end of compression; two plugs per cylinder).\nMagneto: self-contained AC generator and coil → high-voltage spark; independent of aircraft electrical system.\nP-lead: grounds the primary circuit when the switch is OFF; broken P-lead = hot mag.\nImpulse coupling (usually left mag): spring-loaded mechanism that retards timing and gives a hot spark at cranking RPM for starting."
  },
  {
    id: "systems-card-002", type: "card", topic: "systems", ref: "C172S POH Sec. 4", tags: ["c172"],
    front: "Cessna 172S magneto check limits and what abnormal results mean",
    back: "1,800 RPM; max drop 150 RPM either mag; max 50 RPM difference.\nNo drop at all: suspect broken P-lead (mag still hot).\nExcessive drop/roughness: fouled plug, harness, or timing; try POH lean-to-clear, otherwise no-go.\nGrounding check at idle before shutdown verifies P-leads."
  },
  {
    id: "systems-card-003", type: "card", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "cfi"],
    front: "Detonation vs pre-ignition: definitions, causes, indications, remedy",
    back: "Detonation: explosive burning of the end gas after normal ignition. Causes: low-octane fuel, lean mixture at high power, high CHT, over-boost, too-high MP with low RPM.\nPre-ignition: ignition before the spark from a hot spot (carbon, cracked plug). Often follows detonation.\nIndications: rough running, rising CHT, loss of power, engine damage.\nRemedy: enrich mixture, reduce power, increase airspeed/open cowl flaps, use correct fuel."
  },
  {
    id: "systems-card-004", type: "card", topic: "systems", ref: "PHAK Ch. 7, C172S POH", tags: ["c172", "pa44"],
    front: "Fuel injection vs carburetor: advantages, disadvantages, and the hot-start problem",
    back: "Injection (172S IO-360): no carb ice, better fuel distribution, more precise mixture; but vapor lock when hot, harder hot starts, and injector contamination.\nCarburetor (Seminole O-360): simple, easy starts; but carb ice (even above freezing with high humidity, worst at low power), uneven distribution.\nHot start (injected): follow POH flooded/hot procedure — typically mixture idle cutoff, throttle partially open, crank, advance mixture as engine fires; use the aux pump per POH to purge vapor."
  },
  {
    id: "systems-card-005", type: "card", topic: "systems", ref: "PHAK Ch. 7", tags: ["pa44", "flight-review"],
    front: "Constant-speed propeller and governor: what controls what",
    back: "Throttle → manifold pressure (power).\nProp control → governor speeder spring → target RPM.\nGovernor flyweights sense RPM; pilot valve ports oil to/from the hub to change pitch.\nOverspeed → more pitch (bigger bite); underspeed → less pitch.\nSeminole (feathering): oil → low pitch; spring + counterweights → high pitch/feather; loss of oil → feather.\nTypical non-feathering single: oil → high pitch; loss of oil → low pitch (high RPM)."
  },
  {
    id: "systems-card-006", type: "card", topic: "systems", ref: "C172S POH Sec. 7", tags: ["c172", "ipc"],
    front: "Cessna 172S Nav III electrical system and electrical-failure essentials",
    back: "28 V bus; 60 A alternator; 24 V main battery; standby battery for the essential bus (~30 min; verify POH).\nMaster switch: BAT and ALT halves.\nLOW VOLTS + discharge: confirm ALT on, one reset attempt, check breaker; if no joy, shed load and land as soon as practical.\nEssential bus keeps PFD, AHRS, ADC, one nav/com; loses transponder, flaps, most lights (verify your airplane).\nMagnetos keep the engine running regardless."
  },
  {
    id: "systems-card-007", type: "card", topic: "systems", ref: "IFH Ch. 5, C172S POH Sec. 7", tags: ["c172", "ipc"],
    front: "G1000: what AHRS, ADC, and the magnetometer provide, and what fails when each fails",
    back: "AHRS: attitude, heading (with magnetometer), rate of turn, slip/skid. Failure → red X on attitude/heading; use standby AI and compass.\nADC: airspeed, altitude, VSI, OAT/TAS. Failure → red X on tapes; use standby airspeed/altimeter.\nMagnetometer: heading input to AHRS. Failure → heading flagged; use compass.\nPFD failure → reversionary mode puts flight data on the MFD.\nStandby instruments vary by year (electric standby AI plus pneumatic ASI/altimeter on Nav III, no vacuum system; battery-backed electronic standby on later airplanes); check your airplane."
  },
  {
    id: "systems-card-008", type: "card", topic: "systems", ref: "IFH Ch. 5", tags: ["ipc", "flight-review"],
    front: "Pitot-static blockages and alternate static effects",
    back: "Pitot ram blocked, drain open: ASI drops to zero.\nPitot ram + drain blocked: ASI acts like an altimeter (reads higher as you climb, lower as you descend).\nStatic blocked: altimeter frozen, VSI zero, ASI reads low above the blockage altitude and high below it.\nAlternate static (cabin air, lower pressure): altimeter reads slightly high, ASI slightly high, VSI shows momentary climb.\nPitot heat prevents the pitot blockage; the alternate static valve handles a static blockage."
  },
  {
    id: "systems-card-009", type: "card", topic: "systems", ref: "PA-44 POH Sec. 7", tags: ["pa44"],
    front: "PA-44 Seminole systems quick facts (verify against your POH)",
    back: "Engines: Lycoming O-360 (L) and LO-360 (R), 180 hp each, carbureted, counter-rotating → no critical engine.\nProps: Hartzell 2-blade constant-speed, full-feathering; start locks below ~950 RPM.\nFuel: 110 total / 108 usable, 55 per nacelle tank; selectors ON/OFF/X-FEED; engine-driven + electric pump per engine.\nGear: hydraulic, electric reversible pump, free-fall emergency extension; Vlo up 109, Vle 140.\nFlaps: manual handle, 0/10/25/40.\nStall warning: electric lift detectors, left wing, squat switch.\nElectrical: two alternators (voltage varies by year), one battery."
  },
  {
    id: "systems-card-010", type: "card", topic: "systems", ref: "PHAK Ch. 7, 14 CFR 91.207", tags: ["flight-review"],
    front: "Fuel identification, static precautions, brakes, and ELT facts",
    back: "100LL: blue; Jet A: clear/straw, kerosene odor; mogas: clear/amber. Jet A in a piston engine → detonation and failure.\nRefueling: bond truck/pump and nozzle to aircraft before opening the cap; master and engine off; no cell phones/smoking.\nBrakes: hydraulic disc, independent toe brakes; spongy pedal = air or fluid leak; parking brake traps pressure.\nELT (91.207): 12-cal-month inspection; battery after 1 hr cumulative use or 50% useful life; test first 5 min after the hour, ≤3 sweeps; 406 MHz units registered; 121.5 no longer satellite-monitored."
  },

  // ───────────────────────── SCENARIOS ─────────────────────────
  {
    id: "systems-scen-001", type: "scenario", topic: "systems", ref: "C172S POH Sec. 3, IFH Ch. 5", tags: ["c172", "ipc"],
    q: "You are in a G1000 Cessna 172S at night in IMC, 40 minutes from your destination, when the LOW VOLTS annunciator comes on and the ammeter shows a discharge. You cycle the ALT switch once with no result. The nearest airport with an ILS is 15 minutes away; the destination has an RNAV (GPS) approach and a 1,000 ft ceiling. What is the best plan?",
    choices: [
      "Turn the master off to save the battery and fly by the standby instruments to the destination, turning the master back on for the approach",
      "Continue to the destination at normal load since the main battery will last at least 40 minutes",
      "Shed all non-essential load (exterior lights except as required, second com, cabin lights), tell ATC you have an electrical failure, and divert to the closer airport, planning for the standby battery to pick up the essential bus (PFD, AHRS, ADC, one nav/com) and for the transponder and flaps to be unavailable; fly a no-flap landing",
      "Pull all the avionics circuit breakers to reduce load, then reset them one at a time to find the fault"
    ],
    a: 2,
    exp: "The main battery's endurance at normal load is unknown and probably less than you hope; the standby battery is designed for about 30 minutes on the essential bus only. The essential bus keeps the PFD, AHRS, ADC, and one nav/com but not the transponder or the flaps. Turning the master off in IMC at night removes your primary instruments and lighting and gains little, since the standby battery already takes over automatically. Fifteen minutes to an ILS with ATC aware of the failure is the conservative choice; pulling and resetting breakers at random in IMC invites a fire or loss of the remaining equipment. Verify your airplane's essential bus contents and standby battery duration against its POH."
  },
  {
    id: "systems-scen-002", type: "scenario", topic: "systems", ref: "PHAK Ch. 7, C172S POH Sec. 4", tags: ["c172", "flight-review"],
    q: "On a 95°F afternoon you taxi a fuel-injected 172S back to the fuel pump after a 1.5-hour flight, shut down for 20 minutes, and now the engine cranks but will not start with the normal priming procedure. Fuel flow fluctuates when you run the aux pump. What is the most likely cause and the right approach?",
    choices: [
      "Vapor lock in the hot fuel lines and injector; use the POH hot or flooded start technique (typically mixture idle cutoff, throttle partially open, crank, advance mixture as the engine fires), and if it still will not start, let it cool rather than cranking continuously, observing the starter duty cycle",
      "A failed magneto; the airplane should be grounded",
      "Water in the fuel from the hot pump; sump the tanks and try again",
      "A dead battery from the previous flight; jump-start it from a ground power cart"
    ],
    a: 0,
    exp: "A heat-soaked injected engine boils the fuel in the lines and distribution manifold, so the normal prime floods some cylinders with vapor and others with liquid. The POH's hot-start procedure clears the vapor and excess fuel, and the aux pump may be used briefly to purge vapor while watching fuel flow. Continuous cranking overheats the starter (the POH limits duty cycle) and drains the battery; patience and cooling often solve the problem. A fuel flow fluctuation on the aux pump is the vapor itself, not water, and a bad magneto would not produce this pattern."
  },
  {
    id: "systems-scen-003", type: "scenario", topic: "systems", ref: "PA-44 POH Sec. 3, PA-44 POH Sec. 7", tags: ["pa44"],
    q: "On downwind in a Seminole you select gear down. The pump runs, then keeps running, and you get two green lights but the nose gear light stays out. The gear warning horn does not sound when you reduce power. What is the best assessment and action?",
    choices: [
      "The gear is down; the nose gear light bulb has failed. Land normally",
      "The nose gear is up; retract the gear and land gear up to avoid a nose-gear collapse",
      "The nose gear is not confirmed down. Leave the pattern or extend downwind, check the bulb by swapping it with a known-good light if the airplane allows and recheck the circuit breakers, then if still unlit, slow below the emergency extension speed, pull the emergency gear extension control, and yaw the airplane to help the gear lock; if it will not lock, follow the POH for a landing with unsafe gear",
      "Cycle the gear up and down repeatedly at high airspeed until the light illuminates"
    ],
    a: 2,
    exp: "The absence of the horn (which normally sounds with the throttle reduced and gear not down and locked) is a hint the gear may actually be down, but a continuously running pump and a dark light do not confirm it: a mislocked nose gear or a limit-switch fault is possible. The disciplined approach is to buy time away from the runway, rule out a bulb by the POH's press-to-test or bulb-swap method, then use the emergency free-fall extension, which releases hydraulic pressure so gravity and springs extend and lock the gear; slowing and yawing help. Cycling at high speed stresses the system and the retraction limit is 109 KIAS. If still unsafe, a planned landing per the POH with the nose gear unsafe is better than an assumed one."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "systems-oral-001", type: "oral", topic: "systems", ref: "PHAK Ch. 7", tags: ["flight-review", "cfi"],
    q: "Explain the ignition system on your airplane, including why a magneto check shows an RPM drop, what no drop would tell you, and why you treat a propeller as always live.",
    answer: "Each engine has two magnetos, each a self-contained generator and coil that produces its own high-voltage spark driven directly by the engine, independent of the battery or alternator, and each fires one of the two spark plugs in every cylinder. On the magneto check, selecting one magneto leaves each cylinder burning from one flame front instead of two; combustion takes slightly longer, peak pressure comes later, and the engine loses a little power, which shows as an RPM drop within the POH limits (150 RPM maximum and 50 RPM differential on the 172S). No drop at all means the magneto you think you turned off is still firing, which almost always indicates a broken P-lead, the ground wire that disables the magneto when the switch is off. Because a magneto with a broken P-lead will fire any time the propeller is turned, the only safe assumption is that the mags are always hot, which is why the propeller is treated as live during preflight and why a grounding check before shutdown is good practice.",
    points: [
      "Two independent magnetos, no electrical power needed, two plugs per cylinder",
      "RPM drop from single flame front; POH limits",
      "No drop = probably broken P-lead = hot mag",
      "Grounding check at idle; prop always live",
      "Impulse coupling aids starting"
    ]
  },
  {
    id: "systems-oral-002", type: "oral", topic: "systems", ref: "PHAK Ch. 7, C172S POH Sec. 7", tags: ["c172", "pa44", "flight-review"],
    q: "Compare the fuel systems of the Cessna 172S and the PA-44 Seminole: how fuel gets to the engine, what pumps are involved, and how you manage them.",
    answer: "The 172S is a high-wing gravity-feed system: two 28-gallon tanks (26.5 usable each, 53 total) feed through a Both/Left/Right selector into a small reservoir tank, then through the fuel shutoff valve and strainer to the engine-driven fuel pump and the fuel injection servo and flow divider. An electric auxiliary pump is used for priming and as a backup if the engine-driven pump fails or vapor is suspected; it is not needed for normal operation. Thirteen drains cover the wing tanks (five per wing), the reservoir, the selector, and the strainer. The Seminole is a low-wing twin with a 55-gallon tank in each nacelle (108 usable total); each engine has its own engine-driven pump and an electric pump, with a selector for each side with ON, OFF, and X-FEED positions. The electric pumps are on for start, takeoff, and landing and whenever the engine-driven pump is suspect. Crossfeed lets the operating engine draw from the opposite tank during single-engine cruise to balance fuel and extend range; it is not used for takeoff or landing. Both airplanes use 100LL, and both require a careful visual and sump check for water and correct fuel.",
    points: [
      "172S: gravity feed, Both/L/R selector, reservoir tank, engine-driven + aux pump, 13 drains, 53 usable",
      "Seminole: nacelle tanks, 108 usable, engine-driven + electric pump per engine, ON/OFF/X-FEED",
      "Electric pumps on for takeoff/landing in the Seminole; aux pump for priming/backup in the 172S",
      "Crossfeed: cruise only, operating engine draws from opposite tank",
      "Verify quantities with a dipstick; sump for water and fuel type"
    ]
  },
  {
    id: "systems-oral-003", type: "oral", topic: "systems", ref: "C172S POH Sec. 7, IFH Ch. 5", tags: ["c172", "ipc"],
    q: "Describe the electrical system of the G1000 172S and what you would do about an alternator failure in IMC.",
    answer: "It is a 28-volt system with a 60-amp engine-driven alternator and a 24-volt main battery, plus a standby battery in Nav III airplanes. A split master switch controls the battery and alternator field, and the alternator control unit regulates voltage and will take the alternator offline for over-voltage. Buses are arranged so an essential bus, fed by the standby battery when main bus voltage falls, keeps the PFD, AHRS, ADC, and one nav/com running for roughly 30 minutes; the transponder, flaps, most lighting, and the second radio are not on it. If LOW VOLTS illuminates with a discharge, I confirm the ALT switch is on, try one reset, and check the breaker. If the alternator stays offline, I shed every non-essential load, tell ATC I have an electrical failure and may lose the transponder, and divert to the nearest suitable approach rather than pressing on, planning a no-flap landing and keeping a flashlight ready. The engine keeps running on the magnetos no matter what the electrical system does. I would verify the bus contents and the standby battery endurance for my specific airplane.",
    points: [
      "28 V, 60 A alternator, 24 V battery, standby battery (Nav III)",
      "Essential bus: PFD/AHRS/ADC/one nav-com; not transponder or flaps",
      "Procedure: confirm ALT, one reset, breaker, then shed load",
      "Tell ATC, divert to nearest suitable approach, no-flap landing",
      "Magnetos keep the engine running"
    ]
  },
  {
    id: "systems-oral-004", type: "oral", topic: "systems", ref: "IFH Ch. 5, PHAK Ch. 8", tags: ["ipc", "flight-review"],
    q: "Walk me through the pitot-static system: which instruments use which pressure, what each blockage does, and how you would detect and handle it in flight.",
    answer: "The pitot tube supplies ram pressure to the airspeed indicator only; the static ports supply ambient pressure to the airspeed indicator, altimeter, and vertical speed indicator (and to the air data computer in a glass cockpit). If the pitot ram inlet ices over but the drain hole stays open, airspeed drops to zero. If both are blocked, the trapped pressure makes the airspeed indicator behave like an altimeter: it reads higher as you climb and lower as you descend, which has fooled crews into stalls. If the static ports are blocked, the altimeter freezes and the VSI reads zero, and airspeed reads too low above the blockage altitude and too high below it. Detection comes from cross-checking: an airspeed that changes with pitch but not with power, an altimeter that does not move in a climb, a VSI stuck at zero, or a glass-cockpit miscompare flag. The fixes are pitot heat for the pitot (turned on before entering visible moisture), and the alternate static source for the static system, accepting that cabin pressure makes the altimeter and airspeed read slightly high and the VSI show a momentary climb. If no alternate source exists, breaking the VSI glass is the last resort.",
    points: [
      "Pitot → ASI only; static → ASI, altimeter, VSI",
      "Pitot ram+drain blocked: ASI acts as altimeter",
      "Static blocked: altimeter frozen, VSI zero, ASI low above/high below",
      "Detection by cross-check and miscompare flags",
      "Pitot heat; alternate static and its small errors"
    ]
  },
  {
    id: "systems-oral-005", type: "oral", topic: "systems", ref: "PHAK Ch. 7", tags: ["pa44", "flight-review", "cfi"],
    q: "Explain detonation and pre-ignition, what causes them, how you would recognize them in flight, and what you would do about them.",
    answer: "Normal combustion is a controlled flame front moving across the cylinder after the plugs fire. Detonation is when the unburned end gas, compressed and heated by that flame front, explodes spontaneously; it produces a pressure spike that hammers the piston and overheats the cylinder head. It is caused by anything that raises cylinder temperature and pressure or lowers the fuel's resistance: fuel of lower octane than specified, high power with a lean mixture, high cylinder head temperatures from a slow climb with cowl flaps closed, excessive manifold pressure at low RPM, or very high induction air temperature. Pre-ignition is a hot spot, often a glowing carbon deposit or a cracked plug insulator, lighting the charge before the spark; it frequently follows detonation. In flight both show as rising CHT, loss of power, and roughness; a detonation that goes unaddressed can burn a piston in minutes. The response is to reduce the heat: enrich the mixture, reduce power, increase airspeed and open cowl flaps, and land to investigate. Prevention is using the correct fuel, following the POH power and leaning schedule, and keeping cylinder temperatures in the normal range.",
    points: [
      "Detonation: explosive end-gas burning after ignition",
      "Pre-ignition: hot-spot ignition before the spark",
      "Causes: wrong fuel, lean at high power, high CHT, over-boost",
      "Indications: rising CHT, power loss, roughness",
      "Remedy: enrich, reduce power, cool the engine, land"
    ]
  },
  {
    id: "systems-oral-006", type: "oral", topic: "systems", ref: "PA-44 POH Sec. 7", tags: ["pa44"],
    q: "Describe the Seminole's landing gear system, including normal and emergency operation and how the warning system works.",
    answer: "The Seminole's gear is retracted and extended by hydraulic pressure from an electrically driven reversible pump, controlled by the gear selector switch. There are no mechanical uplocks: hydraulic pressure holds the gear retracted, a pressure switch shuts the pump off when pressure builds and restarts it if pressure bleeds down, and if pressure is lost the gear will tend to come down on its own. A squat switch on a main gear prevents the pump from retracting the gear on the ground, and three green lights show the gear down and locked, with a transit indication while it is moving. The warning horn sounds if the gear is not down and locked when either throttle is reduced below about 14 inches of manifold pressure, when the flaps are extended beyond the first notch, or if the selector is moved to UP on the ground. For emergency extension, the procedure is to check breakers and the master, slow below the POH's emergency extension speed, select gear down, and pull the emergency gear extension control, which releases the hydraulic pressure so the gear free-falls and locks with spring assistance; yawing the airplane helps lock the gear if a green light is slow to appear. Retraction is limited to 109 KIAS and extension to 140 KIAS. I would verify the exact figures against my airplane's POH.",
    points: [
      "Hydraulic, electric reversible pump, pressure holds gear up, no uplocks",
      "Pressure switch, squat switch, three greens",
      "Horn: low MP on either engine, flaps beyond first notch, UP on ground",
      "Emergency: slow, select down, pull release, yaw to lock",
      "Vlo up 109 / Vle 140 KIAS"
    ]
  }
);
