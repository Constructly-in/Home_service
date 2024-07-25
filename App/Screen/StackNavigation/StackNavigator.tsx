// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabnavigation from '../../TabNavigation/Tabnavigation';
import Test from '../Loginscreen/Test';
import Homescreen from '../Homescreen/Homescreen';
import Test2 from '../Signinscreen/Test2';
import Test3 from '../SingupScreen/Test3';

import AuthProvider from '../../Contexts/AuthContext';

import DetailScreen from '../HomeService/DetailScreen';
import Profilescreen from '../Profile/Profilescreen';
import OrderHistory from '../OrderHistory';
import Notification from '../Notification/Notification';
import RentBuy from '../Property/RentBuy';
import React from 'react';
import AddPG from '../Property/AddPG';
import PropertDetails from '../Property/PropertDetails';


const Stack = createNativeStackNavigator();

 export default function StackNavigator() {
  return (
    <AuthProvider>
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen 
       name="Login" 
       component={Test} 
       options={{animation: 'slide_from_bottom'}}
       />   
       <Stack.Screen name="SignScreen" component={Test2} 
       options={{animation: 'slide_from_bottom'}}
       /> 
       <Stack.Screen name="SingupScreen" component={Test3} 
       options={{animation: 'slide_from_bottom'}}
       />              
       <Stack.Screen name="Tabnavigation" component={Tabnavigation} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="Details" component={DetailScreen} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="Profile" component={Profilescreen} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="Order" component={OrderHistory} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="Notification" component={Notification} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="RentBuy" component={RentBuy} 
       options={{animation: "default"}}
       />               
       
       <Stack.Screen name="ADD" component={AddPG} 
       options={{animation: "default"}}
       />               
       <Stack.Screen name="PropertDetails" component={PropertDetails} 
       options={{animation: 'fade'}}
       />               
       
              
                    
                         
    </Stack.Navigator>
    </AuthProvider>
  );
} 