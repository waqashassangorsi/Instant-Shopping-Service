
import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const product1 = [
  {
    id: 1,
    name: 'Blender & Grinder',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/grinder.png'),
  },
  {
    id: 2,
    name: 'beard growth cream',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/beard.png'),
  },
  {
    id: 4,
    name: 'hair dryer',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
  {
    id: 5,
    name: 'hair dryer',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
  {
    id: 6,
    name: 'hair dryer',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/hairDryer.png'),
  },
];
const product2 = [
  {
    id: 1,
    name: 'one more feet',
    title: 'nike | sportwear',
    img: require('../../../assets/product.jpg'),
  },
  {
    id: 2,
    name: 'amazon',
    title: 'nike | sportwear',
    img: require('../../../assets/product.jpg'),
  },
  {
    id: 3,
    name: 'Shoprite',
    title: 'nike | sportwear',
    img: require('../../../assets/eBay.png'),
  },
];

const BestSellProduct = () => {
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
                  elevation: 1,
                }}>
                <Image
                  source={item.img}
                  style={{resizeMode: 'contain', width: 115, height: 115}}
                />
              </View>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.name}
              </Text>
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.star}
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
              <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default BestSellProduct;
