import React from 'react'
import firestore from '@react-native-firebase/firestore'
import { List ,Text,IconButton,TextInput,} from 'react-native-paper'
import { View ,Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';



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

function DetailsScreen({ ID, Login, Name,Password,Type, complete ,route, navigation }: Props) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login :</Text>
      <TextInput label={'Login'} style={{ width: 80, }} onChangeText={() => { }} />
      <Text>Name :</Text>
      <TextInput label={'Name'} style={{ width: 80, }} onChangeText={() => { }} />
        <TextInput label={'Passwor'} style={{ width: 80, }} onChangeText={() => { }} />
        <Text>password :</Text>
        <TextInput label={'Categorie'} style={{ width: 80, }} onChangeText={() => { }} />
        categorie :
        <IconButton icon='key-plus' onPress={() => {  }} />
        <IconButton icon={'account-edit'} onPress={() => {
    
            }} style={{ width: 80, }}/>
      
  
    </View>
  );
}


function Pass({ ID, Login, Name,Password,Type, complete }: Props) {
   
  const navigation = useNavigation();
  


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
       <Text style={{ width: 80, }}>{Login}</Text>
       <Text style={{ width: 80, }}>{Name}</Text>
       <Text style={{ width: 80, }}>{Password}</Text>
       <Text style={{ width: 80, }}>{Type}</Text>
       <Text style={{ width: 40, }}>
            <IconButton icon={complete ? 'check' : 'check'}  onPress={() =>
          navigation.navigate('Details', {
           ID:ID, Login: Login,Name:Name,Password:Password,Type:Type,
   
          })
        } />
        </Text>
        <Text style={{ width: 40, }}>
            <IconButton icon={'account-edit'} onPress={() => editPass()}/>
        </Text>

        <IconButton icon={'account-edit'} onPress={() => editPass()}/>
      </View>
     // )}
    ///>
  );
}
export default React.memo(Pass);