import { useSearchParams } from "react-router-dom"

export default function Products() {

  const [searchParams, setSearchParams]  = useSearchParams()

  const updateParams = (newParams) => {
   const searchEntries =  Object.fromEntries(searchParams.entries())
   const newSearchParams = {...searchEntries,...newParams}
   setSearchParams(newSearchParams)
  }
  return (
    <div>
        <h2>Colors</h2>
        <button onClick={() => updateParams({color:"red"})} >Red</button>
        <button onClick={() => updateParams({color:"white"})}>White</button>

        <h2>Size</h2>
        <button onClick={() => updateParams({size : 10})} >10</button>
        <button onClick={() => updateParams({size : 11})}>11</button>
        <button>12</button>
    </div>
  )
}
