import { Alert } from "react-native";
import  auth from "@react-native-firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore'
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
  }

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [currentUserInfo, setCurrentUserInfo] = useState([]);

    function signup(userName,phone,email,userPassword) {
        return auth().createUserWithEmailAndPassword(email, userPassword).then( async (signUpDoc) => {
            firestore().collection('Users').doc(signUpDoc.user.uid)
            .set({
                userName: userName,
                phoneNum: phone,
                email: email,
                accType: 3,
                createdAt: new Date()
            })
            .catch(err => {
                Alert.alert(err);
            });

            await AsyncStorage.setItem('userEmail', signUpDoc.user.email);
            return signUpDoc
        })
        .catch(err => {
            if (err.code === 'auth/email-already-in-use') {
                Alert.alert('Error: Email address already in use!');
            }
          
            else if (err.code === 'auth/invalid-email') {
                Alert.alert('Email address is invalid!');
            }
        });
    };

    function login(email, userPassword) {
        return auth().signInWithEmailAndPassword(email, userPassword).then( async (userDoc)=> {
            // const users = await firestore().collection('Users').get();
                // const user = await firestore().collection('Users').doc(userDoc.user.uid).get();
                // setCurrentUser(user._data);
            await AsyncStorage.setItem('userEmail', userDoc.user.email);
            return userDoc
        }).catch(err => {
            if (err.code === 'auth/email-already-in-use') {
                Alert.alert('Error: Email address already in use!');
            }
            else if (err.code === 'auth/invalid-credential') {
                Alert.alert('Invalid credentials!');
            }
            else if (err.code === 'auth/invalid-email') {
                Alert.alert('Email address is invalid!');
            }
        })
    }

    function logout() {
        return auth().signOut();
    }
    function setUserInfo (infoUser) {
        setCurrentUserInfo(infoUser);
        console.log("user set");
    }

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
        });
    
        return unsubscribe;
      }, []);

    const value = {
        currentUser,
        currentUserInfo,
        setUserInfo,
        signup,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}