import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';
import {primary, logo, secondary, ternary, forth} from '../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const STORE = [
  {id: 1, name: 'eBay', img: require('../../../assets/eBay.png')},
  {id: 2, name: 'Puma', img: require('../../../assets/puma.png')},
  {id: 4, name: 'Nike', img: require('../../../assets/nike.png')},
  {id: 5, name: 'Spar', img: require('../../../assets/spar.png')},
  {id: 6, name: 'amazon', img: require('../../../assets/eBay.png')},
  {id: 7, name: 'Shoprite', img: require('../../../assets/eBay.png')}
];

const Store = () => {
  return (
    <View>
      <View>
        <Image
          source={require('../../../assets/pro.jpg')}
          style={{height: 150}}
        />
      </View>
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
            explore stores
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
                    elevation: 5,
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
