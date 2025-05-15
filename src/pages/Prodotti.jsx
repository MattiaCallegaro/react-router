import React, { useEffect, useState } from 'react'
import MainNavbar from '../components/MainNavbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Prodotti = () => {

    const [prodotti, setProdotti] = useState([])

    const getProdotti = () => {
        const axios = require('axios');
        axios.get('https://fakestoreapi.com/products').then((resp) => {
            setProdotti(resp.data)
        })
    }

    useEffect(() => {
        getProdotti()
    }, [])


    return (
        <>
            < MainNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Lista prodotti</h1>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>

        </>
    )
}

export default Prodotti