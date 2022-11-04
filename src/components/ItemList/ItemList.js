
import '../ItemListContainer/ItemListContainer.css';

import React from 'react'
import { Item } from '../Item/Item';

export const ItemList = ({product}) => {

  return (
    <>
    <h2 className='lista-title'></h2>
    <div class="row row-cols-1 row-cols-md-5 g-3" style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',justifyContent:'center', margin:'0px'}}>

        {product.map(prod => <Item key={prod.id} prod={prod} /> )}
         
    </div>
    </>
) 
}
 