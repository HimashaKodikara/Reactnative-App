import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import React, { useState } from 'react';

import {icons} from '../constants'
const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showpassword, setShowPassword] = useState(false)
  return (
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder = "Search for a video topic"
          placeholderTextColor="white"
          onChangeText={handleChangeText}
          secureTextEntry ={title === 'Password' && !showpassword }
        />
       <TouchableOpacity>
           
           <Image source={icons.search}style={{width:25,height:25,marginTop:7}}/>
       </TouchableOpacity>
        
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
    color:'white', 
    width: '100%',
    height: 50, 
    paddingHorizontal: 16, 
    backgroundColor: 'gray', 
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

export default SearchInput;
