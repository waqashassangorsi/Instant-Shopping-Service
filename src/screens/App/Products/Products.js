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
import {Header, Badge} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import colors from '../../../theme/colors';
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
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const DATA = [
  {id: 1, name: 'shop by category'},
  {id: 2, name: 'ebay'},
  {id: 3, name: 'amazon'},
  {id: 4, name: 'shop by category'},
  {id: 5, name: 'ebay'},
  {id: 6, name: 'amazon'},
  {id: 7, name: 'shop by category'},
  {id: 8, name: 'ebay'},
  {id: 9, name: 'amazon'},
  {id: 10, name: 'shop by category'},
  {id: 11, name: 'ebay'},
  {id: 12, name: 'amazon'},
];

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
    <View style={styles.mainContainer}>
     
      <Footer />
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




