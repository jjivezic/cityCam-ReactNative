import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Button, ImageBackground } from "react-native";
import ImagePicker from 'react-native-image-picker';
import userService from '../../services/auth';
const camera = require('../../images/cameraShoot.png');
class Camera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pickedImage: null,
      file: '',
      url: '',
      fileExt: '',
      fileName: ''
    }
    this.pickImageHandler = this.pickImageHandler.bind(this);
    this.getUploadLink = this.getUploadLink.bind(this);
  }


  reset = () => {
    this.setState({
      pickedImage: null,
      url: '',

    });
  }
  componentDidMount() {
    console.log('componentDidMount camera')
  }

  async UploadToAmazon() {
    console.log('called UploadToAmazon', this.state.file)
    let source = {
      path: this.state.file.path,
      data: this.state.file.data,
      name: this.state.fileName,
      extension: this.state.fileExt
    };
    console.log('source', source)
    const response = await userService.uploadImageAmazon(this.state.url, source)
    console.log('source response', response)
  }

  async getUploadLink() {
    try {
      console.log('file', this.state.file)
      // let id = await sessionService.getUserId()
      // console.log('userLoged', id)
      let fileData = this.state.file.fileName;
      let dotIndex = fileData.lastIndexOf(".");
      let fileName = fileData.slice(0, dotIndex);
      let fileExt = fileData.slice(dotIndex + 1);
      let data = {
        file: fileName,
        ext: fileExt
      }
      console.log('file data', data)

      const response = await userService.getUploadLink(data)
      console.log('file datavresponse', response)
      this.setState({
        url: response.url,
        fileName: fileName,
        fileExt: fileExt
      });
      this.UploadToAmazon()
    } catch (e) {
      console.log('err geting upload Link', e.response)
    }
  }

  // async onButtonPress() {

  //   try {
  //       const user = {
  //           username: this.state.username,
  //           password: this.state.password
  //       }

  //       const response = await userService.login(user)

  //       //await sessionService.storeData(response.user.token)

  //       let userLoged = await sessionService.getUser()
  //       console.log('userLoged', userLoged)


  //       if (userLoged) {
  //           this.props.navigation.navigate('Profil')
  //       }
  //   } catch (e) {
  //       this.setState({
  //           err: true,
  //           errMsg: e.response.data.error.message
  //       })
  //   }

  // }
  pickImageHandler() {
    ImagePicker.showImagePicker({ title: "Pick an Image", maxWidth: 800, maxHeight: 600 }, res => {
      console.log('Response camera', res)

      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        // await getUploadLink(file)
        this.setState({
          pickedImage: { uri: res.uri },
          file: res
        });

      }
    });
    console.log('Response thid111', this)
  }

  resetHandler = () => {
    this.reset();
  }

  render() {
    const { pickedImage } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Pick Image From Camera and Gallery </Text>
        {pickedImage ?
          <View style={styles.imagePlaceholder}>
            <Image source={this.state.pickedImage} style={styles.previewImage} />
          </View> :
          <TouchableOpacity
            // disabled={true}
            onPress={this.pickImageHandler}>
            <ImageBackground source={camera} style={styles.iconImg}>
            </ImageBackground>
          </TouchableOpacity>
        }
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.resetHandler}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnLg]}
            onPress={this.getUploadLink}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 22,
    color: '#bfc2c5',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',


  },
  imagePlaceholder: {
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#eee",
    width: '100%',
    height: '60%',
  },
  btn: {
    width: 100,
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 5,

  },
  btnLg: {
    backgroundColor: '#616161',
    color: 'white',
  },
  btnText: {
    textAlign: 'center',
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  iconImg: {
    // flex: 1,
    width: 150,
    height: 150,

    margin: 5,
  },
});
export default Camera