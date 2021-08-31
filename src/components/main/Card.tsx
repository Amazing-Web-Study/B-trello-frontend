import React from 'react';
import styled from 'styled-components';
import { is_visible, addCard} from "./MainEvent";
import { PanelStyle } from './Style';

const CardStyle = styled.a`
    display : block;
    margin-bottom: 0.7rem;
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

// 카드 판넬 오픈 버튼
export const OpenCardPanelBtn = ({ listId }: any) => {
    const element = document.getElementById(listId);
    return (
        <a
            key={listId}
            onClick={() => {
                is_visible(element);
            }}>
            Add a Card
        </a>
    )
}

const AddCard = ({ listId } : any) => {
    let element = document.getElementById("content_" + listId);

    return (
        <a 
            onClick={() => {
                addCard(listId, element);
            }}>
                Add card
            </a>
    )
}

// 카드 textarea 판넬
export const CardPanel = ({ list }: any) => {
    return (
        <PanelStyle id={list._id}>
            <textarea id={"content_" + list._id}></textarea>
            <AddCard listId={list._id}/>
        </PanelStyle>
    )
}
