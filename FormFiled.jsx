import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';

import {icons} from './constants'
const FormFiled = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showpassword, setShowPassword] = useState(false)
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder = {placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry ={title === 'Password' && !showpassword }
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showpassword)}>
            <Image source={!showpassword ? icons.eye : icons.eyeHide} style={{width:6, height:6,resizeMode:'contain'}}/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    spaceBetween: 16,
  },
  title: {
    marginTop:20,
    color: "white",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#BDBDBD', // Assuming this is the color you want for the border
    width: 300,
    height: 50, // 16 * 4 to convert h-16
    paddingHorizontal: 16, // px-4
    backgroundColor: '#F5F5F5', // Assuming black-100 is a light shade
    borderRadius: 20, // rounded-2xl
    justifyContent: 'center',
  },
  input:{
    flex: 1,
    color:'white'
  
  }
});

export default FormFiled;
