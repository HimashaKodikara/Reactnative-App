import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const VideoCard = ({ video: { title, thumbnail, creator: { username, avatar } } }) => {
  return (
    <View style={styles.cardContainer}>
     
     <View style={styles.outer}>

      <View style={styles.inner}>
           <View style={styles.imagecontainer}>
             <Image style={styles.img} source={{uri:avatar}}/>
           </View>
           <View style={styles.sub}>
           <Text style={styles.tit}
           numberOfLines={1}>{title}</Text>
            <Text
              style={styles.user}
              numberOfLines={1}
            >
              {username}
            </Text>
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
   },
   img:{
    width: '100%',
    height: '100%',
    borderRadius: 8,
   },
   sub:{
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    gap: 4,
   },
   tit:{
    fontWeight: '600',  // psemibold is a semi-bold weight, which is typically 600
    fontSize: 14,       // text-sm corresponds to 14px font size
    color: 'white',
   },
   user:{
    fontSize: 12,
    color: '#f5f5f5', // This is a common color for gray-100. You may need to adjust based on your specific design.
    fontWeight: '400',
   }

});

export default VideoCard;
