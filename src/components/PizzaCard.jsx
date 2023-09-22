import React from "react";
import Card from "react-bootstrap/Card";

export const PizzaCard = ({ title, title2, image, description }) => {
  return (
    <Card
      bg="dark"
      text="light"
      style={{ width: "18rem" }}
      className="mb-2 mt-3 mb-5"
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>{title2}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
