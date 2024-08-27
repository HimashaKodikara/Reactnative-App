import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({ video: { title, thumbnail,video, creator: { username, avatar }, uri } }) => {
  const [play, setPlay] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <View style={styles.imageContainer}>
            <Image style={styles.img} source={{ uri: avatar }} />
          </View>
          <View style={styles.sub}>
            <Text style={styles.tit} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.user} numberOfLines={1}>
              {username}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 5 }}>
          <Image source={icons.menu} style={{ width: 20, height: 20 }} resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Video
          source={{ uri:video }}
          style={styles.videoContainer}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity style={styles.touch} activeOpacity={0.7} onPress={() => setPlay(true)}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} resizeMode="cover" />
          <Image
            source={icons.play}
            style={{ width: 48, height: 48, position: 'absolute' }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 56,
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  outer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 3,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 46,
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'your_secondary_color',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  sub: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
    gap: 4,
  },
  tit: {
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
  user: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: '400',
  },
  thumbnail: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginTop: 12,
  },
  touch: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    marginTop: 12,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  videoContainer: {
    width: '100%',
    height: 288,
    borderRadius: 33,
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default VideoCard;
