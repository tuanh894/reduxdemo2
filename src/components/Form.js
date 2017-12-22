import React, {Component} from 'react';
import {toggleIsAdding,addWord} from '../redux/actionCreators';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList, TouchableOpacity,
    TextInput
} from 'react-native';
import {connect} from 'react-redux';
 class Form extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        }
    }

    onAdd() {
        // this.props.dispatch({
        //     type:'ADD_WORD',
        //     en:en,
        //     vn:vn,
        // });
        const {en,vn} = this.state;
        this.props.addWord(en,vn);
        this.props.toggleIsAdding();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({en:text})}
                    placeholder="English Word"
                />

                <TextInput
                    style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({vn:text})}
                    placeholder="Vietnamese Word"
                />

                <TouchableOpacity
                    onPress={ this.onAdd.bind(this)}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default connect (null, {addWord, toggleIsAdding}) (Form);
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '95%',
        backgroundColor: 'yellow',
        margin: 10,
        paddingHorizontal: 10
    },
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    }

})