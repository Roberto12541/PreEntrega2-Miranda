import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext.js'
import { useContext } from 'react'
import './ItemDetail.css'

const ItemDetail = ({ id, title, price, description, category, image, stock }) => {

  const [cantidad, setCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setCantidad(cantidad);
    const item = { id, title, price, description, category, image, stock };
    agregarProducto(item, cantidad);
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-12 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
          <img alt="ecommerce" className="lg:w-1/2 w-full h-auto object-cover object-center rounded" src={image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
            <p className="leading-relaxed">{description}</p>
            <div className="flex my-4 items-center">
              <p className='text-3xl'>${price}</p>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 justify-between">

              {
                cantidad > 0 ?
                  (<Link to={'/cart'} className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'> Finalizar Compra </Link>) :
                  (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail