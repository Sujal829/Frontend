// Create instance
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000
});

//request interceptor
axiosInstance.interceptors.request.use(
    (config)=> {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error =>{
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response=> {
        response.data
    },
    error => {
        const code = error.response.status;
        const originalRequest = error.config;
        // originalRequest._retry
        if(code === 401){
            localStorage.removeItem('token');
            //logout
        }
        if(code === 404){
            alert('Bad request to the server')
        }
        if (code === 500) {
            console.log('Server error, please try later!');
        }
        if (!error.response) {
            console.log('Network error!');
        }

        return  Promise.reject(error)
    }
)

export default axiosInstance;