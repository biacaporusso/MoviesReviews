import { createStackNavigator } from '@react-navigation/stack'
import Movie from './Movie'
import Movies from './Movies'


const MoviesNav = createStackNavigator()


const MoviesNavScreen = ({movies, addLocation}) => (
   <MoviesNav.Navigator >
     <MoviesNav.Screen name="Filmes/Séries">
       { props => <Movies {...props} movies={movies}/> }
     </MoviesNav.Screen>
     <MoviesNav.Screen name="Movie" options={({ route }) => ({ title: route.params.movie.movie })}>
       { props => <Movie {...props} addLocation={addLocation}/> }
     </MoviesNav.Screen>
   </MoviesNav.Navigator>
 )


export default MoviesNavScreen