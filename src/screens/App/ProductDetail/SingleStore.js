import React from 'react'
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../../theme/colors';
import PopularFashion from './PopularFashion';
import Entypo from 'react-native-vector-icons/Entypo';
import BestSellProduct from './BestSellProduct';

const fashion = [
  {
    id: 1,
    name: 'Gucci Shirt',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
  {
    id: 2,
    name: 'Mini dress',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/miniDress.png'),
  },
  {
    id: 4,
    name: 'denim trousers',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/denimTrousers.png'),
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

const SingleStore = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{marginBottom: -50}}>
          <Image
            source={require('../../../assets/SingleStore.png')}
            resizeMode={'cover'}
            style={{width: '100%', height: 130}}
          />
        </View>
        <View
          style={{
            width: 90,
            height: 90,
            borderRadius: 90 / 2,
            backgroundColor: colors.black,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Image
            source={require('../../../assets/nikeStore.png')}
            style={{width: 71, height: 41}}
          />
        </View>

        <PopularFashion />
        <View style={{paddingHorizontal: 10}}>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: colors.primary,
              //   marginTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {fashion.map((item) => (
              <View key={item.id} style={{backgroundColor: colors.white}}>
                <View
                  style={{
                    flex: 1,
                    margin: 2,
                    borderRadius: 10,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 1,
                  }}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
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
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            margin: 10,
          }}>
          <View style={{flexDirection:'row',alignSelf:'flex-end',justifyContent:'center'}}>
            <View>
              <Image
                source={require('../../../assets/dot.png')}
                resizeMode={'center'}
              />
              <Text
                style={{
                  fontSize: 16,
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                }}>
                Just deliver it.
              </Text>
              <Image source={require('../../../assets/halfDot.png')} resizeMode={'contain'} style={{width:50,height:28,top:11}} />
            </View>
            <View>
              <Image
                source={require('../../../assets/adds.png')}
                resizeMode={'contain'}
                style={{width: 200, height: 80}}
              />
            </View>
          </View>
        </View>
        <BestSellProduct />
      </View>
    );
}

export default SingleStore
