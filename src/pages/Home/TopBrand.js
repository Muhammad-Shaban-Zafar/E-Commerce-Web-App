import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function TopBrand() {
    return (
        <>
            <div className="container">
                <h5 className='text-dark fw-bold'>TOP BRANDS</h5>

                <div className='my-5'>
                    <Swiper

                        slidesPerView={1}
                        spaceBetween={10}
                        // pagination={{
                        //     clickable: true,
                        // }}

                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 6,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        SAMSUNG
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        HAIER
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        VIVO
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        DAWLANCE
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        GREE
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        ASIA
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        KENWOOD
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        PEL
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row text-center">
                                <div className="col">
                                    <h2 className='fw-bold text-primary'>
                                        TECHNO
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    )
}
