import React from "react";

export const addCard = async (list_id : any , e : any) => {
    if(!e.value){
        return
    }
    const data = {
        list_id : list_id,
        content : e.value
    }

    await fetch('http://localhost:8000/api/card', {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        } 
    })

    return e.value;
}

export const addList = async (e : any) => {
    if(!e.value){
        return
    }
    const data = {
        title : e.value
    }

    await fetch('http://localhost:8000/api/list', {
        method : 'POST',
        body : JSON.stringify(data),
        credentials: 'include',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}

export const delCard = async (card_id : string) => {
    await fetch('http://localhost:8000/api/card/'+ card_id, {
        method : 'delete',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}

export const delList = async (list_id : string) => {
    await fetch('http://localhost:8000/api/list/'+ list_id, {
        method : 'delete',
        headers : {
            'Content-Type' : 'application/json'
        }
    })
}

export const updateCard = async (card_id : string, state : number) => {
    state = state  == 1 ? 2 : 1;
    console.log(state)
    const data = { 
        "state" : state
    }

    await fetch('http://localhost:8000/api/card/'+ card_id, {
        method : 'PUT',
        body : JSON.stringify(data),
        headers : {
            'Content-Type' : 'application/json'
        }
        
    })
}

export const is_visible = (element: any) => {
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}