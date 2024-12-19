import React from 'react'
import Navbar from '../../componenet/Navbar'
import ComingSlider from '../../componenet/ComingSlider'
import { MDBIcon } from 'mdb-react-ui-kit'

const ComingSoon = () => {
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div>
    <h3 style={{color:'red',margin:'50px',borderBottom:'2px solid black',fontFamily:'"IM Fell English SC", serif'}}>Coming Soon</h3>
    </div>
    <div>
    <ComingSlider/>
    </div>
    <div>
    <h3 style={{color:'red',margin:'50px',borderBottom:'2px solid black',fontFamily:'"IM Fell English SC", serif'}}>Contact Us</h3>
    <div style={{margin:'7px',display:'flex',justifyContent:'space-around'}}>
    <div>
    <MDBIcon fas icon="map-marker" />
    <h5>Address</h5>
    <p>
    Pixel Frames <br></br>
    Kannur<br></br>
    Kerala-670611<br></br>
    India
    </p>
    </div>

    <div>
    <MDBIcon fas icon="envelope" />
    <h5>Email</h5>
    <p>pixelframes@gmail.com
    </p>
    </div>

    <div>
    <MDBIcon fas icon="phone" />
    <h5>Telephone</h5>
    <p>+916738902736<br></br>
    +919373832738
    </p>
    </div>
    </div>


    </div>
    </div>
  )
}

export default ComingSoon