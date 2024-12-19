import { useState, useRef } from "react"

function Defenses(props) {
    const [health, setHealth] = useState(props.HP)
    const damageInputRef = useRef(null); // Create a ref for the input element that will change HP
    const shieldDamageInputRef = useRef(null);

    const [fortSave, setFortSave] = useState(props.defenseFortSave)
    const [rflxSave, setRflxSave] = useState(props.defenseRflxSave)
    const [willSave, setWillSave] = useState(props.defenseWillSave)

    function handleSaveFort(num) { let roll = props.d20(); setFortSave(`+ ${roll} = ${roll + num}`)}
    function handleSaveRflx(num) { let roll = props.d20(); setRflxSave(`+ ${roll} = ${roll + num}`)}
    function handleSaveWill(num) { let roll = props.d20(); setWillSave(`+ ${roll} = ${roll + num}`)}

    function handleHealth() {
        const inputValue = damageInputRef.current.value;
        if (inputValue) {
            setHealth(health - parseInt(inputValue, 10));  
        }
        damageInputRef.current.value = ""  //resets the input after the user clicks
    }
    
    const [shieldHealth, setShieldHealth] = (useState(props.hasShield ? props.shieldStats.shieldHP : null))

    const [shieldUp, setShieldUp] = useState(false)
    function handleShieldRaise() {
        setShieldUp(!shieldUp)
    }
    function handleShieldHealth() {
        const shieldInputValue = shieldDamageInputRef.current.value;
        if (shieldInputValue) {
            setShieldHealth(shieldHealth - parseInt(shieldInputValue, 10));  
        }
        shieldDamageInputRef.current.value = ""  //resets the input after the user clicks
    }

    const eliteHPModifier = (level) => {
        switch(true) {
            case (level <= 1): return (props.elite ? 10:0) + (props.weak ? -10:0)
            case (level >=2 && level <= 4): return (props.elite ? 15:0) + (props.weak ? -15:0)
            case (level >=5 && level <= 19): return (props.elite ? 20:0) + (props.weak ? -20:0)
            case (level >= 20): return (props.elite ? 30:0) + (props.weak ? -30:0)
            default: 'Error.  What level did you enter?'
        }
    }
    
    const shieldModifier = shieldUp ? 2:0

return (
    <div className="defenses">
        <div className="hitPoints">HP:
            <span> {health + eliteHPModifier(props.level) - (props.abilityReduction[2] * Math.max(props.level, 1))}</span>/
            <span style={
                        (props.abilityReduction[2] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[2] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
            }>
                {props.HP + eliteHPModifier(props.level) - (props.abilityReduction[2] * Math.max(props.level, 1))}
            </span>
            <span>
                <input ref={damageInputRef}/>
                <button onClick={handleHealth}>Change</button>
            </span>
        </div>
        <div className="armorClass" onClick={props.hasShield ? () => handleShieldRaise() : null}>
            <span>AC: </span>
            <span style={
                        (props.abilityReduction[1] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[1] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
            }>
                {props.defenseAC + props.eliteWeakModifier + shieldModifier - props.abilityReduction[1]}
            </span>
            {props.hasShield ? <span className="clickable"> {shieldUp ? "Shield Raised" : "Raise Shield"}</span> : null}
        </div>
        {props.hasShield ? 
            <div className="shieldHealth">
                <span>Shield HP: {shieldHealth} / {props.shieldStats.shieldHP} </span>
                <span><input ref={shieldDamageInputRef}/><button onClick={handleShieldHealth}>Change</button></span>
                <div>Broken Threshold:{props.shieldStats.shieldBrokenThreshold} </div>
                <div>Hardness:{props.shieldStats.shieldHardness} </div>
            </div> 
        : null}
        <div className="saveFortitude clickable" onClick= {() => handleSaveFort(props.defenseFortSave + props.eliteWeakModifier - props.abilityReduction[2])}>
            <span>FORT: </span>
            <span style={
                        (props.abilityReduction[2] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[2] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
            }> 
                {props.defenseFortSave + props.eliteWeakModifier - props.abilityReduction[2]}
            </span>
            <span> ({fortSave})</span>
        </div>
        <div className="saveReflex clickable" onClick= {() => handleSaveRflx(props.defenseRflxSave + props.eliteWeakModifier - props.abilityReduction[1])}>
            <span>RFLX: </span>
            <span style={
                        (props.abilityReduction[1] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[1] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
            }>
                {props.defenseRflxSave + props.eliteWeakModifier - props.abilityReduction[1]}
            </span>
            <span> ({rflxSave})</span>
        </div>
        <div className="saveWill clickable" onClick= {() => handleSaveWill(props.defenseWillSave + props.eliteWeakModifier - props.abilityReduction[3])}>
            <span>WILL: </span>
            <span style={
                        (props.abilityReduction[3] > 0 && props.eliteWeakModifier) ? { ...props.abilityReductionStyle, ...props.eliteWeakStyle }
                        : props.abilityReduction[3] > 0 ? props.abilityReductionStyle
                        : props.eliteWeakModifier ? props.eliteWeakStyle 
                        : null
            }> 
                {props.defenseWillSave + props.eliteWeakModifier - props.abilityReduction[3]}
            </span>
            <span> ({willSave})</span>
        </div>

        {props.defenseImmunities ? 
            <div>
                <span>Immunities: </span> 
                <span>{props.defenseImmunities.join(", ")}</span>
            </div>
        :null}

        {props.defenseResistances ?
            <div>
                <span>Resistances: </span>
                <span>{props.defenseResistances.join(", ")}</span>
            </div>
        :null}

        {props.defenseWeaknesses ? 
            <div>
                <span>Weaknesses: </span>
                <span>{props.defenseWeaknesses.join(", ")}</span>
            </div>
        :null}

    </div>

)}

export default Defenses