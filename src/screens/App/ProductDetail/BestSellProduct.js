import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import styles from '../Products/styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getallproducts} from '../../../Redux/Action/Loginaction';

const BestSellProduct = ({getallproducts}) => {
  const [productdata, setproductdata] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getallproducts();
      // console.log('fashindata,', res);
      setproductdata(res.data.data);
    })();
  }, []);
  let navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 10}}>
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
          best selling products
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('SingleStore');
          }}
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
          {productdata.map((item) => (
            <View key={item.id}>
              <Pressable
                onPress={() => {
                  navigation.navigate('ProductViewDetail');
                }}
                android_ripple={{
                  color: colors.black,
                  borderLess: false,
                }}
                style={{
                  flex: 1,
                  margin: 2,
                  backgroundColor: colors.white,

                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  elevation: 1,
                }}>
                <Image
                  source={item.img}
                  resizeMode={'cover'}
                  style={{width: 115, height: 115}}
                />
              </Pressable>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.productname}
              </Text>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.productdescription}
              </Text>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                <Entypo name="star" color={colors.HexColor} size={13} />
                {item.rating}
                <Text style={{color: colors.WebGLQuery}}>
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
      <View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: colors.white,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {productdata.map((item) => (
            <View key={item.id}>
              <View
                style={{
                  flex: 1,
                  margin: 2,
                  backgroundColor: colors.white,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: colors.greenColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 1,
                }}>
                <Image
                  source={item.img}
                  style={{resizeMode: 'contain', width: 158, height: 93}}
                />
              </View>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.productname}
              </Text>

              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.productdescription}
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
export default connect(mapStateToProps, {getallproducts})(BestSellProduct);
