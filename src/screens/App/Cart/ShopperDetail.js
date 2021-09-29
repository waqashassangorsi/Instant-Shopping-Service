import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
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
  user,
} from '../../../assets';
import {color} from 'react-native-reanimated';
import {Switch} from 'react-native-paper';

import MainHeader from '../Products/MainHeader';
import Footer from '../../../components/Footer';

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
    <View style={{padding: 10}}>
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

        <View style={{alignItems: 'center'}}>
          <View style={{}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 12,
                color: colors.WebGLQuery,
                marginBottom: 10,
                marginRight: 5,
              }}>
              Maitama
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 75,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',

                  borderRadius: 3,
                  flexDirection: 'row',
                  marginRight: 5,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                }}>
                <AntDesign name="check" size={10} color="green" />
                <Text style={{color: colors.greenColor, fontSize: 8}}>
                  Accept
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 75,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',

                  borderRadius: 3,
                  flexDirection: 'row',
                  borderWidth: 1,
                  borderColor: 'red',
                }}>
                <Entypo name="cross" size={10} color="red" />
                <Text style={{color: 'red', fontSize: 8}}> Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <ScrollView>
      <MainHeader />
      <View>
        <View style={{flex: 1, backgroundColor: colors.greenColor}}>
          <View
            style={{
              backgroundColor: colors.greenColor,
              flexDirection: 'row',
              paddingHorizontal: 12,
              justifyContent: 'space-between',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <Image
                source={require('../../../assets/cancel.png')}
                style={{height: 12, width: 12}}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: '#80C595'}}>My Profile </Text>
            </View>

            <TouchableOpacity
              style={{
                height: 25,
                width: 80,
                backgroundColor: 'white',
                borderRadius: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.greenColor, fontSize: 10}}>
                My Orders
              </Text>
            </TouchableOpacity>
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
                source={user}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 80 / 2,
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
              <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                Frank Gallager
              </Text>
              <Text style={{color: 'white', marginLeft: 10, fontSize: 10}}>
                Active Since June 2020
              </Text>
              <TouchableOpacity
                style={{
                  height: 36,
                  width: 150,
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
                    fontSize: 10,
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
            height: 140,
            marginHorizontal: 15,
            marginTop: -100,
            elevation: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                marginTop: 10,
              }}>
              <Text style={{textAlign: 'center', fontSize: 12}}>
                Sucess Rate
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Progress.Circle
                  size={80}
                  color={colors.greenColor}
                  allowFontScaling={true}
                  showsText={true}
                  // strokeCap={'circle'}
                  borderWidth={4}
                />
              </View>
            </View>
            <View style={{flex: 1, marginTop: 10}}>
              <Text style={{textAlign: 'center', fontSize: 12}}>
                Shopping sprint
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Progress.Circle
                  size={80}
                  color={colors.greenColor}
                  allowFontScaling={true}
                  showsText={true}
                  // strokeCap={'circle'}
                  borderWidth={4}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              borderBottomWidth: 2,
              borderBottomColor: colors.WebGLQuery,
              padding: 10,
            }}>
            <View
              style={{
                flex: 2.9,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12}}>New Orders</Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: 90,
                height: 30,

                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: colors.greenColor,
              }}>
              <Text style={{color: 'white', fontSize: 10, marginRight: 5}}>
                All Orders
              </Text>
              <View
                style={{borderLeftWidth: 1, borderColor: 'white', width: 25}}>
                <Entypo name="chevron-small-down" size={18} color="white" />
              </View>
            </TouchableOpacity>
            {/* <View style={{flex: 0.3}}>
             
            </View> */}
          </View>

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

            <View style={{alignItems: 'center'}}>
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 12,
                    color: colors.WebGLQuery,
                    marginBottom: 10,
                    marginRight: 5,
                  }}>
                  Maitama
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.greenColor,
                      width: 75,
                      height: 25,
                      justifyContent: 'center',
                      alignItems: 'center',

                      borderRadius: 3,
                      flexDirection: 'row',
                      marginRight: 5,
                    }}>
                    <AntDesign name="check" size={10} color="white" />
                    <Text style={{color: 'white', fontSize: 8}}>Accept</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      backgroundColor: 'red',
                      width: 75,
                      height: 25,
                      justifyContent: 'center',
                      alignItems: 'center',

                      borderRadius: 3,
                      flexDirection: 'row',
                    }}>
                    <Entypo name="cross" size={10} color="white" />
                    <Text style={{color: 'white', fontSize: 8}}> Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ShopperDetail;
const styles = StyleSheet.create({
  example: {
    marginVertical: 24,
  },
});
