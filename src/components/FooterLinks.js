import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FooterLinks(props) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  title: {fontSize: 11, textTransform: 'capitalize'},
});
