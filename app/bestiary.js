let bestiary = [
    [
        "Astral Deva", //creature name
        14, //creature level
        ["Neutral Good", "Medium", "Celestial", "Angel"], //creature tags
        [26, "Darkvision"], // [perceptionBonus, specialSenses]
        ["Celestial", "Draconic", "Infernal", "Tongues"], // languages spoken
        [24,0,0,0,0,26,28,0,0,0,0,24,0,0,0,0], //creatures skills, listed in alphabetical order
        [8,4,5,4,4,6], //creature ability modifiers [str, dex, con, int, wis, cha]
        [36,27,26,22,285], //creature defenses [AC, fortSave, rflxSave, willSave, maxHP]
        ["No Resistances"], // resistances
        ["Evil: 15"], //weaknesses
        [  //types of weapon strikes; each weapon gets its own entry
            [ 
                ["Melee", 1, "Holy Warhammer", 30, 25, 20], // [actionCost, NameOfWeapon, atkBonus, multiAttackPenalty1, multiAttackPenalty2]
                ["Good", "Magical", "Shove"], //weapon traits
                [2,8,22,"Bludgeoning"], // damage details: [#ofDice, sizeOfDice, flatBonus, dmgType]
                [1,6,0,"Good"]  // rider details: [#ofDice, sizeOfDice, flatBonus, dmgType]
            ]
        ], 
        ["+1 status to all saves vs. magic", "Traveler's Aura", "Messenger's Amnesty"] //misc details; to be expanded later
    ],

    [
        "Succubus", 
        7, 
        ["Chaotic Evil", "Medium", "Fiend", "Demon"], 
        [15, "Darkvision"],
        ["Abyssal", "Celestial", "Common", "Draconic", "", "", "", "Telepathy: 100 ft", "Tongues"],
        [14,0,0,0,18,20,16,0,0,0,0,13,15,14,0,0],
        [2,3,4,4,2,7], 
        [23, 15, 14, 17, 100], 
        ["No Resistances"], 
        ["Cold Iron: 5", "Good: 5"], 
        [
            [
                ["Melee", 1, "Claw", 16, 12, 8], 
                ["Agile", "Evil", "Finesse", "Magical"],
                [2,8,8,"Slashing"], 
                [1,6,0,"Evil"]
            ],
            [
                ["Ranged", 1, "Test", 16, 12, 8], 
                ["Agile", "Evil", "Finesse", "Magical", "Reach: 20ft"],
                [2,10,12,"Piercing"], 
                [1,6,0,"Evil"]
            ]
        ], 
        ["+1 status to all saves vs. magic", "Rejection Vulnerability", "Seductive Presence"]
    ],

    [
        "Tarrasque",
         25, 
         ["Chaotic Evil", "Gargantuan", "Beast"], 
         [48, "Darkvision", "Scent (Imprecise) 120 ft."], 
         ["Aklo", "Can't speak any language"], 
         [47,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0], 
         [12,9,12,-3,9,7], 
         [54,47,37,39,540], 
         ["Fire: 25", "Physical: 25"], 
         ["No Weaknesses"], 
         [
            [
                ["Melee", 1, "Jaws", 45, 40, 35],
                ["Chaotic", "Evil", "Magical", "Reach: 20ft"],
                [5, 12, 20, "Piercing"],
                ["Improved Grab"]
            ],
            [
                ["Melee", 1, "Claw", 45, 41, 37],
                ["Agile", "Chaotic", "Evil", "Magical", "Reach: 15ft"],
                [5, 10, 20, "Slashing"],
                []
            ],
            [
                ["Melee", 1, "Tail", 45, 40, 35],
                ["Chaotic", "Evil", "Magical", "Reach: 30ft"],
                [4, 12, 20, "Bludgeoning"],
                []
            ],
            [
                ["Melee", 1, "Horn", 45, 40, 35],
                ["Chaotic", "Evil", "Magical", "Reach: 15ft"],
                [4, 10, 20, "Piercing"],
                []
            ],
            [
                ["Ranged", 1, "Spine", 45, 40, 35],
                ["Brutal", "Chaotic", "Evil", "Magical", "Range Increment: 120ft"],
                [3, 10, 20, "Piercing"],
                []
            ]
         ],
         ["+2 Status bonus to all saves VS Magic", "Regeneration 50", "Carapace", "Frightful Presence: 300ft, DC 39", "Inexorable", "Reactive: 3", "Attack of Opportunity", "Reflect"]
    ],
    [
        "Aapoph Serpentfolk",
        3,
        ["Chaotic Evil","Medium","Uncommon","Humanoid","Mutant","Serpentfolk"],
        [8,"Darkvision","Scent, Imprecise 30ft."],
        ["Aklo","Undercommon","Telepathy: 100ft."],
        [7,0,11,0,0,0,6,0,0,0,0,0,0,0,0,0],
        [4,2,3,-3,1,-1],
        [18,10,7,6,60],
        ["Poison: 5"],
        ["No Weaknesses"],
        [
            [
                ["Melee", 1, "Scimitar", 11, 6, 1],
                ["Forceful", "Sweep"],
                [1,6,6,"Slashing"],
                []
            ],
            [
                ["Melee", 1, "Fangs", 11, 6, 1],
                [""],
                [1,8,5, "Piercing"],
                ["Serpentfolk Venom"]
            ],
            [
                ["Melee", 1, "Tail", 11,7,3],
                ["Agile"],
                [1,6,6, "Bludgeoning"],
                ["Knockdown"]
            ]
        ],
        ["+2 Status VS Mental"]
    ],
    ["Aasimar Redeemer",5,["Neutral Good","Medium","Aasimar","Human","Humanoid"],["11","Darkvision"],["Celestial","Common"],[0,0,11,0,0,12,0,9,0,0,0,11,7,0,0,0],[4,1,3,0,2,3],[23,12,8,11,73],["None"],["None"],["None"]],
    
]

export default bestiary