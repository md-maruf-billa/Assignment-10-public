import React from 'react';
import errorImg from '../../assets/image/error.avif'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'

const Error = () => {
    return (
        <div>
            <Nav />
            <div className='h-screen flex flex-col justify-center items-center'>
                <img src={errorImg} alt="" />
                <Link to="/" className='font-rancho text-common border-[#331a15] border px-3 py-1 text-2xl rounded-md hover:bg-[#331a1557]'>Go to Home</Link>
            </div>
            <Footer/>
        </div>
    );
};

export default Error;