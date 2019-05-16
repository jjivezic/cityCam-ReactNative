import React from "react";
import { View, Text, Button, TouchableOpacity, ImageBackground } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

import style from '../../styles/general';
import Logout from '../auth/logout';
import NavigationDrawerStructure from '../../config/drawerRouter'
const camera = require('../../images/camera.png');
const location = require('../../images/location.png');
const description = require('../../images/description.png');
const arrow = require('../../images/arrow.png');



class Dashboard extends React.Component {
    static navigationOptions = ({ navigation }) => {
        console.log('navigation Dashboard',navigation)
        return {
            // title: 'Profil',
            headerTitle: 'Dashboard',
            headerRight: (<Logout navigation={navigation} />),
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

        };
    }

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        };
        // this.goToLoginPage = this.goToLoginPage.bind(this);
        // this.goToRegisterPage = this.goToRegisterPage.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
        // this.resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'Home' })],
        //   });
    }

    // goToLoginPage() {
    //     this.props.navigation.navigate('Login')
    // }
    // goToRegisterPage() {
    //     this.props.navigation.navigate('Register')
    // }
    onButtonPress(item) {

        console.log('Camera button pressed', item)

        if (item === 'camera') {
            // this.props.navigation.dispatch(this.resetAction)
            this.props.navigation.navigate('Location')
        } else if (item === 'location') {
            this.props.navigation.navigate('Location')
        } else if (item === 'description') {
            this.props.navigation.navigate('Description')
        }

    }
    render() {
        console.log('Profile', this.props)
        return (
            <View style={style.container}>
                <View style={style.features}>
                    <View style={style.featuresItem}>

                        <View style={style.imgBox}>
                            <TouchableOpacity
                                // disabled={true}
                                onPress={() => this.onButtonPress('camera')}>
                                <ImageBackground source={camera} style={style.iconImg}>
                                    <Text style={style.titleIcon}> Camera </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>


                    </View>
                    <View style={style.featuresItem}>
                        <View style={style.imgBox}>
                            <TouchableOpacity
                                // disabled={true}
                                onPress={() => this.onButtonPress('location')}>
                                <ImageBackground source={location} style={style.iconImg}>
                                    <Text style={style.titleIcon}> Location </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={style.featuresItem}>
                        <View style={style.imgBox}>
                            <TouchableOpacity
                                // disabled={true}
                                onPress={() => this.onButtonPress('description')}>
                                <ImageBackground source={description} style={style.iconImg}>
                                    <Text style={style.titleIcon}> Description </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={style.featuresItem}>
                        <View style={style.imgBox}>
                            <TouchableOpacity
                                // disabled={true}
                                onPress={() => this.onButtonPress('send')}>
                                <ImageBackground source={arrow} style={style.iconImg}>
                                    <Text style={style.titleIcon}> Send </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>



            </View>
        );
    }
}
export default Dashboard;