import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'
import userService from '../../services/auth';
import sessionService from '../../config/storage';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };

    }
    async onButtonPress() {
        console.log('this.description', this.state.description)
        try {

        } catch (e) {

        }

    }
    render() {
        const { description } = this.state;
        return (
            <View style={style.container}>

                <View style={style.formContainer}>
                    <TextInput
                        style={style.formInput}
                        placeholder="Short description"
                        value={description}
                        onChangeText={(text) => { this.setState({ description: text }) }}
                    />
                </View>

                <View style={style.btnContainer}>
                    <View style={style.btnBox}>
                        <TouchableOpacity
                            style={[style.btn, style.btnPurple]}
                            onPress={this.onButtonPress}>
                            <Text style={style.btnText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
export default Description