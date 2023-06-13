import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">CoderShop</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-6 items-center justify-center">
          <NavLink to={"/"}> Todos los productos </NavLink>
          <NavLink to={"/categoria/electronics"}> Electronicos </NavLink>
          <NavLink to={"/categoria/jewelery"} activeClassName="text-red"> Joyeria </NavLink>
          <NavLink to={"/categoria/men's clothing"} activeClassName="text-red"> Ropa de Hombre </NavLink>
          <NavLink to={"/categoria/women's clothing"} activeClassName="text-red"> Ropa de Mujer </NavLink>
        </nav>
        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar