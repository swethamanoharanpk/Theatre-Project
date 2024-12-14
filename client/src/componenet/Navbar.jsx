
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <Link to={'/'}>HOME</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/displaymovie'}>MOVIES</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          COMING SOON
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          CONTACT US
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/login'}>LOGIN</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/adminlogin'}>ADMIN LOGIN</Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Navbar