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
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showpassword)}>
            <Image source={!showpassword ? icons.eye : icons.eyeHide}style={{width:25,height:25,marginTop:7}}
         resizeMode='contain'/>
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
    marginTop:30,
    color: "white",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: 'yellow', 
    width: 330,
    height: 50, 
    paddingHorizontal: 16, 
    backgroundColor: 'black', 
    borderRadius: 20, 
    justifyContent: 'center',
    alignContent:'center',
    flexDirection:'row',
    marginTop:5
  },
  input:{
    flex: 1,
    color:'white'
  
  }
});

export default FormFiled;
