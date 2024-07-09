import { View, Text, ScrollView, Image } from 'react-native';
import React,{useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormFiled from '../../FormFiled';
import CustomButton from '../CustomButton';
const SignIn = () => {

  const [form,setForm] = useState({
    email:'',
    password:''
  })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const submit = () => {
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#000000', height: '100%' }}>
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 500, paddingHorizontal: 4, marginVertical: 6, marginTop:70 }}>
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
         style={{width:'100%'}}
         isLoading={isSubmitting}
        />

        <View style={{justifyContent:'center' , paddingTop:5,flexDirection:'row',
          gap:2
        }}>
          <Text style={{fontSize:20, color:'white'}}>Don't have acount?</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn