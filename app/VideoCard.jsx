import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const VideoCard = ({ video: { title, thumbnail, creator: { username, avatar } } }) => {
  return (
    <View style={styles.cardContainer}>
     
     <View style={styles.outer}>

      <View style={styles.inner}>
           <View style={styles.imagecontainer}>
             
           </View>
      </View>
     </View>
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
   fontSize:25
   },
   outer:{
    flexDirection: 'row',   // flex-row
    alignItems: 'flex-start',
    gap:3
   },
   inner:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   },
   imagecontainer:{
    width: 46,
    height: 46,
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: 'your_secondary_color', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
   }

});

export default VideoCard;
