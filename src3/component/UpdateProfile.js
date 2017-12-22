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

export default class UpdateProfile extends React.Component {
    render() {
        return (
            <TouchableOpacity>
                <Text>Update Profile</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

});
