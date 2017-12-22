import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {showAll, showMemorized, showNeedPractice} from '../redux/actionCreators';
 class Filter extends Component {
    getTextStyle(statusName){
        const {MyFilterStatus} = this.props;
        if(statusName == MyFilterStatus) return{ color:'yellow',fontWeight:'bold'};
        return styles.text;
    }

    setFilterStatus(actionType){
        this.props.dispatch({type:actionType});
    }
    render() {

        return (

            <View style={styles.container}>
                <TouchableOpacity
                    // onPress={ () => this.setFilterStatus('FILTER_SHOW_ALL')
                    onPress={ () => this.props.showAll()
                    }>
                    <Text style={this.getTextStyle('SHOW_ALL')}>Show All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={ () => this.setFilterStatus('FILTER_MEMORIZED')}
                    onPress={ () => this.props.showMemorized()}

                >
                    <Text style={this.getTextStyle('MEMORIZED')}>Memorized</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={ () => this.setFilterStatus('FILTER_NEED_PRACTICE')}
                    onPress={ () => this.props.showNeedPractice()}
                >
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>Need practice</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
function mapStateToProps(state){
    return{
      MyFilterStatus : state.filterStatus
    };
}
export default connect(mapStateToProps, {showAll, showMemorized, showNeedPractice})(Filter);
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flexDirection: 'row',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },
    text:{
        color:'white'
    },
})