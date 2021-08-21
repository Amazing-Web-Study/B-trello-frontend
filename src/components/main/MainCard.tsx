import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
    display : block;
    margin-bottom: 0.7rem;
`

const MainCard = (props: any) => {
    return (
        <div className="card">
            {props.cards.map((card: any) => (
                <Card key={card._id}>{card.content}</Card>
            ))}
        </div>
    );
}

export default MainCard;
