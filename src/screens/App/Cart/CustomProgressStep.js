import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../../theme/colors';
import CreateCart from './CreateCart';
import DeliveryLocationCart from './DeliveryLocationCart';

const CustomProgressStep = () => {
    return (
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View
          style={{
            flex:1,
            padding: 10,
            paddingVertical: 20,
            backgroundColor: colors.WebGLQuery,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
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
                alignItems: 'flex-end',
                textTransform: 'capitalize',
                color: colors.gray,
                paddingHorizontal: 110,
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
      </View>
    );
}

export default CustomProgressStep
