import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    style={{backgroundColor:'#ffd700',borderRadius:15, minHeight: 62, justifyContent:"center", alignItems:'center'}}>
      <Text style={{color:"black",fontSize:20,fontFamily:'Poppins-SemiBold'}}>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton