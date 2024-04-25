import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';

const Structure = () => {
    return (
        <div className='font-poppins'>
            <Nav/>
            <Outlet/>   
        </div>
    );
};

export default Structure;