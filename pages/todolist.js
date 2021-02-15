import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Wrap } from '../components/styles';

function Todolist () {
    const todoLists = useSelector(state => state.todoList.todoLists);
    const me = useSelector(state => state.user.me);

    useEffect(() => {
        if (!me) {
            alert('로그인 사용자만 이용할 수 있습니다.');
            Router.push('/login');
        }
    }, [me]);

    if (!me) {
        return null;
    } 

    return (
        <>
        <Head>
            <title>할 일 목록 | Simple Todo</title>
        </Head>       
        <Layout>
            <Wrap>
                <TodoList tit="미완료" lists={todoLists} done={true} del={true} />
                <TodoForm/>
            </Wrap>
        </Layout>     
        </>
    );
}

export default Todolist;