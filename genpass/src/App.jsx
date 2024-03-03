import {useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numA, setNumA] = useState(false)
  const [charA, setCharA] = useState(false)

  const genPass = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq"
    if(numA) str+= "0123456789"
    if(charA) str+= "!@#$%^&*()_~"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numA,charA,setPassword])

  useEffect(()=>{
    genPass()
  },[length, numA,charA,genPass])

  const refPass = useRef()


  
  return (
    <>
      <h1 className='text-white'>Password generator</h1>
      <input type="text" className='text-gray-700' value={password} readOnly ref={refPass}/>
      <button onClick={()=>{
        window.navigator.clipboard.writeText(password)
        alert(password + " copied to clipboard !")
      }}>Copy</button>
      <br/>
      <input type="range" value={length} min={8} max={25} onChange={(e)=>{
        setLength(e.target.value)
      }}/>
      <label>Range: {length} </label><br/>
      <input type="checkbox" defaultValue={numA} onChange={()=>{
        setNumA((prev => !prev))
      }}/>
      <label>Numbers</label><br/>
      <input type="checkbox" defaultValue={charA} onChange={()=>{
        setCharA((prev => !prev))
      } }/>
      <label>Characters</label><br/>
    </>
  )
}

export default App
