import { useState } from "react";

function SkillsTest(props) {
    const initialState = {
        Acrobatics: props.skillBonusAcrobatics || props.abilityModDexterity,
        Arcana: props.skillBonusArcana || props.abilityModIntelligence,
        Athletics: props.skillBonusAthletics || props.abilityModStrength,
        Crafting: props.skillBonusCrafting || props.abilityModIntelligence,
        Deception: props.skillBonusDeception || props.abilityModCharisma,
        Diplomacy: props.skillBonusDiplomacy || props.abilityModCharisma,
        Intimidation: props.skillBonusIntimidation || props.abilityModCharisma,
        Medicine: props.skillBonusMedicine || props.abilityModWisdom,
        Nature: props.skillBonusNature || props.abilityModWisdom,
        Occultism: props.skillBonusOccultism || props.abilityModIntelligence,
        Performance: props.skillBonusPerformance || props.abilityModCharisma,
        Religion: props.skillBonusReligion || props.abilityModWisdom,
        Society: props.skillBonusSociety || props.abilityModIntelligence,
        Stealth: props.skillBonusStealth || props.abilityModDexterity,
        Survival: props.skillBonusSurvival || props.abilityModWisdom,
        Thievery: props.skillBonusThievery || props.abilityModDexterity
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
        Thievery: 1
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
