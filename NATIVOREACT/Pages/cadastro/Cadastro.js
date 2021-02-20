import React, {useState} from 'react';
import { View, TextInput, ScrollView, Text, ImageBackground, TouchableOpacity, Image, Button,  } from 'react-native';



import styles from './style';

import Fundo from '../../assets/fundo.png'


function Cadastro({navigation}) {
   
   
  return (
    <ScrollView>
      
      <ImageBackground source={Fundo} style={styles.fundo}>
    
      <View style={styles.container}>

        <View>
         <Text style={styles.titulo}> Cadastro</Text>
        </View>
        
        <View style={styles.margin}>
          <Text style={styles.text} >Nome:</Text>
          <TextInput style={styles.input} />
         
        </View>
        <View>
          <Text style={styles.text}>Data de Nascimento:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Telefone:</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <View>
          <Text style={styles.text}>Confirme a senha:</Text>
          <TextInput style={styles.input}  secureTextEntry={true} />
        </View>
        

        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.cadastrar}>Cadastrar</Text>          
        </TouchableOpacity>

      </View>
      </ImageBackground>
    </ScrollView>
  )
  
}

export default Cadastro;