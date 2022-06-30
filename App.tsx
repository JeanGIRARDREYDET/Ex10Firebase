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
import SignOnScreen from './View/Input/SignOn';
import SignInScreen from './View/Input/SignIn';

const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'SignOn') {
            iconName = focused
              ? 'home'
              : 'information';
          } else if (route.name === 'SignIn') {
            iconName = focused ? 'ios-list-box' : 'information';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })
    }
      >
        <Stack.Screen name="SignOn" component={SignOnScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;