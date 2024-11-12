import { SplashScreen,Stack } from "expo-router";
import React, { useEffect } from "react";
import {useFonts} from "expo-font"
SplashScreen.preventAutoHideAsync();

export default function HomeLayout(){
    const [fontsLoaded,error] = useFonts({
        "Poppins-Black":require("../assets/fonts/Poppins-Black.ttf")
    })

    useEffect(()=>{
        if(error) throw error
        if(fontsLoaded) SplashScreen.hideAsync();
    },[fontsLoaded,error])
    if(!fontsLoaded && !error) return null;
    return <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}></Stack.Screen>
    </Stack>
}