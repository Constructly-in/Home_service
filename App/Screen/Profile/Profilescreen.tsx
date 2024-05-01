import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Linking, Alert } from 'react-native';
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import color from '../../utility/color';
import firestore from '@react-native-firebase/firestore'
import { useAuth } from '../../Contexts/AuthContext';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import HomeScreenHeader from '../../../src/components/homeScreenHeader';
import HeaderBar from '../../../src/components/HeaderBar';
import { SPACING } from '../../../src/theme/theme';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';

export default function Profilescreen() {
  const { currentUser } = useAuth();
  const [userDetails, setUserDetails] = useState([]);

  const fetchUser = async () => {
    const user = await firestore().collection('Users').doc(currentUser.uid).get();
    setUserDetails(user._data);
  }

  useEffect(() => {
    fetchUser();
  }, [])

   const url1 = "https://www.instagram.com/constructly.in/" ;

   const openUrl = async (url) => {
    try {
      const isSupported = await Linking.canOpenURL(url);
      if (isSupported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Cannot open link ${url}`);
      }
    } catch (error) {
      console.error('Error occurred while opening URL:', error);
      // Alert.alert('Error', 'Failed to open link. Please try again later.');
    }
  };

  return (
    <ScrollView style={styles.container} >

      {/* <HomeScreenHeader /> */}
      <HeaderBar title="Profile" />

      {/* Top Container */}
      <View style={styles.topContainer}>
        {/* Profile Pic, Name, Phone, Email */}
        <Image
          source={require('../../../src/assets/app_images/avatar.png')}
          style={styles.profilePic}
        />

        <View style={styles.pokemon}>
          <View style={[styles.subBox, {
            backgroundColor: color.GREY, borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }]} >

            <Text style={styles.subTitle}>Name</Text>
          </View>
          <View style={[styles.subBox, { backgroundColor: color.grey, borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>

            <Text style={styles.name}>{userDetails.userName ? userDetails.userName : 'loading...'}</Text>
          </View>

        </View>
        <View style={styles.pokemon}>
          <View style={[styles.subBox, {
            backgroundColor: color.GREY, borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }]} >
            <Text style={styles.subTitle}>Phone Number</Text>
          </View>
          <View style={[styles.subBox, { backgroundColor: color.grey, borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>

            <Text style={[styles.phoneNumber]}>{userDetails.phoneNum}</Text>

          </View>
        </View>

        <View style={styles.pokemon}>
          <View style={[styles.subBox, {
            backgroundColor: color.GREY, borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }]} >
            <Text style={styles.subTitle}>Email</Text>
          </View>

          <View style={[styles.subBox, { backgroundColor: color.grey, borderTopRightRadius: 10, borderBottomRightRadius: 10 }]}>

            <Text style={styles.email}>{userDetails.email}</Text>
          </View>

        </View>

      </View>

      {/* Bottom Container with Horizontal Components */}
      <View style={styles.bottomContainer}>
        {/* New Feature Component */}
        {/* <View style={styles.horizontalComponent}>
          <Text style={styles.componentTitle}>New Feature</Text>
          
        </View> */}

        <Text style={styles.componentTitle}> OurSocial Media</Text>
        {/* Social Media Handles Component */}

        <TouchableOpacity
        onPress={ () => {
          openUrl(url1)
        }}
        >
          <View style={{
            marginBottom: 20,
            alignItems: 'center',
            marginTop: SPACING.space_10 * 0.4,
            marginHorizontal: 20,
            paddingVertical: 10,
            height: heightPercentageToDP('20%'),
          }}>



            {/* <Text>Constructly.in</Text> */}

            <ImageBackground
              source={require('../../../image/OneDrive-2024-02-07/yo.png')}
              style={styles.socialMedia_Image}
            />
          </View>
        </TouchableOpacity>



        <Text style={styles.componentTitle}>Contact Us</Text>
        {/* Contact Us Component */}

        <TouchableOpacity
        >
        <View style={{
               marginBottom: 20,
               alignItems: 'center',
               marginTop: SPACING.space_10 * 0.4,
               marginHorizontal: 20,
               paddingVertical: 10,
               height: heightPercentageToDP('20%'),
        }}>

        <ImageBackground
              source={require('../../../image/OneDrive-2024-02-07/po.png')}
              style={styles.socialMedia_Image}
            />

        </View>
        </TouchableOpacity>
        
      </View>

    </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_white,
    // padding: 20,
    marginBottom: heightPercentageToDP("6%")
  },

  topContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: color.WHITE,

    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,

    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    height: heightPercentageToDP('33%'),

  },

  pokemon: {
    // backgroundColor: color.circle_light,
    // borderRadius: 20, 
    height: heightPercentageToDP('3.5%'),
    flexWrap: "wrap",
    width: widthPercentageToDP('80%'),
    alignContent: "space-around",
    marginBottom: 15

  },


  subBox: {
    flexDirection: 'row',
    alignItems: "center",
    // backgroundColor: color.GREY,
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('3.5%'),
    paddingHorizontal: 10,


  },


  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },

  name: {
    color: color.WHITE,
    fontSize: 20,
    // fontWeight: 'bold',
    // marginTop: 10,
  },
  phoneNumber: {
    color: 'white',
    fontSize: 20,
    // marginTop: 5,
  },
  email: {
    color: 'white',
    fontSize: 20,
    // marginTop: 5,
  },
  bottomContainer: {
    marginTop: 20,

  },
  horizontalComponent: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: SPACING.space_10 * 0.4,
    backgroundColor: color.WHITE,

    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,

    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    height: heightPercentageToDP('20%'),
  },
  componentTitle: {
    color: color.Obsidian,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: SPACING.space_10,
    paddingHorizontal: SPACING.space_20,
  },

  subTitle: {
    fontSize: 18,
    color: color.Obsidian

  },

  socialMedia_Image: {
    height: "105%",
    width: "100%",
    // borderTopRightRadius:100

  }
});

// const styles = StyleSheet.create({})