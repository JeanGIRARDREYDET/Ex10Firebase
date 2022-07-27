/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

import React, { useEffect, useState } from "react"
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native"
import Input from "../../Component/Form/Input"
import Icon from "react-native-vector-icons/Entypo"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserExit } from "../../Component/Auth/UserCRU"
import {  UserStorageAuthExit,UserStorageAuthRead,UserStorageAuthCreate } from "../../Component/Auth/UserStorage"
import { useNavigation } from "@react-navigation/native";
import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";




const SignOutScreen = () => {
  const navigation = useNavigation();
  
  //MMKV.setString("user", "Jean");
  //   <Text>UserExit() &&  "User signed out!"</Text>
 // UserStorageAuthCreate("","")
 UserStorageAuthRead
 UserExit
  return (
    <View>
   
      <Text>tt</Text>
    </View>

  );
}






export default SignOutScreen