

import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
//import logo from '../assets/logo.png'

export default function Login ({navigation}){
    return(
        <View style={style.fundo}>
            <View style={style.div}>   
            
            
           
                <Text style={style.senha}>Tela de Login </Text>
                
                <Text style={style.corTexto}>Email : </Text>
                    <TextInput style={style.input}>
                </TextInput>

                <Text style={style.corTexto} >Senha : </Text>
                    <TextInput style={style.input} secureTextEntry={true}>
                </TextInput>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    fundo: {
        flex : 1,
        backgroundColor : "#005555",
        alignItems: 'center',
        justifyContent: 'center',
        },
    div : {
        borderRadius : 30,
        backgroundColor : "white",
        width : "80%",
        height :200,
        alignItems: 'center',

    },
 
    input : {
        width : "80%",
        borderStyle : "solid",
        borderColor : "black",
        borderWidth : 1,
        borderRadius : 10
    },
    corTexto :{
        color : "#219EBC",
        marginRight : "60%",
    },
    senha : {
        color : "#219EBC",
        fontSize : 12,
        paddingVertical : 10
    },
    button : {
        margin : 10,
        alignItems: 'center',
        borderRadius : 10,
        backgroundColor : "#006554",
        width : "80%",
        height : 25
    },
    buttonText:{
        color : "white",
        paddingTop : 2,
    }
    })

