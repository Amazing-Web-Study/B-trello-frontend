import React, {useEffect} from 'react';
import MainCard from "../main/MainCard";
import {cards} from "../../api/cards";




const user = {
    name: '수일',
    age: 25
}

function Main() {
    useEffect(() => {
        const getFetch = async () => {
            await cards().then(a => {
                console.log(a)
            })
        }
        getFetch()
    })

    return (
        <div className="main">
            <div className="container">
                <MainCard user={user} />
            </div>
        </div>
    );
}

export default Main;
