import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../FireBase/firebase.config';

export const userContext = createContext(null);

const DataProvider = ({ children }) => {


    // ---------Registration user email and password---------

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const value = {
        signUpUser
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default DataProvider;