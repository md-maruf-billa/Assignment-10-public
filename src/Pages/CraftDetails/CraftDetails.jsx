import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../Utils/Button';
import { Typewriter } from 'react-simple-typewriter';


const CraftDetails = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // ----------get Specific data form data base-------

    useEffect(() => {
        fetch(`https://canvas-creations-server.vercel.app/details/${location.state}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [])
    const { name, time, category, description, price, ratings, customizable, processing, stock, photoURL, userName } = data;
    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='h-[400px] md:h-[600px] bg-[linear-gradient(45deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7)),url(https://www.parksidecabinrentals.com/wp-content/uploads/2013/02/Arts_and_Crafts.jpg)] w-full bg-cover px-4 flex justify-center items-center flex-col'>
                <div className="text-6xl md:text-8xl lg:text-9xl text-[#ff98d9] font-rancho">
                    <Typewriter

                        words={["Best Art", "Best services", "Various Collection", "Customizable"]}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </div>
            </div>
            {
                loading ? <div className='flex justify-center items-center h-screen'><div className="loader"></div></div> :
                    <div className="px-4">
                        <div className='container mx-auto flex flex-col md:flex-row md:items-center gap-5 justify-center border-[#FF76CE] border-2 rounded-lg p-8 mt-8
            '>
                            <div className='md:w-1/2'>
                                <img className=' w-full h-[300px] lg:h-[500px] rounded-md' src={photoURL} alt="" />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='font-rancho text-3xl md:text-5xl lg:text-7xl text-[#FF76CE]'>{name}</h1>
                                <p>{description}</p>

                                <div className='space-y-1 lg:space-y-4 mt-4 lg:*:flex *:justify-between'>
                                    <div className='space-y-1 lg:space-y-0'>
                                        <p><span className='font-bold'>Category :</span> {category}</p>
                                        <p><span className='font-bold'>Customizable :</span> {customizable}</p>

                                    </div>
                                    <div className='space-y-1 lg:space-y-0'>
                                        <p><span className='font-bold'>Ratings :</span> {ratings}</p>
                                        <p><span className='font-bold'>Stock :</span> {stock}</p>

                                    </div>
                                    <div className='space-y-1 lg:space-y-0'>
                                        <p><span className='font-bold'>Posted by :</span> {userName}</p>
                                        <p><span className='font-bold'>Posted At :</span> {time || ""}</p>

                                    </div>
                                    <div className='space-y-1 lg:space-y-0'>
                                        <p><span className='font-bold'>Price :</span> {price} $</p>
                                        <p><span className='font-bold'>Making Time :</span> {processing}</p>
                                    </div>
                                </div>
                                <Button btnName={"Buy Now"} size={"w-full mt-8"} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default CraftDetails;