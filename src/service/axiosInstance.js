import axios from "axios";

const API_BSE_URL = "https://api.rimoned.com/api/pharmacy-management/v1/";

export const axiosPublic = axios.create({
    baseURL: API_BSE_URL,
    timeout: 6000
}); 

export const axiosPrivate = axios.create({
    baseURL: API_BSE_URL,
    timeout: 6000
}); 

export const setPrivateHeaders = () => {
    axiosPrivate.defaults.headers.common["authorization"] = 
    localStorage.getItem("accessToken");
};

