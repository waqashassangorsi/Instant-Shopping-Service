import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';

const STORE = [
  {id: 1, name: 'eBay', img: require('../../../assets/eBay.png')},
  {id: 2, name: 'Puma', img: require('../../../assets/puma.png')},
  {id: 4, name: 'Nike', img: require('../../../assets/nike.png')},
  {id: 5, name: 'Spar', img: require('../../../assets/spar.png')},
  {id: 6, name: 'amazon', img: require('../../../assets/eBay.png')},
  {id: 7, name: 'Shoprite', img: require('../../../assets/eBay.png')},
  //   {id: 8, name: 'ebay'},
  //   {id: 9, name: 'amazon'},
  //   {id: 10, name: 'shop by category'},
  //   {id: 11, name: 'ebay'},
  //   {id: 12, name: 'amazon'},
];

const Store = () => {
  return (
    <View>

      <View style={{marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: colors.WebGLQuery,
            borderBottomWidth: 1,
            justifyContent:'space-between'
            //   width: 330,
            //   left: 10,
          }}>
          <Text style={{fontWeight: '700', fontSize: 12,textTransform:'capitalize'}}>explore stores</Text>
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
                    width: 70,
                    height: 85,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 1,
                  }}>
                  <Image
                    source={item.img}
                    style={{resizeMode: 'contain', width: 50}}
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

export default Store;
