import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const STORE = [
  {
    id: 1,
    name: 'Gucci Shirt',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
  {
    id: 2,
    name: 'Mini dress',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/miniDress.png'),
  },
  {
    id: 4,
    name: 'denim trousers',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/denimTrousers.png'),
  },
  {
    id: 5,
    name: 'Spar',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/spar.png'),
  },
 
  //   {id: 8, name: 'ebay'},
  //   {id: 9, name: 'amazon'},
  //   {id: 10, name: 'shop by category'},
  //   {id: 11, name: 'ebay'},
  //   {id: 12, name: 'amazon'},
];

const PopularFashion = () => {
  return (
    <View>
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
            popular in fashion
          </Text>
          <Text
            style={{
              fontSize: 10,
              //   left: 220,
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
                    borderRadius: 12,
                    // width: 100,
                    // height: 120,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 1,
                  }}>
                  <Image
                    source={item.img}
                    style={{
                      resizeMode: 'contain',
                      width: 115,
                      height: 115,
                      borderRadius: 10,
                    }}
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
      </View>
    </View>
  );
};

export default PopularFashion;
