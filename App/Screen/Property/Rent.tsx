import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import propertyData from '../../../src/data/propertyData'
import PropertyCard from '../../../src/components/propertyComponent/PropertyCard'
import { TouchableOpacity } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import firestore from '@react-native-firebase/firestore';
// const tabBarHeight = useBottomTabBarHeight();

const Rent = () => {


  // const getData =async () => {
  //   const PgCollection = await firestore().collection("PG's").get() ;
  // }

  return (
    <View style={{ backgroundColor: "transparent", flex: 1 }}>
      
      

      
      <FlatList
      scrollEnabled={false}
        data={propertyData}
        keyExtractor={item => item.id}
        contentContainerStyle ={{marginBottom:heightPercentageToDP('4%'), padding: wp('4%')}}
        renderItem={({ item }) => {

          return (

            <TouchableOpacity activeOpacity={1}> 


              <PropertyCard
                id={item.id}
                name={item.name}
                index={item.index}
                location={item.location}
                photo={item.photo}
                price={item.price}
                description={item.description} />

            </TouchableOpacity>
          )
        }}
      />




    </View>
  )
}

export default Rent

const styles = StyleSheet.create({})