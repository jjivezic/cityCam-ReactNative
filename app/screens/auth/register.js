import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'

class Register extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            userName: '',
            email:'',
            password: ''
         
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        console.log('Handle change', this.state)
    }
    render() {
        const { userName, password,email } = this.state;
        return (
            <View style={style.container}>

                <View style={style.formContainer}>
                    <TextInput
                        style={style.formInput}
                        placeholder="Your username"
                        value={userName}
                        onChangeText={(text) => { this.setState({ userName: text }) }}
                    />
                    <TextInput
                        style={style.formInput}
                        placeholder="Your email"
                        value={email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                    />
                    <TextInput
                        style={style.formInput}
                        placeholder="Your password"
                        value={password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                    />
                </View>
                <View style={style.btnContainer}>
                    <View style={style.btnBox}>
                        <TouchableOpacity
                            style={[style.btn, style.btnPurple]}
                            onPress={this.onButtonPress}>
                            <Text style={style.btnText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Register;