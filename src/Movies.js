import React from 'react'
import {
 View,
 Text,
 StyleSheet,
 TouchableWithoutFeedback,
 ScrollView
} from 'react-native'


import CenterMessage from './CenterMessage'


import { colors } from './theme'


export default class Movies extends React.Component {
  navigate = (item) => {
   this.props.navigation.navigate('Movie', { movie: item })
 }


 render() {
   const { movies } = this.props
   console.log('movies', this.props.movies)
   return (
     <ScrollView  contentContainerStyle={[!movies.length && { flex: 1 }]}>
       <View style={[!movies.length && { justifyContent: 'center', flex: 1 }]}>
         {
           !movies.length && <CenterMessage message='Nenhum filme/série adicionado ainda!' />
         }
         {
           movies.map((item, index) => (
             <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
               <View style={styles.movieContainer}>
                 <Text style={styles.movie}>{item.movie}</Text>
                 <Text style={styles.extraInfo}>{item.extraInfo}</Text>
               </View>
             </TouchableWithoutFeedback>
           ))
         }
       </View>
     </ScrollView>
   )
 }
}


const styles = StyleSheet.create({
 movieContainer: {
   padding: 10,
   borderBottomWidth: 2,
   borderBottomColor: 'coral'
 },
 movie: {
   fontSize: 20,
 },
 extraInfo: {
   color: 'grey'
 }, 
})
