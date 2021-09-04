import React from 'react';
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

function Main() {
    return (
        <div className="container">
            <List/>
        </div>
    )
}

export default Main;
