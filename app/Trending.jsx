import { View, Text, FlatList,Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { icons } from "../constants";
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
  console.log(activeItem, item.$id)
  return(
    <Animatable.View
     style={{marginRight:5}}
     animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
     duration ={500}
    >
   {
    play ? (
      <Text style={{color:'white'}}>Playing</Text>
    ):(
   <TouchableOpacity
   style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}
   activeOpacity={0.7}
   onPress={() => setPlay(true)}>
  <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            style={styles.ImageBack}
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            style={{ width: 48, 
              height: 48, 
              position: 'absolute',}}
            resizeMode="contain"
          />
   </TouchableOpacity>
    )
   }
    </Animatable.View>
  )
}
const Trending = ({posts}) => {

  const [activeItem,setActiveItem] = useState(posts[1]);
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
const styles = StyleSheet.create({
  ImageBack: {
    width: 208, 
    height: 288, 
    borderRadius: 33, 
    marginVertical: 20, 
    overflow: 'hidden', 
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.4, 
    shadowRadius: 10, 
    elevation: 10, 
  },
});
export default Trending