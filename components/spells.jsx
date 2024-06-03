import {useState} from "react"

function Spells(props) {
    return (
        <div className="spells">
            <div>Spell DC: 
                <span style={
                    props.eliteWeakModifier && props.abilityReduction[3] > 0 ? {...props.selectedStyle, ...props.abilityReductionStyle }
                    : props.eliteWeakModifier ? props.selectedStyle
                    : props.abilityReduction[3] > 0 ? props.abilityReductionStyle
                    : null}>
                    {props.spells[0] + props.eliteWeakModifier - props.abilityReduction[3]}
                </span>
            </div>

            {props.spells[1]?.length > 0 && <div className="spellType">Limited Use Spells: </div>}
            {props.eliteWeakModifier? <span style={props.selectedStyle}>{props.eliteWeakModifier > 0 ? "Elite: +4" : "Weak: -4"} Damage</span> :null}
            {props.spells[1]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name} x{el.numberOfUses}</span>
                </div>
            ))}

            {props.spells[2]?.length > 0 && <div className="spellType">At-Will Spells: </div>}
            {props.eliteWeakModifier? <span style={props.selectedStyle}>{props.eliteWeakModifier > 0 ? "Elite: +2" : "Weak: -2"} Damage</span> :null}
            {props.spells[2]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            {props.spells[3]?.length > 0 && <div className="spellType">Constant Spells: </div>}
            {props.spells[3]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            {props.spells[5]?.length > 0 && <div className="spellType">Rituals: </div>}
            {props.spells[5]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.ritualRank}: {el.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Spells