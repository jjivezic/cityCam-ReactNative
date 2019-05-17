import axios from 'axios';
import HttpService from '../config/http';
import sessionService from '../config/storage'
// export const userService = {
//     login
// };
//let url = 'http://10.0.2.2:3000/'; za android emulator
let url = 'http://192.168.15.131:3000/';


class userService {
    async login(user) {
        return HttpService.apiRequest('post', url + 'user/login', user);
    }
    async register(user) {
        return HttpService.apiRequest('post', url + 'user/register', user);
    }
    async  getUploadLink(fileData) {
        console.log(fileData)
        let userid =await sessionService.getUserId()
        console.log('userid',userid)
        return HttpService.apiRequest('post', url + 'file/' + userid  + '/getUploadURL', fileData);
    }
    async uploadImageAmazon(presignedUrl, body) {
        return HttpService.apiRequest('put', presignedUrl, body)
    }
}
export default new userService()


