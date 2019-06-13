import React, {Component} from 'react';

import {TouchableOpacity, ScrollView, View, Text, StyleSheet} from 'react-native';

export default class Home extends Component{
    static navigationOptions ={
        title : "Início"
        
    };
    render(){

    const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.postContainer}> 
                    <TouchableOpacity onPress={() => {navigate('Perfil')}} style={styles.profilebutton}>
                        <Text style={styles.postTitle}>Morrendo de sono</Text>
                        <Text style={styles.postDeion}>motivo: nao dormi</Text>
                    </TouchableOpacity> 
                </View>
                <View style={styles.postContainer}> 
                    <TouchableOpacity onPress={() => {navigate('Posts')}} style={styles.profilebutton}>
                        <Text style={styles.postTitle}>JM é o melhor</Text>
                        <Text style={styles.postDeion}>murkrow</Text>
                    </TouchableOpacity> 
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
    postDeion:{
        color:"#000000"
    },
    profilebutton:{
        flex:1,
        backgroundColor: '#f08080',
        paddingVertical:10,
        borderRadius: 5
        
    }
    });

