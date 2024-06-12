import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PropertyHomePage from '../Property/PropertyHomePage';
import HomeService from '../HomeService/HomeService';
import color from '../../../src/utility/color';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FONTFAMILY } from '../../../src/theme/theme';
import Rent from '../Property/Rent';
import Buy from '../Property/Buy';
import Pg from '../Property/Pg';

const Tab = createMaterialTopTabNavigator();

const PropertyNavigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
                    // swipeEnabled: true,
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen 
                    name="Rent" 
                    component={Rent} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.tabContainer, { backgroundColor: focused ? color.light_purple : color.darkgey }]}>
                                <Text style={[styles.tabText, { color: focused ? color.gold : color.Offwhite, fontFamily: focused ? FONTFAMILY.poppins_medium : FONTFAMILY.poppins_light }]}>
                                   Rent
                                </Text>
                            </View>
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Buy" 
                    component={Buy} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.tabContainer, { backgroundColor: focused ? color.light_purple : color.darkgey }]}>
                                <Text style={[styles.tabText, { color: focused ? color.gold : color.Offwhite, fontFamily: focused ? FONTFAMILY.poppins_medium : FONTFAMILY.poppins_light }]}>
                                    Buy
                                </Text>
                            </View>
                        )
                    }} 
                />
                <Tab.Screen 
                    name="PG's" 
                    component={Pg} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.tabContainer, { backgroundColor: focused ? color.light_purple : color.darkgey }]}>
                                <Text style={[styles.tabText, { color: focused ? color.gold : color.Offwhite, fontFamily: focused ? FONTFAMILY.poppins_medium : FONTFAMILY.poppins_light }]}>
                                    PG's
                                </Text>
                            </View>
                        )
                    }} 
                />
            </Tab.Navigator>
        </View>
    );
};

export default PropertyNavigation;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    tabBarStyle: {
        flexGrow:1,
        backgroundColor: 'transparent', 
        elevation: 0,
        shadowOpacity: 0,
   
      
    },
    tabBarIndicatorStyle: {
        height: 0,
    },
    tabContainer: { 
        flex:1,
        width: widthPercentageToDP("20%"),
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        position:"absolute",
        left:heightPercentageToDP('-3%')
    },
    tabText: {
        fontSize: 17,
    }
});
