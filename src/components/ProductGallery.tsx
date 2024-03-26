"use client";
import React, { useRef, useState,FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface IProps
{
    images: string[]
}

const ProductGallery:FC<IProps> = ({images}) => {
    const [current, setCurrent] = useState<number>(0);
    const sliderRef = useRef<SwiperRef | null>(null);

    const handleMouseEntr = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>,index:number):void => {
        e.preventDefault();
        sliderRef.current?.swiper?.slideTo(index);
        
    }

    return (
        <div className="product_zoom">
            <div className="exzoom">
                <div className="exzoom_img_box h-[416px] relative">
                    <ul className='exzoom_img_ul'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation={false}
                            pagination={{ clickable: true, enabled: false }}
                            scrollbar={{ draggable: false, enabled: false }}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                            onSlideChange={(data) => setCurrent(data.realIndex)}
                            ref={sliderRef}
                        >

                            {
                                images.map((url: string, index: number) => (
                                    <SwiperSlide>
                                        <li><img className="zoom img-fluid w-100" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`} id={`${index}`} alt="product" /></li>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>


                    </ul>
                </div>
                <div className="exzoom_nav">
                    <p className="exzoom_nav_inner !overflow-x-auto">
                        {
                            images.map((url, index) => (
                                <span className={`${current == index ? "current" : ''} hover:!border-[#05A845]`} onMouseEnter={(e) => handleMouseEntr(e,index)}>
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`} width="60"/>
                                </span>
                            ))
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductGallery