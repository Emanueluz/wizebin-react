import React, { Component } from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'
import { Button } from 'react-native-elements'

export default class Footer extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Button
                    buttonStyle={{ backgroundColor: '#143a41' }}
                    title="SAIR"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignContent: 'flex-end',
        marginBottom: null
    }
})