import React, {useState} from 'react';
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
const roomRef = database().ref('rooms');

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

const addRoom = async (item) => {
  alert('p[akistanm');
  let roomsFB = [];
  try {
    await roomRef.push({
      recv_name: 'waqas',
      send_name: 'hasan',
      send_uid: '23',
      recv_uid: '32',
      sender_dp: 'testdp',
      recv_dp: 'recvdp',
      created_at: 'date',
    });

    roomRef.on('value', (snapshot) => {
      let roomsFB = [];
      snapshot.forEach((element) => {
        roomsFB.push({
          recv_name: element.val().recv_name,
          send_name: element.val().send_name,
          key: element.key,
          send_uid: element.val().send_uid,
          recv_uid: element.val().recv_uid,
          created_at: element.val().created_at,
        });
      });

      const res = roomsFB?.some((element) => {
        return 1;
      });

      if (res) {
        const index = roomsFB.find((element) => {
          return 1;
        });
        // navigation.navigate('Conversation', {
        //   roomKey: index.key,
        //   roomName: item.first_name + ' ' + item.last_name,
        //   roomdp: item.dp,
        //   userid: item.id,
        // });
      } else {
        // addRoom(item);
      }
    });
  } catch (err) {
    alert(err);
  }
};

const renderItem = () => (
  <View>
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Image
        source={person1}
        style={{height: 50, width: 50, borderRadius: 50 / 2, marginLeft: 15}}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          backgroundColor: colors.greenColor,
          height: 36,
          width: 62,
          alignSelf: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>Hi</Text>
      </View>
      <View style={{justifyContent: 'center', marginTop: 25, marginLeft: 5}}>
        <Text style={{fontSize: 10}}>17:28</Text>
      </View>
    </View>
    <TouchableOpacity
      onPress={() => {
        addRoom();
      }}>
      <Text>asdfsd</Text>
    </TouchableOpacity>

    <View style={{flexDirection: 'row', marginTop: 10, alignSelf: 'flex-end'}}>
      <View
        style={{
          justifyContent: 'center',
          marginLeft: 5,
          alignSelf: 'flex-end',
        }}>
        <Text style={{fontSize: 10}}>17:28</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          backgroundColor: colors.primary,
          height: 80,
          width: 200,
          alignSelf: 'center',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: colors.greenColor,
            textAlign: 'center',
            marginHorizontal: 8,
            fontSize: 12,
          }}>
          I’ve gotten your list and im on my way to the store now
        </Text>
      </View>
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
  </View>
);

const ShopperMessenger = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState();
  const [filePath, setfilePath] = useState();
  const [fileName, setfileName] = useState();

  const openCamera1 = async (index) => {
    // setLoader(true);

    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response.assets[0].fileName);
      setfilePath(response.assets[0].fileName);

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
      }
    });
  };

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
              <Text style={{fontSize: 16, color: 'white'}}>Chris Rowling</Text>
              <Text style={{color: 'white', fontSize: 10}}>
                Last seen 10mins ago
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
        <View style={{padding: 10}}>
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

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Feather name="smile" size={20} color="#DADADA" />
                </TouchableOpacity>

                <TextInput
                  placeholder="Write a message"
                  // onChange={onClick(emoji)}
                  style={{
                    color: '#DADADA',
                    marginLeft: 20,
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
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
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
            <Text>{filePath}</Text>
          </View>
          <Image source={{uri: fileName}} style={{width: 200, height: 200}} />
          <View
            style={{
              backgroundColor: colors.greenColor,
              height: 36,
              // borderWidth: 2,
              justifyContent: 'center',
              marginTop: 15,
              width: 100,
              alignSelf: 'flex-end',
              marginRight: 10,
              borderRadius: 5,
              marginBottom: 40,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>
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
