import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding} from '../redux/actionCreators';
 class Header extends Component<{}> {

    render() {
        return (
            <View style={styles.header}>
                <Text>My Words</Text>
                <TouchableOpacity
                    // onPress={() => this.props.dispatch({type:'TOOGLE_IS_ADDING'})
                    onPress={() => this.props.myToggleIsAdding()

                    }>
                    <Text> +</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
//connect (mapStateToProps,mapActionToProps)
// export default connect()(Header);
export default connect(null,{ myToggleIsAdding: toggleIsAdding})(Header);
const styles =StyleSheet.create({

    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }

})


