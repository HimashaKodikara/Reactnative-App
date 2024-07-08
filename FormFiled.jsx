import { View, Text } from 'react-native'
import React from 'react'

const FormFiled = ({title, value, placeholder,handleChangeText,otherStyles,...props}) => {
  return (
    <View style={ ` ${otherStyles}`}>
      <Text style={{color:"gray",}}>{title}</Text>
      <View style={{ borderColor:'red', borderRadius:5, padding:5,backgroundColor:'black',alignItems:'center',height:20, paddingHorizontal:4,width:100}}>
        </View>
    </View>
  )
}

export default FormFiled