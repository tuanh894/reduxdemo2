import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Provider} from 'react-redux'
import Profile from './component/index'
import store from './redux/store'

export default class App extends Component<{}> {
    render() {
        return (
           <Provider store = {store}>
               <Profile/>
           </Provider>
        );
    }
}