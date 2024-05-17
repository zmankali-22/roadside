
import './App.css'
import Counter from './components/Counter'
import DataFetch from './components/DataFetch'
import DebounceInput from './components/DebounceInput'
import WindowSize from './components/WindowSize'

function App() {

  return (
    <>
    <Counter />

    <h5>Build a custom hook to efficiently track and update  window dimensions dynamically</h5>

    <WindowSize />

    <h5>Build a custom hook to fetch data from a given URL and handle loading state and error as well </h5>

    <DataFetch />

    <h5>Build a custom hook that delays updating a value until a specified time has passed after the last change</h5>

    <DebounceInput />

    <h5>Build a custom hook that stores and retrieves data from the browser local storage</h5>

    </>
  )
}

export default App
