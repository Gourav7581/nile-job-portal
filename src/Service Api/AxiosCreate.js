import axios from 'axios';
import { BASE_URl } from './BaseUrl';

export let api = axios.create({
    baseURL: BASE_URl,
    headers:{
        'Content-Type':'application/json',
    }
})