import { Alert } from "react-native";
import  auth from "@react-native-firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore'
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
  }

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signup(userName,phone,email,userPassword) {
        return auth().createUserWithEmailAndPassword(email, userPassword).then((userDoc) => {
            firestore().collection('Users').doc(userDoc.user.uid)
            .set({
                userName: userName,
                phoneNum: phone,
                email: email,
                accType: 3
            })
            .then(() => {
                // Alert.alert("Account Created Successfully!");
            })
            .catch(err => {
                console.log(err);
                Alert.alert("Some error occured");
            })
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
        return auth().signInWithEmailAndPassword(email, userPassword).then((userDoc)=> {
            // Alert.alert("User logged in!");
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

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
        });
    
        return unsubscribe;
      }, []);

    const value = {
        currentUser,
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