import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'
import userService from '../../services/auth';

class Register extends React.Component {
    static navigationOptions = {
        title: 'Register',
        /* No more header config here! */
      };
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            userName: '',
            email:'',
            password: '',
            errMsg: '',
            err: false,
         
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }


    async onButtonPress() {
        console.log('Handle change', this.state)

        try {
            const user = {
                username: this.state.username,
                password: this.state.password,
                email:this.state.email
            }

            console.log('user', user);

            const response = await userService.register(user)
            console.log('Response data', response)
            this.props.navigation.navigate('Login')
            // if (userLoged) {
            //     console.log('ulogovan', userLoged)
            //     this.props.navigation.navigate('Profil')
            // }
        } catch (e) {
            this.setState({
                err: true,
                errMsg: e.response.data.error.message
            })
        }
    }
    
    render() {
        const { username, password,email , errMsg, err} = this.state;
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