import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import { userContext } from '../../Utils/DataProvider/DataProvider';

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
                    </div>
            }
        </>
    );
};

export default Structure;

