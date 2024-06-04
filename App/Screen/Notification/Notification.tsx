
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../../../src/utility/color'
import { FONTFAMILY } from '../../../src/theme/theme'
import HeaderBar from '../../../src/components/HeaderBar'

const Notification = () => {
  return (
     <View style ={{flexGrow:1}}>

     
    <HeaderBar title="NOtification" />
    <View style = {styles.container}>


    <Text style = {{color: color.Obsidian , fontSize:25 , fontFamily:FONTFAMILY.poppins_regular}}>No Updates </Text>
    <Text style = {{color: color.Night , fontSize:18 , fontFamily:FONTFAMILY.poppins_light}}>...</Text>
  </View>

  </View>
  )
}

export default Notification

const styles = StyleSheet.create({

        container:{
          flex:1,
          backgroundColor:color.bg_white,
          alignItems:"center",
          justifyContent:"center"
        }
      
})