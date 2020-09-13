import axios from 'axios';

export const getPosts = () => {
    return axios.get(`${process.env.API_URL}/posts`)
        .then(res => res.data);
}