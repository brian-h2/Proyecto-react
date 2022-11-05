import './NavBar.css'
import React from 'react'
import { CartWidget }  from '../ItemWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContextApp } from '../../../context/ContextApp'


export const NavBar = () => {

  const {productsAmount} = useContextApp()

  return (
    <>
     <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <a className="navbar-brand"><Link className="link" to="/">Planty</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent"/>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link"><Link className="link" to={`/categoria/Interior`}>Interiores</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link className="link" to="/categoria/Exterior">Exteriores</Link></a>
        </li>
    </ul>

    <li className="nav-item">
        <Link className="link" to="/cart"><CartWidget/></Link><span className="cart-counter">{productsAmount()}</span>
    </li>
    </div>
    </nav>
    </>

  )
}
