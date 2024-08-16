import { View, Text, FlatList, StyleSheet, Image, RefreshControl } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../Searchinput';
import EmptyState from '../../EmptyState';

// Correct usage of a class
const MyClass = class {
  constructor() {
    this.name = 'MyClass';
  }
};

const Home = () => {
  // Correctly instantiate the class using `new`
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async() =>{
    setRefreshing(true);
    //re call videos. if any new videos appeard
    setRefreshing(false);
  }
  const instance = new MyClass();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FlatList
       data={[{ id: 1 }, { id: 2 }, { id: 3 }]} // Example data
      //  data={[]}
        keyExtractor={(item) => item.id.toString()} // Provide a keyExtractor
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, color: 'white' }} key={item.id}>{item.id}</Text> // Each child should have a unique key
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
            <View style={{width:'100%', flex:1,paddingTop:5,paddingBottom:8}}>
              <Text style={{color:'white',fontSize:20 , marginBottom:3,marginTop:10}}>Latest Videos</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
         <EmptyState
           title="No Videos Found"
           subtitle="Be the first one to upload a video"/>
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'black',
    flex: 1,
    borderWidth: 2, // Set border width
    borderColor: 'red', // Set border color to red
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

export default Home;
