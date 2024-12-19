import React from 'react'
import AdminNavbar from '../../componenet/AdminNavbar'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export const AdminHome = () => {
  return (
    <div>
    <AdminNavbar/>
    <div>
    <div style={{borderBottom:'2px solid black',marginTop:'30px',width:'300px',
      marginLeft:'100px',textAlign:'center'
    }}>
    <h5 style={{}}>Added Movies</h5>
    </div>
    <div>
    <MDBCard style={{ maxWidth: '540px' }}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <button style={{backgroundColor:'red', borderRadius:'10px', border:'none', color:'white'}}>Update</button>
            <button style={{backgroundColor:'red', borderRadius:'10px', border:'none', color:'white', marginLeft:'5px'}}>Delete</button>
          </MDBCardText>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  </div>
    </div>
    </div>
    
  )
}
