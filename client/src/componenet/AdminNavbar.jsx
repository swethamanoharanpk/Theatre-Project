import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
  

const AdminNavbar = () => {
  return (
    <div>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid style={{display:'flex',justifyContent:'center'}}>
          <MDBNavbarBrand href='#' style={{fontSize:'15px'}}>
           HOME
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{fontSize:'15px'}}>
          <Link to={'/movie'}>ADD MOVIES</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{fontSize:'15px'}}>
          <Link to={'/banner'}>ADD BANNER</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{fontSize:'15px'}}>
          <Link to={'/schedule'}>ADD SCHEDULE</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{fontSize:'15px'}}>
           LOGOUT
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default AdminNavbar