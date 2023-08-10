type personList = {
   names: {
        first : string,
        Last : string
    }[]
}

export const PersonList = (props:personList) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2 key={name.first}>{name.first} {name.Last}</h2>
                )
            })}
        </div>
    )
}