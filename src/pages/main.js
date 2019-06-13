import React, {Component} from 'react';

import {Platform, ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Main extends Component{
    static navigationOptions ={
        title : "Pagina legal"
    };
    render(){
        return (
            <ScrollView style={styles.container}>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
                <View style={styles.postContainer}> 
                <Text style={styles.postTitle}>Morrendo de sono</Text>
                <Text style={styles.postDescription}>motivo: nao dormi</Text>
                </View>
            </ScrollView>
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
    postDescription:{
        color:"#000000"
    }
    });

