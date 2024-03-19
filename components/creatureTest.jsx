"use client"
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import Defenses from './defenses.jsx'
import Strike from './strikeTest.jsx'
import Skills from './skillsTest.jsx'
import Profile from './profile.jsx'
import Spells from './spells.jsx'
import Special from './special.jsx'



export default function creature(props) {
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

    let hiddenStyle = {
        display : "none"
    }
    let selectedStyle = {
        fontWeight: "bold",
        backgroundColor: "black",
        color: "white"
    }

    const eliteWeakModifier = (elite ? 2:0) + (weak ? -2:0)

    return (
        <div className="monster" id={uniqueId}>
            <div className="column1">
                <Profile
                    level = {props.level}
                    name = {props.name}
                    languages = {props.languages}
                    elite = {elite}
                    weak = {weak}
                    selectedStyle = {selectedStyle}
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
                />
            </div>
            <div className="column2">
                <Defenses
                    elite = {elite}
                    weak = {weak}
                    level = {props.level}
                    HP = {props.defenseHP}
                    eliteWeakModifier = {eliteWeakModifier}
                    selectedStyle = {selectedStyle}
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
                />
            </div>
            <div className="column3">
                <div className="skills">
                    <div className="checkPerception" 
                        onClick= {() => handleCheckPerception(props.perception + eliteWeakModifier)}>
                        <span>Perception: </span>
                        <span style={eliteWeakModifier?selectedStyle:null}>{props.perception + eliteWeakModifier}</span> 
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
                        selectedStyle = {selectedStyle}
                        d20={d20}
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
                            selectedStyle = {selectedStyle}
                            d20={d20}
                            damageRoll={damageRoll}
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
                    selectedStyle = {selectedStyle}
                    />
                : null}
            </div>
            <div className="column6">
                {props.spells[0] ? 
                <div className="Spells">
                    <Spells
                        spells = {props.spells}
                        eliteWeakModifier = {eliteWeakModifier}
                        selectedStyle = {selectedStyle}
                    />
                </div>
                : null}
            </div>

        </div>
        
    )
}