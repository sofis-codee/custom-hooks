import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)

const increment =  ( value=1 ) => {
// console.log(value)
        setCounter ((current)=>current+value);
    }


const decrement = (value=1 ) => {
//si el contador llega a 0 termina, choca con el === 0
//   if (counter === 0) return;

    setCounter ((current)=>current-value);
}


const reset = ( ) => {
    setCounter (initialValue);
}
    return{
        counter,
        increment,
        decrement,
        reset,
    }
}