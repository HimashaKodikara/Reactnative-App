import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'

import { images } from './constants';

const EmptyState = () => {
  return (
    <View style={{justifyContent:'center' ,alignItems:'center', paddingHorizontal:4}}>
      <Image source ={images.empty} style={{width:'100px',height:"50px", resizeMode:'contain'}}/>
      <Text style={{color:'gray'}}>Welcome Back</Text>
                <Text style={{color:'white'}}>JdMastery</Text>
    </View>
  )
}

export default EmptyState