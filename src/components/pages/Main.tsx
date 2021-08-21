import React, {useEffect, useState} from 'react';
import MainCard from "../main/MainCard";
// import {cards} from "../../api/cards";


function Main() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchCards = async () => {
            setError('')
            setCards([])
            setLoading(true)

            const response:any = await fetch('http://localhost:8080/api/card')
            let jsonResponse = await response.json()
            setCards(jsonResponse)

            setLoading(false)
        }
        fetchCards()
        fetchCards().catch((err:any) => {
            setLoading(false)
            setError('에러 발생')
        })
    }, [])

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
