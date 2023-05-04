
 export default class User {
    constructor() {
       (this as any)._token = '', 
       (this as any)._id = ''
    }
    setToken(token:any) {
        (this as any)._token = token
    }
    getToken() {
        if ((this as any)._token) {
            return (this as any)._token
        }
    }
}
