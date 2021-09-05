import React, { useState, useEffect } from "react";
import "./List.css"
import useFetch from "../../api/api";
import { addCard, addList , delCard } from "./Event";

export const List = () => {

    const [lists, setLists] = useState([]);
    let [version, setVersion] = useState(1)

    useEffect(() => {
        fetch('http://localhost:8000/api/list')
            .then(data => data.json())
            .then(data => setLists(data))
    },[version])

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
    var [cards, setCards] = useState([])
    let [version, setVersion] = useState(1)

    useEffect(() => {
        fetch('http://localhost:8000/api/card')
            .then(data => data.json())
            .then(data => setCards(data))
    }, [version])

    const updateState = (e : any) =>{
        console.log(e)
    }


    return (
        <div>
            <div className="list_content">
                {cards.map((card: any) => (
                    <div className="list_item" key={card._id}>
                        <input type="checkbox" onChange={() => {}}/>
                        {card.content}
                        <button
                            type='button'
                            className="x_btn"
                            onClick={() => {
                                delCard(card._id)
                                setTimeout(() => { 
                                    setVersion(version += 1)
                                }, 0)
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
                            setVersion(version += 1)
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
                        addList('612b4db38a78da44945d05a5', document.getElementById("list_title"))
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
                className={"add_list_btn"}>
                Add another list
            </a>
        </div>
    )
}