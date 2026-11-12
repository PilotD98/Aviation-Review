window.BANK = window.BANK || [];
window.BANK.push(
  // ───────────────────────── MCQ ─────────────────────────
  {
    id: "aeromed-mcq-001", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 17; AIM 8-1-2", tags: ["flight-review", "atp"],
    q: "A pilot who has been smoking heavily and has an undetected exhaust leak in the cabin is most at risk of which type of hypoxia?",
    choices: [
      "Hypoxic hypoxia, because reduced partial pressure of oxygen in the lungs",
      "Hypemic hypoxia, because carbon monoxide binds to hemoglobin and prevents the blood from carrying oxygen",
      "Stagnant hypoxia, because blood flow to the brain is reduced",
      "Histotoxic hypoxia, because the cells cannot use the oxygen delivered to them"
    ],
    a: 1,
    exp: "Hypemic hypoxia is a blood problem: the oxygen is available in the lungs but the blood cannot carry it. Carbon monoxide binds to hemoglobin about 200 times more readily than oxygen, so smoking (which already raises carboxyhemoglobin) plus an exhaust leak is a serious combination; anemia and blood donation also cause it. Hypoxic hypoxia is the altitude problem (low partial pressure in the lungs), stagnant hypoxia is a circulation problem (G-loading, cold, shock), and histotoxic hypoxia is a cell-level problem from alcohol, narcotics, or cyanide."
  },
  {
    id: "aeromed-mcq-002", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 17; AIM 8-1-2", tags: ["flight-review"],
    q: "Why is hypoxia so dangerous to a pilot compared with most other physiological problems?",
    choices: [
      "It causes severe pain that distracts the pilot from flying",
      "Its first symptom is always loss of consciousness",
      "It only occurs above 25,000 ft, where few pilots have experience",
      "Its early effects include euphoria and impaired judgment, so the pilot is often unable to recognize that anything is wrong"
    ],
    a: 3,
    exp: "Hypoxia is insidious: the first things it degrades are judgment, memory, and self-assessment, often accompanied by a sense of well-being, so the pilot feels fine while performance is falling apart. Other symptoms include headache, dizziness, tingling in the fingers and toes, visual impairment (especially night vision, which begins degrading around 5,000 ft), cyanosis (blue lips and fingernails), and drowsiness. Because recognition is unreliable, the defenses are procedural: know your personal symptoms (ideally from altitude chamber or PROTE training), use a pulse oximeter, and follow the oxygen rules in 91.211 (crew oxygen above 12,500 ft MSL after 30 minutes, above 14,000 ft at all times, passengers provided oxygen above 15,000 ft)."
  },
  {
    id: "aeromed-mcq-003", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 17", tags: ["atp", "part135"],
    q: "What is the approximate time of useful consciousness (TUC) for an unpressurized pilot at 25,000 ft MSL who loses oxygen?",
    choices: [
      "3 to 5 minutes",
      "20 to 30 minutes",
      "30 to 60 seconds",
      "9 to 15 seconds"
    ],
    a: 0,
    exp: "TUC is the time a pilot can still perform useful tasks after loss of adequate oxygen, not time to unconsciousness. Representative values from the PHAK table: 20,000 ft about 30 minutes or more, 22,000 ft 5-10 minutes, 25,000 ft 3-5 minutes, 28,000 ft 2.5-3 minutes, 30,000 ft 1-2 minutes, 35,000 ft 30-60 seconds, 40,000 ft 15-20 seconds, 45,000 ft 9-15 seconds. A rapid decompression roughly halves these values, which is why pressurized-aircraft crews don the mask first and ask questions later."
  },
  {
    id: "aeromed-mcq-004", type: "mcq", topic: "aeromed", ref: "AIM 8-1-3; PHAK Ch. 17", tags: ["flight-review"],
    q: "A pilot at 9,500 ft on a stressful IFR flight feels lightheaded, tingling in the hands, and a sense of suffocation. Which statement about hyperventilation versus hypoxia is correct?",
    choices: [
      "The two conditions are easily distinguished because hypoxia never produces tingling",
      "Hyperventilation is treated with supplemental oxygen; hypoxia is treated by slowing the breathing rate",
      "The symptoms overlap substantially; hyperventilation is corrected by consciously slowing and reducing the depth of breathing (talking aloud or breathing into a bag helps), while hypoxia is corrected with oxygen or descent, and if in doubt at altitude, go on oxygen first",
      "Hyperventilation occurs only above 10,000 ft, so at 9,500 ft it must be hypoxia"
    ],
    a: 2,
    exp: "Hyperventilation blows off too much carbon dioxide, usually from anxiety, and produces lightheadedness, tingling, hot and cold flashes, muscle spasms, and even unconsciousness, which overlap with hypoxia. The fix is opposite: restore CO2 by slowing the rate and depth of breathing (counting breaths, talking aloud, breathing into a paper bag), versus adding oxygen or descending for hypoxia. Because hypoxia is the deadlier and less self-correcting of the two, the AIM advice is that if oxygen is available, use it and check the system, then consciously slow the breathing; if symptoms resolve quickly after breathing control, hyperventilation was the cause."
  },
  {
    id: "aeromed-mcq-005", type: "mcq", topic: "aeromed", ref: "AIM 8-1-4; PHAK Ch. 17", tags: ["flight-review", "c172", "pa44"],
    q: "Carbon monoxide poisoning in a piston airplane: what is the typical source, and what is the correct response when it is suspected?",
    choices: [
      "A leaking fuel line; turn off the fuel selector and land immediately",
      "A cracked exhaust system or muffler leaking into the cabin heat system; turn off the cabin heat, open fresh-air vents and windows, use 100 percent oxygen if available, and land as soon as practicable",
      "An electrical fire; turn off the master switch and land",
      "Poorly adjusted mixture; lean the engine and continue"
    ],
    a: 1,
    exp: "In most light aircraft, cabin heat is produced by routing air over a shroud around the muffler, so any crack in the exhaust system can feed colorless, odorless, tasteless carbon monoxide into the cabin; exhaust fumes you can smell are a warning that CO is probably present too. Symptoms include headache, drowsiness, dizziness, and the hypemic hypoxia pattern of impaired judgment. Shut off the heat, maximize fresh air, go on 100 percent oxygen if available, and land; CO stays bound to hemoglobin for hours, so do not fly again until recovered and the exhaust has been inspected. A CO detector in the cockpit is cheap insurance."
  },
  {
    id: "aeromed-mcq-006", type: "mcq", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review", "ipc"],
    q: "In IMC you recover from a slow, unnoticed roll to a wings-level attitude on the instruments but feel strongly that you are now banked the other way. Which illusion is this, and what is the correct action?",
    choices: [
      "The leans; trust the attitude indicator and hold wings level until the sensation fades",
      "Coriolis illusion; stop moving your head and return to the instruments",
      "Graveyard spiral; roll out, then raise the nose",
      "Inversion illusion; avoid abrupt pitch changes"
    ],
    a: 0,
    exp: "The leans is the most common vestibular illusion: a roll slow enough to stay below the semicircular canals' threshold goes unnoticed, so the sudden correction back to level is sensed as a roll in the opposite direction, and the pilot feels compelled to lean or re-bank. The only remedy for any vestibular illusion is to believe the instruments and let the sensation pass. Coriolis involves a head movement during a prolonged turn, the graveyard spiral is a sustained coordinated descending turn sensed as level flight, and inversion is an abrupt level-off from a climb sensed as tumbling backward."
  },
  {
    id: "aeromed-mcq-007", type: "mcq", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review", "ipc"],
    q: "During a prolonged constant-rate turn in IMC, you bend down to pick up a dropped pen and suddenly feel the aircraft tumbling on all three axes. What is this, and how is it prevented?",
    choices: [
      "The elevator illusion; avoid vertical accelerations",
      "Somatogravic illusion; avoid rapid accelerations",
      "Autokinesis; do not stare at a single light",
      "Coriolis illusion; avoid sudden head movements during turns, especially when transitioning in or out of a turn, and keep eyes on the instruments"
    ],
    a: 3,
    exp: "Once a turn has continued long enough for the fluid in the semicircular canals to stabilize, moving the head in a different plane sets the fluid in another canal in motion and creates an overwhelming sensation of rotation on a different axis. It is one of the most dangerous illusions because the pilot may make a large control input to counter a motion that does not exist. Prevention is simple: minimize head movement in turns, especially at night or in IMC, and when something drops, leave it."
  },
  {
    id: "aeromed-mcq-008", type: "mcq", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review", "ipc", "pa44"],
    q: "On a night takeoff over dark water in a PA-44, the rapid acceleration after rotation gives you the impression of being in an excessively nose-high attitude. What is this illusion, and why is it so deadly?",
    choices: [
      "The false horizon illusion; the pilot banks to align with sloping clouds",
      "The elevator illusion; an updraft makes the pilot push forward",
      "The somatogravic illusion; the otolith organs interpret forward acceleration as a pitch up, and a pilot who responds by pushing the nose down can fly into the surface within seconds",
      "The leans; the pilot inadvertently banks during the climb"
    ],
    a: 2,
    exp: "The otolith organs cannot distinguish between the pull of gravity and linear acceleration, so a strong acceleration in the dark, with no visual horizon, feels like a pitch up. Pilots have pushed over into the ground or water during night and IMC takeoffs and go-arounds (where adding full power produces the same effect). The defense is to transition to the attitude indicator immediately after rotation, fly a known pitch attitude and airspeed, and treat every dark-night departure as an instrument takeoff. Rapid deceleration produces the opposite sensation (nose low), tempting the pilot to pull up."
  },
  {
    id: "aeromed-mcq-009", type: "mcq", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review"],
    q: "You are landing at night on a runway that is much narrower than you are used to and slopes upward. Which visual illusion and error should you expect?",
    choices: [
      "You will feel too low and tend to fly a high approach, risking a long landing",
      "You will feel too high and tend to fly a lower-than-normal approach, risking landing short or striking obstacles",
      "You will tend to flare too late because the runway appears wider",
      "No illusion results because narrow and upslope effects cancel"
    ],
    a: 1,
    exp: "A narrower-than-usual runway and an upsloping runway (or upsloping terrain) both create the illusion that the aircraft is higher than it actually is, so the pilot descends below the proper glide path. A wider-than-usual runway or downslope creates the opposite illusion, leading to a high approach and a long landing or a hard touchdown. Featureless terrain (black hole), rain on the windscreen, and haze all make you feel higher than you are too; the antidote is to use the VASI/PAPI or an electronic glide path and fly known pitch and power settings rather than visual cues alone."
  },
  {
    id: "aeromed-mcq-010", type: "mcq", topic: "aeromed", ref: "AIM 8-1-6; PHAK Ch. 17", tags: ["flight-review"],
    q: "Which practices best preserve night vision and help you see traffic at night?",
    choices: [
      "Allow about 30 minutes for the rods to fully dark-adapt, avoid bright white light in the cockpit (use dim or red lighting), scan using off-center viewing, and use supplemental oxygen above about 5,000 ft",
      "Stare directly at a suspected light so the cones can resolve it, and keep cockpit lights bright to prevent illusions",
      "Avoid oxygen at night because it causes autokinesis",
      "Look through the center of your vision and move the eyes rapidly across the sky"
    ],
    a: 0,
    exp: "The rods, concentrated outside the fovea, provide night vision and take about 30 minutes to fully adapt, but a few seconds of bright white light can undo that. The fovea is a night blind spot, so look 5 to 10 degrees off-center and move the eyes slowly in small sectors. The rods are also the first cells affected by hypoxia, so the AIM recommends supplemental oxygen above 5,000 ft at night. Red light preserves adaptation but washes out red chart features, so dim white is a common compromise."
  },
  {
    id: "aeromed-mcq-011", type: "mcq", topic: "aeromed", ref: "AIM 8-1-2; PHAK Ch. 17", tags: ["flight-review"],
    q: "Why is flying with a head cold a problem, and what is the correct response to an ear block during descent?",
    choices: [
      "A cold reduces oxygen transport; descend at a slower rate",
      "A cold causes hyperventilation; breathe into a bag during descent",
      "There is no aeromedical issue as long as the pilot is not taking medication",
      "Congestion can prevent the eustachian tube from equalizing middle ear pressure, so on descent the eardrum is pushed inward; swallow, yawn, or perform a Valsalva maneuver, and if the block cannot be cleared, climb back up and descend more slowly"
    ],
    a: 3,
    exp: "On climb, expanding middle ear air vents easily through the eustachian tube; on descent, the tube must open against increasing pressure, and a swollen or congested tube may not, producing pain, hearing loss, and possibly a ruptured eardrum. Sinus blocks work the same way in the frontal and maxillary sinuses, causing severe pain. Chewing, swallowing, yawning, and the Valsalva maneuver (pinch the nose and blow gently) help; if that fails, slow or reverse the descent. Do not fly with a cold, and be wary that decongestants may mask the problem or cause drowsiness."
  },
  {
    id: "aeromed-mcq-012", type: "mcq", topic: "aeromed", ref: "AIM 8-1-2(d)", tags: ["flight-review"],
    q: "A pilot plans to make a recreational SCUBA dive that does not require a controlled (decompression-stop) ascent. How long should the pilot wait before flying at 7,000 ft MSL, and before flying at 9,000 ft MSL?",
    choices: [
      "4 hours for either altitude",
      "12 hours for either altitude",
      "At least 12 hours before a flight up to 8,000 ft MSL, and at least 24 hours before a flight above 8,000 ft MSL",
      "24 hours for either altitude"
    ],
    a: 2,
    exp: "Diving loads the tissues with nitrogen, and the reduced pressure at altitude (even in a pressurized cabin) can let it come out of solution as bubbles, causing decompression sickness. The AIM recommends waiting at least 12 hours after a dive not requiring a controlled ascent before flying up to 8,000 ft MSL, and at least 24 hours after a dive that required a controlled ascent, or before any flight above 8,000 ft MSL. The altitudes are actual flight altitudes, not pressurized cabin altitudes."
  },
  {
    id: "aeromed-mcq-013", type: "mcq", topic: "aeromed", ref: "14 CFR 91.17; AIM 8-1-1", tags: ["flight-review", "atp", "part135"],
    q: "Which statement correctly describes the alcohol rules and the FAA's guidance?",
    choices: [
      "8 hours bottle to throttle; a BAC up to 0.08 percent is legal because that is the driving limit",
      "No flying within 8 hours of consuming alcohol, while under the influence, or with a blood alcohol concentration of 0.04 percent or more; the AIM recommends 12 to 24 hours after drinking, and a hangover can impair even with zero BAC",
      "No flying within 12 hours of consuming alcohol or with a BAC of 0.02 percent or more",
      "No flying within 24 hours of consuming alcohol; there is no BAC standard for pilots"
    ],
    a: 1,
    exp: "91.17 prohibits acting as a crewmember within 8 hours after drinking, while under the influence, or with 0.04 percent or more alcohol by weight in the blood, and a pilot must submit to a test on request of law enforcement. The AIM goes further, recommending at least 12 to 24 hours between bottle and throttle depending on the amount consumed, because the AIM notes the body needs about 3 hours to rid itself of the alcohol in a single drink (one ounce of liquor, one beer, or one glass of wine) and hangover effects such as headache, dehydration, and reduced cognitive performance persist long after the alcohol is gone. Part 121/135 operators typically impose stricter company limits, and alcohol also makes hypoxia and disorientation worse."
  },
  {
    id: "aeromed-mcq-014", type: "mcq", topic: "aeromed", ref: "14 CFR 61.53; 91.17(a)(3); AIM 8-1-1; FAA Pilot Safety Brochure, Medications and Flying", tags: ["flight-review"],
    q: "A pilot took a first-generation antihistamine such as diphenhydramine (Benadryl) for allergies the previous evening. What is the FAA's guidance?",
    choices: [
      "Do not fly until at least five times the maximum dosing interval on the label has passed (for a 4-6 hour drug, that is 30 hours), because sedating antihistamines impair performance even when the pilot feels alert; when in doubt, consult an AME",
      "Fly after 8 hours, the same rule as alcohol",
      "Over-the-counter medications never require any waiting period",
      "Fly as long as the symptoms being treated have resolved"
    ],
    a: 0,
    exp: "61.53 and 91.17(a)(3) prohibit flying while using any drug that affects faculties in a way contrary to safety, and 61.53 covers the underlying illness as well. The FAA's practical rule is to wait at least five times the maximum dosing interval after the last dose of a sedating medication, which for Benadryl's every-4-to-6-hour label means 30 hours. Many allergy, cold, sleep, and motion-sickness products contain sedating antihistamines, and the FAA considers them a factor in a significant share of fatal accidents with toxicology findings. Non-sedating alternatives (loratadine, fexofenadine) are generally acceptable, but the AME or the FAA's OTC medication list is the authority."
  },
  {
    id: "aeromed-mcq-015", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2; AC 60-22", tags: ["flight-review", "cfi"],
    q: "A pilot thinks, \"I've flown in worse than this; a little ice never hurt anybody.\" Which hazardous attitude is this, and what is its antidote?",
    choices: [
      "Anti-authority; \"Follow the rules. They are usually right.\"",
      "Impulsivity; \"Not so fast. Think first.\"",
      "Macho; \"Taking chances is foolish.\"",
      "Invulnerability; \"It could happen to me.\""
    ],
    a: 3,
    exp: "Invulnerability is the belief that accidents happen to other people, and the antidote is the deliberate reminder that it could happen to me. The five hazardous attitudes and antidotes are: anti-authority (\"don't tell me\") versus \"Follow the rules, they are usually right\"; impulsivity (\"do something quickly\") versus \"Not so fast, think first\"; invulnerability (\"it won't happen to me\") versus \"It could happen to me\"; macho (\"I can do it\") versus \"Taking chances is foolish\"; and resignation (\"what's the use\") versus \"I'm not helpless, I can make a difference.\" Macho would sound more like \"watch me do this\"; the quoted thought is about denying the risk rather than showing off."
  },
  {
    id: "aeromed-mcq-016", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "cfi"],
    q: "What do the letters in the DECIDE model stand for?",
    choices: [
      "Determine, Evaluate, Consider, Implement, Debrief, Execute",
      "Detect, Examine, Compare, Isolate, Decide, Exit",
      "Detect, Estimate, Choose, Identify, Do, Evaluate",
      "Diagnose, Establish, Calculate, Initiate, Direct, End"
    ],
    a: 2,
    exp: "DECIDE: Detect that a change has occurred, Estimate the need to counter or react to it, Choose a desirable outcome, Identify actions that can achieve it, Do the necessary action, and Evaluate the effect. It is a structured six-step loop for the decision-making phase. The 3-P model (Perceive, Process, Perform) is a simpler continuous loop for the whole flight, and the 5-P check (Plan, Plane, Pilot, Passengers, Programming) is a set of items to review at key decision points such as preflight, before takeoff, mid-cruise, and before descent."
  },
  {
    id: "aeromed-mcq-017", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "cfi"],
    q: "Using the FAA risk assessment matrix, how is the level of risk for a given hazard determined?",
    choices: [
      "By the number of hazards present on the flight",
      "By combining the likelihood of the event (probable, occasional, remote, improbable) with the severity of its consequences (catastrophic, critical, marginal, negligible)",
      "By the pilot's total flight time divided by time in type",
      "By the PAVE checklist score"
    ],
    a: 1,
    exp: "The matrix plots likelihood against severity; a hazard that is both probable and catastrophic is unacceptable, while remote and negligible is acceptable without action, and the middle cells require mitigation to bring the risk down. The purpose is to make the pilot think about each hazard in two dimensions rather than relying on gut feeling. Practical risk management is then: identify hazards (PAVE helps), assess them with the matrix, mitigate the significant ones, and re-check that the mitigation worked."
  },
  {
    id: "aeromed-mcq-018", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "atp"],
    q: "Which best describes plan continuation bias (\"get-there-itis\") and the most effective defense?",
    choices: [
      "The unconscious tendency to continue with the original plan despite changing conditions that argue for a change; the defense is pre-set personal minimums and decision points established before the flight, when judgment is not under pressure",
      "A tendency to divert too early; the defense is to trust the original plan",
      "An ATC-induced pressure to accept clearances; the defense is to say \"unable\"",
      "The habit of flying the same route repeatedly; the defense is to vary routes"
    ],
    a: 0,
    exp: "Plan continuation bias is one of the operational pitfalls in the PHAK and it grows stronger the closer you get to the destination, because the sunk investment and external pressure (passengers, schedule, the airplane needing to be home) make a diversion feel like a failure. Deciding thresholds in advance (for example, \"if the ceiling at the destination is below 1,500 ft when I reach the halfway point, I divert to X\") converts a hard judgment call under stress into a simple comparison. Briefing passengers before departure that the flight may divert or cancel removes much of the external pressure."
  },
  {
    id: "aeromed-mcq-019", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2; AC 120-51E", tags: ["atp", "part135", "cfi"],
    q: "In Threat and Error Management (TEM), how are threats and errors distinguished, and what is an undesired aircraft state?",
    choices: [
      "Threats and errors are the same thing viewed at different phases of flight",
      "Threats are mistakes made by the crew; errors are weather and ATC problems",
      "An undesired aircraft state is any mechanical failure",
      "Threats are events or conditions outside the crew's control that increase complexity (weather, terrain, ATC, MELs, fatigue); errors are crew actions or inactions that deviate from intentions or expectations; an undesired aircraft state is a resulting condition such as unstable approach, wrong altitude, or incorrect configuration that reduces safety margins"
    ],
    a: 3,
    exp: "TEM, developed from the Line Operations Safety Audit (LOSA) program, frames safety as managing threats before they produce errors, catching and correcting errors before they produce undesired aircraft states, and recovering from undesired aircraft states before they become incidents. Threats are anticipated (briefed) or unexpected; errors are classified as handling, procedural, or communication; and countermeasures include briefings, checklists, callouts, monitoring, and automation use. Airline interviewers like to hear a candidate describe a specific threat, the error it provoked, and how the crew trapped it."
  },
  {
    id: "aeromed-mcq-020", type: "mcq", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["ipc", "atp"],
    q: "Which practice best guards against automation complacency and loss of situational awareness in a glass-cockpit aircraft?",
    choices: [
      "Hand-fly all IFR flights so the autopilot cannot surprise you",
      "Program the full route before engine start and avoid touching the avionics afterward",
      "Know the automation's modes thoroughly, verbalize and verify every mode change and flight plan edit, cross-check raw data and the basic instruments against what the automation is doing, and be ready to reduce the level of automation when it is not doing what you expect",
      "Rely on the moving map for terrain awareness and the traffic display for separation"
    ],
    a: 2,
    exp: "Automation management is one of the single-pilot resource management skills, and the PHAK warns that pilots become passive monitors who fail to notice when the system is not doing what was intended. The defense is active monitoring: understand the autopilot and FMS modes (including what will happen next), announce and confirm every change, keep a mental model of position, altitude, and energy independent of the displays, and step down to a lower automation level (heading/altitude modes, or hand-flying) when confused. Situational awareness means accurately perceiving all the factors affecting the flight; task saturation, fixation, and distraction erode it, and the solution is to prioritize (aviate, navigate, communicate), shed low-value tasks, and use the autopilot to free capacity when appropriate."
  },

  // ───────────────────────── CARD ─────────────────────────
  {
    id: "aeromed-card-001", type: "card", topic: "aeromed", ref: "PHAK Ch. 2; AC 60-22", tags: ["flight-review", "cfi"],
    front: "The five hazardous attitudes and their antidotes.",
    back: "Anti-authority (\"Don't tell me.\") -> \"Follow the rules. They are usually right.\"\nImpulsivity (\"Do it quickly.\") -> \"Not so fast. Think first.\"\nInvulnerability (\"It won't happen to me.\") -> \"It could happen to me.\"\nMacho (\"I can do it.\") -> \"Taking chances is foolish.\"\nResignation (\"What's the use?\") -> \"I'm not helpless. I can make a difference.\"\nRecognize the thought, label the attitude, state the antidote."
  },
  {
    id: "aeromed-card-002", type: "card", topic: "aeromed", ref: "AIM 8-1-1; PHAK Ch. 2", tags: ["flight-review"],
    front: "IMSAFE and PAVE: what does each letter stand for and what is each checklist for?",
    back: "IMSAFE (pilot self-assessment): Illness, Medication, Stress, Alcohol, Fatigue, Emotion (some versions add Eating). Any item that is not clearly acceptable is a reason not to fly.\nPAVE (identify hazards for the whole flight): Pilot (IMSAFE, currency, proficiency), Aircraft (airworthiness, equipment, performance, fuel), enVironment (weather, terrain, airspace, airport, night), External pressures (schedule, passengers, get-home-itis, cost).\nUse PAVE at preflight to find hazards, then assess each with likelihood x severity and mitigate; compare the result to your personal minimums."
  },
  {
    id: "aeromed-card-003", type: "card", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "cfi"],
    front: "The ADM models: DECIDE, 3-P, and 5-P.",
    back: "DECIDE (structured response to a change): Detect, Estimate, Choose, Identify, Do, Evaluate.\n3-P (continuous loop): Perceive hazards (use PAVE), Process to assess the risk (use CARE: Consequences, Alternatives, Reality, External pressures), Perform risk management (use TEAM: Transfer, Eliminate, Accept, Mitigate).\n5-P (review at decision points: preflight, pre-takeoff, cruise, pre-descent, before approach): Plan, Plane, Pilot, Passengers, Programming."
  },
  {
    id: "aeromed-card-004", type: "card", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review", "ipc"],
    front: "Vestibular (inner ear) illusions: name, cause, and the sensation produced.",
    back: "Leans: slow unnoticed roll, then sudden correction; feel banked the opposite way\nCoriolis: head movement during a prolonged turn; sensation of rotation on another axis, tumbling\nGraveyard spiral: prolonged coordinated descending turn feels level; pulling up tightens the spiral\nSomatogravic: rapid acceleration feels nose-up (push over into ground); deceleration feels nose-down\nInversion: abrupt level-off from a climb feels like tumbling backward (pilot pushes nose down)\nElevator: updraft feels like a climb (pilot pushes); downdraft feels like a descent (pilot pulls)\nAll are countered the same way: establish and maintain reference to the flight instruments and do not fight the sensation."
  },
  {
    id: "aeromed-card-005", type: "card", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["flight-review", "ipc"],
    front: "Visual illusions on approach and at night: what each does and which way the error goes.",
    back: "Narrow runway / upsloping runway or terrain: feel too high -> fly low, land short\nWide runway / downsloping runway or terrain: feel too low -> fly high, land long or flare high\nFeatureless terrain (black hole over water, snow, desert): feel too high -> fly low\nRain on windscreen: feel too high (and runway appears farther away)\nHaze / fog: runway appears farther away -> fly low; (haze can also make the pilot feel high)\nBright runway/approach lights: appear closer -> fly high; dim lights -> fly low\nFalse horizon: sloping cloud deck, ground lights, or stars mistaken for the horizon -> bank errors\nAutokinesis: a single stationary light appears to move after 6-12 seconds of staring\nDefense: fly a VGSI or electronic glide path, known pitch/power, and cross-check altitude vs distance."
  },
  {
    id: "aeromed-card-006", type: "card", topic: "aeromed", ref: "PHAK Ch. 17; 14 CFR 91.211", tags: ["atp", "part135"],
    front: "Time of useful consciousness by altitude, and the Part 91 supplemental oxygen rules.",
    back: "TUC (unpressurized, moderate activity): 20,000 ft 30 min or more; 22,000 ft 5-10 min; 25,000 ft 3-5 min; 28,000 ft 2.5-3 min; 30,000 ft 1-2 min; 35,000 ft 30-60 s; 40,000 ft 15-20 s; 45,000 ft 9-15 s. Rapid decompression roughly halves these.\n91.211: above 12,500 ft MSL up to and including 14,000 ft, required minimum flight crew must use oxygen after 30 minutes; above 14,000 ft, crew must use it continuously; above 15,000 ft, every occupant must be provided oxygen.\nPressurized aircraft: above FL 250 a 10-minute supply for each occupant; above FL 350 one pilot wears and uses a mask unless two pilots are at the controls and each has a quick-donning mask (then only above FL 410 does one pilot wear it).\nAIM recommends oxygen above 10,000 ft by day and above 5,000 ft at night."
  },
  {
    id: "aeromed-card-007", type: "card", topic: "aeromed", ref: "PHAK Ch. 17", tags: ["flight-review", "atp"],
    front: "Fatigue, stress, and dehydration: key distinctions and what to do about them.",
    back: "Acute fatigue: short-term, from a long day, poor sleep, or heavy workload; cured by rest. Chronic fatigue: accumulated over weeks of inadequate rest, often with an underlying cause (stress, illness); not cured by one night's sleep and impairs judgment similarly to alcohol. Skill fatigue: deterioration of coordination and timing with task duration.\nStress: physical (environment: noise, heat, vibration, hypoxia), physiological (fatigue, poor diet, illness), psychological (emotional, social, financial). Acute stress can sharpen performance briefly; chronic stress degrades it. Life stressors (divorce, job loss, death in family) are reasons to self-ground.\nDehydration / heatstroke: degrade mental performance before thirst is felt; drink water before and during flight, avoid caffeine and alcohol, keep the cabin ventilated, and recognize headache, fatigue, dizziness, and cramps as warning signs."
  },
  {
    id: "aeromed-card-008", type: "card", topic: "aeromed", ref: "PHAK Ch. 2; AC 120-51E", tags: ["atp", "cfi"],
    front: "CRM vs SRM: define each and list the core SRM skills.",
    back: "CRM (Crew Resource Management): the effective use of all available resources (crew, ATC, dispatch, maintenance, automation, documentation) by a multi-person flight crew; emphasizes communication, leadership/followership, workload distribution, assertiveness, and shared decision-making (AC 120-51E).\nSRM (Single-Pilot Resource Management): the same concept applied to the single pilot, who must do all roles alone. Core skills: Aeronautical Decision-Making, Risk Management, Task Management, Automation Management, Situational Awareness, and CFIT Awareness.\nBoth aim to recognize threats, trap errors, and avoid undesired aircraft states (TEM)."
  },

  // ───────────────────────── SCENARIO ─────────────────────────
  {
    id: "aeromed-scn-001", type: "scenario", topic: "aeromed", ref: "AIM 8-1-4; PHAK Ch. 17", tags: ["flight-review", "pa44"],
    q: "You are 40 minutes into a night cross-country in a PA-44 at 6,500 ft, cabin heat on against a cold night. You develop a dull headache, feel sweaty and slightly nauseated, and notice you had to read the last ATC frequency twice. Your passenger says she is sleepy. The nearest suitable airport is 15 minutes ahead; home is 50 minutes further. What is the best course of action?",
    choices: [
      "Suspect carbon monoxide: turn off the cabin heat, open fresh-air vents and storm window, go on supplemental oxygen if aboard, tell ATC, and land at the nearest suitable airport",
      "Suspect hypoxia from altitude: descend to 4,500 ft and continue home, since symptoms should resolve at lower altitude",
      "Suspect hyperventilation from the cold and stress: slow your breathing and continue to home base",
      "Open the vents to clear the air and continue home while monitoring the symptoms, since the headache is mild"
    ],
    a: 0,
    exp: "Headache, sweating, nausea, drowsiness, and impaired mental performance affecting more than one occupant with the cabin heat on is a textbook carbon monoxide picture, and at 6,500 ft altitude hypoxia alone is an unlikely explanation. CO's effects persist for hours after exposure ends because it stays bound to hemoglobin, so improvement after opening vents does not make continuing safe; the 50 additional minutes are a gamble with a brain already impaired. Land at the first suitable airport, get fresh air and oxygen, seek medical evaluation if symptoms persist, and have the exhaust system inspected before the airplane flies again."
  },
  {
    id: "aeromed-scn-002", type: "scenario", topic: "aeromed", ref: "AIM 8-1-1; PHAK Ch. 2; 14 CFR 61.53", tags: ["flight-review", "c172"],
    q: "You are scheduled to fly a 172S on a 2-hour day VFR cross-country with a friend. You slept 5 hours after a stressful week at work, took a non-drowsy loratadine tablet this morning for allergies, had two beers 14 hours ago, and feel fine. The weather is good VFR. Your friend has rearranged his schedule for this trip. What is the best decision?",
    choices: [
      "Go; the only concern is the medication, and loratadine is a non-sedating antihistamine",
      "Cancel; two beers within 24 hours violates the FAA's guidance",
      "Go, but hand-fly to stay engaged and plan a rest stop halfway",
      "Treat the combination of short sleep, a week of stress, and external pressure from your friend as the real risk; run IMSAFE honestly, and if you cannot say you are rested and stress-free, delay the departure or cancel regardless of the good weather"
    ],
    a: 3,
    exp: "Taken individually, each item might pass: loratadine is generally acceptable, 14 hours and no residual effects satisfies 91.17 and the AIM's 12-24 hour guidance, and the weather is fine. The hazard is cumulative: acute fatigue from 5 hours of sleep layered on a week of chronic stress, plus an external pressure (the friend's rearranged schedule) that biases the decision toward going. IMSAFE is about honest self-assessment, not finding a reason each item is legal; a pilot who is tired and stressed makes poorer decisions and is slower to recognize errors, and \"feeling fine\" is exactly what fatigue and hypoxia report. Delaying until rested, or flying a shorter local flight, removes most of the risk."
  },
  {
    id: "aeromed-scn-003", type: "scenario", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["ipc", "c172"],
    q: "Departing a rural airport on a dark, moonless night in a 172S with no visible horizon, you rotate, retract flaps, and feel the airplane pitching up steeply. The attitude indicator shows 8 degrees nose up and the airspeed is 75 knots and steady. Your instinct is to push forward. What should you do?",
    choices: [
      "Push forward to the attitude that feels level; the instruments may be lagging during acceleration",
      "Recognize the somatogravic illusion, hold the 8-degree pitch attitude on the attitude indicator, confirm with airspeed and a positive rate on the VSI and altimeter, and continue the climb on instruments",
      "Level off immediately to let your senses settle before continuing the climb",
      "Turn on the landing light and look for the horizon to resolve the conflict"
    ],
    a: 1,
    exp: "The acceleration from liftoff and flap retraction stimulates the otoliths exactly as a pitch up would, and with no external reference the brain accepts the false cue. The instruments are consistent (climb attitude, climb airspeed, positive rate) and must be believed; pushing forward would convert a normal climb into a shallow descent into dark terrain. Leveling off low over unseen terrain at night is itself hazardous, and the landing light illuminates nothing useful in the dark and can increase disorientation. Treat every dark-night takeoff as an instrument departure: eyes on the attitude indicator at rotation, fly a known pitch and airspeed, and keep the head still."
  },
  {
    id: "aeromed-scn-004", type: "scenario", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "atp", "pa44"],
    q: "You are flying a PA-44 with two paying passengers for a Part 91 company trip, 30 minutes from the destination. The destination ATIS now reports 800 overcast and 2 miles in mist; the only approach is an RNAV with LNAV minimums of 600 ft AGL and 1 mile. Your personal minimums for a non-precision approach are 800 ft and 2 miles. Fuel is adequate for the alternate (clear and 10) 25 minutes away. A passenger says a critical meeting starts in an hour. What is the best decision?",
    choices: [
      "Continue to the destination; the weather is above the legal minimums and the passengers' schedule is important",
      "Continue to the destination but brief that you will go missed if you do not see the runway at minimums",
      "Recognize that the weather is at your personal minimums and trending down, and that the passenger's statement is an external pressure; divert to the alternate now while fuel and weather allow, and arrange ground transportation",
      "Request a contact approach, which has lower visibility minimums, to improve the odds of getting in"
    ],
    a: 2,
    exp: "Personal minimums exist precisely for this moment, when the legal numbers permit the approach but experience, currency, and conditions argue against it, and they are only useful if honored when it is inconvenient. The weather is already at your floor and reported mist in the evening typically worsens, so planning on a missed approach and then diverting with less fuel and more pressure is a worse version of the same decision. The passenger's remark is the external-pressure element of PAVE and should be acknowledged, not obeyed. A contact approach still requires 1 mile and clear of clouds and does nothing about a ceiling at your limit."
  },

  // ───────────────────────── ORAL ─────────────────────────
  {
    id: "aeromed-oral-001", type: "oral", topic: "aeromed", ref: "PHAK Ch. 17; AIM 8-1-2; 14 CFR 91.211", tags: ["flight-review", "pa44", "cfi"],
    q: "You are cruising at 11,500 ft in a Seminole on a long leg. Explain what hypoxia is doing to you at that altitude, how you would recognize it, and what you would do about it.",
    answer: "At 11,500 ft the partial pressure of oxygen is low enough that arterial saturation is falling into the high 80s for many people, which is hypoxic hypoxia, and the effects start with impaired night vision, reduced judgment, slowed reaction, and a subtle euphoria that makes me the worst judge of my own condition. Symptoms I would watch for are headache, dizziness, tingling in fingers and toes, cyanosis of the lips and nail beds, drowsiness, difficulty with simple math or frequency readbacks, and tunnel vision. The reliable defenses are a pulse oximeter, knowing my own symptoms from altitude chamber or PROTE training, and planning oxygen use conservatively: legally I need it as required crew above 12,500 ft after 30 minutes and above 14,000 ft continuously, with passengers supplied above 15,000 ft, but the AIM recommends it above 10,000 ft by day and 5,000 ft at night. If I suspect hypoxia I go on oxygen immediately if it is aboard, and if not I descend, because judgment is the first thing to go and waiting to be sure is not an option. I would also consider that smoking, a cold, fatigue, alcohol, or CO would all lower the altitude at which these effects appear.",
    points: [
      "Hypoxic hypoxia: low partial pressure; judgment and night vision degrade first",
      "Symptoms: euphoria, headache, tingling, cyanosis, drowsiness, impaired performance",
      "Recognition unreliable; use pulse oximeter and know your own symptoms",
      "91.211: 12,500 ft/30 min, 14,000 ft continuous, 15,000 ft passengers; AIM recommends 10,000 day / 5,000 night",
      "Action: oxygen immediately or descend; do not wait for certainty"
    ]
  },
  {
    id: "aeromed-oral-002", type: "oral", topic: "aeromed", ref: "AIM 8-1-5; PHAK Ch. 17", tags: ["ipc", "cfi"],
    q: "Explain spatial disorientation: why it happens, which illusions are most dangerous, and how you prevent and recover from it.",
    answer: "Spatial disorientation is the inability to correctly determine the aircraft's attitude and motion relative to the earth, and it happens because the body's orientation system was built for the ground: the semicircular canals only sense changes in angular acceleration, so a sustained or very slow roll or turn becomes undetectable, and the otolith organs cannot tell gravity from linear acceleration. With a visual horizon the eyes override those errors; in IMC or on a dark night they cannot. The illusions I worry about most are the leans, the Coriolis illusion from a head movement during a turn, the graveyard spiral where a prolonged descending turn feels like level flight and pulling back tightens it, and the somatogravic illusion where takeoff or go-around acceleration feels like a pitch up and pilots push into the ground. Prevention is proficiency on instruments, a good instrument scan established before entering IMC or darkness, avoiding sudden head movements, avoiding flight when sick, fatigued, or after alcohol, and never attempting to mix visual and instrument references in marginal conditions. Recovery is to recognize the conflict, believe the instruments, make smooth control inputs to bring the attitude indicator to a known attitude, use the autopilot if available, and let the sensation fade without fighting it.",
    points: [
      "Canals sense only angular changes; otoliths confuse acceleration with gravity",
      "Dangerous illusions: leans, Coriolis, graveyard spiral, somatogravic",
      "Prevention: instrument proficiency, scan before entering IMC/dark, no head movements, healthy pilot",
      "Recovery: trust instruments, smooth inputs, use autopilot, wait it out",
      "Never mix visual and instrument references in marginal conditions"
    ]
  },
  {
    id: "aeromed-oral-003", type: "oral", topic: "aeromed", ref: "AIM 8-1-1; PHAK Ch. 2; 14 CFR 61.53", tags: ["flight-review", "cfi"],
    q: "Walk me through IMSAFE as you would actually apply it before a flight, and tell me what self-grounding means under the regulations.",
    answer: "I go through it honestly, item by item, before every flight rather than as a formality. Illness: any symptoms at all, even a cold, since an ear or sinus block on descent can be incapacitating. Medication: anything I have taken, prescription or over the counter, checked against the FAA's guidance, with sedating antihistamines and sleep aids requiring at least five dosing intervals to clear, and the condition itself also considered. Stress: whether anything at work or home is occupying my mind, because stress consumes the mental capacity I need to handle surprises. Alcohol: 8 hours and 0.04 percent are the legal floor, but the AIM's 12 to 24 hours and no hangover effects are my standard. Fatigue: how much sleep I actually got and how long I have been awake, remembering that fatigue impairs like alcohol and makes me a poor judge of myself. Emotion: whether I am upset, angry, or distracted. Under 61.53, if I know or have reason to know of any medical condition that would make me unable to meet the requirements of my medical certificate, I may not act as PIC, and 91.17 covers alcohol and drugs; self-grounding is simply applying that rule to myself before anyone else has to.",
    points: [
      "Illness: colds, ear/sinus block risk",
      "Medication: FAA guidance, 5x dosing interval for sedating drugs, consider the condition too",
      "Stress and Emotion: capacity consumed, distraction",
      "Alcohol: 8 hr / 0.04% legal; AIM 12-24 hr; hangover counts",
      "Fatigue: acute vs chronic, self-assessment unreliable",
      "61.53 self-grounding obligation"
    ]
  },
  {
    id: "aeromed-oral-004", type: "oral", topic: "aeromed", ref: "PHAK Ch. 2; AC 60-22", tags: ["flight-review", "cfi"],
    q: "Give me an example of each hazardous attitude as it might show up in a real pilot, and the antidote you would apply.",
    answer: "Anti-authority is the pilot who skips the full run-up because the checklist is for students; the antidote is to remember the rules are usually right. Impulsivity is the pilot who, with a rough engine right after takeoff, immediately turns back toward the runway without evaluating altitude or options; the antidote is not so fast, think first. Invulnerability is the pilot who flies VFR into deteriorating weather because weather accidents happen to less experienced people; the antidote is it could happen to me. Macho is the pilot who accepts a 20-knot gusting crosswind in a 172 to prove a point to a passenger; the antidote is taking chances is foolish. Resignation is the pilot who, after an electrical failure at night, stops troubleshooting and just hopes it works out; the antidote is I am not helpless, I can make a difference. The value of the list is in recognizing the thought as it forms and saying the antidote, which interrupts the pattern before it becomes an action.",
    points: [
      "Anti-authority: skipping procedures; follow the rules",
      "Impulsivity: acting before thinking; not so fast",
      "Invulnerability: it won't happen to me; it could happen to me",
      "Macho: proving something; taking chances is foolish",
      "Resignation: giving up; I can make a difference",
      "Recognize, label, apply antidote"
    ]
  },
  {
    id: "aeromed-oral-005", type: "oral", topic: "aeromed", ref: "PHAK Ch. 2; AC 120-51E", tags: ["atp", "part135", "cfi"],
    q: "An airline interviewer asks: explain Threat and Error Management and give an example from your own flying.",
    answer: "TEM is the framework for thinking about safety as a layered defense. Threats are things outside my control that increase the chance of an error: weather, terrain, unfamiliar airports, ATC changes, deferred maintenance items, and my own fatigue. Errors are my own actions or inactions that deviate from what was intended, whether handling, procedural, or communication errors. If a threat or error is not managed it can lead to an undesired aircraft state, such as being high and fast on an approach or at the wrong altitude, and the goal is to recover from that before it becomes an incident. The countermeasures are planning ones like briefings and anticipating threats, execution ones like monitoring, cross-checking, and callouts, and review ones like evaluating and modifying the plan. An example from my own flying: on a night arrival with a late runway change (the threat), I loaded the new approach in the GPS but did not re-verify the final approach course, and the autopilot started to track the old course (the error, leading toward an undesired aircraft state); I caught it on the cross-check of the HSI against the chart, corrected it, and afterward added a verbal check of the final approach course to my approach brief as a standing countermeasure.",
    points: [
      "Threats: external, increase complexity; errors: crew deviations; UAS: reduced safety margin",
      "Manage threats, trap errors, recover from undesired states",
      "Countermeasures: briefings/anticipation, monitoring/cross-check/callouts, review and modify",
      "Concrete personal example with threat, error, trap, and lesson",
      "Ties to CRM/SRM and checklist discipline"
    ]
  },
  {
    id: "aeromed-oral-006", type: "oral", topic: "aeromed", ref: "PHAK Ch. 2", tags: ["flight-review", "atp"],
    q: "What are personal minimums, how do you set them, and how do they relate to get-there-itis and task saturation?",
    answer: "Personal minimums are limits I set for myself, more conservative than the regulations, covering things like ceiling and visibility for VFR and for approaches, crosswind and gust components, night and IMC currency, fuel reserves, and duty day length, with separate numbers for aircraft and conditions I am less current in. I set them on the ground, after an honest look at recent experience, by starting at the legal or ACS numbers and adding a margin, and I adjust them as currency improves or lapses; after any layoff from flying they should be substantially tighter than before. Their purpose is to pre-make the decision before the flight so that when I am tired, invested in getting home, and a passenger is looking at me, the choice is a simple comparison of a number against a limit rather than a judgment call made under pressure, which is exactly how plan continuation bias and get-there-itis get pilots. They also guard against task saturation, because a pilot operating inside comfortable margins has spare capacity to handle a surprise, while one operating at the edge of ability has none. If I find myself wanting to make an exception, that is the signal that the minimum is doing its job.",
    points: [
      "Conservative self-imposed limits: weather, wind, currency, fuel, duty, by aircraft/condition",
      "Set on the ground, from legal/ACS baseline plus margin; revised with currency",
      "Pre-made decision defeats plan continuation bias and external pressure",
      "Margins preserve spare capacity against task saturation",
      "The urge to make an exception is the warning sign"
    ]
  }
);
