import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFiled from '../../FormFiled';
import {Video, ResizeMode} from 'expo-av';

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({

    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })
  return (
    <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
      <ScrollView style={{ paddingHorizontal: 10, marginVertical: 10 }}>
        <Text style={{ fontSize: 30, color: 'white' }}>Upload Video</Text>

        <FormFiled
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catch title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          style={{ margintop: 5 }}
        />
        <View style={{ marginTop: 7, marginBottom: 2 }}>
          <Text style={{ color: 'white' }}>Upload Video</Text>
          <TouchableOpacity>
            {form.video ? (
              <Video/>
            ):(
              <View style={{widht:'100%', height:'40px',paddingVertical:'4px',
                backgroundColor:'black', rounded:'2xl' ,justifyContent:'center',
                alignItems:'center' 
              }}>
           <View>
            
           </View>
              </View>
            ) }
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create