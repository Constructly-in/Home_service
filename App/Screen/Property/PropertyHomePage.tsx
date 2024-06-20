import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../../src/utility/color';
import Rent from './Rent';
import PropertyCard from '../../../src/components/propertyComponent/PropertyCard';
import LinearGradient from 'react-native-linear-gradient';
import TopContainer from '../../../src/components/propertyComponent/TopContainer';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import MyButton from '../../../src/assets/Buttons/MyButton';

const PropertyHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Rent'); // Default category
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const categories = ['Rent', 'Buy', 'Plot', 'PG'];

  const renderCategoryList = () => {
    switch (selectedCategory) {
      case 'Rent':
        return <Rent />;
      case 'Buy':
        return <Text>List of Buy Properties</Text>;
      case 'Plot':
        return <Text>List of Plot Properties</Text>;
      case 'PG':
        return <Text>List of PG Properties</Text>;
      default:
        return null;
    }
  };

  return (
    
      <ScrollView style={styles.container}>
        <LinearGradient
          style={styles.topContainer}
          colors={[color.gold, color.bg_white]}
        >
          <TopContainer />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.categoryBox, selectedCategory === category && styles.selectedCategoryBox]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </LinearGradient>
        
        <View style={styles.listContainer}>
          {renderCategoryList()}
        </View>
      </ScrollView>
   
  );
};

export default PropertyHomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_white,
  },
  topContainer: {
    height: hp('22%'),
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: hp("1%"),
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp("5.3%"),
    marginHorizontal: wp("3%"),
  },
  categoryBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: color.purple,
    borderWidth: 1,
    width: wp('20%'),
    height: hp('4%'),
    marginHorizontal: wp('2%'),
    borderRadius: 10,
  },
  selectedCategoryBox: {
    backgroundColor: color.purple,
  },
  categoryText: {
    color: color.grey,
  },
  selectedCategoryText: {
    color: color.WHITE,
  },
  listContainer: {
    flex: 1,
  },
});
