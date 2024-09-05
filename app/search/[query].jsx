import {View,text} from 'react-native';
import react from 'react';

import { useLocalSearchParams  } from 'expo-router';

const Search =() => {
  const {query} = useLocalSearchParams();


  return(
    <View>
      <text style={{color:'white', fontSize:'32px'}}>{query}</text>
    </View>
  )
}