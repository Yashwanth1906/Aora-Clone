import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,containerStyle,textStyle,handlePress,isLoading}:any) => {
  return (
    <TouchableOpacity style={styles.container} disabled={isLoading} onPress={handlePress}>
        <Text style={styles.textElement}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FF8E01",
        borderRadius:10,
        marginTop:20,
        height:50,
        width:330,
        justifyContent:"center"
    },
    textElement:{
        textAlign:"center",
        fontSize:18,
        fontWeight:"500"
    }
})