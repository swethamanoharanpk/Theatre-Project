import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { getComingMovieDetails } from '../../api';


const ComingSlider = () => {

    const [data,setData] = useState([])


    useEffect(()=>{
        getComingMovieDetails().then((result)=>{
            setData(result)

        })

    },[])
  return (
    <div style={{marginLeft:'90px'}}>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
  
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
      {data.map((movie)=>(
        <SwiperSlide key={movie._id}>
        <img src={movie.image}></img>
        </SwiperSlide>

      ))}
      
        
        
      </Swiper>

    </div>
  )
}

export default ComingSlider