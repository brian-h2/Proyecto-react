import './Header.css'
import React from 'react'

export const Header = () => {
    return (
    <>
        <div className="header">
            <h1 className="header-title">Plantas reales y hermosas en la puerta de tu casa</h1>
            <button className="header-button">Ver la tienda</button>
            <img src="/assets/Header/down-arrow.png" alt="flecha" className="header-arrow"></img>
        </div>

    </>
    )
}
