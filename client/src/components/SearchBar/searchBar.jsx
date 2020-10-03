import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {getProducts} from '../../redux/products'
import './searchBar.css'

const SearchBar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSearch = () => {
        dispatch(getProducts(input))
        setInput('')
    }

    const handleChange = (e) => setInput(e.target.value)

    return(

        <form className='form-group' onSubmit={(e) => handleSubmit(e)}>
            <input 
                className='form-control'
                id='search' 
                name='search' 
                type="text" 
                placeholder='Encontra lo que quieras'
                value={input}
                onChange={handleChange}
            />
            <button type='button' className='btn btn-primary' onClick={handleSearch}>buscar</button>
        </form>
    )
}

export default SearchBar;