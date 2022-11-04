import './ItemListContainer.css'

import { useEffect, useState } from "react"
import { Loading } from '../Loading'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { Header } from '../../Pages/HeaderWeb/Header'


export const ItemListContainer = () => {
    
    const [ product, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        if(idCategory) {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos');
    
            const queryFilter = query(queryCollection, where('categoria', '==', idCategory))
    
            getDocs(queryFilter).then((resp) => {
                setProducts(resp.docs.map((prod)=>({id: prod.id, ...prod.data()})));
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'productos');
    
            getDocs(queryCollection).then((resp) => {
                setProducts(resp.docs.map((prod)=>({id: prod.id, ...prod.data()})));
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    },[idCategory])
 
    
    return (
        <> 

        <Header/>
        
        <div className='productos'>

            { loading ? <h2><Loading/></h2> :  <ItemList product={product}/> } 
                
        </div>
                
        </>
    )
}
