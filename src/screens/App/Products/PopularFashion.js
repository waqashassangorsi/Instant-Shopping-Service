import React from 'react';
import {View, Text, Image, ScrollView,Pressable} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const fashion = [
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
  }
];

const PopularFashion = () => {
  return (
    <View style={{marginTop: 10, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: colors.WebGLQuery,
          borderBottomWidth: 1,
          justifyContent: 'space-between'
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
          {fashion.map((item) => (
            <View key={item.id} style={{backgroundColor: colors.white}}>
              <View

                style={{
                  flex: 1,
                  margin: 2,
                  borderRadius: 12,
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
  );
};

export default PopularFashion;
