import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import CraftCard from '../../Components/CraftCard/CraftCard';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/Animation - 1714310323427.json";
const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/')
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
        </div>
    );
};

export default Home;