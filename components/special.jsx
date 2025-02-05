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
                <div className="specialAbility activity" key={el.name}>
                    <div className="specialAbilityName">{el.name} | Actions: {el.numberOfActions}</div>
                    {el.requirement && <div className="specialAbilityRequirement reqs">Requirement: </div>}
                    {el.requirement && <div>{el.requirement}</div>}
                    <div className="specialAbilityDescription">{el.effect || el.description}</div>
                    {el.diceNumber ? 
                    <div className="clickable" onClick={() => handleSpecialDamage([el.diceNumber, el.diceSize, el.damageBonus, el.damageType])}>
                        {el.diceNumber}d{el.diceSize}
                        {specialDamage} {el.damageType}
                    </div>
                    : null}
                </div>

            : el.type === "Passive" ?
                <div className="specialAbility passive" key={el.name}>
                    <div className="specialAbilityName">{el.name} {el.dc && <span style={props.eliteWeakModifier?props.eliteWeakStyle:null}> | DC: {el.dc + props.eliteWeakModifier}</span>}</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                    {el.diceNumber ? 
                    <div className="clickable" onClick={() => handleSpecialDamage([el.diceNumber, el.diceSize, el.damageBonus, el.damageType])}>
                        {el.diceNumber}d{el.diceSize}
                        {specialDamage} {el.damageType}
                    </div>
                    : null}
                </div>
            
            : el.type === "Aura" ?
                <div className="specialAbility aura" key={el.name}>
                    <div className="specialAbilityName">{el.name} | Radius: {el.auraSize} ft. {el.dc && <span style={props.eliteWeakModifier?props.eliteWeakStyle:null}> | DC: {el.dc + props.eliteWeakModifier}</span>}</div>
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
                <div className="specialAbility demonVuln" key={el.name}>
                    <div className="specialAbilityName">{el.name}</div>
                    <div className="clickable" onClick={() => handleVulnDamage(el.damageTaken)}>{el.damageTaken[0]}d{el.damageTaken[1]}{vulnDamage} {el.damageTaken[3]}</div>
                    <div className="specialAbilityDescription">{el.description}</div>
                </div>

            : el.type === "Reaction" ?
                <div className="specialAbility reaction" key={el.name}> 
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
            : el.type === "Affliction" ? 
                <div className="specialAbility affliction" key={el.name}>
                    <div className="afflictionName">{el.name} | DC: {+el.dc && <span style={props.eliteWeakModifier?props.eliteWeakStyle:null}> {+el.dc + props.eliteWeakModifier}</span>}</div>
                    <div className="afflictionTraits">[{el.traits}]</div>
                    <div className="afflictionDuration">Max Duration: {el.maxDuration}</div>
                    <div className="afflictionStages">{el.stages.map((el,i) => <div><span class="afflictionStageNumber">{`Stage ${i+1}`}</span>{`: ${el}`}</div>)}</div>
                </div>
            : null
            )}

        </div>
    )
}

export default Special