import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Fonts} from '../utils/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
const OrderDetail = () => {
  let navigation = useNavigation();
  const dispatch = useDispatch();
  const cart_data = useSelector((state) => state.cart.userCart);
  const total = useSelector((state) => state.cart.totalPrice);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
      }}>
      <View
        style={{
          flex: 1,
          // backgroundColor: colors.WebGLQuery,
          marginTop: 10,
          borderWidth: 2,
          borderColor: colors.WebGLQuery,
          marginHorizontal: 10,
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
                }}>
                <View
                  style={{
                    //   flex: 1,
                    flexDirection: 'row',
                    padding: 10,
                  }}>
                  <Image
                    source={{uri: ok.img}}
                    style={{width: 73, height: 73}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 16}}>{ok.name}</Text>
                    <Text style={{fontSize: 10}}>Black</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.gray,
                        marginTop: 10,
                      }}>
                      {ok.price}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    style={{left: 40}}
                    onPress={() => dispatch(deleteToCart(i, ok))}>
                    <Image
                      //   source={require('../../../assets/cancel.png')}
                      style={{width: 13, height: 13}}
                      tintColor={colors.WebGLQuery}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      right: 25,
                      // marginRight:20
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setcount1(count1 - 1);
                      }}>
                      <Text style={{fontSize: 20, color: colors.WebGLQuery}}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        borderWidth: 1,
                        margin: 15,
                        paddingHorizontal: 5,
                        borderColor: colors.WebGLQuery,
                        elevation: 1,
                      }}>
                      <Text>{ok.qty}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setcount1(count1 + 1);
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: colors.WebGLQuery,
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
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
            ${total}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetail;
