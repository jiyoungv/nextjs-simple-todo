import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router'
import useInput from '../hooks/useInput';
import { changeNickname, logout } from '../reducers/user';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Wrap, PageTitle, UserFormLayout, LogoutBtn } from '../components/styles';

function My () {
    const dispatch = useDispatch();
    const changeNicknameRequest = useSelector(state => state.user.changeNicknameRequest);
    const nickname = useSelector(state => state.user.me?.nickname);
    const [myNickname, setMyNickname, onChangeMyNickname] = useInput(nickname);

    const onSubmitChangeMyNickname = useCallback((e) => {
        e.preventDefault();

        if (!myNickname) {
            return alert('닉네임을 입력해주세요!');
        }
        
        dispatch(changeNickname(myNickname));
    }, [myNickname]);

    const me = useSelector(state => state.user.me);
    const logoutRequest = useSelector(state => state.user.logoutRequest);
    const logoutSuccess = useSelector(state => state.user.logoutSuccess);
    const onLogout = useCallback(() => {
        dispatch(logout);
    }, []);

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
            <title>마이 페이지 | Simple Todo</title>
        </Head>         
        <Layout>
            <Wrap>
                <PageTitle>마이 페이지</PageTitle>
                <p style={style}>안녕하세요! {nickname}님, 좋은 하루 보내세요😉</p>
                <UserFormLayout onSubmit={onSubmitChangeMyNickname}>
                    <div className="input_wrap">
                        <input 
                            name="my_nickname"
                            type="text" 
                            value={myNickname} 
                            onChange={onChangeMyNickname}
                            placeholder="닉네임 변경"
                        />                        
                    </div>
                    <div className="input_wrap">
                        <Button type="submit" loading={changeNicknameRequest}>닉네임 변경</Button>
                    </div>
                </UserFormLayout>
                <LogoutBtn>
                    <Button event={onLogout} loading={logoutRequest}>로그아웃</Button>
                </LogoutBtn>
            </Wrap>
        </Layout>   
        </>
    );
}

const style = {
    marginBottom: 10,
};

export default My;