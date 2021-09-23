import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../../theme/colors';

const ConfirmationCart = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white, margin: 10}}>
      <View
        style={{
          flex: 1,
          marginTop: 10,
          borderWidth: 2,
          borderColor: colors.WebGLQuery,
        }}>
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
              <Text style={{fontSize: 16}}>Mini Dress</Text>
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
              <Text style={{textAlign: 'center', marginTop: 3}}>5</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.gray,
                }}>
                $250.99
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
              <Text style={{fontSize: 16}}>Mini Dress</Text>
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
              <Text style={{textAlign: 'center', marginTop: 3}}>5</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.gray,
                }}>
                $250.99
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
              <Text style={{fontSize: 16}}>Mini Dress</Text>
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
              <Text style={{textAlign: 'center', marginTop: 3}}>5</Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: colors.gray,
                }}>
                $250.99
              </Text>
            </View>
          </View>
        </View>

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
              style={{fontSize: 12, textTransform: 'capitalize', marginTop: 8}}>
              abuja
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
              style={{fontSize: 12, textTransform: 'capitalize', marginTop: 8}}>
              Wuse
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
            style={{fontSize: 12, textTransform: 'capitalize', marginTop: 8}}>
            Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Text>
        </View>
        <View style={{marginTop: 10,marginVertical:10}}>
          <Text
            style={{
              fontSize: 11,
              color: colors.WebGLQuery,
              textTransform: 'capitalize',
            }}>
            landmark
          </Text>
          <Text
            style={{fontSize: 12, textTransform: 'capitalize', marginTop: 8}}>
            Opposite the Dome
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
  );
};

export default ConfirmationCart;
