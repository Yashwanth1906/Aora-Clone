import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{height:"100%"}}>
        <View style={styles.innerView}>
          <Image source={images.logo} resizeMode='contain' style={styles.logo}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#232533",
    height:"100%",
  },innerView:{
    width:"100%",
    alignItems:"center",
    height:"100%",
    justifyContent:"center",
    marginTop:-30,
    backgroundColor:"white"
  },logo:{
    width:140,
    height:80
  }
})