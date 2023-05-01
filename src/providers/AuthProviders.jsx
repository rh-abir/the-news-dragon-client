import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null)

  const [loding, setLoding] =  useState(true)

  const createUser = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const signIn = (email, password) =>  {
    setLoding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoding(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggerUser => {
      console.log('logged in user inside auth state observer', loggerUser)
      setUser(loggerUser) 
      setLoding(false)
    })

    return () => {
      unsubscribe()
    }

  }, [])

  const authInfo = {
    user,
    loding,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
