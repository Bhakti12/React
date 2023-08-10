import { useState } from "react"

export const Count = () => {
    
    const [count,setState] = useState({count : 4 , theme : 'blue'})
    const ccount = count.count;
    const theme = count.theme;

    function decrement(){
        setState(prevCount => {
            return { ...prevCount, count : prevCount.count - 1 }
        })
    }

    function increment(){
        setState(prevCount => {
            return { ...prevCount, count : prevCount.count + 1 }
        })
    }

    return ( 
        <div>
            <button onClick={decrement}>-</button>
            <span>{ccount}</span>
            <span>{theme}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}