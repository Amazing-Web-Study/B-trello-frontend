import React from 'react';


const MainCard = (props: any) => {
    console.log(props);
    return (
        <div className="card">
            <div className="container">
                <p>이름 : {props.user.name}</p>
                <p>나이 : {props.user.age}</p>
            </div>
        </div>
    );
}

export default MainCard;
