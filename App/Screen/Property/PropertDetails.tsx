import {  Text, View ,StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import SlideImage from '../../../src/components/propertyComponent/SlideImage'
import { useStore } from '../../../src/Store/store'


const PropertDetails = ({ navigation, route }: any) => {

    // const ItemOfIndex = useStore((state: any) =>
    //         route.params.index ==  state.PropertyList ,
    //       )[route.params.index];

    // const { index, id, type  } = route.params;
    // const PropertyList = useStore((state: any) => state.PropertyList);
    // const ItemOfIndex = PropertyList[index];
    //  console.log("ItemOfIndex after useStore:", ItemOfIndex.name, ItemOfIndex.imagelink_portrait);
  return (
    <ScrollView style =  {styles.container}>
      <View></View>
      <View style = {styles.ImageContainer}>
       {/* <SlideImage images={ItemOfIndex.image_array} /> */}
       <Text>dafba</Text>
      </View>
    </ScrollView>
  )
}

export default PropertDetails

const styles = StyleSheet.create({

    container:{
        flex:1
    },

    ImageContainer:{

    }
})