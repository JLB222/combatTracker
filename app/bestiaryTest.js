import { Big_Shoulders_Inline_Display } from "next/font/google"

const bestiaryTest = [ 
    {
        name: "name of creature",
        id: 0,
        source: "location",
        level: 0,
        tags: ["Medium"],
        recallKnowledgeCategory: "Religion",
        recallKnowledgeDC: [0,0,0],  
        perception: 0,
        visionLowLight: false,
        visionDark: false,
        visionDarkGreater: false,
        languages: ["Common"],
        skillBonusAcrobatics: 0,
        skillBonusArcana: 0,
        skillBonusAthletics: 0,
        skillBonusCrafting: 0,
        skillBonusDeception: 0,
        skillBonusDiplomacy: 0,
        skillBonusIntimidation: 0,
        skillBonusMedicine: 0,
        skillBonusNature: 0,
        skillBonusOccultism: 0,
        skillBonusPerformance: 0,
        skillBonusReligion: 0,
        skillBonusSociety: 0,
        skillBonusStealth: 0,
        skillBonusSurvival: 0,
        skillBonusThievery: 0,
        skillBonusLore: [],
        abilityModStrength: 0,
        abilityModDexterity: 0,
        abilityModConstitution: 0,
        abilityModIntelligence: 0,
        abilityModWisdom: 0,
        abilityModCharisma: 0,
        defenseHP: 10,
        defenseAC: 0, 
        defenseFortSave: 0, 
        defenseRflxSave: 0, 
        defenseWillSave: 0, 
        defenseImmunities: ["None"],
        defenseResistances: ["None"],
        defenseWeaknesses: ["None"], 
        speeds: {stride: 25, climb: 0, swim: 0, fly: 0, burrow: 0},
        canReactiveStrike: false,
        strikes: [
            {
                type: "whether its melee or ranged",
                weapon: "Fist, Claw, Tail, etc",
                weaponTraits: [""],
                numberOfActions: 1,
                attackBonuses: [10,5,0],  //usually formatted as +x[+y/+z]
                diceNumber: 0,
                diceSize: 0,
                damageBonus: 0,
                damageType: "Bludgeoning",
                rider: [
                    {
                        type: "extraDamage",
                        riderDiceNumber: 0,
                        riderDiceSize: 0,
                        riderDamageBonus: 0,
                        riderDamageType: "rider damage's type"
                    },
                    {
                        type: "effect",
                        riderName: "name of rider effect",
                    }
                ]
            }
        ],
        spellSaveDC: 0,  //setting this to 0 for creatures with no spells ensures that the spell column is not rendered 
        rituals: [
            {
                name: "",
                ritualRank: 1
            }
        ],
        spells: [
            {
                name: "",
                spellRank: 0,
                tradition: "Arcane, Divine, Occult, or Primal",
                innate: true,
                numberOfUses: 1,
            }
        ],
        spellsAtWill: [
            {
                name: "",
                spellRank: 0,
                tradition: "Arcane, Divine, Occult, or Primal",
                innate: true,
            },
        ],
        spellsConstant: [
            {
                name: "",
                spellRank: 0,
                tradition: "Arcane, Divine, Occult, or Primal",
                innate: true,
            }
        ],
        specialAbilities: [
            
        ],
        items: ["Crossbow"],
        notes: [

        ]
    },
    {   
        name: "Succubus",
        id: 98,
        source: "Bestiary pg.77",
        level: 7,
        tags: ["Chaotic Evil", "Medium", "Fiend", "Demon"], 
        recallKnowledgeCategory: "Religion",
        recallKnowledgeDC: [23,21,18],  
        perception: 15,
        visionLowLight: false,
        visionDark: true,
        visionDarkGreater: false,
        languages: ["Abyssal", "Celestial", "Common", "Draconic", "Telepathy: 100 ft", "Tongues"],
        skillBonusAcrobatics: 14,
        skillBonusArcana: 0,
        skillBonusAthletics: 0,
        skillBonusCrafting: 0,
        skillBonusDeception: 18,
        skillBonusDiplomacy: 20,
        skillBonusIntimidation: 16,
        skillBonusMedicine: 0,
        skillBonusNature: 0,
        skillBonusOccultism: 0,
        skillBonusPerformance: 0,
        skillBonusReligion: 13,
        skillBonusSociety: 15,
        skillBonusStealth: 14,
        skillBonusSurvival: 0,
        skillBonusThievery: 0,
        skillBonusLore: [],
        abilityModStrength: 2,
        abilityModDexterity: 4,
        abilityModConstitution: 3,
        abilityModIntelligence: 4,
        abilityModWisdom: 2,
        abilityModCharisma: 7,
        defenseHP: 100,
        defenseAC: 23, 
        defenseFortSave: 15, 
        defenseRflxSave: 14, 
        defenseWillSave: 17, 
        defenseImmunities: ["None"],
        defenseResistances: ["None"],
        defenseWeaknesses: ["Cold Iron 5", "Good 5"], 
        speeds: {stride: 25, climb: 0, swim: 0, fly: 35, burrow: 0},
        canReactiveStrike: false,
        strikes: [
                {
                    type: "Melee",
                    weapon: "Claw",
                    weaponTraits: ["Agile", "Evil", "Finesse", "Magical"],
                    numberOfActions: 1,
                    attackBonuses: [16,12,8],
                    diceNumber: 2,
                    diceSize: 8,
                    damageBonus: 8,
                    damageType: "Slashing",
                    rider: [
                        {
                            type: "extraDamage",
                            riderDiceNumber: 1,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Evil"
                        }
                    ]
                }
        ],
        spellSaveDC: 26,
        rituals: [
            {
                name: "Abyssal Pact",
                ritualRank: 1
            }
        ],
        spells: [
            {
                name: "Dominate",
                spellRank: 6,
                tradition: "Divine",
                innate: true,
                numberOfUses: 1,
            }, 
            {
                name: "Dimension Door",
                spellRank: 5,
                tradition: "Divine",
                innate: true,
                numberOfUses: 1,
            }
        ],
        spellsAtWill: [
            {
                name: "Dimension Door",
                spellRank: 4,
                tradition: "Divine",
                innate: true,
            },
            {
                name: "Suggestion",
                spellRank: 4,
                tradition: "Divine",
                innate: true,
            },
            {
                name: "Mind Reading",
                spellRank: 3,
                tradition: "Divine",
                innate: true,
            },
            {
                name: "Detect Alignment",
                spellRank: 2,
                tradition: "Divine",
                innate: true,
            },
            {
                name: "Charm",
                spellRank: 1,
                tradition: "Divine",
                innate: true,
            }
        ],
        spellsConstant: [
            {
                name: "Tongues",
                spellRank: 5,
                tradition: "Divine",
                innate: true,
            }
        ],
        specialAbilities: [
            {
                name: "Magic Resilience",
                type: "Passive",
                description: "+1 Status Bonus to all saves vs. magic"
            },
            {
                name: "Rejection Vulnerability",
                type: "Demon Vulnerability",
                damageTaken: [2,6,0,"Mental"],
                description: "As succubi are beings of pure lust, creatures that reject their lust can metaphysically harm them. When a succubus fails a Diplomacy check to Embrace or Request, or when a creature succeeds at its save against a succubus’s mental spell or ability, the succubus takes 2d6 mental damage. For one hour after causing mental damage to a succubus in this way, a creature can deal 2d6 mental damage to the succubus with a successful Demoralize incorporating its rejection.",
            },
            {
                name: "Seductive Presence",
                type: "Aura",
                auraSize: 10,
                traits: ["Aura", "Charm", "Emotion", "Mental"],
                description: "Any creature in the aura that could be sexually attracted to a succubus takes a –2 circumstance penalty to checks and DCs to oppose the succubus’s mental spells, Deception, and Diplomacy."
            }
        ],
    }, 
    {   
        name: "Gelugon",
        id: 113,
        source: "Bestiary pg.91",
        level: 13,
        tags: ["Lawful Evil", "Large", "Fiend", "Devil"], 
        recallKnowledgeCategory: "Religion",
        recallKnowledgeDC: [31, 29, 26],  
        perception: 26,
        visionLowLight: false,
        visionDark: false,
        visionDarkGreater: true,
        languages: ["Celestial", "Common", "Draconic", "Infernal", "Telepathy: 100 ft"],
        skillBonusAcrobatics: 22,
        skillBonusArcana: 0,
        skillBonusAthletics: 23,
        skillBonusCrafting: 0,
        skillBonusDeception: 25,
        skillBonusDiplomacy: 25,
        skillBonusIntimidation: 23,
        skillBonusMedicine: 0,
        skillBonusNature: 0,
        skillBonusOccultism: 0,
        skillBonusPerformance: 0,
        skillBonusReligion: 26,
        skillBonusSociety: 25,
        skillBonusStealth: 22,
        skillBonusSurvival: 0,
        skillBonusThievery: 0,
        skillBonusLore: [
            {
                loreName: "Warfare",
                bonus: 30
            }
        ],
        abilityModStrength: 6,
        abilityModDexterity: 5,
        abilityModConstitution: 5,
        abilityModIntelligence: 8,
        abilityModWisdom: 5,
        abilityModCharisma: 4,
        defenseHP: 215,
        defenseAC: 34, 
        defenseFortSave: 24, 
        defenseRflxSave: 24, 
        defenseWillSave: 26, 
        defenseImmunities: ["Cold", "Fire"],
        defenseResistances: ["Physical 10 (Except Silver)", "Poison 10"],
        defenseWeaknesses: ["Good 10"], 
        speeds: {stride: 35, climb: 0, swim: 0, fly: 35, burrow: 0},
        canReactiveStrike: true,
        strikes: [
                {
                    type: "Melee",
                    weapon: "Frost Longspear",
                    weaponTraits: ["Cold", "Evil", "Magical", "Reach: 15"],
                    numberOfActions: 1,
                    attackBonuses: [28,23,18],
                    diceNumber: 2,
                    diceSize: 8,
                    damageBonus: 12,
                    damageType: "Piercing",
                    rider: [
                        {
                            type: "extraDamage",
                            riderDiceNumber: 1,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Cold"
                        },
                        {
                            type: "extraDamage",
                            riderDiceNumber: 1,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Evil"
                        },
                        {
                            type: "effect",
                            riderName: "Slowing Frost",
                        }
                    ]

                },
                {
                    type: "Melee",
                    weapon: "Tail",
                    weaponTraits: ["Agile", "Cold", "Evil", "Magical", "Reach: 10"],
                    numberOfActions: 1,
                    attackBonuses: [25,21,17],
                    diceNumber: 2,
                    diceSize: 6,
                    damageBonus: 12,
                    damageType: "Bludgeoning",
                    rider: [
                        {
                            type: "extraDamage",
                            riderDiceNumber: 2,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Cold"
                        },
                        {
                            type: "extraDamage",
                            riderDiceNumber: 1,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Evil"
                        },
                        {
                            type: "effect",
                            riderName: "Slowing Frost",
                        }
                    ]

                },
                {
                    type: "Ranged",
                    weapon: "Frost Longspear",
                    weaponTraits: ["Cold", "Magical", "Thrown: 20"],
                    numberOfActions: 1,
                    attackBonuses: [27,22,17],
                    diceNumber: 2,
                    diceSize: 8,
                    damageBonus: 12,
                    damageType: "Piercing",
                    rider: [
                        {
                            type: "extraDamage",
                            riderDiceNumber: 1,
                            riderDiceSize: 6,
                            riderDamageBonus: 0,
                            riderDamageType: "Cold"
                        }
                    ]

                },
        ],
        spellSaveDC: 33,
        rituals: [
            {
                name: "Infernal Pact",
                ritualRank: 1
            }
        ],
        spells: [
            {
                name: "Cone of Cold",
                spellRank: 7,
                tradition: "Divine",
                innate: true,
                numberOfUses: 2,
            }, 
            {
                name: "Illusory Scene",
                spellRank: 6,
                tradition: "Divine",
                innate: true,
                numberOfUses: 1,
            }, 
            {
                name: "Dimension Door",
                spellRank: 5,
                tradition: "Divine",
                innate: true,
                numberOfUses: 1,
            }, 
            {
                name: "Wall of Ice",
                spellRank: 5,
                tradition: "Divine",
                innate: true,
                numberOfUses: 3,
            }
        ],
        spellsAtWill: [
            {
                name: "Ray of Frost",
                spellRank: 7,
                tradition: "Divine",
                innate: true
            },
            {
                name: "Dimension Door",
                spellRank: 4,
                tradition: "Divine",
                innate: true,
            }
        ],
        spellsConstant: [
            {
                name: "Fly",
                spellRank: 4,
                tradition: "Divine",
                innate: true,
            }
        ],
        specialAbilities: [
            {
                name: "Attack of Opportunity",
                type: "Reaction",
                trigger: "A creature within the monster's reach uses a manipulate action or a move action, makes a ranged attack, or leaves a square during a move action it's using.",
                effect: "The monster attempts a melee Strike against the triggering creature. If the attack is a critical hit and the trigger was a manipulate action, the monster disrupts that action. This Strike doesn't count toward the monster's multiple attack penalty, and its multiple attack penalty doesn't apply to this Strike.",
            },
            {
                name: "Frightful Presence",
                type: "Aura",
                auraSize: 10,
                traits: ["Aura", "Divine", "Emotion", "Enchantment", "Fear", "Mental"],
                dc: 31,
                description: "A creature that first enters the area must attempt a Will save. Regardless of the result of the saving throw, the creature is temporarily immune to this monster’s Frightful Presence for 1 minute.",
                results: ["Critical Success: Unaffected", "Success: Frightened 1", "Failure: Frightened 2", "Critical Failure: Frightened 4"]
            },
            {
                name: "Magic Resilience",
                type: "Passive",
                description: "+1 Status Bonus to all saves vs. magic"
            },
            {
                name: "Slowing Frost",
                type: "Passive",
                traits: ["Cold", "Divine", "Evocation"],
                description: "The ice devil channels the extreme cold of its body through its appendages and weapons. A creature hit by an ice devil’s weapon or unarmed attack in melee must attempt a DC 32 Fortitude save or be slowed 1 for 1d4 rounds. A weapon used by an ice devil gains the effects of a frost rune while the gelugon holds it, and the ice devil can throw any such weapon with a 20-foot range increment, trailing motes of frost."
            },
            {
                name: "Tactician of Cocytus",
                type: "Activity",
                numberOfActions: 1,
                traits: ["Concentrate"],
                description: "An ice devil’s logical mind devises genius tactics from its perfect memory. It can telepathically send a tactical repositioning to its allies, allowing all commanded or allied evil creatures in the range of its telepathy to immediately Stride (or Burrow, Climb, Fly, or Swim, if the creature has the corresponding Speed)."
            }
        ],
    }, 
    {
        name: "Aasimar Redeemer",
        id: 333,
        source: "Bestiary pg.263",
        level: 5,
        tags: ["Neutral Good", "Medium", "Aasimar", "Human", "Humanoid"],
        recallKnowledgeCategory: "Society",
        recallKnowledgeDC: [20,18,15],  
        perception: 11,
        visionLowLight: false,
        visionDark: true,
        visionDarkGreater: false,
        languages: ["Celestial", "Common"],
        skillBonusAcrobatics: 0,
        skillBonusArcana: 0,
        skillBonusAthletics: 11,
        skillBonusCrafting: 0,
        skillBonusDeception: 0,
        skillBonusDiplomacy: 12,
        skillBonusIntimidation: 0,
        skillBonusMedicine: 9,
        skillBonusNature: 0,
        skillBonusOccultism: 0,
        skillBonusPerformance: 0,
        skillBonusReligion: 11,
        skillBonusSociety: 7,
        skillBonusStealth: 0,
        skillBonusSurvival: 0,
        skillBonusThievery: 0,
        skillBonusLore: [],
        abilityModStrength: 4,
        abilityModDexterity: 1,
        abilityModConstitution: 3,
        abilityModIntelligence: 0,
        abilityModWisdom: 2,
        abilityModCharisma: 3,
        defenseHP: 73,
        defenseAC: 23, 
        defenseFortSave: 12, 
        defenseRflxSave: 8, 
        defenseWillSave: 11, 
        defenseImmunities: ["None"],
        defenseResistances: ["None"],
        defenseWeaknesses: ["None"], 
        speeds: {stride: 20, climb: 0, swim: 0, fly: 0, burrow: 0},
        canReactiveStrike: false,
        strikes: [
            {
                type: "Melee",
                weapon: "Longsword",
                weaponTraits: ["Versatile P"],
                numberOfActions: 1,
                attackBonuses: [15,10,5],
                diceNumber: 1,
                diceSize: 8,
                damageBonus: 7,
                damageType: "Slashing",
            },
            {
                type: "Ranged",
                weapon: "Crossbow",
                weaponTraits: ["Range Increment 120", "Reload 1"],
                numberOfActions: 1,
                attackBonuses: [12,7,2],
                diceNumber: 1,
                diceSize: 8,
                damageBonus: 3,
                damageType: "Piercing",
                rider: [
                    {
                        type: "effect",
                        riderName: "Knockdown"
                    }
                ]
            }

        ],
        spellSaveDC: 20,  //setting this to 0 for creatures with no spells ensures that the spell column is not rendered 
        rituals: [],
        spells: [],
        spellsAtWill: [
            {
                name: "Light",
                spellRank: 3,
                tradition: "Divine",
                innate: true,
            },
        ],
        spellsConstant: [],
        spellsFocus: [
            {
                name: "Lay on Hands",
                spellRank: 3
            }
        ],
        specialAbilities: [
            {
                name: "Shield Block",
                type: "Reaction",
                trigger: "The monster has its shield raised and takes damage from a physical attack.",
                effect: "The monster snaps its shield into place to deflect a blow. The shield prevents the monster from taking an amount of damage up to the shield’s Hardness. The monster and the shield each take any remaining damage, possibly breaking or destroying the shield.",
            },
            {
                name: "Divine Grace",
                type: "Reaction",
                trigger: "The anglekin is targeted by a spell that allows a saving throw.",
                effect: "The scion gains a +2 circumstance bonus to the saving throw."
            },
            {
                name: "Glimpse of Redemption",
                type: "Reaction",
                trigger: "An enemy damages one of the angelkin’s allies. Both the enemy and ally must be within 15 feet of the angelkin.",
                effect: "The angelkin causes its foe to hesitate under the weight of its sins as visions of possible redemption play out in its mind’s eye. The foe chooses one of two options:",
                options: ["The ally is completely unharmed by the triggering damage.", "The ally gains resistance 7 to all damage against the triggering damage. After the damaging effect resolves, the enemy becomes enfeebled 2 until the end of its next turn."]
            }
        ],
        items: ["Crossbow", "Crossbow Bolts x10", "Half Plate", "Longsword", "Steel Shield"],
        notes: [
            {
                entry: "Shield",
                shieldHardness: 5,
                shieldHP: 20,
                shieldBrokenThreshold: 10
            }
        ]
    }
]

export default bestiaryTest