import React from 'react'
import { NavLink } from 'react-router-dom'

//mi creo una nuova componente per avere il codice di navbar solo qui per ottimizzare 
const MainNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React Router</a>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100 justify-content-center d-flex gap-5">
                        <li className="nav-item ">
                            <button type="button" class="btn btn-primary">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary">
                                <NavLink to="/chi-siamo" className="nav-link" >Chi siamo</NavLink>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-primary">
                                <NavLink to="/prodotti" className="nav-link" >Prodotti</NavLink>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavbar