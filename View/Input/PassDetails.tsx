import React from 'react'

import firestore from '@react-native-firebase/firestore'
import { List ,Text,IconButton,TextInput,} from 'react-native-paper'

import { View ,Alert} from 'react-native'
import { useRoute } from '@react-navigation/native';



const DetailsScreen = () => {
  const route = useRoute();
   const { ID, Login, Name,Password,Type, complete , navigation } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login {Login} :</Text>
      <TextInput label={'Login'} value={Login} style={{ width: 80, }} onChangeText={() => { }} />
      <Text>Name :</Text>
      <TextInput label={'Name'} value={Name} style={{ width: 80, }} onChangeText={() => { }} />


      <TextInput label={'Login'} value={Login} onChangeText={() => { }} />
        <TextInput label={'Name'} value={Name} onChangeText={() => { }} />
        <TextInput label={'Password'} value={Password}  onChangeText={() => { }} />
        <TextInput label={'Categorie'}value={Type}  style={{ width: 80, }} onChangeText={() => { }} />
        <IconButton icon='key-plus' onPress={() => { addusers() }} />



    </View>
  );
}
type Props = {
    ID: string,
    Login: string,
    Name: string,
    Password:string,
    Type: "APP" | "WEB",
    complete : string,
    error?: string,
    route : string,
    navigation : string,
}

function DetailScreenOOO({ ID, Login, Name,Password,Type, complete }: Props) {
  //const route = useRoute();
 
  
  
  async function toggleComplete() {   
    Alert.alert(ID);
    await firestore()
      .collection('Users')
      .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse')
      .doc(ID)
      .update({
        complete: !complete,
      });
  }
    async function PasswordDelete() {   
        Alert.alert(ID);
        await firestore()
          .collection('Users')
          .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse')
          .doc(ID)
          .delete();
    }
    async function updateUsers() {
        await firestore()
        .collection('Users')
        .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse')
        .doc(ID).update({
          Login: 'todo2',
          Name: 'false',
          Password: 'false',
          Email: 'false',
        });
      }
  return (
    //<List.Item title={ID}
   // onPress={() => toggleComplete()}
     // left={props => (
        //<List.Icon {...props} icon={complete ? 'check' : 'check'} />
        <View style={{ height: 30, flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
      <Text>Login :</Text>
      <TextInput label={'Login'} style={{ width: 80, }} onChangeText={() => { }} />
      <Text>Name :</Text>
      <TextInput label={'Name'} style={{ width: 80, }} onChangeText={() => { }} />
      
       <Text style={{ width: 80, }}>-{Login}-</Text>
       <Text style={{ width: 80, }}>{Name}</Text>
       <Text style={{ width: 80, }}>{Password}</Text>
       <Text style={{ width: 80, }}>{Type}</Text>
       <Text style={{ width: 40, }}>
            <IconButton icon={complete ? 'check' : 'check'} onPress={() => updateUsers()}/>
        </Text>
        <Text style={{ width: 40, }}>
            <IconButton icon={'account-edit'} onPress={() => editPass()}/>
        </Text>

       
      </View>
     // )}
    ///>
  );
}
export default DetailsScreen;