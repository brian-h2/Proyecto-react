import React from 'react'
import { useEffect, useState} from "react"
import { useParams,Link } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { gfetch } from '../../helpers/gfetch'
export const ItemDetailContainer = () => {
  
  const {idProducto} = useParams()
  const [producto, setProductos] = useState({})
  const [loading, setLoading ] = useState(true)

  useEffect(()=>{
    gfetch()  
      .then(res => setProductos(res.find(producto => producto.id===idProducto)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [])  
  
    return (
    <>
    {loading
      ?
      <h3>Cargando....</h3>
      :
      
      ItemDetail(producto)

    }
    </>
    )
  
}