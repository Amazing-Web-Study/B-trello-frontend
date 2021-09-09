import React from 'react';
import Layout from "../common/layout/Layout";
import { createGlobalStyle } from 'styled-components';
import { List } from "../main/List";
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
async function getLists() {
    const response = await fetch('http://localhost:8000/api/list/612b4db38a78da44945d05a5')
    return response
}

function Main() {
    const [state] = useFetch(getLists, []);
    const { loading, data: lists, error }: any = state

    if (loading) return <div>로딩중</div>
    if (error) return <div>{error}</div>

    return (
        <Layout>
            {/* <GlobalStyle> */}
                <div className="main">
                    <div className="container">
                        <List />
                    </div>
                </div>
            {/* </GlobalStyle> */}
        </Layout>


    );
}
export default Main;
