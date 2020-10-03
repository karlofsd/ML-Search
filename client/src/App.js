import React, {useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/searchBar.jsx'
import './App.css';
import Catalogo from './components/Catalogo/catalogo.jsx'
import {useDispatch, useSelector} from 'react-redux'
import FilterPanel from './components/FilterPanel/filterPanel.jsx';
import {setConditions,setProducts} from './redux/products'
import logo from './images/logo.png'

function App() {

  const dispatch = useDispatch()

  const products = useSelector(store => store.stateProducts.products)
  const conditions = useSelector(store  => store.stateProducts.conditions)
 
  const [prods, setProds] = useState([])
  const [page,setPage] = useState(1)
  const [paginated,setPaginated] = useState([])
  const [sortStatus,setSortStatus] = useState(null)

  let limit = 30

  useEffect(() => {
    setProds(products)
    dispatch(setConditions(products))
    setPage(1)                                                        
  },[products,sortStatus]) 

  const handleSort = (e) => {
    console.log('ordenando')
    dispatch(setProducts(e.target.name, products))
    setSortStatus(e.target.name !== 'asc' ? 'asc' : 'desc')
  }


  const paginator = (arg,e) => {
    console.log('paginando')
    let newArr = arg.slice((e-1)*limit,limit*e)
    setPaginated(newArr)
  }

  const handleFilter = (e) => {
    console.log('filtrando')
    let filter = products.filter(f => f.condition === e)
    setProds(filter)
    setPage(1)
  }

  const handlePage = (current) => {
    setPage(current)
  }

  return (
    <div className='container card shadow'>
      <div className='search'>
        <img className='logo' src={logo} alt='logo'/>
        <SearchBar/>
      </div>
      {prods[0] && 
      <div className='content'>
        <FilterPanel conditions={conditions} filter={handleFilter} products={prods}/>
        <Catalogo products={prods} paginator={paginator} page={page} handlePage={handlePage} sort={handleSort} paginated={paginated} sortStatus={sortStatus}/>
      </div>
      }
    </div>
  );
}

export default App;
