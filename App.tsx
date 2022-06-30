/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/reacÒxt-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar,StyleSheet,Text,useColorScheme, View,} from 'react-native';
import {Colors,  DebugInstructions, Header, LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
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

const Stack = createBottomTabNavigator();

function App() {
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
          } else if (route.name === 'SignOut') {
            iconName =  'sign-out-alt'

          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })
    }
      >
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignOut" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;