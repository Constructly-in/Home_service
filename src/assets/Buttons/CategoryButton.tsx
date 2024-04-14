import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {FC} from 'react'
import color from '../../../App/utility/color'

interface Props {
    title: string
    onPress: any
}
const CategoryButton : FC <Props> = ({title , onPress}) => {
  return (
    <TouchableOpacity  onPress={onPress} style = {styles.Container}>
        <Text style = { styles.Title }>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton 

const styles = StyleSheet.create({

    Container:{
        height:36,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: color.Offwhite,
        borderRadius: 30,
        // marginBottom:"0.1%",
        marginTop:"5%",
        elevation:5
        
        
    },

    Title:{
        color: color.BLACK ,
        fontSize: 22 ,
        fontFamily : 'BebasNeue-Regular',
        // fontWeight: '700',

    }
})