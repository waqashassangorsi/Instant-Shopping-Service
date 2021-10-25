import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../../components/Footer';
import colors from '../../../theme/colors';
import MainHeader from '../Products/MainHeader';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {loginaction} from '../../../Redux/Action/Loginaction';

const ConfirmationCart = ({userdetails}) => {
  const cart_data = useSelector((state) => state.cart.userCart);
  const totalAmount = useSelector((state) => state.cart.totalPrice);
  const userAddress = userdetails;
  let navigation = useNavigation();

  const onPressPlaceOrder = async () => {
    let obj = {
      cart: cart_data,
      totalAmount,
      userAddress,
    };
    console.log('onPressPlaceOrder OBJECT: ', obj);
    console.log('onPressPlaceOrder STRING: ', JSON.stringify(obj));

    navigation.navigate('CongratulationCart');

    const res = await loginaction(JSON.stringify(obj));
    if (res.data.status) {
      setLoading(false);
    } else {
      alert(res.data.message);
      setLoading(false);
    }
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
              order summary
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
                  borderBottomColor: colors.gray,
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
                  color: colors.greenColor,
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
            backgroundColor: colors.white,
            margin: 10,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              borderWidth: 2,
              borderColor: colors.WebGLQuery,
            }}>
            {cart_data &&
              cart_data.map(function (ok, i) {
                return (
                  <View
                    key={i}
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
                        source={{uri: ok.img}}
                        style={{width: 73, height: 73}}
                      />
                      <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 16}}>{ok.name}</Text>
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
                          {ok.qty}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: colors.gray,
                          }}>
                          ${ok.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              })}
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
                $6,274.75
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              marginTop: 10,
              borderWidth: 2,
              borderColor: colors.WebGLQuery,
              padding: 15,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                // padding: 15,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 11,
                    color: colors.WebGLQuery,
                    textTransform: 'capitalize',
                  }}>
                  City
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 8,
                  }}>
                  {userdetails.city}
                </Text>
              </View>
              <View style={{marginLeft: 100}}>
                <Text
                  style={{
                    fontSize: 11,
                    color: colors.WebGLQuery,
                    textTransform: 'capitalize',
                  }}>
                  Location
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    textTransform: 'capitalize',
                    marginTop: 8,
                  }}>
                  {userdetails.location}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 11,
                  color: colors.WebGLQuery,
                  textTransform: 'capitalize',
                }}>
                Address
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: 'capitalize',
                  marginTop: 8,
                }}>
                {userdetails.address}
              </Text>
            </View>
            <View style={{marginTop: 10, marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 11,
                  color: colors.WebGLQuery,
                  textTransform: 'capitalize',
                }}>
                landmark
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: 'capitalize',
                  marginTop: 8,
                }}>
                {userdetails.landmark}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              borderWidth: 2,
              borderColor: colors.WebGLQuery,
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 12, color: colors.WebGLQuery}}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressPlaceOrder();
            }}
            style={{
              flex: 1,
              backgroundColor: colors.greenColor,
              alignItems: 'center',
              justifyContent: 'flex-end',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: colors.white,
                textTransform: 'capitalize',
              }}>
              Place order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const userdetails = state.cart.userdetails;
  console.log('reduxdatamynew', userdetails);
  return {userdetails};
};
export default connect(mapStateToProps, {})(ConfirmationCart);
