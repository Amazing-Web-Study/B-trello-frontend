import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Card, OpenCardPanelBtn, CardPanel } from "../main/Card";
import useFetch from "../../api/api";
import { PanelStyle } from './Style';
import { is_visible, addList } from './MainEvent';

const ListStyle = styled.div`
    display : flex;
`

const ListContentStyle = styled.div`
    height : fit-contents;
    width : 15rem;
    margin : 1rem;
    border: 1px solid #ebecf0;
    border-radius: 0.5rem;
    background-color: #ebecf0;

`

const ListTitle = styled.div`
    margin: 1rem;
    text-align: left;
`

const ListCardsStyle = styled.div`
    overflow-y: auto;
    height: 51rem;
`

const ListFooterStyle = styled.div`

`
const getCards = async () => {
    const response = await fetch('http://localhost:8000/api/card')
    return response
}

const ListContent = ({ list }: any) => {

    const [state] = useFetch(getCards, []);
    const { loading, data: cards, error }: any = state;

    return (
        <ListContentStyle>
            <ListTitle>{list.title}</ListTitle>
            <ListCardsStyle>
                <Card cards={cards} />

                <ListFooterStyle>
                    <CardPanel list={list} />
                    <OpenCardPanelBtn listId={list._id} />
                </ListFooterStyle>
            </ListCardsStyle>
        </ListContentStyle>
    )
}

const ListPanel = () => {
    return (
        <PanelStyle id={"ListPanel"}>
            <input id={"List_title"} />
            <AddList />
        </PanelStyle>
    )
}

const AddList = () => {

    let element = document.getElementById("ListPanel");
    let userId = "testId";
    return (
        <a
            onClick={() => {
                // addList(userId, element);
            }}>
            Add card
        </a>
    )
}

const OpenListPanelBtn = () => {
    const element = document.getElementById("ListPanel");
    return (
        <a
            onClick={() => {
                is_visible(element);
            }}>
            Add List
        </a>
    )
}


const List = ({ lists }: any) => {
    return (
        <ListStyle>
            {lists.map((list: any, index: number) => (
                <ListContent list={list} index={index} />
            ))}
            <OpenListPanelBtn />
            <ListPanel />
        </ListStyle>
    );
}

export default List;