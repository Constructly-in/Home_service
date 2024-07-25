import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../Screen/Homescreen/Homescreen';
import Profilescreen from '../Screen/Profile/Profilescreen';
import CartScreen from '../Screen/CartScreen/CartScreen';
import color from '../../src/utility/color';
import CustomIcon from '../../src/components/CustomIcon';
import OrderHistory from '../Screen/OrderHistory';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {focused && <View style={styles.activeIndicator} />}
                <Image
                  source={require('../../image/OneDrive-2024-02-07/HomeIcon.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    { tintColor: focused ? color.purple : color.grey }
                  ]}
                />
                <Text style={[styles.label, { color: focused ? color.purple : color.grey }]}>HOME</Text>
              </View>
            )
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {focused && <View style={styles.activeIndicator} />}
                <Image
                  source={{ uri: 'https://img.icons8.com/material-rounded/24/shopping-cart.png' }}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    { tintColor: focused ? color.purple : color.grey }
                  ]}
                />
                <Text style={[styles.label, { color: focused ? color.purple : color.grey }]}>Cart</Text>
              </View>
            )
          }}
        />

        <Tab.Screen
          name="Order History"
          component={OrderHistory}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {focused && <View style={styles.activeIndicator} />}
                <CustomIcon
                  name="cart"
                  size={25}
                  color={focused ? color.purple : color.grey}
                />
                <Text style={[styles.label, { color: focused ? color.purple : color.grey }]}>Order History</Text>
              </View>
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profilescreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                {focused && <View style={styles.activeIndicator} />}
                <Image
                  source={require('../../image/OneDrive-2024-02-07/ProfileIcon.png')}
                  resizeMode="contain"
                  style={[
                    styles.icon,
                    { tintColor: focused ? color.purple : color.grey }
                  ]}
                />
                <Text style={[styles.label, { color: focused ? color.purple : color.grey }]}>Profile</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    position: 'absolute',
    height: "6.5%",
    backgroundColor: color.WHITE,
    borderTopWidth: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 3,
    //  backgroundColor:"red"

  },
  icon: {
    width: 25,
    height: 25,

  },
  label: {
    fontSize: 12,
    marginBottom: 2,

  },
  activeIndicator: {
    position: 'absolute',
    top: -10,
    width: '80%',
    height: 3,
    backgroundColor: color.purple,

  },
});
