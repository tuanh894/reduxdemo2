import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './redux/store';
import Main from './component/main'

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}


//Tích hợp react-redux


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'lightblue',
        alignSelf: "stretch"
    },

});
