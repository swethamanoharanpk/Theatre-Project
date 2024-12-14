import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Navbar from '../../componenet/Navbar';
import { getSingleMovieDetails } from '../../../api';

const MovieDetails = () => {

    const [singleMovie,setSingleMovie] = useState([])
    const {id} = useParams()
    console.log("Haiiiiiiiiiiii",id)
    useEffect(()=>{
        getSingleMovieDetails(id).then((result)=>{
            const movieData = Array.isArray(result) ? result : [result];
            console.log("________________",movieData)
            setSingleMovie(movieData)
        })

    },[id])
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div>
    {singleMovie.map((item,index)=>(
        <MDBCard style={{ maxWidth: '800px', margin:'100px'}} key={index}> 
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={item.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.movieName}</MDBCardTitle>
            <MDBCardText>
              <p>Language : {item.language}<br></br>
              Duration : {item.duration}<br></br>
              Genre : {item.genre}<br></br>
              Director : {item.director}<br></br>
              Production : {item.production}<br></br>
              Staring : {item.staring}</p>
            </MDBCardText>
            <MDBCardText style={{display:'flex'}}>
              <MDBBtn style={{ border:'1px solid black',color:'white', backgroundColor:'white',margin:'30px',boxShadow:'none'}}></MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    )
    )}
    </div>
    
    </div>
  )
}

export default MovieDetails


