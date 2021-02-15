import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router'
import useInput from '../hooks/useInput';
import { join } from '../reducers/user';
import Button from '../components/Button';
import { Wrap, PageTitle, UserFormLayout } from '../components/styles';

function Join () {
    const dispatch = useDispatch();
    const nicknameRef = useRef();
    const passwordCheckRef = useRef();
    const joinRequest = useSelector(state => state.user.joinRequest);
    const joinSuccess = useSelector(state => state.user.joinSuccess);

    const [nickname, setNickname, onChangeNickName] = useInput('');

    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);

        if (passwordCheck) {
            setPasswordError(e.target.value !== passwordCheck);
        }
    }, [passwordCheck]);    
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);

        if (password) {
            setPasswordError(e.target.value !== password);
        }
    }, [password]);
    
    const [agree, setAgree] = useState(false);
    const onChangeAgree = useCallback((e) => {
        setAgree(e.target.checked);
    }, []);

    const onSubmitJoin = useCallback((e) => {
        e.preventDefault();

        if (passwordError || !passwordCheck) {
            alert('비밀번호가 다릅니다!');
            return passwordCheckRef.current.focus();
        }

        if (!agree) {
            return alert('개인정보수집에 동의해주셔야 합니다!');
        }

        dispatch(join({ nickname, password }));
    }, [password, passwordError, agree]);

    useEffect(() => {
        if (joinSuccess) {
            alert('가입이 완료되었습니다!\n로그인 페이지로 이동합니다.');
            Router.replace('/login');
        }
    }, [joinSuccess]);

    return (
        <>
        <Head>
            <title>회원가입 | Simple Todo</title>
        </Head>
        <Wrap>
            <UserFormLayout onSubmit={onSubmitJoin}>
                <PageTitle>회원가입</PageTitle>
                <div className="input_wrap">
                    <input 
                        name="join_nickname"
                        type="text" 
                        value={nickname} 
                        onChange={onChangeNickName}
                        ref={nicknameRef} 
                        placeholder="닉네임"
                        required
                    />
                </div>
                <div className="input_wrap">
                    <input 
                        name="join_password"
                        type="password" 
                        value={password} 
                        onChange={onChangePassword} 
                        placeholder="비밀번호"
                        required
                    />
                </div>            
                <div className="input_wrap">
                    <input 
                        name="join_password_check"
                        type="password" 
                        value={passwordCheck} 
                        onChange={onChangePasswordCheck} 
                        ref={passwordCheckRef} 
                        placeholder="비밀번호 확인"
                        required
                    />
                </div>      
                {passwordError && 
                    <div className="input_wrap">
                        <p className="err">비밀번호가 다릅니다.</p>
                    </div>
                }                  
                <div className="input_wrap">
                    <input 
                        id="join_agree" 
                        name="join_agree"
                        type="checkbox" 
                        checked={agree} 
                        onChange={onChangeAgree}
                    />
                    <label htmlFor="join_agree">개인정보수집에 동의합니다.</label>
                </div>
                <div>
                    <Button type="submit" loading={joinRequest}>회원가입</Button>
                </div>
                <div className="link">
                    <Link href="/login"><a title="로그인">이미 회원이신가요?</a></Link>
                </div>                   
            </UserFormLayout>
        </Wrap>
        </>
    );
}

export default Join;