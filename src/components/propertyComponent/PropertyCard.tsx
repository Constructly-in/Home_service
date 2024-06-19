import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ImageSourcePropType } from 'react-native';
import color from '../../utility/color';


interface PropertyCardProps {
  id: string;
  name: string;
  index: number;
  location: string;
  photo: ImageSourcePropType[];
  price: any;
  description: any;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  index,
  location,
  photo,
  name,
  price,
  description,
}) => {
  




  return (
    // <ScrollView ref={scrollViewRef} style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        
    
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>
            ₹ {price}/Month
          </Text>
          <Text style={styles.basicDetails}>
            {name}
          </Text>
          <Text style={styles.location}>
            {location}
          </Text>
          <Text numberOfLines={1} style={styles.details}>
            {description}
          </Text>
        </View>
      </View>
    // </ScrollView>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: wp('92%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: color.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 3,
    marginBottom: hp('2%'),
    borderRadius: 20,
    backgroundColor: color.WHITE,
  },
  image: {
    height: hp('27%'),
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: color.purple,
  },
  inactivePaginationDot: {
    backgroundColor: color.GREY,
  },
  bottomContainer: {
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('3%'),
    paddingTop: hp('2%'),
  },
  price: {
    fontSize: 21,
    color: color.purple,
  },
  basicDetails: {
    fontSize: 18,
    color: color.white,
  },
  location: {
    fontSize: 17,
    color: color.darkgey,
    padding: '1%',
  },
  details: {},
});
