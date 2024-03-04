import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import Profilescreen from '../Screen/Profile/Profilescreen';
import Bookingscreen from '../Screen/Booking/Bookingscreen';
import color from '../utility/color';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
  <View style = {styles.conatiner} >

    


   <Tab.Navigator
   
   screenOptions={{headerShown: false , tabBarShowLabel : false , 
    tabBarStyle:{
      backgroundColor:color.Offwhite ,
      width:"96%",
      height:"6.2%",
      position:"absolute",
      bottom:15,
      borderRadius:40,
      alignItems:"center",
      marginHorizontal:"1.5%",
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowColor:color.BLACK,
      elevation: 2,
      
      
      
   }

  }}
   >
 


    <Tab.Screen name="Home" component={Homescreen}
     options={{
      //tabBarLabel:({color})=>(<Text style = {{color:color,fontSize:10,marginTop:-7,}}>HOME</Text>),
    tabBarIcon:({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',top:3
      }}>
        <Image
        source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/HomeIcon.png')}
        resizeMode="contain"
        style={{
          width:25,
          height:25,
      
          tintColor: focused? color.BLACK : color.Lightgrey ,
          
        }}
        
        />
        <Text style = {{color:focused? color.BLACK : color.Lightgrey , fontSize:12, marginBottom:2}}>HOME</Text>
        
      </View>
    )
    }}
     />
    <Tab.Screen name="Profile" component={Profilescreen} 
     options={{
  
    tabBarIcon:({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',top:3
      }}>

        {/* <View  style = {{backgroundColor:focused? color.LightOrange : color.PRIMARY , borderRadius:40 , width:60, justifyContent:"center",alignItems:"center"}}> */}
        <Image
        source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/ProfileIcon.png')}
        resizeMode="contain"
        style={{
          width:25,
          height:25,
          tintColor: focused? color.BLACK : color.grey
        }}
        
        />
        <Text style = {{color:focused? color.BLACK : color.grey  , fontSize:12, marginBottom:2}}>Profile</Text>
        {/* </View> */}
      </View>
    )
    }}
    />
    
    <Tab.Screen name="Booking" component={Bookingscreen} 
     options={{
      
    tabBarIcon:({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',top:3
      }}>
        <Image
        source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/HomeIcon.png')}
        resizeMode="contain"
        style={{
          width:25,
          height:25,
          tintColor: focused? color.BLACK : color.grey
        }}
        
        />
        <Text style = {{color:focused? color.BLACK : color.grey  , fontSize:12, marginBottom:2}}>Booking</Text>
        
      </View>
    )
    }}
    />

   </Tab.Navigator>
  
   
   </View>
  )
}
 const styles = StyleSheet.create({

  conatiner:{
    flex: 1,
    // paddingHorizontal:10  
  },

  color:{}

 
 })