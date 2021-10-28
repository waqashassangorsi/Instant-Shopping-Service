import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../theme/colors';
import {cancel, person1, Person} from '../../../assets';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const ImagePicker = require('react-native-image-picker');
import MainHeader from '../Products/MainHeader';
import Footer from '../../../components/Footer';
import database from '@react-native-firebase/database';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import ImgToBase64 from 'react-native-image-base64';
import base64 from 'react-native-base64';
import moment from 'moment';
// import EmojiBoard from 'react-native-emoji-board';

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

const ShopperMessenger = (props) => {
  const user = useSelector((state) => state.auth.user);
  const roomKey = '-MlyaqIzairVRteN2K7M';
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();
  const [filePath, setfilePath] = useState();
  const [fileName, setfileName] = useState();
  const [roomexist, setroomexist] = useState('no');
  const [mymsg, setmymsg] = useState('');
  const roomRef = database().ref('rooms');
  const messagesRef = database().ref(`messages/${roomKey}`);
  // const onlineRef = database().ref(`online/${roomKey}`);
  const onlineRef = database().ref(`online/`);
  const statusRef = database().ref(`messages/${roomKey}`);
  const [messages, setMessages] = useState([]);
  const [online, setOnline] = useState([]);
  const [userData, setUserData] = useState(props?.route?.params?.userdata);
  const [otherOnline, setOtherOnline] = useState(false);
  const [otherlastonline, setotherlastonline] = useState();

  const myid = 20;
  const myname = 'waqas';
  const mydp = 'waqasdp';
  const otherid = 30;
  const othername = 'bilal';
  const otherdp = 'otherdp';

  useEffect(() => {
    // console.log('redux user: ', user);

    // console.log('shoppermessenger messagesRef: ', messagesRef);
    // console.log('shoppermessenger messages: ', messages);
    // console.log('shoppermessenger onlineRef: ', onlineRef);
    // console.log('shoppermessenger online: ', online);
    // console.log('shoppermessenger userData: ', userData);

    var filteredUser = online.filter((i) => i._id == userData.id);
    // console.log('shoppermessenger filteredUser: ', filteredUser);

    // console.log(
    //   'shoppermessenger lastonline: ',
    //   moment(filteredUser[0]?.lastonline).format('DD-MM-YYYY hh:mm:ss'),
    // );

    // console.log(
    //   'shoppermessenger lastonline: ',
    //   moment(Date.now()).format('DD-MM-YYYY hh:mm:ss'),
    // );

    timeDifference(Date.now(), filteredUser[0]?.lastonline);

    if (filteredUser[0]?.onlinestatus == 'Online') {
      // console.log(
      //   'shoppermessenger onlinestatus: ',
      //   filteredUser[0]?.onlinestatus,
      // );

      setOtherOnline(true);
    }

    if (filteredUser[0]?.onlinestatus == 'Offline') {
      // console.log(
      //   'shoppermessenger onlinestatus: ',
      //   filteredUser[0]?.onlinestatus,
      // );
      setOtherOnline(false);
    }
  });

  const timeDifference = (EndTime, StartTime) => {
    var resolution;
    resolution = EndTime - StartTime;
    var seconds = (EndTime - StartTime) / 1000;
    console.log('shoppermessenger seconds: ', secondsToHms(seconds));
    setotherlastonline(secondsToHms(seconds));

    // var resolutionTime = resolution / 1000 / 60 / 60;
    // console.log('shoppermessenger resolutionTime: ', resolutionTime);

    // console.log(
    //   'shoppermessenger resolutionTime formatted: ',
    //   moment(resolutionTime).format('hh:mm:ss'),
    // );
  };

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? ' hour, ' : ' hours, ') : '';
    var mDisplay = m > 0 ? m + (m == 1 ? ' minute, ' : ' minutes, ') : '';
    var sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';

    return hDisplay + mDisplay + sDisplay;
  }

  const onPressSend = () => {
    console.log('shoppermessenger onPressSend: ', user, userData);
    addmsg();
  };

  function addmsg() {
    if (mymsg.length > 0) {
      messagesRef.push({
        text: mymsg,
        createdAt: Date.now(),
        hour: parseInt(moment().format('HH')),
        minutes: parseInt(moment().format('mm')),
        status: 'unread',
        // sendid: otherid,
        sendid: user?.user_id,
        sendername: user?.user_nicename,
        recvid: userData?.id,
        recvrname: userData?.name,
        sndrdp: mydp,
        recvrdp: userData?.dp,
      });
      setmymsg('');
    }
  }

  function addmsg64(encodedString, decodedString) {
    console.log('addmsg64 encodedString: ', encodedString);
    console.log('addmsg64 decodedString: ', decodedString);

    messagesRef.push({
      decoded: decodedString,
      text: encodedString,
      b64: true,
      createdAt: Date.now(),
      hour: parseInt(moment().format('HH')),
      minutes: parseInt(moment().format('mm')),
      status: 'unread',
      // sendid: otherid,
      sendid: user?.user_id,
      sendername: user?.user_nicename,
      recvid: userData?.id,
      recvrname: userData?.name,
      sndrdp: mydp,
      recvrdp: userData?.dp,
    });
    setmymsg('');
  }

  useEffect(() => {
    listenForMessages(messagesRef);
    listenForOnline(onlineRef);
  }, []);

  const listenForMessages = (messagesRef) => {
    messagesRef.on('value', (snapshot) => {
      let messagesFB = [];
      snapshot.forEach((child) => {
        messagesFB = [
          ...messagesFB,
          {
            _id: child.key,
            text: child.val().text,
            decoded: child.val().decoded,
            b64: child.val().b64,
            createdAt: child.val().createdAt,
            hour: child.val().hour,
            minutes: child.val().minutes,
            recvid: child.val().recvid,
            sendid: child.val().sendid,
            sendername: child.val().sendername,
            recvrname: child.val().recvrname,
            status: child.val().status,
            sndrdp: child.val().sndrdp,
            recvrdp: child.val().recvrdp,
          },
        ];
      });

      setMessages(messagesFB);
    });
  };

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
    roomRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        console.log('mysnapshots', child.key);
        if (
          (child.val().send_uid == user?.user_id &&
            child.val().recv_uid == userData?.id) ||
          (child.val().send_uid == userData?.id &&
            child.val().recv_uid == user?.user_id)
        ) {
          console.log('record exists');
        } else {
          const roomexist = 'no';
        }
      });
    });
  }, []);

  // if(roomexist=="no"){

  // (async () => {

  //   roomRef.push({
  //     recv_name: othername,
  //     send_name: myname,
  //     send_uid: myid,
  //     recv_uid: otherid,
  //     sender_dp: mydp,
  //     recv_dp: othername,
  //     created_at: 'date',
  //   });

  // })();

  // }

  const renderItem = ({item, index}) => (
    <View>
      {item.sendid == user?.user_id && (
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={{uri: userData?.dp}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              marginLeft: 10,
            }}
          />

          {/* <View
            style={{
              justifyContent: 'center',
              marginLeft: 10,
              backgroundColor: colors.greenColor,
              maxWidth: 200,
              alignSelf: 'center',
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                // textAlign: 'center',
                // marginHorizontal: 8,
              }}>
              {item.b64 ? 'image' : item.text}
            </Text>
          </View> */}

          {item.b64 ? (
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 10,
                backgroundColor: colors.greenColor,
                maxWidth: 200,
                alignSelf: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderWidth: 1,
                    // borderColor: 'red',
                  }}
                  // source={{
                  //   uri:
                  //     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                  // }}
                  source={{uri: `data:image/jpg;base64,${item.text}`}}
                />
                {/* <View style={{backgroundColor: 'pink'}}>
                  <Text>{`data:image/png;base64,${item.text}`}</Text>
                </View> */}
              </View>
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                marginLeft: 10,
                backgroundColor: colors.greenColor,
                maxWidth: 200,
                alignSelf: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                }}>
                {item.text}
              </Text>
            </View>
          )}

          <View
            style={{
              justifyContent: 'center',
              marginTop: 25,
              marginLeft: 5,
              // backgroundColor: 'black',
            }}>
            <Text style={{fontSize: 10}}>{item.hour + ':' + item.minutes}</Text>
          </View>
        </View>
      )}

      {item.recvid == user?.user_id && (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignSelf: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 5,
              alignSelf: 'flex-end',
            }}>
            <Text style={{fontSize: 10}}>{item.hour + ':' + item.minutes}</Text>
          </View>

          {item.b64 ? (
            <View
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                marginLeft: 10,
                backgroundColor: colors.primary,
                // height: 80,
                maxWidth: 200,
                alignSelf: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderWidth: 1,
                    // borderColor: 'red',
                  }}
                  // source={{
                  //   uri:
                  //     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                  // }}
                  source={{uri: `data:image/jpg;base64,${item.text}`}}
                />
                {/* <View style={{backgroundColor: 'pink'}}>
                  <Text>{`data:image/png;base64,${item.text}`}</Text>
                </View> */}
              </View>
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                marginLeft: 10,
                backgroundColor: colors.primary,
                // height: 80,
                maxWidth: 200,
                alignSelf: 'center',
                borderRadius: 5,
                padding: 10,
              }}>
              <Text
                style={{
                  color: colors.greenColor,
                  // marginHorizontal: 8,
                  fontSize: 12,
                  // marginLeft: 10,
                }}>
                {item.text}
              </Text>
            </View>
          )}

          <Image
            source={person1}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              marginLeft: 15,
              alignSelf: 'flex-end',
            }}
          />
        </View>
      )}
    </View>
  );

  const openCamera1 = async (index) => {
    // setLoader(true);

    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // ImagePicker.launchImageLibrary(options, (response) => {
    //   console.log('Response = ', response.assets[0].fileName);
    //   setfilePath(response.assets[0].fileName);

    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //     alert(response.customButton);
    //   } else {
    //     // let source = response.assets[0].fileName;

    //     let data = {
    //       uri: response.assets[0].uri,
    //     };
    //     console.log(`Response`, response);
    //     setfileName(data);
    //   }
    // });

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response.assets[0].fileName);
      setfilePath(response.assets[0].fileName);
      console.log('setfilePath: ', response.assets[0].fileName);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        // let source = response.assets[0].fileName;

        let data = {
          uri: response.assets[0].uri,
        };
        console.log(`Response`, response);
        setfileName(data);
        console.log('setfileName: ', data);

        var encodedString = base64.encode(data.uri);
        // console.log('encodedString: ', encodedString);
        var decodedString = base64.decode(encodedString);
        // console.log('decodedString: ', decodedString);
        // addmsg64(encodedString, decodedString);

        ImgToBase64.getBase64String(data.uri)
          .then((base64String) => {
            console.log('ImgToBase64: ', base64String),
              addmsg64(base64String, decodedString);
          })
          .catch((err) => console.log('ImgToBase64 ERROR: ', err));
      }
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}>
      <MainHeader />
      {/* {fileName ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>This is the image</Text>
          <Image
            style={{
              width: 100,
              height: 50,
              resizeMode: 'contain',
              borderWidth: 1,
              borderColor: 'red',
            }}
            source={{uri: fileName.uri}}
          />
          <Text>This is the image</Text>
        </View>
      ) : null} */}
      <View style={{flex: 1}}>
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
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: colors.WebGLQuery,
                fontSize: 12,
                fontWeight: 'bold',
              }}>
              Messenger
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.greenColor,
            marginTop: 15,
            height: 100,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={person1}
              style={{
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                marginLeft: 15,
              }}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 16, color: 'white'}}>
                {userData?.name}
              </Text>
              <Text style={{color: 'white', fontSize: 10}}>
                {otherOnline ? 'online' : 'last seen' + otherlastonline}
                {/* {'last seen ' + otherlastonline} */}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',

              justifyContent: 'center',
              alignItems: 'center',
              height: 36,
              width: 120,
              marginRight: 15,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 10}}>Update Progress</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 10, height: 600}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.greenColor,
              marginTop: 15,
              width: 100,
              height: 25,
              alignSelf: 'center',
              borderRadius: 3,
            }}>
            <Text style={{color: 'white', fontSize: 10}}>Thursday</Text>
          </View>

          <ScrollView
            // style={{backgroundColor: 'red'}}
            contentContainerStyle={{flexGrow: 1}}
            nestedScrollEnabled={true}>
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>

          <View
            style={{
              backgroundColor: colors.lightWhite,
              height: 45,
              borderColor: colors.WebGLQuery,
              marginTop: 40,
              marginHorizontal: 10,
              borderWidth: 2,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Feather
                    name="smile"
                    size={20}
                    color="#DADADA"
                    style={{marginLeft: 10}}
                  />
                </TouchableOpacity>

                <TextInput
                  placeholder="Write a message"
                  multiline={true}
                  // onChange={onClick(emoji)}
                  onChangeText={(text) => setmymsg(text)}
                  value={mymsg}
                  style={{
                    color: '#DADADA',
                    marginLeft: 15,
                    width: '60%',

                    flexWrap: 'wrap',
                  }}
                />

                {/* <EmojiBoard
              showBoard={show}
              onClick={onClick}
              tabBarPosition={'bottom'}
              onRemove={hideBoard}
            /> */}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: 20,
                }}>
                <Text
                  style={{
                    color: '#DADADA',
                    textAlign: 'center',
                    marginRight: 5,
                  }}>
                  Attach media
                </Text>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    openCamera1(0);
                  }}>
                  <MaterialCommunityIcons
                    name="attachment"
                    size={20}
                    color="#DADADA"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {/* {fileName ? (
              <View>
                <Text>{filePath}</Text>
                <Image
                  source={{uri: fileName.uri}}
                  style={{width: 200, height: 200}}
                />
              </View>
            ) : null} */}
          </View>
          <View
            style={{
              backgroundColor: colors.greenColor,
              height: 36,
              // borderWidth: 2,
              justifyContent: 'center',

              width: 100,
              alignSelf: 'flex-end',
              marginRight: 10,
              borderRadius: 5,
              marginBottom: 30,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{flexDirection: 'row', justifyContent: 'center'}}
                onPress={() => onPressSend()}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 12,
                  }}>
                  Send
                </Text>

                <MaterialIcons
                  name="send"
                  size={15}
                  color="white"
                  style={{
                    marginLeft: 5,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: 20,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: 'purple',
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <Ionicons
                          name="document-sharp"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: 'red',
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <FontAwesome
                          name="camera"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: 'violet',
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <Foundation
                          name="photo"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{marginLeft: -10}}>Document</Text>
                    <Text style={{marginLeft: -10}}>Camera</Text>
                    <Text>Gallery</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: 20,
                    }}>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: `#ff4500`,
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <MaterialIcons
                          name="headset"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: `#1e90ff`,
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <Ionicons
                          name="md-videocam"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        height: 55,
                        width: 55,
                        backgroundColor: `#32cd32`,
                        borderRadius: 55,
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flex: 1,
                        }}>
                        <Ionicons
                          name="location"
                          color="white"
                          size={30}
                          style={{alignSelf: 'center'}}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text>Audio</Text>
                    <Text style={{left: 10}}>Room</Text>
                    <Text style={{left: 5}}>Location</Text>
                  </View>

                  <View
                    style={{
                      height: 55,
                      width: 55,
                      backgroundColor: `#00bfff`,
                      borderRadius: 55,

                      marginTop: 10,
                      marginLeft: 58,
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Ionicons
                        name="person"
                        color="white"
                        size={30}
                        style={{alignSelf: 'center'}}
                      />
                    </View>
                  </View>
                  <View>
                    <Text>Contact</Text>
                  </View>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              // style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              {/* <Text style={styles.textStyle}>Show Modal</Text> */}
            </Pressable>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ShopperMessenger;

// const mapStateToProps = (state) => {
//   // const {userCart, totalPrice} = state.cart;
//   const {user} = state.auth?.user;
//   console.log('redux data: ', state);
//   return {user};
// };
// export default connect(mapStateToProps, {})(ShopperMessenger);

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
    // marginTop:60
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',

    // alignItems: 'center',
    shadowColor: '#000',
    //  marginBottom:60,

    height: 250,
    // alignSelf:'flex-end',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
