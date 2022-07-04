
import React,{useState,useEffect} from 'react'; // we need this to make JSX compile
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type User = {
  ID :  string,
  Password:string,
}
export type UserI = {
    ID :  string,
    Provider: string,
    Create :string,
    CnxLast:string,
    Uid:string,
    Password:string,
    Error?:string,
  }


const UserCreate = ( email:string, password :string) =>  {
    var uid : string|null =null;
    var errorReturn : string|null =null;
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
        errorReturn = 'User account created & signed in!';
    })
    .catch(error => {
        errorReturn=error.code ;
        if (error.code === 'auth/email-already-in-use') {
            errorReturn ='That email address is already in use!';
        }
        if (error.code === 'auth/invalid-email') {
            errorReturn ='That email address is invalid!';
        }
      }
     
    );
    return ({ Uid:uid, errors: errorReturn })
}

const UserReadAuth = async (email:string, password :string) => {

  var uid : string|null =null;
  var errorReturn : string|null =null;
  try {
    let response = await auth().signInWithEmailAndPassword(email, password)
    if (response && response.user) {
      console.error("Success ✅", "Authenticated successfully")
    }else{
      errorReturn="Authenticatedwithout success"

    }
  } catch (e) {
    console.error(e.message)
    errorReturn=e.message
  };
  return ({ Uid:uid, errors: errorReturn })
}

const UserRead =()=>{
const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
 ;
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return "(user)? user.email:null";
    }

export {UserCreate,UserReadAuth} ;