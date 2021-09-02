import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { is_visible} from "./MainEvent";
import { PanelStyle } from './Style';

const CardStyle = styled.a`
    display : block;
    background-color : #ffffff;
    border-radius: 0.3rem;
    margin: 0.5rem 0.5rem;
    padding-left: 0.5rem;
    text-align : left;
`

const AddCardBtnStyle = styled.a`
    padding: 0.3rem 0.3rem;
    display: block;
    width: 5rem;
    text-align: center;
    margin: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    background-color: #026aa7;
    color: #ffffff;
`

const OpenPanelBtnStyle = styled.a`
    color: #5e6c84;
`

const TextareaStyle = styled.textarea`
    width: 90%;
    border-radius: 0.5rem;
    border: none;
`

export const Card = ({ cards } : any) => {
    return (
        <div className="card">
            {cards.map((card: any) => (
                <CardStyle key={card._id}>{card.content}</CardStyle>
            ))}
        </div>
    );
}

const addCard = (listId: any, element: any) => {
    const data = {
        list_id: listId,
        content: element.value,
        state: 0
    }

    fetch('http://localhost:8000/api/card', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(error => console.error('Error : ', new Error(error)));
}

// 카드 판넬 오픈 버튼
export const OpenCardPanelBtn = ({ listId }: any) => {
    const element = document.getElementById(listId);
    return (
        <OpenPanelBtnStyle
            onClick={() => {
                is_visible(element);
            }}>
            Add a Card
        </OpenPanelBtnStyle>
    )
}

const AddCard = ({ listId } : any) => {
    let element = document.getElementById("content_" + listId);

    return (
        <AddCardBtnStyle
            onClick={() => {
                addCard(listId, element);
            }}>
                Add card
            </AddCardBtnStyle>
    )
}

// 카드 textarea 판넬
export const CardPanel = ({ list }: any) => {
    return (
        <PanelStyle id={list._id}>
            <TextareaStyle id={"content_" + list._id}></TextareaStyle>
            <AddCard listId={list._id}/>
        </PanelStyle>
    )
}
