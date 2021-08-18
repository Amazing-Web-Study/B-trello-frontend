import React from 'react';
import MainCard from "../main/MainCard";
import {cards} from "../../api/cards";


// const user = {
//     name: '수일',
//     age: 25
// }

const card = {cards};

function Main() {
    return (
        <div className="main">
            <div className="container">
                <MainCard user={card} />
            </div>
        </div>
    );
}

export default Main;
