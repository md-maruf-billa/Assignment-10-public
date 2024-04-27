import React, { useContext } from 'react';
import { userContext } from '../../Utils/DataProvider/DataProvider';

const MyArtAndCraftList = () => {
    const {currentUser} = useContext(userContext);
    console.log(currentUser.email);
    return (
        <div>
            
        </div>
    );
};

export default MyArtAndCraftList;