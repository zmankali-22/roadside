import useCounter from "../custom-hooks/useCounter"

export default function Counter() {

const {reset, increment, decrement, count} =useCounter(100, 2)
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
