import React from 'react';
import MainCard from "../main/MainCard";


const user = {
    name: '수일',
    age: 25
}

function Main() {
    return (
        <div className="main">
            <div className="container">
                <MainCard user={user} />
            </div>
        </div>
    );
}

export default Main;
