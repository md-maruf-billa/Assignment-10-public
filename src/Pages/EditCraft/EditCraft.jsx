import React, { useEffect, useState } from 'react';
import background from '../../assets/image/formbg.png'
import { useLocation } from 'react-router-dom';
import Button from '../../Utils/Button';
import Swal from 'sweetalert2';
const EditCraft = () => {
    const location = useLocation();

    const [craftItem, setCraftItem] = useState([]);
    useEffect(() => {
        fetch(`https://canvas-creations-server.vercel.app/details/${location.state}`)
            .then(res => res.json())
            .then(data => {
                setCraftItem(data);
            })
    }, [])

    const { _id, name, category, description, price, ratings, customizable, processing, stock, photoURL, email, userName } = craftItem;


    //------------------update craft items----------
    const handelUpdate = (event) => {
        event.preventDefault();

        const form = event.target;

        // -----Access Form value-------
        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const customizable = form.customizable.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const photoURL = form.photoURL.value;

        const updateObj = { _id, name, category, description, price, ratings, customizable, processing, stock, photoURL };

        fetch("http://localhost:7000", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateObj)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Successfully Updated this craft item.",
                        icon: "success"
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Craft item Update failed.",
                        footer: ''
                    });
                }
            })

    }

    return (
        <div className='px-5' style={{ backgroundImage: `url(${background})` }}>
            <div className='container mx-auto mt-[110px]'>
                {/* --------------Form section-------------- */}

                <div className='bg-[#0001] border-[#FF76CE] border py-[90px] px-8 lg:px-[112px] mt-4 md:mt-12 rounded-lg' >
                    <div className='flex flex-col justify-center items-center gap-8'>
                        <h2 className='font-rancho text-5xl text-[#FF76CE]'>Update Craft Item</h2>

                    </div>
                    <form onSubmit={handelUpdate}>
                        <div className='flex flex-col md:flex-row gap-6 mt-8'>
                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Item Name</h3>
                                    <input name='name' className='p-2 rounded-lg' type="text" defaultValue={name} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Category</h3>
                                    <input name='category' className='p-2 rounded-lg' type="text" defaultValue={category} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Description</h3>
                                    <input name='description' className='p-2 rounded-lg' type="text" defaultValue={description} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Price</h3>
                                    <input name='price' className='p-2 rounded-lg' type="number" defaultValue={price} />
                                </div>
                            </div>



                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Ratings</h3>
                                    <input name='ratings' className='p-2 rounded-lg' type="text" defaultValue={ratings} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Customizable</h3>
                                    <input name='customizable' className='p-2 rounded-lg' type="text" defaultValue={customizable} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Processing Time</h3>
                                    <input name='processing' className='p-2 rounded-lg' type="text" defaultValue={processing} />
                                </div>
                                <div className='flex flex-col gap-2 rounded-lg '>
                                    <h3 className='font-semibold'>Stock</h3>
                                    <input name='stock' className='p-2 rounded-lg' type="text" defaultValue={stock} />
                                </div>

                            </div>
                        </div>


                        <div className='flex flex-col gap-2 rounded-lg mt-6'>
                            <h3 className='font-semibold'>Item Photo URL</h3>
                            <input name='photoURL' className='p-2 rounded-lg' type="text" defaultValue={photoURL} />
                        </div>
                        <button type='submit' className='w-full mt-10'>
                            <Button btnName={"Update Item"} size={"w-full"} />
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default EditCraft;