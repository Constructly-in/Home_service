import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './App/Screen/Loginscreen/Login'
// import { NavigationContainer } from '@react-navigation/native';
// import Tabnavigation from './App/Navigation/Tabnavigation';
import SignScreen from './App/Screen/Signinscreen/SignScreen';
import SingupScreen from './App/Screen/SingupScreen/SingupScreen';
import StackNavigator from './App/Screen/navigation/StackNavigator';

import { NavigationContainer } from '@react-navigation/native';
import Test from './App/Screen/Loginscreen/Test';
import Tabnavigation from './App/Navigation/Tabnavigation';
import Homescreen from './App/Screen/Homescreen/Homescreen';


export default function App() {
  return (

    
     


        <NavigationContainer>
         <StackNavigator /> 
        </NavigationContainer>
      
      

    

  )
}

const styles = StyleSheet.create({})