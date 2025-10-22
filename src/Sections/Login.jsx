import React, { useState } from 'react'
import CompanySignIn from '../Components/CompanySignIn'
import axios from 'axios'

export default function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [info, setInfo] = useState("")

  const login = async () => {
     if(!email || !password) console.error("Error: Missing fields");
    
    const user = {
      email: email,
      password: password
    }

    let res = await fetch("https://products-backend-qdbl.onrender.com/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })

    let data = await res.json()

    setInfo(data.message)
    console.log(data.message);
    // localStorage.setItem("token", data.token)
    localStorage.getItem("token")
    console.log(data.token);
    
    
  }

  return (
    <section className='flex items-center mt-10'>
        <div className='border-2 border-black w-[400px] h-[450px] rounded-xl p-4 mx-auto  my-auto'>
            <h2 className='text-center font-semibold tracking-wider text-xl mb-3 text-emerald-900'>Login</h2>
            <form action="/api/register" method='POST' className='flex flex-col'>
                <input type="email" name="" id="" placeholder='email' className='input' onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" name="" id="" placeholder='password' className='input' onChange={(e) => setPassword(e.target.value)}/>
                <p className='text-black'>{info}</p>
                <button type='submit' className='bg-emerald-400/45 p-4 rounded-xl text-xl capitalize mt-10 cursor-pointer hover:bg-emerald-400/80 hover:tracking-wider transition-all duration-500' onClick={(e) => {e.preventDefault(); login()}}>submit</button>
            </form>
            <p className='pt-2'>want to create an account? <a href="#" className='text-purple-700 hover:font-bold transition-all duration-500'>Register</a></p>
            <div className='mt-3'>
                <p>or continue with</p>
                <div className="flex w-[60%] justify-between mt-3">
                  <CompanySignIn icon='/company-icons/facebook.svg'/>
                  <CompanySignIn icon='/company-icons/google.svg'/>
                  <CompanySignIn icon='/company-icons/github.svg'/>
                  <CompanySignIn icon='/company-icons/microsoft.svg'/>
                </div>
            </div>
        </div>
    </section>
  )
}


// push the restaurant data into a mongoDB - (5 to 6)
