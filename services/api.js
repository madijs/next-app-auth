import axios from 'axios';
import {useRouter} from "next/router";

export const getPosts = () => {
    return axios.get(`${process.env.API_URL}/posts`)
        .then(res => res.data);
}

export const logIn = (username,password) => {
    if(username === "Admin" && password === "12345"){
        return true
    }else{
        return false
    }
}