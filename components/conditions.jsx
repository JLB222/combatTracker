import { useState } from "react"

function Conditions(props) {
    return (
        <div className="conditionContainer">
            <div className="loweredAbilities">
                <span>Lowered Abilities</span>
                <ul>
                    <li>Enfeebled 
                        <span className="enfeebledValue"> {props.abilityReduction[0]}</span>
                        <button className="enfeebledDown" onClick={() => props.decreaseCondition(0)}>
                            Down
                        </button>
                        <button className="enfeebledUp" onClick={() => props.increaseCondition(0)}>
                            Up
                        </button>
                    </li>
                    <li>Clumsy 
                        <span className="clumsyValue"> {props.abilityReduction[1]}</span>
                        <button className="clumsyDown" onClick={() => props.decreaseCondition(1)}>
                            Down
                        </button>
                        <button className="clumsyUp" onClick={() => props.increaseCondition(1)}>
                            Up
                        </button>
                    </li>
                    <li>Drained 
                        <span className="drainedValue"> {props.abilityReduction[2]}</span>
                        <button className="drainedDown" onClick={() => props.decreaseCondition(2)}>
                            Down
                        </button>
                        <button className="drainedUp" onClick={() => props.increaseCondition(2)}>
                            Up
                        </button>
                    </li>
                    <li>Stupefied 
                        <span className="stupefiedValue"> {props.abilityReduction[3]}</span>
                        <button className="stupefiedDown" onClick={() => props.decreaseCondition(3)}>
                            Down
                        </button>
                        <button className="stupefiedUp" onClick={() => props.increaseCondition(3)}>
                            Up
                        </button>
                    </li>
                </ul>
            </div>
            <div className="deprivedSenses">
                <span>Senses</span>
                <ul>
                    <li>Dazzled</li>
                    <li>Blinded</li>
                    <li>Deafened</li>
                    <li>Invisible</li>
                </ul>
            </div>
        </div>
    )
}


export default Conditions