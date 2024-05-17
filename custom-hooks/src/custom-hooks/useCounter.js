import { useState } from "react";


 export default function useCounter(number = 0, step = 1) {
    const [count, setCount] = useState(number)
    const increment = () => setCount(count + step)
    const decrement = () => setCount(count - step)
    const reset = () => setCount(number)
    return {
        count,
        increment,
        decrement,
        reset,
    }
}