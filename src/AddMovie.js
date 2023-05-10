import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 Image,
 TextInput,
 TouchableOpacity
} from 'react-native'


import * as Random from 'expo-random'
import { colors } from './theme'
import { Alert } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'


class AddMovie extends React.Component {
 state = {
   movie: '',
   extraInfo: ''
 }
 onChangeText = (key, value) => {
   this.setState({ [key]: value })
 }
 submit = () => {
   if (this.state.movie === '') 
    alert('Favor preencher o nome!')
  else {
   const movie = {
     movie: this.state.movie,
     extraInfo: this.state.extraInfo,
     rating: 0,
     id: String(Random.getRandomBytes(8)),
     films: []
   }
   this.props.addMovie(movie)
   this.setState({
     movie: '',
     extraInfo: ''
   })
   Alert.alert(
    'Sucesso',
    'Filme adicionado com sucesso!'
  )
  }
 }
 render() {
   return (
     <View style={styles.container}>
       <Image source={require('./filmes.jpeg')} style={styles.image}  />
       <Text style={styles.heading}>🎥 Review de Filmes e Séries 🎥</Text>
       <TextInput
         placeholder='Filme/Série'
         onChangeText={val => this.onChangeText('movie', val)}
         style={styles.input}
         value={this.state.movie}
         placeholderTextColor='#696969'
       />
       <TextInput
         placeholder='Informação Adicional (ex.: ano de lançamento, diretor etc)'
         onChangeText={val => this.onChangeText('extraInfo', val)}
         style={styles.input}
         value={this.state.extraInfo}
         placeholderTextColor='#696969'
       />
       <TouchableOpacity onPress={this.submit}>
         <View style={styles.button}>
           <Text style={styles.buttonText}>Adicionar novo</Text>
         </View>
       </TouchableOpacity>
       
     </View>
   )
 }
}


const styles = StyleSheet.create({
 button: {
   height: 50,
   backgroundColor: 'gold',
   justifyContent: 'center',
   alignItems: 'center',
   margin: 70
 },
 buttonText: {
   color: 'black',
   fontSize: 18
 },
 heading: {
   color: 'gold',
   fontSize: 23,
   fontWeight: 'bold',
   marginBottom: 10,
   alignSelf: 'center'
 },
 container: {
   backgroundColor: '#1C1C1C',
   flex: 1,
   justifyContent: 'center'
 },
 input: {
   margin: 10,
   backgroundColor: 'white',
   placeholder: 'green',
   paddingHorizontal: 8,
   height: 50
 }, 
 image: {
  width:380,
  height: 199,
   margin: 30,
   borderRadius: 30,
   alignSelf: 'center'
   
 }
})


export default AddMovie