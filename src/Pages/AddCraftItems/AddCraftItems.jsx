import React, { useContext, useEffect } from 'react';
import Button from '../../Utils/Button';
import background from '../../assets/image/formbg.png'
import { userContext } from '../../Utils/DataProvider/DataProvider';
import Swal from 'sweetalert2';

const AddCraftItems = () => {
    //------------get current user form context-----------
    const { currentUser } = useContext(userContext);
    const email = currentUser.email;
    const userName = currentUser.displayName;


    const handelAddCraftItems = (event) => {
        event.preventDefault()
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

        // ---------Create Coffee Object-------

        const newCraftItems = { name, category, description, price, ratings, customizable, processing, stock, photoURL, email, userName };

        // ----------Send Data to Server side---------

        fetch('http://localhost:7000/add-craft-items', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCraftItems)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire({
                        title: "Congratulation",
                        text: "Successfully added this craft item.",
                        icon: "success"
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Craft item added failed.",
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
                        <h2 className='font-rancho text-5xl text-[#FF76CE]'>Add new Craft Item</h2>

                    </div>
                    <form onSubmit={handelAddCraftItems}>
                        <div className='flex flex-col md:flex-row gap-6 mt-8'>
                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Item Name</h3>
                                    <input name='name' className='p-3 rounded-lg' type="text" placeholder='Enter your item name' />
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Category</h3>
                                    <select name='category' className="select select-bordered w-full ">
                                        <option disabled selected>Choose Category</option>
                                        <option>Landscape Painting</option>
                                        <option>Portrait Drawing</option>
                                        <option>Watercolour Painting</option>
                                        <option>Oil Painting</option>
                                        <option>Charcoal Sketching</option>
                                        <option>Cartoon Drawing</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Description</h3>
                                    <input name='description' className='p-3 rounded-lg' type="text" placeholder='Enter item description' />
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Price</h3>
                                    <input name='price' className='p-3 rounded-lg' type="number" placeholder='Enter item price' />
                                </div>
                            </div>



                            <div className='md:w-1/2 space-y-6'>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Ratings</h3>
                                    <input name='ratings' className='p-3 rounded-lg' type="text" placeholder='Enter item ratings' />
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Customizable</h3>
                                    <select name='customizable' className="select select-bordered w-full ">
                                        <option disabled selected>Select customization</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Processing Time</h3>
                                    <select name='processing' className="select select-bordered w-full ">
                                        <option disabled selected>Select weeks</option>
                                        <option>0 - 1 Weeks</option>
                                        <option>1 - 2 Weeks</option>
                                        <option>2 - 3 Weeks</option>
                                        <option>3 - 4 Weeks</option>
                                        <option>4 - 5 Weeks</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-3 rounded-lg '>
                                    <h3 className='font-semibold'>Stock</h3>
                                    <select name='stock' className="select select-bordered w-full ">
                                        <option disabled selected>Select Stock</option>
                                        <option>In Stock</option>
                                        <option>Out of Stock</option>
                                    </select>
                                </div>

                            </div>
                        </div>


                        <div className='flex flex-col gap-3 rounded-lg mt-6'>
                            <h3 className='font-semibold'>Item Photo URL</h3>
                            <input name='photoURL' className='p-3 rounded-lg' type="text" placeholder='Enter photo URL' />
                        </div>
                        <button type='submit' className='w-full mt-10'>
                            <Button btnName={"Add Item"} size={"w-full"} />
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddCraftItems;