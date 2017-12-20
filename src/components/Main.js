import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,TouchableOpacity
} from 'react-native';
//
// import { createStore } from 'redux';
import {connect} from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component<{}> {
    getWordList(){
        const{myFilter,myWords} = this.props;
        // if (myFilter === 'SHOW_ALL') return myWords;
        if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
        if (myFilter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
        return myWords
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />

                <View style={{flex:10}}>
                    {this.props.myIsAdding ?<Form/> : null}
                    <FlatList
                        data ={this.getWordList()}
                        renderItem = {({item}) => <Word myWord={item}/> }
                        keyExtractor={item => item.id}
                    />
                </View>
                <Filter/>
            </View>

        );
    }
}

//Láy state từ store
function mapStateProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords : state.arrWords,
        myIsAdding : state.isAdding

    };
}

const styles =StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex: 1,
        alignSelf: 'stretch'
    },
    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }

})


//Thay vì export default Main, thì export connent vì kết nốt vs react-redux
export default connect(mapStateProps)(Main);