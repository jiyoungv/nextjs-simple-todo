import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addDoneList, deleteTodoList } from '../reducers/todoList';
import Button from './Button';
import { PageTitle, TodoListLayout } from './styles';

TodoList.propTypes = {
    lists: PropTypes.array.isRequired,
    tit: PropTypes.string,
    button: PropTypes.bool,
    del: PropTypes.bool,
}

function TodoList ({ lists, tit, done, del }) {
    const dispatch = useDispatch();

    const addDoneListRequest = useSelector(state => state.todoList.addDoneListRequest);
    const deleteTodoListRequest = useSelector(state => state.todoList.deleteTodoListRequest);

    const onClickDone = useCallback((dataId) => {
        dispatch(addDoneList(dataId));
    }, []);

    const onClickDel = useCallback((dataId) => {
        dispatch(deleteTodoList(dataId));
    }, []);

    return (
        <TodoListLayout>
            {tit && 
                <PageTitle>
                    <span className="tit">
                        {tit}
                        {lists.length > 0 &&
                            <span className="label">
                                {lists.length}
                            </span>
                        }
                    </span>
                </PageTitle>
            }
            <ul className="list">
                {lists.length > 0 && 
                    lists.map(list => (
                        <li key={list.id}>
                            <p>{list.content}</p>
                            {done && 
                                <Button 
                                    dataId={list.id} 
                                    event={onClickDone} 
                                    loading={addDoneListRequest}
                                >완료</Button>
                            }
                            {del && 
                                <Button 
                                    dataId={list.id} 
                                    event={onClickDel} 
                                    loading={deleteTodoListRequest}
                                >삭제</Button>
                            }
                        </li>
                    ))
                }
            </ul>
            {lists.length === 0 && <p>리스트가 없습니다.</p>}
        </TodoListLayout>            
    );
}

export default TodoList;