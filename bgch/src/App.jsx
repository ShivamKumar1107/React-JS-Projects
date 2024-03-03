import { useState } from "react"
import LoaderF from './Components/loader'

function App() {

  const [color,setColor] = useState("aqua")

  return (
    <div className="w-screen h-screen" style={{backgroundColor: color}}>
      <LoaderF lColor={color}/>
      <div className="fixed bg-transparent w-auto h-12 bottom-12 rounded-full left-1/2 -translate-x-1/2 flex justify-center gap-4 text-slate-400">
      <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"white"}} onClick={() => setColor("white")}>White</button>
        <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
        <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Green</button>
        <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"orange"}} onClick={() => setColor("orange")}>Orange</button>
        <button className="w-32 h-12 rounded-full outline-none py-1 px-1 shadow-sm shadow-black" style={{backgroundColor:"black"}} onClick={() => setColor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
