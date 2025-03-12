import {useState} from "react"

function Profile(props) {
    return (
        <div className="profile">
            <section className="misc">
                {/* <image src={props.img}></image> */}
                <span className="level">{props.level} </span>
                <span className="name">{props.name} </span>
                <span className="initiative">Initiative </span>
                <span className="eliteToggle clickable" style={props.elite?props.eliteWeakStyle:null} onClick={() => props.handleEliteToggle()}> Elite </span>
                <span className="weakToggle clickable" style={props.weak?props.eliteWeakStyle:null}onClick={() => props.handleWeakToggle()}> Weak </span>
            </section>
            <section className="abilityMods">
                <span className="strengthMod">STR: {props.abilityModStrength} </span>
                <span className="dexterityMod">DEX: {props.abilityModDexterity} </span>
                <span className="constitutionMod">CON: {props.abilityModConstitution} </span>
                <span className="intelligenceMod">INT: {props.abilityModIntelligence} </span>
                <span className="wisdomMod">WIS: {props.abilityModWisdom} </span>
                <span className="charismaMod">CHA: {props.abilityModCharisma} </span>
            </section>
            <section className="tags">
                <span>{props.tags}</span>
            </section>
            <section className="languages">
                <span>{props.languages}</span>
            </section>
            <section className="movementSpeeds">
                {Object.keys(props.speeds).map((el, index) => props.speeds[el] > 0 ?
                    <span className="moveType" key={index}>{el[0].toUpperCase() + el.slice(1)}: {props.speeds[el]}ft. </span>
                : null
                )}
            </section>
            <section className="recallKnowledge">
                <h4>Recall Knowledge DCs</h4>
                <ul>
                    <li>{props.recallKnowledgeInfo[0]}: {props.recallKnowledgeInfo[1]}</li>
                    <li>Unspecific Lore: {props.recallKnowledgeInfo[2]}</li>
                    <li>Specific Lore: {props.recallKnowledgeInfo[3]}</li>
                </ul>
            </section>
            {props.items ? 
                <section className="items">
                    <h4>Items:</h4>
                    <ul>
                        {props.items.map(el => 
                        <li>{el}</li>
                        )}
                    </ul>
                </section>
            :null
            }

        </div>
    )
};

export default Profile