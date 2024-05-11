import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useStore} from '../../../src/Store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../../../src/theme/theme';



import HeaderBar from '../../../src/components/HeaderBar';
import CartItem from '../../../src/components/CartItem';
import PaymentFooter from '../../../src/components/PaymentFooter';
import EmptyListAnimation from '../../../src/components/EmptyListAnimation';
import color from '../../../src/utility/color';
import firestore from '@react-native-firebase/firestore';
import { useAuth } from '../../Contexts/AuthContext';
import { firebase } from '@react-native-firebase/auth';
import { sendEmailVerification } from 'firebase/auth';

const CartScreen = ({navigation, route}: any) => {
  const { currentUser,currentUserInfo } = useAuth();
  
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const tabBarHeight = useBottomTabBarHeight();

  const addToOrderHistoryListFromCart = useStore(
    (state: any) => state.addToOrderHistoryListFromCart,
  );

  
  const saveOrders = async () => {
    console.log(" ");
    //Get Data from State
    let OrderHistoryList = useStore.getState().OrderHistoryList;

    //Get Data From firebase
    const orderData = await firestore().collection('Orders').doc(currentUser.uid).get();
    
    if(orderData.exists){
      let cartItems = await orderData.data().CartItems;
      let revData = [...OrderHistoryList[0].CartList].reverse();
      
      revData.map((datacart:any)=> {
        cartItems.push(datacart);
      });
      try {
        await firestore().collection('Orders').doc(currentUser.uid)
          .update({
            CartItems: cartItems,
          });
      } catch (error) {
        console.log("found error",error);
      }
    }else {

      let cartItemsarr:any = [];
      OrderHistoryList[0].CartList.map((datacart:any, index: number)=> {
        cartItemsarr.push(datacart);
      });
      try {
        await firestore().collection('Orders').doc(currentUser.uid)
          .set({
            CartItems: cartItemsarr,
            userInfo: [{
              userUid: currentUser.uid,
              userEmail: currentUserInfo.email,
              userName: currentUserInfo.userName,
              userPhone: currentUserInfo.phoneNum
            }]
          });
      } catch (error) {
        console.log("not found",error);
      }
    }
  }
  const buttonPressHandler = () => {
    addToOrderHistoryListFromCart();
    saveOrders();
    navigation.push('Order');
  };
  
  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={ color.grey} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />

            {CartList.length == 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {CartList.length != 0 ? (
            <PaymentFooter
              buttonPressHandler={buttonPressHandler}
              buttonTitle="Book Now"
              price={{price: CartPrice, currency: '₹'}}
            />
          ) : (
            <></>
          )}
        </View>
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
    gap: SPACING.space_20,
  },
});

export default CartScreen;
