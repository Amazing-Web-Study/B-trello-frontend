import React from 'react';
import styled from 'styled-components';
import MainCard from "../main/MainCard";
import useFetch from "../../api/api";
import { OpenCardPanelBtn, CardPanel } from "./MainElement";

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

// const AddCardPanel = styled.div`
//     display : none;
// `

const getCards = async () => {
    const response = await fetch('http://localhost:8000/api/card')
    return response
}
// const addCard = (arg : any) => {console.log(arg)}


const List = ({ list }: any) => {

    const [state] = useFetch(getCards, []);
    const { loading, data: cards, error }: any = state

    return (
        <Container>
            <div className="list-header">{list.title}</div>
            <div className="list-cards">
                <MainCard cards={cards} />
                <OpenCardPanelBtn listId={list._id} />
                <CardPanel list={list} />
            </div>
            <div className="list-footer"></div>
        </Container>
    )
}

const MainList = ({ lists }: any) => {
    return (
        <Flex>
            {lists.map((list: any , index : number) => (
                <List list={list} index={index} key={list._id} />
            ))}
        </Flex>
    );
}

export default MainList;