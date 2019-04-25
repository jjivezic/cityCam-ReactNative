import axios from 'axios';
import HttpService from '../config/http'
// export const userService = {
//     login
// };
let url = 'http://10.0.2.2:3000/';

class userService {
  async login(user) {
        console.log('url', url)
        return HttpService.apiRequest('post', url + 'user/login', user);
    }
}
export default new userService()