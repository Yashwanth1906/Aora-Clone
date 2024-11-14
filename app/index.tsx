import React from "react";
import {StatusBar} from "expo-status-bar"
import { Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView,View } from "react-native"
import {images} from "../constants"
import { Redirect,router } from "expo-router";
import CustomButton from "@/components/CustomButton";

export default function Home(){
    return <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.innerView}>
                <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
                />
                <Image
                source={images.cards}
                style={styles.card}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Discover Endless possibilites with <Text style={{color:"#FF8E01"}}>Aora</Text></Text>
                    <Image source={images.path} resizeMode="contain" style={{width:80,height:60,marginTop:40,marginLeft:200,position:"absolute"}}/>
                </View>
                <Text style={{marginTop:25,fontSize:13,color:"grey",position:"relative",textAlign:"center"}}>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
                <CustomButton title="Continue with Email" handlePress={()=> router.push("/(auth)/sign-in")}/>
            </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#232533",
        height:"100%",
    },
    link:{
        color:"blue"
    },
    scroll:{
        height:"100%"
    },
    innerView:{
        width:"100%",
        alignItems:"center",
        height:"100%",
        justifyContent:"center",
        marginTop:-30
    },logo:{
        width:140,
        height:80
    },card:{
        height:300,
        width:300
    },
    textContainer:{
        position:"relative",
    },
    text:{
        textAlign:"center",
        fontSize:28,
        color:"white"
    }
})