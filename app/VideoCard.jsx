import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const VideoCard = ({ video: { title, thumbnail, creator: { username, avatar } } }) => {
  return (
    <View style={styles.cardContainer}>
     
     
          <Text style={styles.title}>{title}</Text>
          
    </View>
  );
};

const styles = StyleSheet.create({
   cardContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 56,
   },
   title:{
    color:'white',
   
   }

});

export default VideoCard;
