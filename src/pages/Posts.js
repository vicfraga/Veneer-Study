import React, {Component} from 'react';

import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Posts extends Component{
    static navigationOptions ={
        title : "Posts"
        
    };
    render(){
        return (
            // <ScrollView style={styles.container}>
            //     <View style={styles.postContainer}> 
            //     <Text style={styles.postTitle}>usguriiiiiiiiiiiiiii</Text>
            //     <Text style={styles.postDeion}>veja gurizada</Text>
            //     </View>
            // </ScrollView>
            <Text> Oi :)</Text>
        );
    }
}

const styles= StyleSheet.create ({
    container :{
        flex:1,
        backgroundColor: '#cd5c5c',
        
    },

    postContainer: {
        margin: 20,
        padding: 20,
        backgroundColor: "#f08080",
        borderRadius: 3,
    },
    postTitle:{
        fontSize: 18,
        fontWeight: "bold",
    
    },
    postDeion:{
        color:"#000000"
    }
    });

