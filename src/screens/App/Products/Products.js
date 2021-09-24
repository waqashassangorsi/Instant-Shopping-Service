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
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {Fonts} from '../../../utils/Fonts';
import {
  useNavigation
} from '@react-navigation/native';
import {Loading} from '../../../components/Loading';
import {
  competition,
  updateComp,
  charityCateg,
  getCateg,
} from '../../../Redux/Action/Competitionaction';
import {addToCart} from '../../../Redux/Action/cart';
import {saveCharity} from '../../../Redux/Action/Loginaction';
import {Alert} from 'react-native';
import {compose} from 'redux';
import Store from './Store';
import BestSellProduct from './BestSellProduct';
import PopularFashion from './PopularFashion';
import PopularKitchen from './PopularKitchen';
import Footer from '../../../components/Footer';
import ProductsDetails from './ProductsDetails';
import MainHeader from './MainHeader';
import SignUpModal from '../../../components/SignUpModal';
import LogInModal from '../../../components/LogInModal';
import CreateCart from '../Cart/CreateCart';

import ConfirmationCart from '../Cart/ConfirmationCart';
import DeliveryLocationCart from '../Cart/DeliveryLocationCart';
import CongratulationCart from '../Cart/CongratulationCart';
import ProductViewDetail from './ProductViewDetail';
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

  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <MainHeader />
        {/* <ProductsDetails /> */}

        {/* <CreateCart /> */}
       
        {/* <DeliveryLocationCart/> */}
        {/* <ConfirmationCart/> */}
        {/* <CongratulationCart/> */}
        <ProductViewDetail/>
        <Footer />
      </ScrollView>
      {/* <SignUpModal/> */}
      {/* <LogInModal/> */}
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




