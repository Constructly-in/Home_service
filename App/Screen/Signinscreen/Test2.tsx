import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import color from '../../utility/color';
import MyButton from '../../../src/assets/Component/MyButton';
import MyTextInput from '../../../src/assets/Component/MyTextInput';
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../Contexts/AuthContext';

interface SignScreenProps {
    navigation: any; // Change 'any' to the actual type if possible
    
}

export default function SignScreen({ navigation }: SignScreenProps) {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPasswword] = useState("");

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '570696891484-6127lf9k6ogrqmioehqi59gd31q803po.apps.googleusercontent.com',
        });
    }, []);

    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken, user } = await GoogleSignin.signIn();
            console.log(user);
            Alert.alert("Successful login");
            navigation.navigate("Tabnavigation");
            

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log(error);
        }
    }

    const loginWithEmailAndPassword = async() => {
        if (email !== "" && password !== ""){
            try {
              await login(email,password);
              navigation.navigate("Tabnavigation");
            }catch {
              Alert.alert("An error occured!");
            }
        }else {
        Alert.alert("Please Fill in all the details!")
        }
    };

    // const NeuMorph = ({children , size , style }) => {

    //     return(
    //         <View style = {styles.topShadow}>
    //              <View style = {styles.bottomShadow}>
    //                  <View 
    //                    style = {[ styles.inner , {width: size || 40 , height: size || 40 , borderRadius: size /2 ||40/2},style
    //                  ]}
    //                 >
    //                     {children}
    //                 </View>

    //              </View>
    //         </View>     

    //     )
    // };






    return (

        <View style={styles.Container}>
            <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 
                                colors={['#000000', '#20232C']} 
                                style={styles.Container}>
            <ImageBackground
                source={require('./../../../image/OneDrive-2024-02-07/loginBG.png')}
                style={styles.loginScreen}
            >
                {/* <Image
          source={require('./../../../image/OneDrive-2024-02-07/logo.png')}
          style={styles.LogoImage}
        /> */}

                <View style={{ position: "relative", top: "5%" }} >
                    <Text style={styles.Title} >
                        Constructly.in
                    </Text>
                </View>

             {/* <NeuMorph > */}
                {/* <View style={styles.innerContainer}> */}
                <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 

                                // ['#242831', '#414345']
                                
                                colors={['#1f222a', '#414345']} 
                                style={styles.innerContainer}>

                    

                    
                        <MyTextInput style={styles.inputText}
                            value={email}
                            onChangeText={(text: string) => setEmail(text)}
                            placeholder="Enter E-Mail"
                        />
                    

                   
                        <MyTextInput style={styles.inputText}
                            value={password}
                            onChangeText={(text: string) => setPasswword(text)}
                            placeholder="Password"
                            secureTextEntry
                        />

                    
                        <Text
                            style={styles.TextAccount}
                            onPress={() => navigation.navigate("SingupScreen")}
                        >
                            Don't Have an account yet ?
                        </Text>


                  

                    <MyButton title={"LOGIN"} onPress={loginWithEmailAndPassword} />
                    


                    <Text style={styles.Ortext}>OR</Text>
                    <MyButton title={"LOGIN WITH GOOGLE"} onPress={onGoogleButtonPress} />
                    </LinearGradient>
                {/* </View> */}
                {/* </NeuMorph> */}

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
        color: color.PRIMARY,
        marginTop: heightPercentageToDP('10%'),
        fontFamily: "Cardo-Bold"
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
        // backgroundColor: color.BLACK,
        borderRadius: widthPercentageToDP('5%'),
        paddingHorizontal: widthPercentageToDP('10%'),
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        top: "13%",
        shadowRadius: 2,
        shadowOffset: {
          width: 100,
          height: 100,
        },
        shadowColor:color.BLACK,
        elevation: 5,
    },

    TextAccount: {
        alignSelf: "flex-end",
        marginRight: widthPercentageToDP('5%'),
        color: color.PRIMARY,
        marginBottom: heightPercentageToDP('1%'),
        fontWeight: '400',
        fontSize: widthPercentageToDP('4%'),
    },

    Ortext: {
        fontSize: widthPercentageToDP('6%'),
        color: color.PRIMARY,
        marginTop: heightPercentageToDP('1%'),
        marginBottom: heightPercentageToDP('1%'),
    },
    inputText: {
        color: color.white,
        
    },

    linearGradient:{},

    inner:{
      backgroundColor:color.PRIMARY,
      alignItems:"center",
      justifyContent:"center",
      borderColor:color.Offwhite,
      borderWidth:1
    },
   
    topShadow:{
        shadowOffset:{
            width:-6,
            height: -6
        },

        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:"FBFFFF"
    },
    bottomShadow:{
        shadowOffset:{
            width:  6,
            height: 6
        },

        shadowOpacity:1,
        shadowRadius:6,
        shadowColor:"B7C4DD"
    }

});
