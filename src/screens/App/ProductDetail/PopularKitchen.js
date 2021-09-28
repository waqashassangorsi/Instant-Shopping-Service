import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from '../Products/styles';


const kitchen = [
  {
    id: 1,
    name: 'frozen veggies',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/frozenVeggies.png'),
  },
  {
    id: 2,
    name: 'bag of rice 50kg',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/rice.png'),
  },
  {
    id: 4,
    name: 'palm oil 4ltr',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/palmOil.png'),
  },
  {
    id: 5,
    name: 'Spar',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/spar.png'),
  },
];

const PopularKitchen = () => {
  return (
    <View style={{flex: 1}}>
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
            {kitchen.map((item) => (
              <View key={item.id} style={{backgroundColor: colors.white}}>
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
                    source={item.img}
                    resizeMode={'cover'}
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
        <View>{/* for add */}</View>
      </View>
    </View>
  );
};

export default PopularKitchen;
