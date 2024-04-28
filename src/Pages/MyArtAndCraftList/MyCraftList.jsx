import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCraftList = () => {
    const [allItems, setAllItems] = useState([]);
    const { currentUser } = useContext(userContext);;
    useEffect(() => {
        fetch(`http://localhost:7000/my-art-and-craftList/${currentUser.email}`)
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
            fetch(`http://localhost:7000/${id}`, {
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
        <div className='min-h-[calc(100vh-350px)] mt-[90px] container mx-auto'>
            <div className='grid grid-cols-2 gap-10'>
                {
                    allItems.map(data => <div key={data._id} className='flex items-center justify-between px-12 py-8 rounded-md bg-[#F5F4F1]  z-0'>
                        <div>
                            <img className='h-[200px] w-[190px]' src={data.photoURL} alt="" />
                        </div>
                        <div>
                            <p><span className='font-semibold'>Name: </span><span className='font-rancho text-2xl text-[#FF76CE]'>{data.name}</span></p>
                            <p><span className='font-semibold'>Stock: </span>{data.stock}</p>
                            <p><span className='font-semibold'>Price: </span>{data.price}</p>
                        </div>
                        <div className='*:cursor-pointer *:size-[40px] *:flex justify-center items-center space-y-4 *:rounded-lg *:text-white z-[100]'>
                            <div className='p-3  border bg-[#D2B48C] cursor-pointer'>
                                <Link state={data._id} to={`/details/${data._id}`}>
                                    <FaEye/>
                                </Link>
                            </div>
                            <div className='p-3  border bg-[#3C393B] cursor-pointer'>
                                <FaPen></FaPen>
                            </div>
                            <div onClick={() => handelDelete(data._id)}
                                className='p-3  border bg-[#EA4744] cursor-pointer'>
                                <MdDelete />
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCraftList;
