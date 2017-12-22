import React from "react";
import { AppRegistry, Alert,StyleSheet } from "react-native";

import {
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,List, ListItem,
    Header,
    Left,
    Right,
    Icon,
    Title,
    Button,
    H1,View,TouchableOpacity
} from "react-native";

export default class Profile extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <TouchableOpacity
                onPress={() => navigate('ShowProfile')}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

});
