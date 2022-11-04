import { createContext, useContext, useState } from "react";


const ContextApp = createContext ([])

export const useContextApp = () => useContext(ContextApp)

const CartContextProvider = ({children}) => {

    const [cartlist, setCartList] = useState([])

    //Seteamos el cartList con producto
    
    const addItem = (producto) => {

        // Utilizamos findIndex para que nos devuelva el indice del producto que coincida con el id
        const filter = cartlist.findIndex((prod => producto.id === prod.id))

        // Si el finIndex encuentra -1 seteamos el producto en cartlist por defecto caso contrario 
        // de coincidir la cantidad de productos con el indice que le corresponde los agrupa en un nuevo array actualizando tal estado
        // para evitar que se repita en el carrito

        if ( filter === -1) {
            setCartList([ ...cartlist ,producto])
        } else{
            cartlist[filter].amount += producto.amount 
            setCartList ( [...cartlist])     
        }

    }


    //Metodo de array usando reduce para los elementos de cartlist 

    const totalPrice = () => {
        return cartlist.reduce((acc, prod) => acc + (prod.amount * prod.price), 0)
    }

    const productsAmount = () => {
        return cartlist.reduce((acc, prod) => acc += prod.amount, 0)
    }

    //Limpiado de carrito seteandolo en un array vacio

    const clearCart = () => { 
        setCartList([]) 
    }

    //Con lenght obtenemos el tamañp del carlist en el que se produce filter para eliminar tal producto

    console.log(cartlist)

    const deleteProduct = (id) => { cartlist.length === [''] ? setCartList(cartlist.filter((item) => item.id !== id)) : setCartList(cartlist.filter((item) => item.id !== id))}

    return (
        <ContextApp.Provider value={{
            cartlist,
            addItem,
            totalPrice,
            productsAmount,
            deleteProduct,
            clearCart
        }}>
            {children}
        </ContextApp.Provider>
    )}

export default CartContextProvider