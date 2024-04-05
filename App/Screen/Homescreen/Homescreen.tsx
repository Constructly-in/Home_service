import { Image, ScrollView, ScrollViewComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MyButton from '../../../src/assets/Component/MyButton'
import CategoryButton from '../../../src/assets/Component/CategoryButton'
import color from '../../utility/color'
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomIcon from '../../../src/components/CustomIcon'
import TopTabNavigation from '../TopTabNavigation/TopTabNavigation'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface HomescreenProps {
  navigation: any; // Change 'any' to the actual type if possible

}


const Homescreen = ({ navigation }: HomescreenProps) => {

  const [selectedOption, setSelectedOption] = useState<'Home' | 'Property'>('Home');
  
  return (
    <LinearGradient start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[color.gradiant1, color.gradiant]}
      style={styles.Container}>
       

       

      <View style={styles.TopContainer}>
        {/* Left side - Profile Image */}
        <View style={styles.ProfileContainer}>
          <Image
            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/facely-metapeople-3d-avatar-set/512/17._Designer.png' }}
            style={styles.ProfileImage}
          />
        </View>

        {/* Center - Logo Image */}
        <View style={styles.LogoContainer}>
          <Image
            source={require('../../../image/Login_AS/constructly_logo.png')}
            style={styles.LogoImage}
          />
        </View>

        {/* Right side - Settings */}
        <View style={styles.SettingsContainer}>
          
           <Image
            source={{uri:"https://image.similarpng.com/very-thumbnail/2020/08/Notification-bell-icon-new-message-bell-Premium-vector-PNG.png"}}
            style={styles.notificationImage}
          /> 
        

        </View>
      </View>


      <ScrollView
        style= {{flex:1}}
        >

      {/* <View style={styles.Header}>

      <TouchableOpacity onPress={() => setSelectedOption('Home')}>
          <Text style={[styles.Title, selectedOption === 'Home' && styles.selected]}>Home Service</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption('Property')}>
          <Text style={[styles.Title_2, selectedOption === 'Property' && styles.selected]}>Property</Text>
        </TouchableOpacity> 
      </View> */}

      <TopTabNavigation />

      <View style={styles.SubContainer}>
      


        {/* <View style={styles.RightContainer}> */}


        <View style={styles.Box}>

          {/* <Text>student</Text> */}

          <Image source={require('../../../image/Login_AS/student.png')}
            style={{ width: "90%", height: "90%" }}
          />
          <CategoryButton title={'STUDENT  >>'} onPress={() => navigation.navigate("Student")} />
        </View>

        <View style={styles.Box}>
          {/* <Text>Home</Text> */}

          <Image source={require('../../../image/Login_AS/contractor.png')}
            style={{ width: "90%", height: "90%" }}
          />
          <CategoryButton title={'contactor >>'} onPress={() => navigation.navigate("Student")} />

        </View>

        <View style={styles.Box}>
          {/* <Text>Home</Text> */}

          <Image source={require('../../../image/Login_AS/homeowner.png')}
            style={{ width: "90%", height: "90%" }}
          />
          <CategoryButton title={'Home-owner >>'} onPress={() => navigation.navigate("Student")} />

        </View>

        <View style={styles.Box}>
          {/* <Text>Home</Text> */}

          <Image source={require('../../../image/Login_AS/shopowner.png')}
            style={{ width: "90%", height: "90%" }}
          />
          <CategoryButton title={'Retailer  >>'} onPress={() => navigation.navigate("Student")} />


        </View>

  

      
      </View>
      </ScrollView>
    </LinearGradient>

  )
}

export default Homescreen

const styles = StyleSheet.create({
  Container: {
    // Remove fixed height and width
    flex: 1,
  },



  TopContainer: {
    flex: 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05, // 5% of the screen width
    paddingTop: windowHeight * 0.01, // 5% of the screen height
    backgroundColor:color.Offwhite,
    
    // borderBottomEndRadius: 20,
    // borderBottomLeftRadius: 20
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
    width:"20%",
    height:"100%"

  },


  LogoImage: {
    width:"100%",
    height:"100%"
  },

  notificationImage:{
    width:"100%",
    height:"100%"
  },

  SettingsContainer:{
    width:"10%",
    height:"60%",
    backgroundColor:"black"
  },




  Header: {
    flex: 1,
    // backgroundColor: 'green',
    height: windowHeight * 0.05, // 20% of the screen height
    
    // backgroundColor:"red",
    flexDirection:'row',
    justifyContent:"space-around",

  },

  homeService:{
    flex:1,
    justifyContent:"center",
    // alignSelf:"center",
    alignItems:"center",
    // backgroundColor:"white"
    

  },

  propertyService:{
    flex:1,
    alignItems:"center",

    backgroundColor:"green"
  },

  Title: {
    fontSize: RFValue(16), // Using responsive font size
    fontFamily: 'Poppins-Regular',
    color: color.BLACK,
    paddingTop:windowHeight* 0.01
   
  },

  Title_2: {
    fontSize: RFValue(16), // Using responsive font size
    fontFamily: 'Poppins-Regular',
    color: color.BLACK,
    paddingTop:windowHeight* 0.01
  },

  selected: {
    color: 'red', // Change to blue for 'Property' option
  },

  SubTitle: {
    fontSize: RFValue(20), // Using responsive font size
    fontFamily: 'Poppins-Black',
    color: color.circle_light,
  },

  SubContainer: {
    flex: 40,
    marginTop: windowHeight * 0.01, // 1% of the screen height
    height: windowHeight * 0.75, // 75% of the screen height
    flexWrap: 'wrap',
    alignContent: 'space-around',
    // backgroundColor:'white'
  },

  Box: {
    padding: windowWidth * 0.02, // 2% of the screen width
    height: windowHeight * 0.22, // 20% of the screen height
    width: windowWidth * 0.45, // 40% of the screen width
    marginTop: windowHeight * 0.07, // 5% of the screen height
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'pink'
  },
});