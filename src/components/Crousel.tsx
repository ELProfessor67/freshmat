"use client"
import React, { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface Props
{
    
}

const Crousel: FC<Props> = () => {
    return (
        <div className="row">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: false, enabled: false }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="single_slider" style={{ background: 'url(/images/slider_3.jpg)' }}>
                        <div className="single_slider_text">
                            <h3>Organic 100% Genuine Product</h3>
                            <h1>Tasty & <span>Healthy</span> Organic Food</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not random text classNameical Latin
                                literature.</p>
                            <a className="common_btn" href="shop_details.html">shop now <span></span></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single_slider" style={{ background: 'url(/images/slider_3.jpg)' }}>
                        <div className="single_slider_text">
                            <h3>Organic 100% Genuine Product</h3>
                            <h1>Tasty & <span>Healthy</span> Organic Food</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not random text classNameical Latin
                                literature.</p>
                            <a className="common_btn" href="shop_details.html">shop now <span></span></a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single_slider" style={{ background: 'url(/images/slider_3.jpg)' }}>
                        <div className="single_slider_text">
                            <h3>Organic 100% Genuine Product</h3>
                            <h1>Tasty & <span>Healthy</span> Organic Food</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not random text classNameical Latin
                                literature.</p>
                            <a className="common_btn" href="shop_details.html">shop now <span></span></a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    )
}

export default Crousel