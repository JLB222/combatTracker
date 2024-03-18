import {useState} from "react"

function Spells(props) {
    return (
        <div className="spells">
            <div>Spell DC: {props.spells[0]}</div>

            {props.spells[1].length > 0 && <div className="spellType">Limited Use Spells:</div>}
            {props.spells[1]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name} x{el.numberOfUses}</span>
                </div>
            ))}

            {props.spells[2].length > 0 && <div className="spellType">At-Will Spells:</div>}
            {props.spells[2]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            {props.spells[3].length > 0 && <div className="spellType">Constant Spells:</div>}
            {props.spells[3]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.spellRank}: {el.name}</span>
                </div>
            ))}

            {props.spells[5].length > 0 && <div className="spellType">Rituals:</div>}
            {props.spells[5]?.map((el,index) => (
                <div key={index}>
                    <span>Rank {el.ritualRank}: {el.name}</span>
                </div>
            ))}

        </div>
    )
}

export default Spells