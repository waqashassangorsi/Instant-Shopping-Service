import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import Store from './Store';
import BestSellProduct from './BestSellProduct';
import PopularFashion from './PopularFashion';
import PopularKitchen from './PopularKitchen';
import Footer from '../../../components/Footer';
import TopPerformingCategories from './TopPerformingCategories';
import {colors} from 'react-native-elements';

const ProductsDetails = () => {
  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Store />
        <BestSellProduct />
        <PopularFashion />
        <PopularKitchen />
        <TopPerformingCategories />
      </ScrollView>
    </View>
  );
};

export default ProductsDetails;
