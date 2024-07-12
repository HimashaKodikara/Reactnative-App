import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../Searchinput';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 0 }}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, color: 'white' }}>{item.id}</Text>
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
            <SearchInput/>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Home;
