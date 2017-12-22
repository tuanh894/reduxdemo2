import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TextInput,
    TouchableOpacity
} from 'react-native';
import getTemp from '../api/getTemp';
import {connect} from 'react-redux'
import {startFetchData, fetchSuccess, fetchError} from '../redux/actionCreators';
class Main extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    getWeatherMessage() {
        const {error, isLoading, cityName, temp} = this.props;
        if(isLoading){
            return'...Loading'
        }
        if(error){
            return 'Vui lòng thử lại';
        }
        if(!cityName){
            return 'Nhập tên thành phố của bạn!'
        }
        return `${cityName} hiện tại là: ${temp}oC`
    }

    getTempByCityName() {
        const {cityName} = this.state;
        this.props.startFetchData();
        getTemp(this.state.cityName)
            .then(temp => this.props.fetchSuccess(cityName,temp))
            .catch(err => this.props.fetchError)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.messag}>{this.getWeatherMessage()}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.cityName}
                    onChangeText={text => this.setState({cityName: text})}
                />

                <TouchableOpacity style={styles.button}
                                  onPress={this.getTempByCityName.bind(this)}
                >
                    <Text style={styles.buttonText}>Lấy nhiệt độ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


//Tích hợp react-redux


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        alignSelf: "stretch"
    },
    messag: {
        color: 'red',
        fontSize: 25
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        margin: 15,
    },
    buttonText: {
        color: 'white'
    },
    textInput: {
        margin: 10,
        width: 300,
        backgroundColor: 'blue',
        color: 'white',
        paddingHorizontal: 10
    }

});

function mapStateToProps(state) {
    return {
        cityName: state.cityName,
        temp: state.temp,
        err: state.error,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps,{ startFetchData, fetchSuccess, fetchError})(Main);