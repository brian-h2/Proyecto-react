import React from 'react'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { gfetch } from '../../helpers/gfetch'
import { Loading } from '../Loading'

export const ItemDetailContainer = () => {
   
  const [producto, setProductos] = useState({})
  const [loading, setLoading ] = useState(true)
  const {idProducto} = useParams()
  
  useEffect(()=>{
    gfetch(idProducto)  
      .then(res => setProductos(res.find(producto => producto.id === idProducto)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }, [])  
  
    return (
    
    loading ? <Loading/> : <ItemDetail producto={producto}/>

    )
  
}