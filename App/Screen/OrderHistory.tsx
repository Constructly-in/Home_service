import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import HeaderBar from '../../src/components/HeaderBar'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import color from '../utility/color'
import { useStore } from '../../src/Store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../src/theme/theme'
import EmptyListAnimation from '../../src/components/EmptyListAnimation'
import OrderHistoryCard from '../../src/components/OrderHistoryCard'


const OrderHistory = ({navigation}: any) => {
    const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
    // const tabBarHeight = useBottomTabBarHeight();
    

    const navigationHandler = ({index, id, type}: any) => {
        navigation.push('Details', {
          index,
          id,
          type,
        });
      };

   // Function to check if there's at least one item in CartList
   const hasItemsInCartList = (cartList: string | any[]) => {
    return cartList && cartList.length > 0;
  };

  return (
    <View style = {styles.conatiner}>
        <HeaderBar title='Order History' />
      
        {/* <View style = {styles.infoContainer}>
          <Text style = {{color: color.white, fontSize:16}}>Your order is placed our team will contact you as soon as possible , Thank you choosing us </Text>
        </View> */}

          {/* Show infoContainer if there's at least one item in CartList */}
      {OrderHistoryList.length > 0 &&
        hasItemsInCartList(OrderHistoryList[0].CartList) && (
          <View style={styles.infoContainer}>
            <Text style={{ color: color.white, fontSize: 16 }}>
              Your order is placed. Our team will contact you as soon as possible. Thank you for choosing us!
            </Text>
          </View>
        )}
    

        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={styles.ScrollViewInnerView}>
          <View style={styles.ItemContainer}>
            

            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No Order History'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>

          {/* {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}>
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )} */}

        </View>
      </ScrollView>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({
  
    conatiner:{
        flex:1
    },


    infoContainer:{

        height: heightPercentageToDP('15%'),
        backgroundColor:color.Offwhite ,
        flexDirection:'row',
        alignItems:"center", 
        justifyContent:"center" ,
        paddingHorizontal: widthPercentageToDP('5%'),
        // paddingVertical,: heightPercentageToDP('2%')
    },

    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
      },
      LottieAnimation: {
        height: 250,
      },
      ScrollViewFlex: {
        flexGrow: 1,
      },
      ScrollViewInnerView: {
        flex: 1,
        justifyContent: 'space-between',
      },
      ItemContainer: {
        flex: 1,
      },
      ListItemContainer: {
        paddingHorizontal: SPACING.space_20,
        gap: SPACING.space_30,
      },
      DownloadButton: {
        margin: SPACING.space_20,
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_36 * 2,
        borderRadius: BORDERRADIUS.radius_20,
      },
      ButtonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
      },

    


    
})