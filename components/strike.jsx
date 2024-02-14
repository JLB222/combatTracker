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
        setDamage(`--> ([${roll[1]}] + ${arr[2] + props.eliteWeakModifier}) = ${roll[0] + props.eliteWeakModifier}`)
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
        <span class="strikeType">({props.data[0][0]}) </span>
        <span class="strikeWeapon">{props.data[0][2]}: [</span>

        <span class="firstStrike" 
                    style={
                        (MAP === 1 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 1 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data[0][3] +props.eliteWeakModifier);
                        setMAP(1);
                    }}
        >+{props.data[0][3] + props.eliteWeakModifier}</span><span>/</span>
        
        <span class="secondStrike" 
                    style={
                        (MAP === 2 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 2 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data[0][4] + props.eliteWeakModifier);
                        setMAP(2);
                    }}
        >+{props.data[0][4] + props.eliteWeakModifier}</span><span>/</span>

        <span class="thirdStrike" 
                    style={
                        (MAP === 3 && props.eliteWeakModifier) ? { ...props.selectedStyle, ...mapStyle } 
                        : MAP === 3 ? mapStyle 
                        : props.eliteWeakModifier ? props.selectedStyle 
                        : null
                    }
                    onClick={() => {
                        handleCheckAttack(props.data[0][5] + props.eliteWeakModifier);
                        setMAP(3);
                    }}
        >+{props.data[0][5] + props.eliteWeakModifier}</span><span>]</span>

        <span class="strikeResult">{checkAttack}</span>

        <div className="strikeTags">[{props.data[1].join(", ") || "No weapon traits"}]</div>
        <div className="strikeDamage">
            {/* Basic strike that all creatures should have. */}
            <span class="damageNumber" 
                onClick={() => handleDamage(props.data[2])}>
                    <span class="dieNumber">{props.data[2][0]}</span>
                    <span class="dieSize">d{props.data[2][1]}+</span>
                    <span class="damageBonus" style={props.eliteWeakModifier ? props.selectedStyle : null}>{props.data[2][2] +props.eliteWeakModifier}</span>
                    <span class="damageResult"> {damage}</span>
            </span>
            <span class="damageType"> {props.data[2][3]} </span>
            {/* Conditional render of any rider effects, including but not limited to extra damage */}
            {props.data[3].length > 1 ? 
                <div>
                    {/* propsData3 is currently the location of rider damage or rider effect.  Damage should have a length of 4, hence 'length > 1'
                    the purpose of the propsData32 ternary is to conditionally render the '+ X' damage or nothing if the value is 0 (so that it doesn't display '1d6+0 evil' on the succubus for example) */}
                    <span class="riderDamage" onClick={() => handleRiderDamage(props.data[3])}> & {props.data[3][0]}d{props.data[3][1]}{props.data[3][2] ? <span>+ {props.data[3][2]}</span> : <span></span>} {riderDamage}</span>
                    <span> {props.data[3][3]}</span>
                </div>
            :props.data[3].length === 1 ? 
                <div class="riderEffect"> & {props.data[3][0]}</div>
            :null}
        </div>
    </div>
    )
}

export default Strike