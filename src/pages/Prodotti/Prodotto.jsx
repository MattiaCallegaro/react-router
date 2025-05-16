import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Prodotto = () => {

    const { id } = useParams();

    const navigate = useNavigate()
    // definisco la variabile di stao che contiene il singolo prodotto
    const [product, setProdotto] = useState({});
    //funzione per recuperare tramite chiamata ajax il singolo prodotto tramite id
    const getProdotto = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProdotto(resp.data)
        })
    }


    useEffect(() => {
        getProdotto();
    }, [id]);

    return (
        <>
            <div>
                <h1>Dettaglio</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-image-top mx-auto">
                                <img src={product.image} alt="" className='img-fluid' style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                            </div>
                            <div className="text-center">
                                <h1>{product.title}</h1>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-3">
                    <button type="button" className="btn btn-primary" onClick={() => {
                        navigate(`/products/${parseInt(id) - 1}`)
                    }} disabled={id == 1}
                    > Indietro</button>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        navigate(`/products/${parseInt(id) + 1}`)
                    }} disabled={id == 20}
                    > Avanti</button>
                </div>
            </div>

        </>
    )
}

export default Prodotto