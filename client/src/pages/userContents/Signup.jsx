import React, { useState } from 'react'
import '../../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { postUserSignup } from '../../../api'

function Signup() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [phone,setPhone] = useState('')

  const [userData,setUserData] = useState('')

  const navigate = useNavigate()

  const userSignup = ()=>{
    postUserSignup({name,email,password,phone}).then((result)=>{
      setUserData(result)
      

    })
    navigate('/login')

  }

  return (
    <div className='main-container'>
    <div className='container'>
    <div className="container-content">
          <div className="container-login">
            <h2>SIGN UP !</h2>
            <p>If not a member, request for the same by filling the following details.</p>
          </div>
          <form onSubmit={userSignup}>
            <label htmlFor="name">name</label>
            <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <label htmlFor="phone">phone number</label>
            <input type="number" id="phone" onChange={(e)=>{setPhone(e.target.value)}}/>
            <button type="submit">signup</button>
          </form>
          <p>Already have an account? <Link to={'/login'}>Log In </Link></p>
          
        </div>
    </div>
    </div>
  )
}

export default Signup