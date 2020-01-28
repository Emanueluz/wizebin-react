import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function UserInput(){
    const [usernameValue, onChangeText] = React.useState('');
    const [passwordValue, onChangeText1] = React.useState('');

    const styles = StyleSheet.create({
        inputStyle: {
            height: 40,
            borderColor: '#0b772f',
            borderWidth: 1,
            width: 250,
            paddingLeft: 15,
            borderRadius: 5, 
            color: 'white',
            margin: 5

        }
    }) 
    
    return(
        <KeyboardAvoidingView
            style={{ marginLeft: 60 }}
        >
            <TextInput
            textContentType="emailAddress"
            placeholder='Insert your Username here'
            style={styles.inputStyle}
            onChangeText={text => onChangeText(text)}
            value={usernameValue}
            />
            <TextInput
            textContentType="password"
            placeholder='Insert your Password here'
            style={styles.inputStyle}
            onChangeText={text => onChangeText1(text)}
            value={passwordValue}
            />
            <Button
            icon={
            <Icon
                name="arrow-right"
                size={15}
                color="white"
            />
            }
            title=' LOGIN'
            buttonStyle={{ backgroundColor: '#79b1b3', marginTop: 10, width: 250, borderRadius: 5 }}
            />
        </KeyboardAvoidingView>
    )
}