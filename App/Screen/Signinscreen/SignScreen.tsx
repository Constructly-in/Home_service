import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../utility/color'
import MyButton from '../../../src/assets/Component/MyButton'
import MyTextInput from '../../../src/assets/Component/MyTextInput'
import Socialmedia from '../../../src/assets/Component/Socialmedia'
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function SignScreen({ navigation }) {


  const [email, setEmail] = useState("")
  const [password, setPasswword] = useState("")

  useEffect(()=> {
    GoogleSignin.configure({
      webClientId: '570696891484-6127lf9k6ogrqmioehqi59gd31q803po.apps.googleusercontent.com',
    });
  },[])

  async function onGoogleButtonPress() {

    try {


      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken , user} = await GoogleSignin.signIn();

      console.log(user)
      Alert.alert("succes login")

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);

    } catch (error) {
      console.log(error)
    }
  }

  const loginWithEmailAndPassword = () => {

    auth().signInWithEmailAndPassword(email,password)
   .then((res) => {
    console.log(res)
   Alert.alert("Logged IN")
   navigation.navigate("Homescreen")
  })
   .catch(err => {
    console.log(err);
    Alert.alert(err.nativeErrorMesssage)
   
  })
};



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
          <MyTextInput value={email} onChangeText={(text:string) => setEmail(text)} placeholder="Enter E-Mail or User Name" />
          <MyTextInput value={password} onChangeText={(text:string) => setPasswword(text)} placeholder="Password" secureTextEntry />

           <Text style={styles.TextAccount}  onPress={() => navigation.navigate("SingupScreen")} > Don"t Have an account yet ?</Text> 

      
          <MyButton title={"LOGIN"} onPress={loginWithEmailAndPassword} />
          <Text style={styles.Ortext}>OR</Text>
          <MyButton title={"LOGIN WITH GOOGLE"} onPress={onGoogleButtonPress} />
         
          {/* <Socialmedia /> */}
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