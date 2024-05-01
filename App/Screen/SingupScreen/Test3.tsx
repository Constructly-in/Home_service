import { View, Text, Image, ImageBackground, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import color from '../../utility/color';
import MyButton from '../../../src/assets/Buttons/MyButton';
import MyTextInput from '../../../src/assets/Buttons/MyTextInput';
import auth from "@react-native-firebase/auth";
import {useAuth}  from '../../Contexts/AuthContext';
import LinearGradient from 'react-native-linear-gradient';

interface SignupScreenProps {
    navigation: any; // Change 'any' to the actual type if possible
    
}

export default function SingupScreen({navigation}:SignupScreenProps) {
    const { signup } = useAuth();
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUpTestfn = async () => {
        // Alert.alert("user created")
        if( phone !== "" && email !== "" && password !== "" && confirmPassword !== "" ){
            if (password !== confirmPassword) {
                Alert.alert("Password Doesn't match");
            }
            else {
                try{   
                    const userSignDoc = await signup(userName,phone,email,password);
                    if(userSignDoc !== undefined ) {
                        navigation.replace("Tabnavigation");
                    }else{
                        Alert.alert("Some error occured!");
                    }
                }catch{
                    Alert.alert("An error occured!");
                }
            }
        }
        else {
            Alert.alert("Please Fill in all the details!");
        }
        
    };

    return (
        <View style={styles.Container}>
            <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={[ color.gradiant1, color.gradiant ]} 
                                style={styles.Container}>
            <ImageBackground
                source={require('./../../../image/OneDrive-2024-02-07/circle.png')}
                style={styles.loginScreen}
            >
                {/* <Image
                    source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
                    style={styles.LogoImage}
                /> */}
                <View style = {{position:"relative" , top : "5%"}} >
                <Text style={styles.Title} >
                    Constructly.in
                </Text>
                </View>

                {/* <View style={styles.innerContainer}> */}


                    <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={[color.Offwhite, color.Offwhite]} 
                                style={styles.innerContainer}>

                    <MyTextInput onChangeText={(text: string) => setUserName(text)} placeholder="Name"  placeholderTextColor = {color.white}/>
                    <MyTextInput onChangeText={(text: string) => setPhone(text)} placeholder="Phone Number"  placeholderTextColor = {color.white} />
                    <MyTextInput
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                        placeholder="Enter E-Mail or User Name"  placeholderTextColor = {color.white}
                    />
                    <MyTextInput
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        placeholder="Password" placeholderTextColor = {color.white}
                        secureTextEntry
                    />
                    <MyTextInput
                        value={confirmPassword}
                        onChangeText={(text: string) => setConfirmPassword(text)}
                        placeholder="Confirm Password"
                        secureTextEntry
                        placeholderTextColor = {color.white}
                    />

                    <MyButton onPress={signUpTestfn} title={"Sign up"} />
                    </LinearGradient>
                {/* </View> */}
            </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    loginScreen: {
        height: heightPercentageToDP('100%'),
        width: widthPercentageToDP('100%'),
        alignItems: 'center',
    },

    Title: {
        textAlign: 'center',
        fontSize: widthPercentageToDP('7%'),
        color: color.Offwhite,
        marginTop: heightPercentageToDP('10%'),
        fontFamily: 'Cardo-Regular',
      
    },

    LogoImage: {
        height: heightPercentageToDP('15%'),
        width: widthPercentageToDP('40%'),
        position: 'absolute',
        left: 0,
        top: 0,
    },

    innerContainer: {
        height: heightPercentageToDP('60%'),
        width: widthPercentageToDP('90%'),
        backgroundColor: color.BLACK,
        borderRadius: widthPercentageToDP('5%'),
        paddingHorizontal: widthPercentageToDP('10%'),
        alignItems: "center",
        justifyContent: "center",
        position:"relative",
        top:"10%",
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor:color.BLACK,
        elevation: 5,

      },
});
