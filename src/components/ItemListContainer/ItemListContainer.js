import './ItemListContainer.css'
import { Ring } from '@uiball/loaders'

import { Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import { gfetch } from "../../helpers/gfetch"



export const ItemListContainer = () => {
    const [ producto, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    
    useEffect(()=>{
        gfetch() // simulacióon de fetch -> mock  
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    
    return (
        <>
            <h2 className='lista-title'>Interior</h2>
            <div className="lista-productos">
                { loading ? 
                    <h2>
                        <Ring 
                     size={40}
                     lineWeight={5}
                     speed={2} 
                     color="black" 
                    /></h2> 

                    :

                    producto.map(prod => <div 
                                                    key={prod.id}
                                                    className="card" 
                                                    style={{
                                                        width: '20rem'
                                                    }}
                                                >
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
                
                
            </div>
        </>
    )
}
/*{                                    
    productos2.map(prod => <div
                                      key={prod.id}
                                      className="card" 
                                      style={{
                                          width: '20rem'
                                      }}
                                  >
                                      <img src={prod.image} className="card-img-top" alt="plantas"/>
                                      
                                      <div className="card-body">
                                          <h5 className="card-title">{prod.name}</h5>
                                          <p className="card-text">{prod.category}</p>
                                      </div>
                                          <ul className="list-group list-group-flush">
                                              <li className="list-group-item">Precio: ${prod.price} </li>
                                              <li className="list-group-item">Hermosa planta decorativa para inspirar naturaleza dentro de tu casa</li>
                                          </ul>
                                  </div>   
      )
}*/