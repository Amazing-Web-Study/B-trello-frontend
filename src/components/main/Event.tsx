import React from "react";

export const addCard = (list_id : any , e : any) => {
    if(!e.value){
        return
    }
    const data = {
        list_id : list_id,
        content : e.value
    }

    fetch('http://localhost:8000/api/card', {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        } 
    })
    .catch(error => console.error('Error : ', new Error(error)))

    return e.value;
}

export const addList = (user_id : any , e : any) => {
    console.log(e.value);
    if(!e.value){
        return
    }
    const data = {
        user_id : user_id,
        title : e.value
    }

    fetch('http://localhost:8000/api/list', {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .catch(error => console.error('Error : ', new Error(error)))
}

export const delCard = (card_id : string) => {
    fetch('http://localhost:8000/api/card/'+ card_id, {
        method : 'delete',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .catch(error => console.error('Error : ', new Error(error)))
}

export const delList = (list_id : string) => {
    fetch('http://localhost:8000/api/list/'+ list_id, {
        method : 'delete',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .catch(error => console.error('Error : ', new Error(error)))
}

export const updateCard = (card_id : string, state : number) => {
    state = state  == 0 ? 1 : 0;

    const data = { 
        "state" : state
    }

    fetch('http://localhost:8000/api/card/'+ card_id, {
        method : 'PUT',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}

export const is_visible = (element: any) => {
    console.log(element.style.display);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}