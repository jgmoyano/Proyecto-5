import React from 'react'
import {PizzaCard} from '../components/PizzaCard'


export const Menu = () => {
  const pizzas = [
    {
      id: 1,
      title: "PIZZA RICOTA",
      title2: "$9.990",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      description: "Base, Salsa Pomodoro, Mozzarella, Ricota y Rucula",
    },
    {
      id: 2,
      title: "PIZZA MARGHERITA",
      title2: "$8.990",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      description: "Base, Salsa Pomodoro, Mozzarella, Albahaca",
    },
    {
      id: 3,
      title: "PIZZA PEPPERONI",
      title2: "$7.990",
      image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      description: "Base, Salsa Pomodoro, Mozzarella, Pepperoni",
    },
    {
      id: 4,
      title: "PIZZA NATURISTA",
      title2: "$8.990",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      description: "Base, Salsa Pomodoro, Mozzarella, Pepperonata, Cebolla",
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
