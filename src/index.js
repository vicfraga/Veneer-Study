import React from 'react';
import { StackNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Posts from './pages/Posts'

const App = StackNavigator({  
  Home: {screen: Home},
  Perfil: {screen: Perfil},
  Posts: {screen:Posts}
})

export default App;