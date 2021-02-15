import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';

function Index () {
    const me = useSelector(state => state.user.me);

    useEffect(() => {
        if (!me) {
            Router.push('/login');
        } else {
            Router.push('/todolist');
        }
    }, [me]);

    if (!me) {
        return null;
    }

    // return (
    //     <Wrap>
    //         <ul>
    //             <li><Link href="/join"><a>가입하기</a></Link></li>
    //             <li><Link href="/login"><a>로그인</a></Link></li>
    //             <li><Link href="/todolist"><a>할 일 목록</a></Link></li>
    //             <li><Link href="/donelist"><a>완료 목록</a></Link></li>
    //             <li><Link href="/my"><a>마이 페이지</a></Link></li>
    //         </ul>
    //     </Wrap>
    // );
}

export default Index;