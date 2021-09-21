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


function Main() {

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
