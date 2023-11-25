import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";
import "./Productos.css"
import { Link } from 'react-router-dom';

export const Productos = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await axios(`${import.meta.env.VITE_BACKEND_URL}/product`);
      setProducts(response.data.detail);
    }
    getProducts();
  }, [])

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {products.map(product => (
            <Card
              bg="dark"
              text="light"
              style={{ width: "20rem" }}
              className="mb-5 mt-3 m-5 p-0"
              key={product._id}
            >
              <Link style={{ textDecoration: "none" }} to={`/Proyecto-5/Productos/${product._id}`}>
                <Card.Img variant="top" src={product.photo} />
              </Link>
              <Card.Body>
                <Link style={{ textDecoration: "none" }} to={`/Proyecto-5/Productos/${product._id}`}>
                  <Card.Title id="titulo">{product.title}</Card.Title>
                </Link>
                <Card.Title id="valor">Valor: ${product.price}</Card.Title>
                <div id="boton" >
                  <Link style={{ textDecoration: "none" }} to={`/Proyecto-5/Productos/${product._id}`}>
                    <button type="button" className="btn btn-light">Detalles</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
