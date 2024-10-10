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
        setRiderDamage(`--> [${roll[1]}] = ${roll[0]}`)
    }

    let mapStyle = {
        fontStyle: "italic",
        textDecorationLine: "underline"
    }

    const attackAffectedByEnfeebled = props.data.type === "Melee" && !props.data.weaponTraits.some(element => element === "Finesse")
    const damageAffectedByEnfeebled = props.data.type === "Melee" || (props.data.type === "Ranged" && props.data.weaponTraits.some(element => /Thrown:\s*\d+/.test(element)))

    return (
    <div className="strike">
        <span className="strikeType">({props.data.type}) </span>
        <span className="strikeWeapon">{props.data.weapon}: [</span>

        <span className="firstStrike clickable" 
                    style={
                        (MAP === 1 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 1 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.attackBonuses[0] +props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1]));
                        setMAP(1);
                    }}
        >+{props.data.attackBonuses[0] + props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1])}</span>
        <span>/</span>
        
        <span className="secondStrike clickable" 
                    style={
                        (MAP === 2 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 2 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.attackBonuses[1] + props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1]));
                        setMAP(2);
                    }}
        >+{props.data.attackBonuses[1] + props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1])}</span>
        <span>/</span>

        <span className="thirdStrike clickable" 
                    style={
                        (MAP === 3 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 3 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data.attackBonuses[2] + props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1]));
                        setMAP(3);
                    }}
        >+{props.data.attackBonuses[2] + props.eliteWeakModifier - (attackAffectedByEnfeebled ? props.abilityReduction[0] : props.abilityReduction[1])}</span>
        <span>]</span>

        <span className="strikeResult">{checkAttack}</span>

        <div className="strikeTags">[{props.data.weaponTraits.join(", ") || "No weapon traits"}]</div>
        <div className="strikeDamage">
            {/* Basic strike that all creatures should have. */}
            <span className="damageNumber clickable" onClick={() => handleDamage([props.data.diceNumber, props.data.diceSize, props.data.damageBonus - (damageAffectedByEnfeebled?props.abilityReduction[0]:0), props.data.damageType])}>
                    <span className="dieNumber">{props.data.diceNumber}</span><span>d</span>
                    <span className="dieSize">{props.data.diceSize}</span><span>+</span>
                    <span className="damageBonus" style={props.eliteWeakModifier ? props.selectedStyle : null}>
                        {props.data.damageBonus + props.eliteWeakModifier - (damageAffectedByEnfeebled?props.abilityReduction[0]:0)}
                    </span>
                    <span className="damageResult">{damage}</span>
            </span>
            <span className="damageType"> {props.data.damageType} </span>
            {/* Conditional render of any rider effects, including but not limited to extra damage */}
            {props.data.rider?.map((el,index) => el.type  === "extraDamage" ? 
                <div key={index}>
                    {/* the purpose of the ternary is to conditionally render the '+ X' damage or nothing if the value is 0 (so that it doesn't display '1d6+0 evil' on the succubus, for example) */}
                    <span className="riderDamage clickable" onClick={() => handleRiderDamage([el.riderDiceNumber, el.riderDiceSize, el.riderDamageBonus, el.riderDamageType])}> & {el.riderDiceNumber}d{el.riderDiceSize}{el.riderDamageBonus ? <span>+ {el.riderDamageBonus}</span> : <span></span>} {riderDamage}</span>
                    <span> {el.riderDamageType}</span>
                </div>
            : el.type === "effect" ? 
                <div key={index} className="riderEffect"> & {el.riderName}</div>
            : null)}
        </div>
    </div>
    )
}

export default Strike