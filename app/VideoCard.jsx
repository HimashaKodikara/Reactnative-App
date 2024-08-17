import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const VideoCard = ({ video: { title, thumbnail, creator: { username, avatar } } }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,
    marginBottom:10,
    marginEnd: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3, // adds shadow for Android
    shadowColor: '#000', // adds shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // adds shadow for iOS
    shadowOpacity: 0.1, // adds shadow for iOS
    shadowRadius: 4, // adds shadow for iOS
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: 8,
    flexShrink: 1, // to allow the text to wrap if too long
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  username: {
    fontSize: 14,
    color: '#777',
  },
});

export default VideoCard;
