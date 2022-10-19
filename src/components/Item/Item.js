import { Link } from 'react-router-dom'
import React from 'react'

export const Item = ({prod}) => {
  return (
    <div className="card" style={{width: '20rem'}}>
       
       <img src={prod.image} className="card-img-top" alt="plantas"/>
                                                        
        <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                 <p className="card-text">{prod.category}</p>
        </div>
        <ul className="list-group list-group-flush"style={{border: 'none'}}>
            <li className="list-group-item" style={{border: '0.3px solid #3E391C'}}>Precio: ${prod.price} </li>
            <li className="list-group-item">Hermosa planta decorativa para inspirar naturaleza dentro de tu casa</li>
        </ul>
        <Link className='text-buy'to={`/detalle/${prod.id}`}>
            <button className='boton-compra'>
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Detalles</span>
            </button>
        </Link>     
       
       </div>
  )
}
