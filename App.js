import 'react-native-gesture-handler';
import React, { Component } from 'react'
import MoviesNavScreen from './src/MoviesNavScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddMovie from './src/AddMovie'


const Tab = createMaterialBottomTabNavigator()


export default class App extends Component{


 state = {
   movies: []
 }


 addMovie = (movie) => {
   const movies = this.state.movies
   movies.push(movie)
   this.setState({ movies })
   console.log('estado do app.js: ', this.state)
 }
  addFilm = (film, movie) => {
   const index = this.state.movies.findIndex(item => {
     return item.id === movie.id
   })
   const chosenMovie = this.state.movies[index]
   chosenMovie.films.push(film)
   const movies = [
     ...this.state.movies.slice(0, index),
     chosenMovie,
     ...this.state.movies.slice(index + 1)
   ]
   this.setState({
     movies
   })
 }
  render(){
   return(
     <NavigationContainer>

        <Tab.Navigator>
         <Tab.Screen name='Filmes/Séries assistidos'>
           {props => <MoviesNavScreen {...props}
           movies={this.state.movies}
           addFilm={this.addFilm}/>}
         </Tab.Screen>

         <Tab.Screen name='Adicionar novo assistido'>
           {() => <AddMovie addMovie={this.addMovie}/>}
         </Tab.Screen>

       </Tab.Navigator>
     </NavigationContainer> 
   )
 }
}