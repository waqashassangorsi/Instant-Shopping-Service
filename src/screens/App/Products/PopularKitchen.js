import React from 'react';
import {View, Text, Image, ScrollView,Pressable} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const kitchen = [
  {
    id: 1,
    name: 'frozen veggies',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/frozenVegies.png'),
  },
  {
    id: 2,
    name: 'bag of rice 50kg',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/rice.png'),
  },
  {
    id: 4,
    name: 'palm oil 4ltr',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/palmOil.png'),
  },
  {
    id: 5,
    name: 'Spar',
    star: '4.5(566)',
    price: '$250.99',
    img: require('../../../assets/spar.png'),
  }
];

const PopularKitchen = () => {
  return (
    <View style={{flex:1}}>
      <View style={{marginTop: 10}}>
        <Image
          source={require('../../../assets/pro.jpg')}
          style={{height: 150}}
        />
      </View>
      <View style={{marginTop: 10, padding: 10, backgroundColor: colors.white}}>
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
            {kitchen.map((item) => (
              <View key={item.id} style={{backgroundColor: colors.white}}>
                <View

                  style={{
                    flex: 1,
                    margin: 2,
                    borderRadius: 10,
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
        <View>{/* for add */}</View>
      </View>
    </View>
  );
};

export default PopularKitchen;
