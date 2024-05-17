import { StyleSheet, Text, View } from 'react-native'

import React, { useEffect } from 'react';
import SingupScreen from './App/Screen/SingupScreen/Test3';
import { NavigationContainer } from '@react-navigation/native';
import Test from './App/Screen/Loginscreen/Test';
import Tabnavigation from './App/TabNavigation/Tabnavigation';
import Homescreen from './App/Screen/Homescreen/Homescreen';
import LinearGradient from 'react-native-linear-gradient';
import StackNavigator from './App/Screen/StackNavigation/StackNavigator';




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