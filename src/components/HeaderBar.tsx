import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import color from '../../App/utility/color';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      {/* <GradientBGIcon
        name="menu"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_16}
      /> */}
       <View style={styles.LogoContainer}>
      <Image
          source={require('../../image/Login_AS/constructly_logo.png')}
          style={styles.LogoImage}
        />
        </View>

      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:color.GREY,
    marginBottom:heightPercentageToDP('2%')
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: color.white,
  },

  LogoContainer: {
    width: widthPercentageToDP("16%"),
    height: heightPercentageToDP('4%')

  },


  LogoImage: {
    width: "100%",
    height: "100%"
  },
});

export default HeaderBar;
