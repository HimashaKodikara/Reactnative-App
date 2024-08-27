import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';

const zoomIn = {
  0:{
    scale:0.9
  },
  1:{
    scale:1,
  }
}

const zoomOut = {
  0:{
    scale:1
  },
  1:{
    scale:0.9,
  }
}
const TrendingItem = ({activeItem,item}) =>{

  const [play,setPlay] = useState(false);
  return(
    <Animatable.View
     style={{marginRight:5}}
     animation={activeItem === item.$id ? zoomIn : zoomOut

     }
    >

    </Animatable.View>
  )
}
const Trending = ({posts}) => {

  const [activeItem,setActiveItem] = useState(posts[0]);
  return (
    <FlatList data={posts}
    keyExtractor={(item) => item.$id}
    renderItem= {({item})=>
    (
 <TrendingItem activeItem={activeItem} item={item}/>
    )}
    horizontal
    />

    
  )
}

export default Trending