import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import color from '../utility/color'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';


interface Props {
    title: string;
    onPress: any
}

const BoxCard: FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
                colors={[color.light_purple, color.purple]}>



                <Text style={styles.text}>{title}</Text>

            </LinearGradient>
        </TouchableOpacity>

    )
}

export default BoxCard

const styles = StyleSheet.create({

    container: {
        height: hp("5%"),
        width: wp("47%"),
        marginVertical: hp("1%"),
        justifyContent: "center",
        alignItems: "center", 
        
    },


    text: {

        color: color.WHITE,
        fontSize: 17
    }
})