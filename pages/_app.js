import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../util/reset.css';
import Footer from '../components/Footer';
import wrapper from '../store';

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

function App ({ Component, pageProps }) {
    return (
        <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Simple Todo</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <Footer />
        </>
    )
}   

export default wrapper.withRedux(App);