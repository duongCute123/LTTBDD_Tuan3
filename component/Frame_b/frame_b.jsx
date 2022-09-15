import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
const Frame_b = () => {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.header}>
                <Image source={require("./image/lock.png")}></Image>
            </View>
            <View style={styles.main}>
                <Text>FORGET
                    PASSWORD</Text>
            </View>
            <View style={styles.center}>
                Provide your account’s email for which you want to reset your password
            </View>
            <View style={styles.center1}>
                <Image source={require("./image/mail-2935365 1.png")}></Image>
                <TextInput placeholder="Nhập email"></TextInput>
            </View>
            <View style={styles.footer}>
                <Button title="NEXT"></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDF6C6"
    }
    ,
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    center1: {
        flex: 1,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",

    },
    footer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#E3C000"
    }


})
export default Frame_b