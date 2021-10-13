import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../../../theme/colors';
// import {primaryColor} from './colors';
// import colors from '../theme/colors';
export const Loading = ({visible}) => (
  <View
    style={{
      width: '100%',
      height: '100%',
    }}>
    <ActivityIndicator
      animating
      color={colors.greenColor}
      style={visible ? loader.centering : loader.hideIndicator}
      size="large"
    />
  </View>
);
const loader = StyleSheet.create({
  centering: {
    flex: 1,
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    //bottom: 0,
    // zIndex: 10,
    backgroundColor: '#F5F5F5',
    opacity: 0.8,
  },
  hideIndicator: {
    position: 'absolute',
    top: -100,
    opacity: 0,
  },
});
