type OscarProps = {
    children : React.ReactNode
}

//ReactNode : type that represents a react element , an array of react elements 
//or a string , number or boolean.

export const Oscar = (props:OscarProps) => {
    return <div>{props.children}</div>
}