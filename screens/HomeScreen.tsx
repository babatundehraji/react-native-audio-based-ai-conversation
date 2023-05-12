import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../utils/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../components/Button';
import * as Speech from 'expo-speech';
import * as Permissions from 'expo-permissions';
import * as DocumentPicker from 'expo-document-picker';
import * as AudioPicker from 'expo-av';
import axios from 'axios';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {

  const { value } = route.params;
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Request audio permissions on app start
    getPermissions();
  }, []);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') {
      console.log('Audio permissions not granted');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Welcome, ' + value });
  }, [navigation]);

  const handleAudioToText = async () => {
    try {
      // Select an audio file
      const audio = await DocumentPicker.getDocumentAsync({ type: 'audio/*' });

      if (audio.type === 'success') {
        // Convert audio to text using speech-to-text API
        // const speechToText = await Speech.recognizeAsync({
        //   uri: audio.uri,
        // });

        // if (speechToText.text) {
        //   setText(speechToText.text);

        //   // Send the text to Chat GPT API
        //   const response = await axios.post('CHAT_GPT_API_URL', {
        //     text: speechToText.text,
        //   });

        //   if (response.data) {
        //     setResponse(response.data);
        //   }
        // }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Start Recording" onPress={handleAudioToText} />
      <Text>{text}</Text>
      <Text>{response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;