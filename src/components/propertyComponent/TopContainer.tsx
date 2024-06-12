import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'
import color from '../../utility/color'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import DropDownBox from '../DropDownBox'

const TopContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Topcontainer}>
                <View style = {styles.TextContainer}>
                  <Text style ={{ fontSize:19 , color:color.white}}>
                    HY prakhar 
                  </Text>
                  <Text style = {{fontSize:18 , color:color.dark_purple}}>
                    Searching IN
                  </Text>

                  <DropDownBox />
                </View>

                <View style = {styles.addButton}>
                  
                  <TouchableOpacity>
                     <View style ={{borderColor:color.purple, borderWidth:2 , height:heightPercentageToDP("4%"), width:widthPercentageToDP("17%") , borderRadius:20 , alignItems:"center" , justifyContent:"center"}}>
                       <Text style = {{alignSelf:"center"  , fontSize:17 , color:color.purple}}>Add+</Text>
                     </View>
                  </TouchableOpacity>
                </View>

            </View>

            <View style={styles.searchBAr}>

            </View>

        </View>
    )
}

export default TopContainer

const styles = StyleSheet.create({

    container: {
        // flex:1
        // backgroundColor:"green"
    },

    Topcontainer: {
     flexDirection:"row",
     justifyContent:"space-between",
    },

    searchBAr: {
        backgroundColor: color.purple,
        height: heightPercentageToDP("3.8%"),
        marginHorizontal: widthPercentageToDP("7%"),
        borderRadius: 10 
    },

    TextContainer:{

      
        marginLeft:widthPercentageToDP('7%'),
        marginBottom: heightPercentageToDP("2%"),
        marginTop:heightPercentageToDP("1%")

    },

    addButton:{

      // backgroundColor:"red",
      marginRight:widthPercentageToDP("7%"),
      justifyContent:"center"

    }
})