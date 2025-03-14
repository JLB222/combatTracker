import { useState } from "react"
import Tooltip from "./tooltip"

function Conditions(props) {
    return (
        <div className="conditionContainer">
            <div className="loweredAbilities">
                <span>Lowered Abilities</span>
                <ul>
                    <li>
                        <Tooltip text="You're physically weakened. Enfeebled always includes a value. When you are enfeebled, you take a status penalty equal to the condition value to Strength-based rolls and DCs, including Strength-based melee attack rolls, Strength-based damage rolls, and Athletics checks.">
                            Enfeebled
                        </Tooltip>
                        <span className="enfeebledValue"> {props.abilityReduction[0]}</span>
                        <button className="enfeebledDown" onClick={() => props.decreaseCondition(0)}>
                            Down
                        </button>
                        <button className="enfeebledUp" onClick={() => props.increaseCondition(0)}>
                            Up
                        </button>
                    </li>
                    <li>
                        <Tooltip text="Your movements become clumsy and inexact. Clumsy always includes a value. You take a status penalty equal to the condition value to Dexterity-based checks and DCs, including AC, Reflex saves, ranged attack rolls, and skill checks using Acrobatics, Stealth, and Thievery.">
                            Clumsy
                        </Tooltip> 
                        <span className="clumsyValue"> {props.abilityReduction[1]}</span>
                        <button className="clumsyDown" onClick={() => props.decreaseCondition(1)}>
                            Down
                        </button>
                        <button className="clumsyUp" onClick={() => props.increaseCondition(1)}>
                            Up
                        </button>
                    </li>
                    <li>
                        <Tooltip text="Your health and vitality have been depleted as you've lost blood, life force, or some other essence. Drained always includes a value. You take a status penalty equal to your drained value on Constitution-based checks, such as Fortitude saves. You also lose a number of Hit Points equal to your level (minimum 1) times the drained value, and your maximum Hit Points are reduced by the same amount. For example, if you become drained 3 and you're a 3rd-level character, you lose 9 Hit Points and reduce your maximum Hit Points by 9. Losing these Hit Points doesn't count as taking damage.  Each time you get a full night's rest, your drained value decreases by 1. This increases your maximum Hit Points, but you don't immediately recover the lost Hit Points.">
                            Drained
                        </Tooltip>
                        <span className="drainedValue"> {props.abilityReduction[2]}</span>
                        <button className="drainedDown" onClick={() => props.decreaseCondition(2)}>
                            Down
                        </button>
                        <button className="drainedUp" onClick={() => props.increaseCondition(2)}>
                            Up
                        </button>
                    </li>
                    <li>
                        <Tooltip text="Your thoughts and instincts are clouded. Stupefied always includes a value. You take a status penalty equal to this value on Intelligence-, Wisdom-, and Charisma-based checks and DCs, including Will saving throws, spell attack modifiers, spell DCs, and skill checks that use these attribute modifiers. Any time you attempt to Cast a Spell while stupefied, the spell is disrupted unless you succeed at a flat check with a DC equal to 5 + your stupefied value.">
                            Stupefied 
                        </Tooltip>
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
                        text="You can't see. All normal terrain is difficult terrain to you. You can't detect anything using vision. You automatically critically fail Perception checks that require you to be able to see, and if vision is your only precise sense, you take a –4 status penalty to Perception checks. You are immune to visual effects. Blinded overrides Dazzled.">
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