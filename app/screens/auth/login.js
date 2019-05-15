import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'
import userService from '../../services/auth';
import sessionService from '../../config/storage';


class Login extends React.Component {
    static navigationOptions = {
        title: 'Sign In'
    };

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            username: '',
            password: '',
            errMsg: '',
            err: false,
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    async onButtonPress() {

        try {
            const user = {
                username: this.state.username,
                password: this.state.password
            }

            const response = await userService.login(user)

            await sessionService.storeData(response.user.token)

            let userLoged = await sessionService.getUser()
            console.log('userLoged', userLoged)


            if (userLoged) {
                this.props.navigation.navigate('Profil')
            }
        } catch (e) {
            this.setState({
                err: true,
                errMsg: e.response.data.error.message
            })
        }

    }
    render() {
        const { username, password, errMsg, err } = this.state;
        return (
            <View style={style.container}>

                <View style={style.formContainer}>
                    <TextInput
                        style={style.formInput}
                        placeholder="Your username"
                        value={username}
                        onChangeText={(text) => { this.setState({ username: text }) }}
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
                {err ? <View style={style.errMsgBox}>
                    <Text style={style.errMsg}>{errMsg}</Text>
                </View> : null}
            </View>
        );
    }
}
export default Login;