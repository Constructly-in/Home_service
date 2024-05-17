import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import color from '../../utility/color'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
    title: string
    onPress: any
}
const MyButton: FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.Container}>
            <LinearGradient start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[color.gold, color.dark_gold]}
                style={styles.Container}>
                <Text style={styles.Title}>{title}</Text>
            </LinearGradient>

        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({

    Container: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: color.dark_gold,
        borderRadius: 30,
        marginBottom: "0.1%",
        marginTop: "2%",

        elevation: 2


    },

    Title: {
        color: color.Obsidian,
        fontSize: 18,
        fontFamily: 'Merriweather-Regulars',
        // fontWeight: '600',

    }
})