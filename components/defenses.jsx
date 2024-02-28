import { useState, useRef } from "react"



function Defenses(props) {
    const [health, setHealth] = useState(props.HP)
    const damageInputRef = useRef(null); // Create a ref for the input element that will change HP

    const [shieldUp, setShieldUp] = useState(false)
    function handleShieldRaise() {
        setShieldUp(!shieldUp)
    }

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
            <span> {health + eliteHPModifier(props.level)}</span>/
            <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.HP + eliteHPModifier(props.level)}</span>
            <span><input ref={damageInputRef}/><button onClick={handleHealth}>Change</button></span>
        </div>
        <div className="armorClass" onClick={() => handleShieldRaise()}>
            <span>AC: </span>
            <span style={props.eliteWeakModifier?props.selectedStyle:null}>{props.defenseAC + props.eliteWeakModifier + shieldModifier}</span>
            <span> {shieldUp ? "Shield Raised" : "Raise Shield"}</span>
        </div>
        <div className="saveFortitude" onClick= {() => handleSaveFort(props.defenseFortSave + props.eliteWeakModifier)}>
            <span>FORT: </span>
            <span style={props.eliteWeakModifier?props.selectedStyle:null}> {props.defenseFortSave + props.eliteWeakModifier}</span>
            <span> ({fortSave})</span>
        </div>
        <div className="saveReflex" onClick= {() => handleSaveRflx(props.defenseRflxSave + props.eliteWeakModifier)}>
            <span>RFLX: </span>
            <span style={props.eliteWeakModifier?props.selectedStyle:null}> {props.defenseRflxSave + props.eliteWeakModifier}</span>
            <span> ({rflxSave})</span>
        </div>
        <div className="saveWill" onClick= {() => handleSaveWill(props.defenseWillSave + props.eliteWeakModifier)}>
            <span>WILL: </span>
            <span style={props.eliteWeakModifier?props.selectedStyle:null}> {props.defenseWillSave + props.eliteWeakModifier}</span>
            <span> ({willSave})</span>
        </div>
        <div>
            <span>Immunities: </span>
            <span>{props.defenseImmunities.join(", ")}</span>
        </div>
        <div>
            <span>Resistances: </span>
            <span>{props.defenseResistances.join(", ")}</span>
        </div>
        <div>
            <span>Weaknesses: </span>
            <span>{props.defenseWeaknesses.join(", ")}</span>
        </div>
    </div>

)}

export default Defenses