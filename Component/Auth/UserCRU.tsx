
import React, { useState, useEffect } from 'react'; // we need this to make JSX compile
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import MMKV from 'react-native-mmkv-storage'
import {UserStorage} from "../../Component/Auth/UserStorage"

export type User = {
  ID: string,
  Password: string,
}
export type UserI = {
  ID: string,
  Provider: string,
  Create: string,
  CnxLast: string,
  Uid: string,
  Password: string,
  Error?: string,
}

const UserCreate = (email: string, password: string) => {
  var uid: string | null = null;
  var errorReturn: string | null = null;
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      errorReturn = 'User account created & signed in!';
    })
    .catch(error => {
      errorReturn = error.code;
      if (error.code === 'auth/email-already-in-use') {
        errorReturn = 'That email address is already in use!';
      }
      if (error.code === 'auth/invalid-email') {
        errorReturn = 'That email address is invalid!';
      }
    }

    );
  return ({ Uid: uid, errors: errorReturn })
}

const UserReadAuth = (email: string, password: string) => {

  var uid: string | null = null;
  var errorReturn: string | null = null;
  auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
      // console.warn(response);
      // console.warn("Success ✅", "Authenticated successfully")
      
      UserRead()
    }).catch(
      (error) => {
        errorReturn = error
      }
    )
  return ({ Uid: uid, errors: errorReturn })
}

const UserExit = () => {
  var isExit: boolean = false;
  auth()
    .signOut()
    .then(() => { isExit = true });
  return isExit;
}




const UserRead = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user: User) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (user) ? user : null;
}

export { UserCreate, UserReadAuth ,UserExit};