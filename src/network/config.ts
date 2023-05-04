import Environment from './baseUrl';
import axios, { Axios } from 'axios';

interface Values  {
    url: string,
    token: any,
    data: string,
  }
 
  
interface AuthOptions  {
    method: Method,
    data?: any,
    headers: any,

  }
 
  type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

  const getHeaders = async ({token}:Values) => {
    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
    else {
        return {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization':  Environment.BasicToken,
        }
    }
}
let authOptions: AuthOptions = {
    method: 'GET',
    data: null,
    headers:  getHeaders,
    // timeout: 500
};
export const doGet = async ({url, token, data} : Values)   => {
    authOptions.headers =  getHeaders(token);
    authOptions.method = "GET"
    authOptions.data = null
    return axios(Environment.API_BASE_URL + url, authOptions);
}


export const doPost = async ({url, data, token} : Values) => {
    authOptions.method = 'POST';
    authOptions.data = data;
    authOptions.headers = await getHeaders(token)
    return axios(Environment.API_BASE_URL + url, authOptions)
}