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
    <div>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          HOME
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          EDIT PROFILE
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          CHANGE PASSWORD
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          BOOKING HISTORY
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' onClick={userLogout}>
          LOGOUT
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default UserProNavbar