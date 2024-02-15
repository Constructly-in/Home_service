import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './App/Screen/Loginscreen/Login'
import { NavigationContainer } from '@react-navigation/native';
import Tabnavigation from './App/Navigation/Tabnavigation';
import SignScreen from './App/Screen/Signinscreen/SignScreen';
import SingupScreen from './App/Screen/SingupScreen/SingupScreen';


export default function App() {
  return (

    <View>
      {/* <SignScreen /> */}
      <SingupScreen />
      {/* <Login /> */}
      {/* <Singin> */}
        {/* <NavigationContainer>
             <Tabnavigation />
        </NavigationContainer> */}
      {/* </Singin> */}


    </View>

  )
}

const styles = StyleSheet.create({})