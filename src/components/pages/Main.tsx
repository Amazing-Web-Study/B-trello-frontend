import React from 'react';
<<<<<<< HEAD
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
        
=======
import {List} from "../main/List";
import useFetch from "../../api/api";

// async function getLists() {
//     const response = await fetch('http://localhost:8000/api/list')
//     return response
// }

// function Main() {
//     const [state] = useFetch(getLists, []);
//     const { loading, data: lists, error }: any = state

//     if (loading) return <div>로딩중</div>
//     if (error) return <div>{error}</div>

//     return (
//         <div className="container">
//             <List lists={lists} />
//         </div>
//     );
// }
>>>>>>> 189c13c2e4fbd339150fe8cdb111b0b645dc7977

    );
}
/*
function Main() {
    return (
<<<<<<< HEAD
        <div className="main">
            <Header />
            <div className="container">
                <MainCard user={user} />
            </div>
            <Footer />
        </div>

    );
=======
        <div className="container">
            <List/>
        </div>
    )
>>>>>>> 189c13c2e4fbd339150fe8cdb111b0b645dc7977
}
*/
export default Main;
