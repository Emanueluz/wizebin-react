import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native'

export default class Header extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden />
                <Text style={{color: 'white', fontSize: 21, fontFamily: 'sans-serif-light', marginLeft: 80}}>Seja bem vindo Admin</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: '#143a41',
        justifyContent: 'center',
        alignContent: 'center'
    }
})