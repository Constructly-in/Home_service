import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../../../../App/utility/color'
import MyButton from '../../../Component/MyButton'

const InterShip = () => {
  return (
    <View  style = {styles.Bg}>
      
    <Text style={styles.headingText}>INTERSHIP </Text>
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
        <MyButton  title={"KNow more"} onPress={undefined} />
      </View>

      </View>
    </View>
  
  </View>
  )
}

export default InterShip


const styles = StyleSheet.create({
  Bg:{
    backgroundColor:color.white
  },

    headingText: {
       fontSize: 24 ,
       fontWeight: '600',
       paddingTop:20,
       paddingHorizontal:20,
       color: color.BLACK,
       fontFamily: "Cardo-Bold",
      
    },

 

    container:{
        flex:1,
        alignItems:"center"
    },

    cards: {
    height: 420, 
    width: 380,
    marginVertical:10,
    marginHorizontal:12,
    borderRadius: 10,
    
      shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowColor:color.BLACK,
      elevation: 5,
    
     
    },
  
    elevated: {
      backgroundColor:color.BLACK,
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
         color: color.white,
         fontFamily: "Cardo-Bold",
         fontSize:24,
         fontWeight:"600"
    },
   

    cardDescription:{
       color: color.Offwhite,
       fontSize:15,
       fontWeight:"500",
       paddingVertical:"5%"
    },

  
  
  })
