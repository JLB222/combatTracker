const bestiaryTest = [ 
    {   
        name: "Succubus",
        level: 7,
        tags: ["Chaotic Evil", "Medium", "Fiend", "Demon"], 
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
        defenseImmunities: ["No Immunities"],
        defenseResistances: ["No Resistances"],
        defenseWeaknesses: ["Cold Iron: 5", "Good: 5"], 
        canReactiveStrike: false,
        strikes: [
                {
                    type: "Melee",
                    weapon: "Claw",
                    weaponTraits: ["Agile", "Evil", "Finesse", "Magical"],
                    numberOfActions: 1,
                    multiAttackPenalty: [16,12,8],
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
        ]
    }, 
    {   
        name: "Gelugon",
        level: 13,
        tags: ["Lawful Evil", "Large", "Fiend", "Devil"], 
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
        defenseResistances: ["Physical: 10 (Except Silver)", "Poison: 10"],
        defenseWeaknesses: ["Good: 10"], 
        canReactiveStrike: true,
        strikes: [
                {
                    type: "Melee",
                    weapon: "Frost Longspear",
                    weaponTraits: ["Cold", "Evil", "Magical", "Reach: 15"],
                    numberOfActions: 1,
                    multiAttackPenalty: [28,23,18],
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
                    multiAttackPenalty: [25,21,17],
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
                    multiAttackPenalty: [27,22,17],
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
        specialAbilities: [
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
        ]
    }, 
    
]

export default bestiaryTest