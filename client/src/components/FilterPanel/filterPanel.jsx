import React from 'react'
import './filterPanel.css'

const FilterPanel = ({conditions, filter, products}) => {

    const quantity = (e) => {
        let counter = products.filter( p => p.condition === e)
        return counter.length
    }

    return(
        <div className='filter'>
            <label className='label-filter' style={{fontSize:'1.2em'}}><b>Filtrar por:</b></label>
    {conditions && conditions.map(c => <a className='condition' type='button' onClick={() => filter(c)}>{c === 'used' ? 'Usados' : c === 'new' ? 'Nuevos' : c} <span>({quantity(c)})</span></a>)}
        </div>
    )
}

export default FilterPanel;