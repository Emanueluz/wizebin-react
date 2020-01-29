import React from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native'

export default function ForgotPassword() {

    const styles = StyleSheet.create({
        container: {
            marginTop: 15,
            justifyContent: 'center',
            alignContent: 'center'
        }
    })
    
    return(
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Esqueceu sua senha?</Text>
            <Text style={{ color: 'white', textDecorationLine: "underline" }}
             onPress={() => Linking.openURL('http://google.com')}
            >
                {'\t\t\t\t\t'}clique aqui!
            </Text>
        </View>
    )
}