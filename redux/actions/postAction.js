import * as types from '../types'
import {getPosts} from "../../services/api";

export const fetchposts = () => async dispatch => {
    dispatch({
        type:types.FETCH_POSTS,
    });
    await getPosts().then(res => {
        dispatch({
            type: types.FETCH_POSTS_SUCCESS,
            payload: res
        })
    }).catch((error) => {
        dispatch({
            type: types.FETCH_POSTS_ERROR,
            payload: {
                error
            }
        })
    })
};