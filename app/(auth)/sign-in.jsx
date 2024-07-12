import { View, Text, ScrollView, Image,Alert } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect,router } from 'expo-router';
import { images } from '../../constants';
import FormFiled from '../../FormFiled';
import CustomButton from '../CustomButton';
import {Link} from 'expo-router';
import {signIn} from '../../lib/appwrite';
const SignIn = () => {

  const [form,setForm] = useState({
    email:"",
    password:"",
  });
  const [isSubmitting,setIsSubmitting] = useState(false)
  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert( "Please fill all the fields")
    }
    setIsSubmitting(true);

    try {
     
      await signIn(form.email, form.password)
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);
      Alert.alert("Success", "User signed in successfully");
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
      
    } finally {
      setIsSubmitting(false)
     
    }

  }
  return (
    <SafeAreaView style={{ backgroundColor: '#000000', height: '100%' }}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 500, paddingHorizontal: 4, marginVertical: 6, marginTop:70,minHeight:20 }}>
          <Image source={images.logo} style={{ width: 115, height: 35 }} resizeMode='contain' />
          <Text style={{fontSize:20, color:'white', fontWeight:'bold', marginTop:25,fontFamily:'Poppins-SemiBold'}}>Log in to Aora</Text>
       
       <FormFiled
       title = "Email"
       value={form.email}
       handleChangeText={(e) => setForm({...form,
        email:e})}
        otherStyles = "margin-top:5"
        keyboardType = 'email-address'/>
         <FormFiled
       title = "Password"
       value={form.password}
       handleChangeText={(e) => setForm({...form,
        password:e})}
        otherStyles = "margin-top:5"
        />
        <CustomButton
         title="Sign In"
         handlePress = {submit}
         style={{width:'100%',marginTop:10}}
         isLoading={isSubmitting}
        />

        <View style={{justifyContent:'center' , paddingTop:5,flexDirection:'row',
          gap:2
        }}>
          <Text style={{fontSize:20, color:'white',marginTop:10}}>Don't have acount?</Text>
          <Link href="/sign-up" style={{fontSize:20, color:"yellow",marginTop:10}}> Sign Up</Link>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn