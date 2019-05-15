import React from "react";

import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from "react-navigation";
import { Button, TouchableOpacity, Text } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/home';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Profil from '../screens/profil/profil';
import Logout from '../screens/auth/logout';
import AuthLoadingScreen from '../screens/auth/authLoading';
import Camera from "../screens/camera/camera";
import Location from "../screens/location/location";
import Description from "../screens/description/description";


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

// const AppNavigator = createStackNavigator(
//     {
//         Home: HomeScreen,
//         Login: Login,
//         Register: Register,
//         Profil: Profil,
//         Logout: Logout,
//         Camera: Camera,
//         Location: Location,
//         Description: Description
//     },
//     {
//         initialRouteName: "Home",
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#de5447',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     }
// );

const TabStack1 = createStackNavigator({
    Camera: Camera,

}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#de5447',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });

const TabStack2 = createStackNavigator({
    Location: {screen: Location},
    Description: {screen:Description},

});

const AppTabNavigator = createBottomTabNavigator({
    // tab1: TabStack1,
    tab1: TabStack2,

})
const AppNavigator1 = createStackNavigator(
    {

        Profil: {
            screen: Profil,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.routeName,
            }),
        },
        Logout: {
            screen: Logout
        },
        Camera: {
            screen: Camera,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.routeName,
            }),
        },
        Location: {
            screen: Location,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.routeName,
            }),
        },
        Description: {
            screen: Description,
            navigationOptions: ({ navigation }) => ({
                title: navigation.state.routeName,
            }),
        },
        Tabs: { screen: 'TabStack2' }

    },
    {
        initialRouteName: "Tabs",
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
const AuthNavigator = createStackNavigator(
    {

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





const AppStack = createStackNavigator({
    Profil: Profil,
    Logout: Logout,
    Camera: Camera,
    Location: Location,
    Description: Description,


}, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#de5447',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    });


const AuthStack = createStackNavigator({
    Home: HomeScreen,
    Login: Login,
    Register: Register
});

const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
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