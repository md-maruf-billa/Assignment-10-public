import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CraftCard from '../../Components/CraftCard/CraftCard';
import { Typewriter } from 'react-simple-typewriter';
import groovyWalkAnimation from '../../assets/Animation - 1714310323427.json'
import Lottie from 'lottie-react';
import PageTitle from '../../Utils/PageTitle';
const Categories = () => {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`https://canvas-creations-server.vercel.app/category/${location.state}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
              {/* ------------------Page title---------- */}
              <PageTitle title={"Categories"}/>
            <div
                className='min-h-[40vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(https://th.bing.com/th/id/R.e34aaca44ca8d569f778209bd74f3626?rik=VAXeY7z%2fHJ30tQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f6HyzwVS.jpg&ehk=ecdLGSXUlco6Xzkx4M8i3NfxKOk4PqvNNCAKhb389D0%3d&risl=&pid=ImgRaw&r=0)] bg-center flex justify-center items-center'>
                <div className="text-6xl md:text-8xl lg:text-9xl text-[#ff98d9] font-rancho">
                    <Typewriter

                        words={["All Categories", "View More", "Hit Details"]}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </div>
            </div>

            <div className='px-4'>
                {
                    categories.length == 0 ? <div className='col-span-full flex justify-center items-center mt-20'>
                        <Lottie animationData={groovyWalkAnimation} />
                    </div> :
                        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                            {
                                categories.map(category => <CraftCard data={category}></CraftCard>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Categories;