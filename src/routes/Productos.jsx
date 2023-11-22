import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card";

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
              <Card.Img variant="top" src={product.photo}/>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>{product.price}</Card.Title>
                <Card.Text>{product.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
