import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import color from '../../utility/color';
import MyButton from '../../../src/assets/Component/MyButton';
import MyTextInput from '../../../src/assets/Component/MyTextInput';
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface SignScreenProps {
  navigation: any; // Change 'any' to the actual type if possible
}

export default function SignScreen({ navigation }: SignScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '570696891484-6127lf9k6ogrqmioehqi59gd31q803po.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken, user } = await GoogleSignin.signIn();
      console.log(user);
      Alert.alert("Successful login");
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const loginWithEmailAndPassword = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        Alert.alert("Logged IN");
        navigation.navigate("Homescreen");
      })
      .catch(err => {
        console.log(err);
        Alert.alert(err.nativeErrorMesssage);
      });
  };

  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require('./../../../image/OneDrive-2024-02-07/realBg.png')}
        style={styles.loginScreen}
      >
        {/* <Image
          source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
          style={styles.LogoImage}
        /> */}

        <Text style={styles.Title}>
          Constructly.in
        </Text>

        <View style={styles.innerContainer}>

          <MyTextInput placeholder="Phone Number" />
          <MyTextInput
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            placeholder="Enter E-Mail or User Name"
          />
          <MyTextInput
            value={password}
            onChangeText={(text: string) => setPasswword(text)}
            placeholder="Password"
            secureTextEntry
          />

          <Text
            style={styles.TextAccount}
            onPress={() => navigation.navigate("SingupScreen")}
          >
            Don't Have an account yet ?
          </Text>

          <MyButton title={"LOGIN"} onPress={loginWithEmailAndPassword} />
          <Text style={styles.Ortext}>OR</Text>
          <MyButton title={"LOGIN WITH GOOGLE"} onPress={onGoogleButtonPress} />

        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  loginScreen: {
    height: heightPercentageToDP('100%'),
    width: widthPercentageToDP('100%'),
    alignItems: 'center',
  },

  Title: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('7%'),
    color: color.PRIMARY,
    marginTop: heightPercentageToDP('10%'),
    fontFamily: "Cardo-Bold"
  },

  LogoImage: {
    height: heightPercentageToDP('15%'),
    width: widthPercentageToDP('40%'),
    position: 'absolute',
    left: 0,
    top: 0,
  },

  innerContainer: {
    height: heightPercentageToDP('60%'),
    width: widthPercentageToDP('90%'),
    backgroundColor: '#FFFFFF',
    borderRadius: widthPercentageToDP('5%'),
    paddingHorizontal: widthPercentageToDP('10%'),
    alignItems: "center",
    justifyContent: "center",
    position:"relative",
    top:"13%",
    elevation:10
  },

  TextAccount: {
    alignSelf: "flex-end",
    marginRight: widthPercentageToDP('5%'),
    color: color.BLACK,
    marginBottom: heightPercentageToDP('1%'),
    fontWeight: '400',
    fontSize: widthPercentageToDP('4%'),
  },

  Ortext: {
    fontSize: widthPercentageToDP('6%'),
    color: color.BLACK,
    marginTop: heightPercentageToDP('1%'),
    marginBottom: heightPercentageToDP('1%'),
  },
});
