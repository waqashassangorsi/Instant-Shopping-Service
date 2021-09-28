import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../theme/colors';
const {height, width} = Dimensions.get('window');

const SignUpModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userType, setUserType] = useState(1);

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
            <Pressable
              style={{
                marginTop: 10,
                width: 30,
                height: 30,
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: colors.greenColor,
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                source={require('../assets/cancel.png')}
                style={{width: 10, height: 10}}
              />
            </Pressable>
            <View style={{flex: 1, marginTop: 10}}>
              <View>
                <Text style={{fontSize: 8, textTransform: 'uppercase'}}>
                  sign uo to access boundless shopping services
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Pressable
                  onPress={() => setUserType(1)}
                  style={{
                    width: '50%',
                    borderBottomWidth: 1,
                    borderBottomColor:
                      userType == 1 ? colors.greenColor : colors.WebGLQuery,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      textTransform: 'capitalize',
                      color:
                        userType == 1 ? colors.greenColor : colors.WebGLQuery,
                    }}>
                    customer
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setUserType(2)}
                  style={{
                    width: '50%',
                    borderBottomWidth: 1,
                    borderBottomColor:
                      userType == 1 ? colors.WebGLQuery : colors.greenColor,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color:
                        userType == 1 ? colors.WebGLQuery : colors.WebGLQuery,

                      textTransform: 'capitalize',
                    }}>
                    shopper
                  </Text>
                </Pressable>
              </View>
              {userType === 1 ? (
                <View>
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Email"
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Username"
                    keyboardType="default"
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Password"
                    keyboardType="visible-password"
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Confirm Password"
                    keyboardType="visible-password"
                  />
                  <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <AntDesign
                      name="checksquareo"
                      size={12}
                      //   style={{right: 76}}
                      color={colors.greenColor}
                    />
                    <Text
                      style={{
                        fontSize: 8,
                        textTransform: 'none',
                        marginLeft: 5,
                      }}>
                      By signing up, you agree to the Terms and Conditions of
                      the organization on business continuity and conduct.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.greenColor,
                      borderRadius: 5,
                      height: 36,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        textTransform: 'capitalize',
                        color: colors.white,
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                      }}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 10,
                          marginLeft: 2,
                          color: colors.greenColor,
                          textTransform: 'capitalize',
                        }}>
                        Login here
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 20}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 11,
                          textTransform: 'uppercase',
                          color: colors.gray,
                        }}>
                        or sign in via
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10,paddingBottom:30}}>
                      <TouchableOpacity
                        style={{
                          padding: 5,
                          paddingHorizontal: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: colors.red,
                        }}>
                        <Image
                          source={require('../assets/google.png')}
                          style={{width: 19, height: 19}}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            marginLeft: 5,
                            color: colors.red,
                          }}>
                          Google
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: colors.fb,
                          marginLeft: 10,
                        }}>
                        <Image
                          source={require('../assets/Fb.png')}
                          style={{width: 22, height: 22}}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            marginLeft: 5,
                            color: colors.fb,
                          }}>
                          Facebook
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Email"
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Password"
                    keyboardType="visible-password"
                  />
                  <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <AntDesign
                      name="checksquareo"
                      size={12}
                      //   style={{right: 76}}
                      color={colors.greenColor}
                    />
                    <Text
                      style={{
                        fontSize: 8,
                        textTransform: 'none',
                        marginLeft: 5,
                      }}>
                      By signing up, you agree to the Terms and Conditions of
                      the organization on business continuity and conduct.
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.greenColor,
                      borderRadius: 5,
                      height: 36,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        textTransform: 'capitalize',
                        color: colors.white,
                      }}>
                      login
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                      }}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 10,
                          marginLeft: 2,
                          color: colors.greenColor,
                          textTransform: 'capitalize',
                        }}>
                        sign up here
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 20}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 11,
                          textTransform: 'uppercase',
                          color: colors.gray,
                        }}>
                        or sign in via
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10,paddingBottom:30}}>
                      <TouchableOpacity
                        style={{
                          padding: 5,
                          paddingHorizontal: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: colors.red,
                        }}>
                        <Image
                          source={require('../assets/google.png')}
                          style={{width: 19, height: 19}}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            marginLeft: 5,
                            color: colors.red,
                          }}>
                          Google
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: 15,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: colors.fb,
                          marginLeft: 10,
                        }}>
                        <Image
                          source={require('../assets/Fb.png')}
                          style={{width: 22, height: 22}}
                        />
                        <Text
                          style={{
                            fontSize: 11,
                            marginLeft: 5,
                            color: colors.fb,
                          }}>
                          Facebook
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={{backgroundColor: 'white'}}
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:20,
    // right: 0,
    width: width,
    // alignSelf: 'center',
    // bottom: '5%'
  },
  modalView: {
    padding: 10,
    width: '90%',
    // height:500,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
  },
  //     // alignItems: 'center',
  //   shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 10,
  input: {
    // width:250,
    height: 36,
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.WebGLQuery,
    borderRadius: 5,
  },
});

export default SignUpModal;
