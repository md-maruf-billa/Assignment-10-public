import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import groovyWalkAnimation from "../../assets/Animation - 1714310323427.json";
import Lottie from 'lottie-react';
import bg from '../../assets/image/formbg.png'

const MyCraftList = () => {
    const [allItems, setAllItems] = useState([]);
    const { currentUser } = useContext(userContext);
    useEffect(() => {
        fetch(`https://canvas-creations-server.vercel.app/my-art-and-craftList/${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                setAllItems(data);
            })
    }, [])


    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            fetch(`https://canvas-creations-server.vercel.app/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remainingItem = allItems.filter(item => item._id != id);
                    setAllItems(remainingItem);
                })
        });


    }

    return (
        <div className='min-h-[calc(100vh-350px)]' style={{ backgroundImage: `url(${bg})` }}>
            <div className='bg-[linear-gradient(45deg,rgba(0,0,0,.1),rgba(0,0,0,0.7)),url(https://i.postimg.cc/rsPj48PM/bg.jpg)] min-h-[60vh] bg-no-repeat  bg-center object-cover bg-cover flex justify-center items-center'>
                <div className="text-6xl md:text-8xl lg:text-9xl text-[#ff98d9] font-rancho">
                    <Typewriter

                        words={["Your Added Craft", "You can do", "Update", "Delete", "View"]}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </div>
            </div>
            <div className="container mx-auto mt-10" >
                {
                    allItems.length == 0 ?
                        <div className='flex justify-center items-center'>
                            <Lottie animationData={groovyWalkAnimation} />
                        </div> :
                        <div className='grid lg:grid-cols-2 gap-10 px-4'>
                            {
                                allItems.map(data => <div key={data._id} className='border-[#FF76CE] border flex items-center justify-between p-3 md:px-12 md:py-8 rounded-md z-0'>
                                    <div>
                                        <img className='md:h-[200px] w-[130px] md:w-[190px] rounded-lg' src={data.photoURL} alt="" />
                                    </div>
                                    <div className='text-xs md:text-base'>
                                        <p><span className='font-semibold'>Name: </span><span className='font-rancho md:text-2xl text-[#FF76CE]'>{data.name}</span></p>
                                        <p><span className='font-semibold'>Stock: </span>{data.stock}</p>
                                        <p><span className='font-semibold'>Price: </span>{data.price} $</p>
                                        <p><span className='font-semibold'>Ratings: </span>{data.ratings}</p>
                                        <p><span className='font-semibold'>Customization: </span>{data.customizable}</p>
                                    </div>
                                    <div className='*:cursor-pointer  *:size-[40px] *:flex justify-center items-center space-y-4 *:rounded-lg *:text-white'>
                                        <div className='p-3  border bg-[#D2B48C] cursor-pointer flex justify-center items-center'>
                                            <Link state={data._id} to={`/details/${data._id}`}>
                                                <FaEye />
                                            </Link>
                                        </div>
                                        <div className='p-3  border bg-[#3C393B] cursor-pointer flex justify-center items-center'>
                                            <Link state={data._id} to={`/edit-craft`}>
                                                <FaPen></FaPen>
                                            </Link>
                                        </div>
                                        <div onClick={() => handelDelete(data._id)}
                                            className='p-3   border bg-[#EA4744] cursor-pointer flex justify-center items-center'>
                                            <MdDelete />
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyCraftList;
