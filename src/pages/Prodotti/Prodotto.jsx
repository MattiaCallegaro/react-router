import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Prodotto = () => {
    //tramite hooks useParams recupero un oggetto dall'url contenente l'id dei singoli oggetti
    const { id } = useParams();
    //serve ad usare la navigazione programmatica (es.il click sul pulsante fa cambiare pagina)
    const navigate = useNavigate()
    // definisco la variabile di stao che contiene il singolo prodotto
    const [product, setProdotto] = useState({});
    //funzione per recuperare tramite chiamata ajax il singolo prodotto tramite id
    const getProdotto = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProdotto(resp.data)
        })
    }

    //è l'hooks che controlla se qualcosa cambia nelle dipendenze e se cambia esegue il codice
    //mettendo come dipendenza id e recuperandolo con useParams, ogni volta che clicco su un prodotto, mi carica il singolo prodotto con il suo id, quindi da dipendenza id cambia ad ogni clic e quindi esegue il codice di useEffect
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
                    {/* onClick è una prop che gestisce il click */}
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