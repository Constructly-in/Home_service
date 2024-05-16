import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
import React, { useEffect } from 'react';
import Login from './App/Screen/Loginscreen/Login'
// import { NavigationContainer } from '@react-navigation/native';
// import Tabnavigation from './App/Navigation/Tabnavigation';
import SignScreen from './App/Screen/Signinscreen/SignScreen';
import SingupScreen from './App/Screen/SingupScreen/Test3';
// import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import Test from './App/Screen/Loginscreen/Test';
import Tabnavigation from './App/TabNavigation/Tabnavigation';
import Homescreen from './App/Screen/Homescreen/Homescreen';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigator from './App/Screen/StackNavigation/StackNavigator';

// import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
   

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    





  )
}

const styles = StyleSheet.create({})