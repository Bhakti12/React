type PersonType = {
    name : {
        firstName : string,
        lastName : string
    }
}

export const Person = (props : PersonType) => {
    return ( <div>{props.name.firstName} {props.name.lastName}</div> )
}