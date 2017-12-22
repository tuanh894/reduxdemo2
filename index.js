import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './src3/App';

export default class reduxdemo2 extends Component<{}> {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('reduxdemo2', () => reduxdemo2);
