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
import AlertAPI from './AlertAPI'
import { Alert } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'


class AddMovie extends React.Component {
 state = {
   movie: '',
   extraInfo: '',
   rating: 0
 }
 onChangeText = (key, value) => {
   this.setState({ [key]: value })
 }
 submit = () => {
   if (this.state.movie === '' || this.state.extraInfo === '') 
    alert('please complete form')
  else {
   const movie = {
     movie: this.state.movie,
     extraInfo: this.state.extraInfo,
     rating: this.state.rating,
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
       <Text style={styles.heading}>🎥 review de filmes e séries 🎥</Text>
       <TextInput
         placeholder='Filme/Série'
         onChangeText={val => this.onChangeText('movie', val)}
         style={styles.input}
         value={this.state.movie}
       />
       <TextInput
         placeholder='Ano de lançamento'
         onChangeText={val => this.onChangeText('extraInfo', val)}
         style={styles.input}
         value={this.state.extraInfo}
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
   backgroundColor: '#666',
   justifyContent: 'center',
   alignItems: 'center',
   margin: 70
 },
 buttonText: {
   color: 'white',
   fontSize: 18
 },
 heading: {
   color: 'white',
   fontSize: 25,
   marginBottom: 10,
   alignSelf: 'center'
 },
 container: {
   backgroundColor: 'coral',
   flex: 1,
   justifyContent: 'center'
 },
 input: {
   margin: 10,
   backgroundColor: 'white',
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