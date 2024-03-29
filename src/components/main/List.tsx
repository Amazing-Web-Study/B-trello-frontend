import React, { useState, useEffect } from "react";
import "./List.css"
import { addCard, addList, delCard ,delList , updateCard, is_visible} from "./Event";
import { type } from "os";

export const List = () => {

    const [lists, setLists] = useState([]);
    let [version, setVersion] = useState(1)

    useEffect(() => {
        fetch('http://localhost:8000/api/list', {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(data => data.json())
            .then(data => setLists(data))
    }, [version])

    return (
        <div className="list_conponent">
            {lists.map((list: any) => (
                <div key={list._id} className="list_panel">
                    <div className="list_title">
                        {list.title}
                        <a
                            className="x_btn"
                            onClick={() => { 
                                delList(list._id)
                                    .then(() => setVersion(version += 1))
                                    .catch(error => console.error('Error : ', new Error(error)))
                            }}>
                            X
                        </a>    
                    </div>
                    <Cards list_id={list._id} />
                </div>
            ))}
            <div className={"list_panel_wrapper"}>
                <div 
                id={"addList"}
                className="add_panel disp" >
                    <input type="text" id={"list_title"} />
                    <a
                        className={"add_btn"}
                        onClick={() => {
                            addList(document.getElementById("list_title"))
                                .then(() => setVersion(version += 1))
                                .catch(error => console.error('Error : ', new Error(error)))
                        }}>
                        Add list
                    </a>
                </div>
                <a
                    onClick={() => {
                        is_visible(document.getElementById("addList"));
                    }}
                    className={"add_list_btn"}>
                    Add another list
                </a>
            </div>
        </div>
    );
}

const Cards = ({ list_id }: any) => {
    var [cards, setCards] = useState([])
    let [version, setVersion] = useState(1)

    useEffect(() => {
        fetch('http://localhost:8000/api/card/' + list_id)
            .then(data => data.json())
            .then(data => setCards(data))
    }, [version])

    return (
        <div>
            <div className="list_content">
                {cards.map((card: any) => (
                    <div className="list_item" key={card._id}>
                        
                        <input type="checkbox" 
                        checked={card.state == 1 ? false : true} 
                        onChange={() => {
                            updateCard(card._id,card.state)
                                .then(() => setVersion(version += 1))
                                .catch(error => console.error('Error : ', new Error(error)))
                         }} />
                        {card.content}
                        <button
                            type='button'
                            className="x_btn"
                            onClick={() => {
                                delCard(card._id)
                                    .then(() => setVersion(version += 1))
                                    .catch(error => console.error('Error : ', new Error(error)))
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
                            .then(() => setVersion(version += 10))
                            .catch(error => console.error('Error : ', new Error(error)))
                    }
                    }>Add card</button>
            </div>
        </div>
    )
}