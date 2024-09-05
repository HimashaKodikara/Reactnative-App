import { View, Text, FlatList, StyleSheet, Image, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../Searchinput';
import EmptyState from '../../EmptyState';
import { getAllPosts, getLatestPosts, SearchPosts } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import VideoCard from '../VideoCard';
import Trending from '../Trending';
import { useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';


// Correct usage of a class
const MyClass = class {
  constructor() {
    this.name = 'MyClass';
  }
};

const Search = () => {
  const { query } = useLocalSearchParams()
  const { data: posts, refetch } =
    useAppwrite(SearchPosts(query));


useEffect(()=>  {
 refetch();
},[query])

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
        data={posts} // Example data
        keyExtractor={(item, index) => index.toString()} // Use index if no unique id is present
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
              <View>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                <Text style={styles.usernameText}>JdMastery</Text>
              </View>
              <View style={{ marginTop: 15 }}>
                <Image source={images.logoSmall} style={{ width: 50, height: 50 }} resizeMode="contain" />
              </View>
            </View>
            <SearchInput />
          
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
         />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'black',
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    height: '100%',
  },
  headerContainer: {
    marginVertical: 6,
    paddingHorizontal: 4,
    marginTop: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
  },
  usernameText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Search;
