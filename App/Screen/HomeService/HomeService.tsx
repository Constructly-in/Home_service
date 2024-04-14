import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import color from '../../utility/color'
import ElevatedCards from '../../../src/components/ElevatedCards'
import LongCards from '../../../src/components/LongCards'
// import React, {useRef, useState} from 'react';
import { useStore } from '../../../src/Store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../src/theme/theme'
import CoffeeCard from '../../../src/components/CoffeeCard'
import Offer from '../../../src/components/Offer'
// import category from '../../../src/components/category'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getHomeServiceList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let HomeServiceList = data.filter((item: any) => item.name == category);
    return HomeServiceList;
  }
};

const HomeService = ({ navigation }: any) => {
  const HomeServiceList = useStore((state: any) => state.HomeServiceList);
  const [categories, setCategories] = useState(
    getCategoriesFromData(HomeServiceList),
  );
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getHomeServiceList(categoryIndex.category, HomeServiceList),
  );


  const ListRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();


  // console.log('category=', categories);
  return (
    <ScrollView style={{ flexGrow: 1 }}>


      <View style={styles.conatiner}>


        <Offer />

        {/* Category Scroller */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollViewStyle}>
          {categories.map((data, index) => (
            <View
              key={index.toString()}
              style={styles.CategoryScrollViewContainer}>
              <TouchableOpacity
                style={styles.CategoryScrollViewItem}
                onPress={() => {
                  ListRef?.current?.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                  setCategoryIndex({ index: index, category: categories[index] });
                  setSortedCoffee([
                    ...getHomeServiceList(categories[index], HomeServiceList),
                  ]);
                }}>
                <Text
                  style={[
                    styles.CategoryText,
                    categoryIndex.index == index
                      ? { color: COLORS.primaryOrangeHex }
                      : {},
                  ]}>
                  {data}
                </Text>
                {categoryIndex.index == index ? (
                  <View style={styles.ActiveCategory} />
                ) : (
                  <></>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}

        <FlatList
          ref={ListRef}
          horizontal

          //coffe search
          // ListEmptyComponent={
          //   <View style={styles.EmptyListContainer}>
          //     <Text style={styles.CategoryText}>No Coffee Available</Text>
          //   </View>
          // }

          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          contentContainerStyle={styles.FlatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('Details', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  // price={item.prices[2]}
                  buttonPressHandler={() => { }}
                />
              </TouchableOpacity>
            );
          }}
        />

        {/* <Text style={styles.CoffeeBeansTitle}>Coffee Beans</Text> */}



        {/* <ElevatedCards /> */}
        {/* <ElevatedCards /> */}
        <LongCards />



      </View>



    </ScrollView>


  )
}

export default HomeService

const styles = StyleSheet.create({

  conatiner: {

    // minHeight:1000,
    // width: "100%",
    backgroundColor: color.gradiant1,
    flex: 1,
    justifyContent: "center",
    // alignItems:"center"
    // marginBottom:100
  },


  //  {/*dae*/}

  CategoryScrollViewStyle: {
    paddingHorizontal: windowWidth*0.05,
    height:"100%",
    
    // marginVertical:6,
    // backgroundColor:"white",
  },
  CategoryScrollViewContainer: {
    paddingHorizontal: 9,
  },
  CategoryScrollViewItem: {
    alignItems: 'center',
  },
  CategoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  ActiveCategory: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },


  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
  EmptyListContainer: {
    width: Dimensions.get('window').width - SPACING.space_30 * 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.space_36 * 3.6,
  },

})