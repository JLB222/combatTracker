import {useState} from "react"

function Spells(props) {
    return (
        <div>
            <div>Spell DC: {props.spells[0]}</div>

            <div className="spellType">Limited Use Spells:</div>
            {props.spells[1]?.map(el => (
                <div>
                    <span>Rank {el.spellRank}: {el.name} x{el.numberOfUses}</span>
                </div>
            ))}

            <div className="spellType">At-Will Spells:</div>
            {props.spells[2]?.map(el => (
                <div>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            <div className="spellType">Constant Spells:</div>
            {props.spells[3]?.map(el => (
                <div>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            <div className="spellType">Rituals:</div>
            {props.spells[4]?.map(el => (
                <div>
                    <span>Rank {el.ritualRank}: {el.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Spells