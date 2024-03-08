import {useState} from "react"

function Special(props) {
    const [vulnDamage, setVulnDamage] = useState("")
    function handleDamage(arr) {
        let roll = props.damageRoll(arr)
        setVulnDamage(`--> [${roll[1]}] = ${roll[0]}`)
    }
    return (
        <div className="Special">

            {props.specials.map(el => 
            
            el.type === "Activity" ? 
                <div className="specialAbility">
                    <div class="specialAbilityName">{el.name} | Actions: {el.numberOfActions}</div>
                    <div class="specialAbilityDescription">{el.description}</div>
                </div>

            : el.type === "Passive" ?
                <div className="specialAbility">
                    <div class="specialAbilityName">{el.name}</div>
                    <div class="specialAbilityDescription">{el.description}</div>
                </div>
            
            : el.type === "Aura" ?
                <div className="specialAbility">
                    <div class="specialAbilityName">{el.name} | Radius: {el.auraSize} ft. {el.dc && <span> | DC: {el.dc}</span>}</div>
                    <div>[{el.traits.join(", ")}]</div>
                    <div class="specialAbilityDescription">{el.description}</div>
                    {el.results ? 
                        <div>
                            <li>{el.results[0]}</li>
                            <li>{el.results[1]}</li>
                            <li>{el.results[2]}</li>
                            <li>{el.results[3]}</li>
                        </div>
                    : null}
                </div>

            : el.type === "Demon Vulnerability" ?

                <div className="specialAbility">
                    <div class="specialAbilityName">{el.name}</div>
                    <div onClick={() => handleDamage(el.damageTaken)}>{el.damageTaken[0]}d{el.damageTaken[1]}{vulnDamage} {el.damageTaken[3]}</div>
                    <div class="specialAbilityDescription">{el.description}</div>
                </div>
            : null
            )}

        </div>
    )
}

export default Special