import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {useStore} from '../../../src/Store/store';


import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../../src/theme/theme';
import PaymentFooter from '../../../src/components/PaymentFooter';
import ImageBackgroundInfo from '../../../src/components/ImageBackgroundInfo';
import color from '../../../src/utility/color';
import Booknow from '../../../src/components/Buttons/Booknow';
import LinearGradient from 'react-native-linear-gradient';

// const DetailScreen = ({navigation, route}: any) => {
//   const ItemOfIndex = useStore((state: any) =>
//     route.params.index ==  state.HomeServiceList ,
//   )[route.params.index];
const DetailScreen = ({ navigation, route }: any) => {
  const { index, id, type , imagelink_portrait } = route.params;
  // console.log("Received params:", index, id, type , imagelink_portrait);

  const HomeServiceList = useStore((state: any) => state.HomeServiceList);
  const ItemOfIndex = HomeServiceList[index];
  // console.log("ItemOfIndex after useStore:", ItemOfIndex.name, ItemOfIndex.imagelink_portrait);

  // const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  // const deleteFromFavoriteList = useStore(
  //   (state: any) => state.deleteFromFavoriteList,
  // );
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [price, setPrice] = useState(ItemOfIndex.prices[0]);
  const [fullDesc, setFullDesc] = useState(false);

  // const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
  //   favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  // };

  const BackHandler = () => {
    navigation.pop();
  };

  const addToCarthandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: any) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={color.GREY} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemOfIndex.imagelink_portrait}
          type={ItemOfIndex.type}
          id={ItemOfIndex.id}
          favourite={ItemOfIndex.favourite}
          name={ItemOfIndex.name}
          special_ingredient={ItemOfIndex.special_ingredient}
          ingredients={ItemOfIndex.ingredients}
          average_rating={ItemOfIndex.average_rating}
          ratings_count={ItemOfIndex.ratings_count}
          roasted={ItemOfIndex.roasted}
          BackHandler={BackHandler}
          // ToggleFavourite={ToggleFavourite}
        />
 
        
 <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.CardLinearGradientContainer}
      colors={[color.purple, color.dark_purple]}>

        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text style={styles.DescriptionText}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <Text numberOfLines={3} style={styles.DescriptionText}>
                {ItemOfIndex.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

        </View>

        <PaymentFooter
          // price={price}
          buttonTitle="Book Now"
          buttonPressHandler={() => {
            addToCarthandler({
              id: ItemOfIndex.id,
              index: ItemOfIndex.index,
              name: ItemOfIndex.name,
              roasted: ItemOfIndex.roasted,
              imagelink_square: ItemOfIndex.imagelink_square,
              special_ingredient: ItemOfIndex.special_ingredient,
              type: ItemOfIndex.type,
              price: price,
            });
          }}
        />
        </LinearGradient>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: color.bg_white,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  FooterInfoArea: {
    padding: SPACING.space_20,
    // backgroundColor: color.purple
  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: color.gold,
    marginBottom: SPACING.space_10,
  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: color.WHITE,
    marginBottom: SPACING.space_30,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
  },
  // SizeBox: {
  //   flex: 1,
  //   backgroundColor: COLORS.primaryDarkGreyHex,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: SPACING.space_24 * 2,
  //   borderRadius: BORDERRADIUS.radius_10,
  //   borderWidth: 2,
  // },
  // SizeText: {
  //   fontFamily: FONTFAMILY.poppins_medium,
  // },

  CardLinearGradientContainer:{
    flex: 1 ,
  }
});

export default DetailScreen;
