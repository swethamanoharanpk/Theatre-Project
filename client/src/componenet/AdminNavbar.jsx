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
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
           HOME
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/movie'}>ADD MOVIES</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/banner'}>ADD BANNER</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
           UPDATE MOVIES
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
           LOGOUT
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default AdminNavbar