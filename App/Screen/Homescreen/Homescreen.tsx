import { View, Text , SafeAreaView, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import InterShip from '../../../src/assets/Features/Student/InterShip/InterShip'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../utility/color'

export default function Homescreen() {
  return (
    <SafeAreaView>
      <View style = {styles.Container}>
     
        <View style ={styles.subContainer}>
          
       
        </View>
      </View>
      <ScrollView>
        
      <InterShip />
      <InterShip />
      <InterShip />
      </ScrollView>
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  Container: {
      width:412,
      height:70,
      backgroundColor:color.BLACK,
      borderBottomLeftRadius:30,
      borderBottomRightRadius:30,
    alignItems:"center"
    

  },
  headerBG:{
    width:415,
    height:70,
    borderBottomLeftRadius:30
  },





  subContainer:{}
})