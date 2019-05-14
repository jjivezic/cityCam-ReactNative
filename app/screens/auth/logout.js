import React from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import sessionService from '../../config/storage';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
        console.log('On press this.props constructor',props)
    }
    async onButtonPress() {
        console.log('On press this.props',this.props)
        try {
            await sessionService.logout()
            this.props.navigation.reset('Home')
        } catch (err) {
            console.log('erorr logout', err)
        }
      
    }
    render() {
        console.log('logout', this.props)
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.onButtonPress()}>
                    <Text style={{color: 'white', fontWeight: 'bold',paddingRight: 5}}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Logout;