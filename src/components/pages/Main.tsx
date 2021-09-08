import React from 'react';
import MainCard from "../main/MainCard";
// import {cards} from "../../api/cards";
import Layout from "../common/layout/Layout";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin : 0;
        padding: 0;
        background-color: #0079bf;
    }
`
// const user = {
//     name: '수일',
//     age: 25
// }

// const card = {cards};

function Main() {
    return (
        <Layout>
            <GlobalStyle>
                <div className="main">
            
                </div> 
            </GlobalStyle> 
        </Layout>
        

    );
}
/*
function Main() {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <MainCard user={user} />
            </div>
            <Footer />
        </div>

    );
}
*/
export default Main;
