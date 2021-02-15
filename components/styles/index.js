import styled from 'styled-components';

export const width = '90%';
export const maxWidth = '800px';
export const mainColor = 'orangered';
export const speed = '0.2';
export const gray = '#ddd';

export const Wrap = styled.div`
    max-width: ${maxWidth};
    width: ${width};
    margin: 80px auto;
    // border: 1px solid coral;
`;

export const Header = styled.header`
    max-width: ${maxWidth};
    width: ${width};
    padding-top: 20px;
    margin: 0 auto;

    .gnb {
        ul {
            li {                
                a {
                    display: inline-block;
                    padding: 6px 0;
                    font-size: 36px;
                    font-weight: 700;
                    color: #333;
                    transition: color ${speed}s;
                    
                    &:hover {
                        color: ${mainColor};
                    }

                    &.active {
                        font-weight: 900;
                        font-size: 40px;
                        color: ${mainColor};
                    }
                }
            }
        }
    }
`;

export const FooterLayout = styled.footer`
    border-top: 1px solid #656565;
    padding: 20px 0;

    > div {
        max-width: ${maxWidth};
        width: ${width};
        margin: 0 auto;

        a {
            display: inline-block;
            margin-bottom: 12px;
            color: coral;

            &:hover {
                text-decoration: underline;
            }
        }

        h6 {
            font-size: 14px;
            color: #656565;
        }
    }
`;

export const PageTitle = styled.h2`
    margin-bottom: 18px;
    font-size: 28px;
    font-weight: 700;

    .tit {
        position: relative;
        display: inline-block;
    }

    .label {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(95%, -20%);
        padding: calc(.3em - 2px) .5em .3em;
        border-radius: 2000em;
        font-size: 16px;
        text-align: center;
        background: ${mainColor};
        box-shadow: 0.1em 0.1em 0.2em rgb(0 0 0 / 20%);
        color: #fff;
    }
`;
export const TodoListLayout = styled.div`
    margin-bottom: 20px;

    .list {
        li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;

            &:last-of-type {
                border-bottom: 0;
            }

            p {
                font-size: 18px;
            }

            button {
                margin-top: 8px;
                margin-right: 5px;

                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
`;
export const ButtonLayout = styled.button`
    border: 0;
    padding: 5px 14px;
    background: #333;
    font-size: 13px;
    color: #fff;
    cursor: pointer;
    transition: background ${speed}s;

    &:hover {
        background: ${mainColor};
    }

    &:disabled {
        background: ${gray};
        cursor: not-allowed;
    }
`;

export const TodoFormLayout = styled.form`
    input[type="text"] {
        width: 80%;
        max-width: 500px;
        height: 23px;
        margin-right: 5px;
    }

    button {}
`;

export const UserFormLayout = styled.form`
    width: 80%;
    max-width: 300px;   

    input[type="text"], input[type="password"] {
        width: 100%;
        box-sizing: border-box;
    }

    button {
        width: 100%;
    }
    
    .input_wrap {
        margin-bottom: 6px;
    }

    .link {
        margin-top: 6px;

        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .err {
        color: ${mainColor};
    }
`;

export const LogoutBtn = styled.div`
    width: 80%;
    max-width: 300px;   

    button {
        width: 100%;
    }
`;