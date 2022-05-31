import axios from 'axios';
import { Config } from './Config';

var configData = Config();
const axiosInstance = axios.create(configData);


// axiosInstance.interceptors.response.use(
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);
export default axiosInstance;
