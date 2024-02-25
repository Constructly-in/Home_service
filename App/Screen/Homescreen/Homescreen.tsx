import { View, Text , SafeAreaView, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import InterShip from '../../../src/assets/Features/Student/InterShip/InterShip'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../utility/color'
import Douts from '../../../src/assets/Features/Student/Douts'

export default function Homescreen() {
  return (
    <SafeAreaView>
      <View style = {styles.Container}>
        <View style = {styles.subContainer}>
        <Image source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/logo.png')}
        style={styles.LogoImage} />

        </View>
      </View>
      <ScrollView>
      <View style ={styles.mainContainer}> 
      <InterShip />
      <Douts />
      <Douts />
      </View> 
      
      </ScrollView>
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  Container: {
      width:412,
      height:70,
      backgroundColor:color.white,
      
   
  
  },

  subContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:10
  },
  LogoImage:{
    width:"40%",
    height:70,


  },

  mainContainer:{
    backgroundColor:color.BLACK,
    borderTopLeftRadius:25,
    borderTopRightRadius:25


  }







})