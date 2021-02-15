import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import TodoList from '../components/TodoList';
import { Wrap } from '../components/styles';
import Layout from '../components/Layout';

function Donelist () {
    const me = useSelector(state => state.user.me);    
    const doneLists = useSelector(state => state.todoList.doneLists);

    useEffect(() => {
        if (!me) {
            alert('로그인 사용자만 이용할 수 있습니다.')
            Router.push('/login');
        }
    }, [me]);

    if (!me) {
        return null;
    }

    return (
        <>
        <Head>
            <title>완료 목록 | Simple Todo</title>
        </Head>     
        <Layout>
            <Wrap>
                <TodoList tit="완료" lists={doneLists}/>
            </Wrap>
        </Layout>           
        </>
    );
}

export default Donelist;