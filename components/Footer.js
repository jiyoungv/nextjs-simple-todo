import React from 'react';
import { FooterLayout } from './styles';

function Footer () {
    return (
        <FooterLayout>
            <div>
                <p><a href="https://github.com/jiyoungv/nextjs-simple-todo" target="_blank" rel="noreferrer noopener" title="Go to Github">Github 바로가기</a></p>
                <h6>ⓒ 2020 PARK JI YOUNG.</h6>
            </div>
        </FooterLayout>
    );
}

export default Footer;
