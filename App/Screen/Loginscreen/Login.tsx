import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../utility/color'



export default function Login() {



 


 
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={require('./../../../image/OneDrive-2024-02-07/frontpage.png')}
        style={styles.loginScreen}
      />
      <View style={styles.subContainer}>
        <Text style={styles.heading_1}>
          Lets's find <Text style={{ fontWeight: 'bold' }}> Professional Contractor , Repair / PG's for student / Buy plot</Text> Service </Text>

        <Text style={{
          fontSize: 17, textAlign: 'center', color: '#ffffff',
          paddingTop: 10
        }}>Best site to find best Service near your locality </Text>

        <TouchableOpacity style={styles.button} onPress={() => console.log("press")}>
          <Text style={{ fontSize: 17 , color: color.PRIMARY ,textAlign : 'center' ,  }}>
            Let's get started
          </Text>
        </TouchableOpacity>
      </View>




    </View>
  )
}

const styles = StyleSheet.create({

  loginScreen: {
    width: 300,
    height: 300,
    marginTop: 150,
    borderWidth: 4,
    //  borderColor: color.BLACK,
    borderRadius: 15,
    marginBottom: 110,
   

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4 ,

    // shadowOffset: {
    //   width: 0,
    //   height: -3,
    // },
    // shadowColor: '#ffffff',



  },

  subContainer: {
    width: '100%',
    backgroundColor: color.PRIMARY,
    height: '70%',
    marginTop: -20,
    borderRadius: 30,
    padding: 15,



  },

  heading_1: {
    fontSize: 24,
    color: color.white,
    textAlign: 'center'

  },

  button: {
    // width: 350,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingTop:12,
    height:50,
    backgroundColor: '#ffffff',
    borderRadius: 99

  }

  
})