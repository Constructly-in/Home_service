import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import React from 'react';
import color from '../../../src/utility/color';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomIcon from '../../../src/components/CustomIcon';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../../Contexts/AuthContext';

export default function Login({ navigation }) {
  const { currentUser, setUserInfo } = useAuth();
  
  const checkUser = async () => {
    const storageValue = await AsyncStorage.getItem('userEmail');

    if(storageValue !== null) {
      console.log("checking user")
      navigation.replace("Tabnavigation");
      const user = await firestore().collection('Users').doc(currentUser.uid).get();
      setUserInfo(user._data);
    }
    else {
      navigation.replace("SignScreen");
    }
    // navigation.navigate("SignScreen");
  }
  return (
    // <View style={{ flex: 1, alignItems: 'center' , backgroundColor:color.BLACK}}>
      <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={[color.bg_white, color.bg_white]} 
                                style={styles.Container}>
      <Image
        source={require('./../../../image/OneDrive-2024-02-07/frontpage.png')}
        style={styles.loginScreen}
      />
      <View style={styles.subContainer}>
        <Text style={styles.heading_1}>
          Lets's find <Text style={{ fontWeight: 'bold' }}> Professional Contractor , Repair / PG's for student / Buy plot</Text> Service
        </Text>

        <Text style={{
          fontSize: widthPercentageToDP('4%'), textAlign: 'center', color:color.WHITE,
          paddingTop: heightPercentageToDP('1%'),
        }}>"Building Dreams, One Brick at a Time" </Text>

        <TouchableOpacity style={styles.button} onPress={() => checkUser() }>
          <Text style={{ fontSize: widthPercentageToDP('4.2%'), color: color.Night, textAlign: 'center' }}>
            Let's get started
          </Text>
          
        </TouchableOpacity>
      </View>
      </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({

  Container:{
    flex: 1, 
    alignItems: 'center'
  },

  loginScreen: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('45%'),
    marginTop: heightPercentageToDP('10%'),
    borderWidth: 4,
    borderRadius: 15,
    marginBottom: heightPercentageToDP('10%'),
    // backgroundColor:color.BLACK
  },

  subContainer: {
    width: '100%',
    backgroundColor: color.purple,
    height: '55%',
    marginTop: -heightPercentageToDP('2%'),
    borderRadius: 30,
    padding: widthPercentageToDP('5%'),
    // shadowRadius: 2,
     elevation:5
  },

  heading_1: {
    fontSize: widthPercentageToDP('5%'),
    color: color.gold,
    textAlign: 'center',
  },

  button: {
    marginTop: heightPercentageToDP('4%'),
   
    height: heightPercentageToDP('7%'),
    backgroundColor:color.gold,
    borderRadius: 99,
    alignItems:"center",
    justifyContent:"center"
  },
});