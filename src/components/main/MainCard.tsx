import React from 'react';


const MainCard = (props: any) => {
    return (
        <div className="card">
            <div className="container">
                {props.cards.map((card:any) => (
                    <li key={card._id}>
                        {card.content}
                    </li>
                ))}
            </div>
        </div>
    );
}

export default MainCard;
