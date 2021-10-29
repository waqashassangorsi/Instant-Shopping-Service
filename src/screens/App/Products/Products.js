import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Picker,
  Platform,
  Linking,
  Pressable,
} from 'react-native';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  eBay,
  puma,
  nike,
  spar,
  grinder,
  hairDryer,
  beard,
  product,
  gucciShirt,
  miniDress,
  denimTrousers,
  pro,
  veggies,
  rice,
  palmOil,
  gardening,
  fashion,
  mensWear,
  sports,
  kitchen,
  gaming,
  cancel,
  cartLogo,
  copyRight,
  dot,
  halfDot,
  faceBook,
  dropDown,
  google,
  heartLike,
  adds,
  nikeStore,
  person,
  profileShirt,
  singleStore,
  instagram,
  qrCode,
} from '../../../assets';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {connect, useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {Fonts} from '../../../utils/Fonts';
import {useNavigation} from '@react-navigation/native';
import {Loading} from '../../../components/Loading';
import {
  competition,
  updateComp,
  charityCateg,
  getCateg,
} from '../../../Redux/Action/Competitionaction';
import {addToCart} from '../../../Redux/Action/cart';
import {saveCharity, fcmApi} from '../../../Redux/Action/Loginaction';
import {Alert} from 'react-native';
import {compose} from 'redux';
import Store from '../ProductDetail/Store';
import BestSellProduct from '../ProductDetail/BestSellProduct';
import PopularFashion from '../ProductDetail/PopularFashion';
import PopularKitchen from '../ProductDetail/PopularKitchen';
import Footer from '../../../components/Footer';
import ProductsDetails from '../ProductDetail/ProductsDetails';
import MainHeader from './MainHeader';
import SignUpModal from '../../../components/SignUpModal';

import CreateCart from '../Cart/CreateCart';

import ConfirmationCart from '../Cart/ConfirmationCart';
import DeliveryLocationCart from '../Cart/DeliveryLocationCart';
import CongratulationCart from '../Cart/CongratulationCart';
import ProductViewDetail from '../ProductDetail/ProductViewDetail';
import SingleStore from '../ProductDetail/SingleStore';
import CartStepProgress from '../Cart/CustomProgressStep';
import CartProgressStep from '../Cart/CustomProgressStep';
import CustomProgressStep from '../Cart/CustomProgressStep';
import UserProfile from '../Cart/UserProfile';
import OrderPage from '../Cart/OrderPage';
import ShopperMessenger from '../Cart/ShopperMessenger';
import ShopperDetail from '../Cart/ShopperDetail';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Product = ({
  params,
  competition,
  comp,
  charityList,
  isLoggedIn,
  updateComp,
  addToCart,
  userCart,
  totalPrice,
  charityCateg,
  charityId,
  saveCharity,
  getCateg,
  allCateg,
}) => {
  let navigation = useNavigation();
  const user = useSelector((state) => state.auth?.user);

  //Push Notification Work Start
  // Must be outside of any component LifeCycle (such as `componentDidMount`).
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      PushNotification.localNotification({
        channelId: '2223',
        color: 'black',
        autoCancel: true,
        title: notification.title,
        message: notification.message,
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
        actions: ['View'],
        invokeApp: false,
      });

      // process the notification
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
  //Push Notification Work End

  const checktoken = async (fcmtoken) => {
    const token = await AsyncStorage.getItem('token');
    console.log('checktoken token: ', token);
    console.log('checktoken fcmtoken: ', fcmtoken);
    // alert(token);
    if (token == fcmtoken) {
      console.log('checktoken condition token: ', token);
      console.log('checktoken condition fcmtoken: ', fcmtoken);
      // alert('Pushed');
      const formData = new FormData();

      formData.append('user_id', user.user_id);
      formData.append('fcm_token', fcmtoken);

      const res = await fcmApi(formData);
      console.log('RESPONSE fcmApi: ', res);

      await AsyncStorage.setItem('token', fcmtoken);
    }
  };

  useEffect(() => {
    messaging()
      .getToken()
      .then((token) => {
        checktoken(token);
      });
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  }, []);
  /*   useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }
  }, []); */
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <MainHeader />
        <ProductsDetails />
        <Footer />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state) => {
  const {comp, charityList, allCateg} = state.competitionuser;
  const {userCart, totalPrice} = state.cart;
  const {isLoggedIn, charityId} = state.auth;
  return {
    comp,
    charityList,
    isLoggedIn,
    userCart,
    totalPrice,
    charityId,
    allCateg,
  };
};
export default connect(mapStateToProps, {
  competition,
  updateComp,
  addToCart,
  charityCateg,
  saveCharity,
  getCateg,
})(Product);
