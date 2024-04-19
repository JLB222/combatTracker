import { useState } from "react"

function Conditions(props) {
    const [abilityReduction, setAbilityReduction] = useState([0,0,0,0])

    function increaseCondition(index) {
        setAbilityReduction((prev) => {
            // Create a copy of the previous state array using the spread operator
            const updatedArray = [...prev];
            // Increase the value at the specified index by 1
            updatedArray[index]++;
            // Return the updated array, which will replace the previous state
            return updatedArray;
        });
    };

    function decreaseCondition(index) {
        setAbilityReduction((prev) => {
            // Create a copy of the previous state array using the spread operator
            const updatedArray = [...prev];
            // Decrease the value at the specified index by 1
            updatedArray[index] = Math.max(0, updatedArray[index] - 1);
            // Return the updated array, which will replace the previous state
            return updatedArray;
        });
    };

    return (
        <div className="conditionContainer">
            <div className="loweredAbilities">
                <span>Lowered Abilities</span>
                <ul>
                    <li>Enfeebled 
                        <span className="enfeebledValue"> {abilityReduction[0]}</span>
                        <button className="enfeebledDown" onClick={() => decreaseCondition(0)}>
                            Down
                        </button>
                        <button className="enfeebledUp" onClick={() => increaseCondition(0)}>
                            Up
                        </button>
                    </li>
                    <li>Clumsy 
                        <span className="clumsyValue"> {abilityReduction[1]}</span>
                        <button className="clumsyDown" onClick={() => decreaseCondition(1)}>
                            Down
                        </button>
                        <button className="clumsyUp" onClick={() => increaseCondition(1)}>
                            Up
                        </button>
                    </li>
                    <li>Drained 
                        <span className="drainedValue"> {abilityReduction[2]}</span>
                        <button className="drainedDown" onClick={() => decreaseCondition(2)}>
                            Down
                        </button>
                        <button className="drainedUp" onClick={() => increaseCondition(2)}>
                            Up
                        </button>
                    </li>
                    <li>Stupefied 
                        <span className="stupefiedValue"> {abilityReduction[3]}</span>
                        <button className="stupefiedDown" onClick={() => decreaseCondition(3)}>
                            Down
                        </button>
                        <button className="stupefiedUp" onClick={() => increaseCondition(3)}>
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
                    <li>Concealed</li>
                    <li>Invisible</li>
                </ul>
            </div>
        </div>
    )
}


export default Conditions