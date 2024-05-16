import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';
import color from '../utility/color';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (

    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 1}}
    colors={[color.dark_purple, color.purple]}
    style={styles.HeaderContainer}>

   
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

      </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:color.purple,
    marginBottom:heightPercentageToDP('2%') ,
    borderBottomLeftRadius:30 ,
    borderBottomRightRadius: 30
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
});

export default HeaderBar;
