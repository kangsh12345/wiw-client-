import {
    LOGIN_USER,
    LOGOUT_USER,
    SHOWCHANGE,
    POPUPIN,
    POPUPOUT,
} from '../_actions/types';

 
export default function (state={}, action) {
    switch(action.type) {
        case LOGIN_USER:
           return {loginSuccess: action.payload}

        case LOGOUT_USER:
            return {loginSuccess: action.payload }

        case SHOWCHANGE:
            return {...state, loginSuccess: {
                result: action.payload.result,
                UserInfo: {
                    ...state.loginSuccess.UserInfo,
                    show: action.show
                }
            }}

        case POPUPIN:
            return {...state, loginSuccess: {
                result: action.payload.result,
                UserInfo: {
                    ...state.loginSuccess.UserInfo,
                    classroom: action.classroom,
                    active: action.active
                }
            }}

        case POPUPOUT:
            return {...state, loginSuccess: {
                result: action.payload.result,
                UserInfo: {
                    ...state.loginSuccess.UserInfo,
                    classroom: action.classroom,
                    active: action.active
                }
            }}
           
       default:
           return state;
           
    }
}