import React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import sessionService from '../../config/storage';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);

    }
    async onButtonPress() {
        console.log('On press this.props',this.props)
        try {
            await sessionService.logout()
            this.props.navigation.navigate('Home')
        } catch (err) {
        }
        console.log('erorr logout', err)
    }
    render() {
        return (
            <View>

                <Text>Logout</Text>
                <TouchableOpacity
                    onPress={this.onButtonPress}>
                    <Text >Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Logout;