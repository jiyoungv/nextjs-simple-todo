import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    JOIN_REQUEST, JOIN_SUCCESS, JOIN_FAILURE,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE,
} from '../reducers/user';

/* 
 * api
 */
function joinApi (data) {
    return axios.post('/user/join', data);
}
function loginApi (data) {
    return axios.post('/user/login', data);
}
function logoutApi () {
    return axios.delete('/user');
}
function changeNicknameApi (data) {
    return axios.patch('/user', data);
}

/* 
 * put
 */
function* join (action) {
    try {
        // const result = yield call(joinApi, action.data);
        yield delay(1000);
        yield put({
            type: JOIN_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: JOIN_FAILURE,
            data: err,
        });
    }
}
function* login (action) {
    try {
        // const result = yield call(loginApi, action.data);
        yield delay(1000);
        yield put({
            type: LOGIN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOGIN_FAILURE,
            data: err,
        });
    }
}
function* logout () {
    try {
        // const result = yield call(logoutApi);
        yield delay(1000);
        yield put({
            type: LOGOUT_SUCCESS,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: LOGOUT_FAILURE,
            data: err,
        });
    }
}
function* changeNickname (action) {
    try {
        // const result = yield call(changeNicknameApi, action.data);
        yield delay(1000);
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            data: err,
        });
    }
}

/* 
 * take
 */
function* watchJoin () {
    yield takeLatest(JOIN_REQUEST, join);
}
function* watchLogin () {
    yield takeLatest(LOGIN_REQUEST, login);
}
function* watchLogout () {
    yield takeLatest(LOGOUT_REQUEST, logout);
}
function* watchChangeNickname () {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

/* 
 * all
 */
export default function* todoSaga () {
    yield all([
        fork(watchJoin),
        fork(watchLogin),
        fork(watchLogout),
        fork(watchChangeNickname),
    ])
}