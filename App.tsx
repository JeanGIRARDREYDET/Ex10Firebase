/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/reacÒxt-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useEffect, useState, } from "react"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
// npm i --save-dev @types/react-native-vector-icons
// https://oblador.github.io/react-native-vector-icons/
// Ajouter dans android/app/build.gradle la ligne apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
import SignUpScreen from './View/Input/SignUp';
import SignInScreen from './View/Input/SignIn';
import SignOutScreen from './View/Input/SignOut';
import PassListScreen from './View/Input/PassList';
import DetailsScreen from './View/Input/PassDetails';
import firebase from '@react-native-firebase/app';
//import '@react-native-firebase/auth';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'
const Stack = createBottomTabNavigator();

function App() {
  const [edit, setEdit] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => setUser(user));
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'SignUp') {
              iconName = focused
                ? 'user-plus'
                : 'user-plus';
            } else if (route.name === 'SignIn') {
              iconName = focused ? 'sign-in-alt' : 'sign-in-alt';
            } else if (route.name === 'PassList') {
              iconName = focused ? 'shield-alt' : 'shield-alt';
            } else if (route.name === 'SignOut') {
              iconName = 'sign-out-alt'
            } else if (route.name === 'Details') {

            }
            // You can return any component that you like here!
            return <Icon Name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })
        }
      >
        {
          user ?
            (
              <Stack.Group>
                <Stack.Screen name="PassList" component={PassListScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ unmountOnBlur: true }} />
                <Stack.Screen name="SignOut" component={SignOutScreen} options={{ unmountOnBlur: true, }} />
              </Stack.Group>
            )
            :
            (
              <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ unmountOnBlur: true }} />
              </Stack.Group>
            )
        }
      </Stack.Navigator>
    </NavigationContainer >
  );
}
export default App;