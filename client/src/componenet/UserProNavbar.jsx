import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import {deleteToken} from '../Redux/UserSlice'
import { useNavigate } from 'react-router-dom';

  

const UserProNavbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function userLogout() {
        dispatch(deleteToken())
        navigate('/')


    }
  return (
    <div style={{fontFamily:'"IM Fell English SC", serif',marginTop:'7px'}}>
    <MDBNavbar light bgColor='black'color='white'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className="text-white" style={{fontSize:'17px',marginRight:'40px'}}>
          BOOKING HISTORY
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' onClick={userLogout} className="text-white" style={{fontSize:'14px',marginLeft:'90px'}}>
          LOGOUT
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default UserProNavbar