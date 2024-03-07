import {useState} from "react"

function Profile(props) {
    return (
        <div className="profile">
            <div className="misc">
                {/* <image src={props.img}></image> */}
                <span className="level">{props.level} </span>
                <span className="name">{props.name} </span>
                <span className="initiative">Initiative </span>
                <span className="eliteToggle" style={props.elite?props.selectedStyle:null} onClick={() => props.handleEliteToggle()}> Elite </span>
                <span className="weakToggle" style={props.weak?props.selectedStyle:null}onClick={() => props.handleWeakToggle()}> Weak </span>
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
        </div>
    )
};

export default Profile