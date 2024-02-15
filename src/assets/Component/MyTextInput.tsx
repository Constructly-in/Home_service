import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import color from '../../../App/utility/color'

const MyTextInput = ({...props}) => {
  return (
    <View style = {styles.Container}>
      <TextInput
      style = {styles.InputText}
      {...props}
      />
      <View style = {styles.Border}></View>

    </View>
  )
}

export default MyTextInput

const styles = StyleSheet.create({

  Container:{
    height:50,
    width:"100%",
    paddingHorizontal:20,
    justifyContent:"center",
    marginBottom: 20,
    

  },

  InputText:{
    width:"100%",
    height:50,
    fontSize:16,
    paddingBottom:0,
    fontWeight:"500",
    color:color.white
    
  },
  Border:{
    width:"100%",
    height:1.5,
    backgroundColor:color.BLACK,
    alignSelf:"center"

  }
})