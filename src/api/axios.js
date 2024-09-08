import axios from "axios";
import {API_URL, API_URL_BINARY} from "../config";

const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const instance_binary = axios.create({
    baseURL: API_URL_BINARY,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export {instance, instance_binary};