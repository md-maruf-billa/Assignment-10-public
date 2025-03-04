import React from 'react';
import { AiOutlineStock, AiTwotoneDollar } from 'react-icons/ai';
import { FaPenToSquare, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from '../../Utils/Button';

const CraftCard = ({ data }) => {
    const { _id, name, category, description, price, ratings, customizable, processing, stock, photoURL, email, userName } = data;
    return (
        <div
            data-aos="zoom-in-up" data-aos-duration="1500"
            className='border border-[#FF76CE] bg-base-200 hover:border-blue-600 rounded-2xl p-8'>
            <div>
                <img className='h-[160px] lg:h-[300px] w-full rounded-md' src={photoURL} alt="" />
            </div>
            <div className='flex flex-col gap-5 mt-4'>
                <div className='space-y-2'>
                    <h3 className='flex flex-col'>
                    <span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">{category}</span>
                        <span className='text-4xl font-semibold font-rancho tracking-wide'>{name}</span>
                    </h3>
                    <p>{description.slice(0, 45)} ...</p>
                    <div className='flex justify-between items-center'>
                        <p className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400' />
                            {ratings}
                        </p>
                        <p className='flex items-center gap-1'>
                            <AiOutlineStock />
                            {stock}
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1'>
                            <FaPenToSquare />
                            {customizable}
                        </p>
                        <p className='flex items-center gap-1'>
                            <AiTwotoneDollar />
                            {price} <span>$</span>
                        </p>
                    </div>
                </div>
                <Link className='w-full' state={_id} to={`/details/${_id}`}>
                    <Button btnName={"View Details"} size={"w-full"} />
                </Link>
            </div>
        </div>
    );
};

export default CraftCard;