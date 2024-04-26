import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase.config';

export const userContext = createContext(null);

const DataProvider = ({ children }) => {
    const [currentUser , setCurrentUser] = useState([]);


    // ---------Registration user email and password---------

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // -----Login  user with email and password---------
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //-------------sign Out user------------

    const logOutUser =()=>{
        return signOut(auth)
    }

    // -------------observe user---------------

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user){
                setCurrentUser(user);
            }
            else{
                setCurrentUser([])
            }
        })
    },[])

    const value = {
        signUpUser,
        currentUser,
        logOutUser,
        loginUser
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default DataProvider;