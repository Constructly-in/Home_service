import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

interface EmptyListAnimationProps {
  title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/animation.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{title}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   EmptyCartContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   LottieStyle: {
//     // height: 200,
//     // backgroundColor:"blue"
//   },
//   LottieText: {
//     fontFamily: FONTFAMILY.poppins_medium,
//     fontSize: FONTSIZE.size_16,
//     color: COLORS.primaryOrangeHex,
//     textAlign: 'center',
//   },
// });

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  // Added to center the animation horizontally
  },
  LottieStyle: {
    width: 250,  // Set explicit width
    height: 250, // Set explicit height
    // backgroundColor: "blue", // Uncomment for debugging purposes
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
    // marginTop: 20, // Add some margin to separate text from animationa
    alignSelf:"center",
  },
});

export default EmptyListAnimation;
