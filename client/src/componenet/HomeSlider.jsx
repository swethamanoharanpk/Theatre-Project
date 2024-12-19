
import React, { useEffect, useRef, useState } from 'react';
import { getBannerData } from '../../api';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HomeSlider = () => {

    const [data,setData] = useState([])
    console.log("$$$$$$$$$$",data)

    useEffect(()=>{
        getBannerData().then((result)=>{console.log("------------------",result)
            setData(result)
        })
        

    },[])
    const userId = useSelector((info)=>info.userInfo.login)
  if(userId){
    var userToken = userId.token
  }

  return (
    <div>
    <Swiper
        cssMode={true}
        navigation={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}


        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {data.map((item)=>(
        <SwiperSlide key={item._id}>
        <img src={item.bannerImage} style={{width:'100%'}}></img>
        <div style={{position: 'absolute',
          top: '45%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontFamily:'"Niramit", sans-serif'}}>
          <h4 style={{fontFamily:'"IM Fell English SC", serif'}}>{item.title}</h4>
          <p>DIRECTOR : {item.director}</p>
          <p>STARRING : {item.staring}</p>
          <p>LANGUAGE : {item.language}</p>
          <button style={{fontFamily:'"IM Fell English SC", serif',backgroundColor:'red',
            color:'white',borderRadius:'5px',border:'none',padding:'7px',fontSize:'13px'}}>
          <Link to={userToken? '/displaymovie':'/login'} style={{textDecoration:'none',color:'inherit'}}>BOOK TICKET</Link></button>
        </div>
        
        </SwiperSlide>

      ))}
        </Swiper>
      </div>
  )
}

export default HomeSlider