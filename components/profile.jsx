import {useState} from "react"

function Profile(props) {
    return (
        <div className="profile">
            <div className="misc">
                {/* <image src={props.img}></image> */}
                <span className="level">{props.level} </span>
                <span className="name">{props.name} </span>
                <span className="initiative">Initiative </span>
                <span className="eliteToggle clickable" style={props.elite?props.eliteWeakStyle:null} onClick={() => props.handleEliteToggle()}> Elite </span>
                <span className="weakToggle clickable" style={props.weak?props.eliteWeakStyle:null}onClick={() => props.handleWeakToggle()}> Weak </span>
                <span>{props.instanceId}</span>
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
            <div className="languages">
                <span>{props.languages}</span>
            </div>
            <div className="movementSpeeds">
                {Object.keys(props.speeds).map((el, index) => props.speeds[el] > 0 ?
                    <span class="moveType" key={index}>{el[0].toUpperCase() + el.slice(1)}: {props.speeds[el]}ft. </span>
                : null
                )}
            </div>
            <div className="recallKnowledge">
                <div>Recall Knowledge DCs</div>
                <div>{props.recallKnowledgeInfo[0]}: {props.recallKnowledgeInfo[1]}</div>
                <div>Unspecific Lore: {props.recallKnowledgeInfo[2]}</div>
                <div>Specific Lore: {props.recallKnowledgeInfo[3]}</div>
            </div>
            {props.items ? 
                <div className="items">
                    <span>Items: {props.items.join(", ")}</span>
                </div>
            :null
            }

        </div>
    )
};

export default Profile