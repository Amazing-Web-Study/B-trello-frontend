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
    const response = await fetch('http://localhost:8000/api/list', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    return response
}

function Main({history}: any) {
    const [state] = useFetch(getLists, []);
    const { loading, data: lists, error }: any = state

    return (
        <Layout>
            {/* <GlobalStyle> */}
                <div className="main">
                    <div className="container">
                        <List history={history} />
                    </div>
                </div>
            {/* </GlobalStyle> */}
        </Layout>


    );
}
export default Main;
