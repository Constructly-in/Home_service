import { StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import React from 'react'
import color from '../../utility/color'
import ElevatedCards from '../../../src/components/ElevatedCards'
import LongCards from '../../../src/components/LongCards'



const HomeService = () => {
  return (
      <ScrollView style = {{flex:1}}>

     
      <View style={styles.conatiner}>

         <View style = {styles.Offer}>
          <Image
           source={require("../../../image/OneDrive-2024-02-07/10percent.png")}
           style ={styles.banner} />

         </View>


         {/* <ElevatedCards /> */}
         <ElevatedCards />
         <LongCards />
        
      </View>

     

      </ScrollView>
    

  )
}

export default HomeService

const styles = StyleSheet.create({

  conatiner: {

    minHeight:1000,
    width: "100%",
    backgroundColor: color.gradiant1,
    flex:1,
    justifyContent:"center",
    // alignItems:"center"
    // marginBottom:100
  },

  Offer:{
    height:"25%",
    width:"100%",
    // marginHorizontal:"2%",
    // backgroundColor:"white",
    borderRadius:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:"0%",
    overflow:"hidden"
  
  },

  banner:{
    flex:1,
    height:"70%",
    width:"85%",
    marginHorizontal:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,


  },
})