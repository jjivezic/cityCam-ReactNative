import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import AppNavigator from './app/config/router'

class App extends React.Component {
  render(){
    return <AppNavigator/>
  }
}
export default App;