import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
       const [user, setUser] = useState(null)
       const [loading, setLoadLing] = useState(true)

       const createUser = (email, password) =>{
               setLoadLing(true);
              return createUserWithEmailAndPassword(auth, email, password)
       }

       const logOut = () =>{
              setLoadLing(true)
             return signOut(auth)
       }

       const signIn = (email, password) =>{
              setLoadLing(false)
              return signInWithEmailAndPassword(auth,email, password)
       }

       useEffect(() =>{
             const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
                     console.log('hello bangladesh', currentUser)
                     setUser(currentUser)
                      setLoadLing(false);
                     
              });
              return() =>{
                     unSubscribe()
              }
       },[])

       const authInfo = {
         user,
         createUser,
         logOut,
         signIn,
         loading,
       };


       return (
              <AuthContext.Provider value={authInfo}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProvider;