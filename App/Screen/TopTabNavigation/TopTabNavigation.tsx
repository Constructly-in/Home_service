import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PropertyHomePage from '../Property/PropertyHomePage';
import HomeService from '../HomeService/HomeService';
import color from '../../../src/utility/color';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Font } from '@react-email/components';
import { FONTFAMILY } from '../../../src/theme/theme';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        height: heightPercentageToDP('5%'),
                        width: widthPercentageToDP('80%'),
                        marginTop:"2%" ,
                        // borderRadius:50,
                        marginHorizontal:"10%" ,
                        elevation: 0, // Remove elevation/shadow on Android
                        shadowOpacity: 0,
                        
                    },
                    tabBarIndicatorStyle: {
                      height: 0, // Hide the indicator line
                  },
                    swipeEnabled:true,
                    tabBarShowLabel: false,
                    
                    
                }}
               
            >

                <Tab.Screen name="Home Service" component={HomeService} 
                options={{
                    tabBarIcon: ({ focused }) => (
                      <View style=
                        {{
                         backgroundColor: focused? color.light_purple : color.darkgey, height:40 ,
                         width:160 ,
                         position:"absolute",
                         top:-10 ,
                         left:-68 ,
                         alignItems: 'center', 
                         borderRadius:50
                        }}>
                           <Text 
                           style={{ color: focused ? color.gold : color.Offwhite, fontSize: 17, top:6.5 ,
                             fontFamily: focused? FONTFAMILY.poppins_medium  : FONTFAMILY.poppins_light}}>
                            Home Service
                           </Text>
                      </View>
                    )
                  }}
                />
                <Tab.Screen name="Property service" component={PropertyHomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                      <View style=
                        {{
                         backgroundColor: focused? color.light_purple : color.darkgey, height:40 ,
                         width:160 ,
                         position:"absolute",
                         top:-10 ,
                         left:-68 ,
                         alignItems: 'center', 
                         borderRadius:50
                        }}>
                           <Text 
                           style={{ color: focused ? color.gold : color.Offwhite, fontSize: 17, top:6 ,
                            fontFamily: focused? FONTFAMILY.poppins_medium  : FONTFAMILY.poppins_light
                           }}>
                            Property service 
                           </Text>
                      </View>
                    )
                  }}
                />

            </Tab.Navigator>
        </View>
    );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center"
        
    },
});

