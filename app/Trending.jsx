import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList data={posts}
    keyExtractor={(item) => item.$id}
    renderItem= {({item})=>
    (<Text style={{color:'white',fontSize:20 , marginBottom:3,marginTop:10}}>{item.id}</Text>)}
    horizontal
    />

    
  )
}

export default Trending