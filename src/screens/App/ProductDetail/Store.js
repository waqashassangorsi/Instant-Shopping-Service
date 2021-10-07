import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import styles from '../Products/styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getallbrands} from '../../../Redux/Action/Loginaction';

const STORE = [
  {id: 1, name: 'eBay', img: require('../../../assets/eBay.png')},
  {id: 2, name: 'Puma', img: require('../../../assets/puma.png')},
  {id: 4, name: 'Nike', img: require('../../../assets/nike.png')},
  {id: 5, name: 'Spar', img: require('../../../assets/spar.png')},
  {id: 6, name: 'amazon', img: require('../../../assets/eBay.png')},
  {id: 7, name: 'Shoprite', img: require('../../../assets/eBay.png')},
];

const Store = ({getallbrands}) => {
  const [storedata, setstoredata] = useState([]);
  useEffect(() => {
    // console.log('fashindata,', fashiondata);
    (async () => {
      const res = await getallbrands();
      setstoredata(res.data.data);
    })();
  });
  return (
    <View style={{flex: 1}}>
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
export default connect(mapStateToProps, {getallbrands})(Store);
