import { useState} from "react"
import { Link } from 'react-router-dom'
import { useContextApp } from "../../context/ContextApp"
import { ItemCount } from '../ItemCount/ItemCount'

import './ItemDetail.css'

export const ItemDetail = ({producto}) => {

  const [contador, setIsCount] = useState(true)
  const { addItem  } = useContextApp()

  
  
  const onAdd = (cantidad) => {
    console.log('onAdd', cantidad)
    addItem( { ...producto, cantidad } )
    setIsCount(false)
  }

  return (
    <>
    <div className='item-detail'>
      <div className='card-image'>

        <img className='card-image-plant' src={producto.image}></img>

      </div>
      <div className='card-detail'>
        
        <h3 className='card-detail-name'>{producto.name}</h3>
        
        <h4 className='card-detail-price'>$ {producto.price}</h4>

        <h2 className='card-detail-description'>{producto.description}</h2>
        
        
        <button className='boton-compra' onClick={()=> onAdd()}>
            <span class="transition"></span>
            <span class="gradient"></span>
            <span class="label">Agregar al carrito</span>
        </button>
        
      </div>
      
      <div className='botones-interaccion'>
        {
          contador ? 
          <ItemCount onAdd={onAdd} stock={producto.stock} init={1}/>
          :
          <div>
              <Link to="/cart">
                <button>Terminar Compra</button>
              </Link>
              <Link to="/">
                <button>Seguir Comprando</button>
              </Link>

          </div>
        }
        
      </div>  
    </div>
  
    </>
  
  )
}
//<Link className='text-buy'to={`/carrito`}></Link>