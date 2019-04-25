import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/home/home';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Profil from '../screens/profil/profil';
const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        }),
    },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        }),
    },
    Register: {
        screen: Register,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        }),
    },
    Profil: {
        screen: Profil,
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.routeName,
        }),
    }
});



export default createAppContainer(AppNavigator);