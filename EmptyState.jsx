import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

import { images } from './constants';
import CustomButton from './app/CustomButton';

const EmptyState = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Image source={images.empty} style={styles.image} />
      <Text style={styles.whiteText}>{title}</Text>
      <Text style={styles.grayText}>{subtitle}</Text>
      
      <CustomButton
      title="Create video"
      handlePress={()=> router}/>
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
    fontSize:16
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
    marginTop:5,
    fontSize:20
  },
});

export default EmptyState;
