import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';
import FooterLinks from './FooterLinks';
const {height, width} = Dimensions.get('window');


const Footer = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop:5,
        backgroundColor: colors.WebGLQuery,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 150,
          justifyContent: 'space-between',
        }}>
        <View style={{width: width / 2, paddingLeft: 15, paddingTop: 15}}>
          <Text
            style={{
              color: colors.greenColor,
              fontWeight: 'bold',
              fontSize: 11,
            }}>
            PAGES
          </Text>
          <FooterLinks title="contact us" />
          <FooterLinks title="about us" />
          <FooterLinks title="careers" />
          <FooterLinks title="Our Blog" />
          <FooterLinks title="Forum" />
          <FooterLinks title="careTerms & Conditions" />
          <FooterLinks title="Privacy Policy " />
        </View>
        <View style={{width: width / 2, paddingTop: 15, paddingLeft: 15}}>
          <Text
            style={{
              color: colors.greenColor,
              fontWeight: 'bold',
              fontSize: 11,
            }}>
            HELP DESK
          </Text>
          <FooterLinks title="help center" />
          <FooterLinks title="shopping on psa" />
          <FooterLinks title="report a store" />
          <FooterLinks title="report a product" />
        </View>
      </View>
      <View style={{paddingLeft: 15}}>
        <Text
          style={{
            color: colors.greenColor,
            fontWeight: 'bold',
            fontSize: 12,
            textTransform: 'uppercase',
          }}>
          subscribe to our newsletter
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            style={{
              borderBottomColor: colors.gray,
              borderBottomWidth: 1,
              width: '95%',
            }}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Enter your email here"
            // keyboardType=""
          />
          <MaterialCommunityIcons
            name="email-outline"
            size={15}
            style={{right: 76}}
            color={colors.greenColor}
          />
          <View>
            <Text style={{color: colors.greenColor, right: 70, fontSize: 11}}>
              Subscribe
            </Text>
          </View>
        </View>

        {/* Fb,insta,twter */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              borderRadius: 40 / 2,
              elevation: 1,
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}>
            <Image
              source={require('../assets/twiter.png')}
              style={{
                resizeMode: 'contain',
                width: 24,
                height: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              borderRadius: 40 / 2,
              elevation: 1,
              width: 40,
              height: 40,
              marginHorizontal: width * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}>
            <Image
              source={require('../assets/insta.png')}
              style={{
                resizeMode: 'contain',
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              borderRadius: 40 / 2,
              elevation: 1,
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.white,
            }}>
            <Image
              source={require('../assets/Fb.png')}
              style={{
                resizeMode: 'contain',
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.greenColor,
          height: 40,
          // width: 375,
          marginTop: 13,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            left: 15,
            // width: '52%',
            alignItems: 'center',
            // justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assets/copyRight.png')}
            style={{
              resizeMode: 'contain',
              width: 12,
              height: 12,
            }}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: 11,
              marginLeft:10
            }}>
            CopyRight 2021.All Rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
