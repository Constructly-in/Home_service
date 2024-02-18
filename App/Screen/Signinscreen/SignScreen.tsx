import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../utility/color'
import MyButton from '../../../src/assets/Component/MyButton'
import MyTextInput from '../../../src/assets/Component/MyTextInput'
import Socialmedia from '../../../src/assets/Component/Socialmedia'

export default function SignScreen({ navigation }) {
  return (
    <View style={styles.Container}>
      <ImageBackground source={require('./../../../image/OneDrive-2024-02-07/bg.png')}
        style={styles.loginScreen}
      >
        <Image source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
          style={styles.LogoImage}
        />

        <Text style={styles.Title} >
          Constructly.in
        </Text>

        <View style={styles.innerContainer}>

          <MyTextInput placeholder="Phone Number" />
          <MyTextInput placeholder="Enter E-Mail or User Name" />
          <MyTextInput placeholder="Password" secureTextEntry />

           <Text style={styles.TextAccount}  onPress={() => navigation.navigate("SingupScreen")} > Don"t Have an account yet ?</Text> 

      
          <MyButton title={"LOGIN"} />
          <Text style={styles.Ortext}>OR</Text>
          <Socialmedia />
        </View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1
  },


  loginScreen: {
    height: 850,
    width: 410,
    alignItems: 'center',
  },

  Title: {
    textAlign: 'center',
    fontSize: 42,
    color: color.PRIMARY,
    // position:'relative',
    // top:120,
    marginTop: 100,
    fontFamily: "KaushanScript-Regular"

  },

  LogoImage: {
    height: 100,
    width: 195,
    position: 'absolute',
    left: 0,
    top: 0
  },

  innerContainer: {
    height: 420,
    width: 370,
    backgroundColor: 'rgba(255, 109, 0, 0.6)',
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center"

  },

  TextAccount: {

    alignSelf: "flex-end",
    marginRight: 10,
    color: color.BLACK,
    marginBottom: 9,
    fontWeight: '400',
    fontSize: 15
  },
  Ortext: {
    fontSize: 25,
    color: color.BLACK,
    marginTop: 10
  }
})