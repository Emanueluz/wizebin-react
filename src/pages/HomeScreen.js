import React from 'react';
import {
    View,
    Text,
    BackHandler,
    ToastAndroid
} from 'react-native'
import Header from '../components/HomeComponents/Header'
import ButtonDale from '../components/HomeComponents/Button'
import Footer from '../components/HomeComponents/Footer'
import { withNavigation } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerShown: false,
    });

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }
    
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

export default withNavigation(HomeScreen);