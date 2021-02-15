import React from 'react';
import PropTypes from 'prop-types';
import Link from './ActiveLink';
import { Header } from './styles';

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

function Layout ({ children }) {
    return (
        <section>
            <Header>
                <nav className="gnb">
                    <ul>
                        <li>
                            <Link href="/todolist" activeClassName="active">
                                <a>To do List</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/donelist" activeClassName="active">
                                <a>Done List</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/my" activeClassName="active">
                                <a>My Page</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            {children}
        </section>
    );
}

export default Layout;