import React,{useEffect} from 'react'
import firestore from '@react-native-firebase/firestore'
import { List ,Text,IconButton,TextInput,} from 'react-native-paper'
import { StyleSheet,View ,Alert} from 'react-native'
import { useRoute ,useFocusEffect ,} from '@react-navigation/native';
import {Field,Formik,getIn} from 'formik';
import auth from '@react-native-firebase/auth';

const DetailsScreen = () => {
  const route = useRoute();

  const { ID, Login, Name,Password,Type, complete , navigation } = route.params;
  //ID=""; Login="";  Name="";Password="";Type=""; complete="";  navigation="";

  

//#region code consacrée à la mise à jours  des mots de passes  pour l'utilisatuer
// défintion de la collection de donné utilisatuer
  const ref = firestore()
  .collection('Users')
  .doc(auth().currentUser?.uid).collection('MotDePasse');
  const cur = ref.doc(ID)
  async function PasswordCreate(values:any) {

 //   const ref = firestore()
 //   .collection('Users')
 //   .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse');

    Alert.alert('Create Password : '+values.Login)
    await ref.add({
      Login: values.Login,
      Name: values.Name,
      Password: values.Password,
      Type: values.Type,
      Action: 'PasswordCreate',
      Create :new Date(),
    });
  }
  async function PasswordDelete() {   
  
    await cur
      .delete()
  }

 //#endregion

async function PasswordUpdate(values:any) {
    await firestore()
    .collection('Users')
    .doc((auth().currentUser?.uid)).collection('MotDePasse')
    .doc(ID).update({
      Login: values.Login,
      Name: values.Name,
      Password: values.Password,
      Type: values.Type,
      Action: 'PasswordUpdate',
      Update :new Date(),
    });
  }

  

  return (
    <View>
<Formik initialValues={{ Login: JSON.stringify(Login),Name:JSON.stringify(Name),Password: JSON.stringify(Password),Type: JSON.stringify(Type) }} onSubmit={(values) => console.log(values)}>
  {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View>
      <TextInput onChangeText={handleChange('Login')} onBlur={handleBlur('Login')} value={values.Login} />
      <TextInput onChangeText={handleChange('Name')} onBlur={handleBlur('Name')} value={values.Name} />
      <TextInput onChangeText={handleChange('Password')} onBlur={handleBlur('Password')} value={values.Password} />
      <TextInput onChangeText={handleChange('Type')} onBlur={handleBlur('Type')} value={values.Type} />
      <Text>
        
      </Text>
    
        <IconButton icon='update' onPress={() => { PasswordUpdate(values) }} />
        <IconButton icon='delete' onPress={() => { PasswordDelete() }} />
        <IconButton icon='key-plus' onPress={() => { PasswordCreate(values) }} />
    </View>
  )}
</Formik>
      <View></View>
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
    async function PasswordUpdate() {
        await firestore()
        .collection('Users')
        .doc('koBOVj9u6kGdwsQtj5Ot').collection('MotDePasse')
        .doc(ID).update({
          Login: Login,
          Name: Name,
          Password: Password,
          Email: 'PassUpdate',
        });
      }

  return (
    //<List.Item title={ID}
   // onPress={() => toggleComplete()}
     // left={props => (
        //<List.Icon {...props} icon={complete ? 'check' : 'check'} />
        <View style={{ height: 30, flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
          <TextInput label={'Login'}  value={Login} onChangeText={() => { }}  style={styles.input} />
          <TextInput label={'Name'} value={Name}  onChangeText={() => { }}  style={styles.input} />
          <TextInput label={'Password'} value={Password}  onChangeText={() => { }}  style={styles.input} />
          <TextInput label={'Type'} value={Type}  onChangeText={() => { }}  style={styles.input} />

       <Text style={{ width: 40, }}>
            --<IconButton icon={complete ? 'check' : 'check'} onPress={() => PasswordUpdate()}/>--
        </Text>
        <Text style={{ width: 40, }}>
            -<IconButton icon={'account-edit'} onPress={() => PasswordUpdate()}/>-
        </Text>
      </View>
     // )}
    ///>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default DetailsScreen;