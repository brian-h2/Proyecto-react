import { createContext, useContext, useState } from "react";

const ContextApp = createContext ([])

export const useContextApp = () => useContext(ContextApp)

const CartContextProvider = ({children}) => {

    const [cartlist, setCartList] = useState([])

    const vaciarCarrito = () => {
        setCartList([])
    }
    
    const addItem = (producto) => {
        setCartList([ ...cartlist ,producto])
    }

    return (
        <ContextApp.Provider value={{
            cartlist,
            addItem,
            vaciarCarrito
        }}>
            {children}
        </ContextApp.Provider>


    )}

export default CartContextProvider