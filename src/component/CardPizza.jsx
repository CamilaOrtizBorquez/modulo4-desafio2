import React from 'react'
import ICON_CARRO from '../assets/img/carrito.png'
import ICON_PIZZA from '../assets/img/icon-pizza.png'
import ICON_EYES from '../assets/img/eyes.png'
import { formatearValor } from '../utils/formatearMiles'

const CardPizza = (props) => {

  return (
      <div className="cards col-4">
        <div className="card px-0">
          <img src= {props.img} className="card-img-top" alt="..."/>
          <div className="card-body p-0">
            <h5 className="card_title"> Pizza {props.name} </h5>
            <p className="card_subtitle text-center"> Ingredientes:</p>
            <p className="card_ingredients text-center"> 
              <img className="icon_pizza" src={ ICON_PIZZA } alt="icono de pizza"/> 
              {props.ingredients.join(", ")} 
            </p>
            <p className="card_price text-center mb-4"> Precio: $ {formatearValor(props.price)}</p>
            <div className="card_buttons mb-3">
              <button type="button" className="btn btn-outline-dark">
                Ver más
                <img className="icon_eyes" src={ ICON_EYES } alt="icono de ojos"/> 
                </button>
              <button type="button" className="btn btn-dark">Añadir
                <img className="icon_carro p-0" src={ ICON_CARRO } alt="icono de carrito"/>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardPizza
