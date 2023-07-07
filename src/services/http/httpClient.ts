import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'http://ujin.vp-pspu.cf:8000/',
    withCredentials: true,
});
