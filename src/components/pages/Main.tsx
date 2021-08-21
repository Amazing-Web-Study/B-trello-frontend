import React from 'react';
import MainList from "../main/MainList";
import useFetch from "../../api/api";

async function getCards() {
    const response = await fetch('http://localhost:8000/api/list')
    return response
}

function Main() {
    const [state] = useFetch(getCards, []);
    const {loading, data: lists, error}:any = state

    if (loading) return <div>로딩중</div>
    if (error) return <div>{error}</div>

    return (
        <div className="main">
            <div className="container">
                <MainList lists={lists} />
            </div>
        </div>
    );
}

export default Main;
