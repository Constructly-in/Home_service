import { View, Text, Image, ImageBackground, StyleSheet, Alert } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import React, { useState } from 'react';
import color from '../../utility/color';
import MyButton from '../../../src/assets/Component/MyButton';
import MyTextInput from '../../../src/assets/Component/MyTextInput';
import auth from "@react-native-firebase/auth";

export default function SingupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signUpTestfn = () => {
        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('User created with this credential ' + email, password);
            })
            .catch(err => {
                console.log(err.nativeErrorMesssage);
                Alert.alert(err.nativeErrorMesssage);
            });
    };

    return (
        <View style={styles.Container}>
            <ImageBackground
                source={require('./../../../image/OneDrive-2024-02-07/realBg.png')}
                style={styles.loginScreen}
            >
                {/* <Image
                    source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
                    style={styles.LogoImage}
                /> */}

                <Text style={styles.Title} >
                    Constructly.in
                </Text>

                <View style={styles.innerContainer}>
                    <MyTextInput placeholder="Phone Number" />
                    <MyTextInput
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}
                        placeholder="Enter E-Mail or User Name"
                    />
                    <MyTextInput
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <MyTextInput
                        value={confirmPassword}
                        onChangeText={(text: string) => setConfirmPassword(text)}
                        placeholder="Confirm Password"
                        secureTextEntry
                    />

                    <MyButton onPress={signUpTestfn} title={"Sign up"} />
                </View>
            </ImageBackground>
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
        color: color.PRIMARY,
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
        backgroundColor: '#FFFFFF',
        borderRadius: widthPercentageToDP('5%'),
        paddingHorizontal: widthPercentageToDP('10%'),
        alignItems: "center",
        justifyContent: "center",
        position:"relative",
        top:"10%",
        elevation:10
      },
});
