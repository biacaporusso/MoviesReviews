import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 ScrollView,
 TextInput,
 TouchableOpacity
} from 'react-native'


import CenterMessage from './CenterMessage'
import { colors } from './theme'

class Movie extends React.Component {
  state = {
   name: '',
   info: ''
 }
 onChangeText = (key, value) => {
   this.setState({
     [key]: value
   })
 }
 addFilm = () => {
   if (this.state.info === '') return
   const { movie } = this.props.route.params
   const film = {
     name: this.state.name,
     info: this.state.info,
   }
   this.props.addFilm(film, movie)
   this.setState({ name: '', info: ''})
 }
 render() {
  const { movie } = this.props.route.params
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[!movie.films.length && { flex: 1 }]}>
        <View style={[styles.moviesContainer, !movie.films.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !movie.films.length && <CenterMessage message='Nenhuma review adicionada!' />
            }
            {
              movie.films.map((film, index) => (
                <View key={index} style={styles.movieContainer}>
                  <Text style={styles.movieName}>{film.name}</Text>
                  <Text style={styles.movieInfo}>{film.info}</Text>
                  
                </View>
              ))
            }
        </View>
      </ScrollView>
      <TextInput
        onChangeText={val => this.onChangeText('info', val)}
        placeholder='Escreva aqui sua Review'
        value={this.state.info}
        style={[styles.input]}
        placeholderTextColor='black'
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.addFilm}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adicionar Review</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
}


const styles = StyleSheet.create({
 container: {
   flex: 1
 },
 moviesContainer: {
   paddingBottom: 104
 },
 input: {
   height: 50,
   backgroundColor: 'white',
   color: '#1C1C1C',
   paddingHorizontal: 8,
   position: 'absolute',
   width: '100%',
   bottom: 60,
   left: 0
 },
 buttonContainer: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   width: '100%'
 },
 button: {
   height: 50,
   backgroundColor: 'gold',
   justifyContent: 'center',
   alignItems: 'center'
 },
 buttonText: {
   color: '#1C1C1C',
   fontSize: 17
 },
 movieContainer: {
   padding: 10,
   borderBottomColor: 'gold',
   borderBottomWidth: 2
 },
 movieName: {
   fontSize: 20
 },
 movieInfo: {
   color: 'black'
 }
})


export default Movie