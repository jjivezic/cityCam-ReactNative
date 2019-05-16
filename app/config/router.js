import React from "react";

import {
    createStackNavigator, createAppContainer, createSwitchNavigator,
    createBottomTabNavigator, createDrawerNavigator
} from "react-navigation";
import { Button, TouchableOpacity, Text } from "react-native";

import HomeScreen from '../screens/home/home';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Profil from '../screens/profil/profil';
import Logout from '../screens/auth/logout';
import AuthLoadingScreen from '../screens/auth/authLoading';
import Camera from "../screens/camera/camera";
import Location from "../screens/location/location";
import Description from "../screens/description/description";
import User from "../screens/user/user";
import Images from "../screens/images/images";


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

//==================================================================================

// Router without Tab
// const UnauthorizedStack = createStackNavigator({
//     Profil: Profil,
//     Logout: Logout,
//     Camera: Camera,
//     Location: Location,
//     Description: Description,


// }, {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#de5447',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//     });


const tab1 = createStackNavigator({
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

const tab2 = createStackNavigator({
    User: User
}, {
        //configuration options...
    });


//Router with Tab
// If user is authorized see this pages with tabs
const AppTabNavigator = createBottomTabNavigator({
    Profile: tab1,
    User: tab2,
}, {

        navigationOptions: ({ navigation }) => ({
            //define the icon for each tab here...
        }),
        tabBarOptions: {
            initialRouteName: 'Profil',
            activeTintColor: '#de5447',
            inactiveTintColor: '#ddd',
            style: {
                backgroundColor: '#4d535e',
            },
            labelStyle: {
                fontWeight: 'bold',
                fontSize: 13,

            },
            tabStyle: {
                borderWidth: 0.3,
                borderColor: '#605F60',
                justifyContent: 'center',

            },
            showIcon: false//dont show icons
        },

    });

// If user is unauthorized see this pages
const UnauthorizedStack = createStackNavigator({
    Home: HomeScreen,
    Login: Login,
    Register: Register
},
    // {
    //     defaultNavigationOptions: {
    //         headerStyle: {
    //             backgroundColor: '#de5447',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //             fontWeight: 'bold',
    //         },
    //     },
    // }
    );

const AppDrawerNavigator = createDrawerNavigator({
    AppTabNavigator: AppTabNavigator,
    Images: Images,
    Location: Location,
});


const AppNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppDrawerNavigator,
        Auth: UnauthorizedStack,
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