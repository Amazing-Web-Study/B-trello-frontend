import React from 'react';
import MainCard from "../main/MainCard";
// import {cards} from "../../api/cards";
//import Layout from "../common/layout/Layout";
//import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer"


const user = {
    name: '수일',
    age: 25
}

// const card = {cards};

function Main() {
    return (
        <div className="main">
            <div className="container">
                <MainCard user={user} />
            </div>
            <Footer />
        </div>

    );
}

export default Main;
