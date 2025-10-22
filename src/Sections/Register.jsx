import React, { useState } from 'react'

export default function Register() {
  let [email, setEmail] = useState("")
  let [name, setName] = useState("")
  let [password, setPassword] = useState("")
  let [confirmPassword, setConfirmPassword] = useState("")
  let [info, setInfo] = useState("")

  const register = async () => {
    if(!name || !email || !password || !confirmPassword) console.error("Error: Missing fields");
    
    const user = {
      name,
      email,
      password
    }

    let res = fetch("http://localhost:3000/addUser", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    res.then(()=>{
      setInfo("User added")
      console.log("Done");
      
    }) .catch((e)=>{
      console.error(e);
    })
  }
  return (
    <section className='flex items-center mt-10'>
        <div className='border-2 border-black w-[400px] h-[500px] rounded-xl p-4 mx-auto  my-auto'>
            <h2 className='text-center font-semibold tracking-wider text-xl mb-3 text-emerald-900'>Register</h2>
            <form action="" className='flex flex-col'>
                <input type="text" name="" id="" placeholder='Name' className='input' onChange={(e) => setName(e.target.value)}/>
                <input type="email" name="" id="" placeholder='email' className='input' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="" id="" placeholder='password' className='input' onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" name="" id="" placeholder='confirm password' className='input' onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type='submit' className='bg-emerald-400/45 p-4 rounded-xl text-xl capitalize mt-17 cursor-pointer hover:bg-emerald-400/80 hover:tracking-wider transition-all duration-500' onClick={(e) => {e.preventDefault();register()}}>submit</button>
            </form>
            <p className='text-black'>{info}</p>
            <p className='pt-2'>Already have an account? <a href="#" className='text-purple-700 hover:font-bold transition-all duration-500'>Login</a></p>
        </div>
    </section>
  )
}
