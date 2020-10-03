import React from 'react'
import './productCard.css'

const ProductCard = ({product}) => {
    return(
        <div className='list card shadow'>
            <a className='link'href={product.permalink} target='_blank'>
            <div className="part1 top">
                <img src={product.thumbnail} className='item-img' alt="item" />
            </div>
            <div className="part2 bottom">
                <div className="text-box details">
                    <h4>{product.name = product.title.substring(0, 1).toUpperCase() + product.title.substring(1)}</h4>
                    <p className='text-product' >${product.price} <span>Condición: {product.condition === 'used' ? 'usado' : product.condition === 'new' ? 'nuevo' : product.condition}</span> <span>Disponible: {product.available_quantity}</span></p>
                </div>
            </div>   
            </a>         
        </div>
    )
}

export default ProductCard;