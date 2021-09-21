import React from 'react'
import { View,Image, Text } from 'react-native'

const TopPerformingCategories = () => {
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
            top performing categories
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
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
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
              source={require('../../../assets/gardening.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>

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
              source={require('../../../assets/fashion.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            android_ripple={{color: colors.white, borderless: false}}
            style={{
              flex: 1,
              margin: 1,
              backgroundColor: colors.white,
              borderRadius: 12,
              // width: 100,
              // height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 1,
            }}>
            <Image
              source={require('../../../assets/mensWear.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
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
              source={require('../../../assets/sports.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>
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
              source={require('../../../assets/kitchen.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            android_ripple={{color: colors.white, borderless: false}}
            style={{
              flex: 1,
              margin: 1,
              backgroundColor: colors.white,
              borderRadius: 12,
              // width: 100,
              // height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 1,
            }}>
            <Image
              source={require('../../../assets/gamming.png')}
              style={{
                resizeMode: 'contain',
                width: 110,
                height: 140,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
    );
}

export default TopPerformingCategories
