import { useState } from "react";

function Strike(props) {
    const [checkAttack, setCheckAttack] = useState("")
    //Dealing with Multi-Attack Penalty (MAP)
    const [MAP, setMAP] = useState(0)
    
    function handleCheckAttack(num) { 
        let roll = props.d20(); 
        setCheckAttack(` + ${roll} = ${roll + num}`);
    }

    return (
    <div className="strike">
        <span class="strikeWeapon">{props.data[0][1]}: [</span>

        <span class="firstStrike" 
                    style={MAP === 1 ? props.selectedStyle : null}
                    onClick={() => {
                        handleCheckAttack(props.data[0][2] +props.eliteWeakModifier);
                        setMAP(1);
                    }}
        >+{props.data[0][2] + props.eliteWeakModifier}</span><span>/</span>
        
        <span class="secondStrike" 
                    style={MAP === 2 ? props.selectedStyle : null}
                    onClick={() => {
                        handleCheckAttack(props.data[0][3] + props.eliteWeakModifier);
                        setMAP(2);
                    }}
        >+{props.data[0][3] + props.eliteWeakModifier}</span><span>/</span>

        <span class="thirdStrike" 
                    style={MAP === 3 ? props.selectedStyle : null}
                    onClick={() => {
                        handleCheckAttack(props.data[0][4] + props.eliteWeakModifier);
                        setMAP(3);
                    }}
        >+{props.data[0][4] + props.eliteWeakModifier}</span><span>]</span>

        <span class="strikeResult">{checkAttack}</span>

        <div className="strikeTags">[{props.data[1].join(", ")}]</div>
        <div className="strikeDamage">{props.data[5]}</div>
    </div>
    )
}

export default Strike