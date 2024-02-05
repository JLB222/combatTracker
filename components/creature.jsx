"use client"
import {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid'
import Strike from './strike.jsx'

export default function creature(props) {
    const [elite, setElite] = useState(false)
    const [weak, setWeak] = useState(false)
    const [shieldUp, setShieldUp] = useState(false)

    const [health, setHealth] = useState(props.defenses[4])
    const damageInputRef = useRef(null); // Create a ref for the input element that will change HP
    const [uniqueId] = useState(uuidv4()); // Generate a unique ID for each instance of creature
    function handleHealth() {
        const inputValue = damageInputRef.current.value;
        if (inputValue) {
            setHealth(health - parseInt(inputValue, 10));  
        }
        damageInputRef.current.value = ""  //resets the input after the user clicks
    }

    const [fortSave, setFortSave] = useState(props.defenses[1])
    const [rflxSave, setRflxSave] = useState(props.defenses[2])
    const [willSave, setWillSave] = useState(props.defenses[3])
    const [checkPerception, setCheckPerception] = useState(props.perception[0])

    const [checkAcrobatics, setCheckAcrobatics] = useState(props.skills[0])
    const [checkArcana, setCheckArcana] = useState(props.skills[1])
    const [checkAthletics, setCheckAthletics] = useState(props.skills[2])
    const [checkCrafting, setCheckCrafting] = useState(props.skills[3])

    const [checkDeception, setCheckDeception] = useState(props.skills[4])
    const [checkDiplomacy, setCheckDiplomacy] = useState(props.skills[5])
    const [checkIntimidation, setCheckIntimidation] = useState(props.skills[6])
    const [checkMedicine, setCheckMedicine] = useState(props.skills[7])

    const [checkNature, setCheckNature] = useState(props.skills[8])
    const [checkOccultism, setCheckOccultism] = useState(props.skills[9])
    const [checkPerformance, setCheckPerformance] = useState(props.skills[10])
    const [checkReligion, setCheckReligion] = useState(props.skills[11])

    const [checkSociety, setCheckSociety] = useState(props.skills[12])
    const [checkStealth, setCheckStealth] = useState(props.skills[13])
    const [checkSurvival, setCheckSurvival] = useState(props.skills[14])
    const [checkThievery, setCheckThievery] = useState(props.skills[15])

    // const [checkAttack, setCheckAttack] = useState("")

    function d20() {
        let result = Math.floor((Math.random() * 20) + 1)
        return result
    }

    function handleSaveFort(num) { let roll = d20(); setFortSave(`+ ${roll} = ${roll + num}`)}
    function handleSaveRflx(num) { let roll = d20(); setRflxSave(`+ ${roll} = ${roll + num}`)}
    function handleSaveWill(num) { let roll = d20(); setWillSave(`+ ${roll} = ${roll + num}`)
    }
    function handleCheckPerception(num) { let roll = d20(); setCheckPerception(`+ ${roll} = ${roll + num}`);}

    function handleCheckAcrobatics(num) { let roll = d20(); setCheckAcrobatics(`+ ${roll} = ${roll + num}`);}
    function handleCheckArcana(num) { let roll = d20(); setCheckArcana(`+ ${roll} = ${roll + num}`);}
    function handleCheckAthletics(num) { let roll = d20(); setCheckAthletics(`+ ${roll} = ${roll + num}`);}
    function handleCheckCrafting(num) { let roll = d20(); setCheckCrafting(`+ ${roll} = ${roll + num}`);}
    
    function handleCheckDeception(num) { let roll = d20(); setCheckDeception(`+ ${roll} = ${roll + num}`);}
    function handleCheckDiplomacy(num) { let roll = d20(); setCheckDiplomacy(`+ ${roll} = ${roll + num}`);}
    function handleCheckIntimidation(num) { let roll = d20(); setCheckIntimidation(`+ ${roll} = ${roll + num}`);}
    function handleCheckMedicine(num) { let roll = d20(); setCheckMedicine(`+ ${roll} = ${roll + num}`);}

    function handleCheckNature(num) { let roll = d20(); setCheckNature(`+ ${roll} = ${roll + num}`);}
    function handleCheckOccultism(num) { let roll = d20(); setCheckOccultism(`+ ${roll} = ${roll + num}`);}
    function handleCheckPerformance(num) { let roll = d20(); setCheckPerformance(`+ ${roll} = ${roll + num}`);}
    function handleCheckReligion(num) { let roll = d20(); setCheckReligion(`+ ${roll} = ${roll + num}`);}

    function handleCheckSociety(num) { let roll = d20(); setCheckSociety(`+ ${roll} = ${roll + num}`);}
    function handleCheckStealth(num) { let roll = d20(); setCheckStealth(`+ ${roll} = ${roll + num}`);}
    function handleCheckSurvival(num) { let roll = d20(); setCheckSurvival(`+ ${roll} = ${roll + num}`);}
    function handleCheckThievery(num) { let roll = d20(); setCheckThievery(`+ ${roll} = ${roll + num}`);}

    // function handleCheckAttack(num) { 
    //     let roll = d20(); 
    //     setCheckAttack(`+ ${roll} = ${roll + num}`);
    // }

    // //Dealing with Multi-Attack Penalty (MAP)
    // const [MAP, setMAP] = useState(0)

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
    function handleShieldRaise() {
        setShieldUp(!shieldUp)
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
    const eliteHPModifier = (level) => {
        switch(true) {
            case (level <= 1): return (elite ? 10:0) + (weak ? -10:0)
            case (level >=2 && level <= 4): return (elite ? 15:0) + (weak ? -15:0)
            case (level >=5 && level <= 19): return (elite ? 20:0) + (weak ? -20:0)
            case (level >= 20): return (elite ? 30:0) + (weak ? -30:0)
            default: 'Error.  What level did you enter?'
        }
    }
    const shieldModifier = shieldUp ? 2:0
    return (
        <div className="monster" id={uniqueId}>
            <div className="column1">
                <div className="bio">
                    {/* <image src={props.img}></image> */}
                    <span className="level">{props.level} </span>
                    <span className="name">{props.name} </span>
                    <span className="initiative">Initiative </span>
                    <span >Initiative #</span>
                    <span className="eliteToggle" style={elite?selectedStyle:null} onClick={() => handleEliteToggle()}> Elite </span>
                    <span className="weakToggle" style={weak?selectedStyle:null}onClick={() => handleWeakToggle()}> Weak </span>
                </div>
                <div className="abilityMods">
                    <span className="strengthMod">STR: {props.abilityMods[0]} </span>
                    <span className="dexterityMod">DEX: {props.abilityMods[1]} </span>
                    <span className="constitutionMod">CON: {props.abilityMods[2]} </span>
                    <span className="intelligenceMod">INT: {props.abilityMods[3]} </span>
                    <span className="wisdomMod">WIS: {props.abilityMods[4]} </span>
                    <span className="charismaMod">CHA: {props.abilityMods[5]} </span>
                </div>
                <div className="tags">
                    <span>{props.tags}</span>
                </div>
            </div>
            <div className="column2">
                <div className="defenses">
                    <div className="hitPoints">HP: {health + eliteHPModifier(props.level)}/{props.defenses[4] + eliteHPModifier(props.level)} <span><input ref={damageInputRef}/><button onClick={handleHealth}>Change</button></span></div>
                    <div className="armorClass" onClick={() => handleShieldRaise()}>AC: {props.defenses[0] + eliteWeakModifier + shieldModifier} {shieldUp ? "Shield Raised" : "Raise Shield"}</div>
                    <div className="saveFortitude" onClick= {() => handleSaveFort(props.defenses[1] + eliteWeakModifier)}>FORT: {props.defenses[1] + eliteWeakModifier} ({fortSave}) </div>
                    <div className="saveReflex" onClick= {() => handleSaveRflx(props.defenses[2] + eliteWeakModifier)}>RFLX: {props.defenses[2] + eliteWeakModifier} ({rflxSave}) </div>
                    <div className="saveWill" onClick= {() => handleSaveWill(props.defenses[3] + eliteWeakModifier)}>WILL: {props.defenses[3] + eliteWeakModifier} ({willSave}) </div>
                </div>
            </div>
            <div className="column3">
                <div className="skills">
                    <div className="checkPerception" onClick= {() => handleCheckPerception(+props.perception[0] + eliteWeakModifier)}>Perception: {+props.perception[0] + eliteWeakModifier} ({checkPerception}) </div>

                    <div className="checkAcrobatics" onClick= {() => handleCheckAcrobatics(props.skills[0] + eliteWeakModifier)} style={props.skills[0] === 0 ? hiddenStyle:null}>Acrobatics: {props.skills[0] + eliteWeakModifier} ({checkAcrobatics})</div>
                    <div className="checkArcana" onClick= {() => handleCheckArcana(props.skills[1] + eliteWeakModifier)} style={props.skills[1] === 0 ? hiddenStyle:null}>Arcana: {props.skills[1] + eliteWeakModifier} ({checkArcana})</div>
                    <div className="checkAthletics" onClick= {() => handleCheckAthletics(props.skills[2] + eliteWeakModifier)} style={props.skills[2] === 0 ? hiddenStyle:null}>Athletics: {props.skills[2] + eliteWeakModifier} ({checkAthletics})</div>
                    <div className="checkCrafting" onClick= {() => handleCheckCrafting(props.skills[3] + eliteWeakModifier)} style={props.skills[3] === 0 ? hiddenStyle:null}>Crafting: {props.skills[3] + eliteWeakModifier} ({checkCrafting})</div>

                    <div className="checkDeception" onClick= {() => handleCheckDeception(props.skills[4] + eliteWeakModifier)} style={props.skills[4] === 0 ? hiddenStyle:null}>Deception: {props.skills[4] + eliteWeakModifier}  ({checkDeception})</div>
                    <div className="checkDiplomacy" onClick= {() => handleCheckDiplomacy(props.skills[5] + eliteWeakModifier)} style={props.skills[5] === 0 ? hiddenStyle:null}>Diplomacy: {props.skills[5] + eliteWeakModifier}  ({checkDiplomacy})</div>
                    <div className="checkIntimidation" onClick= {() => handleCheckIntimidation(props.skills[6] + eliteWeakModifier)} style={props.skills[6] === 0 ? hiddenStyle:null}>Intimidation: {props.skills[6] + eliteWeakModifier}  ({checkIntimidation})</div>
                    <div className="checkMedicine" onClick= {() => handleCheckMedicine(props.skills[7] + eliteWeakModifier)} style={props.skills[7] === 0 ? hiddenStyle:null}>Medicine: {props.skills[7] + eliteWeakModifier}  ({checkMedicine})</div>

                    <div className="checkNature" onClick= {() => handleCheckNature(props.skills[8] + eliteWeakModifier)} style={props.skills[8] === 0 ? hiddenStyle:null}>Nature: {props.skills[8] + eliteWeakModifier}  ({checkNature})</div>
                    <div className="checkOccultism" onClick= {() => handleCheckOccultism(props.skills[9] + eliteWeakModifier)} style={props.skills[9] === 0 ? hiddenStyle:null}>Occultism: {props.skills[9] + eliteWeakModifier}  ({checkOccultism})</div>
                    <div className="checkPerformance" onClick= {() => handleCheckPerformance(props.skills[10] + eliteWeakModifier)} style={props.skills[10] === 0 ? hiddenStyle:null}>Performance: {props.skills[10] + eliteWeakModifier}  ({checkPerformance})</div>
                    <div className="checkReligion" onClick= {() => handleCheckReligion(props.skills[11] + eliteWeakModifier)} style={props.skills[11] === 0 ? hiddenStyle:null}>Religion: {props.skills[11] + eliteWeakModifier}  ({checkReligion})</div>

                    <div className="checkSociety" onClick= {() => handleCheckSociety(props.skills[12] + eliteWeakModifier)} style={props.skills[12] === 0 ? hiddenStyle:null}>Society: {props.skills[12] + eliteWeakModifier}  ({checkSociety})</div>
                    <div className="checkStealth" onClick= {() => handleCheckStealth(props.skills[13] + eliteWeakModifier)} style={props.skills[13] === 0 ? hiddenStyle:null}>Stealth: {props.skills[13] + eliteWeakModifier}  ({checkStealth})</div>
                    <div className="checkSurvival" onClick= {() => handleCheckSurvival(props.skills[14] + eliteWeakModifier)} style={props.skills[14] === 0 ? hiddenStyle:null}>Survival: {props.skills[14] + eliteWeakModifier}  ({checkSurvival})</div>
                    <div className="checkThievery" onClick= {() => handleCheckThievery(props.skills[15] + eliteWeakModifier)} style={props.skills[15] === 0 ? hiddenStyle:null}>Thievery: {props.skills[15] + eliteWeakModifier}  ({checkThievery})</div>
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
                        />
                    ))}
                </div>
            </div>

        </div>
        
    )
}