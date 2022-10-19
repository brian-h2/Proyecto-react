
import '../ItemListContainer/ItemListContainer.css';

import React from 'react'
import { Item } from '../Item/Item';

export const ItemList = (producto) => {

  return (
    <>
    <h2 className='lista-title'>Destacados</h2>
    <div className="lista-productos">
        
        {producto.map(prod => <Item key={prod.id} prod={prod} /> )}
         
    </div> 
    </>
) 
}
 