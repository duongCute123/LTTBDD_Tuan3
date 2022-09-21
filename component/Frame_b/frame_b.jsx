import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
const Frame_b = () => {
    return (
        <View style={{width:"100%",height:"100%",backgroundColor:"#C7F4F6",flexDirection:"column",alignItems:"center",justifyContent:'center'}}>
            <View style={{margin:50,top:0}}>
                <Image source={require("../../image/lock.png")}></Image>
            </View>
            <View>
                <Text>FORGET
                    PASSWORD</Text>
            </View>
            <View>
                <Text>Provide your account’s email for which you want to reset your password</Text>
            </View>
            <View style={{borderColor:"red",width:"100%",height:"50px"}}>
                <TextInput placeholder="Nhập email vao"></TextInput>
            </View>
            <View>
                <Button title="NEXT"></Button>
            </View>
        </View>
    )
}
export default Frame_b