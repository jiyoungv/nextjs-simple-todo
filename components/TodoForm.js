import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { addTodoList } from '../reducers/todoList';
import Button from './Button';
import { TodoFormLayout } from './styles';

function TodoForm () {
    const dispatch = useDispatch();
    
    const addTodoListRequest = useSelector(state => state.todoList.addTodoListRequest);
    const addTodoListSuccess = useSelector(state => state.todoList.addTodoListSuccess);

    const [text, setText] = useState('');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    useEffect(() => {
        if (addTodoListSuccess) {
            setText('');
        }
    }, [addTodoListSuccess]);

    const inputRef = useRef();

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if (!text) {
            alert('텍스트를 입력해주세요!');
            return inputRef.current.focus();
        }
        
        dispatch(addTodoList({
            id: shortid.generate(),
            content: text,
        }));
    }, [text]);

    return (
        <TodoFormLayout onSubmit={onSubmit}>
            <input 
                type="text" 
                value={text} 
                ref={inputRef} 
                onChange={onChangeText}
                placeholder="할 일을 추가해보세요!"
            />
            <Button type="submit" loading={addTodoListRequest}>추가</Button>
        </TodoFormLayout>
    );
}

export default TodoForm;