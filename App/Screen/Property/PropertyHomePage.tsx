import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../utility/color'
import { FONTFAMILY } from '../../../src/theme/theme'

const PropertyHomePage = () => {
  return (
    <View style = {styles.container}>
      <Text style = {{color: color.Obsidian , fontSize:25 , fontFamily:FONTFAMILY.poppins_regular}}>This Service is </Text>
      <Text style = {{color: color.Night , fontSize:18 , fontFamily:FONTFAMILY.poppins_light}}>Comming soon...</Text>
    </View>
  )
}

export default PropertyHomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:color.bg_white,
    alignItems:"center",
    justifyContent:"center"
  }

})