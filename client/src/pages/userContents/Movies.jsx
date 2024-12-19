import React, { useEffect, useState } from 'react'
import { getMovieData } from '../../../api';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import Navbar from '../../componenet/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Movies = () => {


  const userId = useSelector((info)=>info.userInfo.login)
  if(userId){
    var userToken = userId.token
  }

  console.log(userToken)


    const [movieData,setMovieData] = useState([])

    console.log("movieDetails" , movieData)

    useEffect(()=>{
        getMovieData().then((result)=>{
            setMovieData(result)
        })

    },[])

    
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div style={{padding:'40px',display:'flex',fontFamily:'"IM Fell English SC", serif'}}>
    {movieData.map((item)=>(
        <MDBCard style={{width:'13rem',height:'20rem',marginRight:'20px'}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay' style={{height:'40rem'}}>
        <MDBCardImage src={item.image} fluid alt='...' style={{height:'17rem'}}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody style={{height:'3.45rem',color:'grey',width:'100%'}}>
        <MDBCardTitle style={{width:'100%',fontSize:'20px',textAlign:'center'}}>{item.movieName}</MDBCardTitle>
        <MDBBtn href='#' style={{width:'100%',borderRadius: '0',backgroundColor:'red',margin:'0',fontSize:'13px'}}>
        <Link to={userToken? `/moviedetails/${item._id}`:'/login'} style={{textDecoration:'none',color:'inherit'}}>Book Tickets</Link></MDBBtn>
      </MDBCardBody>
    </MDBCard>
        
    ))}
    
    </div>
    </div>
  )
}

export default Movies