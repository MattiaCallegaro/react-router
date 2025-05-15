
import MainNavbar from '../components/MainNavbar'
import axios from 'axios'
import { useState, useEffect } from 'react'

//mi faccio la chiamata ajax direttamente all'apertuta della pagina
useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((resp) => {
        setProducts(resp.data)
    })

}, [])


return (
    <>
        <MainNavbar />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Lista prodotti</h1>
                </div>
            </div>
            <div className="row">
                {products.map((product) => {
                    return (
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <div className="card-image-top">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h3>{product.title}</h3>
                                    <p>{product.category}</p>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    </>
)
}

export default Prodotti