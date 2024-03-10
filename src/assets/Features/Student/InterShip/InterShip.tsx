import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../../../../App/utility/color';
import Booknow from '../../../Component/Booknow';

const InterShip = () => {
  return (
    <View>
      <Text style={styles.headingText}>INTERNSHIP</Text>
      <View style={styles.container}>
        <View style={styles.cards}>
          <Image
            source={require('../../../../../image/OneDrive-2024-02-07/Feature.jpg')}
            style={styles.CardImage}
          />
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#242831', '#414345']}
            style={styles.cardBody}
          >
            <Text style={styles.cardtitle}>Tourist Place</Text>
            <Text style={styles.cardDescription}>
              Tourist places are peaceful locations where no one can visit. They are beautiful and
              serene, offering a perfect escape from the hustle and bustle of daily life.
            </Text>
            <Booknow title={'Book now'} onPress={undefined} />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: widthPercentageToDP('7%'), // Adjust font size based on width
    
    paddingTop: heightPercentageToDP('2%'), // Adjust padding based on height
    paddingBottom: heightPercentageToDP('0%'),
    paddingHorizontal: widthPercentageToDP('7%'), // Adjust padding based on width
    color: color.Lightgrey,
    fontFamily: 'Poppins-ExtraBold',

  },

  container: {
    flex: 1,
    alignItems: 'center',
  },

  cards: {
    height: heightPercentageToDP('50%'), // Adjust height based on screen height
    width: widthPercentageToDP('90%'), // Adjust width based on screen width
    marginVertical: heightPercentageToDP('1%'), // Adjust margin based on screen height
    borderRadius: widthPercentageToDP('2%'), // Adjust borderRadius based on screen width

    shadowRadius: widthPercentageToDP('1%'), // Adjust shadowRadius based on screen width
    shadowOffset: {
      width: 0,
      height: -heightPercentageToDP('0.5%'), // Adjust shadowOffset based on screen height
    },
    shadowColor: color.BLACK,
    elevation: 3,
  },

  CardImage: {
    height: heightPercentageToDP('25%'), // Adjust height based on screen height
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: widthPercentageToDP('5%'), // Adjust borderRadius based on screen width
    borderTopRightRadius: widthPercentageToDP('5%'), // Adjust borderRadius based on screen width
  },

  cardBody: {
    paddingHorizontal: widthPercentageToDP('4%'), // Adjust paddingHorizontal based on width
    paddingVertical: widthPercentageToDP('4%'),
    flex: 1,
    flexGrow: 1,
  },

  cardtitle: {
    color: color.white,
    fontFamily: 'BebasNeue-Regular',
    fontSize: widthPercentageToDP('7%'), // Adjust font size based on width
    paddingTop: heightPercentageToDP('2%'), // Adjust paddingTop based on height
  },

  cardDescription: {
    color: color.white,
    fontSize: widthPercentageToDP('3%'), // Adjust font size based on width
    fontWeight: '500',
    paddingVertical: heightPercentageToDP('1%'), // Adjust paddingVertical based on height
  },
});

export default InterShip;
