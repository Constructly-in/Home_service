import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../App/utility/color'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function LongCards() {

  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style= {{marginBottom:120}}>
    <Text style = {styles.headingOne}>Our service  </Text>
       
    <ScrollView  horizontal = {false} style = {styles.container}>

        <View style = {[styles.cards , styles.csrdElevated]}>
          
             <Image
            source={require("../../image/OneDrive-2024-02-07/homeservice/jo.png")}
             style ={styles.elevatedImage} /> 
          
           
        </View>
        {/* <View style = {[styles.cards , styles.csrdElevated]}>

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
        </View> */}
  
  
     
       
        

      
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingOne: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingBottom:8,
        paddingTop:8,
        color:color.Obsidian,
      },
      
      container: {
        flex: 1,
        // backgroundColor:"green",
        marginHorizontal:12,
        
      },

      cards:{
        flex:1,
        // flexWrap: 'wrap',
        // flexDirection:'row' ,
        alignItems:"center",
        justifyContent: 'center',
        width: "100%",
        height: heightPercentageToDP('25%'),
        marginVertical:8,
        borderRadius: 20 ,
        overflow:"hidden"
        
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
       height:"100%",
       width:"100%",
       alignSelf:"center"
       

       },
    

})