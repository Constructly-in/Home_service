import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopHeader from '../../../src/components/propertyComponent/TopHeader'
import { ScrollView } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../../../src/utility/color'
import LinearGradient from 'react-native-linear-gradient';


const RentBuy = () => {
  return (
    <ScrollView style={styles.container}>
      <TopHeader title='Search' />

      {/* top container */}
      <LinearGradient
        colors={[color.dark_purple, color.purple]}
        style={styles.topContainer}>

       <View   style = {styles.category}>
        
         <TouchableOpacity >
         <View style = {styles.category_box}> 
           <Text style = {styles.cText}>Rent</Text>
         </View>
         </TouchableOpacity>

        

       </View>

      </LinearGradient>

    
      <Text>RentBuy</Text>

    </ScrollView>
  )
}

export default RentBuy

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  topContainer: {
    height: heightPercentageToDP('20%'),
    backgroundColor: color.purple

  },

  category:{
    flexDirection:"row",
    justifyContent:"center",

  },

  category_box:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderColor:color.WHITE,
    borderWidth:1,
    width:widthPercentageToDP('12%'),
    height:heightPercentageToDP('4%'),
    marginHorizontal:widthPercentageToDP('2%'),
    borderRadius:10
  },

  cText:{
    color:color.WHITE
  }
})