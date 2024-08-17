import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const VideoCard = ({video:{title,thumbnail,video,
    creator:{username,avtar}
}}) => {
  return (
    <View style={styles.container}>
        
      <Text style={styles.tit}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flexDirection:'column',
   alignItems:'center',
   paddingVertical:4,
   marginBottom:30,
   
  },
  tit:{
    color:'white',
    fontSize:20
  }
});
export default VideoCard
