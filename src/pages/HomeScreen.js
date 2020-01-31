import React from 'react';
import {
    View,
    Text
} from 'react-native'
import Header from '../components/HomeComponents/Header'
import ButtonDale from '../components/HomeComponents/Button'
import Footer from '../components/HomeComponents/Footer'

export default class HomeScreen extends React.Component {
    render(){
        return(
        <View>
            <Header></Header>
            <ButtonDale
                cardTitle={'Realizar Rotas'}
                title={'ROTAS'}
            />
            <ButtonDale
                cardTitle={'Realizar Sincronização'}
                title={'SYNC'}
            />
            <Footer></Footer>
        </View>
        )
    }
}