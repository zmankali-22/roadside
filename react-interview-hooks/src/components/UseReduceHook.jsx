import { useReducer } from "react"

export default function UseReduceHook() {

    const countReducer = (state, action) => {
        switch(action.type) {
            case 'increment': {
                return {
                    ...state,
                    count: state.count + action.payload
                }
            }
            case 'decrement': {
                return {
                    ...state,
                    count: state.count - action.payload
                }
            }
            default: {
                return state
            }
        }
    }


    const initialState = {
        count: 0
    }

const [state, dispatch]  =  useReducer(countReducer, initialState)
  return (
    <div>
        <h3>Use Reducer Hook</h3>
        <p>Count: {state.count}</p>
        <button onClick ={() => dispatch({type: 'increment', payload: 1})}>Increse</button>
        <button onClick ={() => dispatch({type: 'increment', payload: 5})}>Increse</button>
        

        <button onClick ={() => dispatch({type: 'decrement', payload: 1})}>Decrese</button>
        <button onClick ={() => dispatch({type: 'decrement', payload: 5})}>Decrese</button>
    </div>
  )
}
