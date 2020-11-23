import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './commom/baseTag/button';
import Login from './login';
import Register from './register';
import { userCheckedLoginStatus } from '../store/slices/users';

const Header = (props) => {
    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const { loggedIn } = props.users;
    return (
        <div style={{ height: '80px' }}>
            <Head>
                <Search
                    placeholder="搜尋"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {loggedIn ? (
                    <div>hi Elmer</div>
                ) : (
                    <>
                        <BtnLogin onClick={() => setLogin(true)}>登入</BtnLogin>
                        <BtnLogin onClick={() => setRegister(true)}>
                            註冊
                        </BtnLogin>
                    </>
                )}
            </Head>
            <Login login={login} setLogin={setLogin} />
            <Register register={register} setRegister={setRegister} />
        </div>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
const Head = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    margin: 0 auto;
    padding: 8px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Search = styled.input`
    width: 500px;
    height: 35px;
`;

const BtnLogin = styled(Button)`
    height: min-content;
    margin: 5px;
    padding: 7px 10px;
    border-radius: 5px;
    font-size: 18px;

    &:hover {
        color: #ffffff;
        background: #c4c4c4;
        transition: 0.3s;
    }
`;
