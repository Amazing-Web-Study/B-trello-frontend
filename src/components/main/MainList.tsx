import React from 'react';
import styled from 'styled-components';
import MainCard from "../main/MainCard";
import useFetch from "../../api/api";

const Container = styled.div`
    // display : flex;
    height: fit-contents;
    width : 15rem;
    background : #ffffff;
    margin:1rem;
`
const Flex = styled.div`
    display : flex;
`

async function getCards() {
    const response = await fetch('http://localhost:8000/api/card')
    return response
}

function List({ list }: any) {
    const [state] = useFetch(getCards, []);
    const {loading, data: cards, error}:any = state
    return (
        <Container>
                <div className="list-header">{list.title}</div>
                <div className="list-cards">
                    <MainCard cards={cards}/>
                    <a className="addCard">Add a card</a>
                </div>
                <div className="list-footer"></div>
        </Container>
    )
}

function MainList({ lists }: any) {
    return (
        <Flex>
            {lists.map((list: any) => (
                <List list={list} key={list._id} />
            ))}
        </Flex>
    );
}

export default MainList;