import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../../theme/colors';
import {Badge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';

import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  Persons,
  shopwrite,
  cancel,
} from '../../../assets';

const OrderPage = () => {
  return (
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
          <Entypo name="cross" size={28} color="gray" />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 18}}>
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
            MKA-5438-5489292
          </Text>
          <Text
            style={{
              color: colors.greenColor,
              alignSelf: 'center',
              fontFamily: 'Cochin',
            }}>
            Ongoing
          </Text>
        </TouchableOpacity>
      </View>
      <View>
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
            source={Persons}
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
            containerStyle={{position: 'absolute', bottom: 40, right: 4}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 22, marginLeft: 10}}>
            Frank Gallager
          </Text>
          <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>
            Active Since June 2020
          </Text>

          <TouchableOpacity
            style={{
              height: 40,
              width: 120,
              backgroundColor: 'white',
              borderRadius: 2,
              marginLeft: 10,
              marginTop: 5,
              flexDirection: 'row',

              justifyContent: 'center',

              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.greenColor,
                fontSize: 16,
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
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            height: 40,
            width: 120,
            backgroundColor: 'white',
            borderRadius: 2,
            marginLeft: 10,
            marginTop: 5,
            flexDirection: 'row',

            justifyContent: 'center',

            alignItems: 'center',
            alignSelf: 'flex-end',
            marginTop: -64,
            marginRight: 30,
          }}>
          <Text
            style={{
              color: colors.greenColor,
              fontSize: 16,
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
      <View
        style={{
          backgroundColor: 'white',
          height: 155,
          marginHorizontal: 10,
          marginTop: 15,
          borderWidth: 1,
          borderColor: 'gray',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              marginTop: 10,
            }}>
            <Text style={{textAlign: 'center', fontSize: 16}}>Sucess Rate</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Progress.Circle
                size={100}
                color={colors.greenColor}
                allowFontScaling={true}
                showsText={true}
                strokeCap={'circle'}
                borderWidth={4}
              />
            </View>
          </View>
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
              <Progress.Circle
                size={100}
                color={colors.greenColor}
                allowFontScaling={true}
                showsText={true}
                borderWidth={4}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({});
