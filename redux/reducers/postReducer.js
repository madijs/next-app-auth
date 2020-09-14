import * as types from '../types'

const initialState = {
    posts:[],
    status:'',
    error: null,
};

export const postReducer = (state = initialState,action)=>{
    switch (action.type) {
        case types.FETCH_POSTS:
            return{
                ...state,
                status: 'pending'
            };
        case types.FETCH_POSTS_SUCCESS:
            return{
                ...state,
                status: 'success',
                error: null,
                posts: action.payload
            };
        case types.FETCH_POSTS_ERROR:
            return{
                ...state,
                status: 'error',
                error: action.payload.error,
            };
        default:
            return {
                ...state
            };
    }
}