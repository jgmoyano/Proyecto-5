import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import React from 'react'

export const Pizzas = () => {


  const pizzas = [
    {
      id: 1,
      title: "pizza 1",
      title2: "precio 3434",
      image: image1,
      descrption: "blablabla",
    },
    {
      id: 2,
      title: "Pizza 2",
      title2: "precio 3434",
      image: image2,
      descrption: "blablabla",
    },
    {
      id: 3,
      title: "Pizza 3",
      title2: "precio 3434",
      image: image3,
      descrption: "blablabla",
    },
    {
      id: 4,
      title: "Pizza 4",
      title2: "precio 3434",
      image: image4,
      descrption: "blablabla",
    },
  ];

  return (
    <div>Pizzas</div>
  )
}