import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>  {/* Apply styles.container */}
      <ScrollView>
        <View style={styles.innerContainer}>  {/* Apply styles.innerContainer */}
          <Text style={styles.text}>Profile Page</Text>  {/* Apply styles.text */}
          {/* Add more content here */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',  // Add text color so it is visible on black background
  },
});

export default Profile;
