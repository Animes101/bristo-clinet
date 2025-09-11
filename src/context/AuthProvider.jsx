import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);


    //create user
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user

    const loginUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

     //logout user
    const logout=()=>{
       return  signOut(auth)
    }



    useEffect(()=>{
    const unScrid=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    setLoading(false);
    setUser(user);

    console.log(uid)
    // ...
  } else {
    // User is signed out
    setUser(null);
    // ...
  }

  return ()=>{
    return unScrid();
  }
},[]);
    })
  return (
    <AuthContext.Provider value={{ user, loading,logout, createUser, loginUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider