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
 addLocation = () => {
   if (this.state.info === '') return
   const { movie } = this.props.route.params
   const location = {
     name: this.state.name,
     info: this.state.info
   }
   this.props.addLocation(location, movie)
   this.setState({ name: '', info: '' })
 }
 render() {
   const { movie } = this.props.route.params
   return (
     <View style={{ flex: 1 }}>
       <ScrollView contentContainerStyle={[!movie.locations.length && { flex: 1 }]}>
         <View style={[styles.locationsContainer, !movie.locations.length && { flex: 1, justifyContent: 'center' }]}>
           {
             !movie.locations.length && <CenterMessage message='No locations for this movie!' />
           }
           {
             movie.locations.map((location, index) => (
               <View key={index} style={styles.locationContainer}>
                 <Text style={styles.locationName}>{location.name}</Text>
                 <Text style={styles.locationInfo}>{location.info}</Text>
               </View>
             ))
           }
         </View>
       </ScrollView>
       <TextInput
         onChangeText={val => this.onChangeText('info', val)}
         placeholder='Resenha sobre o filme/série assistido'
         value={this.state.info}
         style={[styles.input, styles.input2]}
         placeholderTextColor='white'
       />
       <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={this.addLocation}>
           <View style={styles.button}>
             <Text style={styles.buttonText}>Add Location</Text>
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
   backgroundColor: colors.primary,
   color: 'white',
   paddingHorizontal: 8,
   position: 'absolute',
   width: '100%',
   bottom: 104,
   left: 0
 },
 input2: {
   bottom: 52
 },
 buttonContainer: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   width: '100%'
 },
 button: {
   height: 50,
   backgroundColor: 'coral',
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