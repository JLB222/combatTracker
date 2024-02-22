import { useState } from "react";

function Strike(props) {
    const [checkAttack, setCheckAttack] = useState("")
    //Dealing with Multi-Attack Penalty (MAP)
    const [MAP, setMAP] = useState(0)
    const [damage, setDamage] = useState("")
    const [riderDamage, setRiderDamage] = useState("")

    function handleCheckAttack(num) { 
        let roll = props.d20(); 
        setCheckAttack(` + ${roll} = ${roll + num}`);
    }
    function handleDamage(arr) {
        let roll = props.damageRoll(arr)
        setDamage(`--> [${roll[1]}] + ${arr[2] + props.eliteWeakModifier} = ${roll[0] + props.eliteWeakModifier}`)
    }
    function handleRiderDamage(arr) {
        let roll = props.damageRoll(arr)
        setRiderDamage(` = ${roll[0]}`)
    }

    let mapStyle = {
        fontStyle: "italic",
        textDecorationLine: "underline"
    }

    
    return (
    <div className="strike">
        <span class="strikeType">({props.data.type}) </span>
        <span class="strikeWeapon">{props.data.weapon}: [</span>

        <span class="firstStrike" 
                    style={
                        (MAP === 1 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 1 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.multiAttackPenalty[0] +props.eliteWeakModifier);
                        setMAP(1);
                    }}
        >+{props.data.multiAttackPenalty[0] + props.eliteWeakModifier}</span><span>/</span>
        
        <span class="secondStrike" 
                    style={
                        (MAP === 2 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 2 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.multiAttackPenalty[1] + props.eliteWeakModifier);
                        setMAP(2);
                    }}
        >+{props.data.multiAttackPenalty[1] + props.eliteWeakModifier}</span><span>/</span>

        <span class="thirdStrike" 
                    style={
                        (MAP === 3 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 3 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.multiAttackPenalty[2] + props.eliteWeakModifier);
                        setMAP(3);
                    }}
        >+{props.data.multiAttackPenalty[2] + props.eliteWeakModifier}</span><span>]</span>

        <span class="strikeResult">{checkAttack}</span>

        <div className="strikeTags">[{props.data.weaponTraits.join(", ") || "No weapon traits"}]</div>
        <div className="strikeDamage">
            {/* Basic strike that all creatures should have. */}
            <span class="damageNumber" 
                onClick={() => handleDamage([props.data.diceNumber, props.data.diceSize, props.data.damageBonus, props.data.damageType])}>
                    <span class="dieNumber">{props.data.diceNumber}</span>
                    <span class="dieSize">d{props.data.diceSize}+</span>
                    <span class="damageBonus" style={props.eliteWeakModifier ? props.selectedStyle : null}>{props.data.damageBonus +props.eliteWeakModifier}</span>
                    <span class="damageResult"> {damage}</span>
            </span>
            <span class="damageType"> {props.data.damageType} </span>
            {/* Conditional render of any rider effects, including but not limited to extra damage */}
            {props.data.rider.type === "extraDamage" ? 
                <div>
                    {/* the purpose of the ternary is to conditionally render the '+ X' damage or nothing if the value is 0 (so that it doesn't display '1d6+0 evil' on the succubus, for example) */}
                    <span class="riderDamage" onClick={() => handleRiderDamage([props.data.rider.riderDiceNumber, props.data.rider.riderDiceSize, props.data.rider.riderDamageBonus, props.data.rider.riderDamageType])}> & {props.data.rider.riderDiceNumber}d{props.data.rider.riderDiceSize}{props.data.rider.riderDamageBonus ? <span>+ {props.data.rider.riderDamageBonus}</span> : <span></span>} {riderDamage}</span>
                    <span> {props.data.rider.riderDamageType}</span>
                </div>
            : props.data.rider ? 
                <div class="riderEffect"> & {props.data.rider.type}</div>
            : null}
        </div>
    </div>
    )
}

export default Strike