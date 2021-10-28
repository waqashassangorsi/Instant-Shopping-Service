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
  AppState,
} from 'react-native';
import {Header, Badge} from 'react-native-elements';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import SignUpModal from '../../../components/SignUpModal';
import SelectDropdown from 'react-native-select-dropdown';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  getcity,
  getallbrands,
  getallcategory,
  getallproducts,
} from '../../../Redux/Action/Loginaction';
import {allproducts} from '../../../Redux/Action/products';

import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';

const categories = [
  'Shop by store',
  'eBay',
  'Amazon',
  'Shop by KONGA',
  'eBay',
  'Amazon',
  'Shirts',
  'Stylish Dress',
  'Trousers',
];

const DATA = [
  // {id: 1, name: 'shop by store'},
  {id: 2, name: 'ebay'},
  {id: 3, name: 'amazon'},
  {id: 4, name: 'shop by KONGA'},
  {id: 5, name: 'ebay'},
  {id: 6, name: 'amazon'},
  {id: 7, name: 'shop by SHOPRITE'},
  {id: 8, name: 'ebay'},
  {id: 9, name: 'amazon'},
  {id: 10, name: 'shop by BUKKA'},
  {id: 11, name: 'ebay'},
  {id: 12, name: 'amazon'},
];

const MainHeader = ({
  getcity,
  getallbrands,
  getallcategory,
  cart,
  getallproducts,
}) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [userdata, setUserdata] = useState(useSelector((state) => state?.auth));
  const dispatch = useDispatch();

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('AppState: App has come to the foreground!');
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  // const myonlinereference = database().ref(`/online/` + user?.id);
  const myonlinereference = database().ref(
    `/online/` + userdata?.user?.user_id,
  );
  console.log('myonlinereference: ', userdata?.user?.user_id);
  myonlinereference.transaction((userexists) => {
    if (userexists === null) {
      myonlinereference
        .set({
          onlinestatus: 'Online',
          lastonline: new Date().getTime(),
        })
        .then(() => console.log(''));
    } else {
      console.log('helog', 'record exits');
    }
  });
  // Remove the node whenever the client disconnects
  myonlinereference
    .onDisconnect()
    .update({
      onlinestatus: 'Offline',
      lastonline: new Date().getTime(),
    })
    .then(() => console.log(''));
  if (appStateVisible == 'background') {
    myonlinereference
      .update({
        onlinestatus: 'Offline',
        lastonline: new Date().getTime(),
      })
      .then(() => console.log(''));
  } else if (appStateVisible == 'active') {
    myonlinereference
      .update({
        onlinestatus: 'Online',
        lastonline: new Date().getTime(),
      })
      .then(() => console.log(''));
  }

  let navigation = useNavigation({user});
  const [modalVisible, setModalVisible] = useState(false);
  const [listcity, setlistcity] = useState([]);
  const [allcategory, setallcategory] = useState([]);
  const [category, setcategory] = useState([]);
  const [myselectedcat, setmyselectedcat] = useState();
  const [cart_data, setcart_data] = useState(
    useSelector((state) => state?.cart?.userCart),
  );
  const [productdata, setproductdata] = useState([]);
  // const cart_data = useSelector((state) => state.cart.userCart);
  const user = useSelector((state) => state.auth?.user);

  console.log('mainheader mainheader: ', cart);
  const [brandsname, setbrandsname] = useState([]);
  useEffect(() => {
    // console.log('fashindata,', fashiondata);
    (async () => {
      const res = await getallbrands();
      setbrandsname(res.data.data);
    })();

    (async () => {
      const mycatres = await getallcategory();
      // console.log(`mycatres`, mycatres);
      var catarray = [];
      for (var i = 0; i < mycatres.data.data.length; i++) {
        catarray.push(mycatres.data.data[i].category_name);
      }
      setallcategory(mycatres.data.data);
      setcategory(catarray);
    })();
  }, []);

  function handleChange(newValue) {
    if (newValue == 'false') {
      setModalVisible(false);
    }
  }

  console.log('mainheader cart: ', cart);

  // console.log("myallcategory",allcategory);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getcity();
  //     console.log('my city', res.data.cityrecord);

  //     setlistcity(res.data.cityrecord);
  //   })();
  // });

  const onPressStore = async (item) => {
    // console.log('STORE: ', item);
    const res = await getallproducts(item.brand_id);
    console.log('STORE RESPONSE: ', res);
    dispatch(allproducts(res.data.data));
  };

  return (
    <View>
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
                navigation.openDrawer();
              }}
            />
            <View>
              <Image
                source={require('../../../assets/logo.png')}
                resizeMode={'contain'}
                style={{width: 110, height: 45}}
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
              {!user && (
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={{fontSize: 13}}>Log in</Text>
                </TouchableOpacity>
              )}
              {!user && (
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={{
                    borderWidth: 2,
                    borderColor: colors.secondary,
                    borderRadius: 5,
                    padding: 5,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{fontSize: 13}}>Sign up</Text>
                </TouchableOpacity>
              )}
            </View>

            {user && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile');
                }}>
                <Image
                  source={require('../../../assets/person.png')}
                  resizeMode={'contain'}
                  style={{
                    borderRadius: 30 / 2,
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            )}
            {user ? (
              <TouchableOpacity
                disabled={cart?.length == 0}
                onPress={() => {
                  navigation.navigate('CreateCart');
                }}
                style={{
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                  width: 26,
                  height: 26,
                  borderRadius: 26 / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 5,
                }}>
                <Ionicons
                  name="basket-outline"
                  size={15}
                  color={colors.greenColor}
                />
                {cart?.length > 0 ? (
                  <View
                    style={{
                      height: 18,
                      width: 18,
                      borderRadius: 18 / 2,
                      position: 'absolute',
                      top: -10,
                      right: -5,
                      backgroundColor: 'white',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: 'green',
                    }}>
                    {/* <Text>{cart_data?.length}</Text> */}
                    <Text>{cart?.length}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            ) : null}
          </View>
        }
      />
      {/* Search Categories */}
      <View style={{backgroundColor: colors.white, paddingHorizontal: 10}}>
        <Text
          style={{
            color: colors.greenColor,
            fontSize: 8,
            marginTop: 4,
            textTransform: 'uppercase',
          }}>
          search categories
        </Text>

        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <Text style={{fontSize: 13, fontWeight: '600'}}>
                All Categories
              </Text> */}
            <SelectDropdown
              defaultButtonText={'All Categories'}
              buttonStyle={{
                backgroundColor: 'white',
                width: 120,
                height: 30,
              }}
              buttonTextStyle={{
                color: colors.black,
                left: 10,
                fontSize: 14,
                textTransform: 'capitalize',
              }}
              rowTextStyle={{
                fontSize: 12,
              }}
              data={category}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setmyselectedcat(allcategory[index].category_id);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <AntDesign
              name="caretdown"
              size={10}
              style={{right: 20}}
              color="black"
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              left: -30,
            }}>
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
        {/* </View> */}
      </View>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: colors.greenColor,
          marginTop: 5,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Pressable
          // key={item.id}
          android_ripple={{color: colors.white, borderless: false}}
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: colors.white,
              fontSize: 12,
            }}>
            shop by store
          </Text>
        </Pressable>
        {brandsname.map((item) => (
          <Pressable
            onPress={() => onPressStore(item)}
            key={item.id}
            android_ripple={{color: colors.white, borderless: false}}
            style={{
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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

      {/* {myprop != false && <Modal1 status={myprop} onChange={handleChange} />} */}

      {modalVisible != false && (
        <SignUpModal modalVisible={modalVisible} onChange={handleChange} />
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  const cart = state.cart.userCart;
  // console.log('mainheader usercart: ', cart);

  const {user} = state.auth;
  const {products} = state.products;

  console.log(`STORE mainheader myreduxdata`, products);

  return {cart, user, products};
};
export default connect(mapStateToProps, {
  getcity,
  getallbrands,
  getallcategory,
  getallproducts,
})(MainHeader);
