import React from 'react';
import { Image, StyleSheet } from 'react-native';
import logoImage from '../../assets/images/logo-white.png'



export default function Header(){

    const styles = StyleSheet.create({
        stretch: {
            width: 200,
            height: 80,
            marginBottom: 30,
            marginTop: 30,
            resizeMode: 'stretch'
        }
    })

    return(
        <Image
            style={styles.stretch}
            source={logoImage}
        />
    )
}