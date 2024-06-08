import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Button  } from 'react-native';

export default function App() {

  const [texto, setTexto ] = useState('')
  const [lista, setLista] = useState([])

  // function pegarTexto(entradaTexto){
  //   setTexto(entradaTexto)
  //   console.log(entradaTexto)
  // }

  function adicionaTexto(){
    setLista([...lista,texto])
    setTexto("")
  }

  function deletar(indexParameter){
    const listaFiltrada = lista.filter((_,index) => index !== indexParameter)
    setLista(listaFiltrada)
  }

  return (
    
    <View style={styles.container}>
      <Text style=  {styles.titulo}>ToDoList</Text>
      <StatusBar style="auto" />

      <View style={styles.boxInput}>
        <TextInput style ={styles.input} placeholder="Digite a atividade" onChangeText={setTexto}  value={texto} ></TextInput>
        <Button title='Adicionar' onPress={adicionaTexto} ></Button>
      </View>

      <View style={styles.border}></View>

      <View  style={styles.lista} >   
        {lista.map((item,index)=>  
        <View  style={styles.boxInput} key={index}>
          <Text>{item}</Text>
          <Button title='Del' onPress={ () => deletar(index)}></Button>
        </View> ) }

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo:{
    fontSize: 35,
    alignSelf:'center',
    marginTop: 40,
  },
  input:{
    borderWidth:1,
    width: '70%',
    fontSize: 10,
    paddingLeft:5
  },
  boxInput:{
    flexDirection:"row",
    justifyContent: "space-between",
    margin:10
  },
  border:{
    borderBottomWidth:1
  },
  lista:{
    marginLeft: 15,
    marginTop: 5,
    fontSize:16,
  }
});
