import React from 'react';
import { Image, StyleSheet } from 'react-native';



export default function Header(){

    const styles = StyleSheet.create({
        stretch: {
            width: 230,
            height: 150,
            marginBottom: 15,
            marginTop: 30,
            marginLeft: 60,
            resizeMode: 'stretch'
        }
    })

    return(
        <Image
            style={styles.stretch}
            source={require('../assets/images/logo-white.png')}
        />
    )
}