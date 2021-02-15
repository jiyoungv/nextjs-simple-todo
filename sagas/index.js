import { all, fork } from 'redux-saga/effects';
// import axios from 'axios';
import todoListSaga from './todoList';
import userSaga from './user';

// axios.defaults.baseURL = 'http://localhost:3065';
// axios.defaults.withCredentials = true; // cookie

export default function* rootSaga () {
    yield all([
        fork(todoListSaga),
        fork(userSaga),
    ])
}