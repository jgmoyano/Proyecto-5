import React from 'react'
import {PizzaCard} from '../components/PizzaCard'


export const Productos = () => {
  const pizzas = [
    {
      id: 1,
      title: "presa 1",
      title2: "$3.990",
      image: "https://bagoanegra.com/wp-content/uploads/2020/08/Bagoa-negra-barocka-3.jpg",
      description: "buen agarre",
    },
    {
      id: 2,
      title: "presa 2",
      title2: "$4.990",
      image: "https://www.bloqes.es/wp-content/uploads/2019/04/MI.0DA.jpg",
      description: "buena forma",
    },
    {
      id: 3,
      title: "presa 3",
      title2: "$3.990",
      image: "https://www.revolutionclimbing.com.ar/img/articulos/volumen_tenaci_m3_imagen1.jpg",
      description: "regleta",
    },
    {
      id: 4,
      title: "presa 4",
      title2: "$4.990",
      image: "https://www.surfacesforclimbing.com/shop/includes/cache/_CACHE-ee5dbf728f7cf48da06615a25890f821_440x0.jpg",
      description: "sloper",
    },
  ];

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <PizzaCard
                title={pizza.title}
                title2={pizza.title2}
                image={pizza.image}
                description={pizza.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
