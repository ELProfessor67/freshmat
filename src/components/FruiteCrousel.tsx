"use client"
import React, { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { IProduct, Icategory } from '@/types';

interface IProps
{
    categories: Icategory[]
}


const FruiteCrousel: FC<IProps> = ({categories}) => {
    return (
        <div className="row">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={7}
                navigation={false}
                pagination={{ clickable: true, enabled: false }}
                scrollbar={{ draggable: false, enabled: false }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {
                    categories.map((data:Icategory) => (
                        <SwiperSlide className='w-auto'>
                            < div className="col-xl-2" >
                                <a href="shop.html" className="category_item">
                                    <div className="icon">
                                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${data.image}`} alt="category" className="img-fluid w-100" />
                                    </div>
                                    <h4>{data.name}</h4>
                                </a>
                            </div >
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div >
    )
}

export default FruiteCrousel








