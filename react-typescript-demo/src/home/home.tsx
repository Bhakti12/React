type HomeProps = {
    name : string,
    messageCount? : number,
    isLoggedIn : boolean
}

export const Home = (props: HomeProps) => {
    return (
        <div>
            {props.isLoggedIn
            ? `welcome ${props.name},${props.messageCount}`
            : `welcome guest`}
        </div>
    )
}

//difference between interface and type in typescript : 
