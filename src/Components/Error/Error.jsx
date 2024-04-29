import React from 'react';
import errorImg from '../../assets/image/error.avif'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer'
import animation from './Animation - 1714329136194.json'
import Lottie from 'lottie-react';
import Button from '../../Utils/Button';
const Error = () => {
    return (
        <div>
            <Nav />
            <div className='h-screen flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <Lottie animationData={animation} />
                </div>
                <Link to="/" >
                    <Button btnName={"Go Home"}/>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Error;