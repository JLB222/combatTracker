import {useState} from "react"

function Special(props) {
    const [vulnDamage, setVulnDamage] = useState("")
    function handleVulnDamage(arr) {
        let roll = props.damageRoll(arr)
        setVulnDamage(`--> [${roll[1]}] = ${roll[0]}`)
    }
    
    const [specialDamage, setSpecialDamage] = useState("")
    function handleSpecialDamage(arr) {
        let roll = props.damageRoll(arr)
        setSpecialDamage(`--> [${roll[1]}] = ${roll[0] + props.eliteWeakModifier}`)
    }

    return (
        <div className="Special">

            {props.specials.map(el => 
            
            el.type === "Activity" ? 
                <div className="specialAbility activity">
                    <div className="specialAbilityName">{el.name} | Actions: {el.numberOfActions}</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                </div>

            : el.type === "Passive" ?
                <div className="specialAbility passive">
                    <div className="specialAbilityName">{el.name} {el.dc && <span style={props.eliteWeakModifier?props.selectedStyle:null}> | DC: {el.dc + props.eliteWeakModifier}</span>}</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                    {el.diceNumber ? 
                    <div onClick={() => handleSpecialDamage([el.diceNumber, el.diceSize, el.damageBonus, el.damageType])}>
                        {el.diceNumber}d{el.diceSize}
                        {specialDamage} {el.damageType}
                    </div>
                    : null}
                </div>
            
            : el.type === "Aura" ?
                <div className="specialAbility aura">
                    <div className="specialAbilityName">{el.name} | Radius: {el.auraSize} ft. {el.dc && <span style={props.eliteWeakModifier?props.selectedStyle:null}> | DC: {el.dc + props.eliteWeakModifier}</span>}</div>
                    <div>[{el.traits.join(", ")}]</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                    {el.results ? 
                        <ul>
                            <li>{el.results[0]}</li>
                            <li>{el.results[1]}</li>
                            <li>{el.results[2]}</li>
                            <li>{el.results[3]}</li>
                        </ul>
                    : null}
                </div>

            : el.type === "Demon Vulnerability" ?
                <div className="specialAbility demonVuln">
                    <div className="specialAbilityName">{el.name}</div>
                    <div onClick={() => handleVulnDamage(el.damageTaken)}>{el.damageTaken[0]}d{el.damageTaken[1]}{vulnDamage} {el.damageTaken[3]}</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                </div>

            : el.type === "Reaction" ?
                <div className="specialAbility reaction"> 
                    <div className="specialAbilityName">{el.name} | {el.type}</div>
                    {el.description ? 
                    <div className="specialAbilityDescription"><span>{el.description}</span></div>
                    :null}
                    <div className="specialAbilityDescription trigger">Trigger:</div><span>{el.trigger}</span>
                    <div className="specialAbilityDescription effect">Effect:</div><span>{el.effect}</span>
                    {el.options ?
                        <ul>
                            {el.options.map(el =>
                                <li>{el}</li>
                            )}
                        </ul> 
                    : null
                    }
                </div>

            : el.type === "Attack" ?
                <div className="specialAbility attack">
                    <div className="specialAbilityName">{el.name} | Actions: {el.numberOfActions}</div>
                    {el.requirements ? <div>Requirements: {el.requirements}</div> : null}
                    <div className="specialAbilityDescription">{el.description}</div>
                    <div onClick={() => handleSpecialDamage([el.diceNumber, el.diceSize, el.damageBonus, el.damageType])}>
                        {el.diceNumber}d{el.diceSize}
                        {props.eliteWeakModifier > 0 ? 
                            <span style={props.eliteWeakModifier?props.selectedStyle:null}>+2</span> 
                        :props.eliteWeakModifier < 0 ?
                            <span style={props.eliteWeakModifier?props.selectedStyle:null}>-2</span>
                        :null
                        }
                        {specialDamage} {el.damageType}
                    </div>
                </div>
            : null
            )}

        </div>
    )
}

export default Special