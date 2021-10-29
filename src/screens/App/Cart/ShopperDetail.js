import React, {useState, useEffect} from 'react';
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
import {connect} from 'react-redux';
import {
  getuserRecord,
  getassignedOrder,
  acceptrejectOrder,
  not_assigned_order,
} from '../../../Redux/Action/Loginaction';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {UIActivityIndicator} from 'react-native-indicators';
import LoaderModal from 'react-native-modal';
import moment from 'moment';
import database from '@react-native-firebase/database';
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

const ShopperDetail = ({
  getuserRecord,
  route,
  getassignedOrder,
  acceptrejectOrder,
  not_assigned_order,
  user,
}) => {
  let navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [userdata, setuserdata] = useState([]);
  const [assignedorder, setassignedorder] = useState([]);

  const [accrejorder, setaccrejorder] = useState([]);
  const [orderid, setorderid] = useState('');
  const [orderstatus, setorderstatus] = useState('');
  const [buttonstatus, setbuttonstatus] = useState('');

  const [productdata, setproductdata] = useState([]);
  const [updateordercompo, setupdateordercompo] = useState([]);
  const [loading, setLoading] = useState();
  const [isLoaderModalVisible, setLoaderModalVisible] = useState(false);
  const onlineRef = database().ref(`online/`);
  const [online, setOnline] = useState([]);
  const [otherOnline, setOtherOnline] = useState(false);

  const toggleModal = () => {
    setLoaderModalVisible(!isLoaderModalVisible);
  };

  useEffect(() => {
    listenForOnline(onlineRef);
  }, []);

  useEffect(() => {
    // console.log('redux user: ', user);

    // console.log('shoppermessenger messagesRef: ', messagesRef);
    // console.log('shoppermessenger messages: ', messages);
    // console.log('shoppermessenger onlineRef: ', onlineRef);
    // console.log('shoppermessenger online: ', online);
    // console.log('shoppermessenger userData: ', userData);

    var filteredUser = online.filter((i) => i._id == userdata.id);
    // console.log('userprofile filteredUser: ', filteredUser);
    // console.log('userprofile user_data: ', userdata?.id);

    // console.log(
    //   'shoppermessenger lastonline: ',
    //   moment(filteredUser[0]?.lastonline).format('DD-MM-YYYY hh:mm:ss'),
    // );

    // console.log(
    //   'shoppermessenger lastonline: ',
    //   moment(Date.now()).format('DD-MM-YYYY hh:mm:ss'),
    // );

    // timeDifference(Date.now(), filteredUser[0]?.lastonline);

    if (filteredUser[0]?.onlinestatus == 'Online') {
      // console.log('userprofile onlinestatus: ', filteredUser[0]?.onlinestatus);

      setOtherOnline(true);
    }

    if (filteredUser[0]?.onlinestatus == 'Offline') {
      // console.log('userprofile onlinestatus: ', filteredUser[0]?.onlinestatus);

      setOtherOnline(false);
    }
  });

  const listenForOnline = () => {
    onlineRef.on('value', (snapshot) => {
      let onlineFB = [];
      snapshot.forEach((child) => {
        onlineFB = [
          ...onlineFB,
          {
            _id: child.key,
            lastonline: child.val().lastonline,
            onlinestatus: child.val().onlinestatus,
          },
        ];
      });

      setOnline(onlineFB);
    });
  };

  useEffect(() => {
    toggleModal();
    setLoading(true);

    (async () => {
      const formdata = new FormData();
      formdata.append('user_id', user.user_id);
      const res = await getuserRecord(formdata);
      console.log('shopperdetail RESPONSE getuserRecord,', res);
      setuserdata(res?.data?.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let userId;
      userId = user?.user_id;
      userId = JSON.parse(userId);
      console.log('shopperdetail typeof userId : ', typeof userId);
      console.log('shopperdetail userId : ', userId);
      const formdata = new FormData();
      formdata.append('user_id', "'" + userId + "'");
      console.log('shopperdetail getassignedOrder formdata: ', formdata);
      const res = await getassignedOrder(formdata);
      console.log('shopperdetail RESPONSE getassignedOrder: ', res);
      setassignedorder(res.data.data);
      setLoading(false);
      toggleModal();
    })();
  }, [updateordercompo]);

  const accept_reject = async (orderid, status) => {
    const formdata = new FormData();

    formdata.append('order_id', orderid);
    formdata.append('user_id', user.user_id);
    formdata.append('order_status', status);

    const res = await acceptrejectOrder(formdata);

    if (res.data.status == true) {
      setupdateordercompo(res.data.data.order_id);
    } else {
    }

    console.log('fashindata,', res);
    setaccrejorder(res.data.data);
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const onPressOrder = (item) => {
    console.log('props shopperdetail order pressed: ', item);
    navigation.navigate('OrderPage', item);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onPressOrder(item)} style={{padding: 10}}>
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
            <Text style={{fontSize: 18}}>{item.order_number}</Text>
            <Text style={{fontSize: 12}}>
              {moment(item.order_date).format('D MMM YYYY')}
            </Text>
            <Text style={{fontSize: 12}}>
              {moment(item.order_date).format('hh:mm')}
            </Text>
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
                onPress={() => {
                  accept_reject(item.id, 'accept');
                }}
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
                onPress={() => {
                  accept_reject(item.id, 'reject');
                }}
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
    </TouchableOpacity>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {loading ? (
        <LoaderModal
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          isVisible={isLoaderModalVisible}>
          <View
            style={{
              position: 'absolute',
              padding: 20,
              borderRadius: 50,
              backgroundColor: 'black',
            }}>
            <UIActivityIndicator color="white" />
          </View>
        </LoaderModal>
      ) : null}
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
                source={{uri: userdata.dp}}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 80 / 2,
                  alignSelf: 'flex-end',
                }}
              />
              {otherOnline ? (
                <Badge
                  value=" "
                  status="success"
                  containerStyle={{position: 'absolute', top: 54, right: 0}}
                />
              ) : null}
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 18, marginLeft: 10}}>
                {userdata.name}
              </Text>
              <Text style={{color: 'white', marginLeft: 10, fontSize: 10}}>
                {'Active Since ' +
                  moment(userdata.joining_date).format('MMMM YYYY')}
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
                height: 120,
                elevation: 1,
              }}
            />
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
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{}}>
                <Image source={shopwrite} style={{height: 90, width: 80}} />
              </View>
              <View style={{}}>
                <Text style={{fontSize: 18}}>
                  {assignedorder1.order_number}
                </Text>
                <Text style={{fontSize: 12}}>{assignedorder1.order_date}</Text>
                <Text style={{fontSize: 12}}>14:25</Text>
              </View>
            </View> */}

            {/* <View style={{alignItems: 'center'}}>
              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 12,
                    color: colors.gray,
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
            </View> */}
          </View>
        </View>

        <FlatList
          data={assignedorder}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Footer />
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {
  getuserRecord,
  getassignedOrder,
  acceptrejectOrder,
  not_assigned_order,
  user,
})(ShopperDetail);
const styles = StyleSheet.create({
  example: {
    marginVertical: 24,
  },
});
