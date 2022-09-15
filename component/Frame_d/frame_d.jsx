import React from "react";
import { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
const Frame_d = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>LOGIN</Text>
            </View>
            <View style={styles.main}>
                <TextInput placeholder="Nhập Email"></TextInput>
                <TextInput placeholder="Nhập mật khẩu"></TextInput>
                <Button title="LOGIN">LOGIN</Button>
            </View>
            <View style={styles.center}>
                <Text>When you agree too terms and condisstions</Text>
                <Text>For your password </Text>
                <Text>Or login with </Text>
            </View>
            <View style={styles.footer}>
                <Button title="Facebook">Facebook</Button>
                <Button title="ZALO">ZALO</Button>
                <Button title="GOOGLE">GOOGLE</Button>
            </View>
        </View>
    )
}
export default Frame_d
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 1, justifyContent: "center", alignItems: 'center'
    },
    main:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'column'
    },
    center:{
        alignItems:"center",
        justifyContent:'center'
    }


})