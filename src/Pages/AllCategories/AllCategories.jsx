import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../Utils/Button';
import bg from '../../assets/image/formbg.png'
import PageTitle from '../../Utils/PageTitle';
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
        <div style={{backgroundImage:`url(${bg})`}} className='min-h-screen bg-no-repeat bg-cover'>
              {/* ------------------Page title---------- */}
              <PageTitle title={"All Categories"}/>
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

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-4'>
                {
                    allCategories.map(category => <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                        key={category._id}
                        className='gap-8 mb-8 border border-[#FF76CE] rounded-lg'
                    >
                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50">
                            <img src={category.photoURL} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
                            <div className="mt-6 mb-2">
                                <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">Category:</span>
                                <h2 className="text-4xl font-semibold font-rancho tracking-wide">{category.categoryName}</h2>
                            </div>
                            <p className="text-justify">{category.description.slice(0, 190)} ...</p>

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