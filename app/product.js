import {View,Text, ScrollView, Image, TouchableOpacity, Vibration} from "react-native"
import { Stack, useRouter } from "expo-router";
import { Link } from "expo-router";
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

export default function Product(){
    const router = useRouter()
    return (
      <>
        <ScrollView style={{flex:1}}>
        <Image
      source={{uri:"https://via.placeholder.com/500"}}
      style={{width:'100%', height:300}}/>
      

      <View style={{padding:12}} >
        <Text style={{fontSize:26, fontWeight:"bold",marginBottom:12}} >{lorem.generateWords(3)}</Text>
        <Text style={{fontSize:28, color:"green", fontWeight:'bold', textAlign:"right", marginBottom:12}} >120'000₮</Text>
        <Text style={{fontSize:16, lineHeight:24}}>{lorem.generateParagraphs(3)}</Text>
      </View>
      </ScrollView>
     <TouchableOpacity onPress={() => router.back()}>
       <View style={{position:"absolute", backgroundColor:'green', right:0, bottom:0, zIndex:1, paddingHorizantal:20, paddingVertical:12, borderWidth:1, borderRadius:5}}><Text>butsah</Text></View>
     </TouchableOpacity>
      </>
    )
}