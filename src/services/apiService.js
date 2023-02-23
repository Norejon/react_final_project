import axios from "axios";

import {baseURL} from "../configs/urls";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTcxMWRhZmQ5MDM5MTg5MTc1NGIwNTI2MjgxMTRkOSIsInN1YiI6IjYzZjBjYzMwMTUzNzZjMDA5NWIxM2M3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RL1WZXxu6pSpJFf7_1f14E2-iXByAdfjb57rAN-Jr3c';
    return config;
})

export {
    apiService
}