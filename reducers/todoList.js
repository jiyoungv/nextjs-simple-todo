import shortid from 'shortid';
import produce from 'immer';

/*
 * state
 */
const initialState = {
    todoLists: [
        { id: shortid.generate(), content: '예시: Node.js 공부하기✨' },      
    ],
    doneLists: [
        // { id: shortid.generate(), content: '예시: 완료' },
    ],
    addTodoListRequest: false,
    addTodoListSuccess: false,
    addTodoListFailure: null,
    deleteTodoListRequest: false,
    deleteTodoListSuccess: false,
    deleteTodoListFailure: null,    
    addDoneListRequest: false,
    addDoneListSuccess: false,
    addDoneListFailure: null,
};

/*
 * types
 */
export const ADD_TODOLIST_REQUEST = 'ADD_TODOLIST_REQUEST';
export const ADD_TODOLIST_SUCCESS = 'ADD_TODOLIST_SUCCESS';
export const ADD_TODOLIST_FAILURE = 'ADD_TODOLIST_FAILURE';

export const DELETE_TODOLIST_REQUEST = 'DELETE_TODOLIST_REQUEST';
export const DELETE_TODOLIST_SUCCESS = 'DELETE_TODOLIST_SUCCESS';
export const DELETE_TODOLIST_FAILURE = 'DELETE_TODOLIST_FAILURE';

export const ADD_DONELIST_REQUEST = 'ADD_DONELIST_REQUEST';
export const ADD_DONELIST_SUCCESS = 'ADD_DONELIST_SUCCESS';
export const ADD_DONELIST_FAILURE = 'ADD_DONELIST_FAILURE';

/*
 * actions
 */
export const addTodoList = data => ({
    type: ADD_TODOLIST_REQUEST,
    data,
});

export const deleteTodoList = data => ({
    type: DELETE_TODOLIST_REQUEST,
    data,
});

export const addDoneList = data => ({
    type: ADD_DONELIST_REQUEST,
    data,
});

/*
 * reducer
 */
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type) {
        // ADD_TODOLIST
        case ADD_TODOLIST_REQUEST:
            draft.addTodoListRequest = true;
            draft.addTodoListSuccess = false;
            draft.addTodoListFailure = null;            
            break;
        case ADD_TODOLIST_SUCCESS:
            draft.todoLists.unshift(action.data);
            draft.addTodoListRequest = false;
            draft.addTodoListSuccess = true;
            break;
        case ADD_TODOLIST_FAILURE:
            draft.addTodoListRequest = false;
            draft.addTodoListFailure = true;
            break;
        // DELETE_TODOLIST
        case DELETE_TODOLIST_REQUEST:
            draft.deleteTodoListRequest = true;
            draft.deleteTodoListSuccess = false;
            draft.deleteTodoListFailure = null;            
            break;
        case DELETE_TODOLIST_SUCCESS:
            draft.todoLists = draft.todoLists.filter(v => v.id !== action.data);
            draft.deleteTodoListRequest = false;
            draft.deleteTodoListSuccess = true;
            break;
        case DELETE_TODOLIST_FAILURE:
            draft.deleteTodoListRequest = false;
            draft.deleteTodoListFailure = true;
            break;            
        // ADD_DONELIST
        case ADD_DONELIST_REQUEST:
            draft.addDoneListRequest = true;
            draft.addDoneListSuccess = false;
            draft.addDoneListFailure = null;                
            break;
        case ADD_DONELIST_SUCCESS:
            const newTodoLists = draft.todoLists.filter(v => v.id !== action.data);            
            const newDoneList = draft.todoLists.filter(v => v.id === action.data)[0];
            draft.todoLists = newTodoLists;     
            draft.doneLists.unshift(newDoneList);                   
            draft.addDoneListRequest = false;
            draft.addDoneListSuccess = true;
            break;
        case ADD_DONELIST_FAILURE:
            draft.addDoneListRequest = false;
            draft.addDoneListFailure = true;
            break;                       
        default:
            break;
    }
});

export default reducer;

