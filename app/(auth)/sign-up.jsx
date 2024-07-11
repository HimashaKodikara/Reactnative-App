import { View, Text, ScrollView, Image ,Alert} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormFiled from '../../FormFiled';
import CustomButton from '../CustomButton';
import { Link } from 'expo-router';
import { createUser } from '../../lib/appwrite'
const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', "Please fill all the fields")
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username)

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
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 700, paddingHorizontal: 4, marginVertical: 6, marginTop: 70, minHeight: 20 }}>
          <Image source={images.logo} style={{ width: 115, height: 35 }} resizeMode='contain' />
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', marginTop: 25, fontFamily: 'Poppins-SemiBold' }}>Sign Up to Aora</Text>

          <FormFiled
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({
              ...form,
              username: e
            })}
            otherStyles="margin-top:5"
          />
          <FormFiled
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyles="margin-top:5"
            keyboardType='email-address' />
          <FormFiled
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyles="margin-top:5"
          />
          <CustomButton
            title="Sign Up
         "
            handlePress={submit}
            style={{ width: '100%', marginTop: 10 }}
            isLoading={isSubmitting}
          />

          <View style={{
            justifyContent: 'center', paddingTop: 5, flexDirection: 'row',
            gap: 2
          }}>
            <Text style={{ fontSize: 20, color: 'white', marginTop: 10 }}>Have an account already</Text>
            <Link href="/sign-in" style={{ fontSize: 20, color: "yellow", marginTop: 10 }}> Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp