import React from 'react';
import { StyleSheet, View, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
// importando componentes
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import ForgotPassword from '../components/ForgotPassword'
// importando imagens
import bgLogin from '../../assets/images/background-login.jpg'


export default function App() {
  return (
        <ImageBackground source={bgLogin} style={{ width: '100%', height: '100%', flex: 1}}>
          <KeyboardAvoidingView 
              behavior={'height'}
              style={styles.container}
              >
            <Header/>
            <UserInput/>
            <ForgotPassword></ForgotPassword>
          </KeyboardAvoidingView>
          
        </ImageBackground>
        
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});