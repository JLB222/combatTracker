function Special(props) {
    return (
        <div className="Special">
            {props.specials.map(el => el.type === "Activity" ? 
            <div className="specialAbility">
                <p class="specialAbilityName">{el.name} | Actions: {el.numberOfActions}</p>
                <p>{el.description}</p>
            </div>

            : el.type = "passive" ?
            <div className="specialAbility">
                <p class="specialAbilityName">{el.name}</p>
                <p>{el.description}</p>
            </div>
            
            : null)
            }

        </div>
    )
}

export default Special