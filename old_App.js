import { StatusBar } from 'expo-status-bar';
import {  Image, SafeAreaView, Text, View, StatusBar as RNStatusBar, ScrollView, TouchableOpacity, Vibration, FlatList } from 'react-native';
import { LoremIpsum } from 'lorem-ipsum';
import ProductCard from './components/ProductCard';
import { useEffect, useState } from 'react';




export default function App() {
  const [items, setItems]= useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then((response)=> response.json())
      .then((json)=>{
        setItems(json);
        setLoading(false);
      })
  },[])

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff", padding:RNStatusBar.currentHeight}}>


        

       {loading && <Text>Loading...</Text>}
      {!loading && (
        <FlatList
          data={items}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: "50%" }}>
              <ProductCard product={item} key={item.id} />
            </View>
          )}
        />
      )}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


