import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button, TouchableOpacity, Text } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/home';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Profil from '../screens/profil/profil';
import Logout from '../screens/auth/logout';



// const AppNavigator = createStackNavigator(
//     {

//         Home: {
//             screen: HomeScreen,
//             navigationOptions: ({ navigation }) => ({
//                 title: navigation.state.routeName,
//             }),
//         },
//         Login: {
//             screen: Login,
//             navigationOptions: ({ navigation }) => ({
//                 title: navigation.state.routeName,
//             }),
//         },
//         Register: {
//             screen: Register,
//             navigationOptions: ({ navigation }) => ({
//                 title: navigation.state.routeName,
//             }),
//         },
//         Profil: {
//             screen: Profil,
//             navigationOptions: ({ navigation }) => ({
//                 title: navigation.state.routeName,
//                 headerRight: (
//                     <Logout />
//                 )
//             }),

//         }
//     },

//     {
//         initialRouteName: "Home"
//     }
// );
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Login: Login,
        Register: Register,
        Profil: Profil,
        Logout:  Logout
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#de5447',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


export default createAppContainer(AppNavigator);