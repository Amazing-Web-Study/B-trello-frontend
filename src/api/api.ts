import { useReducer, useEffect } from 'react'

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

function useFetch(callback:any, deps:any = []) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: [],
        error: ''
    })

    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        try {
            const response = await callback()
            let data = await response.json()
            dispatch({type: 'SUCCESS', data: data})
        } catch (e) {
            dispatch({type: 'ERROR', error: '에러 발생'})
        }
    }

    useEffect(() => {
        fetchData()
    }, deps)

    return [state, fetchData]
}

export default useFetch