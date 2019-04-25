import axios from 'axios'
// import { sessionService } from '../sessionService/storage'
// import url from '../environment'

// // Add a request interceptor
// axios.interceptors.request.use((config) => {
//   // Do something with request config
//   // const apiToken = sessionStorage.getItem('token')
//   // config.headers = { 'Custom-Header-IF-Exist': apiToken }
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// Add a response interceptor
axios.interceptors.response.use((response) => {
    console.log('response is ', response)
    // Do something with response data
    return response.data
}, (error) => {
    // Handle response error
    console.log('erorr$$$$$$$$$$$$$$$$$$$$$$$$$$$$', error)

    //   if (error.status === 417) { this._router.navigate(['/user/recovery']); }
    //   if (error.status === 401 || error.status === 403 || error.status === 405) {
    //     // logout user, redirect to login page
    //   //  this._SessionService.destroyAndLogout();
    //     return throwError(error);
    //   }
    //   if (error && error.statusText) { 
    //       console.log('statusTex',error.statusText)
    //   //  this.alertService.error(error.statusText); 
    //   } else { 
    //   //  this.alertService.error('Internal Server Error'); 
    //   }

    return Promise.reject(error)
})

class HttpService {

    async apiRequest(method, apiUrl, body, headers) {
        const url = ''
        // const apiToken = sessionStorage.getSessionToken()
        // if (apiToken) headers = Object.assign({ 'x-access-token': apiToken }, headers)

        if (method === 'get' || method === 'delete') return axios[method](url + apiUrl, { headers })
        else if (method === 'post' || method === 'put') return axios[method](url + apiUrl, body, { headers })
    }

    async outsideRequest(method, url, body, headers) {
        if (method === 'get' || method === 'delete') return axios[method](url, { headers })
        else if (method === 'post' || method === 'put') return axios[method](url, body, { headers })
    }

}
export default new HttpService()