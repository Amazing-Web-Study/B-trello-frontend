import React, {useEffect} from 'react';
import Layout from "../common/layout/Layout";
import { createGlobalStyle } from 'styled-components';
import { List } from "../main/List";
import {useCookies} from "react-cookie";
import useFetch from "../../api/api";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        margin : 0;
        padding: 0;
        background-color: #0079bf;
    }
`


function Main({history}: any) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        if (cookies.user === undefined) {
            history.push('/login')
        }
    }, [])

    const logout = () => {
        removeCookie("user")
        history.push('/login')
    }

    return (
        <Layout>
            {/* <GlobalStyle> */}
                <div className="main">
                    <div className="container">
                        <List />
                    </div>
                    <button type='button' onClick={logout}>로그아웃</button>
                </div>
            {/* </GlobalStyle> */}
        </Layout>


    );
}
export default Main;
