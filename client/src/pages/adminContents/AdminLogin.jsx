import React, { useState } from 'react'
import '../../styles/Signup.css'
import { useNavigate } from 'react-router-dom'
import { addAdminLogin } from '../../../api'

function AdminLogin() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [adminData,setAdminData] = useState([])

    const Navigate = useNavigate()

    const loginSubmit = ()=>{
        console.log(email,password)
        addAdminLogin({email,password}).then((result)=>{
          setAdminData(result)

        })
        Navigate('/adminhome')


    }
  return (
    <div>
    <div className='main-container'>
    <div className='container'>
    <div className="container-content">
          <div className="container-login">
            <h2>LOGIN HERE !</h2>
          </div>
          <form onSubmit={loginSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Login</button>
          </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AdminLogin