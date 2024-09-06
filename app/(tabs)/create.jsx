import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFiled from '../../FormFiled';

const Create = () => {
  return (
    <SafeAreaView style={{backgroundColor:'black', height:'100%'}}>
      <ScrollView style={{paddingHorizontal:4, marginVertical:6}}>
      <Text style={{fontSize:50, color:'white'}}>creatC</Text>

      <FormFiled/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create