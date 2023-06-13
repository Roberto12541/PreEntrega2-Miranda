import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext.js";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const { cantidadTotal } = useContext(CarritoContext);
    const { total } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <section>
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-3xl">
                            <header className="text-center">
                                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Carrito de compras</h1>
                            </header>

                            <div className="mt-8 flex items-center flex-col gap-12">
                                <img src="https://i.ibb.co/kXVtgs3/shoppinh-Cart-Empty.png" alt="" srcset="" className="w-64" />
                                <h2 className="text-xl text-gray-600">No hay productos en el carrito</h2>
                                <Link to={'/'} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Seguir comprando</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Carrito de compras</h1>
                    </header>

                    <div className="mt-8">
                        <ul className="space-y-4">

                            {
                                carrito.map(producto => <CartItem key={producto.id} {...producto} />)
                            }

                        </ul>

                        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                            <div className="w-screen max-w-lg space-y-4">
                                <dl className="space-y-0.5 text-sm text-gray-700">
                                    <div className="flex justify-between !text-base font-medium">
                                        <dt>Total</dt>
                                        <dd>$ {total}</dd>
                                    </div>
                                </dl>

                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => vaciarCarrito()}
                                        className="block rounded bg-red-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Vaciar Carrito
                                    </button>
                                    <Link
                                        to={'/checkout'}
                                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Finalizar Compra
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
