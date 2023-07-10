"use client"
import {useState} from 'react';

export default function creature(props) {
    // const [savingThrows, setSavingThrows] = useState([props.defenses[1], props.defenses[2], props.defenses[3]])
    const [elite, setElite] = useState(false)
    const [weak, setWeak] = useState(false)

    const [fortSave, setFortSave] = useState(props.defenses[1] + (elite? 2:0) + (weak? -2:0))
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

    function d20() {
        let result = Math.floor((Math.random() * 20) + 1)
        return result
    }
    function handleSaveFort(num) {
        let roll = d20()
        setFortSave(`${roll} + ${num} = ${roll + num}`)
    }
    function handleSaveRflx(num) {
        let roll = d20()
        setRflxSave(`${roll} + ${num} = ${roll + num}`)
    }
    function handleSaveWill(num) {
        let roll = d20()
        setWillSave(`${roll} + ${num} = ${roll + num}`)
    }
    function handleCheckPerception(num) { let roll = d20(); setCheckPerception(`${roll} + ${num} = ${roll + num}`);}

    function handleCheckAcrobatics(num) { let roll = d20(); setCheckAcrobatics(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckArcana(num) { let roll = d20(); setCheckArcana(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckAthletics(num) { let roll = d20(); setCheckAthletics(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckCrafting(num) { let roll = d20(); setCheckCrafting(`${roll} + ${num} = ${roll + num}`);}
    
    function handleCheckDeception(num) { let roll = d20(); setCheckDeception(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckDiplomacy(num) { let roll = d20(); setCheckDiplomacy(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckIntimidation(num) { let roll = d20(); setCheckIntimidation(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckMedicine(num) { let roll = d20(); setCheckMedicine(`${roll} + ${num} = ${roll + num}`);}

    function handleCheckNature(num) { let roll = d20(); setCheckNature(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckOccultism(num) { let roll = d20(); setCheckOccultism(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckPerformance(num) { let roll = d20(); setCheckPerformance(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckReligion(num) { let roll = d20(); setCheckReligion(`${roll} + ${num} = ${roll + num}`);}

    function handleCheckSociety(num) { let roll = d20(); setCheckSociety(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckStealth(num) { let roll = d20(); setCheckStealth(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckSurvival(num) { let roll = d20(); setCheckSurvival(`${roll} + ${num} = ${roll + num}`);}
    function handleCheckThievery(num) { let roll = d20(); setCheckThievery(`${roll} + ${num} = ${roll + num}`);}

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
    let templateModifier = (elite? 2:0) + (weak? -2:0)
    return (
        <div className="monster">
            <div className="column1">
                <div className="bio">
                    {/* <image src={props.img}></image> */}
                    <span className="level">{props.level} </span>
                    <span className="name">{props.name} </span>
                    <span className="initiative">Initiative </span>
                    <span className="eliteToggle" onClick={() => handleEliteToggle()}>Elite </span>
                    <span className="weakToggle" onClick={() => handleWeakToggle()}>Weak </span>
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
                    <div className="hitPoints" >HP: {props.defenses[4]}/{props.defenses[4]}</div>
                    <div className="armorClass">AC: {props.defenses[0] + templateModifier} </div>
                    <div className="saveFortitude" onClick= {() => handleSaveFort(props.defenses[1] + templateModifier)}>FORT: {props.defenses[1] + templateModifier} ({fortSave}) </div>
                    <div className="saveReflex" onClick= {() => handleSaveRflx(props.defenses[2] + templateModifier)}>RFLX: {props.defenses[2] + templateModifier} ({rflxSave}) </div>
                    <div className="saveWill" onClick= {() => handleSaveWill(props.defenses[3] + templateModifier)}>WILL: {props.defenses[3] + templateModifier} ({willSave}) </div>
                </div>
            </div>
            <div className="column3">
                <div className="skills">
                    <div className="checkPerception" onClick= {() => handleCheckPerception(props.perception[0] + templateModifier)}>Perception: +{props.perception[0] + templateModifier} ({checkPerception}) </div>

                    <div className="checkAcrobatics" onClick= {() => handleCheckAcrobatics(props.skills[0] + templateModifier)} style={props.skills[0] === 0 ? hiddenStyle:null}>Acrobatics: +{props.skills[0] + templateModifier} ({checkAcrobatics})</div>
                    <div className="checkArcana" onClick= {() => handleCheckArcana(props.skills[1] + templateModifier)} style={props.skills[1] === 0 ? hiddenStyle:null}>Arcana: +{props.skills[1] + templateModifier} ({checkArcana})</div>
                    <div className="checkAthletics" onClick= {() => handleCheckAthletics(props.skills[2] + templateModifier)} style={props.skills[2] === 0 ? hiddenStyle:null}>Athletics: +{props.skills[2] + templateModifier} ({checkAthletics})</div>
                    <div className="checkCrafting" onClick= {() => handleCheckCrafting(props.skills[3] + templateModifier)} style={props.skills[3] === 0 ? hiddenStyle:null}>Crafting: +{props.skills[3] + templateModifier} ({checkCrafting})</div>

                    <div className="checkDeception" onClick= {() => handleCheckDeception(props.skills[4] + templateModifier)} style={props.skills[4] === 0 ? hiddenStyle:null}>Deception: +{props.skills[4] + templateModifier}  ({checkDeception})</div>
                    <div className="checkDiplomacy" onClick= {() => handleCheckDiplomacy(props.skills[5] + templateModifier)} style={props.skills[5] === 0 ? hiddenStyle:null}>Diplomacy: +{props.skills[5] + templateModifier}  ({checkDiplomacy})</div>
                    <div className="checkIntimidation" onClick= {() => handleCheckIntimidation(props.skills[6] + templateModifier)} style={props.skills[6] === 0 ? hiddenStyle:null}>Intimidation: +{props.skills[6] + templateModifier}  ({checkIntimidation})</div>
                    <div className="checkMedicine" onClick= {() => handleCheckMedicine(props.skills[7] + templateModifier)} style={props.skills[7] === 0 ? hiddenStyle:null}>Medicine: +{props.skills[7] + templateModifier}  ({checkMedicine})</div>

                    <div className="checkNature" onClick= {() => handleCheckNature(props.skills[8] + templateModifier)} style={props.skills[8] === 0 ? hiddenStyle:null}>Nature: +{props.skills[8] + templateModifier}  ({checkNature})</div>
                    <div className="checkOccultism" onClick= {() => handleCheckOccultism(props.skills[9] + templateModifier)} style={props.skills[9] === 0 ? hiddenStyle:null}>Occultism: +{props.skills[9] + templateModifier}  ({checkOccultism})</div>
                    <div className="checkPerformance" onClick= {() => handleCheckPerformance(props.skills[10] + templateModifier)} style={props.skills[10] === 0 ? hiddenStyle:null}>Performance: +{props.skills[10] + templateModifier}  ({checkPerformance})</div>
                    <div className="checkReligion" onClick= {() => handleCheckReligion(props.skills[11] + templateModifier)} style={props.skills[11] === 0 ? hiddenStyle:null}>Religion: +{props.skills[11] + templateModifier}  ({checkReligion})</div>

                    <div className="checkSociety" onClick= {() => handleCheckSociety(props.skills[12] + templateModifier)} style={props.skills[12] === 0 ? hiddenStyle:null}>Society: +{props.skills[12] + templateModifier}  ({checkSociety})</div>
                    <div className="checkStealth" onClick= {() => handleCheckStealth(props.skills[13] + templateModifier)} style={props.skills[13] === 0 ? hiddenStyle:null}>Stealth: +{props.skills[13] + templateModifier}  ({checkStealth})</div>
                    <div className="checkSurvival" onClick= {() => handleCheckSurvival(props.skills[14] + templateModifier)} style={props.skills[14] === 0 ? hiddenStyle:null}>Survival: +{props.skills[14] + templateModifier}  ({checkSurvival})</div>
                    <div className="checkThievery" onClick= {() => handleCheckThievery(props.skills[15] + templateModifier)} style={props.skills[15] === 0 ? hiddenStyle:null}>Thievery: +{props.skills[15] + templateModifier}  ({checkThievery})</div>
                </div>
            </div>

        </div>
        
    )
}