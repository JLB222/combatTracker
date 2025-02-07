"use client"
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Defenses from './defenses.jsx'
import Strike from './strikeTest.jsx'
import Skills from './skillsTest.jsx'
import Profile from './profile.jsx'
import Spells from './spells.jsx'
import Special from './special.jsx'
import Conditions from './conditions.jsx'

//style active for skills creature is untrained in
const hiddenStyle = {
    display : "none"
}
//style active if a creature stat has been affected by the Elite or Weak template
const eliteWeakStyle = {
    fontWeight: "bold",
    backgroundColor: "black",
    color: "aqua"
}
//style active if a given ability score has been reduced by conditions
const abilityReductionStyle = {
    fontStyle: "italic",
    color: "green"
}

export default function Creature(props) {
    const [uniqueId] = useState(uuidv4()); // Generate a unique ID for each instance of creature

    const [elite, setElite] = useState(false)
    const [weak, setWeak] = useState(false)
    
    const [checkPerception, setCheckPerception] = useState(props.perception)
    
    function d20() {
        let result = Math.floor((Math.random() * 20) + 1)
        return result
    }
    function damageRoll(arr) {  //format for array is: [numberOfDamageDice, sizeOfDamageDice, flatDamageBonus, damageType]
        let result = []
        for (let i = 0; i < arr[0]; i++) {
          result.push(Math.floor((Math.random() * arr[1]) + 1))
        }
        //console.log(`${arr[0]}d${arr[1]}+${arr[2]}:`, result)  //print the results in console to confirm the rolls are legit if necessary
        return [result.reduce((a,b) => a+b, arr[2]), result]
    }

    function handleCheckPerception(num) { let roll = d20(); setCheckPerception(`+ ${roll} = ${roll + num}`);}

    function handleEliteToggle() {
        if (weak) {
            setWeak(false)
        }
        setElite(!elite)
    }
    function handleWeakToggle() {
        if (elite) {
            setElite(false)
        }
        setWeak(!weak)
    }

    const eliteWeakModifier = (elite ? 2:0) + (weak ? -2:0)

    const [abilityReduction, setAbilityReduction] = useState([0,0,0,0])


    function increaseCondition(index) {
        setAbilityReduction((prev) => {
            // Create a copy of the previous state array using the spread operator
            const updatedArray = [...prev];
            // Increase the value at the specified index by 1
            updatedArray[index]++;
            // Return the updated array, which will replace the previous state
            return updatedArray;
        });
    };

    function decreaseCondition(index) {
        setAbilityReduction((prev) => {
            // Create a copy of the previous state array using the spread operator
            const updatedArray = [...prev];
            // Decrease the value at the specified index by 1
            updatedArray[index] = Math.max(0, updatedArray[index] - 1);
            // Return the updated array, which will replace the previous state
            return updatedArray;
        });
    };
    
    return (
        <div className="monster" id={uniqueId}>
            <button className="removeButton" onClick= {() => props.handleRemoveCreature(props.instanceId)}>Remove Creature</button>
            <div className="topRow"> 
                <div className="column1">
                    <Profile
                        key = {"Profile " + uniqueId}
                        level = {props.level}
                        name = {props.name}
                        languages = {props.languages}
                        elite = {elite}
                        weak = {weak}
                        eliteWeakStyle = {eliteWeakStyle}
                        handleEliteToggle = {handleEliteToggle}
                        handleWeakToggle = {handleWeakToggle}
                        abilityModStrength = {props.abilityModStrength}
                        abilityModConstitution = {props.abilityModConstitution}
                        abilityModDexterity = {props.abilityModDexterity}
                        abilityModIntelligence = {props.abilityModIntelligence}
                        abilityModWisdom = {props.abilityModWisdom}
                        abilityModCharisma = {props.abilityModCharisma}
                        tags = {props.tags}
                        recallKnowledgeInfo = {props.recallKnowledgeInfo}
                        speeds = {props.speeds}
                        items = {props.items}
                    />
                </div>
                <div className="column2">
                    <Defenses
                        elite = {elite}
                        weak = {weak}
                        level = {props.level}
                        HP = {props.defenseHP}
                        eliteWeakModifier = {eliteWeakModifier}
                        eliteWeakStyle = {eliteWeakStyle}
                        defenseAC = {props.defenseAC}
                        defenseFortSave = {props.defenseFortSave}
                        defenseRflxSave = {props.defenseRflxSave}
                        defenseWillSave = {props.defenseWillSave}
                        defenseImmunities = {props.defenseImmunities}
                        defenseResistances = {props.defenseResistances}
                        defenseWeaknesses = {props.defenseWeaknesses}
                        d20 = {d20}
                        hasShield = {props.hasShield}
                        shieldStats = {props.shieldStats}

                        abilityReduction = {abilityReduction}
                        abilityReductionStyle = {abilityReductionStyle}
                    />
                </div>
                <div className="column3">
                    <div className="skills">
                        {props.vision? <div>{props.vision}</div> :null}
                        {props.otherSenses.length? <div>{props.otherSenses}</div> :null}
                        <div className="checkPerception" 
                            onClick= {() => handleCheckPerception(props.perception + eliteWeakModifier - abilityReduction[3])}>
                            <span className="clickable">Perception: </span>
                            <span style={
                                ( abilityReduction[3] > 0 && eliteWeakModifier) ? { ...abilityReductionStyle, ...eliteWeakStyle }
                                : abilityReduction[3] > 0 ? abilityReductionStyle
                                : eliteWeakModifier ? eliteWeakStyle 
                                : null
                            }>
                                {props.perception + eliteWeakModifier - abilityReduction[3]}
                            </span> 
                            <span> ({checkPerception})</span>
                            
                        </div>
                        <Skills
                            skillBonusAcrobatics = {props.skills[0]}
                            skillBonusArcana = {props.skills[1]}
                            skillBonusAthletics = {props.skills[2]}
                            skillBonusCrafting = {props.skills[3]}

                            skillBonusDeception = {props.skills[4]}
                            skillBonusDiplomacy = {props.skills[5]}
                            skillBonusIntimidation = {props.skills[6]}
                            skillBonusMedicine = {props.skills[7]}

                            skillBonusNature = {props.skills[8]}
                            skillBonusOccultism = {props.skills[9]}
                            skillBonusPerformance = {props.skills[10]}
                            skillBonusReligion = {props.skills[11]}
                            
                            skillBonusSociety = {props.skills[12]}
                            skillBonusStealth = {props.skills[13]}
                            skillBonusSurvival = {props.skills[14]}
                            skillBonusThievery = {props.skills[15]}
                            
                            eliteWeakModifier = {eliteWeakModifier}
                            hiddenStyle = {hiddenStyle}
                            eliteWeakStyle = {eliteWeakStyle}
                            d20={d20}

                            abilityReduction = {abilityReduction}
                            abilityReductionStyle = {abilityReductionStyle}

                            skillBonusLore = {props.skillBonusLore}

                            abilityModStrength = {props.abilityModStrength}
                            abilityModDexterity = {props.abilityModDexterity}
                            abilityModIntelligence = {props.abilityModIntelligence}
                            abilityModWisdom = {props.abilityModWisdom}
                            abilityModCharisma = {props.abilityModCharisma}
                        />         
                    </div>
                </div>
                <div className="column4">
                    <div className="Strikes">
                        {props.strikes.map((element, index) => (
                            <Strike 
                                key={index} 
                                data={element}
                                eliteWeakModifier = {eliteWeakModifier}
                                eliteWeakStyle = {eliteWeakStyle}
                                d20={d20}
                                damageRoll={damageRoll}

                                abilityReduction = {abilityReduction}
                                abilityReductionStyle = {abilityReductionStyle}
                            />
                        ))}
                    </div>
                </div>
                <div className="column5">
                    {props.special.length > 0 ? 
                        <Special
                        damageRoll = {damageRoll}
                        specials = {props.special}
                        eliteWeakModifier = {eliteWeakModifier}
                        eliteWeakStyle = {eliteWeakStyle}
                        />
                    : null}
                </div>
                <div className="column6">
                    {props.spells[0] ? 
                    <div className="Spells">
                        <Spells
                            spells = {props.spells}
                            eliteWeakModifier = {eliteWeakModifier}
                            eliteWeakStyle = {eliteWeakStyle}

                            abilityReduction = {abilityReduction}
                            abilityReductionStyle = {abilityReductionStyle}
                        />
                    </div>
                    : null}
                </div>

            </div>
            <div className="bottomRow">
                <Conditions 
                    abilityReduction = {abilityReduction}
                    increaseCondition = {increaseCondition}
                    decreaseCondition = {decreaseCondition}
                />
            </div>
           

        </div>
        
    )
}