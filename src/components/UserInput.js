import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function UserInput(){
    const [value, onChangeText] = React.useState('');
    const [value1, onChangeText1] = React.useState('');
    
    return(
        <KeyboardAvoidingView
            style={{ marginLeft: 60 }}
        >
            <TextInput
            textContentType="emailAddress"
            placeholder='Insert your Username here'
            style={{ height: 40, borderColor: '#0b772f', borderWidth: 1, width: 250, paddingLeft: 15, borderRadius: 5, color: 'white' }}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <TextInput
            textContentType="password"
            placeholder='Insert your Password here'
            style={{ height: 40, borderColor: '#0b772f', borderWidth: 1, width: 250, paddingLeft: 15, borderRadius: 5, marginTop: 15, color: 'white' }}
            onChangeText={text => onChangeText1(text)}
            value={value1}
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