import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import { Card, OpenCardPanelBtn, CardPanel } from "../main/Card";
import useFetch from "../../api/api";
import { PanelStyle } from './Style';
import { is_visible, addList } from './MainEvent';

const ListStyle = styled.div`
    display : flex;
`

const LisContenttStyle = styled.div`
    height : fit-contents;
    width : 15rem;
    background : #ffffff;
    margin : 1rem;
`

const getCards = async () => {
    const response = await fetch('http://localhost:8000/api/card')
    return response
}

const ListContent = ({ list }: any) => {

    const [state] = useFetch(getCards, []);
    const { loading, data: cards, error }: any = state

    

    return (
        <LisContenttStyle>
            <div className="list-header">{list.title}</div>
            <div className="list-cards">
                <Card cards={cards} />
                <OpenCardPanelBtn listId={list._id} />
                <CardPanel list={list} />
            </div>
            <div className="list-footer"></div>
        </LisContenttStyle>
    )
}

const ListPanel = () => {
    return (
        <PanelStyle id={"ListPanel"}>
            <input id={"List_title"} />
            <AddList/>
        </PanelStyle>
    )
}

const AddList = () => {
    
    let element = document.getElementById("ListPanel");
    let userId = "testId";
    return (
        <a
            onClick={() => {
                addList(userId, element);
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
                <ListContent list={list} index={index} key={list._id} />
            ))}
            <OpenListPanelBtn />
            <ListPanel />
        </ListStyle>
    );
}

export default List;