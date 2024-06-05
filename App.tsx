import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './App/Screen/StackNavigation/StackNavigator';




export default function App() {
  

  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({})