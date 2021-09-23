import React from 'react'
import { View, Text,TouchableOpacity,TextInput,Pressable,Image } from 'react-native'
import colors from '../../../theme/colors';

const DeliveryLocationCart = () => {
    return (
      <View style={{flex: 1, margin: 10, backgroundColor: colors.white}}>
        <View style={{flex: 1, flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
          <View>
            <Text style={{fontSize: 12, color: colors.greenColor}}>City</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 10,
                width: 150,
                height: 36,
                borderWidth: 1,
                fontSize: 11,
                borderColor: colors.greenColor,
              }}>
              <Text style={{fontSize: 12, color: colors.greenColor}}>Abuja</Text>
              <Image source={require('../../../assets/dropDown.png')} />
            </TouchableOpacity>
          </View>
          <View
            style={{
             paddingLeft: 20,
            }}>
            <Text style={{fontSize: 12, color: colors.greenColor}}>Location</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 10,
                width: 150,
                height: 36,
                borderWidth: 1,
                fontSize: 11,
                borderColor: colors.greenColor,
              }}>
              <Text style={{fontSize: 12, color: colors.greenColor}}>Wuse</Text>
              <Image source={require('../../../assets/dropDown.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={{fontSize: 12, color: colors.WebGLQuery, marginLeft: 10}}>
            Address
          </Text>
          <TextInput
            style={{
              //   height: 100,
              paddingBottom: 40,
              margin: 10,
              padding: 10,
              borderWidth: 2,
              fontSize: 12,
              borderColor: colors.WebGLQuery,
            }}
            multiline={true}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Enter delivery address"
            keyboardType="numbers-and-punctuation"
          />
        </View>
        <View>
          <Text
            style={{fontSize: 12, color: colors.WebGLQuery, marginLeft: 10}}>
            landmark
          </Text>
          <TextInput
            style={{
              height: 45,
              margin: 10,
              padding: 10,
              borderWidth: 2,
              fontSize: 12,
              borderColor: colors.WebGLQuery,
            }}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Enter a landmark to make delivery easier and faster"
            keyboardType="numbers-and-punctuation"
          />
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: colors.WebGLQuery,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            margin: 10,
          }}>
          <Text style={{fontSize: 12, color: colors.WebGLQuery}}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: colors.greenColor,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 12, color: colors.white}}>Proceed</Text>
        </TouchableOpacity>
      </View>
    );
}

export default DeliveryLocationCart;
