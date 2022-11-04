import { doc, getDoc, getFirestore} from 'firebase/firestore'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Loading } from '../Loading'


export const ItemDetailContainer = () => {
   
  const [product, setProducts] = useState({})
  const [loading, setLoading ] = useState(true)
  const { idProduct } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', idProduct)
    getDoc(queryDoc)
    .then(resp => setProducts( {id: resp.id, ...resp.data()} ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])
  
  return (
    
      loading ? <Loading/> : <ItemDetail product={product}/>

  )
  
}