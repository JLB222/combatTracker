function Conditions(props) {
    return (
        <div className="conditionContainer">
            <div className="loweredAbilities">
                <span>Lowered Abilities</span>
                <ul>
                    <li>Enfeebled</li>
                    <li>Clumsy</li>
                    <li>Drained</li>
                    <li>Stupefied</li>
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