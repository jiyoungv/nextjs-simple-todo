import shortid from 'shortid';
import produce from 'immer';

/*
 * state
 */
const initialState = {
    me: null,
    joinRequest: false,
    joinSuccess: false,
    joinFailure: null,    
    loginRequest: false,
    loginSuccess: false,
    loginFailure: null,
    logoutRequest: false,
    logoutSuccess: false,
    logoutFailure: null,    
    changeNicknameRequest: false,
    changeNicknameSuccess: false,
    changeNicknameFailure: null,    
};

/*
 * types
 */
export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const JOIN_FAILURE = 'JOIN_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

/*
 * actions
 */
export const join = data => ({
    type: JOIN_REQUEST,
    data,
});

export const login = data => ({
    type: LOGIN_REQUEST,
    data,
});

export const logout = {
    type: LOGOUT_REQUEST,
};

export const changeNickname = data => ({
    type: CHANGE_NICKNAME_REQUEST,
    data,
});

/*
 * reducer
 */
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type) {
        // JOIN
        case JOIN_REQUEST:
            draft.joinRequest = true;
            draft.joinSuccess = false;
            draft.joinFailure = null;            
            break;
        case JOIN_SUCCESS:
            draft.joinRequest = false;
            draft.joinSuccess = true;
            break;
        case JOIN_FAILURE:
            draft.joinRequest = false;
            draft.joinFailure = true;
            break; 
        // LOGIN
        case LOGIN_REQUEST:
            draft.loginRequest = true;
            draft.loginSuccess = false;
            draft.loginFailure = null;            
            break;
        case LOGIN_SUCCESS:
            draft.me = action.data;
            draft.loginRequest = false;
            draft.loginSuccess = true;
            break;
        case LOGIN_FAILURE:
            draft.loginRequest = false;
            draft.loginFailure = true;
            break; 
        // LOGOUT
        case LOGOUT_REQUEST:
            draft.logoutRequest = true;
            draft.logoutSuccess = false;
            draft.logoutFailure = null;            
            break;
        case LOGOUT_SUCCESS:
            draft.me = null;
            draft.logoutRequest = false;
            draft.logoutSuccess = true;
            break;
        case LOGOUT_FAILURE:
            draft.logoutRequest = false;
            draft.logoutFailure = true;
            break;             
        // CHANGE_NICKNAME
        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameRequest = true;
            draft.changeNicknameSuccess = false;
            draft.changeNicknameFailure = null;            
            break;
        case CHANGE_NICKNAME_SUCCESS:
            draft.me.nickname = action.data;
            draft.changeNicknameRequest = false;
            draft.changeNicknameSuccess = true;
            break;
        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameRequest = false;
            draft.changeNicknameFailure = true;
            break;                                
        default:
            break;
    }
});

export default reducer;

