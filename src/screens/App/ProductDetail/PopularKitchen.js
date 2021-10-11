import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../Products/styles';
import {connect} from 'react-redux';
import {getallproducts} from '../../../Redux/Action/Loginaction';

const PopularKitchen = ({getallproducts}) => {
  const [productdata, setproductdata] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getallproducts();
      // console.log('fashindata,', res);
      setproductdata(res.data.data);
    })();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10}}>
        <Image
          source={require('../../../assets/pro.jpg')}
          style={{height: 150, width: '100%'}}
        />
      </View>
      <View style={{marginTop: 10, padding: 10, backgroundColor: colors.white}}>
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
            popular in kitchen
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
            {productdata.map((item) => (
              <View style={{backgroundColor: colors.white}}>
                <View
                  style={{
                    flex: 1,
                    margin: 2,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    elevation: 1,
                  }}>
                  <Image
                    source={{uri: item.prduct_image}}
                    resizeMode={'cover'}
                    style={{
                      width: 115,
                      height: 115,
                    }}
                  />
                </View>
                <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                  {item.productname}
                </Text>
                {/* <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                  {item.productdescription}
                </Text> */}
                <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                  <Entypo name="star" color={colors.HexColor} size={13} />
                  {item.stars}
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
        <View>{/* for add */}</View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {user, isLoggedIn} = state.auth;

  return {user, isLoggedIn};
};
export default connect(mapStateToProps, {getallproducts})(PopularKitchen);
