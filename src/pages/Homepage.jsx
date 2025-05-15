import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">React Router</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/about" className="nav-link" >About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contacts" className="nav-link" >Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HomePage