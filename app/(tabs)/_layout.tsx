import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect } from 'expo-router'
import {icons} from "../../constants"

const TabIcon = ({icon,color,focused}:any)=>{
  return <View>
    <Image source={icon} resizeMode='contain' tintColor={color} style={styles.icon}/>
  </View>
}


const MainLayout = () => {
  return (
    <>
    <Tabs screenOptions={{
      tabBarActiveTintColor:"#FFA001",
      tabBarInactiveTintColor:"#CDCDE0",
      tabBarStyle:{
        backgroundColor:"#161622",  //primary color
        borderTopWidth:1,
        borderTopColor:"#232533"
      }
    }}>
      <Tabs.Screen name="home" options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon icon={icons.home} color={color} name="Home" focused={focused}/>
        )
      }}/>
      <Tabs.Screen name="bookMarks" options={{
        title:"BookMarks",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon icon={icons.bookmark} color={color}  focused={focused}/>
        )
      }}/>
      <Tabs.Screen name="create" options={{
        title:"Create",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon icon={icons.plus} color={color}  focused={focused}/>
        )
      }}/>
      <Tabs.Screen name="profile" options={{
        title:"Profile",
        headerShown:false,
        tabBarIcon:({color,focused})=>(
          <TabIcon icon={icons.profile} color={color}  focused={focused}/>
        )
      }}/>
    </Tabs>
    </>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  icon:{
    height:28,
    width:28
  }
})