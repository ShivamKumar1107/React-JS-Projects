import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Inc() {
    if (count == 20) {
      alert("You have reached the maximum value !");
    }
    else{
    setCount(count + 1)
    }
  }
  function Dec() {
    if (count == 0) {
      alert("You have reached the minimum value !");
    }
    else{
    setCount(count - 1)
    }
  }

  return (
    <>
      <button>{count}</button>
      <br />
      <button onClick={Inc}>Increase ({count})</button>
      <button onClick={Dec}>Decrease ({count})</button>
    </>
  )
}

export default App
