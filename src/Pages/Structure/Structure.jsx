import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import Footer from '../../Components/Footer/Footer';

const Structure = () => {
    const { loading } = useContext(userContext);
    return (
        <>
            {
                loading ? <div className='min-h-screen flex justify-center items-center'>
                    <div className="loader"></div>
                </div> :

                    <div className='font-poppins'>

                        <Nav />
                        <Outlet />
                        <Footer/>
                    </div>
            }
        </>
    );
};

export default Structure;

