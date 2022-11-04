import React, { useState } from 'react'
import { useContextApp } from '../../context/ContextApp'
import { addDoc, collection, getFirestore,} from "firebase/firestore"
import './carrito.css'

export const Cart = () => {

  const [idOrder, setIdOrder] = useState('')

  console.log(idOrder)

  // Seteamos un estado para manipular los valores de los input

  const [dataForm, setDataForm] = useState({
    name:'',
    phone:'',
    email:'',
    surname:''
  })

  // Pasamos nombres de las functions dentro de contextApp 
  // para utilizarlas en carrito

  const { cartlist, clearCart, totalPrice, deleteProduct} = useContextApp()
  

  // Funcion asincrona para la espera de los datos del form 

  const generateOrder = async (e) => {
    e.preventDefault()
    
    const order = {}

    // Asignamos valores dentro del dataForm como una lista de objetos

    order.buyer = {
        name:dataForm.name,
        phone:dataForm.phone,
        email:dataForm.email,
        surname:dataForm.surname
    }

    // Mapeamos los items generando un nuevo array con id, title y price

    order.products= cartlist.map(prod => {
      const {id, name:title, price} = prod 
      return{id,title,price}
    })

    order.total=totalPrice()

    const db = getFirestore()

    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order)
     .then(resp => setIdOrder(resp.id))
     .catch(err => console.log(err))
     .finally(() => clearCart())

  }



  // Funcion para setear un nuevo estado de los valores que se obtienen

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name] : e.target.value
    })

  }


  return (
    <div className='cart'>     
       <h2 className='title'>Carrito</h2>
      {idOrder && <h3>Orden generada con exito: {idOrder}</h3>}
      <div className='container-cart'>
      {  
        cartlist <= 0 ?
          <div>
            <h2>Usted tiene vacio el carrito, vuelva a inicio</h2>
          </div>
          
        : 
          <>
            <ul>
              {cartlist.map(product => 
                <li className='lista-productos'> 
                    Nombre: {product.name}, Categoría: {product.categoria}, Precio: {product.price}, Cantidad: {product.amount} 
                    <button onClick={() => deleteProduct(product.id)}><span class="button_top">Eliminar producto</span></button>
                </li> )}
            </ul>

          
            <div class="container">
              <form class="row g-3" id="formulario" onSubmit={generateOrder}>
                
                <div class="col-md-6">
                      Ingresa tu nombre: <input  class="form-control" type="text" name="name" value={dataForm.name} onChange={handleChange}/>
                </div>   
                    
                <div class="col-md-6">
                    Email:  <input class="form-control" type="email" name="email" value={dataForm.email} onChange={handleChange}/>
                </div>  
                    
                <div class="col-md-6">    
                      Apellido:  <input class="form-control" type="surname" name="surname" value={dataForm.surname} onChange={handleChange}/>   
                </div>  
                <div class="col-md-6">  
                      Numero de telefono:  <input class="form-control" type="phone"name="phone"value={dataForm.phone} onChange={handleChange}/>
                </div>
                <div class="col-12"> 
                  <div className='buttons'>
                      <button type="submit"><span class="button_top">Generar Orden</span></button>
                      
                      
                      <button onClick={clearCart}><span class="button_top">Vaciar carrito</span></button>
                  </div>
                      <h3 className='price'>Precio total: ${totalPrice()}</h3>
                </div>

              </form>
            </div>
    
          </>
        }
      </div>
    </div>
 
  
  )
}