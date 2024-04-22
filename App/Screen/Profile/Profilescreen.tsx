import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import color from '../../utility/color';
import firestore from '@react-native-firebase/firestore'  
import { useAuth } from '../../Contexts/AuthContext';

export default function Profilescreen() {
  const {currentUser} = useAuth();
  const [userDetails,setUserDetails] = useState([]);

  const fetchUser = async () => {
    const user = await firestore().collection('Users').doc(currentUser.uid).get();
    setUserDetails(user._data);
  }

  useEffect(()=> {
    fetchUser();
  },[])


  return (
    <LinearGradient start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[color.gradiant1, color.gradiant]}
      style={styles.container} >

    
    {/* Top Container */}
    <View style={styles.topContainer}>
      {/* Profile Pic, Name, Phone, Email */}
      <Image
        source={require('../../../image/Login_AS/shopowner.png')}
        style={styles.profilePic}
      />
      <Text style={styles.name}>{userDetails.userName ? userDetails.userName : 'loading...'}</Text>
      <Text style={styles.phoneNumber}>{userDetails.phoneNum}</Text>
      <Text style={styles.email}>{userDetails.email}</Text>
    </View>

    {/* Bottom Container with Horizontal Components */}
    <View style={styles.bottomContainer}>
      {/* New Feature Component */}
      <View style={styles.horizontalComponent}>
        <Text style={styles.componentTitle}>New Feature</Text>
        {/* Your new feature content */}
      </View>

      {/* Social Media Handles Component */}
      <View style={styles.horizontalComponent}>
        <Text style={styles.componentTitle}>Social Media</Text>
        {/* Your social media handles content */}
      </View>

      {/* Contact Us Component */}
      <View style={styles.horizontalComponent}>
        <Text style={styles.componentTitle}>Contact Us</Text>
        {/* Your contact information content */}
      </View>
    </View>
  
  </LinearGradient>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phoneNumber: {
    color: 'white',
    marginTop: 5,
  },
  email: {
    color: 'white',
    marginTop: 5,
  },
  bottomContainer: {
    marginTop: 20,
  },
  horizontalComponent: {
    marginBottom: 20,
  },
  componentTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

// const styles = StyleSheet.create({})