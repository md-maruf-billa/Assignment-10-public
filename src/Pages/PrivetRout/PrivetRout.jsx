import React, { useContext } from 'react';
import { userContext } from '../../Utils/DataProvider/DataProvider';
import Login from '../Login/Login';

const PrivetRout = ({children}) => {
    const {currentUser} = useContext(userContext);
    return (
        <>

            {
                currentUser.email? children:
                <Login/>
            }
        </>
    );
};

export default PrivetRout;