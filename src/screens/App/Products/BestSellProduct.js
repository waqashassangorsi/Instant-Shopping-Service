import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const STORE = [
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

  //   {id: 8, name: 'ebay'},
  //   {id: 9, name: 'amazon'},
  //   {id: 10, name: 'shop by category'},
  //   {id: 11, name: 'ebay'},
  //   {id: 12, name: 'amazon'},
];
const STORE2 = [
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
  }
  
];

const BestSellProduct = () => {
  return (
    <View style={{marginTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: colors.WebGLQuery,
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          //   width: 330,
          //   left: 10,
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 12,
            textTransform: 'capitalize',
          }}>
          best selling products
        </Text>
        <Text
          style={{
            fontSize: 10,
            //   left: 190,
            color: colors.WebGLQuery,
            textTransform: 'uppercase',
          }}>
          See All
        </Text>
      </View>
      <View>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: colors.primary,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {STORE.map((item) => (
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
            backgroundColor: colors.primary,
            marginTop: 10,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {STORE2.map((item) => (
            <View key={item.id}>
              <View
                android_ripple={{color: colors.white, borderless: false}}
                style={{
                  flex: 1,
                  margin: 2,
                  backgroundColor: colors.white,
                  borderRadius: 15,
                  //   width: 100,
                  //   height: 120,
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
