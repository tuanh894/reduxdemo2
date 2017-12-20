import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';

 class Header extends Component<{}> {

    render() {
        return (
            <View style={styles.header}>
                <Text>My Words</Text>
                <TouchableOpacity onPress={() => this.props.dispatch({
                    type:'TOGGLE_IS_ADDING'
                })}>
                    <Text> +</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
export default connect()(Header);
const styles =StyleSheet.create({

    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }

})


