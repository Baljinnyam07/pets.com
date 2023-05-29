import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView,Text } from "react-native";
export default function layout(){
    return (
        <SafeAreaView style={{flex:1}}>
            <Stack screenOptions={{headerShown:false}} />
            <StatusBar style="auto"/>
        </SafeAreaView>
    )
}