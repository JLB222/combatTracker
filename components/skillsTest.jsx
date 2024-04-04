import { useState } from "react";


// function skillsTest(props) {
//     //establishing State for the skills

//     const [checkAcrobatics, setCheckAcrobatics] = useState(props.skillBonusAcrobatics)
//     const [checkArcana, setCheckArcana] = useState(props.skillBonusArcana)
//     const [checkAthletics, setCheckAthletics] = useState(props.skillBonusAthletics)
//     const [checkCrafting, setCheckCrafting] = useState(props.skillBonusCrafting)
    
//     const [checkDeception, setCheckDeception] = useState(props.skillBonusDeception)
//     const [checkDiplomacy, setCheckDiplomacy] = useState(props.skillBonusDiplomacy)
//     const [checkIntimidation, setCheckIntimidation] = useState(props.skillBonusIntimidation)
//     const [checkMedicine, setCheckMedicine] = useState(props.skillBonusMedicine)
    
//     const [checkNature, setCheckNature] = useState(props.skillBonusNature)
//     const [checkOccultism, setCheckOccultism] = useState(props.skillBonusOccultism)
//     const [checkPerformance, setCheckPerformance] = useState(props.skillBonusPerformance)
//     const [checkReligion, setCheckReligion] = useState(props.skillBonusReligion)
    
//     const [checkSociety, setCheckSociety] = useState(props.skillBonusSociety)
//     const [checkStealth, setCheckStealth] = useState(props.skillBonusStealth)
//     const [checkSurvival, setCheckSurvival] = useState(props.skillBonusSurvival)
//     const [checkThievery, setCheckThievery] = useState(props.skillBonusThievery)

//     //check handling functions

//     function handleCheckAcrobatics(num) { let roll = props.d20(); setCheckAcrobatics(`+ ${roll} = ${roll + num}`);}
//     function handleCheckArcana(num) { let roll = props.d20(); setCheckArcana(`+ ${roll} = ${roll + num}`);}
//     function handleCheckAthletics(num) { let roll = props.d20(); setCheckAthletics(`+ ${roll} = ${roll + num}`);}
//     function handleCheckCrafting(num) { let roll = props.d20(); setCheckCrafting(`+ ${roll} = ${roll + num}`);}
    
//     function handleCheckDeception(num) { let roll = props.d20(); setCheckDeception(`+ ${roll} = ${roll + num}`);}
//     function handleCheckDiplomacy(num) { let roll = props.d20(); setCheckDiplomacy(`+ ${roll} = ${roll + num}`);}
//     function handleCheckIntimidation(num) { let roll = props.d20(); setCheckIntimidation(`+ ${roll} = ${roll + num}`);}
//     function handleCheckMedicine(num) { let roll = props.d20(); setCheckMedicine(`+ ${roll} = ${roll + num}`);}

//     function handleCheckNature(num) { let roll = props.d20(); setCheckNature(`+ ${roll} = ${roll + num}`);}
//     function handleCheckOccultism(num) { let roll = props.d20(); setCheckOccultism(`+ ${roll} = ${roll + num}`);}
//     function handleCheckPerformance(num) { let roll = props.d20(); setCheckPerformance(`+ ${roll} = ${roll + num}`);}
//     function handleCheckReligion(num) { let roll = props.d20(); setCheckReligion(`+ ${roll} = ${roll + num}`);}

//     function handleCheckSociety(num) { let roll = props.d20(); setCheckSociety(`+ ${roll} = ${roll + num}`);}
//     function handleCheckStealth(num) { let roll = props.d20(); setCheckStealth(`+ ${roll} = ${roll + num}`);}
//     function handleCheckSurvival(num) { let roll = props.d20(); setCheckSurvival(`+ ${roll} = ${roll + num}`);}
//     function handleCheckThievery(num) { let roll = props.d20(); setCheckThievery(`+ ${roll} = ${roll + num}`);}



//     return (
//         <div className="skills">
//             <div className="checkAcrobatics" onClick= {() => handleCheckAcrobatics(props.skillBonusAcrobatics + props.eliteWeakModifier)} style={props.skillBonusAcrobatics === 0 ? props.hiddenStyle:null}>
//                 <span>Acrobatics: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusAcrobatics + props.eliteWeakModifier}</span> 
//                 <span> ({checkAcrobatics})</span>
//             </div>
//             <div className="checkArcana" onClick= {() => handleCheckArcana(props.skillBonusArcana + props.eliteWeakModifier)} style={props.skillBonusArcana === 0 ? props.hiddenStyle:null}>
//                 <span>Arcana: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusArcana + props.eliteWeakModifier}</span> 
//                 <span> ({checkArcana})</span>
//             </div>
//             <div className="checkAthletics" onClick= {() => handleCheckAthletics(props.skillBonusAthletics + props.eliteWeakModifier)} style={props.skillBonusAthletics === 0 ? props.hiddenStyle:null}>
//                 <span>Athletics: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusAthletics + props.eliteWeakModifier}</span> 
//                 <span> ({checkAthletics})</span>
//             </div>
//             <div className="checkCrafting" onClick= {() => handleCheckCrafting(props.skillBonusCrafting + props.eliteWeakModifier)} style={props.skillBonusCrafting === 0 ? props.hiddenStyle:null}>
//                 <span>Crafting: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusCrafting + props.eliteWeakModifier}</span> 
//                 <span> ({checkCrafting})</span>
//             </div>

//             <div className="checkDeception" onClick= {() => handleCheckDeception(props.skillBonusDeception + props.eliteWeakModifier)} style={props.skillBonusDeception === 0 ? props.hiddenStyle:null}>
//                 <span>Deception: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusDeception + props.eliteWeakModifier}</span>  
//                 <span> ({checkDeception})</span>
//             </div>
//             <div className="checkDiplomacy" onClick= {() => handleCheckDiplomacy(props.skillBonusDiplomacy + props.eliteWeakModifier)} style={props.skillBonusDiplomacy === 0 ? props.hiddenStyle:null}>
//                 <span>Diplomacy: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusDiplomacy + props.eliteWeakModifier}</span>  
//                 <span> ({checkDiplomacy})</span>
//             </div>
//             <div className="checkIntimidation" onClick= {() => handleCheckIntimidation(props.skillBonusIntimidation + props.eliteWeakModifier)} style={props.skillBonusIntimidation === 0 ? props.hiddenStyle:null}>
//                 <span>Intimidation: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusIntimidation + props.eliteWeakModifier}</span>  
//                 <span> ({checkIntimidation})</span>
//             </div>
//             <div className="checkMedicine" onClick= {() => handleCheckMedicine(props.skillBonusMedicine + props.eliteWeakModifier)} style={props.skillBonusMedicine === 0 ? props.hiddenStyle:null}>
//                 <span>Medicine: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusMedicine + props.eliteWeakModifier}</span>  
//                 <span> ({checkMedicine})</span>
//             </div>

//             <div className="checkNature" onClick= {() => handleCheckNature(props.skillBonusNature + props.eliteWeakModifier)} style={props.skillBonusNature === 0 ? props.hiddenStyle:null}>
//                 <span>Nature: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusNature + props.eliteWeakModifier}</span>  
//                 <span> ({checkNature})</span>
//             </div>
//             <div className="checkOccultism" onClick= {() => handleCheckOccultism(props.skillBonusOccultism + props.eliteWeakModifier)} style={props.skillBonusOccultism === 0 ? props.hiddenStyle:null}>
//                 <span>Occultism: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusOccultism + props.eliteWeakModifier}</span>  
//                 <span> ({checkOccultism})</span>
//             </div>
//             <div className="checkPerformance" onClick= {() => handleCheckPerformance(props.skillBonusPerformance + props.eliteWeakModifier)} style={props.skillBonusPerformance === 0 ? props.hiddenStyle:null}>
//                 <span>Performance: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusPerformance + props.eliteWeakModifier}</span>  
//                 <span> ({checkPerformance})</span>
//             </div>
//             <div className="checkReligion" onClick= {() => handleCheckReligion(props.skillBonusReligion + props.eliteWeakModifier)} style={props.skillBonusReligion === 0 ? props.hiddenStyle:null}>
//                 <span>Religion: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusReligion + props.eliteWeakModifier}</span>  
//                 <span> ({checkReligion})</span>
//             </div>

//             <div className="checkSociety" onClick= {() => handleCheckSociety(props.skillBonusSociety + props.eliteWeakModifier)} style={props.skillBonusSociety === 0 ? props.hiddenStyle:null}>
//                 <span>Society: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusSociety + props.eliteWeakModifier}</span>  
//                 <span> ({checkSociety})</span>
//             </div>
//             <div className="checkStealth" onClick= {() => handleCheckStealth(props.skillBonusStealth + props.eliteWeakModifier)} style={props.skillBonusStealth === 0 ? props.hiddenStyle:null}>
//                 <span>Stealth: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusStealth + props.eliteWeakModifier}</span>  
//                 <span> ({checkStealth})</span>
//             </div>
//             <div className="checkSurvival" onClick= {() => handleCheckSurvival(props.skillBonusSurvival + props.eliteWeakModifier)} style={props.skillBonusSurvival === 0 ? props.hiddenStyle:null}>
//                 <span>Survival: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusSurvival + props.eliteWeakModifier}</span>  
//                 <span> ({checkSurvival})</span>
//             </div>
//             <div className="checkThievery" onClick= {() => handleCheckThievery(props.skillBonusThievery + props.eliteWeakModifier)} style={props.skillBonusThievery === 0 ? props.hiddenStyle:null}>
//                 <span>Thievery: </span>
//                 <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.skillBonusThievery + props.eliteWeakModifier}</span>  
//                 <span> ({checkThievery})</span>
//             </div>
//         </div>
//     )
// }

function SkillsTest(props) {
    const initialState = {
        Acrobatics: props.skillBonusAcrobatics,
        Arcana: props.skillBonusArcana,
        Athletics: props.skillBonusAthletics,
        Crafting: props.skillBonusCrafting,
        Deception: props.skillBonusDeception,
        Diplomacy: props.skillBonusDiplomacy,
        Intimidation: props.skillBonusIntimidation,
        Medicine: props.skillBonusMedicine,
        Nature: props.skillBonusNature,
        Occultism: props.skillBonusOccultism,
        Performance: props.skillBonusPerformance,
        Religion: props.skillBonusReligion,
        Society: props.skillBonusSociety,
        Stealth: props.skillBonusStealth,
        Survival: props.skillBonusSurvival,
        Thievery: props.skillBonusThievery,
    };

    const [skills, setSkills] = useState(initialState);

    function handleCheck(skillName, num) {
        let roll = props.d20();
        setSkills({
            ...skills,
            [skillName]: `+ ${roll} = ${roll + num}`
        });
    };

    function renderSkill(skillName) {
        return (
            <div className={`check${skillName}`}>
                <span>{skillName}: </span>
                <span style={props.eliteWeakModifier?props.selectedStyle:null}>{initialState[skillName] + props.eliteWeakModifier}</span>
                <span> ({skills[skillName]})</span>
            </div>
        );
    };

    return (
        <div className="skills">
            {Object.keys(initialState).map((skillName) => (
                <div key={skillName} onClick={() => handleCheck(skillName, initialState[skillName] + props.eliteWeakModifier)} style={initialState[skillName] === 0 ? props.hiddenStyle : null}>
                    {renderSkill(skillName)}
                </div>
            ))}
        </div>
    );
}
export default SkillsTest
