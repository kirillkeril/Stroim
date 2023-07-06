import axios from "axios";
import {getRefreshToken} from "@/services/getRefreshToken.ts";

export const httpClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});

httpClient.interceptors.response.use((response) => {
    return response;
}, (config) => {
    const prevReq = config.response;
    if(config.response.status == 400) return Promise.reject(config);
    if(prevReq.status === 401 && !prevReq._isRetry) {
        prevReq._isRetry = true;
        const token = getRefreshToken();
        prevReq.headers.Authorization = `Bearer ${token}`;
        return prevReq;
    }
});
