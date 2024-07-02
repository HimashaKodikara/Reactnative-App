import React from 'react';
import {  Text,Image, View, StyleSheet,ScrollView } from 'react-native';
import { Redirect,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from './CustomButton';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
   <SafeAreaView style={styles.safearea}>
  <ScrollView contentContainerStyle={{height:'100%'}}>
     <View style={styles.view}>
      <Image
         source={images.logo}
         style={{width:130,height:84}}
         resizeMode='contain'
      />
      <Image
        source={images.cards}
        style={{width:380,height:300}}
        resizeMode='contain'
      />
      <View style={{marginTop:5 , position:'relative'}}>
       <Text style={{fontSize:30, color:'white',fontWeight:'bold', textAlign:'center'}}>Discover Endless Possibilities with{ ' '}
        <Text style={{color:'#ffd700'}}>Aora </Text>
       </Text>
       <Image
        source={images.path}
        style={{width:90,height:15, position:'absolute', bottom:-10,right:-8}}
       />
     
      </View>
      <Text style={{fontSize:15, fontFamily:'Poppins-Regular',color:"gray", marginTop:50 , textAlign:'center'}}>Where creativity meets innovations:embark on a journey of limitless exporation with Aora</Text>
     <CustomButton
     title="Continue with Email"
     handlePress={()=>router.push('/Sign-in')}
     containerStyles="w-full mt-7"
     />
     </View>
  </ScrollView>
  <StatusBar backgroundColor='#161622'
  style='light'/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea:{
    
   backgroundColor: '#000000'
  },
  view:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    padding:4
  }
});
