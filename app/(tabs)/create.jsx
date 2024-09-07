import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormFiled from '../../FormFiled';
import { Video, ResizeMode } from 'expo-av';
import { icons } from '../../constants';
import CustomeButton from '../CustomButton';
import * as DocumentPicker from 'expo-document-picker';

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  });

  const openPicker =async(selectType) =>{
    const result = await DocumentPicker.getDocumentAsync 
    ({
      type: selectType === 'image'
      ? ['image/png','image/jpg']
      : ['vidoe/mp4','video/gif']
    })

    if(!result.canceled){
      if(selectType === 'image'){
        setForm({...form, thumbnail:result.assets[0]})
      }
      if(selectType === 'video'){
        setForm({...form, video:result.assets[0]})
      }
    }else {
      setTimeout(() => {
        Alert.alert("Document picked", JSON.stringify(result, null, 2));
      }, 100);
      
    }
  }
  const submit = () => {
    // Handle form submission logic
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }}>
      <ScrollView style={{ paddingHorizontal: 10, marginVertical: 10 }}>
        <Text style={{ fontSize: 30, color: 'white' }}>Upload Video</Text>

        <FormFiled
          title="Video Title"
          value={form.title}
          placeholder="Give your video a catchy title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          style={{ marginTop: 5 }} // Corrected the marginTop property
        />
        <View style={{ marginTop: 7, marginBottom: 2 }}>
          <Text style={{ color: 'white', marginTop: 20 }}>Upload Video</Text>
          <TouchableOpacity onPress={()=> openPicker
            ('video')
          }
          >
            {form.video ? (
              <Video 
                source={{ uri: form.video.uri }}
                style={{ width: '100%', height: 64, borderRadius: 16 }}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View style={{
                width: '100%',
                height: 160,
                paddingHorizontal: 16,
                backgroundColor: '#1F2937',
                borderRadius: 16,
                borderWidth: 1,
                borderColor: '#D1D5DB',
                justifyContent: 'center',
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

          <View style={{ marginTop: 7, marginBottom: 5 }}>
            <Text style={{ color: 'white', marginTop: 20 }}>Thumbnail Image</Text>
            <TouchableOpacity
            onPress={()=> openPicker
              ('image')
            }>
              {form.thumbnail ? (
                <Image
                  source={{ uri: form.thumbnail.uri }}
                  resizeMode='cover'
                  style={{
                    width: '100%',
                    height: 256,
                    borderRadius: 16,
                    backgroundColor: '#ccc'
                  }}
                />
              ) : (
                <View style={{
                  width: '100%',
                  height: 64,
                  paddingHorizontal: 16,
                  backgroundColor: '#1F2937',
                  borderRadius: 16,
                  borderWidth: 2,
                  borderColor: '#d1d5db',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Image source={icons.upload}
                    resizeMode='contain'
                    style={{
                      width: '50%',
                      height: '50%',
                    }} />
                  <Text style={{ color: 'white', marginLeft: -60 }}>Choose a file</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          <FormFiled
            title="AI Prompt"
            value={form.prompt}
            placeholder="The prompt you used to create this video ..."
            handleChangeText={(e) => setForm({ ...form, prompt: e })}
            style={{ marginTop: 5 }} // Corrected the marginTop property
          />

          <CustomeButton
            title="Submit & Publish"
            handlePress={submit}
            style={{ marginTop: 20 }}
            containerStyles={{ marginTop: 14 }}
            isLoading={uploading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create;
