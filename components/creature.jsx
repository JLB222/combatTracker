export default function creature(props) {
    return (
        <div className="monster">
            <div className="bio">
                {/* <image src={props.img}></image> */}
                <span className="level">{props.level} </span>
                <span className="name">{props.name} </span>
                <span className="initiative">Initiative </span>
                <span className="eliteToggle">Elite </span>
                <span className="weakToggle">Weak </span>
            </div>
            <div className="tags">
                <span className="strengthMod">{props.abilityMods[0]} </span>
                <span className="dexterityMod">{props.abilityMods[1]} </span>
                <span className="constitutionMod">{props.abilityMods[2]} </span>
                <span className="intelligenceMod">{props.abilityMods[3]} </span>
                <span className="wisdomMod">{props.abilityMods[4]} </span>
                <span className="charismaMod">{props.abilityMods[5]} </span>
                <span>{props.tags}</span>
            </div>
            <div className="defenses">
                <span className="armorClass">AC: {props.defenses[0]} </span>
                <span className="saveFortitude">FORT: +{props.defenses[1]} </span>
                <span className="saveReflex">RFLX: +{props.defenses[2]} </span>
                <span className="saveWill">WILL: +{props.defenses[3]} </span>
            </div>
            <div className="skills">
                <span className="checkPerception">Perception: +{props.perception[0]} </span>

                <span className="checkAcrobatics">Acrobatics: +{props.skills[0]} </span>
                <span className="checkArcana">Arcana: +{props.skills[1]} </span>
                <span className="checkAthletics">Athletics: +{props.skills[2]} </span>
                <span className="checkCrafting">Crafting: +{props.skills[3]} </span>

                <span className="checkDeception">Deception: +{props.skills[4]} </span>
                <span className="checkDiplomacy">Diplomacy: +{props.skills[5]} </span>
                <span className="checkIntimidation">Intimidation: +{props.skills[6]} </span>
                <span className="checkMedicine">Medicine: +{props.skills[7]} </span>

                <span className="checkNature">Nature: +{props.skills[8]} </span>
                <span className="checkOccultism">Occultism: +{props.skills[9]} </span>
                <span className="checkPerformance">Performance: +{props.skills[10]} </span>
                <span className="checkReligion">Religion: +{props.skills[11]} </span>

                <span className="checkSociety">Society: +{props.skills[12]} </span>
                <span className="checkStealth">Stealth: +{props.skills[13]} </span>
                <span className="checkSurvival">Survival: +{props.skills[14]} </span>
                <span className="checkThievery">Thievery: +{props.skills[15]} </span>
            </div>
        </div>
        
    )
}