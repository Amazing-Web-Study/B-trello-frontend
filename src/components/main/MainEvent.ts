import React, { useEffect } from "react";

export const is_visible = (element: any) => {
    console.log(element.style.display);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

export const addCard = (listId: any, element: any) => {
    const data = {
        list_id: listId,
        content: element.value,
        state: 0
    }

    fetch('http://localhost:8000/api/card', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(error => console.error('Error : ', new Error(error)))

}

export const addList = (userId: any, element: any) => {
    const data = {
        user_id: userId,
        title: element.value
    }

    fetch('http://localhost:8000/api/list', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .catch(error => console.log('Error : ', new Error(error)))
}