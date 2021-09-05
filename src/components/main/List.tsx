import React, { useState, useEffect } from "react";
import "./List.css"
import useFetch from "../../api/api";
import { addCard, addList } from "./Event";

export const List = () => {
    async function getLists() {
        const response = await fetch('http://localhost:8000/api/list')
        return response
    }
    const [state] = useFetch(getLists, []);
    const { loading, data: lists, error }: any = state

    if (loading) return <div>로딩중</div>
    if (error) return <div>{error}</div>

    return (
        <div className="list_conponent">
            {lists.map((list: any) => (
                <div key={list._id} className="list_panel">
                    <div className="list_title">{list.title}</div>
                    <Cards list_id={list._id} />
                </div>
            ))}
            <ListPanel />
        </div>
    );
}

const Cards = ({ list_id }: any) => {
    async function getCards() {
        const response = await fetch('http://localhost:8000/api/card')
        return response
    }
    // const [data, setData] = useFetch(getCards, []);
    var [cards, setCards] = useState([]);
    // const { data: cards }: any = data;
    let [version, setVersion] = useState(1)
    useEffect(() => {
        fetch('http://localhost:8000/api/card')
            .then(data => data.json())
            .then(data => setCards(data))
        console.log(version)
    }, [version])


    return (
        <div>
            <div className="list_content">
                {cards.map((card: any) => (
                    <div className="list_item" key={card._id}>
                        <input type="checkbox" />
                        {card.content}
                        <button
                            type='button'
                            className="x_btn"
                            onClick={() => {

                            }}>
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div className="add_panel">
                <textarea className="text_style" id={"value_" + list_id}></textarea>
                <button
                    type='button'
                    className="add_btn"
                    onClick={() => {
                        addCard(list_id, document.getElementById("value_" + list_id))
                        setTimeout(() => {
                            setVersion(version += 10)
                            console.log('version update')
                        }, 0)
                    }
                    }>Add card</button>
            </div>
        </div>
    )
}

const ListPanel: any = () => {
    return (
        <div className={"list_panel_wrapper"}>
            <div className="add_panel disp" >
                <input type="text" id={"list_title"} />
                <a
                    className={"add_btn"}
                    onClick={() => {

                    }}>
                    Add list
                </a>
                <a
                    // className={"x_btn"}
                    onClick={() => {

                    }}>
                    X
                </a>
            </div>
            <a
                className={"add_list_btn"}
                onClick={() => {
                    addList('612203c33263024508a68730', document.getElementById("list_title"))
                }}>
                Add another list
            </a>
        </div>
    )
}