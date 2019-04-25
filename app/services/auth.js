import axios from 'axios';
import HttpService from '../config/http'
// export const userService = {
//     login
// };
let url = 'http://10.0.2.2:3000/';

class userService {
  async login(user) {
        return HttpService.apiRequest('post', url + 'user/login', user);
    }
    async register(user) {
        return HttpService.apiRequest('post', url + 'user/register', user);
    }
}
export default new userService()