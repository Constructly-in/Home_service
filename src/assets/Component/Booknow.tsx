import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {FC} from 'react'
import color from '../../../App/utility/color'

interface Props {
    title: string
    onPress: any
}
const Booknow : FC <Props> = ({title , onPress}) => {
  return (
    <TouchableOpacity  onPress={onPress} style = {styles.Container}>
        <Text style = { styles.Title }>{title}</Text>
    </TouchableOpacity>
  )
}

export default Booknow 

const styles = StyleSheet.create({

    Container:{
        height:50,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: color.PRIMARY,
        borderRadius: 30,
        marginBottom:"0.1%",
        marginTop:"2%",

        elevation:5
        
        
    },

    Title:{
        color: color.BLACK ,
        fontSize: 20 ,
        fontWeight:"600",
        fontFamily : 'Merriweather-Regulars',
        // fontWeight: '600',

    }
})