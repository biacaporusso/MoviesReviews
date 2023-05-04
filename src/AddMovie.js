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


class AddMovie extends React.Component {
 state = {
   movie: '',
   country: ''
 }
 onChangeText = (key, value) => {
   this.setState({ [key]: value })
 }
 submit = () => {
   if (this.state.movie === '' || this.state.country === '') alert('please complete form')
   const movie = {
     movie: this.state.movie,
     country: this.state.country,
     id: String(Random.getRandomBytes(8)),
     locations: []
   }
   this.props.addMovie(movie)
   this.setState({
     movie: '',
     country: ''
   })
 }
 render() {
   return (
     <View style={styles.container}>
       <Image source={require('./filmes.jpeg')} style={styles.image}  />
       <Text style={styles.heading}>Filme</Text>
       <TextInput
         placeholder='Filme/Série'
         onChangeText={val => this.onChangeText('movie', val)}
         style={styles.input}
         value={this.state.movie}
       />
       <TextInput
         placeholder='Ano de lançamento'
         onChangeText={val => this.onChangeText('country', val)}
         style={styles.input}
         value={this.state.country}
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
   margin: 10
 },
 buttonText: {
   color: 'white',
   fontSize: 18
 },
 heading: {
   color: 'white',
   fontSize: 40,
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
  width:500,
  height: 250,
   margin: 10,
   borderRadius: 60,
   alignSelf: 'center'
   
 }
})


export default AddMovie