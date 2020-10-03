import React from 'react'
import { useEffect } from 'react'
import './filterPanel.css'
import {CloseCircleOutlined} from '@ant-design/icons'

const FilterPanel = ({conditions, filter, products, clean}) => {

    useEffect(()=>{

    },[clean])

    const condition = (e) => {
        let counter = products.filter( p => p.condition === e)
        return counter
    }

    const shipping = () => {
        let counter = products.filter( p => p.shipping.free_shipping === true)
        return counter
    }

    return(
        <div className='filter'>
            <label className='label-filter'>
                <b>Filtrar por:</b>
                {!clean && <a className='button-x' type='button' onClick={() => filter('clean')}><CloseCircleOutlined /></a>}
            </label>
            {conditions && conditions.map(c => 
                <a className='condition' type='button' onClick={() => filter(condition(c))}>
                    {c === 'used' ? 'Usados' : c === 'new' ? 'Nuevos' : c} 
                    <span>({condition(c).length})</span>
                </a>
            )}
            {shipping().length > 0 && 
                <a className='condition' style={{marginTop:'10px', borderTop:'1px solid whitesmoke', paddingTop:'5px'}} type='button' onClick={() => filter(shipping)}>
                    Envío gratis 
                    <span>({shipping().length})</span>
                </a>
            }
        </div>
    )
}

export default FilterPanel;