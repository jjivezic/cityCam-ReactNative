import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import style from '../../styles/general'
import sessionService from '../../config/storage';
class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            //    backgroundColor: '#ffa89f',
        },
        headerTintColor: '#de5447',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            authetificated: null
        };
        this.goToLoginPage = this.goToLoginPage.bind(this);
        this.goToRegisterPage = this.goToRegisterPage.bind(this);
        this.goToProfilPage = this.goToProfilPage.bind(this);
    }

    componentDidMount() {
       alert('COMPONENT DID MOUNT')
        this.checkIfIsAuthenticated();
    }
    componentWillUnmount() {
        alert('COMPONENT WILL UNMOUNT')
      }
    async checkIfIsAuthenticated() {
        try {
            let user = await sessionService.getUser()
            this.setState({
                authetificated: user
            })
            if (user) {
                this.props.navigation.navigate('Profil')
            } else {
                this.props.navigation.navigate('Home')
            }

        } catch (err) {
            console.log('erorr checkIfIsAuthenticated', err)
        }
    }
    goToLoginPage() {
        this.props.navigation.navigate('Login')
    }
    goToRegisterPage() {
        this.props.navigation.navigate('Register')
    }
    goToProfilPage() {
        this.props.navigation.navigate('Profil')


    }
    render() {
        const { authetificated } = this.state;
        return (
            <View style={style.container}>
                <Text style={style.title}> Cordiaca App </Text>
                {!authetificated ?
                    <View style={style.btnContainer}>
                        <View style={style.btnBox}>
                            <TouchableOpacity
                                style={[style.btn, style.btnPurple]}
                                onPress={this.goToLoginPage}
                            >
                                <Text style={style.btnText}> Login </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.btnBox}>
                            <TouchableOpacity
                                style={[style.btn, style.btnBlue]}
                                onPress={this.goToRegisterPage}
                            >
                                <Text style={style.btnText}> Register </Text>
                            </TouchableOpacity>
                        </View>

                    </View> : <View>
                        <View style={style.btnBox}>
                            <TouchableOpacity
                                style={[style.btn, style.btnBlue]}
                                onPress={this.goToProfilPage}
                            >
                                <Text style={style.btnText}> Back to profil page </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }


            </View>
        );
    }
}
export default HomeScreen;