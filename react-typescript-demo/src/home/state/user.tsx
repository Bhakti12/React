import { useState } from "react"

type authUser = {
    name : string,
    email : string
}

export const User = () => {
    const [user , AuthUser] = useState<authUser>({} as authUser)

    const handleLogin = () => {
        AuthUser({
            name : 'Bhakti',
            email : 'sanghanibhakti922@gmail.com'
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}