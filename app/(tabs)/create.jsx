import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFiled from '../../FormFiled';
import { Video, ResizeMode } from 'expo-av';
import { icons } from '../../constants';

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
              <Video 
              source={{uri: form.video.uri}}
              style={{width:'100%',height:'64px', borderRadius:'16',}}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping/>
            ) : (
              <View style={{
                width: '100%', // Equivalent to Tailwind's w-full
                height: 160, // Equivalent to Tailwind's h-40 (40 * 4 = 160px)
                paddingHorizontal: 16, // Equivalent to Tailwind's px-4 (4 * 4 = 16px)
                backgroundColor: '#1F2937', // Equivalent to Tailwind's bg-black-100 (use actual color code)
                borderRadius: 16, // Equivalent to Tailwind's rounded-2xl (2xl usually means 16px)
                borderWidth: 1, // Equivalent to Tailwind's border
                borderColor: '#D1D5DB', // Equivalent to Tailwind's border-black-200 (use actual color code)
                justifyContent: 'center', // Equivalent to Tailwind's justify-center
                alignItems: 'center',
              }}>
                <View style={{
                  width: 56,
                  height: 56,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: '#d1d5db',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Image source={icons.upload}
                    resizeMode='contain'
                    style={{
                      width: '50%',
                      height: '50%',
                    }} />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create