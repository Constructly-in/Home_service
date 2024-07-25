import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Linking, Alert } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../src/utility/color';
import firestore from '@react-native-firebase/firestore'
import { useAuth } from '../../Contexts/AuthContext';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import HeaderBar from '../../../src/components/HeaderBar';
import { FONTFAMILY, SPACING } from '../../../src/theme/theme';


type OpenURLButtonProps = {
  url: string;
  children: React.ReactNode;
};

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

  // const url1 = "https://www.instagram.com/constructly.india/";

  // const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  //   const handlePress = async () => {
  //     try {
  //       const supported = await Linking.canOpenURL(url);
  //       if (supported) {
  //         await Linking.openURL(url);
  //       }
  //       else {
  //         Alert.alert(`Don't know how to open this URL: ${url}`);
  //       }
  //     } catch (error) {
  //       Alert.alert(`An error occurred: ${error.message}`);
  //     }
  //   };
  
  //   return (
  //     <TouchableOpacity onPress={handlePress}>
  //       {children}
  //     </TouchableOpacity>
  //   );
  // };

  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
    }

  return (
    <ScrollView style={styles.container} >

      {/* <HomeScreenHeader /> */}
      <HeaderBar title="Profile" />

      {/* Top Container */}
      {/* <View style={styles.topContainer}> */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={[color.purple, color.dark_purple]}
          style={styles.topContainer}>

         
          <Image
            source={require('../../../src/assets/app_images/avatar.png')}
            style={styles.profilePic}
          />
          <View style={{
            flexDirection: 'row',
            alignItems: "center",
            marginBottom: 10,
          }}>

            <Text style={styles.name}>{userDetails.userName ? userDetails.userName : 'loading...'}</Text>
          </View>

          {/* </View> */}
          <View style={styles.pokemon}>
            <View style={[styles.subBox, {
              backgroundColor: color.WHITE, borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }]} >
              <Text style={styles.subTitle}>Phone Number</Text>
            </View>
            <View style={[styles.infobox, styles.subBox]}>

              <Text style={[styles.phoneNumber]}>{userDetails.phoneNum}</Text>

            </View>
          </View>

          <View style={styles.pokemon}>
            <View style={[styles.subBox, {
              backgroundColor: color.WHITE, borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }]} >
              <Text style={styles.subTitle}>Email</Text>
            </View>

            <View style={[styles.infobox, styles.subBox]}>

              <Text style={styles.email}>{userDetails.email}</Text>
            </View>

          </View>

          <TouchableOpacity style = {{backgroundColor:"red", height: heightPercentageToDP('4%'), width:widthPercentageToDP('20%'),
            flexDirection:"row" , alignItems:"center", justifyContent:"center" ,
            borderRadius:10
          }}
          onPress={{}}>
            <Text style ={{fontSize:15,
              color:color.WHITE
            }}>
              Log out
            </Text>
          </TouchableOpacity>

       

      {/* </View> */}
      </LinearGradient>

      <View style={styles.bottomContainer}>
        <Text style={styles.componentTitle}>Our Social Media</Text>
        {/* <OpenURLButton url={url1}> */}
        <TouchableOpacity 
               onPress={ 
                ()=> openWebsite('https://www.instagram.com/constructly.pro?igsh=cWl3bDY3YzZwNG01')
              }
       >
           
          <View style={{
            marginBottom: 20,
            alignItems: 'center',
            marginTop: SPACING.space_10 * 0.4,
            marginHorizontal: 20,
            paddingVertical: 10,
            height: heightPercentageToDP('20%'),
          }}>
            <Image
              source={require('../../../image/OneDrive-2024-02-07/yo.png')}
              style={styles.socialMedia_Image}
            />
          </View>
          </TouchableOpacity> 
        {/* </OpenURLButton> */}



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
    backgroundColor: color.dark_purple,

    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,

    marginHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    height: heightPercentageToDP('35%'),

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
    textTransform: "uppercase",
    fontFamily: FONTFAMILY.poppins_medium
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

  },

  infobox: {
    backgroundColor: color.light_purple,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }
});

// const styles = StyleSheet.create({})