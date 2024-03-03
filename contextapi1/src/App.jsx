import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-slate-700 text-5xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Hello, Shivam !</h1>
    </>
  )
}

export default App
