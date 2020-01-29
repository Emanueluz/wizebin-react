import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
  
export default function UserInput(){
    const [usernameValue, onChangeText] = React.useState('');
    const [passwordValue, onChangeText1] = React.useState('');

    // changeLoggedState = () => {
    //     loggedIn ? false : true
    // }
    

    const styles = StyleSheet.create({
        inputStyle: {
            height: 40,
            borderColor: '#fff',
            borderWidth: 1,
            width: 250,
            paddingLeft: 15,
            borderRadius: 5, 
            backgroundColor: 'gray',
            opacity: 0.75,
            color: 'white',
            margin: 5
        },
        loginButton: {
            backgroundColor: '#023744',
            marginLeft: 5.5,
            marginTop: 10,
            width: 250,
            borderRadius: 5,
            borderColor: '#011216', 
            borderWidth: 1
        }
    }) 
    
    return(
        <View style={styles.container}>
            <View>
                <TextInput
                    textContentType="emailAddress"
                    placeholder='Insert your Username here'
                    style={styles.inputStyle}
                    autoFocus={false}
                    onChangeText={text => onChangeText(text)}
                    value={usernameValue}
                    keyboardType="email-address"
                />
                <TextInput
                    textContentType="password"
                    placeholder='Insert your Password here'
                    style={styles.inputStyle}
                    onChangeText={text => onChangeText1(text)}
                    value={passwordValue}
                    secureTextEntry={true}
                />
            </View>
            <View>
                <Button
                    icon={
                        <Icon
                            name="arrow-right"
                            size={15}
                            color="white"
                        />
                    }
                    title=' LOGIN'
                    buttonStyle={styles.loginButton}
                />
            </View>
        </View>
    )
}