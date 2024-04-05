import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../App/utility/color'

export default function ElevatedCards() {
  return (
    <View>
    <Text style = {styles.headingOne}>Our Services</Text>
       
    <ScrollView  horizontal = {true} style = {styles.container}>

        <View style = {[styles.cards , styles.csrdElevated]}>
          
            <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/mop.png")}
            style ={styles.elevatedImage} />
          
            <Text style = {{fontSize:18, paddingVertical:4 ,fontFamily:"BebasNeue-Regular" ,color:color.LightOrange}}>
                hello
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>

               <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/mop.png")}
            style ={styles.elevatedImage} />

            <Text>
                me
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>

        <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/paintbrush.png")}
            style ={styles.elevatedImage} />

            <Text>
                pi
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>
        
        <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/paintbrush.png")}
            style ={styles.elevatedImage} />
        
            <Text>
                fvjs
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>

        <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/support.png")}
            style ={styles.elevatedImage} />

            <Text>
                sv
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>

        <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/support.png")}
            style ={styles.elevatedImage} />

            <Text>
                vsv
            </Text>
        </View>
        <View style = {[styles.cards , styles.csrdElevated]}>
            <Text>
                svs
            </Text>
        </View>
        

      
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingOne: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        color:color.Offwhite
      },
      
      container: {
        flex: 1,
        // minHeight:100,
        height: "auto",
        // backgroundColor:"blue"
        
      },

      cards:{
        flex:1,
        // flexWrap: 'wrap',
        // flexDirection:'row' ,
        alignItems:"center",
        justifyContent: 'center',
        width: 110,
        height: 110,
        margin: 8 ,
        borderRadius: 4 ,
        overflow:"hidden",
        marginHorizontal:12,
        
      },

      csrdElevated:{
        
        backgroundColor: color.circle_light,
        elevation: 2,//a  black border bwlow box ,
       shadowColor: color.white, // shadow get's the colour 
         shadowOffset:{
             width: 1 ,
             height: 1
        }

       },

       elevatedImage:{
       height:"60%",
       width:"60%",
       alignSelf:"center"
       

       },
    

})