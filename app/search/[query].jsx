import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const {query} = useLocalSearchParams();
  return (
    <SafeAreaView style={{backgroundColor:'black', height:'100%'}}>
      <Text style={{color:'white',fontSize:35}}>{query}</Text>
    </SafeAreaView>
  )
}

export default Search