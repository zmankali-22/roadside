
import './App.css'
import Counter from './components/Counter'
import UseEffectHook from './components/UseEffectHook'
import UseImperativeHandleHook from './components/UseImperativeHandleHook'
import UseMemoAndUseCallbackHook from './components/UseMemoAndUseCallbackHook'
import UseReduceHook from './components/UseReduceHook'

function App() {

  return (
    <>
     <p>Hello world</p>
     {/* <UseEffectHook /> */}
     {/* <Counter /> */}
     {/* <UseReduceHook />
     < */}
     {/* <UseMemoAndUseCallbackHook /> */}
     <UseImperativeHandleHook />
    </>
  )
}

export default App
