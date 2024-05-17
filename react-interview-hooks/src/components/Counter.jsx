import {  useState } from "react"
import useCustomEffect from "../hooks/UseCustomEffect"

export default function Counter() {

    const [ count, setCount] = useState(0)
    // const [ count1, setCount1] = useState(0)

    useCustomEffect(() => {
        console.log("Effect Triggered", count)
        return () => {
            console.log("Cleanup")
        }
    }, [])

    console.log("rerendeed")

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <>
    
    <div>Counter: {count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}
