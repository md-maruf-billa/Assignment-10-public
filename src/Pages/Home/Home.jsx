import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import CraftCard from '../../Components/CraftCard/CraftCard';

const Home = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-kappa-ebon.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setAllData(data);
            })
    }, [])

    return (
        <div className='px-4'>

            {/* ------------Banner Slide Hare----------- */}

            <Banner />


            {/* ------------All art and craft section hare-------------- */}
            <div className='mt-20 container mx-auto'>
                <h1 className='font-rancho text-6xl text-center text-[#FF76CE]'>Arts adn Crafts</h1>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {
                        allData.map(data => <CraftCard data={data} key={data._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;