import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PropertyHomePage from '../Property/PropertyHomePage';
import HomeService from '../HomeService/HomeService';
import color from '../../utility/color';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarStyle: {
                        backgroundColor: color.cream,
                        height: "100%",
                        width: "100%",
                    },
                    tabBarInactiveTintColor: color.Offwhite, // Text color when inactive
                    tabBarActiveTintColor: "white",   // Text color when active
                    
                }}
                tabBarOptions={{
                    inactiveBackgroundColor: color.cream, // Background color when inactive
                }}
            >

                <Tab.Screen name="Home Service" component={HomeService} />
                <Tab.Screen name="Property service" component={PropertyHomePage} />

            </Tab.Navigator>
        </View>
    );
};

export default TopTabNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

