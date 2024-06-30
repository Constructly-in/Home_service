import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import color from '../../../src/utility/color';
import MyButton from '../../../src/components/Buttons/MyButton';
import MyTextInput from '../../../src/components/Buttons/MyTextInput';
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../Contexts/AuthContext';

interface SignScreenProps {
    navigation: any;
}

export default function SignScreen({ navigation }: SignScreenProps) {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '570696891484-6127lf9k6ogrqmioehqi59gd31q803po.apps.googleusercontent.com',
        });
    }, []);

    const onGoogleButtonPress = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();
            console.log(idToken);

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error);
        }
    }

    const loginWithEmailAndPassword = async () => {
        if (email !== "" && password !== "") {
            try {
                const userDoc = await login(email, password);
                if (userDoc !== undefined) {
                    navigation.replace("Tabnavigation");
                }
            } catch {
                Alert.alert("An error occurred!");
            }
        } else {
            Alert.alert("Please fill in all the details!");
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[color.purple, color.dark_purple]}
                style={styles.container}
            >
                <ImageBackground
                    source={require('./../../../image/OneDrive-2024-02-07/circle.png')}
                    style={styles.loginScreen}
                >
                    <View style={{ position: "relative", top: "5%" }}>
                        <Text style={styles.title}>
                            Constructly.in
                        </Text>
                    </View>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[color.Offwhite, color.Offwhite]}
                        style={styles.innerContainer}
                    >
                        <MyTextInput
                            style={styles.inputText}
                            value={email}
                            onChangeText={(text: string) => setEmail(text)}
                            placeholder="Enter E-Mail"
                            placeholderTextColor={color.white}
                        />

                        <MyTextInput
                            style={styles.inputText}
                            value={password}
                            onChangeText={(text: string) => setPassword(text)}
                            placeholder="Password"
                            secureTextEntry
                            placeholderTextColor={color.white}
                        />

                        <Text
                            style={styles.textAccount}
                            onPress={() => navigation.navigate("SingupScreen")}
                        >
                            Don't Have an account yet? Sign Up
                        </Text>

                        <MyButton title={"LOGIN"} onPress={loginWithEmailAndPassword} />

                        <Text style={styles.orText}>OR</Text>
                        <MyButton title={"LOGIN WITH GOOGLE"} onPress={() => onGoogleButtonPress().then((userLog) => console.log(userLog))} />
                    </LinearGradient>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loginScreen: {
        height: hp('100%'),
        width: wp('100%'),
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: wp('7%'),
        color: color.gold,
        marginTop: hp('10%'),
        fontFamily: "Cardo-Bold"
    },

    innerContainer: {
        height: hp('60%'),
        width: wp('90%'),
        borderRadius: wp('5%'),
        paddingHorizontal: wp('10%'),
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "13%",
        shadowRadius: 2,
        shadowOffset: {
            width: 100,
            height: 100,
        },
        shadowColor: color.BLACK,
        elevation: 5,
    },

    textAccount: {
        alignSelf: "flex-end",
        marginRight: wp('5%'),
        color: color.PRIMARY,
        marginBottom: hp('1%'),
        fontWeight: '400',
        fontSize: wp('4%'),
    },

    orText: {
        fontSize: wp('6%'),
        color: color.PRIMARY,
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
    },
    inputText: {
        color: color.white,
        // backgroundColor:"red",
        flex:1
    },

    linearGradient: {},

    inner: {
        backgroundColor: color.PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        borderColor: color.Offwhite,
        borderWidth: 1
    },

    topShadow: {
        shadowOffset: {
            width: -6,
            height: -6
        },

        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "FBFFFF"
    },
    bottomShadow: {
        shadowOffset: {
            width: 6,
            height: 6
        },

        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: "B7C4DD"
    }
});
