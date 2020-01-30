import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class LoginButton extends Component{
    render(){
        return(
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
            >
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7ccad4',
        height: 40,
        width: 150,
        borderRadius: 20,
        zIndex: 100,
    }
})