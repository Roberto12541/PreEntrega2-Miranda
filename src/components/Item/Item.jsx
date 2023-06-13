import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, title, price, description, category, image, rating }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
      <Link to={`/item/${id}`} className="block relative h-72 rounded overflow-hidden">
        <img alt="ecommerce" className="object-fill object-center w-full h-full block" src={image} />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">${price}</p>
      </div>
    </div>
  )
}

export default Item