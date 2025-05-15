import React from 'react'
import { NavLink } from 'react-router-dom'

//mi creo una nuova componente per avere il codice di navbar solo qui per ottimizzare 
const MainNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React Router</a>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/chi-siamo" className="nav-link" >Chi siamo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/prodotti" className="nav-link" >Prodotti</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar