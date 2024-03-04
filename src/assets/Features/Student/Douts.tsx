import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import MyButton from '../../Component/MyButton'
import color from '../../../../App/utility/color'
import Booknow from '../../Component/Booknow'


const Douts = () => {
  return (
    <View  style = {styles.Bg}>
      
    <Text style={styles.headingText}>Doubts </Text>
    <View style = {styles.container}>

    <View style={[styles.cards, styles.elevated]}>
      <Image
      source={require('/Users/prakh/projects/Home_service/image/OneDrive-2024-02-07/Feature.jpg')}
        style={styles.CardImage}
      />

      <View style = {styles.cardBody}>
        <Text style = {styles.cardtitle}>Toursist place </Text>
        {/* <Text style = {styles.cardLable}> place where no one can visite</Text> */}
        <Text style = {styles.cardDescription}>toursist place  are the peace plac e apriioshyajh ioihusah kjbb 8uhkj gfiouh jnciulowsagtf nb erifgi dudgiufnb</Text>
        {/* <Text style = {styles.cardFooter}>toursist place </Text> */}
        <Booknow  title={"KNow more"} onPress={undefined}  />
      </View>

      </View>
    </View>
  
  </View>
  )
}

export default Douts


const styles = StyleSheet.create({
  Bg:{
    // backgroundColor:color.BLACK,
    
  },

    headingText: {
       fontSize: 24 ,
       fontWeight: '600',
       paddingTop:20,
       paddingHorizontal:20,
       color: color.white,
       fontFamily: "Cardo-Bold",
      
    },

 

    container:{
        flex:1,
        alignItems:"center"
    },

    cards: {
    height: 420, 
    width: 380,
    marginVertical:9,
    marginHorizontal:12,
    borderRadius: 10,
    
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowColor:color.white,
      elevation: 5,
    
     
    },
  
    elevated: {
      backgroundColor:color.white,
    },
    CardImage: {
      height:"51%",
      width:"100%",
    //   resizeMode:"contain",
      justifyContent:"center",
      alignItems:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      
    },

    cardBody:{
        paddingHorizontal:15,
        flex:1,
        flexGrow:1
    },
  
    cardtitle:{
         color: color.BLACK,
         fontFamily: "Cardo-Bold",
         fontSize:24,
         fontWeight:"600",
         paddingTop:'2%'
    },
   

    cardDescription:{
       color: color.grey,
       fontSize:15,
       fontWeight:"500",
       paddingVertical:"3%"
    },

  
  
  })
