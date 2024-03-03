import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: ""
  })

  const setData = (e)=>{
      const name = e.target.name;
      const value = e.target.value;

      setFormData((prev)=>{
        return{...prev, [name]: value}
      })
  }

  return (
    <div className='h-auto w-96 border-solid border-2 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 py-3 px-6 pb-5 rounded-xl bg-teal-600'>
      {/* <h1 className='text-slate-700 text-5xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Hello, Shivam !</h1> */}
      <h1 className='w-full text-center text-3xl my-2 text-white mb-8'>SignUp Form</h1>
      <input type="text" 
      className='w-full text-slate-700 outline-none border-2 border-transparent border-b-indigo-950 border-solid text-3xl p-2 rounded my-2 bg-transparent'
      placeholder='name'
      name='name'
      value={formData.name}
      onChange={setData}
      />
      <input type="email" 
      className='w-full text-slate-700 outline-none border-2 border-transparent border-b-indigo-950 border-solid text-3xl p-2 rounded my-2 bg-transparent'
      placeholder='email'
      name='email'
      value={formData.email}
      onChange={setData}
      />
      <input type="password" 
      className='w-full text-slate-700 outline-none border-2 border-transparent border-b-indigo-950 border-solid text-3xl p-2 rounded my-2 bg-transparent'
      placeholder='password'
      name='pass'
      value={formData.pass}
      onChange={setData}
      />
      <input type="password" 
      className='w-full text-slate-700 outline-none border-2 border-transparent border-b-indigo-950 border-solid text-3xl p-2 rounded my-2 bg-transparent'
      placeholder='confirm password'
      name='cpass'
      value={formData.cpass}
      onChange={setData}
      />
      <h1>Hello,{formData.name || "____"} ! You are Signing Up with {formData.email || "____"} and your password is {formData.pass || "____"}. Thanks....</h1>
    </div>    
  )
}

export default App
