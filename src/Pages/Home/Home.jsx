import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import CraftCard from '../../Components/CraftCard/CraftCard';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Animation - 1714310323427.json";
import { FaRegCalendarAlt } from 'react-icons/fa';
const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://canvas-creations-server.vercel.app/')
            // fetch('https://canvas-creations-server.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setAllData(data);
            })
    }, [])

    return (
        <div className='bg-[url(https://www.pngmart.com/files/13/Elegant-Pattern-Transparent-PNG.png)]'>

            {/* ------------Banner Slide Hare----------- */}

            <Banner />


            {/* ------------All art and craft section hare-------------- */}
            <div className='mt-20 container mx-auto px-4'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <h1 data-aos="fade-left" data-aos-duration="1500" className='font-rancho text-6xl text-center text-[#FF76CE]'>Arts adn Crafts</h1>
                    <p
                        data-aos="fade-right" data-aos-duration="1500"
                        className='md:w-[700px] text-center'>
                        "Unleash your creativity with our Arts and Crafts collection! From painting and sculpting to crafting and beyond, discover endless possibilities to express yourself and bring your imagination to life."
                    </p>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>

                    {
                        allData.length == 0 ?
                            <div className='col-span-full flex justify-center items-center'>
                                <Lottie animationData={groovyWalkAnimation} />
                            </div>
                            :
                            allData.map(data => <CraftCard data={data} key={data._id} />)

                    }
                </div>
            </div>


            {/* ----------------Exhibitions & Events------------ */}

            <div className='mt-24 px-4'>
                <div className='container mx-auto'>
                    <div className='flex justify-center items-center flex-col gap-4'>
                        <h1 data-aos="fade-left" data-aos-duration="1500" className='font-rancho text-6xl text-center text-[#FF76CE]'>Exhibitions & Events</h1>
                        <p
                            data-aos="fade-right" data-aos-duration="1500"
                            className='md:w-[700px] text-center'>
                            "Experience the extraordinary with our Exhibitions & Events! Explore captivating displays, immerse yourself in cultural wonders, and engage with thought-provoking experiences that inspire, educate, and entertain."
                        </p>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center mt-10 lg:mt-2'>
                        <div className='lg:w-1/2 relative' data-aos="zoom-in-up" data-aos-duration="1500">
                            <img className='rounded-md' src="https://www.culturalartscenteronline.org/wp-content/uploads/2019/08/Gallery-Image-3-Op.-Mon.jpg" alt="" />
                            <div className='absolute bg-[#FF76CE] text-white w-[200px] h-[50px] flex justify-center items-center  -bottom-5 -right-5'>
                                <p className='font-rancho italic text-xl'>You Are Invited.</p>
                            </div>
                        </div>
                        <div className='lg:w-1/2 p-10 rounded-md space-y-3 bg-base-100' data-aos="zoom-in-down" data-aos-duration="1500">
                            <div className='space-y-2'>
                                <h3 className='font-rancho text-3xl text-[#FF76CE]'>Canvas Creations</h3>
                                <p className='flex items-center gap-3 text-[#dd8867]'>
                                    <FaRegCalendarAlt />
                                    <span>20 May - 25 May</span>
                                </p>
                                <p className='text-justify'>
                                    Canvas Creations stands as a beacon of creativity and cultural exchange in the heart of our city. Our Exhibitions & Events offer an immersive journey into the world of contemporary art, where every piece tells a story and every event sparks conversations.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='font-rancho text-3xl text-[#FF76CE]'>M.M Art Gallery</h3>
                                <p className='flex items-center gap-3 text-[#dd8867]'>
                                    <FaRegCalendarAlt />
                                    <span>01 Jun - 10 Jun</span>
                                </p>
                                <p className='text-justify'>
                                    MM Art Gallery stands as a beacon of creativity and cultural exchange in the heart of our city. Our Exhibitions & Events offer an immersive journey into the world of contemporary art, where every piece tells a story and every event sparks conversations.
                                </p>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='font-rancho text-3xl text-[#FF76CE]'>BraVo Art Gallery</h3>
                                <p className='flex items-center gap-3 text-[#dd8867]'>
                                    <FaRegCalendarAlt />
                                    <span>20 Jun - 25 Jun</span>
                                </p>
                                <p className='text-justify'>
                                    Step into our gallery space and be greeted by a dynamic atmosphere pulsating with creativity. Our exhibitions are meticulously curated to showcase the diverse talents of both established artists and emerging voices. From avant-garde installations to captivating paintings, sculptures, and multimedia artworks, each display is a testament to the boundless possibilities of artistic expression.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* -----------------Testimonial section-------------- */}
            <div className='mt-24 px-4'>
                <div className='flex justify-center items-center flex-col gap-4'>
                    <h1 data-aos="fade-left" data-aos-duration="1500" className='font-rancho text-6xl text-center text-[#FF76CE]'>Art Gallery</h1>
                    <p
                        data-aos="fade-right" data-aos-duration="1500"
                        className='md:w-[700px] text-center'>
                        "Step into a world of artistic wonder at our Art Gallery! Discover a diverse array of masterpieces, from contemporary works to timeless classics, and immerse yourself in the beauty and expression of visual artistry."

                    </p>
                </div>
                <div 
                data-aos="fade-up" data-aos-duration="1500"
                
                className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                    {
                        allData.map(data => <div data-aos="zoom-in-up" data-aos-duration="1000" key={data._id}>
                            <img className='w-full h-[300px] lg:h-[400px] object-cover rounded-2xl' src={data.photoURL} alt="" />
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;