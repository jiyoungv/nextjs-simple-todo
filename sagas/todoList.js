import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_TODOLIST_REQUEST, ADD_TODOLIST_SUCCESS, ADD_TODOLIST_FAILURE,
    DELETE_TODOLIST_REQUEST, DELETE_TODOLIST_SUCCESS, DELETE_TODOLIST_FAILURE,
    ADD_DONELIST_REQUEST, ADD_DONELIST_SUCCESS, ADD_DONELIST_FAILURE,
} from '../reducers/todoList';

/* 
 * api
 */
function addTodoListApi (data) {
    return axios.post('/todo', data);
}
function deleteTodoListApi (data) {
    return axios.post('/todo', data);
}
function addDoneListApi (data) {
    return axios.post('/done', data);
}

/* 
 * put
 */
function* addTodoList (action) {
    try {
        // const result = yield call(addTodoListApi, action.data);
        yield delay(1000);
        yield put({
            type: ADD_TODOLIST_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_TODOLIST_FAILURE,
            data: err,
        });
    }
}
function* deleteTodoList (action) {
    try {
        // const result = yield call(deleteTodoListApi, action.data);
        yield delay(1000);
        yield put({
            type: DELETE_TODOLIST_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: DELETE_TODOLIST_FAILURE,
            data: err,
        });
    }
}
function* addDoneList (action) {
    try {
        // const result = yield call(addDoneListApi, action.data);
        yield delay(1000);
        yield put({
            type: ADD_DONELIST_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: ADD_DONELIST_FAILURE,
            data: err,
        });
    }
}

/* 
 * take
 */
function* watchAddTodoList () {
    yield takeLatest(ADD_TODOLIST_REQUEST, addTodoList);
}
function* watchDeleteTodoList () {
    yield takeLatest(DELETE_TODOLIST_REQUEST, deleteTodoList);
}
function* watchAddDoneList () {
    yield takeLatest(ADD_DONELIST_REQUEST, addDoneList);
}

/* 
 * all
 */
export default function* todoSaga () {
    yield all([
        fork(watchAddTodoList),
        fork(watchDeleteTodoList),
        fork(watchAddDoneList),
    ])
}