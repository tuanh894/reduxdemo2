import React from "react";
import {View} from 'react-native';
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
    H1,
    Thumbnail
} from "native-base";
import {TouchableOpacity, StyleSheet} from 'react-native';

export default class ShowProfile extends React.Component {
    render() {
        return (
            <View>
                <View style = {styles.headerInfo} >
                    <Text style={styles.textHeaderInfo}>lexnguyen</Text>
                    <Text style={styles.textHeaderInfo1}>Email@gmail.com </Text>
                </View>
                <View>
                    <List>
                        <ListItem style={styles.listInfo}>
                            <Text> Nguyen Duc Tho</Text>
                        </ListItem>
                        <ListItem style={styles.listInfo}>
                            <Text> Tài khoản Học sinh</Text>
                        </ListItem>

                        <ListItem style={styles.listInfo}>
                            <Text> Nam</Text>
                        </ListItem>

                        <ListItem style={styles.listInfo}>
                            <Text> 09876543212</Text>
                        </ListItem>

                        <ListItem style={styles.listInfo}>
                            <Text> 20/11/2000</Text>
                        </ListItem>

                        <View style = {styles.address}>
                            <View style={styles.address1}>
                                <Text > Hà nội</Text>
                            </View>
                            <View style={styles.address2}>
                                <Text > Cầu giấy</Text>
                            </View>
                        </View>

                        <ListItem style={styles.listInfo}>
                            <Text> PTTH Yên Hòa</Text>
                        </ListItem>
                    </List>
                </View>
                <View style = {styles.buttonInfo}>
                    <View >
                        <Button primary style={styles.button}
                            onPress={() => this.props.navigation.navigate("UpdateProfile")}
                        >
                            <Text>Sửa Thông Tin</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    listInfo: {
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 5,
        marginLeft: 5,
        paddingLeft: 10,
        marginBottom: 6,
        borderColor: '#a3a3a3',
    },
    headerInfo: {
        backgroundColor: '#3373d9',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeaderInfo: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    },
    textHeaderInfo1: {
        fontSize: 17
    },

    aboutInfo: {
        padding: 10,
    },
    textAboutInfo: {
        color: '#e47d01',
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#a3a3a3',

    },
    buttonInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    button: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#063f77'
    },
    address: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 6
    },
    address1: {
        flex: 1,
        // width:'45%',
        paddingTop: 11,
        marginRight: 3,
        paddingBottom: 11,
        borderColor: '#a3a3a3',
        // borderRightRadius: 10,
        borderWidth: 1,
        borderRadius: 10,
        // justifyContent:'center',
        // alignItems: 'center'
    },
    inputName: {
        textAlign: 'center',
    },
    address2: {
        flex: 1,
        // width:'45%',
        paddingTop: 11,
        // marginRight:3,
        paddingBottom: 11,
        borderColor: '#a3a3a3',
        // borderRightRadius: 10,
        borderWidth: 1,
        // textAlign:'center',
        borderRadius: 10,
        // justifyContent:'center',
        // alignItems: 'center'
    },
    footer: {
        backgroundColor: '#fff',
        borderTopColor: '#fff'
    },
    textWallet: {
        color: '#f55114',
        fontWeight: 'bold'
    },
    content: {
        padding: 10,
    },
    textWalletinput: {
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 10
    },
    walletBox: {
        flex: 1,
        flexDirection: 'row'
    },
    walletBoxLeft: {
        flex: 4
    },
    walletBoxRight: {
        flex: 1,
        padding: 10
    },
    walletButton: {
        backgroundColor: '#063f77'
    },
    // datePicker: {
    //     flex: 1,
    //     borderRadius: 10,
    //     borderColor: '#a3a3a3',
    // },
    //Edit Profile
    viewData:{
        flex:1,
        flexDirection:'row',
        marginRight: 5,
        marginLeft: 5,
    },
    viewDataDetail:{
        width:'50%',
        borderRadius:10,
        borderWidth:1,
        borderColor: '#a3a3a3',
        marginRight: 5,
        // padding:5,
        // justifyContent:'center',
        //  alignItems: 'center'
    },
    viewDataDet:{
        flex:2,
        borderRadius:10,
        borderWidth:1,
        borderColor: '#a3a3a3',
        // justifyContent:'center',
        // alignItems: 'center'
    },

    pickerView:{
        alignSelf: 'stretch',
        borderRadius:0
    },
    inputForm: {
        margin: 5,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderRadius:10,
        borderWidth:1,
        borderColor: '#a3a3a3',
    },

    inputFormPicker:{
        margin: 5,
        marginBottom: 0,
        // padding: 20,
        // paddingBottom: 10,
        alignSelf: 'stretch',
        borderRadius:10,
        borderWidth:1,
        borderColor: '#a3a3a3',
    },
});

