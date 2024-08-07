import React, { useRef, useState } from 'react';
import './Testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className='Testimonial-Section'>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[FreeMode]}
        className="swiper mySwiper"
      >
        {/* <div className='Testimonial-Cards-Wrapper'> */}
          <div className='swiper-wrapper Testimonial-Cards'>
          <SwiperSlide>
            <div className='Testimonial'>
              <img src="/Assets/Vector (1).svg" alt="cardimage" className='Card-Img' />
              <p className='Testimonial-Description'>Beyond cost, vehicle safety and convenient access are my main parking concerns.</p>
              <div className='Details'>
                <h3 className='Name'>Shubham Tiwari</h3>
                <p className='City'>Pune</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Testimonial'>
              <img src="/Assets/Vector (1).svg" alt="cardimage" className='Card-Image' />
              <p className='Testimonial-Description'>Navigating to parking lots in Delhi using maps often leads to inaccuracies. A reliable parking locator is needed.</p>
              <div className='Details'>
                <h3 className='Name'>Deepanshu Aggarwal</h3>
                <p className='City'>New Delhi</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Testimonial'>
              <img src="/Assets/Vector (1).svg" alt="cardimage" className='Card-Image' />
              <p className='Testimonial-Description'>The hunt for parking makes shopping and errands exhausting. Easier access to parking would greatly simplify daily tasks.</p>
              <div className='Details'>
                <h3 className='Name'>Apeksha Salvi</h3>
                <p className='City'>Mumbai</p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='Testimonial'>
              <img src="/Assets/Vector (1).svg" alt="cardimage" className='Card-Image' />
              <p className='Testimonial-Description'>A parking app for cars is essential, as two-wheeler spots are available, but four-wheeler spaces are hard to find.</p>
              <div className='Details'>
                <h3 className='Name'>Ayush</h3>
                <p className='City'>Ghaziabad</p>
              </div>
            </div>
            </SwiperSlide>
            
          </div>
        {/* </div> */}
        </Swiper>
    </div>
  )
}

export default Testimonial
