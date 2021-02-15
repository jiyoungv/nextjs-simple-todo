import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useInput from '../hooks/useInput';
import { login } from '../reducers/user';
import Button from '../components/Button';
import { Wrap, PageTitle, UserFormLayout } from '../components/styles';

function Login () {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const me = useSelector(state => state.user.me);
    const loginRequest = useSelector(state => state.user.loginRequest);
    const loginSuccess = useSelector(state => state.user.loginSuccess);

    const [nickname, setNickname, onChangeNickName] = useInput('');
    const [password, setPassword, onChangePassword] = useInput('');

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();
        
        dispatch(login({ nickname, password }));
    }, [nickname, password]);

    useEffect(() => {
        if (me) {
            alert('로그인이 완료되었습니다.');
            router.push('/todolist');
        }
    }, [me]);

    return (
        <>
        <Head>
            <title>로그인 | Simple Todo</title>
        </Head>            
        <Wrap>
            <UserFormLayout onSubmit={onSubmitLogin}>
                <PageTitle>로그인</PageTitle>
                <div className="input_wrap">
                    <input 
                        name="login_nickname"
                        type="text" 
                        value={nickname} 
                        onChange={onChangeNickName}
                        placeholder="닉네임"
                    />
                </div>
                <div className="input_wrap">
                    <input 
                        name="login_password"
                        type="password" 
                        value={password} 
                        onChange={onChangePassword}
                        placeholder="비밀번호"
                    />
                </div>        
                <div>
                    <Button type="submit" loading={loginRequest}>로그인</Button>
                </div>     
                <div className="link">
                    <Link href="/join"><a title="가입하러 가기">회원이 아니신가요?</a></Link>
                </div>   
            </UserFormLayout>
        </Wrap>
        </>
    );
}

export default Login;