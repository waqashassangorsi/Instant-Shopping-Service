import React from 'react'
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../../theme/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PopularFashion from './PopularFashion';
import Footer from '../../../components/Footer';
import MainHeader from '../Products/MainHeader';
const sameShirt = [
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
    name: 'Gucci Shirt',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
  {
    id: 3,
    name: 'Gucci Shirt',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
  {
    id: 4,
    name: 'Gucci Shirt',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
  {
    id: 5,
    name: 'Gucci Shirt',
    rating: '4.5',
    totalUser: '566',
    price: '$250.99',
    img: require('../../../assets/gucciShirt.png'),
  },
];
const Similar_Product = [
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

const ProductViewDetail = () => {
    return (
      <ScrollView>
        <MainHeader />
        <View style={{flex: 1, padding: 20}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/profileShirt.png')}
              resizeMode={'contain'}
              style={{width: '100%', height: 300}}
            />
            <Image
              source={require('../../../assets/qrCode.png')}
              resizeMode={'contain'}
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                alignSelf: 'flex-end',
                right: 20,
              }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                position: 'absolute',
                top: 10,
                left: 20,
              }}>
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 46 / 2,
                  backgroundColor: colors.greenColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    // textAlign: 'center',
                    textTransform: 'uppercase',
                  }}>
                  new
                </Text>
              </View>
              <View
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 46 / 2,
                  backgroundColor: colors.white,
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: 190,
                }}>
                <Fontisto name="search" size={20} color={colors.black} />
              </View>
            </View>
            <View>
              <Text style={{fontSize: 20, textTransform: 'capitalize'}}>
                denim jacket
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Entypo name="star" color={colors.HexColor} size={13} />
              <Entypo name="star" color={colors.HexColor} size={13} />
              <Entypo name="star" color={colors.HexColor} size={13} />
              <Entypo name="star" color={colors.HexColor} size={13} />
              <Entypo name="star" color={colors.HexColor} size={13} />
              <Text style={{color: colors.black, fontSize: 12}}>
                (565 Reviews)
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10, marginTop: 5}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: colors.WebGLQuery,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 24, color: colors.greenColor}}>
                  $250.99
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.WebGLQuery,
                    marginLeft: 10,
                  }}>
                  $250.99
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderColor: colors.greenColor,
                    borderWidth: 1,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/heartLike.png')}
                    style={{width: 15, height: 15}}
                  />
                </View>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    backgroundColor: colors.greenColor,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 5,
                  }}>
                  <MaterialIcons
                    name="signal-cellular-alt"
                    size={20}
                    color={colors.white}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                // flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    marginRight: 10,
                  }}>
                  qty:
                </Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 20, color: colors.gray}}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    elevation: 1,
                    borderWidth: 1,
                    borderColor: colors.WebGLQuery,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                  }}>
                  <Text style={{fontSize: 15}}>5</Text>
                </View>
                <TouchableOpacity>
                  <Text style={{fontSize: 20, color: colors.gray}}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 50,
                  paddingVertical: 8,
                  backgroundColor: colors.greenColor,
                }}>
                <Ionicons
                  name="basket-outline"
                  size={15}
                  color={colors.white}
                />
                <Text
                  style={{fontSize: 12, color: colors.white, marginLeft: 10}}>
                  add to cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal:10}}>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: colors.primary,
              marginTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {sameShirt.map((item) => (
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
                      width: 100,
                      height: 100,
                    }}
                  />
                </View>
                {/* <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
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
              </Text> */}
              </View>
            ))}
          </ScrollView>
        </View>
        <PopularFashion />
        <Footer />
      </ScrollView>
    );
}

export default ProductViewDetail