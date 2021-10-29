import React, {useEffect} from 'react';
import {View, ScrollView, Image} from 'react-native';
import Store from './Store';
import BestSellProduct from './BestSellProduct';
import PopularFashion from './PopularFashion';
import PopularKitchen from './PopularKitchen';
import TopPerformingCategories from './TopPerformingCategories';
import {colors} from 'react-native-elements';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const ProductsDetails = () => {
  let navigation = useNavigation();

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getfcmToken();
    }
  }
  const getfcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(`the old token`, fcmToken);
    if (!fcmToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log(`the new generated token `, fcmToken);
          await AsyncStorage.setItem('fcmToken');
        }
      } catch (error) {
        console.log(`error raised in fcm token`, error);
      }
    }
  };
  const notificationListener = async () => {
    var parsedData;
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'NOTIFICATION Notification caused app to open from background state:',
        remoteMessage,
      );

      parsedData = JSON.parse(remoteMessage?.data?.data);

      if (parsedData.from == 1) {
        navigation.navigate('ShopperDetail');
      }
      if (parsedData.from == 2) {
        // console.log('NOTIFICATION ORDER: ', parsedData.order_id);
        navigation.navigate('OrderPage', parsedData.order_id);
      }
    });
    messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage.data.name) {
        navigation.navigate(CreateCart);
      }
      console.log(`NOTIFICATION received in foreground`, remoteMessage);

      parsedData = JSON.parse(remoteMessage?.data?.data);

      if (parsedData.from == 1) {
        navigation.navigate('ShopperDetail');
      }
      if (parsedData.from == 2) {
        // console.log('NOTIFICATION ORDER: ', parsedData.order_id);
        navigation.navigate('OrderPage', parsedData.order_id);
      }
    });
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage,
          );

          parsedData = JSON.parse(remoteMessage?.data?.data);

          if (parsedData.from == 1) {
            navigation.navigate('ShopperDetail');
          }
          if (parsedData.from == 2) {
            // console.log('NOTIFICATION ORDER: ', parsedData.order_id);
            navigation.navigate('OrderPage', parsedData.order_id);
          }
        }

        if (remoteMessage.data.name) {
          navigation.navigate(CreateCart);
        }
        console.log(`received`, remoteMessage.data.name);
      });
  };
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <ScrollView style={{backgroundColor: colors.white, flex: 1}}>
      <Store />
      <BestSellProduct />
      <PopularFashion />
      <PopularKitchen />
      <TopPerformingCategories />
    </ScrollView>
  );
};

export default ProductsDetails;
