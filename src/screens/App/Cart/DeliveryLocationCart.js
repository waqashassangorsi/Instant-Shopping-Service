import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../../../theme/colors';
import Footer from '../../../components/Footer';
import MainHeader from '../Products/MainHeader';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import {connect, useDispatch} from 'react-redux';
import {userAddress} from '../../../Redux/Action/cart';
import {getcity, getlocation} from '../../../Redux/Action/Loginaction';

const cities = [
  'Abuja',
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
  'Lahore',
  'Islamabad',
  'Faislabad',
  'kashmir',
  'karachi',
  'Dera Ghazi khan',
];
const location = [
  'Wuse',
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
  'Lahore',
  'Islamabad',
  'Faislabad',
  'kashmir',
  'karachi',
  'Dera Ghazi khan',
];

const DeliveryLocationCart = ({getcity, getlocation}) => {
  let navigation = useNavigation();
  const dispatch = useDispatch();
  const [allcategory, setallcategory] = useState([]);
  const [alllocation, setalllocation] = useState([]);
  const [category, setcategory] = useState([]);
  const [location, setlocation] = useState([]);
  const [myselectedcat, setmyselectedcat] = useState();
  const [myselectedcat1, setmyselectedcat1] = useState();
  const [myselectedcity, setmyselectedcity] = useState();
  const [myselectedlocation, setmyselectedlocation] = useState();
  const [address, setaddress] = useState();
  const [landmark, setlandmark] = useState();

  useEffect(() => {
    (async () => {
      const mycatres = await getcity();
      // console.log('mycatres,', myselectedcat1);

      var catarray = [];
      for (var i = 0; i < mycatres.data.data.cities.length; i++) {
        catarray.push(mycatres.data.data.cities[i].city_name);
      }
      var catarray1 = [];
      for (var i = 0; i < mycatres.data.data.location.length; i++) {
        catarray1.push(mycatres.data.data.location[i].location);
      }
      setallcategory(mycatres.data.data.cities);
      setalllocation(mycatres.data.data.location);
      setcategory(catarray);
      setlocation(catarray1);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const formdata = new FormData();
      formdata.append('city_id', myselectedcat1);

      const res = await getlocation(formdata);
      // console.log(`fashiondata`, res);
    })();
  }, []);

  // const userAddressData = () => {
  //   var user = {
  //     city: myselectedcity,
  //     location: myselectedlocation,
  //     address: address,
  //     landmark: landmark,
  //   };
  //   console.log('cartdataaddress', user);
  //   dispatch(userAddress(user));
  // };

  const onPressProceed = () => {
    var addressDetails = {
      myselectedcat,
      myselectedcat1,
      location,
      city: myselectedcity,
      location: myselectedlocation,
      address: address,
      landmark: landmark,
    };
    console.log('userAddress', addressDetails);
    dispatch(userAddress(addressDetails));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainHeader />
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View
          style={{
            padding: 10,
            paddingVertical: 20,
            backgroundColor: colors.WebGLQuery,
          }}>
          <View style={{flex: 1, flexDirection: 'row', left: 10}}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/cancel.png')}
                style={{width: 13, height: 13}}
                tintColor={colors.gray}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                left: 100,
                textTransform: 'capitalize',
                color: colors.gray,
              }}>
              delivery location
            </Text>
          </View>

          <View
            style={{
              //   paddingHorizontal: 60,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 16 / 2,
                    backgroundColor: colors.greenColor,
                  }}
                />
              </View>
              <View
                style={{
                  width: 70,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.greenColor,
                }}
              />

              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 16 / 2,
                    backgroundColor: colors.greenColor,
                  }}
                />
              </View>
              <View
                style={{
                  width: 70,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.greenColor,
                }}
              />

              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  borderWidth: 1,
                  borderColor: colors.lightSlategrey,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 16 / 2,
                    backgroundColor: colors.lightSlategrey,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 11,
                  textTransform: 'capitalize',
                  color: colors.greenColor,
                  right: 20,
                }}>
                create cart
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  textTransform: 'capitalize',
                  color: colors.greenColor,
                  left: 5,
                }}>
                delivery location
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  textTransform: 'capitalize',
                  color: colors.gray,
                  left: 20,
                }}>
                confirmation
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            padding: 10,
            margin: 10,
            backgroundColor: colors.white,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text style={{fontSize: 12, color: colors.greenColor}}>City</Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 10,
                  width: 140,
                  height: 36,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                }}>
                {/* <Text style={{fontSize: 12, color: colors.greenColor}}>
                    Abuja
                  </Text> */}
                {/* <Image source={require('../../../assets/dropDown.png')} /> */}
                <SelectDropdown
                  defaultButtonText={'City'}
                  buttonStyle={{
                    backgroundColor: 'white',
                    width: 130,
                    height: 30,
                    left: 5,
                  }}
                  buttonTextStyle={{
                    color: colors.greenColor,
                    left: 20,
                    fontSize: 15,
                  }}
                  rowTextStyle={{
                    fontSize: 12,
                  }}
                  data={category}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setmyselectedcat(allcategory[index].city_id);
                    setmyselectedcity(allcategory[index].city_name);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <Image
                  source={require('../../../assets/dropDown.png')}
                  style={{right: 15}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 20,
              }}>
              <Text style={{fontSize: 12, color: colors.greenColor}}>
                Location
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 10,
                  width: 140,
                  height: 36,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                }}>
                {/* <Text style={{fontSize: 12, color: colors.greenColor}}>
                    Wuse
                  </Text>
                  <Image source={require('../../../assets/dropDown.png')} /> */}

                <SelectDropdown
                  defaultButtonText={'Location'}
                  buttonStyle={{
                    backgroundColor: 'white',
                    width: 130,
                    height: 30,
                    left: 5,
                  }}
                  buttonTextStyle={{
                    color: colors.greenColor,
                    left: 20,
                    fontSize: 15,
                  }}
                  rowTextStyle={{
                    fontSize: 12,
                  }}
                  data={location}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                    setmyselectedcat1(alllocation[index].location_id);
                    setmyselectedlocation(alllocation[index].location);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                />
                <Image
                  source={require('../../../assets/dropDown.png')}
                  style={{right: 15}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 12,
                color: colors.WebGLQuery,
                marginLeft: 10,
              }}>
              Address
            </Text>
            <TextInput
              style={{
                //   height: 100,
                paddingBottom: 40,
                margin: 10,
                padding: 10,
                borderWidth: 2,
                fontSize: 12,
                borderColor: colors.WebGLQuery,
              }}
              multiline={true}
              onChangeText={(e) => {
                setaddress(e);
              }}
              // value={number}
              placeholder="Enter delivery address"
              keyboardType="numbers-and-punctuation"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: colors.WebGLQuery,
                marginLeft: 10,
              }}>
              landmark
            </Text>
            <TextInput
              style={{
                height: 45,
                margin: 10,
                padding: 10,
                borderWidth: 2,
                fontSize: 12,
                borderColor: colors.WebGLQuery,
              }}
              onChangeText={(e) => {
                setlandmark(e);
              }}
              // value={number}
              placeholder="Enter a landmark to make delivery easier and faster"
              keyboardType="numbers-and-punctuation"
            />
          </View>
          <TouchableOpacity
            // onPress={() => {
            //   userAddressData();
            // }}
            onPress={() => navigation.navigate('CreateCart')}
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: colors.WebGLQuery,
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
              margin: 10,
            }}>
            <Text style={{fontSize: 12, color: colors.WebGLQuery}}>
              Go back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressProceed();
              navigation.navigate('ConfirmationCart');
            }}
            style={{
              flex: 1,
              backgroundColor: colors.greenColor,
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 12, color: colors.white}}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;
  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getcity, getlocation})(
  DeliveryLocationCart,
);
