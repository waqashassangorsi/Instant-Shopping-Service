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
import EmojiBoard from 'react-native-emoji-board';


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




const renderItem = () => (
  <View>
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Image
        source={person1}
        style={{height: 50, width: 50, borderRadius: 50, marginLeft: 15}}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          backgroundColor: colors.greenColor,
          height: 40,
          width: 70,
          alignSelf: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Hi</Text>
      </View>
      <View style={{justifyContent: 'center', marginTop: 25, marginLeft: 5}}>
        <Text>17:28</Text>
      </View>
    </View>

    <View style={{flexDirection: 'row', marginTop: 10, alignSelf: 'flex-end'}}>
      <View
        style={{
          justifyContent: 'center',
          marginLeft: 5,
          alignSelf: 'flex-end',
        }}>
        <Text>17:28</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          backgroundColor: colors.primary,
          height: 80,
          width: 220,
          alignSelf: 'center',
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: colors.greenColor,
            textAlign: 'center',
            marginHorizontal: 8,
          }}>
          I’ve gotten your list and im on my way to the store now
        </Text>
      </View>
      <Image
        source={person1}
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
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
  const onClick = (emoji) => {
    console.log('emoji', emoji);

    //  setValue(emoji)
  };
  const hideBoard = () => {
    setShow(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 15}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Entypo name="cross" size={28} color={colors.grey} />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontsize: 20, fontWeight: 'bold', color: colors.grey}}>
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
              borderRadius: 50,
              marginLeft: 15,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Chris Rowling
            </Text>
            <Text style={{color: 'white', fontsize: 8}}>
              Last seen 10mins ago
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',

            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            width: 140,
            marginRight: 15,
            borderRadius: 8,
          }}>
          <Text style={{}}>Update Progress</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.greenColor,
          marginTop: 15,
          width: 120,
          height: 28,
          alignSelf: 'center',
          borderRadius: 3,
        }}>
        <Text style={{color: 'white'}}>Thursday</Text>
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
          borderColor: 'green',
          marginTop: 40,
          marginHorizontal: 10,
          borderwidth: 2,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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

            <EmojiBoard
              showBoard={show}
              onClick={onClick}
              tabBarPosition={'bottom'}
              onRemove={hideBoard}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: '#DADADA', textAlign: 'center', marginRight: 5}}>
              Attach media
            </Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <MaterialCommunityIcons
                name="attachment"
                size={20}
                color="#DADADA"
              />
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.greenColor,
          height: 40,
          borderwidth: 2,
          justifyContent: 'center',
          marginTop: 15,
          width: 120,
          alignSelf: 'flex-end',
          marginRight: 10,
          borderRadius: 5,
          marginBottom: 40,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 15}}>
            Send
          </Text>
          <MaterialIcons
            name="send"
            size={20}
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
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
                style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
                <Text>Audio</Text>
                <Text style={{left:10}}>Room</Text>
                <Text style={{left:5}}>Location</Text>
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
