import React from 'react'
import { Link } from 'react-router-dom'

import './ItemDetail.css'

export const ItemDetail = (producto) => {


  return (
    <>
    <div className='item-detail'>
      <div className='card-detail'>
        
        <h3>{producto.name}</h3>

        <h2>{producto.description}</h2>
        
        <h4>${producto.price}</h4>
        
        <Link className='text-buy'to={`/carrito`}>
              <button className='boton-compra'>
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Comprar</span>
              </button>
        </Link>  
      </div>  
    </div>
  
    </>
  
  )
}
