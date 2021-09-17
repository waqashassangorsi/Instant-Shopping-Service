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
      <Header
        containerStyle={{paddingTop: 10, alignItems: 'center'}}
        backgroundColor={colors.primary}
        leftComponent={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Entypo
              name="menu"
              size={30}
              color="black"
              onPress={() => {
                console.log('navigation', navigation);
               navigation.openDrawer()
              }}
            />
            <View>
              <Image
                source={require('../../../assets/logo.png')}
                style={{width: 110, height: 45, resizeMode: 'contain'}}
              />
            </View>
          </View>
        }
        rightComponent={
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <View
              style={{
                marginHorizontal: 5,
                alignItems: 'center',
                flexDirection: 'row',
                marginRight: 10,
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: 13}}>Log in</Text>
              </TouchableOpacity>
              <View style={{marginHorizontal: 5}} />
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  borderColor: colors.secondary,
                  borderRadius: 5,
                  padding: 5,
                }}>
                <Text style={{fontSize: 13}}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={require('../../../assets/person.png')}
                style={{
                  borderRadius: 30 / 2,
                  resizeMode: 'cover',
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <Ionicons name="basket-outline" size={30} color="#005016" />
          </View>
        }
      />
      {/* Search Categories */}
      <View style={{backgroundColor: colors.white, paddingHorizontal: 10}}>
        <Text style={{color: colors.greenColor, fontSize: 8,marginTop:4 }}>
          SEARCH CATEGORIES
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 13, fontWeight: '600'}}>
                All Categories
              </Text>
              <AntDesign
                name="caretdown"
                size={13}
                style={{marginLeft: 5}}
                color="black"
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                style={{
                  borderBottomColor: colors.gray,
                  borderBottomWidth: 1,
                  width: '75%',
                }}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Enter search keyphrase"
                // keyboardType=""
              />
              <Fontisto
                name="search"
                size={15}
                style={{right: 15}}
                color={colors.secondary}
              />
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.greenColor,
          marginTop: 5,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {DATA.map((item) => (
          <Pressable
            key={item.id}
            android_ripple={{color: colors.white, borderless: false}}
            style={{padding: 10}}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: colors.white,
                fontSize: 12,
              }}>
              {item.name}
            </Text>
          </Pressable>
        ))}
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
