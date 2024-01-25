import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Carousel() {
  return (
    <>
      <div className="container bg-white mt-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2022/12/02.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2023/01/honda-125CC.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2023/01/01-18.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2023/01/01-9.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2022/10/Dawlance_enercon.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://afzalelectronics.pk/wp-content/uploads/2023/01/01-3.png" alt="" className='img-fluid w-25' />
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  )
}
