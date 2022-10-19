import './ItemListContainer.css'

import { Link, useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import { destacados } from "../../helpers/destacados"
import { Loading } from '../Loading'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = () => {
    
    const [ producto, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    useEffect(()=>{
             {
                destacados() // simulacióon de fetch -> mock  
                .then(res => setProductos(res))
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))
            } 
        }, [])    
    
    return (
        <> 
                { loading ? <h2><Loading/></h2> : ItemList (producto)} 
                
        </>
    )
}
