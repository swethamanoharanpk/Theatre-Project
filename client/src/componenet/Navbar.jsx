
import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{fontFamily:'"IM Fell English SC", serif'}}>
    <MDBNavbar light bgColor='danger' >
        <MDBContainer fluid>
          <MDBNavbarBrand style={{color:'white',fontSize:'30px'}}>
          pixelframes
          </MDBNavbarBrand>
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <MDBNavbarBrand href='#' style={{color:'white',fontSize:'15px'}}>
          <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>HOME</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{color:'white',fontSize:'15px'}}>
          <Link to={'/displaymovie'} style={{textDecoration:'none',color:'inherit'}}>MOVIES</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{color:'white',fontSize:'15px'}}>
          <Link to={'/comingsoon'} style={{textDecoration:'none',color:'inherit'}}>COMING SOON</Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#' style={{color:'white',fontSize:'15px'}}>
          <Link to={'/comingsoon'} style={{textDecoration:'none',color:'inherit'}}>CONTACT US</Link>
          </MDBNavbarBrand>
          </div>
          <MDBNavbarBrand href='#'>
          <Link to={'/login'}><MDBIcon fas icon="user-circle" size='lg' style={{color:'white'}}/></Link>
          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
          <Link to={'/adminlogin'}><MDBIcon fas icon="sign-in-alt" style={{color:'white'}}/></Link>
          </MDBNavbarBrand>
          

          </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Navbar