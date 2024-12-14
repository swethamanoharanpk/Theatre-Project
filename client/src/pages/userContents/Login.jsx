import React, { useState } from 'react'
import '../../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { addUserLogin } from '../../../api'
import { useDispatch } from 'react-redux'

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()


  const dispatch = useDispatch()

  

  const loginSubmit = (e)=>{
    e.preventDefault()
    console.log("ttttttttttttttttttttttttttttttt");
    
    addUserLogin({email,password},dispatch).then((result)=>{
      console.log("responseeeeee",result)
      
    })
    navigate('/')


  }
  return (
    <div className='main-container'>
    <div className='container'>
    <div className="container-content">
          <div className="container-login">
            <h2>LOGIN HERE !</h2>
            <p>If you are an existing member, use your email to login</p>
          </div>
          <form onSubmit={loginSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account?<Link to={'/signup'}>SignUp</Link></p>
          
        </div>
    </div>
    </div>
  )
}

export default Login