import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import Profilescreen from '../Screen/Profile/Profilescreen';
import Bookingscreen from '../Screen/Booking/Bookingscreen';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
  <View style = {styles.conatiner} >
   <Tab.Navigator >
    <Tab.Screen name="Home" component={Homescreen} />
    <Tab.Screen name="Profile" component={Profilescreen} />
    <Tab.Screen name="Booking" component={Bookingscreen} />
    
   </Tab.Navigator>
   </View>
  )
}
 const styles = StyleSheet.create({

  conatiner:{
    flex: 1
  }
 })