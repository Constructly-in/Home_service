import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import Profilescreen from '../Screen/Profile/Profilescreen';
import Bookingscreen from '../Screen/Booking/Bookingscreen';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
  <View style = {styles.conatiner} >
   <Tab.Navigator
   
   screenOptions={{headerShown: false , tabBarShowLabel : false
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
          tintColor: focused? '#ff6d00' : '#011502'
        }}
        
        />
        <Text style = {{color:focused? '#ff6d00' : '#011502' , fontSize:12}}>HOME</Text>
        
      </View>
    )
    }}
     />
    <Tab.Screen name="Profile" component={Profilescreen} 
     options={{
  
    tabBarIcon:({focused})=>(
      <View style={{alignItems:'center',justifyContent:'center',top:3
      }}>
        <Image
        source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/ProfileIcon.png')}
        resizeMode="contain"
        style={{
          width:25,
          height:25,
          tintColor: focused? '#ff6d00' : '#011502'
        }}
        
        />
        <Text style = {{color:focused? '#ff6d00' : '#011502' , fontSize:12}}>Profile</Text>
        
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
          tintColor: focused? '#ff6d00' : '#011502'
        }}
        
        />
        <Text style = {{color:focused? '#ff6d00' : '#011502' , fontSize:12}}>Booking</Text>
        
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
    
           
    
  }
 })