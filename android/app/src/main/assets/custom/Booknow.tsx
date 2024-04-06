import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React , {FC} from 'react'
import color from '../../../App/utility/color'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    title: string
    onPress: any
}
const Booknow : FC <Props> = ({title , onPress}) => {
  return (

    <LinearGradient start={{x: 0, y: 0}} 
                                end={{x: 1, y: 0}} 

                                // ['#242831', '#414345']
                                
                                colors={['#ffc773' , color.PRIMARY]} 
                                style={styles.Container}>

                                
    <TouchableOpacity  onPress={onPress} style = {styles.Container}>
        <Text style = { styles.Title }>{title}</Text>
    </TouchableOpacity>
    </LinearGradient>
  )
}

export default Booknow 

const styles = StyleSheet.create({

    Container:{
        height:52,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        
        borderRadius: 30,
        // marginBottom:"0.1%",
        // marginTop:"2%",

        elevation:2
        
        
    },

    Title:{
        color: color.BLACK ,
        fontSize: 28,
        paddingBottom:3,
        fontFamily : 'BebasNeue-Regular',
       

    }
})