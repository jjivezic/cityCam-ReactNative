import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import style from '../../styles/general'
import userService from '../../services/auth';
import sessionService from '../../config/storage';


class Location extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {

        };
      
    }

    render() {

        return (
            <Text>Location</Text>
        )
    }
}
export default Location;