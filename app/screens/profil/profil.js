import React from "react";
import { View, Text, Button, TouchableOpacity, ImageBackground } from "react-native";
import style from '../../styles/general'
import Logout from '../auth/logout'
const camera = require('../../images/camera.png')
const location = require('../../images/location.png')
const description = require('../../images/description.png')
const arrow = require('../../images/arrow.png')
class Dashboard extends React.Component {
    static navigationOptions =({ navigation }) => {
    return {
        title: 'Profil',
        headerRight: (<Logout navigation={navigation} />)
        
    };
}

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
    console.log('Profile', this.props)
    return (
        <View style={style.container}>
            <View style={style.features}>
                <View style={style.featuresItem}>
                    <View style={style.imgBox}>
                        <ImageBackground source={camera} style={style.iconImg}>
                            <Text style={style.titleIcon}> Camera </Text>
                        </ImageBackground>

                    </View>
                </View>
                <View style={style.featuresItem}>
                    <View style={style.imgBox}>
                        <ImageBackground source={location} style={style.iconImg}>
                            <Text style={style.titleIcon}> Location </Text>
                        </ImageBackground>
                    </View>

                </View>

                <View style={style.featuresItem}>
                    <View style={style.imgBox}>
                        <ImageBackground source={description} style={style.iconImg}>
                            <Text style={style.titleIcon}> Description </Text>
                        </ImageBackground>

                    </View>

                </View>
                <View style={style.featuresItem}>
                    <View style={style.imgBox}>
                        <ImageBackground source={arrow} style={style.iconImg}>
                            <Text style={style.titleIcon}> Send </Text>
                        </ImageBackground>
                    </View>

                </View>
            </View>



        </View>
    );
}
}
export default Dashboard;