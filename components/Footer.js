import React from 'react';
import { FooterLayout } from './styles';

function Footer () {
    return (
        <FooterLayout>
            <div>
                <a href="https://github.com/jiyoungv/nextjs-simple-todo" target="_blank" rel="noreferrer noopener" title="Go to Github">Go to Github</a>
                <h6>ⓒ 2020 PARK JI YOUNG.</h6>
            </div>
        </FooterLayout>
    );
}

export default Footer;