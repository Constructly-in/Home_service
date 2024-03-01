import { Alert, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import color from '../../utility/color'
import MyButton from '../../../src/assets/Component/MyButton'
import MyTextInput from '../../../src/assets/Component/MyTextInput'
import Socialmedia from '../../../src/assets/Component/Socialmedia'
import {useAuth}  from '../../Contexts/AuthContext'
import { create } from 'react-test-renderer'

export default function SingupScreen() {
    const { signup } = useAuth();
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [userPassword, setPasswword] = useState("")
    const [Confipassword, setConfirmPassword] = useState("")

    const signUpTestfn = async () => {
        if( phone !== "" && email !== "" && userPassword !== "" && Confipassword !== "" ){
            if (userPassword !== Confipassword) {
                Alert.alert("Password Doesn't match");
            }
            else {
                try{   
                    await signup(phone,email,userPassword);
                }catch{
                    Alert.alert("An error occured!");
                }
            }
        }
        else {
            Alert.alert("Please Fill in all the details!");
        }
       
    };


    // Alert.alert(email)

    return (
        <View style={styles.Container}>
            <ImageBackground source={require('./../../../image/OneDrive-2024-02-07/bg.png')}
                style={styles.loginScreen}
            >
                <Image source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
                    style={styles.LogoImage}
                />

                <Text style={styles.Title} >
                    Constructly.in
                </Text>

                <View style={styles.innerContainer}>
                    {/* value , on chance text  */}
                    
                    
                    <MyTextInput value={phone} onChangeText={(text:string) => setPhone(text)} placeholder="Phone Number" />


                    <MyTextInput value={email} onChangeText={(text:string) => setEmail(text)} placeholder="Enter E-Mail or User Name" />
                    <MyTextInput value={userPassword} onChangeText={(text:string) => setPasswword(text)} placeholder="Password" secureTextEntry />
                    <MyTextInput value={Confipassword} onChangeText={(text:string) => setConfirmPassword(text)}  placeholder="Confirm Password" secureTextEntry />

                   
                    <MyButton onPress={ signUpTestfn} title={"Sign up"} />
                    <Text style={styles.Ortext}>OR</Text>
                    <Socialmedia />
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },


    loginScreen: {
        height: 850,
        width: 410,
        alignItems: 'center',
    },

    Title: {
        textAlign: 'center',
        fontSize: 42,
        color: color.PRIMARY,
        // position:'relative',
        // top:120,
        marginTop: 100,
        fontFamily: "KaushanScript-Regular"

    },

    LogoImage: {
        height: 100,
        width: 195,
        position: 'absolute',
        left: 0,
        top: 0
    },

    innerContainer: {
        height: 500,
        width: 370,
        backgroundColor: 'rgba(255, 109, 0, 0.6)',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 40,
        alignItems: "center",
        justifyContent: "center"

    },

    TextAccount: {

        alignSelf: "flex-end",
        marginRight: 10,
        color: color.BLACK,
        marginBottom: 9,
        fontWeight: '400',
        fontSize: 15
    },
    Ortext: {
        fontSize: 25,
        color: color.BLACK,
        marginTop: 10
    }
})