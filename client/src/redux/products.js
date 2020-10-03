import axios from 'axios'

const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const SET_PRODUCTS = 'SET_PRODUCTS'
const CONDITIONS = 'CONDITIONS'

const initialState = {
    products: [],
    product: {},
    conditions:[]
}

const productsReducer = (state = initialState,action) => {
    switch (action.type){
        case SEARCH_PRODUCTS:
            return {
                products: action.payload
            }
        case SET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case CONDITIONS:
            return {
                ...state,
                conditions: action.payload
            }
        default:
            return {...state}
    }
}

export const getProducts = (input) => async(dispatch) => {
    try{
        const {data} = await axios.get(`http://localhost:3001/api/search?query=${input}`)
        dispatch({
            type: SEARCH_PRODUCTS,
            payload: data
        })
    }catch(err){
        console.log(err)
    }
}

export const setProducts = (arg,arr) => (dispatch) => {
    let sort;
    if(arg === 'asc'){
        sort = arr.sort((a,b) => a.price - b.price)
        console.log(arg)
    }else {
        sort = arr.sort((a,b) => b.price - a.price)
        console.log(arg)
    }
    console.log(sort[0].price)
    dispatch({
        type: SET_PRODUCTS,
        payload: sort
    })
}

export const setConditions = (arg) => (dispatch) => {
    let run = arg.map(p => p.condition)
    const data = [...new Set(run)]
    dispatch({
        type: CONDITIONS,
        payload: data
    })
}

export const setProduct = (id) => (dispatch) => {
    try{
        const product = initialState.products.find(e => e.id === id)
        dispatch({
            type: GET_PRODUCT,
            payload: product
        })
    }catch(err){
        console.log(err)
    }
}

export default productsReducer;