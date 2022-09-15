import React from "react";
import { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
const Frame_c = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>CODE</Text>
            </View>
            <View style={styles.main}>
                <Text>CODE
                    VERIFICATION
                </Text>
            </View>
            <View style={styles.center}>
                <Text>Enter ontime password sent on
                    ++849092605798
                </Text>
            </View>
            <View style={styles.center1}>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
                <TextInput></TextInput>
            </View>
            <View style={styles.footer}>
                <Button title="VERYFY CODE">VERYFY CODE</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'linear-gradient(180deg, rgba(199, 244, 247, 0) 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        color: "back"
    },
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    center1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#E3C000'
    }
})
export default Frame_c