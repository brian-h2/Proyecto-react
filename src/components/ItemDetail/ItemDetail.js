import { useState} from "react"
import { Link } from 'react-router-dom'
import { useContextApp } from "../../context/ContextApp"
import { ItemCount } from '../ItemCount/ItemCount'
import '../../Pages/Carrito/carrito.css'

import './ItemDetail.css'

export const ItemDetail = ({product}) => {

  const [counter, setIsCount] = useState(true)
  const { addItem  } = useContextApp()

  const onAdd = (amount) => {
    addItem( { ...product, amount } )
    setIsCount(false)
  }

  return (
    <>

    <div className='item-detail'>
      <div className='card-image'>

        <img className='card-image-plant' src={product.image}></img>

      </div>
      <div className='card-detail'>
        
        <h3 className='card-detail-name'>{product.name}</h3>
        
        <h4 className='card-detail-price'>$ {product.price}</h4>

        <h2 className='card-detail-description'>{product.description}</h2>
        
        
      </div>
      
      <div className='botones-interaccion'>
        {
          counter ? <ItemCount onAdd={onAdd} stock={product.stock} init={0}/>
          :
          <div>
              <Link to="/cart">
                <button class="button-interaction-buy"><span class="button_top">Terminar Compra</span></button>
              </Link>
              <Link to="/">
                <button class="button-interaction-buy"><span class="button_top">Seguir Comprando</span></button>
              </Link>

          </div>
        }
        
      </div>  
    </div>
  
    </>
  
  )
}
