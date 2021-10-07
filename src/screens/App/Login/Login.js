import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import Forgotpass from '../../../screens/Forgotpass/Forgot';
import {loginaction, savePass} from '../../../Redux/Action/Loginaction';
import styles from './styles';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../theme/colors';
import getStoredState from 'redux-persist/es/getStoredState';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation, loginaction, isLoggedIn, savePass}) => {
  const [email, changeemail] = useState('');
  const [pass, changepass] = useState('');
  const [loading, setLoading] = useState(false);
  const check = async () => {
    if (email == '') {
      alert('kindly enter email');
    } else if (pass == '') {
      alert('kindly enter password ');
    } else {
      Keyboard.dismiss();
      setLoading(true);
      const formdata = new FormData();
      formdata.append('username', email);
      formdata.append('pass', pass);

      const res = await loginaction(formdata);
      if (res.data.status) {
        await savePass(pass);
        setLoading(false);
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Root'}],
          }),
        );
        // navigation.navigate('Root');
      } else {
        alert(res.data.message);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    // isLoggedIn &&
    //   navigation.dispatch(
    //     CommonActions.reset({
    //       index: 1,
    //       routes: [{name: 'Root'}],
    //     }),
    //   );
  }, []);
  return (
    <ImageBackground
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        // alignContent: 'center',
      }}
      source={require('../../../assets/background.png')}>
      <View
        style={{
          height: 320,
          borderRadius: 10,
          backgroundColor: 'white',
          borderColor: '#ddd',
          elevation: 10,
          shadowColor: '#BDBDBD',
          alignSelf: 'center',

          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
          alignItems: 'center',

          width: '85%',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            height: 100,
            borderRadius: 60,
            width: 100,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -60,
            borderWidth: 0.5,
            borderColor: 'grey',
            borderColor: '#ddd',
            elevation: 10,
            shadowColor: '#BDBDBD',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
          }}>
          <Ionicons name="person" size={60} color="grey" style={{}}></Ionicons>
        </View>

        <Text style={styles.login}>Login</Text>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'grey',
            marginTop: 10,
            height: 38,
          }}>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Zocial name="email" size={25} color="grey" style={{}}></Zocial>
          </View>
          <View style={styles.email}>
            <TextInput
              placeholderTextColor="gray"
              style={{
                marginTop: 2,
                fontSize: 12,
                justifyContent: 'center',
              }}
              onChangeText={(text) => changeemail(text)}
              value={email}
              placeholder="Enter Email"></TextInput>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'grey',
            marginTop: 10,
            height: 38,
          }}>
          <View
            style={{
              // backgroundColor: 'red',
              justifyContent: 'center',
              // alignContent: 'center',
            }}>
            <Fontisto
              name="locked"
              size={25}
              color="grey"
              style={{}}></Fontisto>
          </View>
          <View style={styles.email}>
            <TextInput
              placeholderTextColor="gray"
              style={{
                marginTop: 2,
                fontSize: 12,
                justifyContent: 'center',
              }}
              secureTextEntry
              onChangeText={(text) => changepass(text)}
              value={pass}
              placeholder="Enter Password"></TextInput>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,

            width: '80%',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Text
            onPress={() => navigation.navigate('Forgot')}
            style={{color: 'grey'}}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            height: 40,
            width: '60%',
            backgroundColor: colors.primary,
            // backgroundColor: '#11416F',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
            borderRadius: 10,
          }}
          // onPress={() => navigation.navigate('Root')}
          onPress={check}>
          <View style={{}}>
            {loading ? (
              <ActivityIndicator animating size="small" color={'white'} />
            ) : (
              <Text style={{color: 'white'}}>Sign In</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {loginaction, savePass})(Login);
