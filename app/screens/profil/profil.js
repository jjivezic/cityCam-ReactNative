import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import style from '../../styles/general'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {};
        // this.goToLoginPage = this.goToLoginPage.bind(this);
        // this.goToRegisterPage = this.goToRegisterPage.bind(this);
    }

    // goToLoginPage() {
    //     this.props.navigation.navigate('Login')
    // }
    // goToRegisterPage() {
    //     this.props.navigation.navigate('Register')
    // }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}> Dashboard </Text>
            </View>
        );
    }
}
export default Dashboard;