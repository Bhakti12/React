type HeaderType = {
    children : string
}

export const Heading = (props : HeaderType) =>{
    return ( <h2>{props.children}</h2> )
}