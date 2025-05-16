

import axios from 'axios'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


const Prodotti = () => {
    //products è lo stato, setProducts è la funzione per aggiornarlo e useState([]) è il valore iniziale 
    const [products, setProducts] = useState([])
    //mi faccio la chiamata ajax direttamente all'apertuta della pagina
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((resp) => {
            setProducts(resp.data)
        })

    }, [])


    return (
        <>

            <div className="container">
                <div className="row ">
                    <div className="col-12 my-4 ">
                        <h1>Lista prodotti</h1>
                    </div>
                </div>
                <div className="row g-4  ">
                    {products.map((product) => {
                        return (

                            <div className="col-12 col-md-4  " key={product.id}>
                                <NavLink className={"prodotti-link"} to={`/products/${product.id}`}>
                                    <div className="card h-100 text-center border border-secondary">
                                        <div className="card-image-top mx-auto">
                                            <img src={product.image} alt="" className='img-fluid' style={{ height: '150px', width: 'auto', objectFit: 'contain' }} />
                                        </div>
                                        <div className="card-body">
                                            <h3>{product.title}</h3>
                                            <p>{product.category}</p>
                                            <p>{product.description}</p>
                                            <p>{product.price} $</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                        )
                    })}

                </div>
            </div>

        </>
    )
}

export default Prodotti