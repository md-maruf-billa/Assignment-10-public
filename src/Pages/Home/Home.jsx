import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import CraftCard from '../../Components/CraftCard/CraftCard';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Animation - 1714310323427.json";
import { FaRegCalendarAlt } from 'react-icons/fa';
const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/')
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
                <h1 className='font-rancho text-6xl text-center text-[#FF76CE]'>Arts adn Crafts</h1>


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

            <div className='mt-24'>
                <div className='container mx-auto'>
                    <h1 className='font-rancho text-6xl text-[#FF76CE] text-center'>Exhibitions & Events</h1>

                    <div className='flex items-center mt-2'>
                        <div className='w-1/2 relative'>
                            <img className='rounded-md' src="https://www.culturalartscenteronline.org/wp-content/uploads/2019/08/Gallery-Image-3-Op.-Mon.jpg" alt="" />
                            <div className='absolute bg-[#FF76CE] text-white w-[200px] h-[50px] flex justify-center items-center  -bottom-5 -right-5'>
                                <p className='font-rancho italic text-xl'>You Are Invited.</p>
                            </div>
                        </div>
                        <div className='w-1/2 p-10 rounded-md space-y-3'>
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
        </div>
    );
};

export default Home;