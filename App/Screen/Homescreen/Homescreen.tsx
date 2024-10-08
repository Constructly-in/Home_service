import { Image, ScrollView, ScrollViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyButton from '../../../src/assets/Buttons/MyButton'
import CategoryButton from '../../../src/assets/Buttons/CategoryButton'
import color from '../../../src/utility/color'
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomIcon from '../../../src/components/CustomIcon'
import TopTabNavigation from '../TopTabNavigation/TopTabNavigation'
import HomeService from '../HomeService/HomeService'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface HomescreenProps {
  navigation: any; // Change 'any' to the actual type if possible

}




const Homescreen = ({ navigation }: HomescreenProps) => {

  const [selectedOption, setSelectedOption] = useState<'Home' | 'Property'>('Home');

  return (


    <View style={styles.Container} >


    <LinearGradient start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[color.dark_purple, color.purple]}
      style={styles.TopContainer}>

      

        {/* Left side - Profile Image */}
        <TouchableOpacity 
        style={styles.ProfileContainer}
        onPress={() => navigation.navigate('Profile')}>
        {/* <View > */}
          <Image
            source={require('../../../src/assets/app_images/avatar.png')}
            style={styles.ProfileImage}
          />
        {/* </View> */}

        </TouchableOpacity>

        {/* Center - Logo Image */}
        <View style={styles.LogoContainer}>
          <Image
            source={require('../../../image/Login_AS/constructly_logo.png')}
            style={styles.LogoImage}
          />
        </View>

        {/* Right side - Settings */}
        <TouchableOpacity style={styles.SettingsContainer}
        onPress={() => navigation.navigate('Notification') }
        >

          <CustomIcon name='bell' size={25} color={color.gold} style ={styles.notificationImage}  />
          
        </TouchableOpacity>

      
      </LinearGradient>
      <TopTabNavigation />

      </View>

  )
}

export default Homescreen

const styles = StyleSheet.create({



  Container: {
    // Remove fixed height and width
    flex: 1,
  },



  TopContainer: {
    flex: 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05, // 5% of the screen width
    paddingVertical: windowHeight * 0.01, // 5% of the screen height
    backgroundColor: color.white,
    borderBottomLeftRadius: 20 ,
    borderBottomRightRadius: 20 ,
  },

  ProfileContainer: {

    width: "10%", // Adjust according to your requirement
    height: "80%", // Adjust according to your requirement
    borderRadius: 20, // Half of the width and height to make it circular
    backgroundColor: 'white',
    overflow: 'hidden',


  },

  ProfileImage: {
    width: '100%',
    height: '100%',
  },

  LogoContainer: {
    width: "20%",
    height: "100%"

  },


  LogoImage: {
    width: "100%",
    height: "100%"
  },

  notificationImage: {
    width: "100%",
    height: "100%"
  },

  SettingsContainer: {
    width: "10%",
    height: "60%",
    
  },




  Header: {
    flex: 1,
    // backgroundColor: 'green',
    height: windowHeight * 0.05, // 20% of the screen height

    // backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: "space-around",

  },

  homeService: {
    flex: 1,
    justifyContent: "center",
    // alignSelf:"center",
    alignItems: "center",
    // backgroundColor:"white"


  },

  propertyService: {
    flex: 1,
    alignItems: "center",

    backgroundColor: "green"
  },

  Title: {
    fontSize: RFValue(16), // Using responsive font size
    fontFamily: 'Poppins-Regular',
    color: color.BLACK,
    paddingTop: windowHeight * 0.01

  },

  Title_2: {
    fontSize: RFValue(16), // Using responsive font size
    fontFamily: 'Poppins-Regular',
    color: color.BLACK,
    paddingTop: windowHeight * 0.01
  },

  selected: {
    color: 'red', // Change to blue for 'Property' option
  },

  SubTitle: {
    fontSize: RFValue(20), // Using responsive font size
    fontFamily: 'Poppins-Black',
    color: color.circle_light,
  },


});