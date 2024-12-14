
import React, { useEffect, useRef, useState } from 'react';
import { getBannerData } from '../../api';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const HomeSlider = () => {

    const [data,setData] = useState([])
    console.log("$$$$$$$$$$",data)

    useEffect(()=>{
        getBannerData().then((result)=>{console.log("------------------",result)
            setData(result)
        })
        

    },[])

  return (
    <div>
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      {data.map((item)=>(
        <SwiperSlide key={item._id}>
        <img src={item.bannerImage} style={{width:'100%'}}></img>
        <p>{item.director}</p>
        </SwiperSlide>

      ))}
        </Swiper>
      </div>
  )
}

export default HomeSlider