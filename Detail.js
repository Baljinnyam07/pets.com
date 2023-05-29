import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, Text, View, StatusBar as RNStatusBar, ScrollView, TouchableOpacity, Vibration } from 'react-native';
import { LoremIpsum } from 'lorem-ipsum';


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default function Detail() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff", padding:RNStatusBar.currentHeight}}>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}