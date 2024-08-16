import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import { images } from './constants';

const EmptyState = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image source={images.empty} style={styles.image} />
      <Text style={styles.grayText}>{title}</Text>
      <Text style={styles.whiteText}>{subtitle}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    marginBottom: 10, // Add some space below the image
  },
  grayText: {
    color: 'gray',
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
    marginTop:2
  },
});

export default EmptyState;
