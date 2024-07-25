import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../utility/color';
import ProfilePic from '../ProfilePic';
import { FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';

interface HeaderBarProps {
  title?: string;
}

const TopHeader:React.FC<HeaderBarProps> = ({title }) => {
  return (
    <LinearGradient
     
      colors={[color.dark_purple, color.dark_purple]}
      style={styles.HeaderContainer}>

      <View style={styles.LogoContainer}>
        <Image
          source={require('../../../image/Login_AS/constructly_logo.png')}
          style={styles.LogoImage}
        />
      </View>

      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
      
    </LinearGradient>

  )
}

export default TopHeader

const styles = StyleSheet.create({

  HeaderContainer: {
    padding: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.purple,
    // marginBottom: heightPercentageToDP('2%'),
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: color.WHITE,
  },

  LogoContainer: {
    width: widthPercentageToDP("16%"),
    height: heightPercentageToDP('4%')

  },


  LogoImage: {
    width: "100%",
    height: "100%"
  },
})