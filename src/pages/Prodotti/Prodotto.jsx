import React from 'react'
import { useParams } from 'react-router-dom'

const Prodotto = () => {

    const { id } = useParams();


    return (
        <h1>dettaglio</h1>
    )
}

export default Prodotto