import * as types from '../types'

const initialState = {
    status: '',
    token: false,
    error: null,
    username: '',
    password: ''
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                status: 'pending',
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                status: 'success',
                error: null,
                token: action.payload,
                username: '',
                password: ''
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                status: 'failed',
                error: action.payload.error,
                token: action.payload.bool,
            }
        case types.UPDATE_USERNAME:
            return {
                ...state,
                status: 'updating username...',
                username: action.payload
            }
        case types.UPDATE_PASSWORD:
            return {
                ...state,
                status: 'updating password...',
                password: action.payload
            }
        case types.LOGOUT_STARTED:
            return {
                ...state,
                status: 'logout pending...',
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                status: 'logout success',
            }
        default:
            return {
                ...state,
            }
    }
}
