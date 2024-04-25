
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper h-[90vh] w-full"
            >
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.postimg.cc/L61c7q2H/banner-1.jpg)] bg-no-repeat bg-cover bg-center object-contain'>
                    <div className='flex justify-center items-center h-full text-center'>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-rancho text-white">
                            Pursue <span className='text-[#eeb161]'>your</span> passion
                            <br />
                            Create your <span className='text-[#eeb161]'>life</span>
                        </h1>
                    </div>
                </SwiperSlide>

                {/* ------Slide 2-------------- */}

                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.postimg.cc/sfqFwPF6/banner-2.jpg)] bg-no-repeat bg-cover bg-center object-contain'>
                    <div className='flex justify-center items-center h-full text-center'>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-rancho text-white">
                        <span className='text-[#eeb161]'>Founded</span> by artists and 
                        <br />
                        Supporting artists <span className='text-[#eeb161]'>since 1875</span>
                        </h1>
                    </div>
                </SwiperSlide>

                {/* ---------slide 3------------ */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.postimg.cc/90vv02t5/banner-3.webp)] bg-no-repeat bg-cover bg-center object-contain'>
                    <div className='flex justify-center items-center h-full text-center'>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-rancho text-white">
                        Experiences for the 
                        <br />
                        Artist in you
                        </h1>
                    </div>
                </SwiperSlide>

                {/* --------slide 4-------------- */}
                <SwiperSlide className='bg-[linear-gradient(45deg,rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://i.postimg.cc/WzDBszZw/banner-4.png)] bg-no-repeat bg-cover bg-center object-contain'>
                    <div className='flex justify-center items-center h-full text-center'>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-rancho text-white">
                            Pursue <span className='text-[#eeb161]'>your</span> passion
                            <br />
                            Create your <span className='text-[#eeb161]'>life</span>
                        </h1>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;