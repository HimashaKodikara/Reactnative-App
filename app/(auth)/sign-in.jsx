import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
const SignIn = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#000000', height: '100%' }}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%', paddingHorizontal: 4, marginVertical: 6 }}>
          <Image source={images.logo} style={{ width: 115, height: 35 }} resizeMode='contain' />
          <Text style={{fontSize:20, color:'white', fontWeight:'bold', marginTop:20,fontFamily:'Poppins-SemiBold'}}>Log in to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn