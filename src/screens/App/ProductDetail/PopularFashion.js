import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../Products/styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import {connect} from 'react-redux';
import {getallbrands} from '../../../Redux/Action/Loginaction';
import {UIActivityIndicator} from 'react-native-indicators';
import LoaderModal from 'react-native-modal';

const PopularFashion = ({getallbrands}) => {
  const [fashiondata, setfashiondata] = useState([]);
  const [loading, setLoading] = useState();
  const [isLoaderModalVisible, setLoaderModalVisible] = useState(false);

  const toggleModal = () => {
    setLoaderModalVisible(!isLoaderModalVisible);
  };

  useEffect(() => {
    toggleModal();
    setLoading(true);
    // console.log('fashindata,', fashiondata);
    (async () => {
      const res = await getallbrands();
      setfashiondata(res.data.data);
      setLoading(false);
      toggleModal();
    })();
  }, []);

  return (
    <View style={{flex: 1, padding: 10}}>
      {/* {loading ? (
        <LoaderModal
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          isVisible={isLoaderModalVisible}>
          <View
            style={{
              position: 'absolute',
              padding: 20,
              borderRadius: 50,
              // backgroundColor: 'black',
            }}>
            <UIActivityIndicator color="white" />
          </View>
        </LoaderModal>
      ) : null} */}
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
          popular in fashion
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
            backgroundColor: colors.primary,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {fashiondata.map((item) => (
            <View key={item.id} style={{backgroundColor: colors.white}}>
              <View
                style={{
                  flex: 1,
                  margin: 2,
                  borderRadius: 10,
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 1,
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
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                <Entypo name="star" color={colors.HexColor} size={13} />
                {item.rating}
                <Text style={{color: colors.WebGLQuery}}>
                  {' '}
                  ({item.totalUser ? item.totalUser : 0})
                </Text>
              </Text>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.price}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getallbrands})(PopularFashion);
