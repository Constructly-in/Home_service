import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Socialmedia = () => {
  return (
    <View>
        {/* <Text>hisggkhjhjhjhjhjhjhjhjhjhjhjhjh</Text> */}
        <Image source={require('./../../../image/OneDrive-2024-02-07/facebook.png')}
          style={styles.Image}
        />

    </View>
  )
}

export default Socialmedia

const styles = StyleSheet.create({

    Image:{
        height: 60,
        width:60,
        position:"relative",
        top: 10
        
    }
})