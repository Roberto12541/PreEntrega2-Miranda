import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext.js"
import { db } from "../../services/firebase"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("")
    const [paterno, setPaterno] = useState("")
    const [materno, setMaterno] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const handleCheckout = (e) => {
        e.preventDefault();
        if (!nombre || !paterno || !materno || !telefono || !email || !email2) {
            setError('Por favor llena todo los datos')
            return;
        }

        if (email !== email2) {
            setError('Correos no coinciden')
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                title: producto.item.title,
                price: producto.item.price,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + (producto.item.price * producto.cantidad), 0),
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            telefono: telefono,
            email: email
        }

        addDoc(collection(db, 'ordenes'), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
                setError("");
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden intentelo mas tarde");
            })
    }

    return (
        <section>
            <h1 className="sr-only">Checkout</h1>
            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-12 md:py-24">
                    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                        <h2 className="text-2xl">Resumen de compra</h2>
                        <div>
                            <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-100">

                                    {carrito.map(producto =>
                                        <li className="flex items-center gap-4 py-4">
                                            <img
                                                src={producto.item.image}
                                                alt=""
                                                className="h-16 w-16 rounded object-fill"
                                            />

                                            <div>
                                                <h3 className="text-sm text-gray-900">{producto.item.title}</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Cantidad:</dt>
                                                        <dd className="inline"> {producto.cantidad}</dd>
                                                    </div>

                                                    <div>
                                                        <dt className="inline">Precio:</dt>
                                                        <dd className="inline"> ${producto.item.price}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </li>
                                        // <div key={producto.item.id}>
                                        //     <p>{producto.item.title} x {producto.cantidad}</p>
                                        //     <p>Precio: $ {producto.item.price}</p>
                                        //     <hr />
                                        // </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4" onSubmit={handleCheckout}>
                            <div className="col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Nombre(s)
                                </label>

                                <input
                                    type="text"
                                    id="Nombre"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={nombre} onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Apellido Paterno
                                </label>

                                <input
                                    type="text"
                                    id="Paterno"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={paterno} onChange={(e) => setPaterno(e.target.value)}
                                />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                    Apellido Materno
                                </label>

                                <input
                                    type="text"
                                    id="Materno"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={materno} onChange={(e) => setMaterno(e.target.value)}
                                />
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                    Telefono
                                </label>

                                <input
                                    type="tel"
                                    id="Telefono"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={telefono} onChange={(e) => setTelefono(e.target.value)}
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                    Correo electronico
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Email2" className="block text-xs font-medium text-gray-700">
                                    Confirma tu correo electronico
                                </label>

                                <input
                                    type="email"
                                    id="email2"
                                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    value={email2} onChange={(e) => setEmail2(e.target.value)}
                                />
                            </div>

                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Terminar Orden
                                </button>
                            </div>
                        </form>
                        {
                            error && <p className="text-center my-4 text-red-700">{error}</p>
                        }
                        {
                            ordenId && (<p className="my-8 flex justify-center w-full text-gray-600">Numero de orden: {ordenId}</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
