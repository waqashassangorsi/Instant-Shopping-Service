
import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../../theme/colors';
import styles from '../Products/styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const product1 = [
  {
    id: 1,
    name: 'Blender & Grinder',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/grinder.png'),
  },
  {
    id: 2,
    name: 'beard growth cream',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/beard.png'),
  },
  {
    id: 4,
    name: 'hair dryer',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
  {
    id: 5,
    name: 'hair dryer',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
  {
    id: 6,
    name: 'hair dryer',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
];
const product2 = [
  {
    id: 1,
    name: 'one more feet',
    title: 'nike',
    subTitle: '| sportwear',
    img: require('../../../assets/product.jpg'),
  },
  {
    id: 2,
    name: 'amazon',
    title: 'nike',
    subTitle: '| sportwear',
    img: require('../../../assets/product.jpg'),
  },
  {
    id: 3,
    name: 'Shoprite',
    title: 'nike',
    subTitle: '| sportwear',
    img: require('../../../assets/eBay.png'),
  },
];

const BestSellProduct = () => {
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
      <Pressable 
       onPress = {() => {navigation.navigate('ProductViewDetail');}}
      >
        <ScrollView
          contentContainerStyle={{
            backgroundColor: colors.white,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {product1.map((item) => (
            <View key={item.id}>
              <View
                android_ripple={{color: colors.white, borderless: false}}
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
      </Pressable>
      <View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: colors.white,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {product2.map((item) => (
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
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  textTransform: 'capitalize',
                  color: colors.HexColor,
                }}>
                {item.title}
                <Text style={{fontSize: 10, color: colors.WebGLQuery}}>
                  {' '}
                  {item.subTitle}
                </Text>
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BestSellProduct;
