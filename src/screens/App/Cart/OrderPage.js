import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  FlatList,
} from 'react-native';
import colors from '../../../theme/colors';
import {Loading} from '../ProductDetail/Loading';
import {Badge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Progress from 'react-native-progress';
import {connect, useSelector} from 'react-redux';
import {getuserRecord, getorderDetail} from '../../../Redux/Action/Loginaction';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  user,
  shopwrite,
  cancel,
} from '../../../assets';
import MainHeader from '../Products/MainHeader';
import Footer from '../../../components/Footer';
import {useNavigation} from '@react-navigation/native';

const OrderPage = ({getuserRecord, getorderDetail}) => {
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState([]);
  const [order, setorder] = useState([]);
  const [product, setproduct] = useState([]);
  const [user, setUser] = useState(useSelector((state) => state?.auth));
  let navigation = useNavigation();

  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:' + userdata.phone_number;
    } else {
      number = 'tel:' + userdata.phone_number;
    }
    Linking.openURL(number);
  };

  useEffect(() => {
    console.log('orderpage useeffect user: ', user?.user?.user_role);
    console.log('orderpage useeffect props');
    (async () => {
      const formdata = new FormData();
      formdata.append('order_id', 54);
      const res = await getorderDetail(formdata);
      console.log('orderpage RESPONSE: ', res);

      setorder(res.data.data.order_detail[0]);
      let array = [];
      array.push(res.data.data.product_detail);
      setproduct(array);
    })();
  }, []);

  useEffect(() => {
    console.log('RESPONSE product: ', product);
  });

  useEffect(() => {
    (async () => {
      const formdata = new FormData();
      formdata.append('user_id', 1);
      const res = await getuserRecord(formdata);
      // console.log('fashindata,', res);
      setuserdata(res.data.data);
    })();
  }, []);

  const onPressMessenger = () => {
    console.log('orderpage userdata: ', userdata);
    if (userdata.length != 0) {
      navigation.navigate('ShopperMessenger', {
        userdata: userdata,
      });
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Loading visible={loading} /> */}

      <MainHeader />

      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
            }}>
            <Image
              source={cancel}
              style={{width: 13, height: 13}}
              tintColor={colors.WebGLQuery}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                color: colors.WebGLQuery,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              My Orders
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 2,

              borderRadius: 3,
              flexDirection: 'row',
              borderColor: colors.greenColor,
              height: 40,
              marginHorizontal: 10,
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
            <Text
              style={{
                color: colors.greenColor,
                alignSelf: 'center',
                marginRight: 120,
              }}>
              {order.order_number}
            </Text>
            <Text
              style={{
                color: colors.greenColor,
                alignSelf: 'center',
                fontFamily: 'Cochin',
              }}>
              {order.order_status}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity
            style={{
              borderRadius: 3,
              flexDirection: 'row',
              borderColor: colors.greenColor,
              height: 35,
              marginHorizontal: 10,
              justifyContent: 'space-around',
              marginTop: 10,
              backgroundColor: colors.greenColor,
            }}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
              }}>
              Load More Orders
            </Text>
          </TouchableOpacity>
        </View> */}

        {user?.user?.user_role == 'subscriber' ? (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.greenColor,
              marginHorizontal: 10,
              marginTop: 15,
              height: 150,
              // backgroundColor: 'pink',
            }}>
            <View style={{flex: 0.4, justifyContent: 'center', marginTop: 10}}>
              <Image
                source={{uri: userdata.dp}}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                  alignSelf: 'flex-end',
                }}
              />
              <Badge
                value=" "
                status="success"
                containerStyle={{position: 'absolute', bottom: 35, right: 4}}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
              <Text style={{color: 'white', fontSize: 22, marginLeft: 10}}>
                {userdata.name}
              </Text>
              <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>
                {userdata.joining_date}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => onPressMessenger()}
                  style={{
                    height: 36,
                    width: 100,

                    backgroundColor: 'white',
                    borderRadius: 2,
                    flexDirection: 'row',

                    justifyContent: 'center',

                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: colors.greenColor,
                      fontSize: 11,
                      textAlign: 'center',
                    }}>
                    Messenger
                  </Text>
                  <MaterialIcons
                    name="messenger"
                    size={18}
                    style={{
                      marginLeft: 5,
                      color: colors.greenColor,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openDialScreen()}
                  style={{
                    height: 36,
                    width: 100,
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 2,

                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: colors.greenColor,
                      fontSize: 11,
                      textAlign: 'center',
                    }}>
                    Phone Call
                  </Text>
                  <Zocial
                    name="call"
                    size={18}
                    style={{
                      marginLeft: 5,
                      color: colors.greenColor,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}

        {user?.user?.user_role == 'subscriber' ? (
          <View
            style={{
              backgroundColor: 'white',
              height: 155,
              marginHorizontal: 10,
              marginTop: 15,
              borderWidth: 1,
              borderColor: 'gray',
              // backgroundColor: 'black',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  marginTop: 10,
                }}>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  Sucess Rate
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {/* <Text>{userdata.success_rate}</Text> */}
                  {/* <Progress.Circle
                  size={100}
                  color={colors.greenColor}
                  allowFontScaling={true}
                  showsText={true}
                  borderWidth={4}
                /> */}
                  <AnimatedCircularProgress
                    size={100}
                    width={3}
                    fill={userdata.success_rate}
                    tintColor={colors.greenColor}
                    backgroundColor={colors.WebGLQuery}>
                    {(fill) => (
                      <Text
                        style={{
                          color: colors.greenColor,
                          fontSize: 32,
                          fontWeight: 'bold',
                        }}>
                        {userdata.success_rate}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
                </View>
              </View>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: colors.WebGLQuery,
                  marginTop: 10,
                  height: 130,
                }}
              />
              <View style={{flex: 1, marginTop: 10, backgroundColor: 'white'}}>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  Shopping sprint
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {/* <Text>{userdata.shoping_sprint}</Text> */}
                  <AnimatedCircularProgress
                    size={100}
                    width={3}
                    fill={userdata.shoping_sprint}
                    tintColor={colors.greenColor}
                    backgroundColor={colors.WebGLQuery}>
                    {(fill) => (
                      <Text
                        style={{
                          color: colors.greenColor,
                          fontSize: 32,
                          fontWeight: 'bold',
                        }}>
                        {userdata.shoping_sprint}
                      </Text>
                    )}
                  </AnimatedCircularProgress>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </View>
      <View
        style={{
          backgroundColor: colors.WebGLQuery,
          padding: 10,
        }}>
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
                borderColor:
                  order.assing_to == 0 ? colors.greenColor : colors.gray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16 / 2,
                  backgroundColor:
                    order.assing_to == 0 ? colors.greenColor : colors.gray,
                }}
              />
            </View>
            <View
              style={{
                width: 80,
                borderBottomWidth: 1,
                borderBottomColor:
                  order.assing_to > 0 ? colors.greenColor : colors.gray,
              }}
            />

            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                borderWidth: 1,
                borderColor:
                  order.assing_to > 0 ? colors.greenColor : colors.gray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16 / 2,
                  backgroundColor:
                    order.assing_to > 0 ? colors.greenColor : colors.gray,
                }}
              />
            </View>
            <View
              style={{
                width: 80,
                borderBottomWidth: 1,
                // borderBottomColor: colors.greenColor,
                borderBottomColor:
                  order.assing_to > 0 ? colors.greenColor : colors.gray,
              }}
            />

            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                borderWidth: 1,
                borderColor:
                  order.assing_to > 0 ? colors.greenColor : colors.gray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16 / 2,
                  backgroundColor:
                    order.assing_to > 0 ? colors.greenColor : colors.gray,
                }}
              />
            </View>

            <View
              style={{
                width: 80,
                borderBottomWidth: 1,
                // borderBottomColor: colors.greenColor,
                borderBottomColor: colors.gray,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20 / 2,
                borderWidth: 1,
                // borderColor: colors.greenColor,
                borderColor: colors.gray,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 16 / 2,
                  // backgroundColor: colors.greenColor,
                  backgroundColor: colors.gray,
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
                fontSize: 9,
                textTransform: 'capitalize',
                color: order.assing_to == 0 ? colors.greenColor : colors.gray,
                right: 20,
              }}>
              create cart
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                color: order.assing_to > 0 ? colors.greenColor : colors.gray,
                left: 5,
              }}>
              Shopper assigned
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                color: order.assing_to > 0 ? colors.greenColor : colors.gray,
                left: 5,
              }}>
              shopping in progress
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                // color: colors.greenColor,
                color: colors.gray,
                left: 15,
              }}>
              confirmation
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Order </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.greenColor,
              fontWeight: 'bold',
            }}>
            {order.order_number}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            borderWidth: 2,
            borderColor: colors.WebGLQuery,
            // backgroundColor: 'black',
          }}>
          {/* <View style={{backgroundColor: 'pink', height: 100}}> */}
          <FlatList
            data={product}
            keyExtractor={(product) => product.product_id}
            renderItem={({item}) => {
              console.log('RESPONSE ITEM: ', item);
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#FAFAFA',
                    borderBottomWidth: 2,
                    borderColor: colors.WebGLQuery,
                    padding: 10,
                    // backgroundColor: 'black',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../../assets/miniDress.png')}
                      style={{width: 73, height: 73}}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text style={{fontSize: 16, color: 'black'}}>
                        {item.product_name}
                      </Text>
                      {/* <Text style={{fontSize: 10}}>Black</Text> */}
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        borderWidth: 1,
                        width: 30,
                        height: 30,
                        borderColor: colors.WebGLQuery,
                        backgroundColor: colors.white,
                        elevation: 1,
                        marginRight: 15,
                      }}>
                      <Text style={{textAlign: 'center', marginTop: 3}}>
                        {item.qty}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.gray,
                        }}>
                        {'$' + item.product_price}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          {/* </View> */}

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
              padding: 10,
              backgroundColor: 'black',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16, color: 'black'}}>
                  {product.product_name}
                </Text>
                <Text style={{fontSize: 10}}>Black</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderColor: colors.WebGLQuery,
                  backgroundColor: colors.white,
                  elevation: 1,
                  marginRight: 15,
                }}>
                <Text style={{textAlign: 'center', marginTop: 3}}>
                  {product.qty}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                  }}>
                  {'$' + product.product_price}
                </Text>
              </View>
            </View>
          </View> */}

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}> {product.product_name}</Text>
                <Text style={{fontSize: 10}}>Black</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderColor: colors.WebGLQuery,
                  backgroundColor: colors.white,
                  elevation: 1,
                  marginRight: 15,
                }}>
                <Text style={{textAlign: 'center', marginTop: 3}}>
                  {product.qty}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                  }}>
                  {'$' + product.product_price}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#FAFAFA',
              borderBottomWidth: 2,
              borderColor: colors.WebGLQuery,
              padding: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/miniDress.png')}
                style={{width: 73, height: 73}}
              />
              <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16}}> {product.product_name}</Text>
                <Text style={{fontSize: 10}}>Black</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  width: 30,
                  height: 30,
                  borderColor: colors.WebGLQuery,
                  backgroundColor: colors.white,
                  elevation: 1,
                  marginRight: 15,
                }}>
                <Text style={{textAlign: 'center', marginTop: 3}}>
                  {product.qty}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                  }}>
                  {'$' + product.product_price}
                </Text>
              </View>
            </View>
          </View> */}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
            }}>
            <Text style={{fontSize: 16}}>Total</Text>
            <Text
              style={{
                fontSize: 16,
                color: colors.greenColor,
                marginHorizontal: 10,
              }}>
              ${order.order_total}
            </Text>
          </View>
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
export default connect(mapStateToProps, {getuserRecord, getorderDetail})(
  OrderPage,
);

const styles = StyleSheet.create({});
