import { useState } from "react";


function skills(props) {
    //establishing State for the skills

    const [checkAcrobatics, setCheckAcrobatics] = useState(props.data[0])
    const [checkArcana, setCheckArcana] = useState(props.data[1])
    const [checkAthletics, setCheckAthletics] = useState(props.data[2])
    const [checkCrafting, setCheckCrafting] = useState(props.data[3])
    
    const [checkDeception, setCheckDeception] = useState(props.data[4])
    const [checkDiplomacy, setCheckDiplomacy] = useState(props.data[5])
    const [checkIntimidation, setCheckIntimidation] = useState(props.data[6])
    const [checkMedicine, setCheckMedicine] = useState(props.data[7])
    
    const [checkNature, setCheckNature] = useState(props.data[8])
    const [checkOccultism, setCheckOccultism] = useState(props.data[9])
    const [checkPerformance, setCheckPerformance] = useState(props.data[10])
    const [checkReligion, setCheckReligion] = useState(props.data[11])
    
    const [checkSociety, setCheckSociety] = useState(props.data[12])
    const [checkStealth, setCheckStealth] = useState(props.data[13])
    const [checkSurvival, setCheckSurvival] = useState(props.data[14])
    const [checkThievery, setCheckThievery] = useState(props.data[15])

    //check handling functions

    function handleCheckAcrobatics(num) { let roll = props.d20(); setCheckAcrobatics(`+ ${roll} = ${roll + num}`);}
    function handleCheckArcana(num) { let roll = props.d20(); setCheckArcana(`+ ${roll} = ${roll + num}`);}
    function handleCheckAthletics(num) { let roll = props.d20(); setCheckAthletics(`+ ${roll} = ${roll + num}`);}
    function handleCheckCrafting(num) { let roll = props.d20(); setCheckCrafting(`+ ${roll} = ${roll + num}`);}
    
    function handleCheckDeception(num) { let roll = props.d20(); setCheckDeception(`+ ${roll} = ${roll + num}`);}
    function handleCheckDiplomacy(num) { let roll = props.d20(); setCheckDiplomacy(`+ ${roll} = ${roll + num}`);}
    function handleCheckIntimidation(num) { let roll = props.d20(); setCheckIntimidation(`+ ${roll} = ${roll + num}`);}
    function handleCheckMedicine(num) { let roll = props.d20(); setCheckMedicine(`+ ${roll} = ${roll + num}`);}

    function handleCheckNature(num) { let roll = props.d20(); setCheckNature(`+ ${roll} = ${roll + num}`);}
    function handleCheckOccultism(num) { let roll = props.d20(); setCheckOccultism(`+ ${roll} = ${roll + num}`);}
    function handleCheckPerformance(num) { let roll = props.d20(); setCheckPerformance(`+ ${roll} = ${roll + num}`);}
    function handleCheckReligion(num) { let roll = props.d20(); setCheckReligion(`+ ${roll} = ${roll + num}`);}

    function handleCheckSociety(num) { let roll = props.d20(); setCheckSociety(`+ ${roll} = ${roll + num}`);}
    function handleCheckStealth(num) { let roll = props.d20(); setCheckStealth(`+ ${roll} = ${roll + num}`);}
    function handleCheckSurvival(num) { let roll = props.d20(); setCheckSurvival(`+ ${roll} = ${roll + num}`);}
    function handleCheckThievery(num) { let roll = props.d20(); setCheckThievery(`+ ${roll} = ${roll + num}`);}

    return (
        <div className="skills">
            <div className="checkAcrobatics" onClick= {() => handleCheckAcrobatics(props.data[0] + props.eliteWeakModifier)} style={props.data[0] === 0 ? props.hiddenStyle:null}>Acrobatics: {props.data[0] + props.eliteWeakModifier} ({checkAcrobatics})</div>
            <div className="checkArcana" onClick= {() => handleCheckArcana(props.data[1] + props.eliteWeakModifier)} style={props.data[1] === 0 ? props.hiddenStyle:null}>Arcana: {props.data[1] + props.eliteWeakModifier} ({checkArcana})</div>
            <div className="checkAthletics" onClick= {() => handleCheckAthletics(props.data[2] + props.eliteWeakModifier)} style={props.data[2] === 0 ? props.hiddenStyle:null}>Athletics: {props.data[2] + props.eliteWeakModifier} ({checkAthletics})</div>
            <div className="checkCrafting" onClick= {() => handleCheckCrafting(props.data[3] + props.eliteWeakModifier)} style={props.data[3] === 0 ? props.hiddenStyle:null}>Crafting: {props.data[3] + props.eliteWeakModifier} ({checkCrafting})</div>

            <div className="checkDeception" onClick= {() => handleCheckDeception(props.data[4] + props.eliteWeakModifier)} style={props.data[4] === 0 ? props.hiddenStyle:null}>Deception: {props.data[4] + props.eliteWeakModifier}  ({checkDeception})</div>
            <div className="checkDiplomacy" onClick= {() => handleCheckDiplomacy(props.data[5] + props.eliteWeakModifier)} style={props.data[5] === 0 ? props.hiddenStyle:null}>Diplomacy: {props.data[5] + props.eliteWeakModifier}  ({checkDiplomacy})</div>
            <div className="checkIntimidation" onClick= {() => handleCheckIntimidation(props.data[6] + props.eliteWeakModifier)} style={props.data[6] === 0 ? props.hiddenStyle:null}>Intimidation: {props.data[6] + props.eliteWeakModifier}  ({checkIntimidation})</div>
            <div className="checkMedicine" onClick= {() => handleCheckMedicine(props.data[7] + props.eliteWeakModifier)} style={props.data[7] === 0 ? props.hiddenStyle:null}>Medicine: {props.data[7] + props.eliteWeakModifier}  ({checkMedicine})</div>

            <div className="checkNature" onClick= {() => handleCheckNature(props.data[8] + props.eliteWeakModifier)} style={props.data[8] === 0 ? props.hiddenStyle:null}>Nature: {props.data[8] + props.eliteWeakModifier}  ({checkNature})</div>
            <div className="checkOccultism" onClick= {() => handleCheckOccultism(props.data[9] + props.eliteWeakModifier)} style={props.data[9] === 0 ? props.hiddenStyle:null}>Occultism: {props.data[9] + props.eliteWeakModifier}  ({checkOccultism})</div>
            <div className="checkPerformance" onClick= {() => handleCheckPerformance(props.data[10] + props.eliteWeakModifier)} style={props.data[10] === 0 ? props.hiddenStyle:null}>Performance: {props.data[10] + props.eliteWeakModifier}  ({checkPerformance})</div>
            <div className="checkReligion" onClick= {() => handleCheckReligion(props.data[11] + props.eliteWeakModifier)} style={props.data[11] === 0 ? props.hiddenStyle:null}>Religion: {props.data[11] + props.eliteWeakModifier}  ({checkReligion})</div>

            <div className="checkSociety" onClick= {() => handleCheckSociety(props.data[12] + props.eliteWeakModifier)} style={props.data[12] === 0 ? props.hiddenStyle:null}>Society: {props.data[12] + props.eliteWeakModifier}  ({checkSociety})</div>
            <div className="checkStealth" onClick= {() => handleCheckStealth(props.data[13] + props.eliteWeakModifier)} style={props.data[13] === 0 ? props.hiddenStyle:null}>Stealth: {props.data[13] + props.eliteWeakModifier}  ({checkStealth})</div>
            <div className="checkSurvival" onClick= {() => handleCheckSurvival(props.data[14] + props.eliteWeakModifier)} style={props.data[14] === 0 ? props.hiddenStyle:null}>Survival: {props.data[14] + props.eliteWeakModifier}  ({checkSurvival})</div>
            <div className="checkThievery" onClick= {() => handleCheckThievery(props.data[15] + props.eliteWeakModifier)} style={props.data[15] === 0 ? props.hiddenStyle:null}>Thievery: {props.data[15] + props.eliteWeakModifier}  ({checkThievery})</div>
        </div>
    )
}

export default skills
