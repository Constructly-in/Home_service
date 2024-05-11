import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {FC} from 'react'
import color from '../../utility/color'
import LinearGradient from 'react-native-linear-gradient'

import {
    BORDERRADIUS,
    COLORS,
    FONTFAMILY,
    FONTSIZE,
    SPACING,
  } from '../../theme/theme';

interface Props {
    title: string
    onPress: any
}
const Booknow : FC <Props> = ({title , onPress}) => {
  return (

                               
   <View style = {{justifyContent:"center",alignItems:"center" , marginBottom:20}}>
  <TouchableOpacity  onPress={onPress} style = {styles.Container}>
    
    <View >


        <Text style = { styles.Title }>{title}</Text>

    </View>   

    </TouchableOpacity>                         
    </View>
    
  )
}

export default Booknow 

const styles = StyleSheet.create({

    Container:{
        height:60,
        width:"85%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primaryOrangeHex,
        borderRadius: 15,
        // marginBottom:"0.1%",
        // marginTop:"2%",
      marginHorizontal:15,
        // elevation:2
        
        
    },

    Title:{
        color: COLORS.primaryWhiteHex,
        fontSize: 25,
        // paddingBottom:3,
        fontFamily : FONTFAMILY.poppins_semibold,
       

    }
})