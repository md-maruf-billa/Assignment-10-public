import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../Utils/Button';

const AllCategories = () => {
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {
        fetch("https://canvas-creations-server.vercel.app/categories")
            .then(res => res.json())
            .then(result => {
                setAllCategories(result)
            })
    }, [])

    return (
        <div className='min-h-screen'>
            <div
                className='min-h-[70vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(https://th.bing.com/th/id/R.e34aaca44ca8d569f778209bd74f3626?rik=VAXeY7z%2fHJ30tQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f6HyzwVS.jpg&ehk=ecdLGSXUlco6Xzkx4M8i3NfxKOk4PqvNNCAKhb389D0%3d&risl=&pid=ImgRaw&r=0)] bg-center flex justify-center items-center'>
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

            <div className='container mx-auto mt-20 px-4'>
                {
                    allCategories.map(category => <div
                        key={category._id}
                        className='flex flex-col md:flex-row gap-8 mb-8 border border-[#FF76CE] p-8 rounded-lg'
                    >
                        <div className='md:w-1/2'>
                            <img className='w-full h-[300px] lg:h-[400px] object-fill rounded-lg' src={category.photoURL} alt="" />
                        </div>
                        <div className='md:w-1/2 space-y-5'>
                            <h3 className='font-rancho text-4xl md:text-5xl lg:text-7xl text-[#FF76CE]'>{category.categoryName}</h3>
                            <p className='h-[200px] overflow-y-scroll lg:overflow-hidden lg:h-auto text-justify'>{category.description}</p>

                            <div className='flex justify-end'>
                                <Link state={category.categoryName} to="/categories" className='mt-5'>
                                    <Button btnName={"View All Arts"} />
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default AllCategories;