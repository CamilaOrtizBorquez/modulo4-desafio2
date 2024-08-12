import React from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import PIZZA_ESPAÑOLA from '../assets/img/pizza-española.jpg'
import PIZZA_PEPERONI from '../assets/img/pizza-peperoni.jpg'
import PIZZA_NAPOLITANA from '../assets/img/pizza-napolitana.jpg'

export const Home = () => {
  return (
    <div>
      <Header></Header>

      <div className="container_cards py-5">
        <div className="container_cards-pizzas row mt-4">
          <CardPizza
            name="Napolitana"
            price={6950}
            ingredients={["mozzarella", "tomate" , "jamón" ,"orégano "]}
            img={ PIZZA_NAPOLITANA }
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano" , "provolone"]}
            img={ PIZZA_ESPAÑOLA }
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img= { PIZZA_PEPERONI}
          />
        </div>

      </div>

    </div>
  )
}
