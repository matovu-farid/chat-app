import { useState } from "react"
import createUser from "../server/db/user"

export default function SignUp (){
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  
  const handleOnClick = ()=>{
    if(!name|| !username) return
     fetch('/api/users/new',{method: 'POST', body: JSON.stringify({name,username})})
  }
 return <div className="w-full h-screen">
  <div className="mx-auto my-auto">

  <input type="text" className="border-none p-2 w-2/12" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
  <input type="text" className="border-none p-2 w-2/12" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
  <button className="bg-slate-900 text-white" onClick={handleOnClick}>Signup</button>
  </div>
 </div>
}