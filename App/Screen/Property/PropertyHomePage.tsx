import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import color from '../../../src/utility/color';
import Rent from './Rent';
import PropertyCard from '../../../src/components/propertyComponent/PropertyCard';
import LinearGradient from 'react-native-linear-gradient';
import TopContainer from '../../../src/components/propertyComponent/TopContainer';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import MyButton from '../../../src/components/Buttons/MyButton';
import { useStore } from '../../../src/Store/store';
import CustomIcon from '../../../src/components/CustomIcon';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../src/theme/theme';



const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].type] == undefined) {
      temp[data[i].type] = 1;
    } else {
      temp[data[i].type]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getPropertyList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let PropertyList = data.filter((item: any) => item.type == category);
    return PropertyList;
  }
};

const PropertyHomePage = ({ navigation }: any) => {

  const PropertyList = useStore((state: any) => state.PropertyList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(PropertyList),
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedPropertyList, setSortedPropertyList] = useState(
    getPropertyList(categoryIndex.category, PropertyList),
  );
  const [searchText, setSearchText] = useState('');


  const [scrollEnabled, setScrollEnabled] = useState(true);

  // const categories = ['Rent', 'Buy', 'Plot', 'PG'];

  // const renderCategoryList = () => {
  //   switch (selectedCategory) {
  //     case 'Rent':
  //       return <Rent />;
  //     case 'Buy':
  //       return <Text>List of Buy Properties</Text>;
  //     case 'Plot':
  //       return <Text>List of Plot Properties</Text>;
  //     case 'PG':
  //       return <Text>List of PG Properties</Text>;
  //     default:
  //       return null;
  //   }
  // };


  useEffect(() => {
    setCategories(getCategoriesFromData(PropertyList));
  }, [PropertyList]);

  useEffect(() => {
    setSortedPropertyList(getPropertyList(categoryIndex.category, PropertyList));
  }, [categoryIndex, PropertyList]);

  // const ListRef = useRef(null);
  const ListRef = useRef<FlatList<any>>(null);

  const searchProperty = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedPropertyList([
        ...PropertyList.filter((item: any) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      ]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedPropertyList([...PropertyList]);
    setSearchText('');
  };

  // const ListRef: any = useRef<FlatList>();

  return (

    <ScrollView style={styles.container}>
      <LinearGradient
        style={styles.topContainer}
        colors={[color.gold, color.bg_white]}
      >

        <TopContainer navigation={undefined} />
        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flex: 1, marginHorizontal:wp("2.3%") }}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={[styles.categoryBox, categoryIndex.index == index && styles.selectedCategoryBox]}>
              <TouchableOpacity
                style={styles.categoryBox}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({ index: index, category: categories[index] });
                  setSortedPropertyList([
                    ...getPropertyList(categories[index], PropertyList),
                  ]);
                }}>
                <Text
                  style={[styles.categoryText, categoryIndex.index == index && styles.selectedCategoryText]}>
                  {data}
                </Text>
                {/* {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>



        {/* <ScrollView
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
          </ScrollView> */}

          {/* Search Input */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity
            onPress={() => {
              searchProperty(searchText);
            }}>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Search location , landmark or name"
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              searchProperty(text);
            }}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
          {searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() => {
                resetSearchCoffee();
              }}>
              <CustomIcon
                style={styles.InputIcon}
                name="close"
                size={FONTSIZE.size_16}
                color={COLORS.primaryLightGreyHex}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        

      </LinearGradient>

      <View style={styles.listContainer}>
        <FlatList
        ref={ListRef}
          scrollEnabled={false}
          data={sortedPropertyList}
          keyExtractor={item => item.id}
          contentContainerStyle={{ marginBottom: hp('4%'), padding: wp('4%') }}
          renderItem={({ item }) => {

            return (

              <TouchableOpacity activeOpacity={1}>


                <PropertyCard
                  id={item.id}
                  name={item.name}
                  index={item.index}
                  location={item.location}
                  photo={item.photo}
                  price={item.price}
                  description={item.description} />

              </TouchableOpacity>
            )
          }}
        />
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
    // height: hp('22%'),
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

  InputContainerComponent: {
    flexDirection: 'row',
    // margin: SPACING.space_30,
    marginHorizontal:wp("2.3%"),
    marginVertical:hp("1%"),
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: color.WHITE,
    alignItems: 'center',
    
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: color.white,
  },
});
