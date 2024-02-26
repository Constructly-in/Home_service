import { View, Text , SafeAreaView, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import InterShip from '../../../src/assets/Features/Student/InterShip/InterShip'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../utility/color'
import Douts from '../../../src/assets/Features/Student/Douts'
import LinearGradient from 'react-native-linear-gradient'

export default function Homescreen() {
  return (
    <SafeAreaView>
      <View style = {styles.Container}>
        <View style = {styles.subContainer}>
        <Image source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/logo.png')}
        style={styles.LogoImage} />

        </View>
      </View>
      {/* <View style ={styles.mainContainer}>  */}
      <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={['#000000', '#20232C']} 
                                style={styles.mainContainer}>
      <ScrollView>
      
      <InterShip />
      <Douts />
      <Douts />
     
      
      </ScrollView>
      </LinearGradient>
      {/* </View>  */}
    </SafeAreaView>
  
  )
}
const styles = StyleSheet.create({
  Container: {
      width:412,
      height:70,
      // backgroundColor:color.white,
      
   
  
  },

  subContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:20
  },
  LogoImage:{
    width:"40%",
    height:70,


  },

  mainContainer:{
    backgroundColor:color.BLACK,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    marginBottom:142

  }
})