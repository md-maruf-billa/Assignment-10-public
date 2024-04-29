import {
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase.config';

export const userContext = createContext(null);


// ------------Social account provider-------
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const DataProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([]);
    const [loading, setLoading] = useState(true);


    // ---------Registration user email and password---------

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // -----Login  user with email and password---------
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //--------Login with google-----------
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //----------Login with GitHub----------

    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }
    // ------------------Facebook login--------
    const faceBookLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }
    //-------------sign Out user------------

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    // //-----------Update user Profile--------
    // const updateProfile = () =>{
    //     return 
    // }

    // -------------observe user---------------

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
            else {
                setCurrentUser([])
            }
            setLoading(false);

        })
    }, [loading])

    const value = {
        signUpUser,
        currentUser,
        logOutUser,
        loginUser,
        googleLogin,
        loading,
        setLoading,
        gitHubLogin,
        faceBookLogin
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default DataProvider;