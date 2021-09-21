import React from 'react'
import { View,Image, Text,Pressable } from 'react-native'
import colors from '../../../theme/colors';
const TopPerformingCategories = () => {
    return (
      <View
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: colors.WebGLQuery,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: colors.WebGLQuery,
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 12,
              textTransform: 'capitalize',
            }}>
            top performing categories
          </Text>
          <Pressable
            android_ripple={{
              color: colors.black,
              borderless: false,
            }}>
            <Text
              style={{
                fontSize: 10,
                color: colors.gray,
                textTransform: 'uppercase',
              }}>
              See All
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flex: 1,
              margin: 2,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              gardening
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              margin: 2,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              fashion
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              margin: 1,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              mens wears
            </Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <View
            style={{
              flex: 1,
              margin: 2,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              sports
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              margin: 2,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              kitchen
            </Text>
          </View>
          <View
            android_ripple={{color: colors.white, borderless: false}}
            style={{
              flex: 1,
              margin: 1,
              backgroundColor: colors.WebGLQuery,
              borderRadius: 12,
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
            <Text style={{fontSize: 10, textTransform: 'capitalize'}}>
              gamming
            </Text>
          </View>
        </View>
      </View>
    );
}

export default TopPerformingCategories
