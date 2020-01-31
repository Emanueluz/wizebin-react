// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/pages/LoginScreen';
import Home from './src/pages/HomeScreen';


export default class App extends React.Component {
  render() {
    // return <AppContainer />;
  }
}

// const AppNavigator = createStackNavigator({
//     Login: {
//       screen: LoginScreen
//     },
//     Home: {
//       screen: HomeScreen
//     }
//   },{
//         initialRouteName: "Login"
// });

// const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});