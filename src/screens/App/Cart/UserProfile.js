import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {Badge} from 'react-native-elements';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';

import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  Persons,
  shopwrite,
  cancel,
  user,
} from '../../../assets';
import MainHeader from '../Products/MainHeader';
import Footer from '../../../components/Footer';

import {useNavigation} from '@react-navigation/native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const renderItem = ({item}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: colors.WebGLQuery,
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <Image source={shopwrite} style={{height: 90, width: 80}} />
      </View>
      <View style={{}}>
        <Text style={{fontSize: 18}}>Shoprite</Text>
        <Text style={{fontSize: 12}}>7 july 2020</Text>
        <Text style={{fontSize: 12}}>14:25</Text>
      </View>
    </View>

    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{}}>
        <Text
          style={{
            paddingVertical: 10,
            fontSize: 12,
            color: colors.WebGLQuery,
          }}>
          JFU-5892-5469224
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 100,
          height: 25,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: colors.greenColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 10, color: colors.greenColor}}>
          Ongoing
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

const UserProfile = () => {
  let navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainHeader />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={cancel}
              style={{width: 13, height: 13}}
              tintColor={colors.gray}
            />
          </TouchableOpacity>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              My Profile
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.greenColor,
            marginHorizontal: 10,
            marginTop: 15,
            height: 150,
          }}>
          <View style={{flex: 0.4, justifyContent: 'center', marginTop: 10}}>
            <Image
              source={user}
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
              Frank Gallager
            </Text>
            <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>
              Active Since June 2020
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ShopperMessenger');
                }}
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

        <View style={{padding: 20}}>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: colors.WebGLQuery,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'gray',
                marginBottom: 10,
              }}>
              User Profile
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text style={{fontSize: 12, color: 'gray'}}>Gender:</Text>
              </View>
              <View style={{}}>
                <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}>
                  Male
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{}}>
                <Text style={{fontSize: 12, color: 'gray'}}>
                  Date of Birth:
                </Text>
              </View>
              <View style={{}}>
                <Text style={{fontSize: 12, color: 'black', marginLeft: 10}}>
                  21 july, 1992
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
            }}>
            <Text style={{fontSize: 12, color: 'gray'}}>Address:</Text>

            <View style={{left: 5, marginRight: 30}}>
              <Text style={{fontSize: 12, color: 'black'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: colors.WebGLQuery,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: 'gray',
                fontWeight: 'bold',
              }}>
              Contact information
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, color: 'gray'}}>Phone:</Text>
              <Text
                style={{fontSize: 12, color: colors.greenColor, marginLeft: 5}}>
                0336-6432173
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12, color: 'gray'}}>Email:</Text>
              <Text
                style={{fontSize: 12, color: colors.greenColor, marginLeft: 5}}>
                helpdesk@psa.com
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: colors.WebGLQuery,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Transaction History
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              borderBottomWidth: 2,
              borderBottomColor: colors.WebGLQuery,
            }}>
            <Pressable
              android_ripple={{
                color: colors.black,
                // borderless: false,
              }}>
              <Text style={{fontSize: 12, color: colors.greenColor}}>
                posted orders
              </Text>
            </Pressable>
            <Pressable
              android_ripple={{
                color: colors.black,
                borderless: false,
              }}>
              <Text style={{fontSize: 12, color: colors.WebGLQuery}}>
                Completed orders
              </Text>
            </Pressable>
            <Pressable
              android_ripple={{
                color: colors.black,
                borderless: false,
              }}>
              <Text style={{color: colors.WebGLQuery}}>Ongoing orders</Text>
            </Pressable>
          </View>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShopperDetail');
              }}
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
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default UserProfile;

const styles1 = StyleSheet.create({
  tabs: {
    // justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 0.5,

    marginHorizontal: 20,
    marginTop: 10,
  },

  divider: {
    height: 1.5,
    backgroundColor: colors.secondary,
    width: 100,

    marginTop: 5,
    alignSelf: 'center',
  },
});
