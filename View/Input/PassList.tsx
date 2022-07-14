/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

import React, { useEffect, useState, } from "react"
import { StyleSheet, ActivityIndicator, View, Text, Pressable, FlatList, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Entypo"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Input from "../../Component/Form/Input"
// liste des icones dans à l'adresse https://icon-sets.iconify.design/mdi/page-93.html
import { Appbar, TextInput, Button, IconButton, } from 'react-native-paper'
import Pass from '../../View/Input/Pass'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
type error = {
  email?: string,
}


const Edit = () => {
  
}
const SignOutScreen = () => {

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [pass, setPass] = useState('');
  const [passs, setPasss] = useState([]); // Initial empty array of passsu
  const [errors, setErrors] = useState<error>({})
  const ref = firestore()
    .collection('Users')
    .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse');
  async function addusers() {
    await ref.add({
      Login: 'todo',
      Name: 'false',
      Password: 'false',
      Email: 'false',
    });
  }
  useEffect(() => {
    ref
      .onSnapshot(querySnapshot => {
        const passs = [];
        querySnapshot.forEach(documentSnapshot => {
          passs.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setPasss(passs);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    //return () => ref();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <FlatList
        data={passs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Pass {...item} ID={item.key} />
        )
      }
      />
      <View style={{ height: 30, flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TextInput label={'Login'} style={{ width: 80, }} onChangeText={() => { }} />
        <TextInput label={'Name'} style={{ width: 80, }} onChangeText={() => { }} />
        <TextInput label={'Passwor'} style={{ width: 80, }} onChangeText={() => { }} />
        <TextInput label={'Categorie'} style={{ width: 80, }} onChangeText={() => { }} />
        <IconButton icon='key-plus' onPress={() => { addusers() }} />
        <Button onPress={() => { }} style={{ width: 80, }}>Add Password</Button>
      </View>
      <View style={{ height: 30, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text>toot</Text>
        <Button onPress={() => { }} style={{ width: 80, }}>Add Password</Button>
      </View>
      <Button onPress={() => { }} style={{ width: 80, }}>Add Password</Button>
    </View>

  );
}
export default SignOutScreen