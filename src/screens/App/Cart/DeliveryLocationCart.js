import React, { useState } from 'react'
import { View, Text,TouchableOpacity,TextInput,Pressable,Image,ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import colors from '../../../theme/colors';
import Footer from '../../../components/Footer';
import MainHeader from '../Products/MainHeader';
import {useNavigation} from '@react-navigation/native';

const DeliveryLocationCart = () => {
  let navigation = useNavigation();
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
                <Text style={{fontSize: 12, color: colors.greenColor}}>
                  City
                </Text>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    width: 135,
                    height: 36,
                    borderWidth: 1,
                    fontSize: 11,
                    borderColor: colors.greenColor,
                  }}>
                  <Text style={{fontSize: 12, color: colors.greenColor}}>
                    Abuja
                  </Text>
                  <Image source={require('../../../assets/dropDown.png')} />
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
                    width: 133,
                    height: 36,
                    borderWidth: 1,
                    fontSize: 11,
                    borderColor: colors.greenColor,
                  }}>
                  <Text style={{fontSize: 12, color: colors.greenColor}}>
                    Wuse
                  </Text>
                  <Image source={require('../../../assets/dropDown.png')} />
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
                // onChangeText={onChangeNumber}
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
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Enter a landmark to make delivery easier and faster"
                keyboardType="numbers-and-punctuation"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CreateCart');
              }}
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
}

export default DeliveryLocationCart;
