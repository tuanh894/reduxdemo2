import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
//
// import { createStore } from 'redux';
import {connect} from 'react-redux';
import {toggleMemorized, toggleShow} from '../redux/actionCreators';

class Word extends Component<{}> {
    // memorizedWord(){
    //     this.props.dispatch({
    //         type :'TOGGLE_MEMORIZED',
    //         id: this.props.myWord.id
    //     });
    // }
    // toggleShowWord(){
    //     this.props.dispatch({
    //         type :'TOGGLE_SHOW',
    //         id: this.props.myWord.id
    //     });
    // }
    render() {
        const {en, vn, memorized, isShow, id} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'Forget' : 'Memorized';
        const meaning = isShow ? vn : '--------';
        return (
            <View style={styles.container}>

                <Text style={{textDecorationLine}}>{en}</Text>
                <Text>{meaning}</Text>

                <View style={styles.controller}>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress ={ this.memorizedWord.bind(this)}
                        onPress ={ ()=> this.props.toggleMemorized(id)}

                    >
                        <Text>
                            {memorizedButtonText}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress ={ ()=> this.props.toggleShow(id)}
                    >
                        <Text>
                            Show
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
export default connect(null, {toggleMemorized, toggleShow})(Word);
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2def6',
        padding: 10,
        margin: 10
    },
    controller:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    button:{
      backgroundColor:'#F5F5F5',
      padding:5,
      margin:5
    }
});
