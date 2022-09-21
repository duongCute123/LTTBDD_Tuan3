import React, { Component } from 'react';  
import { StyleSheet,View,Text } from 'react-native';  
  
export default class FlexDirectionBasics extends Component {  
    render() {  
        return (  
            <View style={styles.container}>
                <View style={styles.powderblue}>
                    <Text>Hello</Text>
                </View>
                <View style={styles.skyblue} >  
                <Text>Hi</Text></View>
                <View style={styles.steelblue} >
                    <Text>Bro</Text></View>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },  
    powderblue:{
        flex:1,

        backgroundColor: 'powderblue',  
    },  
    skyblue:{  
        flex:2,
        backgroundColor: 'skyblue',  
    },  
    steelblue:{  
        flex:1,
        backgroundColor: 'steelblue',  
    }  
})  
