import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FormFiled = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {/* You might want to include a TextInput component here */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Styles for the container
  },
  title: {
    color: "gray",
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#BDBDBD', // Assuming this is the color you want for the border
    width: '100%',
    height: 64, // 16 * 4 to convert h-16
    paddingHorizontal: 16, // px-4
    backgroundColor: '#F5F5F5', // Assuming black-100 is a light shade
    borderRadius: 20, // rounded-2xl
    justifyContent: 'center',
  },
});

export default FormFiled;
