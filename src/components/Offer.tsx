import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const Offer = () => {
    const { width } = useWindowDimensions();

    // Calculate banner width based on screen width
    const bannerWidth = width * 0.90;

    return (
        <View style={styles.offer}>
            <Image
                source={require('../../image/OneDrive-2024-02-07/10percent.png')}
                style={[styles.banner, { width: bannerWidth }]} // Apply responsive width
                resizeMode="cover"
            />
        </View>
    );
};

export default Offer;

const styles = StyleSheet.create({
    offer: {
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: 'green',
        paddingVertical: 20,
    },
    banner: {
        height: '100%', // Ensure banner takes full height of its container
        borderRadius: 20,
    }
});
