import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aur hhhhhhhhh!</Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // white background
  },
  title: {
    fontSize: 24,
    marginTop: 50,
  },
});
