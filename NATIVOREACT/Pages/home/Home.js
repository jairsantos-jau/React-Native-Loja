import React from 'react';
import { Text,  ScrollView,View, ImageBackground,TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Fundo from '../../assets/homepage.jpg';


function Home({navigation}){

   
   
  return (
    <View style={styles.caixa}>     
     
      <ImageBackground source={Fundo} style={styles.fundo}>
        
        <View> 
          <View>
            <Text style={styles.saudacao} >Seja Bem Vindos(as)</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Produ')}}>
            <Text style={styles.texto}>Produtos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Cadastro')}}>
            <Text style={styles.cadastro}>Cadastro</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Login')}}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
    
        </View>
        
      </ImageBackground>
   
    </View>
  )
  
}
export default Home;