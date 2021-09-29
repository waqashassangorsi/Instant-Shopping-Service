import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
    <View style={{marginTop: 15, width: '45%', alignItems: 'center'}}>
      <Text style={{color: 'gray', marginLeft: 10, fontSize: 16}}>
        JFU-5892-5469224
      </Text>
      <View
        style={{
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            borderRadius: 3,

            borderWidth: 2,
            borderColor: colors.greenColor,
          }}>
          <Text style={{color: colors.greenColor}}>Ongoing</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const UserProfile = () => {
  let navigation = useNavigation();
  const [selected, setSelected] = useState('top');
  return (
    <ScrollView>
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
              My Profile
            </Text>
          </View>
        </View>
        {/* <View
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
                  height: 40,
                  width: 120,
                  backgroundColor: 'white',
                  borderRadius: 2,
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
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 120,
                  backgroundColor: 'white',
                  borderRadius: 2,

                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
          </View>
        </View> */}
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
        {/* <View>
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
        </View> */}
        <View
          style={{marginHorizontal: 10, marginTop: 20, borderBottomWidth: 0.5}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'gray',
              marginBottom: 10,
            }}>
            User Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <View style={{width: '16%', alignItems: 'center'}}>
            <Text style={{fontSize: 18, color: 'gray'}}>Gender:</Text>
          </View>
          <View style={{width: '14%', alignSelf: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>Male</Text>
          </View>
          <View style={{width: '28%', alignSelf: 'center'}}>
            <Text style={{fontSize: 18, color: 'gray'}}>Date of Birth:</Text>
          </View>
          <View style={{width: '22%', alignSelf: 'center'}}>
            <Text style={{fontSize: 16, color: 'black'}}>21,july,1992</Text>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 10, paddingTop: 10}}>
          <Text style={{fontSize: 18, color: 'gray'}}>Address:</Text>
          <View style={{marginLeft: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'black'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Text>
          </View>
        </View>
        <View
          style={{marginHorizontal: 10, marginTop: 20, borderBottomWidth: 0.5}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'gray',
              marginBottom: 10,
            }}>
            Contact information
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'space-around',
          }}>
          <View style={{width: '16%', alignSelf: 'center'}}>
            <Text style={{fontSize: 18, color: 'gray'}}>Phone:</Text>
          </View>
          <View style={{width: '14%', alignSelf: 'center'}}>
            <Text style={{fontSize: 16, color: colors.greenColor}}>090244</Text>
          </View>
          <View style={{width: '28%', alignSelf: 'center'}}>
            <Text style={{fontSize: 18, color: 'gray'}}>Date of Birth:</Text>
          </View>
          <View style={{width: '22%', alignSelf: 'center'}}>
            <Text style={{fontSize: 16, color: colors.greenColor}}>
              21,july,1992
            </Text>
          </View>
        </View>
        <View
          style={{marginHorizontal: 10, marginTop: 20, borderBottomWidth: 0.5}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 20,
            }}>
            Transaction History
          </Text>
        </View>
        <View style={styles1.tabs}>
          <TouchableOpacity
            onPress={() => {
              setSelected('top');
            }}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 8,
                textAlign: 'center',
                marginTop: 10,
              }}>
              PostedOrders
            </Text>
            {selected == 'top' && <Divider style={styles1.divider} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected('like');
            }}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 8,
                paddingLeft: 10,
                marginTop: 10,
                textAlign: 'center',
              }}>
              Completed orders
            </Text>

            {selected == 'like' && <Divider style={styles1.divider} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected('follow');
            }}>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 8,
                paddingLeft: 10,
                marginTop: 10,
                textAlign: 'center',
              }}>
              Ongoing orders
            </Text>

            {selected == 'follow' && <Divider style={styles1.divider} />}
          </TouchableOpacity>
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
