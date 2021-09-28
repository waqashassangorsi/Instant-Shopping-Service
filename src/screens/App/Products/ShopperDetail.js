import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import colors from '../../../theme/colors';
import {Badge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';

import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';

import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  cancel,
  Persons,
  shopwrite,
} from '../../../assets';
import {color} from 'react-native-reanimated';
import {Switch} from 'react-native-paper';

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

const ShopperDetail = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
      }}>
      <View style={{width: '20%', justifyContent: 'center'}}>
        <Image source={shopwrite} style={{height: 90, width: 80}} />
      </View>
      <View style={{width: '25%', justifyContent: 'center'}}>
        <Text style={{color: 'black', fontSize: 22, marginLeft: 10}}>
          Shoprite
        </Text>
        <Text style={{color: 'black', marginLeft: 10, fontSize: 13}}>
          7 july 2020
        </Text>
        <Text style={{color: colors.greenColor, marginLeft: 10, fontSize: 13}}>
          14:25
        </Text>
      </View>
      <View style={{marginTop: 15, width: '45%', alignItems: 'flex-end'}}>
        <Text style={{color: 'gray', marginLeft: 10, fontSize: 16}}>
          Maitama
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            width: '100%',
            marginRight: 8,
          }}>
          {/* <TouchableOpacity
            style={{
              backgroundColor: colors.greenColor,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
            }}>
            <AntDesign name="check" size={14} color="white" />
            <Text style={{color: 'white'}}>Accept</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: colors.greenColor,
            }}>
            <AntDesign name="check" size={14} color="green" />
            <Text style={{color: colors.greenColor}}>Accept</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
            }}>
            <Entypo name="cross" size={14} color="white" />
            <Text style={{color: 'white'}}> Reject</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
              borderColor:'red'
            }}>
            <Entypo name="cross" size={14} color="red" />
            <Text style={{color: 'red'}}> Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View>
      <View style={{flex: 1, backgroundColor: colors.greenColor}}>
        <View
          style={{
            backgroundColor: colors.greenColor,
            flexDirection: 'row',
            paddingHorizontal: 12,
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flex: 1}}>
            <Image
              source={require('../../../assets/cancel.png')}
              style={{height: 12, width: 12}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: colors.lightSlategrey}}>My Profile </Text>
          </View>
          <View style={{flex: 0.7, marginTop: -5}}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                backgroundColor: 'white',
                borderRadius: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.greenColor}}>My Orders </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.greenColor,
            //   paddingHorizontal:30,
            marginTop: 15,
          }}>
          <View style={{flex: 0.58}}>
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
              containerStyle={{position: 'absolute', top: 54, right: 0}}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 24, marginLeft: 10}}>
              Frank Gallager
            </Text>
            <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>
              Active Since June 2020
            </Text>
            <TouchableOpacity
              style={{
                height: 50,
                width: 200,
                backgroundColor: 'white',
                borderRadius: 2,
                marginLeft: 10,
                marginTop: 5,
                flexDirection: 'row',

                justifyContent: 'center',
                marginBottom: 120,
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{
                  color: colors.greenColor,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Availability Status
              </Text>
              <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color="green"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 155,
          marginHorizontal: 15,
          marginTop: -100,
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
          <View style={{flex: 1, marginTop: 10}}>
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
                strokeCap={'circle'}
                borderWidth={4}
             
             
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',

          paddingHorizontal: 15,
          marginTop: 20,
        }}>
        <View
          style={{
            flex: 2.9,
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}> New Orders</Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.greenColor,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}> All Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.3}}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.greenColor,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Entypo name="chevron-small-down" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
      }}>
      <View style={{width: '20%', justifyContent: 'center'}}>
        <Image source={shopwrite} style={{height: 90, width: 80}} />
      </View>
      <View style={{width: '25%', justifyContent: 'center'}}>
        <Text style={{color: 'black', fontSize: 22, marginLeft: 10}}>
          Shoprite
        </Text>
        <Text style={{color: 'black', marginLeft: 10, fontSize: 13}}>
          7 july 2020
        </Text>
        <Text style={{color: colors.greenColor, marginLeft: 10, fontSize: 13}}>
          14:25
        </Text>
      </View>
      <View style={{marginTop: 15, width: '45%', alignItems: 'flex-end'}}>
        <Text style={{color: 'gray', marginLeft: 10, fontSize: 16}}>
          Maitama
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            width: '100%',
            marginRight: 8,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: colors.greenColor,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
            }}>
            <AntDesign name="check" size={14} color="white" />
            <Text style={{color: 'white'}}>Accept</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: colors.greenColor,
            }}>
            <AntDesign name="check" size={14} color="green" />
            <Text style={{color: colors.greenColor}}>Accept</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
            }}>
            <Entypo name="cross" size={14} color="white" />
            <Text style={{color: 'white'}}> Reject</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              borderWidth: 2,
              width: 90,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 2,
              borderRadius: 3,
              flexDirection: 'row',
              borderColor:'red'
            }}>
            <Entypo name="cross" size={14} color="red" />
            <Text style={{color: 'red'}}> Reject</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ShopperDetail;
const styles = StyleSheet.create({
  example: {
    marginVertical: 24,
  },
});
