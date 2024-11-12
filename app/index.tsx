import { ThemedText } from "@/components/ThemedText";
import React from "react";
import {StatusBar} from "expo-status-bar"
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home(){
    return <SafeAreaView style={styles.container}>
        <Text>Hello world from the world of kanguva</Text>
        <StatusBar style="auto"/>
        <Link href={"/profile"}style={styles.link}>Go to profile page</Link>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    link:{
        color:"blue"
    }
})