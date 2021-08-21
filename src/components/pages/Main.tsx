import React, {useEffect, useReducer, useState} from 'react';
import MainCard from "../main/MainCard";
// import {cards} from "../../api/cards";


function reducer(state:any, action:any) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: [],
                error: ''
            }
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: ''
            }
        case 'ERROR':
            return {
                loading: false,
                data: [],
                error: '에러 발생'
            }
        default:
            throw new Error(action.type)
    }
}

function Main() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: [],
        error: ''
    })

    const fetchCards = async () => {
        dispatch({type: 'LOADING'})
        try {
            const response = await fetch('http://localhost:8080/api/card')
            let data = await response.json()
            dispatch({type: 'SUCCESS', data: await data})
        } catch (e) {
            dispatch({type: 'ERROR', error: '에러 발생'})
        }
    }
    // const [cards, setCards] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState('')

    useEffect(() => {
        fetchCards()
    }, [])

    const {loading, data: cards, error} = state

    if (loading) return <div>로딩중</div>
    if (error) return <div>{error}</div>

    return (
        <div className="main">
            <div className="container">
                <MainCard cards={cards} />
            </div>
        </div>
    );
}

export default Main;
