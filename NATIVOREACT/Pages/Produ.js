import React from 'react';
import { View ,Image,Text,StyleSheet,ouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function Produ (){
  return (
      <View style={estilos.container}>
         
        <View style={estilos.primeirogrupo}>
          <Image
          source={require("../assets/img/fogao.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>fogao</Text>
          <Text style={estilos.descricao}>Belo fogao 5 bocas</Text>
          <Text style={estilos.valor}>De:2.300 R$</Text>
          <Text style={estilos.valorfinal}>Por:1.999 R$</Text> 
          
          <Image
          source={require("../assets/img/lavroupa1.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>Lavroupa</Text>
          <Text style={estilos.descricao}>Multi fucional</Text>
          <Text style={estilos.valor}>De:1.300 R$</Text>
          <Text style={estilos.valorfinal}>Por:999 R$</Text> 
    
          <Image
          source={require("../assets/img/geladeira.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>Geladeira</Text>
          <Text style={estilos.descricao}>Potente Bivolt</Text>
          <Text style={estilos.valor}>De:9.900 R$</Text>
          <Text style={estilos.valorfinal}>Por:7.999 R$</Text> 
              
        </View>

       <View style={estilos.segundogrupo}>
          <Image
          source={require("../assets/img/geladeira1.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>Geladeira</Text>
          <Text style={estilos.descricao}>Geladeira branca</Text>
          <Text style={estilos.valor}>De: 2.300 R$</Text>
          <Text style={estilos.valorfinal}>Por: 1.999 R$</Text> 

          <Image
          source={require("../assets/img/microondas.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>Microondas</Text>
          <Text style={estilos.descricao}>Marca Recode</Text>
          <Text style={estilos.valor}>De:350R$</Text>
          <Text style={estilos.valorfinal}>Por:299 R$</Text> 

          <Image
          source={require("../assets/img/fogao1.jpg")}
          style={estilos.imagens}
          />
          <Text style={estilos.nomeprodu}>Fogao</Text>
          <Text style={estilos.descricao}>Fogao Mega Power</Text>
          <Text style={estilos.valor}>De:350R$</Text>
          <Text style={estilos.valorfinal}>Por:299 R$</Text> 
     
        </View>
      </View>
      
  );
};
const estilos = StyleSheet.create({
    container:{
        alignContent:'center',
        padding:10,
        flexDirection:'row',
       
    },
    imagens:{
        justifyContent:"center",
        width:100,
        height:100,
        marginBottom:10,
        padding:10,
        
    },
    nomeprodu:{
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    primeirogrupo:{
        marginLeft:10,
        width:150,
    },
     segundogrupo:{
    //     paddingLeft:80,
    //     resizeMode:'contain',
    marginLeft:100,
        width:150,
    },
    valor:{
        color:"#ff0000",
        
    },
    valorfinal:{
        fontSize:20,
        paddingBottom:7,
    }
});