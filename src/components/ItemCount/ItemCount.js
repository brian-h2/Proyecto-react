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
            <button onClick={itemAdd}>+</button>
            <br />
            <p>{count}</p>
            <br />
            <button onClick={itemRemove}>-</button>
            <br />
            <button onClick={itemOnAdd}>Agregar al carrito</button>
        </div>

  )

}




