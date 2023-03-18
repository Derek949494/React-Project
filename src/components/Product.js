import React from 'react'

export default function Product(props) {
  return (
      <div className='card'>
            <img 
            className='product-image' 
            src={props.url}
            alt='latte' 
            />
            <h2>{props.name}</h2>
            <p className='price'>{props.price}</p>
            <p>{props.description}</p>
            <p>
                <button className='product-button'>add to cart</button>
            </p>
      </div>  
      
  )
}


