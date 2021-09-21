import React from 'react'
import {View,ScrollView,Image} from 'react-native';
import Store from './Store';
import BestSellProduct from './BestSellProduct'
import PopularFashion from './PopularFashion';
import PopularKitchen from './PopularKitchen';
import Footer from '../../../components/Footer';

const ProductsDetails = () => {
    return (
      <View style={{padding: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require('../../../assets/pro.jpg')}
              style={{height: 150}}
            />
          </View>
          <Store />
          <BestSellProduct />
          <PopularFashion />
          <PopularKitchen />
         
        </ScrollView>
      </View>
    );
}

export default ProductsDetails
