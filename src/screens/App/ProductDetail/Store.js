import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Button,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import colors from '../../../theme/colors';
import styles from '../Products/styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getallbrands, latLong} from '../../../Redux/Action/Loginaction';
import Geolocation from 'react-native-geolocation-service';

import {UIActivityIndicator} from 'react-native-indicators';
import LoaderModal from 'react-native-modal';

const Store = ({getallbrands, latLong}) => {
  const [storedata, setstoredata] = useState([]);
  const [userloc, setuserloc] = useState([]);

  const [loading, setLoading] = useState();
  const [isLoaderModalVisible, setLoaderModalVisible] = useState(false);

  const toggleModal = () => {
    setLoaderModalVisible(!isLoaderModalVisible);
  };

  Geolocation.getCurrentPosition(
    (position) => {
      console.log('myposition', position);
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
    },
  );
  try {
    const granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      alert('You can use the location');
    } else {
      // alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
  // alert('hi');

  useEffect(() => {
    toggleModal();
    setLoading(true);
    // console.log('fashindata,', fashiondata);
    (async () => {
      const res = await getallbrands();
      setstoredata(res.data.data);
      setLoading(false);
      toggleModal();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const formdata = new FormData();
      formdata.append('latitude', 11.41);
      formdata.append('longitude', 123);
      const res = await latLong(formdata);
      console.log(`formdata`, res);
      // setuserloc(res.data.data);
    })();
  }, []);

  return (
    <View style={{flex: 1}}>
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
      <View style={{backgroundColor: 'red'}}>
        <Image
          source={require('../../../assets/pro.jpg')}
          style={{height: 150, width: '100%'}}
        />
      </View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: colors.WebGLQuery,
            borderBottomWidth: 1,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 12,
              textTransform: 'capitalize',
            }}>
            explore stores
          </Text>

          <Pressable
            android_ripple={{
              color: colors.black,
              borderless: false,
            }}>
            <Text
              style={{
                fontSize: 10,
                color: colors.WebGLQuery,
                textTransform: 'uppercase',
              }}>
              See All
            </Text>
          </Pressable>
        </View>
        <View>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: colors.white,
              marginTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {storedata.map((item) => (
              <View key={item.id}>
                <View
                  android_ripple={{color: colors.white, borderless: false}}
                  style={{
                    flex: 1,
                    margin: 2,
                    backgroundColor: colors.white,
                    width: 70,
                    height: 85,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 5,
                  }}>
                  <Image
                    source={{uri: item.image}}
                    resizeMode="cover"
                    style={{
                      width: 115,
                      height: 115,
                    }}
                  />
                </View>
                <Text style={{fontSize: 10}}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getallbrands, latLong})(Store);
