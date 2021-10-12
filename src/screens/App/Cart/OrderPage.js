import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import colors from '../../../theme/colors';
import {Badge} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as Progress from 'react-native-progress';
import {connect} from 'react-redux';
import {getuserRecord} from '../../../Redux/Action/Loginaction';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {
  primary,
  logo,
  secondary,
  ternary,
  forth,
  user,
  shopwrite,
  cancel,
} from '../../../assets';
import MainHeader from '../Products/MainHeader';
import Footer from '../../../components/Footer';
import {useNavigation} from '@react-navigation/native';

const OrderPage = ({getuserRecord}) => {
  const [userdata, setuserdata] = useState([]);
  let navigation = useNavigation();

  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${091123456789}';
    } else {
      number = 'tel:${091123456789}';
    }
    Linking.openURL(number);
  };

  useEffect(() => {
    (async () => {
      const formdata = new FormData();
      formdata.append('user_id', 1);
      const res = await getuserRecord(formdata);
      console.log('fashindata,', res);
      setuserdata(res.data.data);
    })();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              source={{uri: userdata.dp}}
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
              {userdata.name}
            </Text>
            <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>
              {userdata.joining_date}
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
                onPress={() => openDialScreen()}
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
              <Text style={{textAlign: 'center', fontSize: 16}}>
                Sucess Rate
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                {/* <Text>{userdata.success_rate}</Text> */}
                {/* <Progress.Circle
                  size={100}
                  color={colors.greenColor}
                  allowFontScaling={true}
                  showsText={true}
                  borderWidth={4}
                /> */}
                <AnimatedCircularProgress
                  size={100}
                  width={3}
                  fill={userdata.success_rate}
                  tintColor={colors.greenColor}
                  backgroundColor={colors.WebGLQuery}>
                  {(fill) => (
                    <Text
                      style={{
                        color: colors.greenColor,
                        fontSize: 32,
                        fontWeight: 'bold',
                      }}>
                      {userdata.success_rate}
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
            <View
              style={{
                borderRightWidth: 1,
                borderRightColor: colors.WebGLQuery,
                marginTop: 10,
                height: 130,
              }}
            />
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
                {/* <Text>{userdata.shoping_sprint}</Text> */}
                <AnimatedCircularProgress
                  size={100}
                  width={3}
                  fill={userdata.shoping_sprint}
                  tintColor={colors.greenColor}
                  backgroundColor={colors.WebGLQuery}>
                  {(fill) => (
                    <Text
                      style={{
                        color: colors.greenColor,
                        fontSize: 32,
                        fontWeight: 'bold',
                      }}>
                      {userdata.shoping_sprint}
                    </Text>
                  )}
                </AnimatedCircularProgress>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.WebGLQuery,
          padding: 10,
        }}>
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
                width: 80,
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
                width: 80,
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
                width: 80,
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
                fontSize: 9,
                textTransform: 'capitalize',
                color: colors.greenColor,
                right: 20,
              }}>
              create cart
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                color: colors.greenColor,
                left: 5,
              }}>
              Shopper assigned
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                color: colors.greenColor,
                left: 5,
              }}>
              shopping in progress
            </Text>
            <Text
              style={{
                fontSize: 9,
                textTransform: 'capitalize',
                color: colors.greenColor,
                left: 15,
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

          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Order </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.greenColor,
              fontWeight: 'bold',
            }}>
            MKA-5438-5489292
          </Text>
        </View>
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
      </View>

      <Footer />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getuserRecord})(OrderPage);

const styles = StyleSheet.create({});
