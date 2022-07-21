/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

 import React, { useEffect, useState } from "react"
 import { StyleSheet, TextInput, View, Text, Pressable } from "react-native"
 import Input from "../../Component/Form/Input"
 import Icon from "react-native-vector-icons/Entypo"
 import auth from '@react-native-firebase/auth';
 import firestore from '@react-native-firebase/firestore';
 import {UserExit}  from "../../Component/Auth/UserCRU"
 import {UserStorage} from "../../Component/Auth/UserStorage"


 const SignOutScreen = () => {
    
    return (
      <View>
       <Text> { UserExit() &&  "User signed out!"}</Text> 
      </View>
      
    );
  }

 



 
 export default SignOutScreen