import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'
import userService from '../../services/auth';
import sessionService from '../../config/storage';


class Camera extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            username: '',
            password: '',
            errMsg: '',
            err: false,
        };
      
    }

    render() {

        return (
            <Text>Camera</Text>
        )
    }
}
export default Camera