"use client"
import {useState} from 'react';

export default function creature(props) {
    // const [savingThrows, setSavingThrows] = useState([props.defenses[1], props.defenses[2], props.defenses[3]])
    const [fortSave, setFortSave] = useState(props.defenses[1])
    const [rflxSave, setRflxSave] = useState(props.defenses[2])
    const [willSave, setWillSave] = useState(props.defenses[3])

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

    
    let hiddenStyle = {
        display : "none"
    }
    return (
        <div className="monster">
            <div className="column1">
                <div className="bio">
                    {/* <image src={props.img}></image> */}
                    <span className="level">{props.level} </span>
                    <span className="name">{props.name} </span>
                    <span className="initiative">Initiative </span>
                    <span className="eliteToggle">Elite </span>
                    <span className="weakToggle">Weak </span>
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
                    <div className="armorClass">AC: {props.defenses[0]} </div>
                    <div className="saveFortitude" onClick= {() => handleSaveFort(props.defenses[1])}>FORT: {props.defenses[1]} ({fortSave}) </div>
                    <div className="saveReflex" onClick= {() => handleSaveRflx(props.defenses[2])}>RFLX: {props.defenses[2]} ({rflxSave}) </div>
                    <div className="saveWill" onClick= {() => handleSaveWill(props.defenses[3])}>WILL: {props.defenses[3]} ({willSave}) </div>
                </div>
            </div>
            <div className="column3">
                <div className="skills">
                    <div className="checkPerception">Perception: +{props.perception[0]} </div>

                    <div className="checkAcrobatics" style={props.skills[0] === 0 ? hiddenStyle:null}>Acrobatics: +{props.skills[0]} </div>
                    <div className="checkArcana" style={props.skills[1] === 0 ? hiddenStyle:null}>Arcana: +{props.skills[1]} </div>
                    <div className="checkAthletics" style={props.skills[2] === 0 ? hiddenStyle:null}>Athletics: +{props.skills[2]} </div>
                    <div className="checkCrafting" style={props.skills[3] === 0 ? hiddenStyle:null}>Crafting: +{props.skills[3]} </div>

                    <div className="checkDeception" style={props.skills[4] === 0 ? hiddenStyle:null}>Deception: +{props.skills[4]} </div>
                    <div className="checkDiplomacy" style={props.skills[5] === 0 ? hiddenStyle:null}>Diplomacy: +{props.skills[5]} </div>
                    <div className="checkIntimidation" style={props.skills[6] === 0 ? hiddenStyle:null}>Intimidation: +{props.skills[6]} </div>
                    <div className="checkMedicine" style={props.skills[7] === 0 ? hiddenStyle:null}>Medicine: +{props.skills[7]} </div>

                    <div className="checkNature" style={props.skills[8] === 0 ? hiddenStyle:null}>Nature: +{props.skills[8]} </div>
                    <div className="checkOccultism" style={props.skills[9] === 0 ? hiddenStyle:null}>Occultism: +{props.skills[9]} </div>
                    <div className="checkPerformance" style={props.skills[10] === 0 ? hiddenStyle:null}>Performance: +{props.skills[10]} </div>
                    <div className="checkReligion" style={props.skills[11] === 0 ? hiddenStyle:null}>Religion: +{props.skills[11]} </div>

                    <div className="checkSociety" style={props.skills[12] === 0 ? hiddenStyle:null}>Society: +{props.skills[12]} </div>
                    <div className="checkStealth" style={props.skills[13] === 0 ? hiddenStyle:null}>Stealth: +{props.skills[13]} </div>
                    <div className="checkSurvival" style={props.skills[14] === 0 ? hiddenStyle:null}>Survival: +{props.skills[14]} </div>
                    <div className="checkThievery" style={props.skills[15] === 0 ? hiddenStyle:null}>Thievery: +{props.skills[15]} </div>
                </div>
            </div>

        </div>
        
    )
}