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
        <View style={[styles.locationsContainer, !movie.films.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !movie.films.length && <CenterMessage message='Nenhuma review adicionada!' />
            }
            {
              movie.films.map((film, index) => (
                <View key={index} style={styles.locationContainer}>
                  <Text style={styles.locationName}>{film.name}</Text>
                  <Text style={styles.locationInfo}>{film.info}</Text>
                  
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
        placeholderTextColor='white'
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.addFilm}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Adicionar review</Text>
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
 locationsContainer: {
   paddingBottom: 104
 },
 input: {
   height: 50,
   backgroundColor: 'coral',
   color: 'white',
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
   backgroundColor: '#666',
   justifyContent: 'center',
   alignItems: 'center'
 },
 buttonText: {
   color: 'white'
 },
 locationContainer: {
   padding: 10,
   borderBottomColor: 'coral',
   borderBottomWidth: 2
 },
 locationName: {
   fontSize: 20
 },
 locationInfo: {
   color: 'rgba(0, 0, 0, .5)'
 }
})


export default Movie