import React from 'react';
import MainCard from "../main/MainCard";
import useFetch from "../../api/api";

async function getCards() {
    const response = await fetch('http://localhost:8080/api/card')
    return response
}

function Main() {
    const [state] = useFetch(getCards, []);
    console.log(state)
    const {loading, data: cards, error}:any = state

    if (loading) return <div>로딩중</div>
    if (error) return <div>{error}</div>

    return (
        <div className="main">
            <div className="container">
                <MainCard cards={cards} />
            </div>
        </div>
    );
}

export default Main;
