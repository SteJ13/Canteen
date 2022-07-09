import axios from 'axios';
import { Config } from './Config';

var configData = Config();
const axiosInstance = axios.create(configData);


// axiosInstance.interceptors.response.use(
axiosInstance.interceptors.response.use(
    response => {
        if (response && response.data && response.data.result && response.data.result.status === 401) {
            // return Promise.reject("Session Expired! Login Again");
            window.location.href = "/";
            localStorage.clear();
            return Promise.reject("Session Expired! Login Again");
        }
        if (response && response.data && response.data.error) {
            return Promise.reject(response && response.data && response.data.error && response.data.error.message && response.data.error.message.replace(/None/g, ""));
        }
        else if (response && response.data && response.data.result && response.data.result.status !== 200)
            return Promise.reject(response && response.data && response.data.result && response.data.result.message && response.data.result.message.replace(/None/g, ""));
        return response && response.data && response.data.result
    },
    error => {
        return Promise.reject(error);
    }
);
export default axiosInstance;
