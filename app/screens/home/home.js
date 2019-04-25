import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import style from '../../styles/general'

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {};
        this.goToLoginPage = this.goToLoginPage.bind(this);
        this.goToRegisterPage = this.goToRegisterPage.bind(this);
    }

    goToLoginPage() {
        this.props.navigation.navigate('Login')
    }
    goToRegisterPage() {
        this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}> Cordiaca App </Text>
                <View style={style.btnContainer}>
                    <View style={style.btnBox}>
                        <TouchableOpacity
                            style={[style.btn, style.btnPurple]}
                            onPress={this.goToLoginPage}
                        >
                            <Text style={style.btnText}> Login </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.btnBox}>
                        <TouchableOpacity
                            style={[style.btn, style.btnBlue]}
                            onPress={this.goToRegisterPage}
                        >
                            <Text style={style.btnText}> Register </Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>
        );
    }
}
export default HomeScreen;