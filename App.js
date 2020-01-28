import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import Header from './src/components/Header';
import UserInput from './src/components/UserInput';


export default function App() {
  return (
      <KeyboardAvoidingView 
        behavior={'height'}
        style={styles.container}>
        <ImageBackground source={require('./src/assets/images/background-login.jpg')} style={{ width: '100%', height: '100%'}}>
        <Header/>
        <UserInput/>
         
        </ImageBackground>
    </KeyboardAvoidingView>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});