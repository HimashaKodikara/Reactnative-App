import { View, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { router, usePathname } from 'expo-router';

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      // Display an alert if the input is empty or only has spaces
      return Alert.alert('Missing Query', 'Please input something to search for results.');
    }

    // If on the search page, update the query parameter
    if (pathname.startsWith('/search')) {
      router.setParams({ query });
    } else {
      // Navigate to the search page with the query
      router.push(`/search/home`);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="white"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Image source={icons.search} style={{ width: 25, height: 25, marginTop: 7 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    width: '100%',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: 'gray',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  input: {
    flex: 1,
    color: 'white',
  },
});

export default SearchInput;
