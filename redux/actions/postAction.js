import * as types from '../types'
import {getPosts} from "../../services/api";

export const fetchposts = () => async dispatch => {
    const res = await getPosts();
    dispatch({
        type:types.GET_POSTS,
        payload:res
    })
};