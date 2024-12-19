import React, { useEffect, useState } from 'react'
import UserProNavbar from '../../componenet/UserProNavbar'
import Navbar from '../../componenet/Navbar'
import { useSelector } from 'react-redux'
import {getUserLogin, updateUserDetails} from '../../../api'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'

const Profile = ()=> {

  const navigate = useNavigate()

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [phone,setPhone] = useState()

  const [userData,setUserData] = useState([])

  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const userId = useSelector((logDetails)=>logDetails.userInfo.login)
  console.log("iddddddddddddddd",userId)
  if(userId){
    var id = userId.id
  }
  console.log(id)
  useEffect(()=>{
    getUserLogin(id).then((result)=>{
      const loginData = Array.isArray(result) ? result: [result]
      console.log("userrrrrr secondddddddddddd",loginData)
      setUserData(loginData)
    })

  },[id])

  const updateSingleUser = ()=>{
    updateUserDetails({name,email,password,phone},id).then((result)=>{
      console.log("updateeeeeeeeeeeee",result)
    })
    navigate('/login')

    

  }
  
  return (
    <div style={{backgroundColor:'grey',width:'100%',height:'100vh'}}>
    <Navbar/>
    <div style={{height:'400px',width:'70%',display:'flex', justifyContent:'space-around',backgroundColor:'black',color:'white',margin:'70px',marginLeft:'200px'}}>
    <div style={{paddingRight: '20px', borderRight: '1px solid yellow'}}>
    <h4 style={{textAlign:'center',padding:'20px',fontFamily:'"IM Fell English SC", serif',fontSize:'17px'}}>YOUR PROFILE DETAILS</h4>
    {userData.map((item,index)=>(
      <div key={index} style={{fontFamily:'"Niramit", sans-serif'}}>
      <h6>Your Name</h6>
    <p style={{color:'cyan'}}>{item.name}</p>
    <h6>Your Email</h6>
    <p style={{color:'cyan'}}>{item.email}</p>
    <h6>Your Mobile</h6>
    <p style={{color:'cyan'}}>{item.phone}</p>


    <MDBBtn onClick={toggleOpen} color='warning' style={{fontFamily:'"IM Fell English SC", serif'}}>UPDATE</MDBBtn>
    <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent style={{backgroundColor:'black',border: '1px solid white'}}>
          <MDBModalHeader>
            <MDBModalTitle>UPDATE</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody style={{color:'white'}}>
        <form style={{display:'flex',flexDirection:'column',padding:'60px'}}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder={item.name} onChange={(e)=>{setName(e.target.value)}}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder={item.email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder={'**********'} onChange={(e)=>{setPassword(e.target.value)}}/>
          <label htmlFor="phone">Phone number</label>
          <input type="number" id="phone" placeholder={item.phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          </form>

          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='danger' onClick={toggleOpen}>
              Close
            </MDBBtn>
            <MDBBtn color='warning' onClick={updateSingleUser}>UPDATE</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>



    </div>

    ))}


    </div>
    <div>
    <UserProNavbar/>
    </div>
    </div>
    </div>
    
  )
}

export default Profile