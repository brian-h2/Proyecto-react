//Este componente es creado con la finalidad de filtrar por categorias los productos

import { Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { gfetch } from "../../helpers/gfetch"
import { Loading } from '../Loading'


import React from 'react'

export const ItemListCategory = () => {

    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const {idCategoria} = useParams()
    
    useEffect(()=>{
        if(idCategoria) {
            gfetch() // simulacióon de fetch -> mock   
            .then(res => setProductos(res.filter(producto => producto.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))   
        } else {
                gfetch() // simulacióon de fetch -> mock  
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
            } 
        }, [idCategoria])    
    

  return (
    <>
    <h2 className='lista-title'>Categorias</h2>
    <div className="lista-productos">
        { loading 
            ? 
            
            <h2>
            <Loading/>
            </h2> 
            
            :
            
            productos.map(prod => <div 
                                            key={prod.id}
                                            className="card" 
                                            style={{
                                                width: '20rem'
                                            }}
                                        >
                                                <img src={prod.image} className="card-img-top" alt="plantas"/>
                                                
                                                <div className="card-body">
                                                    <h5 className="card-title">{prod.name}</h5>
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
        
        
            </div>
        </>
  )
}

