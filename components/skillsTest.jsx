import { useState } from "react";

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
    // based on the index of the conditions state array in conditions.jsx:  [enfeebled, clumsy, drained, stupefied]
    const skillAttribute = {
        Acrobatics: 1,
        Arcana: 3,
        Athletics: 0,
        Crafting: 3,
        Deception: 3,
        Diplomacy: 3,
        Intimidation: 3,
        Medicine: 3,
        Nature: 3,
        Occultism: 3,
        Performance: 3,
        Religion: 3,
        Society: 3,
        Stealth: 1,
        Survival: 3,
        Thievery: 1,
    }

    const [skills, setSkills] = useState(initialState);
    function handleCheck(skillName, num) {
        let roll = props.d20();
        setSkills({
            ...skills,
            [skillName]: `+ ${roll} = ${roll + num}`
        });
    };

    const [loreSkills, setLoreSkills] = useState(props.skillBonusLore)
    function handleLoreCheck(skillName, num) {
        let roll = props.d20();
        setLoreSkills({
            ...loreSkills,
            [skillName]: `+ ${roll} = ${roll + num}`
        });
    };

    function renderSkill(skillName) {
        return (
            <div className={`check${skillName}`}>
                <span className="clickable">{skillName}: </span>
                <span style={
                        (props.abilityReduction[skillAttribute[skillName]] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[skillAttribute[skillName]] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
                        }>
                    {initialState[skillName] + props.eliteWeakModifier - props.abilityReduction[skillAttribute[skillName]]}
                </span>
                <span> ({skills[skillName]})</span>
            </div>
        );
    };

    return (
        <div className="skills">
            {Object.keys(initialState).map((skillName) => (
                <div 
                    key={skillName} 
                    onClick={() => handleCheck(skillName, initialState[skillName] + props.eliteWeakModifier - props.abilityReduction[skillAttribute[skillName]])} 
                    style={initialState[skillName] === 0 ? props.hiddenStyle : null}
                >
                {renderSkill(skillName)}
                </div>
            ))}
            {Object.keys(props.skillBonusLore).length ? 
                Object.keys(props.skillBonusLore).map(el =>
                    <div 
                        key={el}
                        onClick={() => handleLoreCheck(el, props.skillBonusLore[el] + props.eliteWeakModifier - props.abilityReduction[3])} 
                    >
                        <span className="clickable">{el} Lore: </span>
                        <span
                        style={
                            (props.abilityReduction[3] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                            : props.abilityReduction[3] > 0 ? props.abilityReductionStyle
                            : props.eliteWeakModifier ? props.eliteWeakStyle 
                            : null
                            }
                        >
                        {props.skillBonusLore[el] + props.eliteWeakModifier - props.abilityReduction[3]} </span>
                        <span>({loreSkills[el]})</span>
                    </div>
                )
            :null}
        </div>
    );
}
export default SkillsTest
