import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import Profilescreen from '../Screen/Profile/Profilescreen';
import Bookingscreen from '../Screen/CartScreen/CartScreen';
import color from '../utility/color';
import LinearGradient from 'react-native-linear-gradient';
import CartScreen from '../Screen/CartScreen/CartScreen';
import { COLORS } from '../../src/theme/theme';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../../src/components/CustomIcon';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <View style={styles.conatiner} >




      <Tab.Navigator

        screenOptions={{
          headerShown: false, tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,

          tabBarBackground: () => (
            <BlurView
              overlayColor=""
              blurAmount={15}
              style={styles.BlurViewStyles}
            />
          ),
        }}
      >



        <Tab.Screen name="Home" component={Homescreen}
          options={{
            //tabBarLabel:({color})=>(<Text style = {{color:color,fontSize:10,marginTop:-7,}}>HOME</Text>),
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', top: 3
              }}>
                <Image
                  source={require('../../image/OneDrive-2024-02-07/HomeIcon.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,

                    tintColor: focused ? "orange" : color.GREY,

                  }}

                />
                <Text style={{ color: focused ? color.gold : color.GREY, fontSize: 12, marginBottom: 2 }}>HOME</Text>

              </View>
            )
          }}
        />
        <Tab.Screen name="Profile" component={Profilescreen}
          options={{

            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', top: 3
              }}>

                {/* <View  style = {{backgroundColor:focused? color.LightOrange : color.PRIMARY , borderRadius:40 , width:60, justifyContent:"center",alignItems:"center"}}> */}
                <Image
                  source={require('../../image/OneDrive-2024-02-07/ProfileIcon.png')}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "orange"  : color.GREY
                  }}

                />
                <Text style={{ color: focused ? color.gold : color.GREY, fontSize: 12, marginBottom: 2 }}>Profile</Text>
                {/* </View> */}
              </View>
            )
          }}
        />

        <Tab.Screen name="Cart" component={CartScreen}
          options={{

            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', top: 3
              }}>

                <CustomIcon
                  name="cart"
                  size={25}
                  color={
                    focused ? "orange"  : color.GREY
                  }
                />

                
                <Text style={{ color: focused ? color.gold : color.GREY, fontSize: 12, marginBottom: 2 }}>Booking</Text>

              </View>
            )
          }}
        />

        {/* <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            /> */}

      </Tab.Navigator>


    </View>
  )
}
const styles = StyleSheet.create({

  conatiner: {
    flex: 1,
    // paddingHorizontal:10  
  },

  color: {},

  tabBarStyle: {
    //   backgroundColor:color.Offwhite ,
    //   width:"96%",
    //   height:"6.2%",
    //   position:"absolute",
    //   bottom:15,
    //   borderRadius:40,
    //   alignItems:"center",
    //   marginHorizontal:"1.5%",
    //   shadowRadius: 2,
    //   shadowOffset: {
    //     width: 0,
    //     height: -3,
    //   },
    //   shadowColor:color.BLACK,
    //   elevation: 2,
    // }

    // height: 80,
    position: 'absolute',
    height: "6.2%",
    backgroundColor: "rgba(11, 17, 20, 0.7)",
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    
  
  },

  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    
  }


})