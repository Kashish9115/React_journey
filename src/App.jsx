import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);


 const [numberAllowed, setNumberAllowed]=useState(false)

  const [charAllowed, setCharAllowed]=useState(false)

   const [password, setPassword]=useState("")

const passwordGenerator=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if(numberAllowed) str+="0123456789";
if(charAllowed) str+="!@#$%^&*_-";

for (let i = 0; i <=length; i++) {
  let char=Math.floor(Math.random()*str.length+1);
  
  pass+=str.charAt(char);
}
setPassword(pass)



},
  [length,charAllowed,numberAllowed,setPassword])

 const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } ,[password])
 

useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'> 
        <h1 className=' text White text-center'>
             Password  Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
   <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef}/>
   <button  onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
    copy
   </button>
        </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={20} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
       <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=> !prev)}}/>
        <label htmlFor='numberInput'>Numbers </label>

      </div>
 <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((prev)=> !prev)}}/>
        <label htmlFor='charInput'>Char </label>

      </div>


    </div>
      </div>
          </>
  )
}

export default App
