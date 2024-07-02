import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: '#daa520',
          borderRadius: 15,
          minHeight: 62,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: isLoading ? 0.5 : 1,
          padding:10,
          paddingLeft:50,
          paddingRight:50,
          marginTop:20
        },
        containerStyles,
        isLoading ? 'opacity-50' : '',
      ]}
      disabled={isLoading}
    >
      <Text style={[{ color: 'black', fontSize: 20, fontFamily: 'Poppins-SemiBold' }, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
