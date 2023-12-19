import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import "./ProductosDetalle.css"
import { Link } from 'react-router-dom';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export const ProductosDetalle = () => {
    const { productoDetalleId } = useParams()
    const [products, setProducts] = useState([]);
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago("TEST-00a2c0c8-e51b-40ff-b712-6c2ad0439043")

    useEffect(() => {
        async function getProducts() {
            const response = await axios(`${import.meta.env.VITE_BACKEND_URL}/product`);
            setProducts(response.data.detail);
        }
        getProducts();
    }, [])



    const producto = products.find(product => product._id === productoDetalleId)
    if (!producto) return null


    const createPreference = async () => {
        try {
            const response = await axios.post(`https://api-autentication.onrender.com/create_preference`, {
                description: producto.title,
                price: producto.price,
                quantity: 1,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };


    return (
        <>
            <div className='container-card'>
                <Card
                    bg="dark"
                    id="detalle-card"
                    text="light"
                    className="mb-5 mt-3 m-5 p-0"

                >
                    <div id='prod-row' className='row'>
                        <div className='col'>
                            <Card.Img variant="top" src={producto.photo} />
                        </div>
                        <div className='col'>
                            <Card.Body>
                                <Card.Title id="titulo">{producto.title}</Card.Title>
                                <Card.Text id="body">{producto.body}</Card.Text>
                                <Card.Title id="valor">Valor: ${producto.price}</Card.Title>
                                <div id="boton" >
                                    <button id="elboton" onClick={handleBuy} type="button" className="btn btn-light">Comprar Producto</button>
                                    <div>
                                        {preferenceId && <Wallet initialization={{ preferenceId }} />}
                                    </div>
                                </div>
                                <Link className="nav-link text-light" to="/Proyecto-5/productos"><h6>Volver a Productos</h6></Link>
                            </Card.Body>
                        </div>
                    </div>
                </Card >
            </div>
        </>
    )
}
