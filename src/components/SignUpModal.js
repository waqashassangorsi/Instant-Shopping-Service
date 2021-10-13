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
import {
  loginaction,
  signupaction,
  signupwithfb,
} from '../Redux/Action/Loginaction';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';

import {CommonActions} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Settings, LoginManager, Profile} from 'react-native-fbsdk-next';

// GoogleSignin.configure({
//   webClientId:
//     '269951146954-asg1tqnkv0queriiidj95ciu9ff8b5dt.apps.googleusercontent.com',
// });

const SignUpModal = ({
  navigation,
  loginaction,
  isLoggedIn,
  user,
  modalVisible,
  onChange,
  signupaction,
  signupwithfb,
}) => {
  console.log('modalVisible', modalVisible);
  const [modalVisible1, setModalVisible1] = useState(modalVisible);
  const [userType, setUserType] = useState(1);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [reload, setreload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email1, setEmail1] = useState('');
  const [pass1, setPass1] = useState('');
  const [username, setUsername] = useState('');
  const [cnf, setCnf] = useState('');

  const signInG = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // alert(JSON.stringify(userInfo));
      // console.log(`userInfo`, userInfo);
      const formData = new FormData();

      formData.append('email', userInfo.user.email);

      console.log('myformdata', formData);
      const res = await signupwithfb(formData);

      if (res.data.status == true) {
        setreload(true);
        handleChange(false);
        // await savePass(pass);
        // setLoading(false);
      } else {
        alert(res.data.message);
        // setLoading(false);
      }
      // new Promise((rsl, rej) => {
      //   signupwithfb(formData, rsl, rej);
      // })
      //   .then(async (res) => {
      //     console.log(res);
      //     setLoading(false);
      //     // navigation.dispatch(
      //     //   CommonActions.reset({
      //     //     index: 0,
      //     //     routes: [{name: 'Root'}],
      //     //   }),
      //     // );
      //   })
      //   .catch((err) => {
      //     // setMsg(err);
      //     // setShowAlert(true);
      //     setLoading(false);
      //   });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signInF = () => {
    LoginManager.setLoginBehavior('WEB_ONLY');
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          const currentProfile = Profile.getCurrentProfile().then(function (
            currentProfile,
          ) {
            alert(JSON.stringify(currentProfile));
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '269951146954-asg1tqnkv0queriiidj95ciu9ff8b5dt.apps.googleusercontent.com',
    });
    Settings.initializeSDK();
  }, []);

  const check = async () => {
    if (email == '') {
      alert('kindly enter email');
    } else if (pass == '') {
      alert('kindly enter password ');
    } else {
      // Keyboard.dismiss();
      // setLoading(true);
      const formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', pass);

      console.log('formdata', formdata);

      const res = await loginaction(formdata);

      if (res.data.status == true) {
        setreload(true);
        handleChange(false);
        // await savePass(pass);
        // setLoading(false);
      } else {
        alert(res.data.message);
        // setLoading(false);
      }
    }
  };

  const signUp = async () => {
    if (email1 == '') {
      alert('kindly enter email');
    } else if (pass1 == '') {
      alert('kindly enter password ');
    } else if (cnf == '') {
      alert('kindly enter username');
    } else if (cnf !== pass1) {
      alert('password did not match');
    } else {
      // Keyboard.dismiss();
      // setLoading(true);
      const formdata = new FormData();
      formdata.append('email', email1);
      formdata.append('password', pass1);

      console.log('formdata', formdata);

      const res = await signupaction(formdata);
      console.log('myres', res);

      if (res.data.status == true) {
        // setreload(true);
        // handleChange(false);
        // await savePass(pass);
        // setLoading(false);
      } else {
        // alert(res.data.message);
        // setLoading(false);
      }
    }
  };

  function handleChange(event) {
    onChange('false');
    setModalVisible1(false);
  }

  console.log('app reload');

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
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
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
              onPress={() => handleChange()}>
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
                        userType == 1 ? colors.WebGLQuery : colors.greenColor,

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
                    value={email1}
                    onChangeText={(e) => {
                      setEmail1(e);
                    }}
                  />
                  {/* <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Username"
                    keyboardType="default"
                    value={username}
                    onChangeText={(e) => {
                      setUsername(e);
                    }}
                  /> */}
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Password"
                    keyboardType="visible-password"
                    value={pass1}
                    onChangeText={(e) => {
                      setPass1(e);
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Confirm Password"
                    keyboardType="visible-password"
                    value={cnf}
                    onChangeText={(e) => {
                      setCnf(e);
                    }}
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
                    onPress={() => {
                      signUp();
                    }}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        paddingBottom: 30,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          signInG();
                        }}
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
                        onPress={() => signInF()}
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
                    value={email}
                    onChangeText={(e) => {
                      setEmail(e);
                    }}
                  />
                  <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Password"
                    keyboardType="visible-password"
                    value={pass}
                    onChangeText={(e) => {
                      setPass(e);
                    }}
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
                    onPress={() => {
                      check();
                    }}
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
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        paddingBottom: 30,
                      }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
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

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {
  loginaction,
  signupaction,
  signupwithfb,
})(SignUpModal);
