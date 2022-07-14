/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

 import React, { useEffect, useState } from "react"
 import { StyleSheet, TextInput, View, Text, Pressable } from "react-native"
 import Input from "../../Component/Form/Input"
 import Icon from "react-native-vector-icons/Entypo"
 import auth from '@react-native-firebase/auth';
 import firestore from '@react-native-firebase/firestore';

 const SignOutScreen = () => {
    const [isFlag, setIsFlag] = useState(false);
      
      useEffect(() => {
          async function changeFlag() {
          
            await delay(1500);
             const users = await firestore().collection('Users').get();
             console.log(users);
             const user = await firestore().collection('Users').doc('ABC').get();
             console.log(user);
            setIsFlag(!isFlag)
          }
          

          
          changeFlag();





      }, []);
      
      

      const delay = async ms => new Promise(res => setTimeout(res, ms));
    return (
      <View>
        {isFlag && <Text>Hello, I am your cat! </Text>}
      </View>
      
    );
  }

 



 
 export default SignOutScreen