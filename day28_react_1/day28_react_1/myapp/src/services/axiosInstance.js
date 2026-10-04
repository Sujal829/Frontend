import axios from 'axios';
import { getAccessToken } from '../utlis/helpers';

const baseURL = 'https://dummyjson.com';

export const axiosAuth = axios.create({baseURL, timeout: 10000});

export const api = axios.create({
    baseURL,
    timeout: 10000
});

let isRefreshing = false;
let failedQueue = [];

const processQueue =(error, token= null)=>{
    failedQueue.forEach(prom=>{
        if(error) prom.reject(error);
        else prom.resolve(token);
    })
    failedQueue=[];
}

api.interceptors.request.use(
    config => {
        const token = getAccessToken();
        if(token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    }
)

api.interceptors.response.use(
    response=> response.data,
    async error => {
        const originalRequest = error.config;

        if (!error.response) {
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            if(isRefreshing){
                return new Promise((res, rej)=>{
                    failedQueue.push({res, rej})
                }).then(token=>{
                    originalRequest.header['Authorization'] = `Bearer ${token}`;
                    return api(originalRequest)
                }).catch(err => Promise.reject(err))
            }

            isRefreshing = true;
            try {
                // refresh token and set new access token
            } catch (error) {
                
            }
        }
    }
)