"use client"
import {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid'
import Strike from './strike.jsx'
import Skills from './skills.jsx'

export default function creature(props) {

    const [elite, setElite] = useState(false)
    const [weak, setWeak] = useState(false)
    const [shieldUp, setShieldUp] = useState(false)

    // const [health, setHealth] = useState(props.defenses[4])
    // const damageInputRef = useRef(null); // Create a ref for the input element that will change HP
    const [uniqueId] = useState(uuidv4()); // Generate a unique ID for each instance of creature
    // function handleHealth() {
    //     const inputValue = damageInputRef.current.value;
    //     if (inputValue) {
    //         setHealth(health - parseInt(inputValue, 10));  
    //     }
    //     damageInputRef.current.value = ""  //resets the input after the user clicks
    // }

    // const [fortSave, setFortSave] = useState(props.defenses[1])
    // const [rflxSave, setRflxSave] = useState(props.defenses[2])
    // const [willSave, setWillSave] = useState(props.defenses[3])
    
    // const [checkPerception, setCheckPerception] = useState(props.perception[0])
    
    // function d20() {
    //     let result = Math.floor((Math.random() * 20) + 1)
    //     return result
    // }
    // function damageRoll(arr) {  //format for array is: [numberOfDamageDice, sizeOfDamageDice, flatDamageBonus, damageType]
    //     let result = []
    //     for (let i = 0; i < arr[0]; i++) {
    //       result.push(Math.floor((Math.random() * arr[1]) + 1))
    //     }
    //     //console.log(`${arr[0]}d${arr[1]}+${arr[2]}:`, result)  //print the results in console to confirm the rolls are legit if necessary
    //     return [result.reduce((a,b) => a+b, arr[2]), result]
    // }

    // function handleSaveFort(num) { let roll = d20(); setFortSave(`+ ${roll} = ${roll + num}`)}
    // function handleSaveRflx(num) { let roll = d20(); setRflxSave(`+ ${roll} = ${roll + num}`)}
    // function handleSaveWill(num) { let roll = d20(); setWillSave(`+ ${roll} = ${roll + num}`)
    // }
    // function handleCheckPerception(num) { let roll = d20(); setCheckPerception(`+ ${roll} = ${roll + num}`);}

    // function handleEliteToggle() {
    //     if (weak) {
    //         setWeak(false)
    //     }
    //     setElite(!elite)
    // }
    // function handleWeakToggle() {
    //     if (elite) {
    //         setElite(false)
    //     }
    //     setWeak(!weak)
    // }
    // function handleShieldRaise() {
    //     setShieldUp(!shieldUp)
    // }

    // let hiddenStyle = {
    //     display : "none"
    // }
    // let selectedStyle = {
    //     fontWeight: "bold",
    //     backgroundColor: "black",
    //     color: "white"
    // }

    // const eliteWeakModifier = (elite ? 2:0) + (weak ? -2:0)
    // const eliteHPModifier = (level) => {
    //     switch(true) {
    //         case (level <= 1): return (elite ? 10:0) + (weak ? -10:0)
    //         case (level >=2 && level <= 4): return (elite ? 15:0) + (weak ? -15:0)
    //         case (level >=5 && level <= 19): return (elite ? 20:0) + (weak ? -20:0)
    //         case (level >= 20): return (elite ? 30:0) + (weak ? -30:0)
    //         default: 'Error.  What level did you enter?'
    //     }
    // }
    // const shieldModifier = shieldUp ? 2:0
    return (
        <div className="monster" id={uniqueId}>
            <div className="column1">
                <div className="profile">
                    {/* <image src={props.img}></image> */}
                    <span className="level">{props.level} </span>
                    <span className="name">{props.name} </span>
                    <span className="initiative">Initiative </span>
                    <span className="eliteToggle" style={elite?selectedStyle:null} onClick={() => handleEliteToggle()}> Elite </span>
                    <span className="weakToggle" style={weak?selectedStyle:null}onClick={() => handleWeakToggle()}> Weak </span>
                </div>
                <div className="abilityMods">
                    <span className="strengthMod">STR: {props.abilityModStrength} </span>
                    <span className="dexterityMod">DEX: {props.abilityModDexterity} </span>
                    <span className="constitutionMod">CON: {props.abilityModConstitution} </span>
                    <span className="intelligenceMod">INT: {props.abilityModIntelligence} </span>
                    <span className="wisdomMod">WIS: {props.abilityModWisdom} </span>
                    <span className="charismaMod">CHA: {props.abilityModCharisma} </span>
                </div>
                <div className="tags">
                    <span>{props.tags}</span>
                </div>
            </div>
            {/* <div className="column2">
                <div className="defenses">
                    <div className="hitPoints">HP: 
                    <span>{health + eliteHPModifier(props.level)}</span>/
                    <span style={eliteWeakModifier?selectedStyle:null}>{props.defenses[4] + eliteHPModifier(props.level)}</span>
                    <span><input ref={damageInputRef}/><button onClick={handleHealth}>Change</button></span>
                </div>
                    <div className="armorClass" onClick={() => handleShieldRaise()}>
                    <span>AC: </span>
                    <span style={eliteWeakModifier?selectedStyle:null}>{props.defenses[0] + eliteWeakModifier + shieldModifier}</span>
                    <span> {shieldUp ? "Shield Raised" : "Raise Shield"}</span>
                </div>
                    <div className="saveFortitude" onClick= {() => handleSaveFort(props.defenses[1] + eliteWeakModifier)}>
                    <span>FORT: </span>
                    <span style={eliteWeakModifier?selectedStyle:null}> {props.defenses[1] + eliteWeakModifier}</span>
                    <span> ({fortSave})</span>
                </div>
                    <div className="saveReflex" onClick= {() => handleSaveRflx(props.defenses[2] + eliteWeakModifier)}>
                    <span>RFLX: </span>
                    <span style={eliteWeakModifier?selectedStyle:null}> {props.defenses[2] + eliteWeakModifier}</span>
                    <span> ({rflxSave})</span>
                </div>
                    <div className="saveWill" onClick= {() => handleSaveWill(props.defenses[3] + eliteWeakModifier)}>
                    <span>WILL: </span>
                    <span style={eliteWeakModifier?selectedStyle:null}> {props.defenses[3] + eliteWeakModifier}</span>
                    <span> ({willSave})</span>
                </div>
                </div>
            </div>
            <div className="column3">
                <div className="skills">
                    <div className="checkPerception" 
                        onClick= {() => handleCheckPerception(+props.perception[0] + eliteWeakModifier)}>
                        <span>Perception: </span>
                        <span style={eliteWeakModifier?selectedStyle:null}>{props.perception[0] + eliteWeakModifier}</span> 
                        <span> ({checkPerception})</span>
                        
                    </div>
                    <Skills
                        data = {props.skills}
                        eliteWeakModifier = {eliteWeakModifier}
                        hiddenStyle = {hiddenStyle}
                        selectedStyle = {selectedStyle}
                        d20={d20}
                    />         
                </div>
            </div>
            <div className="column4">
                <div className="Strikes">
                    {props.strikes.map((element, index) => (
                        <Strike 
                            key={index} 
                            data={element}
                            eliteWeakModifier = {eliteWeakModifier}
                            selectedStyle = {selectedStyle}
                            d20={d20}
                            damageRoll={damageRoll}
                        />
                    ))}
                </div>
            </div> */}

        </div>
        
    )
}