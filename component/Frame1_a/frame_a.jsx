import React from "react";
import { Component } from "react";
import { View, Text, TextInput, StyleSheet, Image, Button } from "react-native";
const Frame_a = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("./image/circle.png")}></Image>
            </View>
            <View style={styles.center}>
                <Text>grows your pass</Text>
            </View>
            <View style={styles.center1}>
                <Text>We will help you to grow your business using
                    online server</Text>
            </View>
            <View style={styles.center2}>
                <Button title="LOGIN">LOGIN</Button>
                <Button title="SINGUP">SINGUP</Button>
            </View>
            <View style={styles.footer}>HOW WE WORK ?</View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        flex:2,
    },
    center:{
        flex:1,
    },
    center1:{
        flex:1
    },
    footer:{
        flex:1
    }

})
export default Frame_a