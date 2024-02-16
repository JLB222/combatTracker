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
        abilityModStrength: 2,
        abilityModConstitution: 3,
        abilityModDexterity: 4,
        abilityModIntelligence: 4,
        abilityModWisdom: 2,
        abilityModCharisma: 7,
        defenseHP: 100,
        defenseAC: 23, 
        defenseFortSave: 15, 
        defenseRflxSave: 14, 
        defenseWillSave: 17, 
        defenseResistances: ["No Resistances"],
        defenseWeaknesses: ["Cold Iron: 5", "Good: 5"], 
        strikes: [
                {
                    type: "Claw",
                    weaponTraits: ["Agile", "Evil", "Finesse", "Magical"],
                    numberOfActions: 1,
                    multiAttackPenalty: [16,12,8],
                    diceNumber: 2,
                    diceSize: 8,
                    damageBonus: 8,
                    damageType: "Slashing",
                    rider: {
                        type: "extraDamage",
                        riderDiceNumber: 1,
                        riderDiceSize: 6,
                        riderDamageBonus: 0,
                        riderDamageType: "Evil"
                    }
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
        ]
    }, 

]

export default bestiaryTest