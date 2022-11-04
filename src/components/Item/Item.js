import './item.css'

import { Link } from 'react-router-dom'
import React from 'react'

export const Item = ({prod}) => {
  return (
    <div class="col">
    <div className="card h-40 w-100" style={{border:'none', textAlign:'left'}}>
       
       <img src={prod.image} className="card-img-top" alt="plantas" style={{width: '100%', height: '300px', border:'1px', borderRadius:'20px'}}/>
                                                        
        <div className="card-body">
                <h5 className="card-title" style={{fontSize:'30px',fontWeight:'700', color: '#3e391c'}} >{prod.name}</h5>
                <li className="list-group-item" style={{fontSize:'25px', fontWeight:'600', color: '#3e391c'}}>{prod.categoria}</li>
                <li className="list-group-item" style={{fontSize:'25px', fontWeight:'600', color: '#3e391c'}}>${prod.price}</li>
        </div>
        <Link className='text-buy'to={`/detalle/${prod.id}`}>
            <button className='boton-compra'>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">Detalles</span>
            </button>
        </Link>     
       
       </div>
    </div>
  )
}
