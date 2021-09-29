import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../../components/Footer';
import colors from '../../../theme/colors';
import MainHeader from '../Products/MainHeader';
import {useNavigation} from '@react-navigation/native';

const CongratulationCart = () => {
  let navigation = useNavigation();

  return (
    <ScrollView>
      <MainHeader />
      <View style={{flex: 1, padding: 10, marginTop: 10}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../../../assets/cartLogo.png')}
            style={{width: 250, height: 200, resizeMode: 'center'}}
          />
          <View style={{width: 200}}>
            <Text style={{fontSize: 18, textAlign: 'center'}}>
              Congratulations. Your order is accepted.
            </Text>
          </View>
          <View style={{padding: 10, width: 300}}>
            <Text
              style={{fontSize: 10, textAlign: 'center', color: colors.gray}}>
              Your order has been added to the list and is currently awaiting to
              be picked up. Kindly wait for your order to be accepted.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OrderPage');
          }}
          style={{
            flex: 1,
            backgroundColor: colors.greenColor,
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: colors.white,
              textTransform: 'capitalize',
            }}>
            Continue shopping
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default CongratulationCart;
