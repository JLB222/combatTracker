import { useState } from "react"
import Tooltip from "./tooltip"

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
                    <Tooltip 
                        text="Your eyes are overstimulated or your vision is swimming. If vision is your only precise sense, all creatures and objects are concealed from you.">
                        Dazzled
                    </Tooltip>
                    <Tooltip 
                        text="You can't see. All normal terrain is difficult terrain to you. You can't detect anything using vision. You automatically critically fail Perception checks that require you to be able to see, and if vision is your only precise sense, you take a –4 status penalty to Perception checks. You are immune to visual effects. Blinded overrides dazzled.">
                        Blinded
                    </Tooltip>
                    <Tooltip 
                        text="You can't hear. You automatically critically fail Perception checks that require you to be able to hear. You take a –2 status penalty to Perception checks for initiative and checks that involve sound but also rely on other senses. If you perform an action that has the auditory trait, you must succeed at a DC 5 flat check or the action is lost; attempt the check after spending the action but before any effects are applied. You are immune to auditory effects while deafened.">
                        Deafened
                    </Tooltip>
                    <Tooltip 
                        text="A creature with the invisible condition (by way of an invisibility spell, for example) is automatically undetected to any creatures relying on sight as their only precise sense. Precise senses other than sight ignore the invisible condition. You can Seek to attempt to figure out an invisible creature's location, making it only hidden from you. This lasts until the invisible creature successfully uses Sneak to become undetected again. If you're already observing a creature when it becomes invisible, it starts out hidden, since you know where it was, though it can then Sneak to become undetected.  Other effects might partially foil invisibility. For instance, if you were tracking an invisible creature's footprints through the snow, the footprints would make it hidden. Throwing a net over an invisible creature would make it observed but concealed for as long as the net is on it.">
                        Invisible
                    </Tooltip>
                </ul>
            </div>
        </div>
    )
}


export default Conditions