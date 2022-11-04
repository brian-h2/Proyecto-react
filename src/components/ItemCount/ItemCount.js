import React, { useState } from 'react'

export const ItemCount = ({stock, init, onAdd}) => {
  const [count, setCount] = useState(init)

  const itemAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const itemRemove = () => {
    if(count > init) {
      setCount(count - 1)
    }
  }

  const itemOnAdd = () => {
    onAdd(count)
  }

  return (
    <div>
            <button class="button-interaction-add-remove"onClick={itemAdd}>+</button>
            
            <span>{count}</span>
           
            <button class="button-interaction-add-remove" onClick={itemRemove}>-</button>
            
            <button class="button-interaction-add-remove" onClick={itemOnAdd}>Agregar al carrito</button>
        </div>

  )

}




