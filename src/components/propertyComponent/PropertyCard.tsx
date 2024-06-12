import { Image,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../utility/color';
import Carousel from 'react-native-snap-carousel';
import { ImageSourcePropType } from 'react-native';


interface propertyCardProps {
  id: string;
  name: string;
  index: number;
  location: string;
  photo: ImageSourcePropType[];
  price: any;
  // buttonPressHandler: any;
  description: any;
}


const PropertyCard: React.FC<propertyCardProps> = ({
  id,
  index,
  location,
  photo,
  name,
  price,
  description,
  // buttonPressHandler,
}) => {

  const renderItem = ({ item }: { item: ImageSourcePropType }) => {
    return (
      <Image
        source={item}
        style={styles.image}
      />
    );
  };
  
  return (
    <View style={styles.conatiner}>

      <View style={styles.imageContainer}>
        {/* <Image
          source={image}
          style={styles.image}
        /> */}

        <Carousel
          data={photo}
          renderItem={renderItem}
          sliderWidth={wp('92%')}
          itemWidth={wp('92%')}
        />
      </View>
      <View style={styles.bottomContainer}>

        <Text style={styles.Price}>
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
  )
}

export default PropertyCard

const styles = StyleSheet.create({

  conatiner: {
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
    marginBottom: heightPercentageToDP("2%"),
    borderRadius: 20,
    backgroundColor: color.WHITE,
  },

  image: {
    height: hp('27%'),
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },


  bottomContainer: {
    paddingHorizontal: wp('5%'),
    paddingBottom: hp('3%'),
    paddingTop: hp("2%"),
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20
  },

  Price: {
    fontSize: 21,
    color: color.purple,
  },

  basicDetails: {
    fontSize: 18,
    color: color.white
  },

  location: {
    fontSize: 17,
    color: color.darkgey,
    padding: "1%"

  },

  details: {

  },


})